import { INITIAL_SUBJECTS } from './data/sampleData.js?v=20261114d';

const STORAGE_KEY = 'dentasync_state_v2';

const defaultState = {
  view: 'dashboard', // 'dashboard' | 'catalog' | 'workspace' | 'review'
  subjects: INITIAL_SUBJECTS,
  selectedSubjectId: INITIAL_SUBJECTS[0].id,
  selectedConceptId: INITIAL_SUBJECTS[0].concepts[0].id,
  activePdfPage: INITIAL_SUBJECTS[0].concepts[0].pdfPages[0],
  rightTab: 'past', // 'past' | 'ai'
  mobilePane: 'center', // 'center' | 'right' (for < lg viewports in 2-pane workspace)
  searchQuery: '',
  catalogFilter: 'all', // 'all' | 'pending' | 'mastered'
  reviewTermId: null, // null | 'y1s2-final'
  reviewFilter: 'wrong', // 'wrong' | 'favorites' | 'both'
  reviewSearchQuery: '',
  masteredConcepts: {}, // { [conceptId]: true }
  solvedQuestions: {}, // { [qId]: { selectedIdx, selectedIndices, isCorrect } }
  favorites: {}, // { [qId]: true }
  multiSelections: {}, // { [qId]: number[] }
  shortRevealed: {}, // { [qId]: true }
  strikethroughs: {}, // { [qId]: number[] }
  streak: 0,
  theme: 'light',
};

let pdfFullscreen = false;
const reviewSessionIds = new Set();
let reviewAnswers = createReviewAnswers();

function createReviewAnswers() {
  return { solvedQuestions: {}, multiSelections: {}, shortRevealed: {}, strikethroughs: {} };
}

function resetReviewSession() {
  reviewSessionIds.clear();
  reviewAnswers = createReviewAnswers();
}

function getQuestionState() {
  return state.view === 'review' ? reviewAnswers : state;
}

function recordAnswer(qId, result) {
  // Keep reviewed wrong answers visible until this review session ends.
  if (state.view === 'review' && state.solvedQuestions[qId]?.isCorrect === false) {
    reviewSessionIds.add(qId);
  }
  getQuestionState().solvedQuestions[qId] = result;
  state.solvedQuestions[qId] = result;
}

function findQuestionContext(qId) {
  for (const subj of state.subjects) {
    for (const concept of subj.concepts) {
      const pq = concept.pastQuestions.find((item) => item.id === qId);
      if (pq) return { subj, concept, q: pq, isPast: true };
      const aq = concept.aiQuestions.find((item) => item.id === qId);
      if (aq) return { subj, concept, q: aq, isPast: false };
    }
  }
  return null;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);
    const parsed = JSON.parse(raw);
    const freshSubjects = structuredClone(INITIAL_SUBJECTS);
    const merged = {
      ...structuredClone(defaultState),
      ...parsed,
      subjects: freshSubjects,
    };
    const validSubj = freshSubjects.find((s) => s.id === merged.selectedSubjectId) || freshSubjects[0];
    merged.selectedSubjectId = validSubj.id;
    const validConcept =
      validSubj.concepts.find((c) => c.id === merged.selectedConceptId) || validSubj.concepts[0];
    merged.selectedConceptId = validConcept.id;
    if (!validConcept.pdfPages?.includes(merged.activePdfPage)) {
      merged.activePdfPage = validConcept.pdfPages?.[0] ?? 1;
    }
    const validConceptIds = new Set(freshSubjects.flatMap((s) => s.concepts.map((c) => c.id)));
    merged.masteredConcepts = Object.fromEntries(
      Object.entries(merged.masteredConcepts || {}).filter(([k, v]) => v && validConceptIds.has(k))
    );
    if (!['dashboard', 'catalog', 'workspace', 'review'].includes(merged.view)) {
      merged.view = 'dashboard';
    }
    if (!['wrong', 'favorites', 'both'].includes(merged.reviewFilter)) {
      merged.reviewFilter = 'wrong';
    }
    merged.favorites = merged.favorites && typeof merged.favorites === 'object' ? merged.favorites : {};
    if (!['center', 'right'].includes(merged.mobilePane)) {
      merged.mobilePane = 'center';
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
    selectedSubjectId: state.selectedSubjectId,
    selectedConceptId: state.selectedConceptId,
    activePdfPage: state.activePdfPage,
    rightTab: state.rightTab,
    mobilePane: state.mobilePane,
    catalogFilter: state.catalogFilter,
    reviewTermId: state.reviewTermId,
    reviewFilter: state.reviewFilter,
    masteredConcepts: state.masteredConcepts,
    solvedQuestions: state.solvedQuestions,
    favorites: state.favorites,
    multiSelections: state.multiSelections,
    shortRevealed: state.shortRevealed,
    strikethroughs: state.strikethroughs,
    streak: state.streak,
    theme: state.theme,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
}

function applyTheme() {
  document.documentElement.classList.toggle('dark', state.theme === 'dark');
}

const PDF_DOCS_META = {
  'chem-08': { label: '08장.pdf', totalPages: 71 },
  'chem-09': { label: '09장.pdf', totalPages: 39 },
  'chem-10': { label: '10장.pdf', totalPages: 62 },
  'chem-11': { label: '11장.pdf', totalPages: 54 },
  'chem-12': { label: '12장.pdf', totalPages: 58 },
  'chem-13': { label: '13장.pdf', totalPages: 53 },
  'chem-14': { label: '14장.pdf', totalPages: 49 },
  'sig-09': { label: '09주차.pdf', totalPages: 33 },
  'sig-10': { label: '10주차.pdf', totalPages: 29 },
  'sig-11': { label: '11주차.pdf', totalPages: 22 },
  'sig-12': { label: '12주차.pdf', totalPages: 31 },
  'sig-13': { label: '13주차.pdf', totalPages: 45 },
  'sig-14': { label: '14주차.pdf', totalPages: 13 },
  'bio-21': { label: '21장.pdf', totalPages: 37 },
  'bio-26': { label: '26장.pdf', totalPages: 24 },
  'bio-27': { label: '27장.pdf', totalPages: 25 },
  'bio-28': { label: '28장.pdf', totalPages: 31 },
  'bio-29': { label: '29장.pdf', totalPages: 27 },
  'bio-30': { label: '30장.pdf', totalPages: 24 },
};

function getPdfDocInfo(subj, concept) {
  const ch = concept.chapter || '';
  let docId = null;
  if (subj.id === 'subj-chemistry') {
    const m = ch.match(/^(0[89]|1[0-4])장/);
    if (m) docId = `chem-${m[1]}`;
  } else if (subj.id === 'subj-signal') {
    const m = ch.match(/^(09|1[0-4])주차/);
    if (m) docId = `sig-${m[1]}`;
  } else if (subj.id === 'subj-biology') {
    const m = ch.match(/^(21|26|27|28|29|30)장/);
    if (m) docId = `bio-${m[1]}`;
  }
  if (!docId || !PDF_DOCS_META[docId]) return null;
  return { docId, ...PDF_DOCS_META[docId] };
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

function stripHtml(str) {
  return String(str || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

// Highlight AMBOSS-style glossary terms inside text while preserving safe inline HTML tags
function renderWithGlossary(text, glossary = {}) {
  const html = escapeHtml(text).replace(
    /&lt;(\/?)(p|strong|em|br|sub|sup)\s*(\/?)&gt;/gi,
    (_, close, tag, selfClose) =>
      `<${close}${tag.toLowerCase()}${selfClose && tag.toLowerCase() === 'br' ? ' /' : ''}>`
  );
  const terms = Object.keys(glossary)
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);
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
      ? `nav-btn-m flex-1 py-1.5 px-2.5 rounded-lg text-xs font-semibold whitespace-nowrap text-center transition ${
          isActive
            ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-sm'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        }`
      : `nav-btn px-3 py-1 rounded-lg text-xs font-semibold transition ${
          isActive
            ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`;
  });
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
  const totalQuestions = state.subjects.reduce(
    (sum, s) => sum + s.concepts.reduce((cs, c) => cs + c.pastQuestions.length + c.aiQuestions.length, 0),
    0
  );

  const overallPct = totalConcepts ? Math.round((masteredCount / totalConcepts) * 100) : 0;
  const subjectNames = state.subjects.map((s) => s.name).join(' · ');

  return `
    <div class="bg-grid-subtle min-h-[calc(100dvh-3.5rem)]">
      <div class="max-w-6xl mx-auto px-4 lg:px-6 py-8 space-y-8">
        <!-- Hero Banner (Stripe + Vercel aesthetic) -->
        <div class="rounded-3xl bg-slate-950 text-white p-6 sm:p-8 lg:p-10 shadow-2xl shadow-slate-900/15 relative overflow-hidden border border-slate-800">
          <div class="pointer-events-none absolute -top-24 -right-20 w-80 h-80 rounded-full bg-blue-600/25 blur-3xl"></div>
          <div class="pointer-events-none absolute -bottom-24 left-1/3 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl"></div>
          <div class="relative z-10 max-w-2xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-blue-100 mb-4">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              기말고사 범위 3과목 · ${totalConcepts}개 핵심개념 · ${totalQuestions}문항 연동
            </div>
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-6">
              개념 목차에서 선택하고,<br />강의자료 원문과 기출을 한 화면에.
            </h1>
            <div class="flex flex-wrap gap-3">
              <button id="goCatalogBtn" class="px-5 py-2.5 rounded-xl bg-white text-slate-950 hover:bg-blue-50 font-bold text-sm shadow-lg transition">
                개념 목차 탐색하기 →
              </button>
              <button id="goWorkspaceBtn" class="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-sm transition">
                최근 학습 이어하기
              </button>
            </div>
          </div>
        </div>

        <!-- Exam Term Menu -->
        <div>
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-base font-extrabold tracking-tight">시험 범위별 학습 메뉴</h2>
            <span class="text-xs text-slate-500 dark:text-slate-400">총 ${totalQuestions}문항 수록</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <button
              type="button"
              data-go-catalog="true"
              class="group text-left bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 hover:shadow-xl hover:shadow-slate-900/5 hover:border-blue-400/70 dark:hover:border-blue-500/60 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div class="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 mb-2.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      ${state.subjects.length}과목 · PDF 727p
                    </span>
                    <h3 class="text-lg font-extrabold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">1학년 2학기 기말고사</h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">${escapeHtml(subjectNames)}</p>
                  </div>
                  <div class="px-2.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 font-extrabold text-xs tabular-nums shrink-0">
                    ${masteredCount}/${totalConcepts} ${overallPct}%
                  </div>
                </div>
              </div>

              <div class="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <div class="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
                  <div class="h-full rounded-full bg-blue-600 transition-all duration-500" style="width: ${overallPct}%"></div>
                </div>
                <div class="flex items-center justify-between text-xs">
                  <span class="text-slate-500 dark:text-slate-400 tabular-nums">핵심개념 ${totalConcepts} · 기출 ${totalQuestions}문항</span>
                  <span class="font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition">개념 목차 열기 →</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ========================
// 2. INDEPENDENT CONCEPT CATALOG VIEW (Extracted Left Pane)
// ========================
function renderCatalog() {
  const subj = getCurrentSubject();
  const q = state.searchQuery.trim().toLowerCase();

  const subjectTabsHtml = state.subjects
    .map((s) => {
      const active = s.id === subj.id;
      const mCount = s.concepts.filter((c) => state.masteredConcepts[c.id]).length;
      const pct = s.concepts.length ? Math.round((mCount / s.concepts.length) * 100) : 0;
      const badgeCls = active
        ? 'bg-white/15 dark:bg-slate-900/15 text-white dark:text-slate-900'
        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400';
      return `
        <button
          data-catalog-subject="${s.id}"
          class="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-left transition whitespace-nowrap ${
            active
              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 border-slate-900 dark:border-white shadow-sm'
              : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
          }"
        >
          <span class="w-2 h-2 rounded-full shrink-0" style="background-color: ${s.color}"></span>
          <span class="text-sm font-bold">${escapeHtml(s.name)}</span>
          <span class="flex items-center gap-1">
            <span class="text-[11px] font-semibold px-1.5 py-0.5 rounded-md tabular-nums ${badgeCls}">${mCount}/${s.concepts.length}</span>
            <span class="text-[11px] font-semibold px-1.5 py-0.5 rounded-md tabular-nums ${badgeCls}">${pct}%</span>
          </span>
        </button>
      `;
    })
    .join('');

  const filtered = subj.concepts.filter((c) => {
    const mastered = !!state.masteredConcepts[c.id];
    if (state.catalogFilter === 'mastered' && !mastered) return false;
    if (state.catalogFilter === 'pending' && mastered) return false;
    if (!q) return true;
    return (
      c.title.toLowerCase().includes(q) ||
      c.chapter.toLowerCase().includes(q) ||
      c.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  // Group filtered concepts by chapter/week while preserving order
  const groups = [];
  const groupMap = new Map();
  filtered.forEach((c) => {
    const key = c.chapter || '기타';
    if (!groupMap.has(key)) {
      const g = { chapter: key, items: [] };
      groupMap.set(key, g);
      groups.push(g);
    }
    groupMap.get(key).items.push(c);
  });

  const groupsHtml = groups
    .map((g) => {
      const gMastered = g.items.filter((c) => state.masteredConcepts[c.id]).length;
      const cardsHtml = g.items
        .map((c) => {
          const isSelected = c.id === state.selectedConceptId;
          const mastered = !!state.masteredConcepts[c.id];
          const pageLabel =
            c.pdfPages.length > 1
              ? `p.${c.pdfPages[0]}-${c.pdfPages[c.pdfPages.length - 1]}`
              : `p.${c.pdfPages[0]}`;
          const titleTags = c.title
            .split('·')
            .map((title) => title.trim())
            .filter(Boolean)
            .map((title) => `<span class="inline-flex items-center px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold leading-snug text-slate-700 dark:text-slate-200">${escapeHtml(title)}</span>`)
            .join('');

          return `
            <button
              data-select-concept="${c.id}"
              class="group text-left p-4 rounded-2xl border transition-all duration-150 flex flex-col justify-between bg-white dark:bg-slate-900/90 hover:shadow-md hover:-translate-y-0.5 ${
                isSelected
                  ? 'border-blue-500 ring-2 ring-blue-500/20'
                  : 'border-slate-200/80 dark:border-slate-800 hover:border-blue-400/70'
              }"
            >
              <div>
                <div class="flex items-center justify-between gap-2 mb-2">
                  <span class="inline-flex items-center gap-1.5 text-[11px] font-bold ${
                    mastered ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'
                  }">
                    <span class="w-2 h-2 rounded-full ${mastered ? 'bg-emerald-500' : 'bg-amber-400'}"></span>
                    ${mastered ? '마스터 완료' : '학습 중'}
                  </span>
                  <span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-bold text-slate-600 dark:text-slate-300 tabular-nums">
                    ${pageLabel}
                  </span>
                </div>
                <h3 class="flex flex-wrap gap-1.5 mb-3">
                  ${titleTags}
                </h3>
              </div>
              <div class="flex items-center justify-between pt-2.5 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400">
                <div class="flex items-center gap-2 tabular-nums">
                  <span class="font-semibold text-indigo-600 dark:text-indigo-400">기출 ${c.pastQuestions.length}</span>
                  <span>·</span>
                  <span>AI연습 ${c.aiQuestions.length}</span>
                </div>
                <span class="font-bold text-blue-600 dark:text-blue-400 opacity-80 group-hover:opacity-100">학습하기 →</span>
              </div>
            </button>
          `;
        })
        .join('');

      const chMatch = g.chapter.match(/^(\d+(?:장|주차))(?:\s*·\s*|\s+)(.+)$/);
      const chapterHeadingHtml = chMatch
        ? `<span class="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-extrabold border tabular-nums shrink-0" style="background-color: ${subj.color}14; border-color: ${subj.color}38; color: ${subj.color}">${escapeHtml(chMatch[1])}</span><span class="truncate">${escapeHtml(chMatch[2])}</span>`
        : `<span class="w-1.5 h-4 rounded-full shrink-0" style="background-color: ${subj.color}"></span><span>${escapeHtml(g.chapter)}</span>`;

      return `
        <section class="space-y-3">
          <div class="flex items-center justify-between gap-2 px-1">
            <h2 class="text-sm font-extrabold tracking-tight text-slate-800 dark:text-slate-200 flex items-center gap-2 min-w-0">
              ${chapterHeadingHtml}
            </h2>
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 tabular-nums">
              ${gMastered} / ${g.items.length} 완료
            </span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            ${cardsHtml}
          </div>
        </section>
      `;
    })
    .join('');

  const filterBtnCls = (f) =>
    state.catalogFilter === f
      ? 'px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-950 transition'
      : 'px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition';

  return `
    <div class="bg-grid-subtle min-h-[calc(100dvh-3.5rem)]">
      <div class="max-w-6xl mx-auto px-4 lg:px-6 py-6 space-y-6">
        <!-- Subject Tabs -->
        <div class="flex items-center gap-2.5 overflow-x-auto pb-1">
          ${subjectTabsHtml}
        </div>

        <!-- Search & Filter Bar (Raycast style) -->
        <div class="bg-white dark:bg-slate-900/95 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-3 sm:p-4 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div class="relative flex-1">
            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
            <input
              id="conceptSearch"
              type="text"
              value="${escapeHtml(state.searchQuery)}"
              class="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div class="flex items-center gap-1 p-1 rounded-xl bg-slate-100/80 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 shrink-0">
            <button type="button" data-catalog-filter="all" class="${filterBtnCls('all')}">전체 (${subj.concepts.length})</button>
            <button type="button" data-catalog-filter="pending" class="${filterBtnCls('pending')}">미완료</button>
            <button type="button" data-catalog-filter="mastered" class="${filterBtnCls('mastered')}">완료</button>
          </div>
        </div>

        <!-- Grouped Concept Grid -->
        <div class="space-y-7 pb-8">
          ${
            groupsHtml ||
            `<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-10 text-center text-sm text-slate-400">
              조건에 맞는 개념이 없습니다. 검색어나 필터를 초기화해 보세요.
            </div>`
          }
        </div>
      </div>
    </div>
  `;
}

// ========================
// 3. 2-PANE LEARNING WORKSPACE VIEW (Center + Right Panes)
// ========================
function renderQuestionCard(q, typeLabel, badgeColor, extraMeta = null) {
  const solved = getQuestionState().solvedQuestions[q.id];
  const isFav = !!state.favorites[q.id];
  const strikes = getQuestionState().strikethroughs[q.id] || [];
  const isMulti = q.qType === 'multi' && Array.isArray(q.answerIndices);
  const isShort = q.qType === 'short' || !q.choices || q.choices.length === 0;

  let bodyHtml = '';

  if (isShort) {
    const revealed = !!getQuestionState().shortRevealed[q.id] || !!solved;
    const ansText = q.shortAnswer || '해설 참조';
    bodyHtml = `
      <div class="space-y-2.5">
        ${
          !revealed
            ? `<button data-short-reveal="${q.id}" class="w-full py-2.5 px-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/70 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-bold hover:bg-blue-100 dark:hover:bg-blue-900/50 transition">
                모범 답안 확인하기 (주관식/단답형)
              </button>`
            : `<div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                <div class="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 mb-1">모범 답안</div>
                <div class="text-xs font-semibold text-slate-800 dark:text-slate-100 leading-relaxed whitespace-pre-line">${escapeHtml(ansText)}</div>
              </div>`
        }
        ${
          revealed && !solved
            ? `<div class="flex items-center gap-2">
                <button data-short-grade="${q.id}" data-grade-correct="true" class="flex-1 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition">✓ 맞았음</button>
                <button data-short-grade="${q.id}" data-grade-correct="false" class="flex-1 py-2 rounded-lg bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold transition">✕ 다시 보기</button>
              </div>`
            : ''
        }
      </div>
    `;
  } else if (isMulti) {
    const selectedArr = solved ? solved.selectedIndices || [] : getQuestionState().multiSelections[q.id] || [];
    const expectedArr = q.answerIndices || [];
    const choicesHtml = q.choices
      .map((ch, idx) => {
        const isSel = selectedArr.includes(idx);
        const isAnswer = expectedArr.includes(idx);
        const isStruck = strikes.includes(idx);

        let btnClass =
          'border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/30';
        if (solved) {
          if (isAnswer) {
            btnClass =
              'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 font-semibold';
          } else if (isSel && !isAnswer) {
            btnClass =
              'border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200';
          } else {
            btnClass = 'border-slate-200 dark:border-slate-800 opacity-60';
          }
        } else if (isSel) {
          btnClass =
            'border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-semibold';
        }

        return `
          <div class="flex items-center gap-1.5">
            <button
              data-multi-toggle="${q.id}"
              data-choice-idx="${idx}"
              class="flex-1 text-left px-3 py-2 rounded-xl border text-xs leading-relaxed transition flex items-start gap-2.5 ${btnClass} ${isStruck && !solved ? 'choice-strikethrough' : ''}"
            >
              <span class="w-5 h-5 rounded-md border border-current/25 flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">${isSel ? '✓' : idx + 1}</span>
              <span>${escapeHtml(ch)}</span>
            </button>
            ${
              !solved
                ? `<button data-strike-q="${q.id}" data-strike-idx="${idx}" title="소거선 긋기" class="px-1.5 py-2 text-slate-400 hover:text-rose-500 text-xs">✕</button>`
                : ''
            }
          </div>
        `;
      })
      .join('');

    bodyHtml = `
      <div class="space-y-1.5">${choicesHtml}</div>
      ${
        !solved
          ? `<button data-multi-submit="${q.id}" class="mt-2.5 w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition disabled:opacity-40" ${
              selectedArr.length === 0 ? 'disabled' : ''
            }>복수 정답 제출하기 (${selectedArr.length}개 선택)</button>`
          : ''
      }
    `;
  } else {
    const isOx = q.qType === 'ox';
    const choicesHtml = q.choices
      .map((ch, idx) => {
        const isSelected = solved?.selectedIdx === idx;
        const isAnswer = q.answerIndex === idx;
        const isStruck = strikes.includes(idx);

        let btnClass =
          'border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/30';
        if (solved) {
          if (isAnswer) {
            btnClass =
              'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 font-semibold';
          } else if (isSelected && !isAnswer) {
            btnClass =
              'border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200';
          } else {
            btnClass = 'border-slate-200 dark:border-slate-800 opacity-60';
          }
        }

        if (isOx) {
          const oxLabel = idx === 0 ? 'O' : 'X';
          return `
            <button
              data-answer-q="${q.id}"
              data-choice-idx="${idx}"
              class="w-full py-2.5 px-4 rounded-xl border text-sm font-extrabold tracking-wide transition flex items-center justify-center ${btnClass}"
            >
              ${oxLabel}
            </button>
          `;
        }

        const badgeLabel = String(idx + 1);

        return `
          <div class="flex items-center gap-1.5">
            <button
              data-answer-q="${q.id}"
              data-choice-idx="${idx}"
              class="flex-1 text-left px-3 py-2 rounded-xl border text-xs leading-relaxed transition flex items-start gap-2.5 ${btnClass} ${isStruck && !solved ? 'choice-strikethrough' : ''}"
            >
              <span class="w-5 h-5 rounded-full border border-current/25 flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">${badgeLabel}</span>
              <span>${escapeHtml(ch)}</span>
            </button>
            ${
              !solved && !isOx
                ? `<button data-strike-q="${q.id}" data-strike-idx="${idx}" title="소거선 긋기" class="px-1.5 py-2 text-slate-400 hover:text-rose-500 text-xs">✕</button>`
                : ''
            }
          </div>
        `;
      })
      .join('');
    bodyHtml = `<div class="${isOx ? 'grid grid-cols-2 gap-2' : 'space-y-1.5'}">${choicesHtml}</div>`;
  }

  const sourceTagHtml = extraMeta
    ? `<span class="px-2 py-0.5 rounded-md text-[11px] font-bold ${
        extraMeta.isPast
          ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800/70'
          : 'bg-violet-100 text-violet-800 dark:bg-violet-950/60 dark:text-violet-300 border border-violet-200 dark:border-violet-800/70'
      }">${extraMeta.isPast ? '기출' : 'AI'}</span>`
    : '';

  const jumpAttrs = extraMeta
    ? `data-jump-page="${q.pdfRefPage}" data-jump-concept="${extraMeta.conceptId}" data-jump-subj="${extraMeta.subjId}"`
    : `data-jump-page="${q.pdfRefPage}"`;

  return `
    <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
      <div class="flex items-center justify-between gap-2 mb-2.5">
        <div class="flex items-center gap-1.5 min-w-0 flex-wrap">
          ${sourceTagHtml}
          <span class="px-2 py-0.5 rounded-md text-[11px] font-bold ${badgeColor}">${escapeHtml(typeLabel)}</span>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <button
            type="button"
            data-toggle-fav="${q.id}"
            title="${isFav ? '즐겨찾기 해제' : '즐겨찾기 추가'}"
            aria-label="${isFav ? '즐겨찾기 해제' : '즐겨찾기 추가'}"
            class="w-7 h-7 rounded-lg flex items-center justify-center text-base leading-none transition ${
              isFav
                ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/50 hover:bg-amber-100 dark:hover:bg-amber-900/50'
                : 'text-slate-300 dark:text-slate-600 hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }"
          >${isFav ? '★' : '☆'}</button>
          <button ${jumpAttrs} class="text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline tabular-nums">
            📄 PDF p.${q.pdfRefPage} 보기
          </button>
        </div>
      </div>
      <p class="text-sm font-semibold leading-relaxed mb-3 whitespace-pre-line">${escapeHtml(q.stem)}</p>
      ${bodyHtml}
      ${
        solved
          ? `
        <div class="mt-3 p-3 rounded-xl text-xs leading-relaxed ${
          solved.isCorrect
            ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800'
            : 'bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800'
        }">
          <div class="flex items-center justify-between font-bold mb-1 ${solved.isCorrect ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'}">
            <span>${solved.isCorrect ? '✓ 정답입니다!' : '✕ 오답 / 복습 필요'}</span>
            <button data-reset-q="${q.id}" class="text-[11px] underline font-medium">다시 풀기</button>
          </div>
          <p class="text-slate-700 dark:text-slate-300 whitespace-pre-line">${escapeHtml(q.rationale)}</p>
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
  const conceptIdx = subj.concepts.findIndex((c) => c.id === concept.id);
  const isMastered = !!state.masteredConcepts[concept.id];

  const docInfo = getPdfDocInfo(subj, concept);
  const totalDocPages = docInfo ? docInfo.totalPages : subj.totalPages;
  const activePage = Math.max(1, Math.min(Number(state.activePdfPage) || 1, totalDocPages));

  const pageButtonsHtml = concept.pdfPages
    .map((p) => {
      const active = activePage === p;
      return `
        <button
          data-jump-page="${p}"
          class="px-2.5 py-1 rounded-lg text-xs font-bold transition tabular-nums ${
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

  const pdfViewerHtml = docInfo
    ? `
      <div class="space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2 bg-slate-50 dark:bg-slate-950/70 px-3 py-2 rounded-xl border border-slate-200/80 dark:border-slate-800">
          <div class="flex items-center gap-2 min-w-0">
            <span class="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate max-w-[180px] sm:max-w-xs" title="${escapeHtml(docInfo.label)}">
              📑 ${escapeHtml(docInfo.label)}
            </span>
          </div>
          <div class="flex items-center gap-2">
            <span id="pdfPageIndicator" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold tabular-nums">
              p.${activePage} / ${docInfo.totalPages}
            </span>
            <button
              id="pdfFullscreenBtn"
              type="button"
              class="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="전체화면으로 보기"
            >
              ⛶ 확대
            </button>
          </div>
        </div>
        <div id="pdfSlideFrame" class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-950">
          <img
            id="pdfSlideImg"
            src="./slides/${docInfo.docId}/p${activePage}.webp"
            alt="${escapeHtml(docInfo.label)} ${activePage}페이지"
            class="w-full h-auto block select-none"
            loading="eager"
          />
          ${activePage < docInfo.totalPages ? `<link rel="prefetch" href="./slides/${docInfo.docId}/p${activePage + 1}.webp" />` : ''}
        </div>
      </div>
    `
    : `
      <div class="rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/60 p-5 text-center text-xs text-slate-500 dark:text-slate-400">
        해당 단원(${escapeHtml(concept.chapter)})은 중간고사 범위로 원문 PDF 강의자료가 첨부되지 않았습니다.
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

  const mp = state.mobilePane === 'right' ? 'right' : 'center';
  const centerVis = mp === 'center' ? 'block' : 'hidden lg:block';
  const rightVis = mp === 'right' ? 'block' : 'hidden lg:block';
  const tabBtnCls = (pane) =>
    mp === pane
      ? 'flex-1 py-2 px-2 text-xs font-bold rounded-lg bg-slate-900 dark:bg-blue-600 text-white shadow-sm transition'
      : 'flex-1 py-2 px-2 text-xs font-semibold rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition';

  return `
    <!-- Workspace Sub-Header (Linear-style breadcrumb + quick concept stepper) -->
    <div class="border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/90 backdrop-blur px-4 lg:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2">
      <div class="flex items-center gap-2 min-w-0">
        <button id="backToCatalogBtn" class="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition shrink-0">
          ← 개념 목차
        </button>
        <span class="text-slate-300 dark:text-slate-700">/</span>
        <span class="px-2 py-0.5 rounded-md text-[11px] font-bold shrink-0" style="background-color: ${subj.color}15; color: ${subj.color}">
          ${escapeHtml(subj.name)}
        </span>
        <span class="text-xs font-semibold text-slate-600 dark:text-slate-300 truncate max-w-[180px] sm:max-w-md">
          ${escapeHtml(concept.title)}
        </span>
      </div>
      <div class="flex items-center gap-1.5 shrink-0">
        <button
          id="prevConceptBtn"
          ${conceptIdx <= 0 ? 'disabled' : ''}
          class="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 transition"
        >
          ◀ 이전 개념
        </button>
        <span class="text-[11px] font-semibold text-slate-400 tabular-nums px-1">${conceptIdx + 1} / ${subj.concepts.length}</span>
        <button
          id="nextConceptBtn"
          ${conceptIdx >= subj.concepts.length - 1 ? 'disabled' : ''}
          class="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 transition"
        >
          다음 개념 ▶
        </button>
      </div>
    </div>

    <!-- Mobile 2-Pane Switcher (<lg) -->
    <div class="lg:hidden sticky top-14 z-20 bg-white/95 dark:bg-slate-950/95 backdrop-blur border-b border-slate-200/80 dark:border-slate-800 px-3 py-2 flex items-center gap-1.5">
      <button type="button" data-mobile-pane="center" class="${tabBtnCls('center')}">📖 개념 요약 · PDF</button>
      <button type="button" data-mobile-pane="right" class="${tabBtnCls('right')}">📝 기출 풀이 (${concept.pastQuestions.length})</button>
    </div>

    <!-- 2-Pane Split Layout (Center: Concept+PDF / Right: Questions) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 lg:h-[calc(100dvh-6.35rem)]">
      <!-- PANE 1 (Former Center): Concept Summary + Original PDF Slide Viewer -->
      <section id="workspaceCenterScroll" class="${centerVis} lg:col-span-7 border-b lg:border-b-0 lg:border-r border-slate-200/80 dark:border-slate-800 overflow-y-auto p-4 sm:p-6 space-y-5 bg-slate-50/50 dark:bg-slate-950">
        <!-- Concept Header Card -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2.5">
            <span class="text-xs font-bold text-blue-600 dark:text-blue-400">${escapeHtml(concept.chapter)}</span>
            <button
              id="toggleMasterBtn"
              class="px-3 py-1 rounded-full text-xs font-bold border transition ${
                isMastered
                  ? 'bg-emerald-500 border-emerald-500 text-white shadow-xs'
                  : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-emerald-500'
              }"
            >
              ${isMastered ? '✓ 마스터 완료' : '완료 체크'}
            </button>
          </div>
          <h2 class="text-xl font-extrabold tracking-tight mb-3">${escapeHtml(concept.title)}</h2>
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${concept.tags
              .map(
                (t) =>
                  `<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-medium">#${escapeHtml(t)}</span>`
              )
              .join('')}
          </div>

          <!-- AI Summary -->
          <div class="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 mb-4">
            <div class="flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-300 mb-2">
              <span>✨</span> 강의자료 기반 핵심 요약 <span class="font-normal text-blue-500">(밑줄 용어 클릭 시 팝업)</span>
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

        <!-- PDF Original Slide Viewer Card -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span class="text-sm font-extrabold tracking-tight">📄 강의자료 PDF 원문</span>
            <span class="text-[11px] font-medium text-slate-500 dark:text-slate-400">개념 해당 페이지 바로가기</span>
          </div>
          <div class="flex flex-wrap items-center gap-1 mb-3">${pageButtonsHtml}</div>
          ${pdfViewerHtml}
        </div>
      </section>

      <!-- PANE 2 (Former Right): Linked Past Questions & AI Practice Questions -->
      <section id="workspaceRightScroll" class="${rightVis} lg:col-span-5 overflow-y-auto p-4 sm:p-6 bg-slate-100/70 dark:bg-slate-900/40">
        <div class="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/80 dark:bg-slate-800/90 mb-4">
          <button
            data-right-tab="past"
            class="flex-1 py-2 rounded-lg text-xs font-bold transition ${
              state.rightTab === 'past'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }"
          >
            연결 기출문제 (${concept.pastQuestions.length})
          </button>
          <button
            data-right-tab="ai"
            class="flex-1 py-2 rounded-lg text-xs font-bold transition ${
              state.rightTab === 'ai'
                ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }"
          >
            AI 변형 연습 (${concept.aiQuestions.length})
          </button>
        </div>

        <div class="space-y-3.5">
          ${questionsToShow.join('') || '<p class="text-xs text-slate-400 p-6 text-center">등록된 문항이 없습니다.</p>'}
        </div>
      </section>
    </div>
  `;
}

// ========================
// 4. REVIEW VIEW (복습)
// ========================
function matchesReviewFilter(q, filter) {
  const solved = state.solvedQuestions[q.id];
  const isWrong = (solved && solved.isCorrect === false) || reviewSessionIds.has(q.id);
  const isFav = !!state.favorites[q.id];
  if (filter === 'wrong') return isWrong;
  if (filter === 'favorites') return isFav;
  return isWrong || isFav;
}

function renderReview() {
  if (!state.reviewTermId) {
    let wrongCount = 0;
    let favCount = 0;
    let bothCount = 0;
    let totalQuestions = 0;
    state.subjects.forEach((s) => {
      s.concepts.forEach((c) => {
        const allQ = [...c.pastQuestions, ...c.aiQuestions];
        totalQuestions += allQ.length;
        allQ.forEach((q) => {
          if (matchesReviewFilter(q, 'wrong')) wrongCount += 1;
          if (matchesReviewFilter(q, 'favorites')) favCount += 1;
          if (matchesReviewFilter(q, 'both')) bothCount += 1;
        });
      });
    });
    const subjectNames = state.subjects.map((s) => s.name).join(' · ');
    return `
      <div class="bg-grid-subtle min-h-[calc(100dvh-3.5rem)]">
        <div class="max-w-6xl mx-auto px-4 lg:px-6 py-8 space-y-6">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-base font-extrabold tracking-tight">시험 범위별 복습 메뉴</h2>
              <span class="text-xs text-slate-500 dark:text-slate-400">총 ${totalQuestions}문항 중 ${bothCount}문항 복습 대상</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <button
                type="button"
                data-review-term="y1s2-final"
                class="group text-left bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 hover:shadow-xl hover:shadow-slate-900/5 hover:border-blue-400/70 dark:hover:border-blue-500/60 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div class="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 mb-2.5">
                        <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        ${state.subjects.length}과목 · 오답 &amp; 즐겨찾기
                      </span>
                      <h3 class="text-lg font-extrabold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">1학년 2학기 기말고사</h3>
                      <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">${escapeHtml(subjectNames)}</p>
                    </div>
                    <div class="px-2.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 font-extrabold text-xs tabular-nums shrink-0">
                      ${bothCount}문항
                    </div>
                  </div>
                </div>

                <div class="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-slate-500 dark:text-slate-400 tabular-nums">오답 ${wrongCount} · 즐겨찾기 ${favCount}</span>
                    <span class="font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition">복습 열기 →</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  const subj = getCurrentSubject();
  const qText = state.reviewSearchQuery.trim().toLowerCase();

  const subjectTabsHtml = state.subjects
    .map((s) => {
      const active = s.id === subj.id;
      let count = 0;
      s.concepts.forEach((c) => {
        c.pastQuestions.forEach((pq) => {
          if (matchesReviewFilter(pq, state.reviewFilter)) count += 1;
        });
        c.aiQuestions.forEach((aq) => {
          if (matchesReviewFilter(aq, state.reviewFilter)) count += 1;
        });
      });
      return `
        <button
          data-review-subject="${s.id}"
          class="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-left transition whitespace-nowrap ${
            active
              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 border-slate-900 dark:border-white shadow-sm'
              : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
          }"
        >
          <span class="w-2 h-2 rounded-full shrink-0" style="background-color: ${s.color}"></span>
          <span class="text-sm font-bold">${escapeHtml(s.name)}</span>
          <span class="text-[11px] font-semibold px-1.5 py-0.5 rounded-md tabular-nums ${
            active
              ? 'bg-white/15 dark:bg-slate-900/15 text-white dark:text-slate-900'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
          }">${count}문항</span>
        </button>
      `;
    })
    .join('');

  // Flatten questions in existing chapter -> week -> concept order
  const items = [];
  subj.concepts.forEach((concept) => {
    const matchText = (qObj) => {
      if (!qText) return true;
      return (
        qObj.stem.toLowerCase().includes(qText) ||
        (qObj.rationale || '').toLowerCase().includes(qText) ||
        (qObj.choices || []).some((ch) => ch.toLowerCase().includes(qText)) ||
        concept.title.toLowerCase().includes(qText) ||
        concept.chapter.toLowerCase().includes(qText)
      );
    };
    concept.pastQuestions.forEach((pq) => {
      if (matchesReviewFilter(pq, state.reviewFilter) && matchText(pq)) {
        items.push({ q: pq, concept, isPast: true });
      }
    });
    concept.aiQuestions.forEach((aq) => {
      if (matchesReviewFilter(aq, state.reviewFilter) && matchText(aq)) {
        items.push({ q: aq, concept, isPast: false });
      }
    });
  });

  const filterBtnCls = (f) =>
    state.reviewFilter === f
      ? 'px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-950 transition'
      : 'px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition';

  const cardsHtml = items
    .map(({ q, concept, isPast }) => {
      const typeLabel = concept.chapter || (isPast ? q.year || '기출' : 'AI 변형');
      const badgeColor = isPast
        ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
        : 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300';
      return renderQuestionCard(q, typeLabel, badgeColor, {
        isPast,
        conceptId: concept.id,
        subjId: subj.id,
      });
    })
    .join('');

  const emptyMessage =
    state.reviewFilter === 'wrong'
      ? '틀린 문제가 없습니다. 오답이 생기면 이곳에 자동으로 모입니다.'
      : state.reviewFilter === 'favorites'
        ? '즐겨찾기한 문제가 없습니다. 문제 카드의 ☆ 별표를 눌러 추가해 보세요.'
        : '오답이거나 즐겨찾기한 문제가 없습니다.';

  return `
    <div class="bg-grid-subtle min-h-[calc(100dvh-3.5rem)]">
      <div class="max-w-4xl mx-auto px-4 lg:px-6 py-6 space-y-6">
        <div class="flex items-center justify-between gap-3">
          <button
            type="button"
            id="reviewBackBtn"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 transition"
          >
            ← 시험 범위 선택
          </button>
          <span class="text-xs font-bold text-slate-500 dark:text-slate-400">1학년 2학기 기말고사</span>
        </div>

        <!-- Subject Tabs -->
        <div class="flex items-center gap-2.5 overflow-x-auto pb-1">
          ${subjectTabsHtml}
        </div>

        <!-- Search & Filter Bar -->
        <div class="bg-white dark:bg-slate-900/95 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-3 sm:p-4 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div class="relative flex-1">
            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
            <input
              id="reviewSearch"
              type="text"
              value="${escapeHtml(state.reviewSearchQuery)}"
              class="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
            />
          </div>
          <div class="flex items-center gap-1 p-1 rounded-xl bg-slate-100/80 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 shrink-0">
            <button data-review-filter="wrong" class="${filterBtnCls('wrong')}">오답</button>
            <button data-review-filter="favorites" class="${filterBtnCls('favorites')}">즐겨찾기</button>
            <button data-review-filter="both" class="${filterBtnCls('both')}">오답 및 즐겨찾기</button>
          </div>
        </div>

        <!-- Flat Question List -->
        <div class="space-y-3.5 pb-8">
          ${
            cardsHtml ||
            `<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-10 text-center text-sm text-slate-400">
              ${emptyMessage}
            </div>`
          }
        </div>
      </div>
    </div>
  `;
}

// ========================
// RENDER & EVENT BINDING
// ========================
function render(options = {}) {
  const prevCenterTop = document.getElementById('workspaceCenterScroll')?.scrollTop || 0;
  const prevRightTop = document.getElementById('workspaceRightScroll')?.scrollTop || 0;

  applyTheme();
  updateNavUI();

  const root = document.getElementById('appRoot');
  if (state.view === 'catalog') root.innerHTML = renderCatalog();
  else if (state.view === 'workspace') root.innerHTML = renderWorkspace();
  else if (state.view === 'review') root.innerHTML = renderReview();
  else root.innerHTML = renderDashboard();

  bindEvents();

  if (state.view === 'workspace') {
    const centerEl = document.getElementById('workspaceCenterScroll');
    const rightEl = document.getElementById('workspaceRightScroll');
    if (centerEl) centerEl.scrollTop = options.resetConceptScroll ? 0 : prevCenterTop;
    if (rightEl) rightEl.scrollTop = options.resetConceptScroll ? 0 : prevRightTop;
  } else if (pdfFullscreen) {
    closePdfFullscreen();
  }
}

function syncPdfFullscreenModal() {
  const modal = document.getElementById('pdfFullscreenModal');
  if (!modal || !pdfFullscreen) return;
  const subj = getCurrentSubject();
  const concept = getCurrentConcept();
  const docInfo = getPdfDocInfo(subj, concept);
  if (!docInfo) return;
  const activePage = Math.max(1, Math.min(Number(state.activePdfPage) || 1, docInfo.totalPages));

  const fsImg = document.getElementById('pdfFsImg');
  if (fsImg) {
    fsImg.src = `./slides/${docInfo.docId}/p${activePage}.webp`;
    fsImg.alt = `${docInfo.label} ${activePage}페이지`;
  }
  const fsIndicator = document.getElementById('pdfFsIndicator');
  if (fsIndicator) {
    fsIndicator.textContent = `p.${activePage} / ${docInfo.totalPages}`;
  }
  const fsPageButtons = document.getElementById('pdfFsPageButtons');
  if (fsPageButtons) {
    fsPageButtons.innerHTML = (concept.pdfPages || [])
      .map((p) => {
        const active = activePage === p;
        return `
          <button
            type="button"
            data-fs-jump-page="${p}"
            class="px-2.5 py-1 rounded-lg text-xs font-bold transition tabular-nums shrink-0 ${
              active
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white/10 text-slate-200 hover:bg-white/20'
            }"
          >
            p.${p}
          </button>
        `;
      })
      .join('');
    fsPageButtons.querySelectorAll('[data-fs-jump-page]').forEach((btn) => {
      btn.addEventListener('click', () => {
        setActivePdfPage(Number(btn.dataset.fsJumpPage));
      });
    });
  }
}

function openPdfFullscreen() {
  const modal = document.getElementById('pdfFullscreenModal');
  if (!modal) return;
  pdfFullscreen = true;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  syncPdfFullscreenModal();
}

function closePdfFullscreen() {
  const modal = document.getElementById('pdfFullscreenModal');
  pdfFullscreen = false;
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function setActivePdfPage(targetPage) {
  const docInfo = getPdfDocInfo(getCurrentSubject(), getCurrentConcept());
  if (!docInfo) return;
  const nextPage = Math.max(1, Math.min(Number(targetPage) || 1, docInfo.totalPages));
  state.activePdfPage = nextPage;
  saveState();

  const img = document.getElementById('pdfSlideImg');
  const frame = document.getElementById('pdfSlideFrame');
  if (img && frame) {
    const prevHeight = frame.offsetHeight;
    if (prevHeight > 0) frame.style.minHeight = `${prevHeight}px`;
    img.onload = () => {
      frame.style.minHeight = '';
    };
    img.src = `./slides/${docInfo.docId}/p${nextPage}.webp`;
    img.alt = `${docInfo.label} ${nextPage}페이지`;
    if (nextPage < docInfo.totalPages) {
      const preNext = new Image();
      preNext.src = `./slides/${docInfo.docId}/p${nextPage + 1}.webp`;
    }
    if (nextPage > 1) {
      const prePrev = new Image();
      prePrev.src = `./slides/${docInfo.docId}/p${nextPage - 1}.webp`;
    }
  } else {
    render();
    return;
  }

  const indicator = document.getElementById('pdfPageIndicator');
  if (indicator) indicator.textContent = `p.${nextPage} / ${docInfo.totalPages}`;

  const activeCls = 'px-2.5 py-1 rounded-lg text-xs font-bold transition tabular-nums bg-blue-600 text-white shadow-sm';
  const inactiveCls = 'px-2.5 py-1 rounded-lg text-xs font-bold transition tabular-nums bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700';
  document.querySelectorAll('[data-jump-page]').forEach((btn) => {
    if (btn.closest('#pdfSlideFrame') || btn.textContent.trim().startsWith('p.')) {
      btn.className = Number(btn.dataset.jumpPage) === nextPage ? activeCls : inactiveCls;
    }
  });

  if (pdfFullscreen) {
    syncPdfFullscreenModal();
  }
}

function stepPdfPage(delta) {
  const docInfo = getPdfDocInfo(getCurrentSubject(), getCurrentConcept());
  if (!docInfo) return;
  const cur = Math.max(1, Math.min(Number(state.activePdfPage) || 1, docInfo.totalPages));
  const next = cur + delta;
  if (next >= 1 && next <= docInfo.totalPages) {
    setActivePdfPage(next);
  }
}

function bindEvents() {
  // Dashboard events
  document.getElementById('goCatalogBtn')?.addEventListener('click', () => {
    state.view = 'catalog';
    saveState();
    render();
    window.scrollTo({ top: 0 });
  });
  document.getElementById('goWorkspaceBtn')?.addEventListener('click', () => {
    state.view = 'workspace';
    saveState();
    render({ resetConceptScroll: true });
    window.scrollTo({ top: 0 });
  });
  document.querySelectorAll('[data-go-catalog]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.view = 'catalog';
      saveState();
      render();
      window.scrollTo({ top: 0 });
    });
  });

  // Catalog events
  document.querySelectorAll('[data-catalog-subject]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const subj = state.subjects.find((s) => s.id === btn.dataset.catalogSubject);
      if (subj) {
        state.selectedSubjectId = subj.id;
        state.selectedConceptId = subj.concepts[0].id;
        state.activePdfPage = subj.concepts[0].pdfPages[0];
        saveState();
        render();
      }
    });
  });

  document.querySelectorAll('[data-catalog-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.catalogFilter = btn.dataset.catalogFilter;
      saveState();
      render();
    });
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

  document.querySelectorAll('[data-select-concept]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const subj = getCurrentSubject();
      const c = subj.concepts.find((item) => item.id === btn.dataset.selectConcept);
      if (c) {
        state.selectedConceptId = c.id;
        state.activePdfPage = c.pdfPages[0];
        state.mobilePane = 'center';
        state.view = 'workspace';
        saveState();
        render({ resetConceptScroll: true });
        window.scrollTo({ top: 0 });
      }
    });
  });

  // Workspace navigation & controls
  document.getElementById('backToCatalogBtn')?.addEventListener('click', () => {
    state.view = 'catalog';
    saveState();
    render();
    window.scrollTo({ top: 0 });
  });

  document.getElementById('prevConceptBtn')?.addEventListener('click', () => {
    const subj = getCurrentSubject();
    const idx = subj.concepts.findIndex((c) => c.id === state.selectedConceptId);
    if (idx > 0) {
      const prev = subj.concepts[idx - 1];
      state.selectedConceptId = prev.id;
      state.activePdfPage = prev.pdfPages[0];
      saveState();
      render({ resetConceptScroll: true });
    }
  });

  document.getElementById('nextConceptBtn')?.addEventListener('click', () => {
    const subj = getCurrentSubject();
    const idx = subj.concepts.findIndex((c) => c.id === state.selectedConceptId);
    if (idx >= 0 && idx < subj.concepts.length - 1) {
      const next = subj.concepts[idx + 1];
      state.selectedConceptId = next.id;
      state.activePdfPage = next.pdfPages[0];
      saveState();
      render({ resetConceptScroll: true });
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

  document.getElementById('toggleMasterBtn')?.addEventListener('click', () => {
    const c = getCurrentConcept();
    state.masteredConcepts[c.id] = !state.masteredConcepts[c.id];
    saveState();
    render();
  });

  document.querySelectorAll('[data-jump-page]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetPage = Number(btn.dataset.jumpPage);
      const jumpConcept = btn.dataset.jumpConcept;
      const jumpSubj = btn.dataset.jumpSubj;
      if (jumpConcept && jumpSubj && state.view !== 'workspace') {
        state.selectedSubjectId = jumpSubj;
        state.selectedConceptId = jumpConcept;
        state.activePdfPage = targetPage;
        state.mobilePane = 'center';
        state.view = 'workspace';
        saveState();
        render({ resetConceptScroll: true });
        window.scrollTo({ top: 0 });
        return;
      }
      setActivePdfPage(targetPage);
    });
  });

  document.getElementById('pdfFullscreenBtn')?.addEventListener('click', () => {
    openPdfFullscreen();
  });

  // Review view events
  document.querySelectorAll('[data-review-term]').forEach((btn) => {
    btn.addEventListener('click', () => {
      resetReviewSession();
      state.reviewTermId = btn.dataset.reviewTerm;
      saveState();
      render();
      window.scrollTo({ top: 0 });
    });
  });

  document.getElementById('reviewBackBtn')?.addEventListener('click', () => {
    resetReviewSession();
    state.reviewTermId = null;
    saveState();
    render();
    window.scrollTo({ top: 0 });
  });

  document.querySelectorAll('[data-review-subject]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const subj = state.subjects.find((s) => s.id === btn.dataset.reviewSubject);
      if (subj) {
        resetReviewSession();
        state.selectedSubjectId = subj.id;
        state.selectedConceptId = subj.concepts[0].id;
        state.activePdfPage = subj.concepts[0].pdfPages[0];
        saveState();
        render();
      }
    });
  });

  document.querySelectorAll('[data-review-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      resetReviewSession();
      state.reviewFilter = btn.dataset.reviewFilter;
      saveState();
      render();
    });
  });

  document.getElementById('reviewSearch')?.addEventListener('input', (e) => {
    state.reviewSearchQuery = e.target.value;
    render();
    const input = document.getElementById('reviewSearch');
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  });

  document.querySelectorAll('[data-toggle-fav]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qId = btn.dataset.toggleFav;
      if (state.favorites[qId]) delete state.favorites[qId];
      else state.favorites[qId] = true;
      saveState();
      render();
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
      if (getQuestionState().solvedQuestions[qId]) return;
      const choiceIdx = Number(btn.dataset.choiceIdx);
      const ctx = findQuestionContext(qId);
      if (!ctx) return;
      const isCorrect = choiceIdx === ctx.q.answerIndex;
      recordAnswer(qId, { selectedIdx: choiceIdx, isCorrect });
      state.streak += 1;
      saveState();
      render();
    });
  });

  document.querySelectorAll('[data-multi-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qId = btn.dataset.multiToggle;
      if (getQuestionState().solvedQuestions[qId]) return;
      const idx = Number(btn.dataset.choiceIdx);
      const cur = new Set(getQuestionState().multiSelections[qId] || []);
      if (cur.has(idx)) cur.delete(idx);
      else cur.add(idx);
      getQuestionState().multiSelections[qId] = [...cur].sort((a, b) => a - b);
      saveState();
      render();
    });
  });

  document.querySelectorAll('[data-multi-submit]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qId = btn.dataset.multiSubmit;
      if (getQuestionState().solvedQuestions[qId]) return;
      const ctx = findQuestionContext(qId);
      if (!ctx) return;
      const q = ctx.q;
      const selected = [...(getQuestionState().multiSelections[qId] || [])].sort((a, b) => a - b);
      const expected = [...(q.answerIndices || [])].sort((a, b) => a - b);
      const isCorrect =
        selected.length === expected.length &&
        selected.every((val, i) => val === expected[i]);
      recordAnswer(qId, { selectedIndices: selected, isCorrect });
      state.streak += 1;
      saveState();
      render();
    });
  });

  document.querySelectorAll('[data-short-reveal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qId = btn.dataset.shortReveal;
      getQuestionState().shortRevealed[qId] = true;
      saveState();
      render();
    });
  });

  document.querySelectorAll('[data-short-grade]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qId = btn.dataset.shortGrade;
      if (getQuestionState().solvedQuestions[qId]) return;
      const isCorrect = btn.dataset.gradeCorrect === 'true';
      recordAnswer(qId, { isCorrect });
      state.streak += 1;
      saveState();
      render();
    });
  });

  document.querySelectorAll('[data-strike-q]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qId = btn.dataset.strikeQ;
      const idx = Number(btn.dataset.strikeIdx);
      const arr = getQuestionState().strikethroughs[qId] || [];
      getQuestionState().strikethroughs[qId] = arr.includes(idx) ? arr.filter((i) => i !== idx) : [...arr, idx];
      saveState();
      render();
    });
  });

  document.querySelectorAll('[data-reset-q]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qId = btn.dataset.resetQ;
      if (state.view === 'review' && getQuestionState().solvedQuestions[qId]?.isCorrect === false) {
        reviewSessionIds.add(qId);
      }
      delete getQuestionState().solvedQuestions[qId];
      delete getQuestionState().multiSelections[qId];
      delete getQuestionState().shortRevealed[qId];
      delete getQuestionState().strikethroughs[qId];
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

// Global header & keyboard events
document.querySelectorAll('.nav-btn, .nav-btn-m').forEach((btn) => {
  btn.addEventListener('click', () => {
    resetReviewSession();
    if (btn.dataset.view === 'review') {
      state.reviewTermId = null;
    }
    state.view = btn.dataset.view;
    saveState();
    render();
    window.scrollTo({ top: 0 });
  });
});

document.getElementById('brandBtn').addEventListener('click', () => {
  resetReviewSession();
  state.view = 'dashboard';
  saveState();
  render();
  window.scrollTo({ top: 0 });
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

document.getElementById('closePdfFullscreen')?.addEventListener('click', () => {
  closePdfFullscreen();
});
document.getElementById('pdfFsBackdrop')?.addEventListener('click', (e) => {
  if (e.target.id === 'pdfFsBackdrop') {
    closePdfFullscreen();
  }
});

document.addEventListener('keydown', (e) => {
  if (pdfFullscreen && e.key === 'Escape') {
    e.preventDefault();
    closePdfFullscreen();
    return;
  }
  if (state.view !== 'workspace') return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const activeEl = document.activeElement;
  if (
    activeEl &&
    (['INPUT', 'TEXTAREA', 'SELECT'].includes(activeEl.tagName) || activeEl.isContentEditable)
  ) {
    return;
  }
  const modal = document.getElementById('glossaryModal');
  if (modal && !modal.classList.contains('hidden')) return;

  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    stepPdfPage(-1);
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    stepPdfPage(1);
  }
});

// Initial render
render();
