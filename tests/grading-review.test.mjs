import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { DENTAL_COLLEGE_SUBJECTS as subjects } from '../data/dentalCollegeData.js';
import { correctChoiceIndices, gradeQuestion } from '../question-grading.js';
const byId = new Map(subjects.flatMap(s => s.concepts.flatMap(c => c.pastQuestions)).map(q => [q.id, q]));
const review = JSON.parse(fs.readFileSync(new URL('../audit/grading-review-20261114.json', import.meta.url)));

test('RTK question grades receptor trans-autophosphorylation as correct science and option 1 as the incorrect statement', () => {
  const q = byId.get('signal-final-24-10');
  assert.equal(q.uncertain, false);
  for (let i = 0; i < q.choices.length; i++) assert.equal(gradeQuestion(q, {selectedIdx: i}), i === 0);
  assert.equal(q.sourceAnswer, '4', 'historical exam key is preserved independently');
});

test('TGF-beta has two supported alternative answers, without requiring both to be selected', () => {
  const q = byId.get('signal-final-22-4');
  assert.equal(q.uncertain, false); assert.equal(q.qType, 'mcq');
  for (let i = 0; i < q.choices.length; i++) assert.equal(gradeQuestion(q, {selectedIdx: i}), i === 0 || i === 4);
  assert(q.gradingReview.sources.includes('https://pubmed.ncbi.nlm.nih.gov/7952515/'));
  assert(q.gradingReview.sources.includes('https://pmc.ncbi.nlm.nih.gov/articles/PMC2188256/'));
});

test('scientifically valid ATP and caspase substrates never become false negatives', () => {
  for (const id of ['signal-final-25-16', 'signal-final-24-28']) {
    const q = byId.get(id); assert.equal(q.uncertain, true);
    for (let i = 0; i < q.choices.length; i++) assert.equal(gradeQuestion(q, {selectedIdx: i}), null);
  }
  assert.equal([...byId.values()].filter(q => q.uncertain).length, 6);
});

test('all four existing biology alternative answers remain supported by the lecture', () => {
  const expected = {'bio-final-25-25':[0,4], 'bio-final-24-1':[1,3], 'bio-final-24-10':[1,4], 'bio-final-23-28':[0,4]};
  for (const [id, indices] of Object.entries(expected)) assert.deepEqual(byId.get(id).acceptedAnswerIndices, indices);
});

test('saved answers are recalculated after unholding both questions, including review filtering', () => {
  const raw = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8').replace(/^import .*;\n/gm, '').split('// Global header & keyboard events')[0];
  const saved = {solvedQuestions: {
    'signal-final-24-10': {selectedIdx: 0, isCorrect: null},
    'signal-final-22-4': {selectedIdx: 4, isCorrect: null},
  }, favorites: {'signal-final-22-4':true}};
  const c = vm.createContext({INITIAL_SUBJECTS:subjects, structuredClone, correctChoiceIndices, gradeQuestion,
    localStorage:{getItem:()=>JSON.stringify(saved)}, document:{querySelectorAll:()=>[], getElementById:()=>null}});
  vm.runInContext(raw, c);
  assert.equal(vm.runInContext("state.solvedQuestions['signal-final-24-10'].isCorrect",c), true);
  assert.equal(vm.runInContext("state.solvedQuestions['signal-final-22-4'].isCorrect",c), true);
  assert.equal(vm.runInContext("state.favorites['signal-final-22-4']",c), true);
  assert.equal(vm.runInContext("matchesReviewFilter({id:'signal-final-22-4'}, 'wrong')",c), false);
});

test('review documentation names every changed field and leaves the 265-question membership intact', () => {
  assert.equal(byId.size, review.questionCount); assert.equal(review.reviewedCount, 12);
  for (const row of review.changes) {
    const q = byId.get(row.id);
    for (const [key, value] of Object.entries(row.after)) assert.deepEqual(q[key], value, `${q.id}.${key}`);
  }
});
