import { INITIAL_SUBJECTS } from './data/sampleData.js';

const STORAGE_KEY = 'dentasync_state_v2';

const defaultState = {
  view: 'dashboard', // 'dashboard' | 'workspace'
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
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);
    const parsed = JSON.parse(raw);
    const merged = {
      ...structuredClone(defaultState),
      ...parsed,
    };
    if (merged.view !== 'dashboard' && merged.view !== 'workspace') {
      merged.view = 'dashboard';
    }
    return merged;
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

// Highlight AMBOSS-style glossary terms inside text while preserving safe inline HTML tags
function renderWithGlossary(text, glossary = {}) {
  let html = escapeHtml(text).replace(
    /&lt;(\/?)(p|strong|em|br|sub|sup)\s*(\/?)&gt;/gi,
    (_, close, tag, selfClose) => `<${close}${tag.toLowerCase()}${selfClose && tag.toLowerCase() === 'br' ? ' /' : ''}>`
  );
  const terms = Object.keys(glossary).filter(Boolean).sort((a, b) => b.length - a.length);
  if (!terms.length) return html;
  const parts = html.split(/(<[^>]+>)/g);
  return parts
    .map((part) => {
      if (part.startsWith('<') && part.endsWith('>')) return part;
      let out = part;
      terms.forEach((term) => {
        const safeTerm = escapeHtml(term);
        const escapedForRegex = safeTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escapedForRegex, 'g');
        out = out.replace(
          regex,
          `<span class="glossary-term" data-term="${safeTerm}">${safeTerm}</span>`
        );
      });
      return out;
    })
    .join('');
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

  const currentExcerpt =
    (concept.pdfExcerpts && concept.pdfExcerpts[state.activePdfPage]) ||
    `[강의자료 ${subj.pdfName} — ${state.activePdfPage}페이지] 해당 페이지의 강의자료 발췌 내용이 등록되어 있지 않습니다.`;

  const pdfViewerHtml = `
      <div class="rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/60 p-4">
        <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
          <span class="font-semibold">📑 ${escapeHtml(subj.pdfName)}</span>
          <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-bold">Page ${state.activePdfPage} / ${subj.totalPages}</span>
        </div>
        <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 p-3.5 rounded-lg border border-slate-200 dark:border-slate-800">
          ${escapeHtml(currentExcerpt)}
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
        <div id="workspaceLeftScroll" class="flex-1 overflow-y-auto p-2.5">
          ${conceptListHtml || '<p class="text-xs text-slate-400 p-4 text-center">검색 결과가 없습니다.</p>'}
        </div>
      </aside>

      <!-- CENTER PANE: AI Concept Summary + PDF Page Sync Viewer -->
      <section id="workspaceCenterScroll" class="${centerVis} lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 overflow-y-auto p-4 sm:p-5 space-y-5 bg-slate-50/50 dark:bg-slate-950">
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
            <div class="text-sm leading-relaxed text-slate-700 dark:text-slate-200 space-y-2">
              ${renderWithGlossary(concept.summary, concept.glossary)}
            </div>
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
          </div>
          ${pdfViewerHtml}
        </div>
      </section>

      <!-- RIGHT PANE: Linked Past Questions & AI Practice Questions -->
      <section id="workspaceRightScroll" class="${rightVis} lg:col-span-4 overflow-y-auto p-4 sm:p-5 bg-slate-100/60 dark:bg-slate-900/40">
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
// RENDER & EVENT BINDING
// ========================
function render(options = {}) {
  const prevLeftTop = document.getElementById('workspaceLeftScroll')?.scrollTop || 0;
  const prevCenterTop = document.getElementById('workspaceCenterScroll')?.scrollTop || 0;
  const prevRightTop = document.getElementById('workspaceRightScroll')?.scrollTop || 0;

  applyTheme();
  updateNavUI();

  const root = document.getElementById('appRoot');
  if (state.view === 'workspace') root.innerHTML = renderWorkspace();
  else root.innerHTML = renderDashboard();

  bindEvents();

  if (state.view === 'workspace') {
    const leftEl = document.getElementById('workspaceLeftScroll');
    const centerEl = document.getElementById('workspaceCenterScroll');
    const rightEl = document.getElementById('workspaceRightScroll');
    if (leftEl) leftEl.scrollTop = options.resetLeftScroll ? 0 : prevLeftTop;
    if (centerEl) centerEl.scrollTop = options.resetConceptScroll ? 0 : prevCenterTop;
    if (rightEl) rightEl.scrollTop = options.resetConceptScroll ? 0 : prevRightTop;
  }
}

function bindEvents() {
  // Dashboard events
  document.getElementById('goWorkspaceBtn')?.addEventListener('click', () => {
    state.view = 'workspace';
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
      render({ resetLeftScroll: true, resetConceptScroll: true });
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
        render({ resetConceptScroll: true });
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
