// 치과대학 강의자료-개념-기출 통합 학습 플랫폼 데이터
import { DENTAL_COLLEGE_SUBJECTS } from './dentalCollegeData.js';

const SAMPLE_SUBJECTS = [
  {
    id: "conservative",
    name: "치과보존학 (AI 요약 샘플)",
    engName: "Conservative Dentistry",
    color: "#2563eb",
    pdfName: "2026_치과보존학_우식및수복_통합본.pdf",
    totalPages: 68,
    concepts: [
      {
        id: "con-1",
        chapter: "1장. 치아우식학",
        title: "상아질 우식의 5개 층과 임상적 제거 기준",
        pdfPages: [14, 15],
        importance: "high",
        tags: ["국시빈출", "감염상아질", "영향상아질"],
        summary: "상아질 우식은 치수 방향(내측)에서 외측으로 진행하며 조직학적으로 5개 층으로 구분됩니다. 임상에서는 세균 침투 여부와 재광화 가능성을 기준으로 '감염상아질(Infected dentin)'은 제거하고 '영향상아질(Affected dentin)'은 보존하는 것이 핵심 원칙입니다.",
        keyPoints: [
          "정상 상아질(Normal) → 지방변성층(Fatty degeneration) → 투명/경화상아질(Translucent/Sclerotic) → 탈회상아질(Demineralized) → 세균침입층(Infected) → 파괴층(Destroyed)",
          "투명상아질(3층): 상아세관 내 무기질 침착으로 산과 세균의 침투를 막는 생리적 방어층",
          "감염상아질(외층): 콜라겐 교차결합 파괴, 재광화 불가능, Caries detector 염색(+) → 반드시 제거",
          "영향상아질(내층): 세균 없음, 콜라겐 구조 유지, 재광화 가능 → 보존 대상"
        ],
        glossary: {
          "감염상아질": "세균이 직접 침입하여 콜라겐 섬유가 비가역적으로 변성된 층으로, 수복 전 완전 제거가 필요합니다.",
          "영향상아질": "세균은 없으나 산에 의해 부분 탈회된 층으로, 치수 보호 및 재광화를 위해 보존합니다."
        },
        pdfExcerpts: {
          14: "[슬라이드 p.14] 상아질 우식의 조직학적 5층 구조 모식도 — 치수측(내측)에서 1) 정상 상아질 2) 치아우식 하방의 투명상아질(상아세관 폐쇄) 3) 세균 없는 탈회층(영향상아질) 4) 세균 침입층(감염상아질) 5) 완전 파괴층.",
          15: "[슬라이드 p.15] 임상적 와동 형성 원칙: Caries detector(1% acid red 52 in propylene glycol)는 변성된 비가역적 콜라겐만 염색하므로 진하게 염색되는 외층만 선택적으로 제거한다."
        },
        pastQuestions: [
          {
            id: "pq-con-1",
            year: 2024,
            source: "2024 본과3 기말 #12",
            stem: "상아질 우식 병소에서 수복 전 와동 형성 시 반드시 제거해야 하는 층의 특징으로 옳은 것은?",
            choices: [
              "세균의 침입이 거의 관찰되지 않는다.",
              "콜라겐 섬유의 교차결합이 온전하게 유지되어 있다.",
              "적절한 이장재 도포 시 재광화가 가능하다.",
              "Caries detector 용액에 의해 진하게 염색된다.",
              "상아세관 내 무기질 침착으로 투과성이 감소해 있다."
            ],
            answerIndex: 3,
            pdfRefPage: 15,
            rationale: "반드시 제거해야 하는 층은 외측의 '감염상아질(Infected dentin)'입니다. 감염상아질은 세균 침입과 콜라겐 변성이 일어나 재광화가 불가능하며, Caries detector 용액에 진하게 염색됩니다(강의자료 p.15)."
          }
        ],
        aiQuestions: [
          {
            id: "ai-con-1",
            difficulty: "AI 응용",
            stem: "깊은 상아질 우식을 가진 24세 환자의 치수 노출을 피하기 위해 단계적 우식 제거술(Stepwise excavation)을 시행하려 한다. 1차 내원 시 와동 바닥에 남겨둘 수 있는 층과 그 근거의 연결이 옳은 것은?",
            choices: [
              "감염상아질 — 수산화칼슘 적용 시 세균 사멸 및 재광화 유도",
              "영향상아질 — 콜라겐 구조가 유지되어 있어 밀봉 시 재광화 가능",
              "파괴층 — 삼차상아질 형성을 자극하는 골형성 단백질 함유",
              "투명상아질 — 세균 농도가 가장 높아 항균 이장재와 반응 필요",
              "법랑상아경계 — 가장 단단하여 치수 보호 역할 수행"
            ],
            answerIndex: 1,
            pdfRefPage: 14,
            rationale: "단계적 우식 제거술에서는 치수 노출 위험이 있는 깊은 부위의 '영향상아질(Affected dentin)'을 남겨두고 밀봉하여 재광화와 삼차상아질 형성을 유도합니다(강의자료 p.14-15 기반 AI 변형)."
          }
        ]
      }
    ]
  }
];

export const INITIAL_SUBJECTS = [...DENTAL_COLLEGE_SUBJECTS, ...SAMPLE_SUBJECTS];
