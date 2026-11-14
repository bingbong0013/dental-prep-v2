import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { DENTAL_COLLEGE_SUBJECTS as subjects } from '../data/dentalCollegeData.js';
import { correctChoiceIndices, gradeQuestion } from '../question-grading.js';
const root = new URL('../', import.meta.url);
const read = (path) => fs.readFileSync(new URL(path, root), 'utf8');
const report = JSON.parse(read('audit/question-recovery-20261114.json'));
const images = JSON.parse(read('audit/question-image-assets.json'));
const questions = subjects.flatMap(s => s.concepts.flatMap(c => c.pastQuestions));
const byId = new Map(questions.map(q => [q.id, q]));
const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');
const source = read('app.js').replace(/^import .*;\n/gm, '').split('// Global header & keyboard events')[0];
function app(saved = null) {
  const context = vm.createContext({ INITIAL_SUBJECTS: subjects, structuredClone, correctChoiceIndices, gradeQuestion,
    localStorage: {getItem: () => saved && JSON.stringify(saved), setItem() {}},
    document: { querySelectorAll: () => [], getElementById: () => null } });
  vm.runInContext(source, context);
  return { context, run: (code) => vm.runInContext(code, context) };
}

test('all 265 existing IDs, text, choices, links and curated corrections are preserved', () => {
  assert.equal(questions.length, 265); assert.equal(byId.size, 265);
  assert.deepEqual([...byId.keys()].sort(), report.questions.map(r => r.id).sort());
  for (const row of report.questions) {
    const q = byId.get(row.id);
    for (const [key, expected] of Object.entries(row.preservedContentHashes)) {
      assert.equal(hash(JSON.stringify(q[key])), expected, `${q.id}: ${key}`);
    }
  }
  assert.equal(byId.get('bio-final-24-15').acceptedAnswerIndices, undefined);
  for (const id of ['chem-final-24-48', 'chem-final-23-86', 'chem-final-25-60']) {
    assert.equal(byId.get(id).uncertain, undefined);
    assert.equal(byId.get(id).answerIndex, 1);
  }
});

test('all 14 image questions resolve to intact, local image assets', () => {
  const withImages = questions.filter(q => q.image || q.figure);
  assert.equal(withImages.length, 14); assert.equal(images.length, 13);
  const paths = new Set(images.map(i => i.path));
  for (const q of withImages) assert(paths.has(q.image || q.figure), q.id);
  for (const item of images) {
    const bytes = fs.readFileSync(new URL(item.path, root));
    assert.equal(bytes.length, item.bytes); assert.equal(hash(bytes), item.sha256);
    assert(item.width > 0 && item.height > 0);
    assert(['PNG', 'WEBP'].includes(item.format));
  }
});

test('alternative single-choice answers and exact multi-select sets grade correctly', () => {
  const alternatives = questions.filter(q => q.acceptedAnswerIndices);
  assert.equal(alternatives.length, 4);
  for (const q of alternatives) {
    for (let i = 0; i < q.choices.length; i++) {
      assert.equal(gradeQuestion(q, {selectedIdx: i}), q.acceptedAnswerIndices.includes(i), `${q.id}:${i}`);
    }
  }
  for (const q of questions.filter(q => q.qType === 'multi')) {
    assert(gradeQuestion(q, {selectedIndices: [...q.answerIndices].reverse()}));
    assert.equal(gradeQuestion(q, {selectedIndices: q.answerIndices.slice(1)}), false);
  }
  for (const q of questions.filter(q => q.uncertain)) {
    for (let i = 0; i < q.choices.length; i++) assert.equal(gradeQuestion(q, {selectedIdx: i}), null);
    assert.deepEqual(correctChoiceIndices(q), []);
  }
});

test('all question cards render in workspace and review, including images and notices', () => {
  const {context, run} = app();
  for (const view of ['workspace', 'review']) {
    run(`state.view = '${view}'`);
    for (const q of questions) {
      context.q = q;
      const html = run(`renderQuestionCard(q, q.source, '')`);
      assert(html.includes(q.id));
      if (q.figure || q.image) {
        assert(html.includes(`<img src="${q.image || q.figure}"`), q.id);
        assert(html.includes('target="_blank"'), q.id);
      }
      if (q.uncertain) assert(html.includes('검토 보류 · 자동 채점 제외'), q.id);
      assert(!html.includes('원본 검토 기록'), 'no answer disclosure before submission');
    }
  }
});

test('saved false negatives and uncertain answers are regraded without losing favorites', () => {
  const {run} = app({solvedQuestions: {
    'bio-final-25-25': {selectedIdx: 0, isCorrect: false},
    'signal-final-22-4': {selectedIdx: 2, isCorrect: false},
  }, favorites: {'bio-final-25-25': true}});
  assert.equal(run("state.solvedQuestions['bio-final-25-25'].isCorrect"), true);
  assert.equal(run("state.solvedQuestions['signal-final-22-4'].isCorrect"), null);
  assert.equal(run("state.favorites['bio-final-25-25']"), true);
  assert.equal(run("matchesReviewFilter({id:'signal-final-22-4'}, 'wrong')"), false);
});

test('review remains unanswered initially and corrected answers stay until refresh', () => {
  const {run} = app({solvedQuestions: {'bio-final-25-25': {selectedIdx: 1, isCorrect: false}}});
  run("state.view = 'review'");
  assert.equal(run("getQuestionState().solvedQuestions['bio-final-25-25']"), undefined);
  run("recordAnswer('bio-final-25-25', {selectedIdx: 0, isCorrect: false})");
  assert.equal(run("getQuestionState().solvedQuestions['bio-final-25-25'].isCorrect"), true);
  assert.equal(run("matchesReviewFilter({id:'bio-final-25-25'}, 'wrong')"), true);
  run('resetReviewSession()');
  assert.equal(run("matchesReviewFilter({id:'bio-final-25-25'}, 'wrong')"), false);
});

test('uncertain feedback never labels the selected choice as wrong', () => {
  const {run} = app();
  run("recordAnswer('signal-final-22-4', {selectedIdx: 2, isCorrect: false})");
  const html = run("renderQuestionCard(findQuestionContext('signal-final-22-4').q, '', '')");
  assert(html.includes('검토 보류 · 자동 채점 제외'));
  assert(html.includes('원본 검토 기록'));
  assert(!html.includes('✕ 오답 / 복습 필요'));
  assert(!html.includes('border-rose-500'));
});
