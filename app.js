import { INITIAL_SUBJECTS } from './data/sampleData.js';

const STORAGE_KEY = 'dentasync_state_v2';

const defaultState = {
  view: 'dashboard', // 'dashboard' | 'workspace' | 'exam' | 'importer'
  subjects: INITIAL_SUBJECTS,
  selectedSubjectId: INITIAL_SUBJECTS[0].id,
  selectedConceptId: INITIAL_SUBJECTS[0].concepts[0].id,
  activePdfPage: INITIAL_SUBJECTS[0].concepts[0].pdfPages[0],
  rightTab: 'past', // 'past' | 'ai'
  mobilePane: 'center', // 'left' | 'center' | 'right' (for < lg viewports)
  searchQuery: '',
  masteredConcepts: {}, // { [conceptId]: true }
  solvedQuestions: {}, // { [qId]: { selectedIdx, selectedIndices, isCorrect } }
  multiSelections: {}, // { [qId]: number[] }
  shortRevealed: {}, // { [qId]: true }
  strikethroughs: {}, // { [qId]: number[] }
  streak: 0,
  theme: 'light',
  // Exam CBT state
  exam: {
    active: false,
    questions: [],
    currentIndex: 0,
    answers: {},
    submitted: false,
    secondsLeft: 600,
    timerId: null,
  },
};

// Runtime-only local PDF blob URLs (per subjectId)
const localPdfUrls = {};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);
    const parsed = JSON.parse(raw);
    return {
      ...structuredClone(defaultState),
      ...parsed,
      exam: structuredClone(defaultState.exam),
    };
  } catch {
    return structuredClone(defaultState);
  }
}

let state = loadState();

function saveState() {
  const toSave = {
    view: state.view,
    subjects: state.subjects,
    selectedSubjectId: state.selectedSubjectId,
    selectedConceptId: state.selectedConceptId,
    activePdfPage: state.activePdfPage,
    rightTab: state.rightTab,
    masteredConcepts: state.masteredConcepts,
    solvedQuestions: state.solvedQuestions,
    strikethroughs: state.strikethroughs,
    streak: state.streak,
    theme: state.theme,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
}

function applyTheme() {
  document.documentElement.classList.toggle('dark', state.theme === 'dark');
}

function getCurrentSubject() {
  return state.subjects.find((s) => s.id === state.selectedSubjectId) || state.subjects[0];
}

function getCurrentConcept() {
  const subj = getCurrentSubject();
  return subj.concepts.find((c) => c.id === state.selectedConceptId) || subj.concepts[0];
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Highlight AMBOSS-style glossary terms inside text
function renderWithGlossary(text, glossary = {}) {
  let html = escapeHtml(text);
  const terms = Object.keys(glossary);
  terms.forEach((term) => {
    const safeTerm = escapeHtml(term);
    const regex = new RegExp(safeTerm, 'g');
    html = html.replace(
      regex,
      `<span class="glossary-term" data-term="${safeTerm}">${safeTerm}</span>`
    );
  });
  return html;
}

function updateNavUI() {
  document.querySelectorAll('.nav-btn, .nav-btn-m').forEach((btn) => {
    const isActive = btn.dataset.view === state.view;
    btn.className = btn.classList.contains('nav-btn-m')
      ? `nav-btn-m px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
          isActive
            ? 'bg-blue-600 text-white'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        }`
      : `nav-btn px-3 py-1.5 rounded-lg text-sm font-medium transition ${
          isActive
            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        }`;
  });
  document.getElementById('streakCount').textContent = state.streak;
}

// ========================
// 1. DASHBOARD VIEW
// ========================
function renderDashboard() {
  const totalConcepts = state.subjects.reduce((acc, s) => acc + s.concepts.length, 0);
  const masteredCount = Object.keys(state.masteredConcepts).filter((k) => state.masteredConcepts[k]).length;
  const solvedIds = Object.keys(state.solvedQuestions);
  const correctCount = solvedIds.filter((id) => state.solvedQuestions[id]?.isCorrect).length;
  const accuracy = solvedIds.length ? Math.round((correctCount / solvedIds.length) * 100) : 0;

  const subjectCards = state.subjects
    .map((subj) => {
      const cCount = subj.concepts.length;
      const mCount = subj.concepts.filter((c) => state.masteredConcepts[c.id]).length;
      const pct = cCount ? Math.round((mCount / cCount) * 100) : 0;
      const qCount = subj.concepts.reduce(
        (sum, c) => sum + c.pastQuestions.length + c.aiQuestions.length,
        0
      );

      return `
        <div class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 hover:shadow-lg hover:border-blue-400/60 transition flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <div>
                <span class="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 mb-2">
                  PDF ${subj.totalPages}p 연동
                </span>
                <h3 class="text-lg font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">${escapeHtml(subj.name)}</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400">${escapeHtml(subj.engName)}</p>
              </div>
              <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm border-4" style="border-color: ${subj.color}20; color: ${subj.color}">
                ${pct}%
              </div>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 truncate mb-4" title="${escapeHtml(subj.pdfName)}">
              📄 ${escapeHtml(subj.pdfName)}
            </p>
          </div>

          <div>
            <div class="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
              <div class="h-full rounded-full transition-all duration-500" style="width: ${pct}%; background-color: ${subj.color}"></div>
            </div>
            <div class="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 mb-4">
              <span>핵심 개념 <strong>${mCount}/${cCount}</strong></span>
              <span>연결 문제 <strong>${qCount}문항</strong></span>
            </div>
            <button data-open-subject="${subj.id}" class="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 text-white text-sm font-semibold transition">
              개념 + PDF 통합 학습하기 →
            </button>
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <div class="max-w-6xl mx-auto px-4 lg:px-6 py-8">
      <!-- Hero Banner -->
      <div class="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white p-6 lg:p-8 mb-8 shadow-xl relative overflow-hidden">
        <div class="relative z-10 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium mb-4">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Gemini · Antigravity 강의자료 PDF 분석 연동
          </div>
          <h1 class="text-2xl lg:text-3xl font-extrabold tracking-tight mb-2">
            단순 기출 풀이를 넘어,<br />강의자료 PDF 페이지와 개념을 한 화면에.
          </h1>
          <p class="text-sm lg:text-base text-blue-100/80 mb-6">
            핵심 개념별 강의자료 페이지 매칭, AI 요약 해설, 연결 기출 및 AI 변형 연습문제를 3-Pane 워크스페이스에서 바로 학습하세요.
          </p>
          <div class="flex flex-wrap gap-3">
            <button id="goWorkspaceBtn" class="px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition">
              통합 학습 시작하기
            </button>
            <button id="goExamBtn" class="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition">
              실전 CBT 모의고사
            </button>
          </div>
        </div>
      </div>

      <!-- Stats Row -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center gap-4">
          <div class="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl">📚</div>
          <div>
            <div class="text-xs text-slate-500 dark:text-slate-400">마스터한 핵심 개념</div>
            <div class="text-xl font-bold">${masteredCount} <span class="text-sm font-normal text-slate-400">/ ${totalConcepts}</span></div>
          </div>
        </div>
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center gap-4">
          <div class="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl">🎯</div>
          <div>
            <div class="text-xs text-slate-500 dark:text-slate-400">누적 정답률</div>
            <div class="text-xl font-bold">${accuracy}% <span class="text-sm font-normal text-slate-400">(${solvedIds.length}문항)</span></div>
          </div>
        </div>
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center gap-4">
          <div class="w-11 h-11 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xl">✨</div>
          <div>
            <div class="text-xs text-slate-500 dark:text-slate-400">AI PDF 분석 과목</div>
            <div class="text-xl font-bold">${state.subjects.length}과목 <span class="text-sm font-normal text-slate-400">연동됨</span></div>
          </div>
        </div>
      </div>

      <!-- Subject Grid -->
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-bold">과목별 강의자료 · 개념 · 기출 트랙</h2>
        <button id="goImporterFromDash" class="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
          + 새 과목 JSON 추가하기
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        ${subjectCards}
      </div>
    </div>
  `;
}

// ========================
// 2. 3-PANE WORKSPACE VIEW
// ========================
function renderQuestionCard(q, typeLabel, badgeColor) {
  const solved = state.solvedQuestions[q.id];
  const strikes = state.strikethroughs[q.id] || [];
  const isMulti = q.qType === 'multi' && Array.isArray(q.answerIndices);
  const isShort = q.qType === 'short' || (!q.choices || q.choices.length === 0);

  let bodyHtml = '';

  if (isShort) {
    const revealed = !!state.shortRevealed?.[q.id] || !!solved;
    bodyHtml = `
      <div class="space-y-3 mb-3">
        ${
          !revealed
            ? `<button data-short-reveal="${q.id}" class="w-full py-2.5 px-4 rounded-xl bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-semibold border border-blue-200 dark:border-blue-800 transition">
                모범 답안 확인하기
               </button>`
            : `<div class="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                 <div class="text-xs font-bold text-emerald-700 dark:text-emerald-300 mb-1">모범 답안</div>
                 <div class="text-sm font-bold text-slate-900 dark:text-white">${escapeHtml(q.shortAnswer || '해설 참고')}</div>
               </div>
               ${
                 !solved
                   ? `<div class="flex gap-2">
                        <button data-short-grade="${q.id}" data-grade="ok" class="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition">✓ 맞았음</button>
                        <button data-short-grade="${q.id}" data-grade="no" class="flex-1 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition">✕ 틀렸음</button>
                      </div>`
                   : ''
               }`
        }
      </div>
    `;
  } else if (isMulti) {
    const picked = state.multiSelections?.[q.id] || [];
    const choicesHtml = q.choices
      .map((choice, idx) => {
        const isPicked = solved ? (solved.selectedIndices || []).includes(idx) : picked.includes(idx);
        const isCorrectChoice = q.answerIndices.includes(idx);
        const isStruck = strikes.includes(idx);

        let btnClass =
          'border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 bg-white dark:bg-slate-900';
        if (solved) {
          if (isCorrectChoice) {
            btnClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200';
          } else if (isPicked && !isCorrectChoice) {
            btnClass = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
          } else {
            btnClass = 'border-slate-200 dark:border-slate-800 opacity-65';
          }
        } else if (isPicked) {
          btnClass = 'border-blue-500 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-semibold';
        }

        return `
          <div class="flex items-center gap-1.5">
            <button
              data-multi-toggle="${q.id}"
              data-choice-idx="${idx}"
              class="flex-1 text-left px-3.5 py-2.5 rounded-xl border text-sm transition flex items-start gap-2.5 ${btnClass}"
            >
              <span class="w-5 h-5 rounded-md border border-current flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                ${isPicked ? '✓' : idx + 1}
              </span>
              <span class="${isStruck ? 'choice-strikethrough' : ''}">${escapeHtml(choice)}</span>
            </button>
            <button
              data-strike-q="${q.id}"
              data-strike-idx="${idx}"
              title="보기 취소선 (UWorld 스타일 소거법)"
              class="p-2 rounded-lg text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              ✕
            </button>
          </div>
        `;
      })
      .join('');

    bodyHtml = `
      <div class="space-y-2 mb-3">
        ${choicesHtml}
        ${
          !solved
            ? `<button data-multi-submit="${q.id}" class="w-full mt-2 py-2 rounded-xl bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 text-white text-xs font-bold transition">
                 복수 정답 제출 (${picked.length}개 선택)
               </button>`
            : ''
        }
      </div>
    `;
  } else {
    const choicesHtml = q.choices
      .map((choice, idx) => {
        const isSelected = solved && solved.selectedIdx === idx;
        const isCorrectChoice = idx === q.answerIndex;
        const isStruck = strikes.includes(idx);

        let btnClass =
          'border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 bg-white dark:bg-slate-900';
        if (solved) {
          if (isCorrectChoice) {
            btnClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200';
          } else if (isSelected && !isCorrectChoice) {
            btnClass = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
          } else {
            btnClass = 'border-slate-200 dark:border-slate-800 opacity-65';
          }
        }

        return `
          <div class="flex items-center gap-1.5">
            <button
              data-answer-q="${q.id}"
              data-choice-idx="${idx}"
              class="flex-1 text-left px-3.5 py-2.5 rounded-xl border text-sm transition flex items-start gap-2.5 ${btnClass}"
            >
              <span class="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                ${idx + 1}
              </span>
              <span class="${isStruck ? 'choice-strikethrough' : ''}">${escapeHtml(choice)}</span>
            </button>
            <button
              data-strike-q="${q.id}"
              data-strike-idx="${idx}"
              title="보기 취소선 (UWorld 스타일 소거법)"
              class="p-2 rounded-lg text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              ✕
            </button>
          </div>
        `;
      })
      .join('');

    bodyHtml = `<div class="space-y-2 mb-3">${choicesHtml}</div>`;
  }

  const answerText = isShort
    ? escapeHtml(q.shortAnswer || '')
    : isMulti
    ? q.answerIndices.map((i) => `${i + 1}번`).join(', ')
    : `${q.answerIndex + 1}번`;

  return `
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div class="flex items-center gap-1.5">
          <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold ${badgeColor}">
            ${escapeHtml(typeLabel)}
          </span>
          ${isMulti ? '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">복수정답</span>' : ''}
          ${isShort ? '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">단답형</span>' : ''}
        </div>
        <button
          data-jump-page="${q.pdfRefPage}"
          class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[11px] font-semibold hover:bg-blue-100 transition"
          title="강의자료 해당 페이지로 이동"
        >
          📄 p.${q.pdfRefPage} 근거 보기 ↗
        </button>
      </div>

      <p class="text-sm font-medium leading-relaxed mb-4 whitespace-pre-line">${escapeHtml(q.stem)}</p>

      ${bodyHtml}

      ${
        solved
          ? `
        <div class="mt-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs leading-relaxed">
          <div class="flex items-center justify-between mb-1.5">
            <span class="font-bold ${solved.isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}">
              ${solved.isCorrect ? '✅ 정답입니다!' : `❌ 오답입니다 (정답: ${answerText})`}
            </span>
            <button data-reset-q="${q.id}" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 underline">다시 풀기</button>
          </div>
          <p class="text-slate-700 dark:text-slate-300">${escapeHtml(q.rationale)}</p>
        </div>
      `
          : ''
      }
    </div>
  `;
}

function renderWorkspace() {
  const subj = getCurrentSubject();
  const concept = getCurrentConcept();
  const isMastered = !!state.masteredConcepts[concept.id];

  const filteredConcepts = subj.concepts.filter((c) => {
    if (!state.searchQuery.trim()) return true;
    const q = state.searchQuery.toLowerCase();
    return (
      c.title.toLowerCase().includes(q) ||
      c.chapter.toLowerCase().includes(q) ||
      c.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  const conceptListHtml = filteredConcepts
    .map((c) => {
      const active = c.id === concept.id;
      const mastered = !!state.masteredConcepts[c.id];
      const pageLabel =
        c.pdfPages.length > 1
          ? `p.${c.pdfPages[0]}-${c.pdfPages[c.pdfPages.length - 1]}`
          : `p.${c.pdfPages[0]}`;

      return `
        <button
          data-select-concept="${c.id}"
          class="w-full text-left p-3 rounded-xl border transition mb-2 ${
            active
              ? 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 shadow-sm'
              : 'border-transparent hover:bg-slate-100 dark:hover:bg-slate-800/70'
          }"
        >
          <div class="flex items-center justify-between gap-2 mb-1">
            <span class="text-[11px] font-medium text-slate-500 dark:text-slate-400">${escapeHtml(c.chapter)}</span>
            <span class="px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300">
              ${pageLabel}
            </span>
          </div>
          <div class="flex items-start gap-2">
            <span class="mt-1 w-2 h-2 rounded-full shrink-0 ${mastered ? 'bg-emerald-500' : 'bg-amber-400'}"></span>
            <span class="text-sm font-semibold leading-snug ${active ? 'text-blue-700 dark:text-blue-300' : ''}">
              ${escapeHtml(c.title)}
            </span>
          </div>
          <div class="flex items-center gap-2 mt-2 pl-4 text-[11px] text-slate-500 dark:text-slate-400">
            <span>기출 ${c.pastQuestions.length}</span>
            <span>·</span>
            <span>AI연습 ${c.aiQuestions.length}</span>
          </div>
        </button>
      `;
    })
    .join('');

  const pageButtonsHtml = concept.pdfPages
    .map((p) => {
      const active = state.activePdfPage === p;
      return `
        <button
          data-jump-page="${p}"
          class="px-2.5 py-1 rounded-lg text-xs font-bold transition ${
            active
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }"
        >
          p.${p}
        </button>
      `;
    })
    .join('');

  const pdfUrl = localPdfUrls[subj.id];
  const currentExcerpt =
    (concept.pdfExcerpts && concept.pdfExcerpts[state.activePdfPage]) ||
    `[강의자료 ${subj.pdfName} — ${state.activePdfPage}페이지] 해당 페이지의 원문 PDF를 상단 '로컬 PDF 연결' 버튼으로 불러오면 실제 슬라이드/교안을 바로 볼 수 있습니다.`;

  const pdfViewerHtml = pdfUrl
    ? `<iframe src="${pdfUrl}#page=${state.activePdfPage}" class="w-full h-72 rounded-xl border border-slate-200 dark:border-slate-700 bg-white"></iframe>`
    : `
      <div class="rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/60 p-4">
        <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
          <span class="font-semibold">📑 ${escapeHtml(subj.pdfName)}</span>
          <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-bold">Page ${state.activePdfPage} / ${subj.totalPages}</span>
        </div>
        <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 p-3.5 rounded-lg border border-slate-200 dark:border-slate-800">
          ${escapeHtml(currentExcerpt)}
        </p>
        <p class="text-[11px] text-slate-400 mt-2">
          💡 실제 강의 PDF 파일을 연결하면 해당 페이지(#page=${state.activePdfPage})가 뷰어로 즉시 열립니다.
        </p>
      </div>
    `;

  const questionsToShow =
    state.rightTab === 'past'
      ? concept.pastQuestions.map((q) =>
          renderQuestionCard(q, q.source, 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300')
        )
      : concept.aiQuestions.map((q) =>
          renderQuestionCard(q, q.difficulty || 'AI 연습문제', 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300')
        );

  const mp = state.mobilePane || 'center';
  const leftVis = mp === 'left' ? 'flex' : 'hidden lg:flex';
  const centerVis = mp === 'center' ? 'block' : 'hidden lg:block';
  const rightVis = mp === 'right' ? 'block' : 'hidden lg:block';
  const tabBtnCls = (pane) =>
    mp === pane
      ? 'flex-1 py-2 px-2 text-xs font-bold rounded-lg bg-blue-600 text-white shadow-sm transition'
      : 'flex-1 py-2 px-2 text-xs font-semibold rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition';

  return `
    <div class="lg:hidden sticky top-14 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 px-3 py-2 flex items-center gap-1.5">
      <button type="button" data-mobile-pane="left" class="${tabBtnCls('left')}">📚 목차/개념</button>
      <button type="button" data-mobile-pane="center" class="${tabBtnCls('center')}">📖 개념 요약·PDF</button>
      <button type="button" data-mobile-pane="right" class="${tabBtnCls('right')}">📝 기출 (${concept.pastQuestions.length})</button>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-12 lg:h-[calc(100dvh-3.5rem)]">
      <!-- LEFT PANE: Subject & Concept Tree -->
      <aside class="${leftVis} lg:col-span-3 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex-col lg:h-full overflow-hidden">
        <div class="p-3.5 border-b border-slate-200 dark:border-slate-800 space-y-2.5">
          <select id="subjectSelect" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-bold">
            ${state.subjects
              .map(
                (s) =>
                  `<option value="${s.id}" ${s.id === subj.id ? 'selected' : ''}>${escapeHtml(s.name)} (${s.concepts.length})</option>`
              )
              .join('')}
          </select>
          <input
            id="conceptSearch"
            type="text"
            value="${escapeHtml(state.searchQuery)}"
            placeholder="개념, 단원, 태그 검색..."
            class="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="flex-1 overflow-y-auto p-2.5">
          ${conceptListHtml || '<p class="text-xs text-slate-400 p-4 text-center">검색 결과가 없습니다.</p>'}
        </div>
      </aside>

      <!-- CENTER PANE: AI Concept Summary + PDF Page Sync Viewer -->
      <section class="${centerVis} lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 overflow-y-auto p-4 sm:p-5 space-y-5 bg-slate-50/50 dark:bg-slate-950">
        <!-- Concept Header -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span class="text-xs font-semibold text-blue-600 dark:text-blue-400">${escapeHtml(concept.chapter)}</span>
            <button
              id="toggleMasterBtn"
              class="px-3 py-1 rounded-full text-xs font-bold border transition ${
                isMastered
                  ? 'bg-emerald-500 border-emerald-500 text-white'
                  : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-emerald-500'
              }"
            >
              ${isMastered ? '✓ 마스터 완료' : '마스터 체크'}
            </button>
          </div>
          <h2 class="text-xl font-extrabold mb-3">${escapeHtml(concept.title)}</h2>
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${concept.tags
              .map(
                (t) =>
                  `<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-medium">#${escapeHtml(t)}</span>`
              )
              .join('')}
          </div>

          <!-- AI Summary -->
          <div class="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 mb-4">
            <div class="flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-300 mb-1.5">
              <span>✨</span> 강의자료 기반 AI 핵심 요약 <span class="font-normal text-blue-500">(밑줄 용어 클릭 시 팝업)</span>
            </div>
            <p class="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              ${renderWithGlossary(concept.summary, concept.glossary)}
            </p>
          </div>

          <!-- Key Points -->
          <div>
            <h3 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">고빈출 핵심 포인트</h3>
            <ul class="space-y-1.5">
              ${concept.keyPoints
                .map(
                  (pt) => `
                <li class="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span class="text-blue-500 mt-1">•</span>
                  <span>${renderWithGlossary(pt, concept.glossary)}</span>
                </li>
              `
                )
                .join('')}
            </ul>
          </div>
        </div>

        <!-- PDF Page Sync Card -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-sm font-bold">📖 강의자료 PDF 매칭</span>
              <div class="flex flex-wrap items-center gap-1">${pageButtonsHtml}</div>
            </div>
            <label class="cursor-pointer px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold transition">
              로컬 PDF 연결
              <input id="attachPdfInput" type="file" accept="application/pdf" class="hidden" />
            </label>
          </div>
          ${pdfViewerHtml}
        </div>
      </section>

      <!-- RIGHT PANE: Linked Past Questions & AI Practice Questions -->
      <section class="${rightVis} lg:col-span-4 overflow-y-auto p-4 sm:p-5 bg-slate-100/60 dark:bg-slate-900/40">
        <div class="flex items-center gap-2 p-1 rounded-xl bg-slate-200/80 dark:bg-slate-800 mb-4">
          <button
            data-right-tab="past"
            class="flex-1 py-2 rounded-lg text-xs font-bold transition ${
              state.rightTab === 'past'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }"
          >
            연결 기출문제 (${concept.pastQuestions.length})
          </button>
          <button
            data-right-tab="ai"
            class="flex-1 py-2 rounded-lg text-xs font-bold transition ${
              state.rightTab === 'ai'
                ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }"
          >
            AI 생성 연습문제 (${concept.aiQuestions.length})
          </button>
        </div>

        <div class="space-y-4">
          ${questionsToShow.join('') || '<p class="text-sm text-slate-400 text-center py-8">등록된 문제가 없습니다.</p>'}
        </div>
      </section>
    </div>
  `;
}

// ========================
// 3. EXAM CBT VIEW (UWorld Style)
// ========================
function buildExamQuestions() {
  const list = [];
  state.subjects.forEach((subj) => {
    subj.concepts.forEach((c) => {
      [...c.pastQuestions, ...c.aiQuestions].forEach((q) => {
        if (q.choices && q.choices.length > 0 && q.qType !== 'multi') {
          list.push({
            ...q,
            subjectId: subj.id,
            subjectName: subj.name,
            conceptId: c.id,
            conceptTitle: c.title,
          });
        }
      });
    });
  });
  return list;
}

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function renderExam() {
  if (!state.exam.active) {
    const allQ = buildExamQuestions();
    return `
      <div class="max-w-2xl mx-auto px-4 py-12">
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center shadow-sm">
          <div class="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl mx-auto mb-4">⏱️</div>
          <h2 class="text-2xl font-extrabold mb-2">실전 CBT 모의고사 모드</h2>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-6">
            UWorld 스타일의 집중 시험 환경에서 전체 기출 및 AI 변형문제(총 ${allQ.length}문항)를 풀어보세요.<br />
            제출 후 오답 문항은 해당 <strong>개념 요약 및 강의자료 PDF 페이지</strong>로 즉시 연결됩니다.
          </p>
          <button id="startExamBtn" class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition">
            모의고사 시작하기 (${allQ.length}문항 · 10분)
          </button>
        </div>
      </div>
    `;
  }

  const { questions, currentIndex, answers, submitted, secondsLeft } = state.exam;
  const q = questions[currentIndex];

  if (submitted) {
    const correct = questions.filter((item) => answers[item.id] === item.answerIndex).length;
    const score = Math.round((correct / questions.length) * 100);

    return `
      <div class="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 class="text-xl font-extrabold">모의고사 결과 리포트</h2>
            <p class="text-sm text-slate-500 dark:text-slate-400">총 ${questions.length}문항 중 ${correct}문항 정답 (${score}점)</p>
          </div>
          <button id="restartExamBtn" class="px-4 py-2 rounded-xl bg-slate-900 dark:bg-blue-600 text-white text-sm font-semibold">
            다시 응시하기
          </button>
        </div>

        <div class="space-y-4">
          ${questions
            .map((item, idx) => {
              const userAns = answers[item.id];
              const ok = userAns === item.answerIndex;
              return `
                <div class="bg-white dark:bg-slate-900 border ${ok ? 'border-emerald-300 dark:border-emerald-800' : 'border-rose-300 dark:border-rose-800'} rounded-2xl p-5">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span class="text-xs font-bold ${ok ? 'text-emerald-600' : 'text-rose-600'}">
                      Q${idx + 1}. ${ok ? '정답' : `오답 (내 답: ${userAns !== undefined ? userAns + 1 : '미응답'} / 정답: ${item.answerIndex + 1})`}
                    </span>
                    <button
                      data-goto-concept="${item.subjectId}|${item.conceptId}|${item.pdfRefPage}"
                      class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold hover:bg-blue-100"
                    >
                      📖 ${escapeHtml(item.conceptTitle)} (p.${item.pdfRefPage}) 복습하기 ↗
                    </button>
                  </div>
                  <p class="text-sm font-medium mb-2">${escapeHtml(item.stem)}</p>
                  <p class="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 p-3 rounded-xl">${escapeHtml(item.rationale)}</p>
                </div>
              `;
            })
            .join('')}
        </div>
      </div>
    `;
  }

  return `
    <div class="max-w-4xl mx-auto px-4 py-6">
      <div class="flex flex-wrap items-center justify-between gap-2 bg-slate-900 text-white px-4 sm:px-5 py-3 rounded-2xl mb-5">
        <div class="text-sm font-bold">문항 ${currentIndex + 1} / ${questions.length} · <span class="text-blue-300">${escapeHtml(q.subjectName)}</span></div>
        <div class="flex items-center gap-3 sm:gap-4">
          <span id="examTimer" class="font-mono text-sm font-bold text-amber-300">⏱ ${formatTime(secondsLeft)}</span>
          <button id="submitExamBtn" class="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-xs font-bold text-slate-950">최종 제출</button>
        </div>
      </div>

      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 mb-5">
        <p class="text-base font-semibold leading-relaxed mb-5">${escapeHtml(q.stem)}</p>
        <div class="space-y-2.5">
          ${q.choices
            .map((ch, idx) => {
              const selected = answers[q.id] === idx;
              return `
                <button
                  data-exam-choice="${idx}"
                  class="w-full text-left px-4 py-3 rounded-xl border text-sm transition flex items-center gap-3 ${
                    selected
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/50 font-semibold'
                      : 'border-slate-200 dark:border-slate-700 hover:border-blue-400'
                  }"
                >
                  <span class="w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold">${idx + 1}</span>
                  <span>${escapeHtml(ch)}</span>
                </button>
              `;
            })
            .join('')}
        </div>
      </div>

      <div class="flex items-center justify-between">
        <button id="prevExamBtn" ${currentIndex === 0 ? 'disabled' : ''} class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-semibold disabled:opacity-40">← 이전</button>
        <div class="flex flex-wrap gap-1.5">
          ${questions
            .map(
              (item, idx) => `
            <button data-exam-nav="${idx}" class="w-8 h-8 rounded-lg text-xs font-bold border ${
                idx === currentIndex
                  ? 'bg-blue-600 text-white border-blue-600'
                  : answers[item.id] !== undefined
                  ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-300'
                  : 'border-slate-200 dark:border-slate-700'
              }">${idx + 1}</button>
          `
            )
            .join('')}
        </div>
        <button id="nextExamBtn" ${currentIndex === questions.length - 1 ? 'disabled' : ''} class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-semibold disabled:opacity-40">다음 →</button>
      </div>
    </div>
  `;
}

// ========================
// 4. AI IMPORTER VIEW
// ========================
const GEMINI_PROMPT_TEMPLATE = `다음 치과대학 강의자료 PDF를 분석해서 아래 JSON 형식으로 핵심 개념, 해당 PDF 페이지 번호, 강의자료 기반 요약, 연결 기출문제, AI 변형 연습문제를 추출해줘:
{
  "id": "prosthodontics",
  "name": "치과보철학",
  "engName": "Prosthodontics",
  "color": "#ea580c",
  "pdfName": "2026_치과보철학_고정성.pdf",
  "totalPages": 50,
  "concepts": [
    {
      "id": "pros-1",
      "chapter": "1장. 지대치 형성",
      "title": "보존적 치아 삭제와 유지형태",
      "pdfPages": [7, 8],
      "importance": "high",
      "tags": ["축벽경사", "유지형태"],
      "summary": "핵심 요약...",
      "keyPoints": ["포인트 1", "포인트 2"],
      "glossary": { "유지형태": "용어 설명..." },
      "pdfExcerpts": { "7": "7페이지 핵심 발췌..." },
      "pastQuestions": [],
      "aiQuestions": []
    }
  ]
}`;

function renderImporter() {
  return `
    <div class="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
        <h2 class="text-xl font-extrabold mb-2">Gemini / Antigravity 강의자료 JSON 임포터</h2>
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">
          Gemini 또는 Antigravity로 강의자료 PDF를 분석한 뒤 생성된 과목 JSON을 붙여넣으면 즉시 3-Pane 워크스페이스에 반영됩니다.
        </p>

        <div class="mb-4">
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-xs font-bold text-slate-600 dark:text-slate-300">1단계: Gemini 분석용 프롬프트 템플릿</span>
            <button id="copyPromptBtn" class="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">프롬프트 복사</button>
          </div>
          <pre class="p-3.5 rounded-xl bg-slate-900 text-slate-100 text-xs overflow-x-auto leading-relaxed">${escapeHtml(GEMINI_PROMPT_TEMPLATE)}</pre>
        </div>

        <div class="mb-4">
          <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5">2단계: 생성된 과목 JSON 붙여넣기</label>
          <textarea
            id="jsonImportInput"
            rows="7"
            placeholder='{ "id": "...", "name": "과목명", "concepts": [...] }'
            class="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-3">
          <div id="importMsg" class="text-xs font-semibold"></div>
          <div class="flex gap-2">
            <button id="resetDemoBtn" class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800">
              초기 데모 데이터 복원
            </button>
            <button id="importJsonBtn" class="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold">
              과목 데이터 추가하기
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ========================
// RENDER & EVENT BINDING
// ========================
function render() {
  applyTheme();
  updateNavUI();

  const root = document.getElementById('appRoot');
  if (state.view === 'dashboard') root.innerHTML = renderDashboard();
  else if (state.view === 'workspace') root.innerHTML = renderWorkspace();
  else if (state.view === 'exam') root.innerHTML = renderExam();
  else if (state.view === 'importer') root.innerHTML = renderImporter();

  bindEvents();
}

function bindEvents() {
  // Dashboard events
  document.getElementById('goWorkspaceBtn')?.addEventListener('click', () => {
    state.view = 'workspace';
    saveState();
    render();
  });
  document.getElementById('goExamBtn')?.addEventListener('click', () => {
    state.view = 'exam';
    saveState();
    render();
  });
  document.getElementById('goImporterFromDash')?.addEventListener('click', () => {
    state.view = 'importer';
    saveState();
    render();
  });
  document.querySelectorAll('[data-open-subject]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const subjId = btn.dataset.openSubject;
      const subj = state.subjects.find((s) => s.id === subjId);
      if (subj) {
        state.selectedSubjectId = subj.id;
        state.selectedConceptId = subj.concepts[0].id;
        state.activePdfPage = subj.concepts[0].pdfPages[0];
        state.view = 'workspace';
        saveState();
        render();
      }
    });
  });

  // Workspace events
  document.getElementById('subjectSelect')?.addEventListener('change', (e) => {
    const subj = state.subjects.find((s) => s.id === e.target.value);
    if (subj) {
      state.selectedSubjectId = subj.id;
      state.selectedConceptId = subj.concepts[0].id;
      state.activePdfPage = subj.concepts[0].pdfPages[0];
      saveState();
      render();
    }
  });

  document.getElementById('conceptSearch')?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    render();
    const input = document.getElementById('conceptSearch');
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  });

  document.querySelectorAll('[data-mobile-pane]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.mobilePane = btn.dataset.mobilePane;
      saveState();
      render();
      if (window.innerWidth < 1024) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  document.querySelectorAll('[data-select-concept]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const subj = getCurrentSubject();
      const c = subj.concepts.find((item) => item.id === btn.dataset.selectConcept);
      if (c) {
        state.selectedConceptId = c.id;
        state.activePdfPage = c.pdfPages[0];
        if (window.innerWidth < 1024) {
          state.mobilePane = 'center';
        }
        saveState();
        render();
        if (window.innerWidth < 1024) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  });

  document.getElementById('toggleMasterBtn')?.addEventListener('click', () => {
    const c = getCurrentConcept();
    state.masteredConcepts[c.id] = !state.masteredConcepts[c.id];
    saveState();
    render();
  });

  document.querySelectorAll('[data-jump-page]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.activePdfPage = Number(btn.dataset.jumpPage);
      if (window.innerWidth < 1024) {
        state.mobilePane = 'center';
      }
      saveState();
      render();
      if (window.innerWidth < 1024) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  document.getElementById('attachPdfInput')?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const subj = getCurrentSubject();
      if (localPdfUrls[subj.id]) URL.revokeObjectURL(localPdfUrls[subj.id]);
      localPdfUrls[subj.id] = URL.createObjectURL(file);
      render();
    }
  });

  document.querySelectorAll('[data-right-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.rightTab = btn.dataset.rightTab;
      saveState();
      render();
    });
  });

  // Question interactions
  document.querySelectorAll('[data-answer-q]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qId = btn.dataset.answerQ;
      if (state.solvedQuestions[qId]) return;
      const choiceIdx = Number(btn.dataset.choiceIdx);
      const concept = getCurrentConcept();
      const allQ = [...concept.pastQuestions, ...concept.aiQuestions];
      const q = allQ.find((item) => item.id === qId);
      if (!q) return;
      const isCorrect = choiceIdx === q.answerIndex;
      state.solvedQuestions[qId] = { selectedIdx: choiceIdx, isCorrect };
      state.streak += 1;
      saveState();
      render();
    });
  });

  document.querySelectorAll('[data-multi-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qId = btn.dataset.multiToggle;
      if (state.solvedQuestions[qId]) return;
      const idx = Number(btn.dataset.choiceIdx);
      const cur = new Set(state.multiSelections[qId] || []);
      if (cur.has(idx)) cur.delete(idx);
      else cur.add(idx);
      state.multiSelections[qId] = [...cur].sort((a, b) => a - b);
      saveState();
      render();
    });
  });

  document.querySelectorAll('[data-multi-submit]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qId = btn.dataset.multiSubmit;
      if (state.solvedQuestions[qId]) return;
      const concept = getCurrentConcept();
      const allQ = [...concept.pastQuestions, ...concept.aiQuestions];
      const q = allQ.find((item) => item.id === qId);
      if (!q) return;
      const selected = [...(state.multiSelections[qId] || [])].sort((a, b) => a - b);
      const expected = [...(q.answerIndices || [])].sort((a, b) => a - b);
      const isCorrect =
        selected.length === expected.length &&
        selected.every((val, i) => val === expected[i]);
      state.solvedQuestions[qId] = { selectedIndices: selected, isCorrect };
      state.streak += 1;
      saveState();
      render();
    });
  });

  document.querySelectorAll('[data-short-reveal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qId = btn.dataset.shortReveal;
      state.shortRevealed[qId] = true;
      saveState();
      render();
    });
  });

  document.querySelectorAll('[data-short-grade]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qId = btn.dataset.shortGrade;
      if (state.solvedQuestions[qId]) return;
      const isCorrect = btn.dataset.gradeCorrect === 'true';
      state.solvedQuestions[qId] = { isCorrect };
      state.streak += 1;
      saveState();
      render();
    });
  });

  document.querySelectorAll('[data-strike-q]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qId = btn.dataset.strikeQ;
      const idx = Number(btn.dataset.strikeIdx);
      const arr = state.strikethroughs[qId] || [];
      state.strikethroughs[qId] = arr.includes(idx) ? arr.filter((i) => i !== idx) : [...arr, idx];
      saveState();
      render();
    });
  });

  document.querySelectorAll('[data-reset-q]').forEach((btn) => {
    btn.addEventListener('click', () => {
      delete state.solvedQuestions[btn.dataset.resetQ];
      saveState();
      render();
    });
  });

  // Glossary popups
  document.querySelectorAll('.glossary-term').forEach((el) => {
    el.addEventListener('click', () => {
      const term = el.dataset.term;
      const concept = getCurrentConcept();
      const def = concept.glossary?.[term];
      if (!def) return;
      document.getElementById('glossaryTitle').textContent = term;
      document.getElementById('glossaryBody').textContent = def;
      document.getElementById('glossaryModal').classList.remove('hidden');
    });
  });

  // Exam CBT events
  document.getElementById('startExamBtn')?.addEventListener('click', () => {
    const pool = buildExamQuestions();
    for (let i = pool.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const qs = pool.slice(0, Math.min(20, pool.length));
    state.exam = {
      active: true,
      questions: qs,
      currentIndex: 0,
      answers: {},
      submitted: false,
      secondsLeft: 600,
      timerId: setInterval(() => {
        state.exam.secondsLeft -= 1;
        const timerEl = document.getElementById('examTimer');
        if (timerEl) timerEl.textContent = `⏱ ${formatTime(state.exam.secondsLeft)}`;
        if (state.exam.secondsLeft <= 0) {
          clearInterval(state.exam.timerId);
          state.exam.submitted = true;
          render();
        }
      }, 1000),
    };
    render();
  });

  document.querySelectorAll('[data-exam-choice]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const q = state.exam.questions[state.exam.currentIndex];
      state.exam.answers[q.id] = Number(btn.dataset.examChoice);
      render();
    });
  });

  document.getElementById('prevExamBtn')?.addEventListener('click', () => {
    if (state.exam.currentIndex > 0) {
      state.exam.currentIndex -= 1;
      render();
    }
  });
  document.getElementById('nextExamBtn')?.addEventListener('click', () => {
    if (state.exam.currentIndex < state.exam.questions.length - 1) {
      state.exam.currentIndex += 1;
      render();
    }
  });
  document.querySelectorAll('[data-exam-nav]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.exam.currentIndex = Number(btn.dataset.examNav);
      render();
    });
  });
  document.getElementById('submitExamBtn')?.addEventListener('click', () => {
    clearInterval(state.exam.timerId);
    state.exam.submitted = true;
    render();
  });
  document.getElementById('restartExamBtn')?.addEventListener('click', () => {
    clearInterval(state.exam.timerId);
    state.exam.active = false;
    render();
  });
  document.querySelectorAll('[data-goto-concept]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const [subjId, cId, page] = btn.dataset.gotoConcept.split('|');
      state.selectedSubjectId = subjId;
      state.selectedConceptId = cId;
      state.activePdfPage = Number(page);
      state.view = 'workspace';
      saveState();
      render();
    });
  });

  // Importer events
  document.getElementById('copyPromptBtn')?.addEventListener('click', () => {
    navigator.clipboard?.writeText(GEMINI_PROMPT_TEMPLATE);
    const msg = document.getElementById('importMsg');
    if (msg) {
      msg.className = 'text-xs font-semibold text-blue-600';
      msg.textContent = '프롬프트가 클립보드에 복사되었습니다.';
    }
  });

  document.getElementById('importJsonBtn')?.addEventListener('click', () => {
    const raw = document.getElementById('jsonImportInput')?.value || '';
    const msg = document.getElementById('importMsg');
    try {
      const parsed = JSON.parse(raw);
      if (!parsed.id || !parsed.name || !Array.isArray(parsed.concepts) || !parsed.concepts.length) {
        throw new Error('id, name, concepts 배열이 필요합니다.');
      }
      const existingIdx = state.subjects.findIndex((s) => s.id === parsed.id);
      if (existingIdx >= 0) state.subjects[existingIdx] = parsed;
      else state.subjects.push(parsed);

      state.selectedSubjectId = parsed.id;
      state.selectedConceptId = parsed.concepts[0].id;
      state.activePdfPage = parsed.concepts[0].pdfPages?.[0] || 1;
      saveState();
      msg.className = 'text-xs font-semibold text-emerald-600';
      msg.textContent = `✅ '${parsed.name}' 과목이 성공적으로 추가되었습니다!`;
    } catch (err) {
      msg.className = 'text-xs font-semibold text-rose-600';
      msg.textContent = `❌ JSON 형식 오류: ${err.message}`;
    }
  });

  document.getElementById('resetDemoBtn')?.addEventListener('click', () => {
    state.subjects = structuredClone(INITIAL_SUBJECTS);
    state.selectedSubjectId = INITIAL_SUBJECTS[0].id;
    state.selectedConceptId = INITIAL_SUBJECTS[0].concepts[0].id;
    state.activePdfPage = INITIAL_SUBJECTS[0].concepts[0].pdfPages[0];
    saveState();
    render();
  });
}

// Global header events
document.querySelectorAll('.nav-btn, .nav-btn-m').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.view = btn.dataset.view;
    saveState();
    render();
  });
});

document.getElementById('brandBtn').addEventListener('click', () => {
  state.view = 'dashboard';
  saveState();
  render();
});

document.getElementById('themeToggle').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  saveState();
  applyTheme();
});

document.getElementById('closeGlossary').addEventListener('click', () => {
  document.getElementById('glossaryModal').classList.add('hidden');
});
document.getElementById('glossaryModal').addEventListener('click', (e) => {
  if (e.target.id === 'glossaryModal') {
    document.getElementById('glossaryModal').classList.add('hidden');
  }
});

// Initial render
render();
