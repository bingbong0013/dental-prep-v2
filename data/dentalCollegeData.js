// Finals-Only Dataset (Midterm chapters excluded, audited & deduplicated)
// Total valid final-exam questions: 265 (subj-chemistry: 124, subj-signal: 79, subj-biology: 62)
export const DENTAL_COLLEGE_SUBJECTS = [
  {
    "id": "subj-chemistry",
    "name": "화학",
    "engName": "General Chemistry · 기말고사 (08~14장)",
    "icon": "⚗️",
    "color": "#6366f1",
    "pdfName": "08장~14장 수업자료 PDF (총 386p)",
    "totalPages": 386,
    "concepts": [
      {
        "id": "chem-08-bond-polarity",
        "chapter": "08장 화학 결합: 일반 개념",
        "title": "화학 결합 종류·전기음성도·쌍극자 모멘트",
        "pdfPages": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17
        ],
        "tags": [
          "08장",
          "p.3-17",
          "화학 결합",
          "이온 결합",
          "공유 결합",
          "전기음성도"
        ],
        "summary": "<p>이온 결합·공유 결합·금속 결합의 형성 원리(에너지 최소화)와 <strong>Pauling 전기음성도</strong> 차이에 따른 결합 극성, 그리고 <strong>분자의 대칭성과 쌍극자 모멘트(μ)</strong> 상쇄 여부를 다룹니다.</p>",
        "keyPoints": [
          "전기음성도 차이: 크면 이온 결합, 중간이면 극성 공유 결합, 0이면 무극성 공유 결합",
          "선형·평면삼각형·정사면체라도 결합된 원자가 서로 다르면 극성 분자가 됨 (예: HCN, CHCl₃)",
          "비공유 전자쌍이 없어도 말단 원자가 비대칭이면 극성 분자"
        ],
        "glossary": {
          "전기음성도": "분자 내에서 원자가 공유 전자쌍을 자신 쪽으로 끌어당기는 상대적 능력(F가 가장 큼).",
          "쌍극자 모멘트": "극성 분자에서 양전하 중심과 음전하 중심의 분리를 나타내는 벡터량."
        },
        "pdfExcerpts": {
          "4": "8.1 화학 결합의 종류: 두 원자가 접근할 때 인력과 반발력이 균형을 이루는 거리(결합 길이)에서 에너지가 최소가 된다.",
          "8": "8.2 전기음성도: 주기율표 오른쪽 위로 갈수록 증가(F > O > N ≈ Cl).",
          "15": "8.3 결합 극성과 쌍극자 모멘트: CO₂(선형·대칭)는 무극성이지만, 개별 결합은 극성이다. 대칭이 깨지면 극성 분자."
        },
        "pastQuestions": [
          {
            "id": "chem-final-25-1",
            "qType": "ox",
            "source": "25학번 · 1",
            "ref": "08장 · PDF 15쪽",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15
            ],
            "stem": "선형 분자는 모두 무극성이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "선형이라는 모양만으로 무극성이라고 정할 수 없다. HCl처럼 두 원자의 전기음성도가 다른 선형 분자는 극성이 있다. CO₂가 무극성인 것은 양쪽 결합 쌍극자가 대칭적으로 상쇄되기 때문이다."
          },
          {
            "id": "chem-final-25-3",
            "qType": "ox",
            "source": "25학번 · 3",
            "ref": "08장 · PDF 13–17쪽",
            "pdfRefPage": 13,
            "pdfRefPages": [
              13,
              14,
              15,
              16,
              17
            ],
            "stem": "중심 원자에 비공유 전자쌍이 없는 분자는 모두 비극성이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "중심 원자에 고립 전자쌍이 없어도 CH₃Cl처럼 결합 쌍극자가 상쇄되지 않으면 분자 전체는 극성이다. CH₃Cl의 Cl에는 고립 전자쌍이 있으므로 원문을 분자 전체에 고립쌍이 전혀 없다는 뜻으로 읽으면 이 반례를 쓸 수 없다. 강의 VSEPR 문맥에 따라 중심 원자의 고립쌍 유무로 학습용 보완했다.\n\n[복원 메모]\n원본에서 범위가 빠진 비공유 전자쌍을 강의 VSEPR의 중심 원자 기준으로 보완. 분자 내 모든 원자의 고립쌍이 전혀 없다는 뜻과 구별."
          },
          {
            "id": "chem-final-24-31",
            "qType": "ox",
            "source": "24학번 · 31",
            "ref": "08장 · PDF 4쪽",
            "pdfRefPage": 4,
            "pdfRefPages": [
              4
            ],
            "stem": "고체 NaCl에서 Na⁺와 Cl⁻ 중심 사이 거리가 0.276 nm이면 두 이온 사이 인력 퍼텐셜에너지의 크기는 8.37×10⁻¹⁹ J이다. (쿨롱 상수 계수: 2.31×10⁻¹⁹ J·nm)",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "강의의 쿨롱 퍼텐셜에너지 식 E=(2.31×10⁻¹⁹ J·nm)Q₁Q₂/r에 Q₁=+1, Q₂=−1, r=0.276 nm를 넣으면 E=−8.37×10⁻¹⁹ J이다. 원본의 ‘인력’은 힘(N)이 아니라 인력 에너지의 크기(J)로 보완했다. 부호를 포함한 에너지는 음수이다.\n\n[복원 메모]\n원본 ‘인력’을 단위 J 및 강의의 E 식에 따라 인력 퍼텐셜에너지의 크기로 보완. 힘의 크기(N)를 뜻하면 원문은 성립하지 않음."
          },
          {
            "id": "chem-final-24-33",
            "qType": "ox",
            "source": "24학번 · 33",
            "ref": "08장 · PDF 9쪽",
            "pdfRefPage": 9,
            "pdfRefPages": [
              9
            ],
            "stem": "전기음성도는 주기율표에서 오른쪽으로 갈수록 증가하고 족의 아래쪽으로 갈수록 감소한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "전기음성도는 같은 주기에서 대체로 오른쪽으로 갈수록 커지고 같은 족에서 아래로 갈수록 작아진다. 강의의 주기적 경향과 일치한다."
          },
          {
            "id": "chem-final-24-34",
            "qType": "ox",
            "source": "24학번 · 34",
            "ref": "08장 · PDF 10–11쪽",
            "pdfRefPage": 10,
            "pdfRefPages": [
              10,
              11
            ],
            "stem": "극성 공유 결합은 무극성 공유 결합보다 결합 원자 사이의 전기음성도 차이가 크다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "극성 공유 결합은 무극성 공유 결합보다 두 원자의 전기음성도 차이가 크다. 원본의 비교 대상 ‘공유결합’은 극성 공유 결합까지 포함하므로 강의의 ‘무극성 공유 결합’으로 보완해 판단했다.\n\n[복원 메모]\n원본 비교 대상 ‘공유결합’을 강의의 무극성 공유 결합으로 보완."
          },
          {
            "id": "chem-final-24-36",
            "qType": "ox",
            "source": "24학번 · 36",
            "ref": "08장 · PDF 13–17쪽",
            "pdfRefPage": 13,
            "pdfRefPages": [
              13,
              14,
              15,
              16,
              17
            ],
            "stem": "반대 부호의 두 전하를 지닌 계의 극성을 나타내는 물리량을 쌍극자 모멘트라고 한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "쌍극자 모멘트는 분리된 양전하와 음전하로 인한 극성을 나타낸다. 단순한 두 전하의 경우 크기는 전하량과 분리 거리의 곱이다."
          },
          {
            "id": "chem-final-24-37",
            "qType": "ox",
            "source": "24학번 · 37",
            "ref": "08장 · PDF 13–17쪽",
            "pdfRefPage": 13,
            "pdfRefPages": [
              13,
              14,
              15,
              16,
              17
            ],
            "stem": "극성 결합에서도 쌍극자 모멘트가 나타나지 않을 수 있다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "극성 결합 자체에는 결합 쌍극자 모멘트가 있다. 여러 극성 결합을 가진 분자 전체의 모멘트는 CO₂처럼 벡터합이 0이 될 수 있다. 원문은 ‘분자’가 아니라 ‘결합’이라고 했으므로 원본 O를 X로 정정한다.\n\n[정답 정정]\n원본 O → 검토 X. 판단 이유는 위 강의 근거와 계산을 따른다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "chem-08-ions-lattice",
        "chapter": "08장 화학 결합: 일반 개념",
        "title": "이온 전자배열·이온 크기·격자 에너지",
        "pdfPages": [
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33
        ],
        "tags": [
          "08장",
          "p.18-33",
          "등전자",
          "이온 반지름",
          "반지름",
          "격자 에너지"
        ],
        "summary": "<p>주족 원소의 영족 기체 전자 배치, <strong>등전자 이온 계열</strong>의 반지름 비교(양성자 수가 많을수록 작아짐), 그리고 이온 결합 화합물의 안정성을 결정하는 <strong>격자 에너지(LE = k·Q₁Q₂/r)</strong>를 다룹니다.</p>",
        "keyPoints": [
          "등전자 계열(예: O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺): 원자번호(양성자 수)가 클수록 반지름 감소",
          "양이온은 모원자보다 작고, 음이온은 모원자보다 큼",
          "격자 에너지(흡열/발열 정의 주의)는 전하 곱(|Q₁Q₂|)이 클수록, 이온 간 거리(r)가 짧을수록 큼"
        ],
        "glossary": {
          "등전자 이온": "총 전자 수가 같지만 원자번호(핵전하)가 다른 원자 또는 이온들.",
          "격자 에너지": "기체 상태의 이온들이 모여 1 mol의 고체 이온 결정 격자를 형성할 때 방출되는 에너지(또는 분해 에너지)."
        },
        "pdfExcerpts": {
          "23": "8.4 등전자 이온의 크기: 같은 전자 수에서 핵전하(Z)가 클수록 전자를 강하게 끌어당겨 반지름이 작아진다.",
          "27": "8.5 이성분 이온 결합 화합물의 에너지 효과: Born-Haber 순환과 격자 에너지 계산."
        },
        "pastQuestions": [
          {
            "id": "chem-final-25-4",
            "qType": "ox",
            "source": "25학번 · 4",
            "ref": "08장 · PDF 23–25쪽",
            "pdfRefPage": 23,
            "pdfRefPages": [
              23,
              24,
              25
            ],
            "stem": "같은 수의 전자를 갖는 원자·이온은 원자번호가 클수록 반지름이 작아진다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "등전자 원자·이온들은 전자 수가 같으므로 핵전하가 큰 종이 전자를 더 강하게 끌어당긴다. 따라서 원자번호가 클수록 반지름이 대체로 작아진다.\n\n[복원 메모]\n등전자 비교의 원자·이온 표기를 명확히 함."
          },
          {
            "id": "chem-final-24-39",
            "qType": "ox",
            "source": "24학번 · 39",
            "ref": "08장 · PDF 23–25쪽",
            "pdfRefPage": 23,
            "pdfRefPages": [
              23,
              24,
              25
            ],
            "stem": "Se²⁻, Br⁻, Rb⁺, Sr²⁺ 이온 중 가장 작은 이온은 Rb⁺ 이다",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "Se²⁻·Br⁻·Rb⁺·Sr²⁺는 모두 전자 36개로 등전자이다. 핵전하가 클수록 전자를 더 강하게 끌어당겨 반지름이 작아지므로 가장 작은 이온은 Sr²⁺이다."
          },
          {
            "id": "chem-final-24-40",
            "qType": "ox",
            "source": "24학번 · 40",
            "ref": "08장 · PDF 26–27쪽",
            "pdfRefPage": 26,
            "pdfRefPages": [
              26,
              27
            ],
            "stem": "격자 에너지는 발열과정이면 양의 값을 가진다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "강의는 기체 이온에서 이온성 고체가 만들어질 때의 에너지 변화를 격자에너지로 정의한다. 형성은 발열 과정이므로 음수이다. 결정 분리에 필요한 양의 에너지와 구별한다."
          },
          {
            "id": "chem-final-24-41",
            "qType": "ox",
            "source": "24학번 · 41",
            "ref": "08장 · PDF 32–33쪽",
            "pdfRefPage": 32,
            "pdfRefPages": [
              32,
              33
            ],
            "stem": "이온성 백분율은 X–Y의 측정 쌍극자 모멘트를 완전히 분리된 X⁺Y⁻의 계산 쌍극자 모멘트로 나누고 100을 곱한 값이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "이온성 백분율은 측정한 쌍극자 모멘트를 같은 거리에서 전하가 완전히 분리된 경우의 계산값으로 나누고 100을 곱한다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "chem-08-lewis-octet",
        "chapter": "08장 화학 결합: 일반 개념",
        "title": "공유 결합 에너지·Lewis 구조·옥텟 예외·공명",
        "pdfPages": [
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          46,
          47,
          48,
          49,
          50,
          51,
          52,
          53,
          54,
          55,
          56,
          57
        ],
        "tags": [
          "08장",
          "p.34-57",
          "Lewis",
          "루이스",
          "옥텟",
          "팔전자"
        ],
        "summary": "<p>결합 해리 에너지를 이용한 <strong>ΔH 추정</strong>, <strong>Lewis 구조</strong> 작성법, <strong>형식전하</strong>를 통한 최적 구조 선택, <strong>팔전자 규칙의 예외</strong>(B, Be 결핍 및 3주기 이후 확장 옥텟), 그리고 <strong>공명 혼성(비편재화)</strong>을 다룹니다.</p>",
        "keyPoints": [
          "ΔH ≈ ΣD(끊어진 결합) - ΣD(형성된 결합)",
          "옥텟 예외: 전자 부족(BF₃, BeCl₂), 홀수 전자(NO), 확장 옥텟(3주기 이상 중심원자: PCl₅, SF₆ 등 d오비탈 관여)",
          "공명 구조는 실제 분자의 극한 표현이며, 실제 분자는 공명 혼성으로 안정화됨 (형식전하 0에 가깝고 음전하는 전기음성도 큰 원자에)"
        ],
        "glossary": {
          "형식전하": "원자가 전자 수 - (비공유 전자 수 + 결합 전자 수/2). 0에 가까울수록 안정한 Lewis 구조.",
          "공명(Resonance)": "하나의 Lewis 구조로 나타낼 수 없는 비편재화된 전자 분포를 여러 구조의 혼성으로 표현하는 개념."
        },
        "pdfExcerpts": {
          "37": "8.8 공유 결합 에너지와 화학 반응: 반응 엔탈피는 반응물 결합 에너지 합에서 생성물 결합 에너지 합을 빼서 근사한다.",
          "49": "8.11 팔전자 규칙의 예외: B(6전자), Be(4전자)는 옥텟 미만, 3주기 원소(S, P, Cl, Xe 등)는 8개 초과 가능.",
          "55": "8.12 공명: NO₃⁻, CO₃²⁻, O₃, 벤젠 등은 동일한 결합 길이와 에너지를 갖는 공명 혼성이다."
        },
        "pastQuestions": [
          {
            "id": "chem-final-25-2",
            "qType": "ox",
            "source": "25학번 · 2",
            "ref": "08장 · PDF 49쪽",
            "pdfRefPage": 49,
            "pdfRefPages": [
              49
            ],
            "stem": "BF₃는 옥텟 규칙을 위반한 분자이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "BF₃에서 B는 세 F와 단일 결합하여 중심 원자 주위에 전자가 6개 있다. 8개를 채우지 못하므로 옥텟 규칙의 예외이다."
          },
          {
            "id": "chem-final-25-5",
            "qType": "ox",
            "source": "25학번 · 5",
            "ref": "08장 · PDF 55–57쪽",
            "pdfRefPage": 55,
            "pdfRefPages": [
              55,
              56,
              57
            ],
            "stem": "모든 전이금속 이온은 공명구조를 가진다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "공명은 하나의 Lewis 구조로 전자 분포를 충분히 나타내지 못할 때 여러 구조를 함께 사용하는 모형이다. 모든 전이금속 이온이 공명구조를 가진다는 규칙은 없다."
          },
          {
            "id": "chem-final-24-32",
            "qType": "ox",
            "source": "24학번 · 32",
            "ref": "08장 · PDF 40쪽",
            "pdfRefPage": 40,
            "pdfRefPages": [
              40
            ],
            "stem": "결합 전자쌍은 한 원자핵에만 편재되어 한 원자핵에만 근접적으로 존재한다",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "결합 전자쌍은 두 원자핵 사이에서 공유된다. 한 원자에 주로 위치하는 것은 고립 전자쌍이다."
          },
          {
            "id": "chem-final-24-38",
            "qType": "ox",
            "source": "24학번 · 38",
            "ref": "08장 · PDF 41–49쪽",
            "pdfRefPage": 41,
            "pdfRefPages": [
              41,
              42,
              43,
              44,
              45,
              46,
              47,
              48,
              49
            ],
            "stem": "비금속 원자들이 공유 결합을 형성할 때에는 비활성 기체형 전자배치를 이루려는 경향이 있다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "강의의 옥텟 모형에서는 비금속 원자들이 전자를 공유하여 안정한 비활성 기체형 전자배치를 이루려는 경향을 설명한다. H의 두 전자 규칙과 BF₃ 등의 옥텟 예외가 있으므로 일반적 경향으로 한정한다.\n\n[복원 메모]\n원본의 단정을 강의 옥텟 모형의 일반 경향으로 한정. 두 전자 규칙 및 옥텟 예외는 해설에 표시."
          },
          {
            "id": "chem-final-24-42",
            "qType": "ox",
            "source": "24학번 · 42",
            "ref": "08장 · PDF 35–39쪽",
            "pdfRefPage": 35,
            "pdfRefPages": [
              35,
              36,
              37,
              38,
              39
            ],
            "stem": "공유 결합에너지에서 공유된 전자쌍이 많을수록 결합길이가 짧아지고 결합 에너지도 작아진다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "같은 원자 사이에서 결합차수가 커지면 결합 길이는 대체로 짧아지고 결합을 끊는 데 필요한 에너지는 커진다. 결합에너지가 작아진다는 부분이 X이다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "chem-08-vsepr",
        "chapter": "08장 화학 결합: 일반 개념",
        "title": "VSEPR 모형과 분자 구조·결합각",
        "pdfPages": [
          58,
          59,
          60,
          61,
          62,
          63,
          64,
          65,
          66,
          67,
          68,
          69,
          70
        ],
        "tags": [
          "08장",
          "p.58-70",
          "VSEPR",
          "결합각",
          "고립 전자쌍",
          "비공유"
        ],
        "summary": "<p>원자가 껍질 전자쌍 반발(<strong>VSEPR</strong>) 모형으로 전자쌍 배열과 분자 기하구조를 예측합니다. <strong>비공유 전자쌍-비공유 > 비공유-결합 > 결합-결합</strong> 순의 반발력 크기에 따른 결합각 감소를 다룹니다.</p>",
        "keyPoints": [
          "전자영역 2(선형 180°), 3(평면삼각 120°), 4(정사면체 109.5°), 5(삼각쌍뿔 90°/120°), 6(팔면체 90°)",
          "같은 전자영역 배열에서 고립 전자쌍 수가 늘면 결합각 감소: CH₄(109.5°) > NH₃(107°) > H₂O(104.5°)",
          "삼각쌍뿔(5영역)에서 비공유 전자쌍은 반발이 적은 적도 위치(equatorial)를 선호"
        ],
        "glossary": {
          "VSEPR 모형": "중심 원자 주위의 전자쌍들이 정전기적 반발력을 최소화하도록 배치되어 분자 기하구조를 결정한다는 모형."
        },
        "pdfExcerpts": {
          "63": "8.13 VSEPR 모형: 비공유 전자쌍은 공유 전자쌍보다 더 넓은 공간을 차지하여 결합각을 압축한다."
        },
        "pastQuestions": [
          {
            "id": "chem-final-25-6",
            "qType": "ox",
            "source": "25학번 · 6",
            "ref": "08장 · PDF 63쪽",
            "pdfRefPage": 63,
            "pdfRefPages": [
              63
            ],
            "stem": "같은 전자영역 배열에서 고립 전자쌍이 많아지면 결합각이 작아지는 경향이 있다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "같은 전자영역 배열을 비교하면 고립 전자쌍이 결합 전자쌍보다 강하게 반발하여 결합각을 줄인다. 예를 들어 CH₄→NH₃→H₂O에서 각이 작아진다. 서로 다른 배위수·전자배열까지 비교하는 절대 법칙으로는 쓰지 않는다.\n\n[복원 메모]\n강의의 같은 전자영역 배열 비교 조건을 보완."
          },
          {
            "id": "chem-final-24-43",
            "qType": "ox",
            "source": "24학번 · 43",
            "ref": "08장 · PDF 63쪽",
            "pdfRefPage": 63,
            "pdfRefPages": [
              63
            ],
            "stem": "고립 전자쌍은 결합 전자쌍보다 더 적은 공간을 필요로 한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "고립 전자쌍은 결합 전자쌍보다 중심 원자 주위에서 더 큰 공간을 차지하고 더 강하게 반발한다. 그래서 같은 전자영역 배열에서 결합각을 줄일 수 있다."
          },
          {
            "id": "chem-final-24-44",
            "qType": "ox",
            "source": "24학번 · 44",
            "ref": "08장 · PDF 68쪽",
            "pdfRefPage": 68,
            "pdfRefPages": [
              68
            ],
            "stem": "전자쌍의 수를 셀 때 다중 결합은 여러 개의 유효 전자쌍으로 간주한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "VSEPR에서 이중·삼중 결합은 전자가 여러 쌍이어도 하나의 전자영역으로 센다. 여러 유효 전자쌍으로 따로 세지 않는다."
          },
          {
            "id": "chem-final-23-51",
            "qType": "ox",
            "source": "23학번 · 51",
            "ref": "08장 · PDF 58–64쪽",
            "pdfRefPage": 58,
            "pdfRefPages": [
              58,
              59,
              60,
              61,
              62,
              63,
              64
            ],
            "stem": "원자 주위의 결합 전자쌍과 고립 전자쌍들이 최대한 멀리 위치한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "VSEPR 모형에서 중심 원자 주위 전자영역들은 반발을 줄이도록 가능한 한 멀리 배치된다. 고립 전자쌍과 결합 전자쌍을 모두 고려한다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "chem-09-hybrid",
        "chapter": "09장 공유 결합: 오비탈",
        "title": "혼성 오비탈(sp³, sp², sp, dsp³, d²sp³)과 σ/π 결합",
        "pdfPages": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28
        ],
        "tags": [
          "09장",
          "p.3-28",
          "혼성",
          "sp3",
          "sp2",
          "sp"
        ],
        "summary": "<p>원자가 결합 이론의 <strong>오비탈 혼성화</strong>를 통해 분자 구조와 결합을 설명합니다. <strong>σ 결합</strong>(핵간 축 정면 겹침)과 <strong>π 결합</strong>(혼성화되지 않은 p 오비탈의 측면 겹침)의 차이를 명확히 구분합니다.</p>",
        "keyPoints": [
          "전자영역 수 2→sp(선형), 3→sp²(평면삼각), 4→sp³(사면체), 5→dsp³(삼각쌍뿔), 6→d²sp³(팔면체)",
          "단일결합 = σ 1개, 이중결합 = σ 1 + π 1, 삼중결합 = σ 1 + π 2",
          "π 결합은 축 회전이 불가능하여 시스-트랜스 이성질체 유발; sp³ 혼성 원자는 비혼성 p 오비탈이 없어 π 결합 불가"
        ],
        "glossary": {
          "σ(시그마) 결합": "두 오비탈이 결합축을 따라 정면으로 겹쳐 형성된 공유 결합(회전 자유).",
          "π(파이) 결합": "평행한 두 p 오비탈이 결합축 위아래에서 측면으로 겹쳐 형성된 결합(회전 제한)."
        },
        "pdfExcerpts": {
          "6": "9.1 sp³ 혼성화: 1개의 s와 3개의 p 오비탈이 섞여 4개의 동등한 sp³ 오비탈(109.5°) 형성.",
          "11": "9.1 sp² 혼성화와 π 결합: C=C 이중결합은 sp² σ 결합 1개와 남은 p 오비탈들의 측면 겹침(π 결합) 1개로 구성.",
          "15": "9.1 sp 혼성화: 선형 구조(180°), 2개의 π 결합 형성 가능(예: CO₂, C₂H₂, N₂)."
        },
        "pastQuestions": [
          {
            "id": "chem-final-25-7",
            "qType": "ox",
            "source": "25학번 · 7",
            "ref": "09장 · PDF 6–9쪽",
            "pdfRefPage": 6,
            "pdfRefPages": [
              6,
              7,
              8,
              9
            ],
            "stem": "sp³ 오비탈은 언제나 선형 구조이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "sp³ 혼성 오비탈 네 개의 기본 배열은 정사면체이다. 선형 배열은 sp 혼성화의 기본 모형이다."
          },
          {
            "id": "chem-final-25-8",
            "qType": "ox",
            "source": "25학번 · 8",
            "ref": "09장 · PDF 11–13쪽",
            "pdfRefPage": 11,
            "pdfRefPages": [
              11,
              12,
              13
            ],
            "stem": "π 결합은 두 s 오비탈의 수직적 겹침으로 형성된다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "π 결합은 보통 나란한 두 비혼성 p 오비탈의 옆면 겹침으로 형성된다. 구형인 두 s 오비탈의 겹침으로 π 결합을 만들지 않는다."
          },
          {
            "id": "chem-final-25-9",
            "qType": "ox",
            "source": "25학번 · 9",
            "ref": "09장 · PDF 11–13쪽",
            "pdfRefPage": 11,
            "pdfRefPages": [
              11,
              12,
              13
            ],
            "stem": "sp³ 혼성 오비탈만으로 π 결합을 형성할 수 있다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "sp³ 혼성화에서는 s 하나와 p 세 개가 모두 혼성화되어 남는 비혼성 p 오비탈이 없다. 강의 모형에서 π 결합에는 비혼성 p 오비탈의 옆면 겹침이 필요하다."
          },
          {
            "id": "chem-final-25-10",
            "qType": "ox",
            "source": "25학번 · 10",
            "ref": "09장 · PDF 15–19쪽",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15,
              16,
              17,
              18,
              19
            ],
            "stem": "모든 σ 결합은 sp³ 오비탈로만 형성된다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "σ 결합은 결합축을 따른 겹침으로 생기며 s–s, s–p, p–p 또는 여러 혼성 오비탈 사이에서도 가능하다. sp³ 사이에서만 가능한 것은 아니다."
          },
          {
            "id": "chem-final-24-45",
            "qType": "ox",
            "source": "24학번 · 45",
            "ref": "09장 · PDF 18쪽",
            "pdfRefPage": 18,
            "pdfRefPages": [
              18
            ],
            "stem": "CO₂ 분자 한 개에는 σ 결합 2개와 π 결합 2개가 존재한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "CO₂에는 C=O 이중 결합이 두 개 있다. 각 이중 결합은 σ 하나와 π 하나로 구성되므로 전체는 2σ+2π이다."
          },
          {
            "id": "chem-final-24-52",
            "qType": "ox",
            "source": "24학번 · 52",
            "ref": "09장 · PDF 6–9쪽",
            "pdfRefPage": 6,
            "pdfRefPages": [
              6,
              7,
              8,
              9
            ],
            "stem": "PCl₃ 분자의 Cl 원자는 dsp³ 혼성화를 이룬다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "PCl₃의 중심 P는 결합 세 개와 고립 전자쌍 하나를 갖는 sp³ 모형이다. Cl을 dsp³라고 하는 원문은 틀리다. 강의의 PCl₅ 설명에서도 주변 Cl은 sp³이고 중심 P에 dsp³ 모형을 적용한다.\n\n[정답 정정]\n원본 O → 검토 X. 판단 이유는 위 강의 근거와 계산을 따른다."
          },
          {
            "id": "chem-final-24-53",
            "qType": "ox",
            "source": "24학번 · 53",
            "ref": "09장 · PDF 28쪽",
            "pdfRefPage": 28,
            "pdfRefPages": [
              28
            ],
            "stem": "XeF₂ 분자의 Xe 원자는 d²sp³ 혼성화를 이룬다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "XeF₂는 중심 Xe의 전자영역이 다섯 개(결합 두 개, 고립 전자쌍 세 개)이다. 강의의 혼성화 모형으로는 sp³d(dsp³)이며, 여섯 전자영역의 d²sp³가 아니다. 분자 모양은 선형이다."
          },
          {
            "id": "chem-final-23-54",
            "qType": "ox",
            "source": "23학번 · 54",
            "ref": "09장 · PDF 15–19쪽",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15,
              16,
              17,
              18,
              19
            ],
            "stem": "이산화탄소 분자에 존재하는 모든 2p 궤도 전자들은 sp 혼성 궤도함수 레벨로 에너지가 변화된다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "sp 혼성화는 s 하나와 p 하나를 섞어 sp 오비탈 두 개를 만든다. 나머지 p 오비탈 두 개는 혼성화되지 않고 π 결합에 참여할 수 있다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "chem-09-mo",
        "chapter": "09장 공유 결합: 오비탈",
        "title": "분자 오비탈(MO) 모형·결합 차수",
        "pdfPages": [
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38
        ],
        "tags": [
          "09장",
          "p.29-38",
          "분자 오비탈",
          "MO",
          "결합 차수",
          "상자성"
        ],
        "summary": "<p>원자 오비탈의 선형 조합으로 생성되는 <strong>결합성(σ)</strong> 및 <strong>반결합성(σ*) 분자 오비탈(MO)</strong> 에너지 준위 도표와 <strong>결합 차수</strong> 계산(H₂, He₂)을 다룹니다. (9.3 동핵 이원자 분자·상자기성은 강의 범위에서 제외)</p>",
        "keyPoints": [
          "원자 오비탈이 겹쳐 결합성(낮은 에너지)과 반결합성(높은 에너지) 분자 오비탈 형성",
          "결합 차수 = (결합성 MO 전자 수 - 반결합성 MO 전자 수) / 2",
          "H₂는 결합 차수 1로 안정한 분자를 이루며, He₂는 결합 차수 0으로 형성되지 않음"
        ],
        "glossary": {
          "결합 차수(Bond Order)": "두 원자 사이의 결합 강도 지표. 0보다 커야 분자가 안정하게 존재할 수 있다.",
          "상자성(Paramagnetism)": "홀전자를 가져 외부 자기장에 끌리는 성질."
        },
        "pdfExcerpts": {
          "32": "9.2 분자 오비탈 모형: H₂의 결합성(낮은 에너지)·반결합성(높은 에너지) 분자 오비탈."
        },
        "pastQuestions": [
          {
            "id": "chem-final-24-55",
            "qType": "ox",
            "source": "24학번 · 55",
            "ref": "09장 · PDF 32쪽",
            "pdfRefPage": 32,
            "pdfRefPages": [
              32
            ],
            "stem": "결합성 분자 오비탈은 원자 오비탈보다 에너지가 낮다",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "결합성 분자 오비탈은 원자 오비탈의 보강 간섭으로 핵 사이 전자밀도를 높이고 원래 원자 오비탈보다 낮은 에너지를 갖는다."
          },
          {
            "id": "chem-final-24-56",
            "qType": "ox",
            "source": "24학번 · 56",
            "ref": "09장 · PDF 38쪽",
            "pdfRefPage": 38,
            "pdfRefPages": [
              38
            ],
            "stem": "He₂ 분자의 결합차수는 2이므로 분자로 결합해도 에너지적으로 아무런 이득이 없다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "He₂의 전자 네 개를 넣으면 결합성 전자 2개와 반결합성 전자 2개가 되어 결합차수 (2−2)/2=0이다. 에너지상 안정한 결합을 만들지 못하는 이유는 결합차수가 2여서가 아니다.\n\n[복원 메모]\n강의의 He₂ 결합차수 예제에 따라 원본의 He에 누락된 아래첨자2 보완."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "chem-10-imf-liquid",
        "chapter": "10장 액체와 고체",
        "title": "분자 간 힘(수소결합·분산력)·액체의 성질",
        "pdfPages": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14
        ],
        "tags": [
          "10장",
          "p.4-14",
          "분자 간 힘",
          "수소 결합",
          "London",
          "분산력"
        ],
        "summary": "<p><strong>쌍극자-쌍극자 힘</strong>, <strong>수소 결합(N·O·F에 결합한 H)</strong>, <strong>London 분산력</strong>(모든 분자에 존재하며 편극성/분자량에 비례)과 액체의 <strong>표면장력·모세관 작용·점성도</strong>를 다룹니다.</p>",
        "keyPoints": [
          "London 분산력은 극성·비극성 관계없이 모든 원자/분자 사이에 작용",
          "접착력 > 응집력 → 오목한 액면(물-유리); 응집력 > 접착력 → 볼록한 액면(수은-유리)",
          "분자 간 힘이 강할수록 끓는점, 표면장력, 점성도 증가"
        ],
        "glossary": {
          "London 분산력": "순간 쌍극자와 유발 쌍극자 사이의 인력으로, 모든 분자 사이에 작용한다.",
          "수소 결합": "전기음성도가 큰 N, O, F에 공유결합한 수소가 이웃한 N, O, F의 비공유 전자쌍과 이루는 강한 쌍극자 인력."
        },
        "pdfExcerpts": {
          "5": "10.1 수소 결합: H₂O, NH₃, HF는 분자량에 비해 비정상적으로 높은 끓는점을 가진다.",
          "10": "10.2 액체 상태: 표면장력, 모세관 현상(응집력 vs 접착력), 점성도."
        },
        "pastQuestions": [
          {
            "id": "chem-final-25-13",
            "qType": "ox",
            "source": "25학번 · 13",
            "ref": "10장 · PDF 7–8쪽",
            "pdfRefPage": 7,
            "pdfRefPages": [
              7,
              8
            ],
            "stem": "London 분산력은 비극성 분자 사이에서만 작용한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "London 분산력은 전자 분포의 요동에 의한 힘이므로 극성·비극성 입자 모두에서 나타난다. 비극성 분자에서 주된 힘인 경우가 많다는 것과 오직 비극성에서만 작용한다는 것은 다르다."
          },
          {
            "id": "chem-final-25-14",
            "qType": "ox",
            "source": "25학번 · 14",
            "ref": "10장 · PDF 5–6쪽",
            "pdfRefPage": 5,
            "pdfRefPages": [
              5,
              6
            ],
            "stem": "강의의 일반적인 수소 결합 모형에서는 N·O·F에 결합한 수소가 수소 결합을 만든다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "강의의 일반화학 모형에서는 N·O·F에 직접 결합한 H와 이웃 입자의 비공유 전자쌍 사이에서 수소 결합을 설명한다. 이 수업 범위의 대표적 수소 결합 기준으로 O이다. 특수한 수소 결합까지 배제하는 보편적 정의로 확대하지 않는다.\n\n[복원 메모]\n강의의 일반화학 수소 결합 범위로 한정."
          },
          {
            "id": "chem-final-25-15",
            "qType": "ox",
            "source": "25학번 · 15",
            "ref": "10장 · PDF 10–11쪽",
            "pdfRefPage": 10,
            "pdfRefPages": [
              10,
              11
            ],
            "stem": "응집력이 접착력보다 강할 때 오목한 액면이 형성된다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "응집력이 접착력보다 크면 액체가 벽을 잘 적시지 않아 볼록한 액면이 된다. 접착력이 상대적으로 큰 물–유리에서는 오목한 액면이다. 원본의 ‘오목한 볼록면’은 상반된 표현이 섞인 오기여서 ‘오목한 액면’으로 보완했다.\n\n[복원 메모]\n상반된 오기 ‘오목한 볼록면’을 오목한 액면으로 보완."
          },
          {
            "id": "chem-final-25-57",
            "qType": "ox",
            "source": "25학번 · 57",
            "ref": "10장 · PDF 4–8쪽",
            "pdfRefPage": 4,
            "pdfRefPages": [
              4,
              5,
              6,
              7,
              8
            ],
            "stem": "강의의 일반적 경향으로 비슷한 크기의 입자를 비교하면, London 분산력 < 쌍극자 힘 < 수소 결합 < 이온 결합 순으로 세기가 커진다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "강의는 비슷한 크기의 입자를 비교할 때 분산력 < 쌍극자 힘 < 수소 결합 < 이온 결합의 일반적 경향을 제시한다. 큰 분자의 분산력이 작은 분자의 쌍극자 힘보다 강한 경우도 있어 모든 물질의 절대 순서로 쓰지 않는다.\n\n[복원 메모]\n원본의 힘 세기 나열을 강의의 일반적 경향으로 한정. 모든 물질의 보편적인 절대 순위는 아님."
          },
          {
            "id": "chem-final-24-35",
            "qType": "ox",
            "source": "24학번 · 35",
            "ref": "10장 · PDF 5–6쪽",
            "pdfRefPage": 5,
            "pdfRefPages": [
              5,
              6
            ],
            "stem": "수소 결합은 수소 원자 간 결합으로 1차 결합이다",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "수소 결합은 강의 모형에서 N·O·F에 결합한 H와 이웃 입자의 고립 전자쌍 사이에 생기는 인력이다. 두 H 원자가 만드는 H–H 공유 결합을 뜻하지 않으며, 일반적인 분자 간 수소 결합을 1차 원자 결합으로 분류하지 않는다."
          },
          {
            "id": "chem-final-24-46",
            "qType": "ox",
            "source": "24학번 · 46",
            "ref": "10장 · PDF 7–8쪽",
            "pdfRefPage": 7,
            "pdfRefPages": [
              7,
              8
            ],
            "stem": "런던 분산력은 순간 쌍극자 사이의 수소 결합에 기인한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "London 분산력은 순간 쌍극자와 이에 의해 유도된 쌍극자 사이의 인력이다. 수소 결합이 생겨서 나타나는 힘이 아니다."
          },
          {
            "id": "chem-final-24-48",
            "qType": "ox",
            "source": "24학번 · 48",
            "ref": "10장 · PDF 5–6쪽",
            "pdfRefPage": 5,
            "pdfRefPages": [
              5,
              6
            ],
            "stem": "H₂O, NH₃, CH₄, HF 중에서 가장 수소 결합이 큰 것은 H₂O이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "강의는 H₂O가 넓은 수소 결합 연결망을 이루는 것을 설명하지만, 개별 수소 결합 세기가 큰 HF와 분자당 수소 결합 수가 많은 H₂O를 구분하지 않고 “수소 결합이 가장 크다”고 서술해 X로 판단한다."
          },
          {
            "id": "chem-final-23-3",
            "qType": "ox",
            "source": "23학번 · 3",
            "ref": "10장 · PDF 4–8쪽",
            "pdfRefPage": 4,
            "pdfRefPages": [
              4,
              5,
              6,
              7,
              8
            ],
            "stem": "반데르발스 결합은 수소원자의 쌍극자 모멘트에 의한 인력이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "반데르발스 힘은 쌍극자 사이의 힘과 London 분산력 등을 포함한다. 수소 원자만의 쌍극자에 의한 힘으로 정의하지 않는다. 수소 결합도 H–H 원자 사이의 결합이라는 뜻이 아니다."
          },
          {
            "id": "chem-final-23-56",
            "qType": "ox",
            "source": "23학번 · 56",
            "ref": "10장 · PDF 7–8쪽",
            "pdfRefPage": 7,
            "pdfRefPages": [
              7,
              8
            ],
            "stem": "무극성 분자들은 순간적인 유발 쌍극자를 형성할 수 있다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "비극성 분자에도 전자 분포의 순간적 요동으로 순간 쌍극자가 생긴다. 이것이 이웃 분자에 쌍극자를 유도하여 인력을 만든다. 원본 X를 강의에 따라 O로 정정했다.\n\n[정답 정정]\n원본 X → 검토 O. 판단 이유는 위 강의 근거와 계산을 따른다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "chem-10-solids",
        "chapter": "10장 액체와 고체",
        "title": "고체의 분류·금속 최조밀 쌓임·그물형/분자성/이온성 고체",
        "pdfPages": [
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43
        ],
        "tags": [
          "10장",
          "p.15-43",
          "결정격자",
          "비정질",
          "단위격자",
          "금속"
        ],
        "summary": "<p><strong>결정성 고체 vs 비정질 고체</strong>, <strong>금속의 최조밀 쌓임(hcp/ccp)</strong>과 <strong>띠 모형(도체/반도체/부도체)</strong>, <strong>그물형 원자성 고체</strong>(다이아몬드, 흑연, 석영), <strong>분자성 고체</strong>(낮은 녹는점, 휘발성), <strong>이온성 고체</strong>의 구조를 다룹니다.</p>",
        "keyPoints": [
          "모든 고체가 결정격자를 갖는 것은 아님(유리, 플라스틱 등은 비정질 고체)",
          "금속 고체: 자유전자(전자바다/띠 모형)로 전기·열전도성 우수, 연성·전성",
          "분자성 고체: 분자 간 힘으로 결합 → 녹는점 낮고 휘발성 높음, 전기 부도체"
        ],
        "glossary": {
          "그물형 원자성 고체": "원자들이 거대한 3차원 공유 결합 망을 이루어 녹는점이 매우 높은 고체(다이아몬드, SiO₂)."
        },
        "pdfExcerpts": {
          "15": "10.3 고체의 형태와 구조: 결정성 고체(규칙적 배열) vs 비정질 고체(유리 등 무질서 배열).",
          "26": "10.4 금속의 전자바다 모형과 띠 모형(전도띠·원자가띠·n형/p형 반도체 도핑).",
          "37": "10.6 분자성 고체: 얼음, 드라이아이스(CO₂), I₂ 등 낮은 융점과 절연성."
        },
        "pastQuestions": [
          {
            "id": "chem-final-25-12",
            "qType": "ox",
            "source": "25학번 · 12",
            "ref": "10장 · PDF 15–16쪽",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15,
              16
            ],
            "stem": "모든 고체는 일정한 결정격자를 형성한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "고체에는 입자가 규칙적으로 반복 배열된 결정성 고체와 장거리 규칙성이 없는 비정질 고체가 있다. 모든 고체가 일정한 결정격자를 갖지는 않는다."
          },
          {
            "id": "chem-final-25-17",
            "qType": "ox",
            "source": "25학번 · 17",
            "ref": "10장 · PDF 37쪽",
            "pdfRefPage": 37,
            "pdfRefPages": [
              37
            ],
            "stem": "분자성 고체는 융점이 높고 휘발성이 낮다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "분자성 고체는 분자 사이 힘으로 유지되어 일반적으로 이온성·그물형 고체보다 녹는점이 낮고 휘발성이 큰 편이다. 물질별 차이는 있으므로 높은 녹는점·낮은 휘발성으로 일반화하지 않는다."
          },
          {
            "id": "chem-final-25-18",
            "qType": "ox",
            "source": "25학번 · 18",
            "ref": "10장 · PDF 26쪽",
            "pdfRefPage": 26,
            "pdfRefPages": [
              26
            ],
            "stem": "금속 고체는 자유전자 때문에 전기전도성이 있다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "금속 고체에서는 비편재화된 원자가전자가 결정 전체로 이동할 수 있어 전류를 운반한다. 자유전자에 의한 전도라는 설명은 금속 결합 모형과 일치한다."
          },
          {
            "id": "chem-final-25-21",
            "qType": "ox",
            "source": "25학번 · 21",
            "ref": "10장 · PDF 15–16쪽",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15,
              16
            ],
            "stem": "물은 상온·1 atm에서 비정질 고체로 존재한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "보통의 실온·1 atm에서 물은 액체이다. 비정질 고체는 장거리 결정 질서가 없는 고체를 말하며 실온의 액체 물을 뜻하지 않는다.\n\n[복원 메모]\n상온의 통상적 압력 1atm 명시."
          },
          {
            "id": "chem-final-25-22",
            "qType": "ox",
            "source": "25학번 · 22",
            "ref": "10장 · PDF 18–19쪽",
            "pdfRefPage": 18,
            "pdfRefPages": [
              18,
              19
            ],
            "stem": "Cl₂는 이온 결합을 하므로 고체 상태에서 높은 전기전도성을 가진다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "Cl₂는 비금속 원자가 공유 결합으로 이루는 분자이다. 고체 염소는 분자성 고체이며 자유롭게 이동하는 이온이나 전자가 없어 높은 전기전도성을 갖지 않는다."
          },
          {
            "id": "chem-final-24-47",
            "qType": "ox",
            "source": "24학번 · 47",
            "ref": "10장 · PDF 19,30–32쪽",
            "pdfRefPage": 19,
            "pdfRefPages": [
              19,
              30,
              31,
              32
            ],
            "stem": "그물형 원자성 고체는 비지향성 공유 결합을 한다",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "그물형 원자성 고체는 원자들이 방향성이 있는 공유 결합으로 연결된 구조이다. 비지향성 결합이라는 설명은 맞지 않는다."
          },
          {
            "id": "chem-final-24-49",
            "qType": "ox",
            "source": "24학번 · 49",
            "ref": "10장 · PDF 18–19쪽",
            "pdfRefPage": 18,
            "pdfRefPages": [
              18,
              19
            ],
            "stem": "소금, 규소, 설탕, 및 금속 중에서 이온성 고체에 해당하는 물질은 설탕이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "소금은 이온성, 규소는 그물형 원자성, 설탕은 분자성, 금속은 금속성 고체이다. 설탕이 이온성 고체라는 설명은 X이다."
          },
          {
            "id": "chem-final-24-64",
            "qType": "ox",
            "source": "24학번 · 64",
            "ref": "10장 · PDF 26쪽",
            "pdfRefPage": 26,
            "pdfRefPages": [
              26
            ],
            "stem": "전자바다모형으로 설명되는 금속 결합은 주기율표 4주기 이후에만 나타난다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "전자바다모형은 금속 양이온 사이에 비편재화된 전자가 이동하는 금속 결합 모형이다. 강의에도 ‘4주기 이후에만’이라는 문장은 없다. [보충] 금속 결합이 4주기 이후 원소에만 생기는 것은 아니며 Li·Na 등에도 적용한다.\n\n[정답 정정]\n원본 O → 검토 X. 판단 이유는 위 강의 근거와 계산을 따른다."
          },
          {
            "id": "chem-final-24-65",
            "qType": "ox",
            "source": "24학번 · 65",
            "ref": "10장 · PDF 32쪽",
            "pdfRefPage": 32,
            "pdfRefPages": [
              32
            ],
            "stem": "그물형 원자성 고체는 부도체이다",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "그물형 원자성 고체인 흑연은 층 안에서 이동 가능한 전자를 가져 전기를 전도한다. 따라서 모든 그물형 원자성 고체를 부도체라고 한 원본 O는 X로 정정한다.\n\n[정답 정정]\n원본 O → 검토 X. 판단 이유는 위 강의 근거와 계산을 따른다."
          },
          {
            "id": "chem-final-23-60",
            "qType": "ox",
            "source": "23학번 · 60",
            "ref": "10장 · PDF 24–25쪽",
            "pdfRefPage": 24,
            "pdfRefPages": [
              24,
              25
            ],
            "stem": "물질 A는 입방 최조밀 쌓임(fcc) 구조이고 원자 반지름이 144 pm, 몰질량이 53.95 g/mol이다. 밀도는 약 5.3 g/cm³이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "면심입방(fcc) 단위세포에는 원자 4개가 있고 모서리 길이 a=2√2r이다. r=144 pm, M=53.95 g/mol을 넣으면 ρ=4M/(Nₐa³)≈5.30 g/cm³이다. 원본에서 생략된 밀도의 단위를 보완했다.\n\n[복원 메모]\n원본에서 생략된 밀도 단위를 강의 fcc 밀도 계산식에 따라 보완."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "chem-10-phase",
        "chapter": "10장 액체와 고체",
        "title": "증기압·상태 변화·Clausius-Clapeyron·상평형 그림",
        "pdfPages": [
          44,
          45,
          46,
          47,
          48,
          49,
          50,
          51,
          52,
          53,
          54,
          55,
          56,
          57,
          58,
          59,
          60,
          61
        ],
        "tags": [
          "10장",
          "p.44-61",
          "증기압",
          "Clausius",
          "끓는점",
          "녹는점"
        ],
        "summary": "<p><strong>평형 증기압</strong>과 온도 관계(Clausius-Clapeyron 식), <strong>정상 끓는점(1 atm)</strong>, 그리고 <strong>물과 CO₂의 상평형 그림</strong>(삼중점, 임계점, 고체-액체 경계선 기울기)을 다룹니다.</p>",
        "keyPoints": [
          "물은 얼음이 물보다 밀도가 작아(수소 결합의 열린 육각 구조) 고체-액체 경계선 기울기가 음(-) → 압력 증가 시 녹는점 감소",
          "대부분의 물질(CO₂ 등)은 고체 밀도가 더 커서 압력 증가 시 녹는점 증가",
          "임계점(T_c, P_c) 이상에서는 액체-기체 구분이 없는 초임계 유체 형성"
        ],
        "glossary": {
          "삼중점(Triple Point)": "고체·액체·기체 세 상이 동시에 평형을 이루며 공존하는 유일한 온도와 압력.",
          "임계점(Critical Point)": "기체를 아무리 가압해도 액화시킬 수 없는 한계 온도(임계온도)와 압력."
        },
        "pdfExcerpts": {
          "54": "10.9 상평형 그림: 물의 고체-액체 경계선은 음의 기울기를 가지며, 이는 얼음이 물보다 밀도가 작기 때문이다.",
          "59": "10.9 물과 이산화탄소의 상평형 그림 비교 (CO₂는 1 atm에서 승화)."
        },
        "pastQuestions": [
          {
            "id": "chem-final-25-16",
            "qType": "ox",
            "source": "25학번 · 16",
            "ref": "10장 · PDF 59쪽",
            "pdfRefPage": 59,
            "pdfRefPages": [
              59
            ],
            "stem": "모든 고체는 압력이 증가하면 녹는점이 감소한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "압력이 커질 때 녹는점이 낮아지는 것은 물처럼 액체의 밀도가 고체보다 큰 경우이다. 많은 물질은 고체가 더 조밀하여 압력이 커질 때 녹는점이 올라간다."
          },
          {
            "id": "chem-final-25-20",
            "qType": "ox",
            "source": "25학번 · 20",
            "ref": "10장 · PDF 54,59쪽",
            "pdfRefPage": 54,
            "pdfRefPages": [
              54,
              59
            ],
            "stem": "얼음은 물보다 밀도가 크다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "얼음은 수소 결합에 의해 열린 구조를 이루어 같은 질량의 액체 물보다 부피가 크고 밀도가 작다. 그래서 물 위에 뜬다."
          },
          {
            "id": "chem-final-24-51",
            "qType": "ox",
            "source": "24학번 · 51",
            "ref": "10장 · PDF 53,60쪽",
            "pdfRefPage": 53,
            "pdfRefPages": [
              53,
              60
            ],
            "stem": "외부압력이 1 atm일 때, 액체의 증기압이 1 atm보다 낮으면 끓음에 의한 기포가 안정하게 형성되지 않는다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "외부압력이 1 atm일 때 액체의 증기압이 1 atm보다 낮으면 기포가 안정하게 자라지 못한다. 강의의 같은 조건을 보완하면 원문은 O여서 원본 X를 정정한다. 감압 조건에서는 결과가 달라질 수 있다.\n\n[복원 메모]\n원본의 ‘기압’을 증기압으로 보완하고 강의의 외부압력 1 atm 조건 명시. 보완 조건에서 원본 X를 O로 정정.\n\n[정답 정정]\n원본 X → 검토 O. 판단 이유는 위 강의 근거와 계산을 따른다."
          },
          {
            "id": "chem-final-24-59",
            "qType": "ox",
            "source": "24학번 · 59",
            "ref": "10장 · PDF 53,60쪽",
            "pdfRefPage": 53,
            "pdfRefPages": [
              53,
              60
            ],
            "stem": "외부압력이 1 atm일 때, 액체의 증기압이 1 atm보다 낮은 온도에서도 끓음에 의한 기포가 안정하게 형성된다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "외부압력 1 atm에서 액체의 증기압이 1 atm보다 낮으면 기포가 유지되지 못한다. 끓음은 증기압이 외부압력에 도달할 때 가능하므로 원본 O를 X로 정정한다.\n\n[복원 메모]\n강의의 외부압력 1 atm 조건을 명시. 보완 조건에서 원본 O를 X로 정정.\n\n[정답 정정]\n원본 O → 검토 X. 판단 이유는 위 강의 근거와 계산을 따른다."
          },
          {
            "id": "chem-final-24-60",
            "qType": "ox",
            "source": "24학번 · 60",
            "ref": "10장 · PDF 52–53쪽",
            "pdfRefPage": 52,
            "pdfRefPages": [
              52,
              53
            ],
            "stem": "과냉각 조건에서는 온도를 녹는점으로 내리고 나머지 물도 얼게 된다",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "과냉각된 물에서 얼음이 생기기 시작하면 응고열이 방출되어 온도가 녹는점 쪽으로 올라간다. 온도를 더 낮추는 과정이라는 설명은 X이다."
          },
          {
            "id": "chem-final-24-61",
            "qType": "ox",
            "source": "24학번 · 61",
            "ref": "10장 · PDF 57쪽",
            "pdfRefPage": 57,
            "pdfRefPages": [
              57
            ],
            "stem": "물의 상태도에서 삼중점의 물과 얼음은 약 0.00602 atm으로 동일한 증기압을 갖는다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "강의의 물 상태도에서 삼중점의 압력은 약 0.00602 atm이다. 이 점에서는 얼음·물·수증기 세 상이 평형을 이룬다."
          },
          {
            "id": "chem-final-24-62",
            "qType": "ox",
            "source": "24학번 · 62",
            "ref": "10장 · PDF 59쪽",
            "pdfRefPage": 59,
            "pdfRefPages": [
              59
            ],
            "stem": "물의 고체–액체선은 음의 기울기이므로 외부압력이 증가하면 녹는점이 감소한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "물의 고체–액체 경계선은 음의 기울기이다. 얼음보다 액체 물의 밀도가 크므로 압력을 높이면 녹는점이 낮아진다. 물에 대한 설명이며 모든 물질에 적용되는 법칙은 아니다."
          },
          {
            "id": "chem-final-24-63",
            "qType": "ox",
            "source": "24학번 · 63",
            "ref": "10장 · PDF 58쪽",
            "pdfRefPage": 58,
            "pdfRefPages": [
              58
            ],
            "stem": "물의 압력이 218 atm, 온도가 374 °C 이상이면 물은 기체 상태이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "10장 PDF58쪽은 물의 임계점을374 °C·218 atm으로 제시하고 이 부근에서는 액체와 기체의 구분이 사라지는 유체를 설명한다. 원문은374 °C 이상으로 임계점 자체까지 포함하므로 전체를 단순한 기체 상태라고 단정한 설명은 X이다. 정확히 임계압력이라는 이유만으로 모든 조건을 엄밀한 초임계 상태라고 부르지는 않는다.\n\n[강의 기준 재검토]\n관련 슬라이드의 정의·조건을 우선하여 검토 보류를 해제했다. 원본 답은 아래에 별도로 보존한다."
          },
          {
            "id": "chem-final-23-65",
            "qType": "ox",
            "source": "23학번 · 65",
            "ref": "10장 · PDF 52–53쪽",
            "pdfRefPage": 52,
            "pdfRefPages": [
              52,
              53
            ],
            "stem": "상태의 변화가 정확하게 끓는점과 녹는점에서 발생한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "과냉각과 과열이 가능하므로 실제 상변화가 언제나 정확히 정상 녹는점·끓는점에서 시작되는 것은 아니다. 압력에 따라서도 상변화 온도가 달라진다."
          },
          {
            "id": "chem-final-23-66",
            "qType": "ox",
            "source": "23학번 · 66",
            "ref": "10장 · PDF 55쪽",
            "pdfRefPage": 55,
            "pdfRefPages": [
              55
            ],
            "stem": "압력이 1 atm, T = 100°C일 때 물과 얼음이 공존한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "1 atm, 100 °C에서는 액체 물과 수증기가 평형을 이룰 수 있다. 물과 얼음이 공존하는 조건이 아니다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "chem-11-conc-sol",
        "chapter": "11장 용액의 특성",
        "title": "용액의 농도(M·m·χ)·용해 에너지·용해도와 Henry 법칙",
        "pdfPages": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22
        ],
        "tags": [
          "11장",
          "p.3-22",
          "몰농도",
          "몰랄농도",
          "몰분율",
          "노르말"
        ],
        "summary": "<p>온도에 의존하는 <strong>몰농도(M)</strong>와 온도에 무관한 <strong>몰랄농도(m)·몰분율(χ)</strong>의 차이, 용해 3단계 에너지(<strong>ΔH_soln = ΔH₁ + ΔH₂ + ΔH₃</strong>), 그리고 기체 용해도에 관한 <strong>Henry 법칙(C = kP)</strong>과 온도 효과를 다룹니다.</p>",
        "keyPoints": [
          "몰농도(M = mol/L)는 부피가 온도에 따라 변하므로 온도에 의존; 몰랄농도(m = mol/kg)는 온도와 무관",
          "기체의 액체 용해도는 압력이 높을수록(Henry 법칙), 온도가 낮을수록 증가",
          "\"끼리끼리 녹는다\"(극성-극성, 비극성-비극성)"
        ],
        "glossary": {
          "Henry 법칙": "일정 온도에서 액체에 녹는 기체의 농도는 그 기체의 부분 압력에 비례한다(C = kP)."
        },
        "pdfExcerpts": {
          "4": "11.1 몰농도 vs 몰랄농도: 부피는 온도에 따라 변하므로 몰농도는 온도에 의존한다.",
          "18": "11.3 Henry 법칙: 용액과 반응하지 않는 기체(O₂, N₂ 등)에 대해 성립.",
          "20": "11.3 온도의 영향: 대부분의 고체는 온도↑ 용해도↑이지만, 기체는 온도↑ 용해도↓."
        },
        "pastQuestions": [
          {
            "id": "chem-final-25-23",
            "qType": "ox",
            "source": "25학번 · 23",
            "ref": "11장 · PDF 4쪽",
            "pdfRefPage": 4,
            "pdfRefPages": [
              4
            ],
            "stem": "몰농도는 용질 몰수에만 의존하기 때문에 온도와 무관하다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "몰농도는 용질 몰수/용액 부피이다. 온도에 따라 부피가 변할 수 있으므로 몰수가 같아도 몰농도는 변할 수 있다. 몰랄농도처럼 질량을 기준으로 하는 농도와 구별한다."
          },
          {
            "id": "chem-final-25-24",
            "qType": "ox",
            "source": "25학번 · 24",
            "ref": "11장 · PDF 20–22쪽",
            "pdfRefPage": 20,
            "pdfRefPages": [
              20,
              21,
              22
            ],
            "stem": "온도가 높아질수록 기체의 용해도가 높아진다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "대부분의 기체는 물의 온도가 올라가면 용해도가 감소한다. 온도가 높을수록 기체 용해도가 높아진다는 설명은 강의의 일반적 경향과 반대이다."
          },
          {
            "id": "chem-final-25-25",
            "qType": "ox",
            "source": "25학번 · 25",
            "ref": "11장 · PDF 18쪽",
            "pdfRefPage": 18,
            "pdfRefPages": [
              18
            ],
            "stem": "Henry 법칙은 산소와 같은 기체에 대하여 성립한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "Henry 법칙은 일정 온도에서 용해도가 기체의 부분압력에 비례한다는 관계이다. 물과 크게 반응하지 않는 O₂ 같은 기체에 적용할 수 있다."
          },
          {
            "id": "chem-final-24-66",
            "qType": "ox",
            "source": "24학번 · 66",
            "ref": "11장 · PDF 6–7쪽",
            "pdfRefPage": 6,
            "pdfRefPages": [
              6,
              7
            ],
            "stem": "에탄올 1 g과 물 100 g을 섞어 용액 101 mL를 만들었다. 에탄올의 몰분율은 약 0.00389, 몰랄농도는 약 0.217 mol/kg이다. (에탄올 몰질량 46.07 g/mol)",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "에탄올 몰수는 1.00/46.07=0.02171 mol, 물 몰수는 약 100/18.02=5.55 mol이다. 에탄올 몰분율은 약 0.00389이고 몰랄농도는 0.02171/0.100=0.217 mol/kg이다. 두 값이 강의 예제와 같으므로 원본 X를 O로 정정한다.\n\n[정답 정정]\n원본 X → 검토 O. 판단 이유는 위 강의 근거와 계산을 따른다."
          },
          {
            "id": "chem-final-24-67",
            "qType": "ox",
            "source": "24학번 · 67",
            "ref": "11장 · PDF 8–9쪽",
            "pdfRefPage": 8,
            "pdfRefPages": [
              8,
              9
            ],
            "stem": "MnO₄⁻ + 5e⁻ + 8H⁺ → Mn²⁺ + 4H₂O 반응에서 KMnO₄의 당량 질량은 19.75 g/eq이다. (몰질량 158 g/mol)",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "MnO₄⁻가 Mn²⁺로 환원될 때 1 mol당 전자 5 mol을 받는다. 이 반응의 KMnO₄ 당량 질량은 158/5=31.6 g/eq이므로 19.75 g은 X이다.\n\n[복원 메모]\n원본 다음 페이지의 반쪽 반응식을 한 문항에 결합하고 당량 질량 단위 명시."
          },
          {
            "id": "chem-final-24-68",
            "qType": "ox",
            "source": "24학번 · 68",
            "ref": "11장 · PDF 14쪽",
            "pdfRefPage": 14,
            "pdfRefPages": [
              14
            ],
            "stem": "NaCl은 ΔH용해가 양수이지만 무질서도의 감소로 인해 물에 녹는다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "NaCl 용해는 ΔH가 작게 양수여도 무질서도 증가의 기여로 진행될 수 있다. ‘무질서도의 감소’가 아니라 증가이다."
          },
          {
            "id": "chem-final-24-69",
            "qType": "ox",
            "source": "24학번 · 69",
            "ref": "11장 · PDF 17–19쪽",
            "pdfRefPage": 17,
            "pdfRefPages": [
              17,
              18,
              19
            ],
            "stem": "기체의 용해도는 압력에 따라 증가한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "일정 온도에서 기체가 용매와 크게 반응하지 않고 Henry 법칙을 따르는 범위에서는 기체의 용해도가 그 기체의 부분압력에 비례한다. 전체 압력과 용질 기체의 부분압력을 구별한다."
          },
          {
            "id": "chem-final-24-70",
            "qType": "ox",
            "source": "24학번 · 70",
            "ref": "11장 · PDF 20–22쪽",
            "pdfRefPage": 20,
            "pdfRefPages": [
              20,
              21,
              22
            ],
            "stem": "모든 고체 용해도에서 온도가 증가할수록 용해 속도가 증가한다",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "강의는 온도와 고체의 용해도 관계가 물질마다 다르다고 설명한다. 용해도는 평형에서 녹을 수 있는 양이고 용해 속도는 녹는 빠르기이다. 둘을 섞어 모든 고체에 대해 증가한다고 일반화할 수 없다."
          },
          {
            "id": "chem-final-23-71",
            "qType": "ox",
            "source": "23학번 · 71",
            "ref": "11장 · PDF 10–15쪽",
            "pdfRefPage": 10,
            "pdfRefPages": [
              10,
              11,
              12,
              13,
              14,
              15
            ],
            "stem": "극성용질과 극성용매의 혼합 시, 용매의 엔탈피는 큰 양의 값이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "극성 용질과 극성 용매 사이의 인력 형성은 에너지를 방출하는 단계이다. 전체 용해 엔탈피는 용질·용매를 분리하는 데 드는 에너지와 새 인력 형성 에너지의 합이라 무조건 큰 양수라고 할 수 없다."
          },
          {
            "id": "chem-final-23-72",
            "qType": "ox",
            "source": "23학번 · 72",
            "ref": "11장 · PDF 10–15쪽",
            "pdfRefPage": 10,
            "pdfRefPages": [
              10,
              11,
              12,
              13,
              14,
              15
            ],
            "stem": "용액 형성의 각 단계는 용질, 용매 및 용질-용매 간의 척력을 극복하기 위한 엔탈피가 필요하다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "용질 입자끼리와 용매 입자끼리 떨어뜨리는 단계는 인력을 극복해 에너지를 필요로 한다. 용질–용매 인력을 형성하는 혼합 단계는 에너지를 방출한다. 모든 단계가 반발력을 극복한다는 설명은 X이다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "chem-11-colligative",
        "chapter": "11장 용액의 특성",
        "title": "증기압 내림(Raoult)·끓는점 오름·어는점 내림·삼투압·콜로이드",
        "pdfPages": [
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          46,
          47,
          48,
          49,
          50,
          51,
          52,
          53
        ],
        "tags": [
          "11장",
          "p.23-53",
          "Raoult",
          "증기압",
          "끓는점",
          "어는점"
        ],
        "summary": "<p>비휘발성 용질에 의한 <strong>총괄성</strong>(용질 입자의 종류가 아닌 개수에만 의존): <strong>Raoult 법칙(P = χ_용매·P°)</strong>, <strong>끓는점 오름(ΔT_b = i·K_b·m)</strong>, <strong>어는점 내림(ΔT_f = i·K_f·m)</strong>, <strong>삼투압(Π = iMRT)</strong> 및 <strong>콜로이드(Tyndall 효과)</strong>를 다룹니다.</p>",
        "keyPoints": [
          "전해질은 해리되어 입자 수가 늘어나므로 van 't Hoff 인자(i)를 곱함 (예: 1 M NaCl의 i≈2 > 1 M 포도당의 i=1)",
          "이상 용액에서 ΔH_soln = 0; 양의 편차(용질-용매 인력 약함) vs 음의 편차(인력 강함)",
          "콜로이드 입자는 빛을 산란시키는 Tyndall 효과를 보임"
        ],
        "glossary": {
          "총괄성": "용액 내 용질 입자의 화학적 성질이 아니라 전체 입자 농도(개수)에만 비례하는 성질.",
          "삼투압(Π)": "반투막을 통한 용매의 이동을 막기 위해 용액 쪽에 가해야 하는 압력(Π = iMRT)."
        },
        "pdfExcerpts": {
          "23": "11.4 Raoult 법칙: 비휘발성 용질이 용매의 증기압을 낮추며 이상 용액은 전 농도에서 성립한다.",
          "42": "11.6 삼투압: 전해질(NaCl)은 이온 해리로 인해 같은 몰농도의 비전해질(포도당)보다 삼투압이 높다."
        },
        "pastQuestions": [
          {
            "id": "chem-final-25-26",
            "qType": "ox",
            "source": "25학번 · 26",
            "ref": "11장 · PDF 42쪽",
            "pdfRefPage": 42,
            "pdfRefPages": [
              42
            ],
            "stem": "같은 온도에서 1 M NaCl 수용액의 삼투압은 1 M 포도당 수용액보다 높다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "같은 온도에서 이상적으로 π=iMRT이다. NaCl은 Na⁺·Cl⁻로 해리되어 입자 수가 늘고 포도당은 해리하지 않는다. 따라서 같은 1 M이면 NaCl 수용액의 삼투압이 더 높다. 실제 고농도에서는 이온 간 상호작용 때문에 i가 정확히 2는 아니다.\n\n[복원 메모]\n삼투압 비교에 필요한 같은 온도 조건 명시."
          },
          {
            "id": "chem-final-25-27",
            "qType": "ox",
            "source": "25학번 · 27",
            "ref": "11장 · PDF 24,26쪽",
            "pdfRefPage": 24,
            "pdfRefPages": [
              24,
              26
            ],
            "stem": "비휘발성 용질을 첨가하면 용액의 증기압은 증가한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "비휘발성 용질을 넣으면 용매의 몰분율이 작아져 증기압이 내려간다. 이상용액에서 P용매=x용매P°용매이다."
          },
          {
            "id": "chem-final-25-28",
            "qType": "ox",
            "source": "25학번 · 28",
            "ref": "11장 · PDF 30쪽",
            "pdfRefPage": 30,
            "pdfRefPages": [
              30
            ],
            "stem": "이상용액은 Raoult 법칙을 따르고 혼합 엔탈피 변화가 0이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "이상용액은 Raoult 법칙을 따르며 혼합 전후 인력의 변화가 상쇄되어 혼합 엔탈피 ΔH혼합=0이다. 용액 자체의 엔탈피 H가 0이라는 뜻은 아니다.\n\n[복원 메모]\n엔탈피 변화가 혼합 엔탈피임을 명시."
          },
          {
            "id": "chem-final-25-29",
            "qType": "ox",
            "source": "25학번 · 29",
            "ref": "11장 · PDF 34–36쪽",
            "pdfRefPage": 34,
            "pdfRefPages": [
              34,
              35,
              36
            ],
            "stem": "같은 용매·몰랄농도에서 여러 이온으로 해리하는 전해질은 비전해질보다 끓는점 상승이 크다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "같은 용매와 같은 몰랄농도에서 ΔTᵦ=iKᵦm이다. 여러 이온으로 해리하는 전해질은 해리하지 않는 비전해질보다 입자 수가 커 끓는점 상승이 더 크다. 농도를 달리하면 순서가 바뀔 수 있어 같은 농도 조건을 보완했다.\n\n[복원 메모]\n같은 용매·몰랄농도 및 해리 입자 수 조건 보완."
          },
          {
            "id": "chem-final-25-31",
            "qType": "ox",
            "source": "25학번 · 31",
            "ref": "11장 · PDF 34–36쪽",
            "pdfRefPage": 34,
            "pdfRefPages": [
              34,
              35,
              36
            ],
            "stem": "소금물은 순수한 물보다 끓는점이 낮다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "비휘발성 염이 녹으면 물의 증기압이 낮아져 같은 외부압력에 도달하려면 더 높은 온도가 필요하다. 따라서 소금물의 끓는점은 순수한 물보다 높아진다."
          },
          {
            "id": "chem-final-25-32",
            "qType": "ox",
            "source": "25학번 · 32",
            "ref": "11장 · PDF 23–33쪽",
            "pdfRefPage": 23,
            "pdfRefPages": [
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
              31,
              32,
              33
            ],
            "stem": "희석 이상용액에서 비휘발성 용질에 의한 증기압 내림은 용질 종류보다 용액 속 입자 수에 의존한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "희석 이상용액에서 비휘발성 용질에 의한 증기압 내림은 용질의 화학적 이름보다 용액 속 입자 수에 의해 결정되는 총괄성이다. 전해질은 해리 후 입자 수를 세며, 실제 비이상 용액이나 휘발성 용질에 무조건 적용하지 않는다.\n\n[복원 메모]\n희석 이상용액·비휘발성 용질 범위로 한정."
          },
          {
            "id": "chem-final-24-71",
            "qType": "ox",
            "source": "24학번 · 71",
            "ref": "11장 · PDF 28쪽",
            "pdfRefPage": 28,
            "pdfRefPages": [
              28
            ],
            "stem": "Na₂SO₄ 35.0 g(몰질량 142.05 g/mol)을 물 175 g에 녹이면 25 °C에서 용액의 증기압은 약 22.1 torr이다. (물의 증기압 23.76 torr, 완전 해리 가정)",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "강의의 동일 예제는 Na₂SO₄ 35.0 g(142.05 g/mol)을 물 175 g에 녹이고, 25 °C의 순수한 물 증기압 23.76 torr를 사용한다. 완전 해리를 가정하면 x물=(175/18.02)/[(175/18.02)+3(35/142.05)]≈0.929이며 P≈22.1 torr이다. 누락 물의 질량과 오기 몰질량을 학습용으로 보완했다.\n\n[복원 메모]\n원본에서 누락된 물175g·증기압 조건을 강의11장28쪽의 동일 예제로 보완하고 몰질량141.05를142.05로 정정."
          },
          {
            "id": "chem-final-24-72",
            "qType": "ox",
            "source": "24학번 · 72",
            "ref": "11장 · PDF 31쪽",
            "pdfRefPage": 31,
            "pdfRefPages": [
              31
            ],
            "stem": "에탄올–헥세인 혼합은 흡열 과정(ΔH혼합>0)이며, 증기압은 Raoult 법칙의 예상보다 높은 양의 편차를 보인다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "에탄올과 헥세인을 섞으면 기존 에탄올 사이 수소 결합을 끊는 효과가 커 ΔH용해>0인 혼합이 된다. 용질–용매 인력이 상대적으로 약해 증기압이 Raoult 법칙의 예상보다 높아지는 양의 편차를 보인다.\n\n[복원 메모]\n원본의 ‘증기압이 흡열 엔탈피를 가진다’는 부정확한 주어를 강의에 따라 혼합 과정으로 보완."
          },
          {
            "id": "chem-final-24-73",
            "qType": "ox",
            "source": "24학번 · 73",
            "ref": "11장 · PDF 44쪽",
            "pdfRefPage": 44,
            "pdfRefPages": [
              44
            ],
            "stem": "단백질 1.00×10⁻³ g을 녹여 용액 1.00 mL를 만들었다. 25 °C에서 삼투압이 1.12 torr이면 단백질의 몰질량은 약 1.66×10⁴ g/mol이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "πV=nRT이므로 몰질량 M=mRT/(πV)이다. π=1.12/760 atm, V=0.00100 L, T=298.15 K를 넣으면 M≈1.66×10⁴ g/mol이다. 원본의 g를 몰질량 단위 g/mol로 보완했다.\n\n[복원 메모]\n원본 몰질량 단위 g를 g/mol로 보완."
          },
          {
            "id": "chem-final-24-74",
            "qType": "ox",
            "source": "24학번 · 74",
            "ref": "11장 · PDF 46쪽",
            "pdfRefPage": 46,
            "pdfRefPages": [
              46
            ],
            "stem": "적혈구를 세포액보다 삼투압이 큰 용액에 담그면 팽창하여 파괴된다",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "세포액보다 삼투압이 큰 고장액에서는 세포의 물이 밖으로 이동하여 적혈구가 수축한다. 팽창·용혈은 저장액에서 일어난다."
          },
          {
            "id": "chem-final-24-75",
            "qType": "ox",
            "source": "24학번 · 75",
            "ref": "11장 · PDF 51쪽",
            "pdfRefPage": 51,
            "pdfRefPages": [
              51
            ],
            "stem": "버터와 치즈는 고체 분산 매질과 액체 분산 물질로 구성되어있으며, 입자성 콜로이드 형태를 띤다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "강의 표에서 버터·치즈는 고체 분산매질에 액체가 분산된 ‘고체 에멀전’이다. 앞부분의 상 구분은 맞지만 이를 입자성 콜로이드로 분류한 뒷부분은 맞지 않는다. 이 문항을 ‘고체 매질·액체 분산’만으로 O라고 정정하지 않는다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "chem-12-ratelaw",
        "chapter": "12장 화학 반응 속도론",
        "title": "반응 속도·속도 법칙·적분 속도 법칙·반감기",
        "pdfPages": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37
        ],
        "tags": [
          "12장",
          "p.5-37",
          "속도",
          "차수",
          "속도 법칙",
          "초기 속도"
        ],
        "summary": "<p>평균/순간 반응 속도 정의, <strong>미분 속도 법칙(Rate = k[A]^m[B]^n)</strong>의 실험적 결정(초기 속도법 — 반응식 계수와 차수는 무관!), 그리고 <strong>0차·1차·2차 적분 속도 법칙</strong>과 <strong>반감기(t₁/₂)</strong> 식을 다룹니다.</p>",
        "keyPoints": [
          "반응 차수(m, n)는 반드시 실험으로 결정해야 하며 균형 화학반응식 계수와 일치하지 않음",
          "1차 반응: ln[A] vs t 직선, 반감기 t₁/₂ = 0.693/k (초기 농도 [A]₀와 무관!)",
          "2차 반응: 1/[A] vs t 직선, t₁/₂ = 1/(k[A]₀); 0차 반응: [A] vs t 직선, t₁/₂ = [A]₀/(2k)"
        ],
        "glossary": {
          "반감기(t₁/₂)": "반응물의 농도가 초기 농도의 절반으로 줄어드는 데 걸리는 시간."
        },
        "pdfExcerpts": {
          "15": "12.3 속도 법칙 결정: 차수는 오직 실험으로만 결정할 수 있으며 화학량론적 계수와 다를 수 있다.",
          "24": "12.4 일차 적분 속도 법칙: t₁/₂ = ln2/k ≈ 0.693/k로 초기 농도에 무관하다."
        },
        "pastQuestions": [
          {
            "id": "chem-final-25-34",
            "qType": "ox",
            "source": "25학번 · 34",
            "ref": "12장 · PDF 15쪽",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15
            ],
            "stem": "속도법칙의 차수는 항상 반응식 계수와 일치한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "반응차수는 실험으로 결정한다. 전체 반응식의 계수와 속도법칙의 지수가 반드시 같지는 않다. 단일 기본반응에서는 일치할 수 있으나 ‘항상’은 틀려 원본 O를 X로 정정한다.\n\n[정답 정정]\n원본 O → 검토 X. 판단 이유는 위 강의 근거와 계산을 따른다."
          },
          {
            "id": "chem-final-25-38",
            "qType": "ox",
            "source": "25학번 · 38",
            "ref": "12장 · PDF 37쪽",
            "pdfRefPage": 37,
            "pdfRefPages": [
              37
            ],
            "stem": "속도상수 k의 값은 반응차수가 다른 반응 사이에서 달라질 수 있다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "반응차수가 다른 반응들은 속도상수 k의 값도 서로 다를 수 있고 단위도 달라진다. 같은 반응의 차수는 임의로 바꾸는 설정값이 아니므로 차수를 바꾸기만 하면 k가 변한다는 인과관계로 해석하지 않는다.\n\n[복원 메모]\n다른 반응차수를 갖는 반응 사이의 비교임을 명시."
          },
          {
            "id": "chem-final-25-40",
            "qType": "ox",
            "source": "25학번 · 40",
            "ref": "12장 · PDF 33–34쪽",
            "pdfRefPage": 33,
            "pdfRefPages": [
              33,
              34
            ],
            "stem": "영차 반응에서 해당 반응물의 농도는 반응속도에 영향을 주지 않는다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "영차 반응에서 속도=k[A]⁰=k이다. 해당 반응물의 농도를 바꾸어도 영차 속도식이 성립하는 범위에서 속도는 일정하다.\n\n[복원 메모]\n속도식 적용 범위의 해당 반응물임을 명시."
          },
          {
            "id": "chem-final-25-41",
            "qType": "ox",
            "source": "25학번 · 41",
            "ref": "12장 · PDF 18–19쪽",
            "pdfRefPage": 18,
            "pdfRefPages": [
              18,
              19
            ],
            "stem": "화학반응의 전체 반응차수는 속도식의 각 농도 지수의 합이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "속도식 v=k[A]ᵐ[B]ⁿ의 전체 반응차수는 m+n이다. 반응식 계수의 합이 아니라 실험적으로 얻은 농도 지수의 합이다. 원본 ‘치수’를 ‘차수’로 바로잡았다."
          },
          {
            "id": "chem-final-25-43",
            "qType": "ox",
            "source": "25학번 · 43",
            "ref": "12장 · PDF 11,14–19쪽",
            "pdfRefPage": 11,
            "pdfRefPages": [
              11,
              14,
              15,
              16,
              17,
              18,
              19
            ],
            "stem": "기체의 농도가 높으면 반응속도는 항상 높다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "속도는 실험적으로 정해진 속도식에 따른다. 해당 기체에 대해 영차이면 농도를 높여도 속도가 달라지지 않을 수 있으므로 ‘항상 높다’는 X이다."
          },
          {
            "id": "chem-final-24-76",
            "qType": "ox",
            "source": "24학번 · 76",
            "ref": "12장 · PDF 20–23쪽",
            "pdfRefPage": 20,
            "pdfRefPages": [
              20,
              21,
              22,
              23
            ],
            "stem": "일차 속도식은 시간과 농도 역수의 직선 방정식을 이룬다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "일차 반응에서는 ln[A]=−kt+ln[A]₀이므로 ln[A] 대 t가 직선이다. 1/[A] 대 t가 직선인 것은 이차 반응이다."
          },
          {
            "id": "chem-final-24-77",
            "qType": "ox",
            "source": "24학번 · 77",
            "ref": "12장 · PDF 24–27쪽",
            "pdfRefPage": 24,
            "pdfRefPages": [
              24,
              25,
              26,
              27
            ],
            "stem": "일차 반응의 반감기는 초기 농도의 자연로그 값에 비례한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "일차 반응 반감기는 t₁/₂=ln2/k로 초기 농도와 무관하다. 초기 농도의 자연로그에 비례하지 않는다."
          },
          {
            "id": "chem-final-24-78",
            "qType": "ox",
            "source": "24학번 · 78",
            "ref": "12장 · PDF 29쪽",
            "pdfRefPage": 29,
            "pdfRefPages": [
              29
            ],
            "stem": "이차 반응의 반감기는 초기 농도의 역수에 비례한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "이차 반응에서 t₁/₂=1/(k[A]₀)이다. 반감기는 초기 농도의 역수에 비례한다. 원문의 뒤바뀐 어순을 바로잡았다.\n\n[복원 메모]\n원본의 뒤바뀐 어순만 바로잡음. 개념·정답 변경 없음."
          },
          {
            "id": "chem-final-24-80",
            "qType": "ox",
            "source": "24학번 · 80",
            "ref": "12장 · PDF 29쪽",
            "pdfRefPage": 29,
            "pdfRefPages": [
              29
            ],
            "stem": "aA → 생성물 반응에서 [A]₀=5.0 M이고 연속한 첫 번째·두 번째 반감기는 25분과 50분이다. 125분 뒤 [A]는 약 0.83 M이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "그림에 [A]₀=5.0 M, 연속한 두 반감기 25분·50분이 제시되어 있다. 이차 반응이므로 k=0.0080 M⁻¹ min⁻¹이고 125분 뒤 [A]=1/(0.2+0.0080×125)=0.833 M이다. 그림 속 조건을 문자로 옮겼다.\n\n[복원 메모]\n원본 그림 속 초기 농도와 두 반감기 조건을 문자로 전사. 농도 단위 M 보완."
          },
          {
            "id": "chem-final-23-75",
            "qType": "ox",
            "source": "23학번 · 75",
            "ref": "12장 · PDF 28,30–32쪽",
            "pdfRefPage": 28,
            "pdfRefPages": [
              28,
              30,
              31,
              32
            ],
            "stem": "이차 속도식에서 반응 속도는 시간과 초기 농도 자연로그의 직선의 방정식이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "이차 반응은 1/[A]=kt+1/[A]₀의 적분 속도식을 따른다. 시간에 대해 직선으로 변하는 것은 농도의 역수이며 자연로그가 아니다."
          },
          {
            "id": "chem-final-23-77",
            "qType": "ox",
            "source": "23학번 · 77",
            "ref": "12장 · PDF 24–27쪽",
            "pdfRefPage": 24,
            "pdfRefPages": [
              24,
              25,
              26,
              27
            ],
            "stem": "어떤 물질의 일차 반응 반감기는 60.0분이다. 이때 반응의 속도 상수는 1.15×10⁻² min⁻¹이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "일차 반응에서 k=ln2/t₁/₂=0.693/60.0=1.16×10⁻² min⁻¹이다. 제시값 1.15×10⁻² min⁻¹은 근삿값으로 일치한다."
          },
          {
            "id": "chem-final-23-79",
            "qType": "ox",
            "source": "23학번 · 79",
            "ref": "12장 · PDF 33–34쪽",
            "pdfRefPage": 33,
            "pdfRefPages": [
              33,
              34
            ],
            "stem": "영차 반응에서 반응 속도는 농도에 비례한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "영차 반응의 속도는 k[A]⁰=k로 농도에 무관하다. 농도에 비례하는 것은 해당 반응물에 대해 일차인 경우이다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "chem-12-mech-cat",
        "chapter": "12장 화학 반응 속도론",
        "title": "반응 메커니즘·활성화 에너지(Arrhenius)·촉매 작용",
        "pdfPages": [
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          46,
          47,
          48,
          49,
          50,
          51,
          52,
          53,
          54,
          55,
          56,
          57
        ],
        "tags": [
          "12장",
          "p.38-57",
          "메커니즘",
          "중간체",
          "속도결정단계",
          "분자도"
        ],
        "summary": "<p>단일 단계 반응의 <strong>분자도</strong>와 <strong>속도결정단계(가장 느린 단계)</strong>, 반응 중간체, <strong>충돌 모형 및 Arrhenius 식(k = Ae^(-Ea/RT))</strong>, 그리고 활성화 에너지(E_a)를 낮추는 <strong>촉매(균일·불균일)</strong>를 다룹니다.</p>",
        "keyPoints": [
          "전체 반응 속도 법칙은 속도결정단계(가장 느린 단일 단계)에 의해 결정됨",
          "중간체는 생성되었다가 다음 단계에서 소모되며 전체 반응식에는 나타나지 않음 (촉매는 처음에 소모 후 재생)",
          "촉매는 E_a를 낮춰 정·역반응 속도를 모두 높이지만 평형 위치(ΔH, K)는 바꾸지 않음"
        ],
        "glossary": {
          "활성화 에너지(E_a)": "반응이 일어나기 위해 충돌하는 분자들이 넘어야 하는 최소 에너지 장벽.",
          "촉매": "자신은 소모되지 않으면서 더 낮은 활성화 에너지의 새로운 반응 경로를 제공해 반응 속도를 높이는 물질."
        },
        "pdfExcerpts": {
          "40": "12.5 반응 메커니즘: 단일 단계 반응에서는 계수가 곧 속도 법칙의 차수이며, 가장 느린 단계가 전체 속도를 지배한다.",
          "54": "12.7 촉매 작용: 균일 촉매 vs 불균일 촉매(표면 흡착 → 이동 → 반응 → 탈착)."
        },
        "pastQuestions": [
          {
            "id": "chem-final-25-36",
            "qType": "ox",
            "source": "25학번 · 36",
            "ref": "12장 · PDF 55–57쪽",
            "pdfRefPage": 55,
            "pdfRefPages": [
              55,
              56,
              57
            ],
            "stem": "촉매는 반응속도를 증가시키며 속도법칙에는 나타나지 않는다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "촉매가 관여하는 반응의 실험적 속도식에는 촉매 농도가 포함될 수 있다. 촉매가 전체 반응에서 재생된다고 해서 속도법칙에 절대 나타나지 않는 것은 아니다."
          },
          {
            "id": "chem-final-25-39",
            "qType": "ox",
            "source": "25학번 · 39",
            "ref": "12장 · PDF 48–49쪽",
            "pdfRefPage": 48,
            "pdfRefPages": [
              48,
              49
            ],
            "stem": "활성화에너지가 낮을수록 항상 반응속도는 빠르다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "k=A·exp(−Eₐ/RT)이므로 반응속도는 활성화에너지뿐 아니라 빈도인자 A, 온도와 농도 등에도 영향을 받는다. Eₐ만 낮다고 모든 반응의 속도가 항상 더 빠른 것은 아니다."
          },
          {
            "id": "chem-final-25-42",
            "qType": "ox",
            "source": "25학번 · 42",
            "ref": "12장 · PDF 41–42쪽",
            "pdfRefPage": 41,
            "pdfRefPages": [
              41,
              42
            ],
            "stem": "복잡반응의 속도결정단계는 항상 가장 느린 단계이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "12장 PDF 41–42쪽은 느린 단계를 반응속도결정단계로 표시하고 전체 반응속도가 그 단계의 속도라고 설명한다. 이 강의에서 다루는 순차 반응 메커니즘의 기준으로 O로 판단한다. 원문의 항상을 모든 복잡한 반응망에 대한 보편 명제로 확대하지 않는다.\n\n[강의 기준 재검토]\n관련 슬라이드의 정의·조건을 우선하여 검토 보류를 해제했다. 원본 답은 아래에 별도로 보존한다."
          },
          {
            "id": "chem-final-24-82",
            "qType": "ox",
            "source": "24학번 · 82",
            "ref": "12장 · PDF 43–44쪽",
            "pdfRefPage": 43,
            "pdfRefPages": [
              43,
              44
            ],
            "stem": "아레니우스 활성화 에너지의 속도상수와 관련하여 반응온도가 높아질수록 반응속도가 줄어든다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "강의의 양의 활성화에너지를 갖는 일반적인 반응에서 온도가 올라가면 충분한 에너지를 갖는 충돌 비율이 커지고 속도상수도 커진다. 속도가 감소한다는 설명은 반대이다."
          },
          {
            "id": "chem-final-24-83",
            "qType": "ox",
            "source": "24학번 · 83",
            "ref": "12장 · PDF 44–48쪽",
            "pdfRefPage": 44,
            "pdfRefPages": [
              44,
              45,
              46,
              47,
              48
            ],
            "stem": "충돌에너지가 활성화에너지보다 클수록 반응속도가 상승한다",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "12장 PDF44·48쪽은 반응이 일어나려면 충돌에너지≥활성화에너지와 적절한 분자 배향이 모두 필요하다고 명시한다. 충돌에너지가 문턱을 넘는 것만으로 속도가 더 빨라진다고 단정하는 원문은 이 강의의 두 조건을 빠뜨리므로 X로 판단한다. 다른 조건을 고정하고 온도를 올려 유효충돌 비율이 증가한다는 별도 설명과 구별한다.\n\n[강의 기준 재검토]\n관련 슬라이드의 정의·조건을 우선하여 검토 보류를 해제했다. 원본 답은 아래에 별도로 보존한다."
          },
          {
            "id": "chem-final-24-84",
            "qType": "ox",
            "source": "24학번 · 84",
            "ref": "12장 · PDF 55–57쪽",
            "pdfRefPage": 55,
            "pdfRefPages": [
              55,
              56,
              57
            ],
            "stem": "반응물과 같은 상으로 존재하는 촉매를 균일 촉매라고 한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "반응물과 같은 상에 있는 촉매는 균일 촉매이다. 서로 다른 상에 있으면 불균일 촉매이다."
          },
          {
            "id": "chem-final-23-81",
            "qType": "ox",
            "source": "23학번 · 81",
            "ref": "12장 · PDF 48–49쪽",
            "pdfRefPage": 48,
            "pdfRefPages": [
              48,
              49
            ],
            "stem": "아레니우스 식에 분자배향이 화학 반응 속도에 미치는 영향이 포함되어 있다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "Arrhenius 식 k=A·exp(−Eₐ/RT)의 빈도인자 A에는 충돌 빈도와 반응에 알맞은 분자 배향의 효과가 포함된다."
          },
          {
            "id": "chem-final-23-83",
            "qType": "ox",
            "source": "23학번 · 83",
            "ref": "12장 · PDF 53–54쪽",
            "pdfRefPage": 53,
            "pdfRefPages": [
              53,
              54
            ],
            "stem": "반응에 소모되면서 반응 속도를 증가시키는 물질을 촉매라고 한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "촉매는 활성화에너지가 더 낮은 다른 경로를 제공하고 전체 반응에서는 재생된다. 반응 도중 관여할 수 있지만 최종적으로 소모되는 반응물은 아니다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "chem-13-eq-const",
        "chapter": "13장 화학 평형",
        "title": "평형 조건·평형 상수(K, Kp)·불균일 평형·반응 지수(Q)",
        "pdfPages": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40
        ],
        "tags": [
          "13장",
          "p.3-40",
          "평형 상수",
          "질량 작용",
          "Kp",
          "불균일"
        ],
        "summary": "<p>동적 평형 상태(정반응 속도 = 역반응 속도), <strong>평형 상수 K</strong>와 압력 평형 상수 <strong>Kp = K(RT)^Δn</strong>, <strong>불균일 평형에서 순수 고체·액체 제외</strong>, 그리고 <strong>반응 지수 Q</strong>와 K의 비교로 반응 진행 방향을 예측합니다.</p>",
        "keyPoints": [
          "순수한 고체와 순수한 액체의 농도는 일정하므로 K, Kp 식에 포함하지 않음",
          "Q < K → 정반응 진행; Q > K → 역반응 진행; Q = K → 평형",
          "평형 상수 K는 오직 온도에 의해서만 변함 (초기 농도·압력·촉매에 무관)"
        ],
        "glossary": {
          "반응 지수(Q)": "임의의 시점 농도를 평형 상수 식에 대입한 값. K와 비교하여 반응 방향을 판단한다."
        },
        "pdfExcerpts": {
          "14": "13.3 Kp = K(RT)^Δn (Δn = 생성물 기체 몰수 합 - 반응물 기체 몰수 합).",
          "17": "13.4 불균일 평형: 순수 고체와 액체는 평형 상수 표현에서 생략된다.",
          "23": "13.5 반응의 진행 정도: K ≫ 1이면 정반응 우세, K ≪ 1이면 역반응 우세.",
          "24": "13.5 반응 지수 Q를 이용한 평형 이동 방향 예측."
        },
        "pastQuestions": [
          {
            "id": "chem-final-25-44",
            "qType": "ox",
            "source": "25학번 · 44",
            "ref": "13장 · PDF 3–6쪽",
            "pdfRefPage": 3,
            "pdfRefPages": [
              3,
              4,
              5,
              6
            ],
            "stem": "평형 상태에서는 반응물과 생성물의 농도가 같다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "평형에서는 정반응 속도와 역반응 속도가 같고 각 농도가 시간에 따라 일정하다. 반응물과 생성물의 농도끼리 반드시 같은 것은 아니다."
          },
          {
            "id": "chem-final-25-45",
            "qType": "ox",
            "source": "25학번 · 45",
            "ref": "13장 · PDF 23쪽",
            "pdfRefPage": 23,
            "pdfRefPages": [
              23
            ],
            "stem": "K가 0에 가까울수록 생성물 쪽에서 평형을 이룬다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "K가 매우 작으면 평형에서 반응물 쪽이 우세하다. 생성물 쪽이 우세한 것은 K가 매우 큰 경우이다."
          },
          {
            "id": "chem-final-25-47",
            "qType": "ox",
            "source": "25학번 · 47",
            "ref": "13장 · PDF 13–16쪽",
            "pdfRefPage": 13,
            "pdfRefPages": [
              13,
              14,
              15,
              16
            ],
            "stem": "Kₚ와 K꜀는 동일한 값을 갖는다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "이상기체에서 Kₚ=K꜀(RT)의 Δn승이다. 기체 몰수 변화 Δn이 0인 경우 등에는 같을 수 있지만 항상 같은 것은 아니다."
          },
          {
            "id": "chem-final-24-86",
            "qType": "ox",
            "source": "24학번 · 86",
            "ref": "13장 · PDF 7–12쪽",
            "pdfRefPage": 7,
            "pdfRefPages": [
              7,
              8,
              9,
              10,
              11,
              12
            ],
            "stem": "2NO(g)+Cl₂(g) ⇌ 2NOCl(g)에서 25 °C의 평형 부분압력은 P(NOCl)=1.2 atm, P(NO)=5.0×10⁻² atm, P(Cl₂)=3.0×10⁻¹ atm이다. Kₚ는 약 1.9×10³이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "Kₚ=P(NOCl)²/[P(NO)²P(Cl₂)]=1.2²/[(5.0×10⁻²)²(3.0×10⁻¹)]=1.92×10³이다. 유효숫자 두 자리로 1.9×10³이므로 O이다."
          },
          {
            "id": "chem-final-24-87",
            "qType": "ox",
            "source": "24학번 · 87",
            "ref": "13장 · PDF 24–26쪽",
            "pdfRefPage": 24,
            "pdfRefPages": [
              24,
              25,
              26
            ],
            "stem": "어떤 반응식에서 반응지수(Q)가 평형상수(K)보다 클 때, 평형은 오른쪽으로 이동한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "Q>K이면 생성물이 평형보다 상대적으로 많다. Q를 줄이도록 역반응, 즉 왼쪽으로 이동한다. 원본 O를 X로 정정한다.\n\n[정답 정정]\n원본 O → 검토 X. 판단 이유는 위 강의 근거와 계산을 따른다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "chem-13-lechatelier",
        "chapter": "13장 화학 평형",
        "title": "Le Châtelier의 원리 (농도·압력/부피·온도 변화)",
        "pdfPages": [
          41,
          42,
          43,
          44,
          45,
          46,
          47,
          48,
          49,
          50,
          51,
          52
        ],
        "tags": [
          "13장",
          "p.41-52",
          "Le Chatelier",
          "르샤틀리에",
          "부피",
          "압력"
        ],
        "summary": "<p>평형 상태의 계에 외부 변화(농도·압력/부피·온도)를 가했을 때 그 변화를 완화하는 방향으로 평형이 이동하는 <strong>Le Châtelier의 원리</strong>를 다룹니다.</p>",
        "keyPoints": [
          "부피 감소(압력 증가) → 기체 몰수가 적은 쪽으로 이동 (일정 부피에서 비활성 기체 첨가는 영향 없음)",
          "발열 반응(ΔH < 0)에서 온도 상승 → 역반응(흡열) 쪽으로 이동하여 K 감소",
          "흡열 반응(ΔH > 0)에서 온도 상승 → 정반응 쪽으로 이동하여 K 증가"
        ],
        "glossary": {
          "Le Châtelier 원리": "평형에 있는 계에 스트레스를 가하면 계는 그 스트레스를 줄이는 방향으로 평형을 이동시킨다."
        },
        "pdfExcerpts": {
          "44": "13.7 압력/부피 변화 및 온도 변화에 따른 K 값 변화(온도만이 K를 바꾼다)."
        },
        "pastQuestions": [
          {
            "id": "chem-final-25-48",
            "qType": "ox",
            "source": "25학번 · 48",
            "ref": "13장 · PDF 50–51쪽",
            "pdfRefPage": 50,
            "pdfRefPages": [
              50,
              51
            ],
            "stem": "온도 변화는 평형상수 K를 변화시킬 수 있다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "평형상수는 온도에 의존한다. 온도 변화는 평형 위치뿐 아니라 K 자체도 바꿀 수 있다. 일정 온도에서 농도·압력을 바꾸는 경우와 구별한다."
          },
          {
            "id": "chem-final-24-88",
            "qType": "ox",
            "source": "24학번 · 88",
            "ref": "13장 · PDF 42–45쪽",
            "pdfRefPage": 42,
            "pdfRefPages": [
              42,
              43,
              44,
              45
            ],
            "stem": "As₄O₆ + 6C ⇌ As₄ + 6CO에서 일산화 탄소를 첨가하면 평형 위치가 변한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "생성물 CO를 첨가하면 이를 소비하는 역반응 방향으로 평형이 이동한다. 따라서 평형 위치가 변한다. 순수한 고체 C의 양을 더하는 경우와 구별한다."
          },
          {
            "id": "chem-final-23-86",
            "qType": "ox",
            "source": "23학번 · 86",
            "ref": "13장 · PDF 41–52쪽",
            "pdfRefPage": 41,
            "pdfRefPages": [
              41,
              42,
              43,
              44,
              45,
              46,
              47,
              48,
              49,
              50,
              51,
              52
            ],
            "stem": "P₄ + 6Cl₂ ⇌ 4PCl₃ 에 따라 액체 삼염화인을 합성하면 평형위치는 오른쪽으로 이동한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "반응식만으로 액체 PCl₃를 합성하는 행위가 평형 이동을 일으킨다고 단정할 수 없다. 생성물 제거·응축이나 온도·압력 변화 등 어떤 조작을 했는지 주어지지 않았으므로 X로 판단한다."
          },
          {
            "id": "chem-final-23-87",
            "qType": "ox",
            "source": "23학번 · 87",
            "ref": "13장 · PDF 42–45쪽",
            "pdfRefPage": 42,
            "pdfRefPages": [
              42,
              43,
              44,
              45
            ],
            "stem": "PCl₃(g) + Cl₂(g) ⇌ PCl₅ 의 반응에 따라 오염화 인을 합성하게 되면 Cl₂(g)의 첨가 및 삭제 여부에 따라 평형위치가 변경된다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "반응물 Cl₂를 더하면 Cl₂를 소비하는 오른쪽으로, 제거하면 Cl₂를 만드는 왼쪽으로 이동한다. 생성물 PCl₅의 합성과 평형 이동은 농도 변화에 따라 달라진다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "chem-14-def-ph",
        "chapter": "14장 산과 염기",
        "title": "산-염기 정의·Ka/Kw·pH 척도·강산/약산 pH 계산",
        "pdfPages": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27
        ],
        "tags": [
          "14장",
          "p.3-27",
          "Arrhenius",
          "Bronsted",
          "짝산",
          "짝염기"
        ],
        "summary": "<p>Arrhenius 및 <strong>Brønsted-Lowry(양성자 주개/받개)</strong> 산-염기, <strong>짝산-짝염기 쌍</strong>, 물의 자동이온화(<strong>Kw = 1.0×10⁻¹⁴ at 25°C</strong>), <strong>pH 척도</strong>, 그리고 5% 규칙을 이용한 <strong>약산 수용액의 pH</strong> 계산을 다룹니다.</p>",
        "keyPoints": [
          "산이 강할수록 그 짝염기는 약함 (Ka × Kb = Kw)",
          "pH + pOH = 14 (25°C); Kw는 흡열 과정이므로 온도↑ 시 Kw↑ → 중성 pH < 7",
          "약산 [H⁺] ≈ √(Ka·C₀) 근사는 해리율 5% 이하일 때 유효"
        ],
        "glossary": {
          "짝산-짝염기 쌍": "양성자(H⁺) 하나의 차이로 서로 전환되는 산과 염기 쌍(예: CH₃COOH / CH₃COO⁻)."
        },
        "pdfExcerpts": {
          "15": "14.2 물의 자동이온화: 25°C에서 Kw = [H⁺][OH⁻] = 1.0×10⁻¹⁴.",
          "22": "14.5 약산 용액의 pH: 주된 H⁺ 공급원 식별 및 5% 근사법."
        },
        "pastQuestions": [
          {
            "id": "chem-final-25-50",
            "qType": "ox",
            "source": "25학번 · 50",
            "ref": "14장 · PDF 22–25쪽",
            "pdfRefPage": 22,
            "pdfRefPages": [
              22,
              23,
              24,
              25
            ],
            "stem": "HF는 강산이며 수용액에서 완전히 이온화한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "HF는 강산이 아니라 약산이며 물에서 일부만 이온화한다. H–F 결합이 강한 것과 산으로서 완전 이온화하는 것은 다르다."
          },
          {
            "id": "chem-final-25-51",
            "qType": "ox",
            "source": "25학번 · 51",
            "ref": "14장 · PDF 17–20쪽",
            "pdfRefPage": 17,
            "pdfRefPages": [
              17,
              18,
              19,
              20
            ],
            "stem": "pH가 증가하면 H⁺ 농도는 지수적으로 감소한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "pH=−log[H⁺]이므로 [H⁺]=10의 −pH승이다. pH가 1 높아질 때 수소 이온 농도는 1/10로 감소한다."
          },
          {
            "id": "chem-final-25-59",
            "qType": "ox",
            "source": "25학번 · 59",
            "ref": "14장 · PDF 3쪽",
            "pdfRefPage": 3,
            "pdfRefPages": [
              3
            ],
            "stem": "Brønsted 산은 반드시 수소 원자를 포함한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "Brønsted 산은 H⁺를 내놓는 종이다. 직접 전달할 양성자를 가진다는 의미에서 수소 원자를 포함해야 한다. Lewis 산까지 같은 요건을 요구하지 않는다."
          },
          {
            "id": "chem-final-25-60",
            "qType": "ox",
            "source": "25학번 · 60",
            "ref": "14장 · PDF 3쪽",
            "pdfRefPage": 3,
            "pdfRefPages": [
              3
            ],
            "stem": "Arrhenius 산은 수소 이온을 포함해야 한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "Arrhenius 산은 물에 녹아 수소 이온(H⁺) 농도를 증가시키는 물질이며, 분자 자체가 유리 H⁺ 이온을 포함해야 하는 것은 아니므로 X로 판단한다."
          },
          {
            "id": "chem-final-24-89",
            "qType": "ox",
            "source": "24학번 · 89",
            "ref": "14장 · PDF 3쪽",
            "pdfRefPage": 3,
            "pdfRefPages": [
              3
            ],
            "stem": "Brønsted Lowry 산염기에서 산은 양성자 주개이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "Brønsted–Lowry 정의에서 산은 양성자(H⁺) 주개, 염기는 양성자 받개이다."
          },
          {
            "id": "chem-final-23-88",
            "qType": "ox",
            "source": "23학번 · 88",
            "ref": "14장 · PDF 9,12쪽",
            "pdfRefPage": 9,
            "pdfRefPages": [
              9,
              12
            ],
            "stem": "H₂O, F⁻, NO₂⁻, Cl⁻, CN⁻ 중 염기도가 가장 낮은 것은 Cl⁻이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "Cl⁻는 강산 HCl의 짝염기여서 수용액에서 염기성이 매우 약하다. F⁻·NO₂⁻·CN⁻는 약산의 짝염기이다. 제시된 종 중 Cl⁻의 염기도가 가장 낮다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "chem-14-base-salt-lewis",
        "chapter": "14장 산과 염기",
        "title": "염기·다양성자산·염의 산-염기 성질·Lewis 산-염기",
        "pdfPages": [
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          46,
          47,
          48
        ],
        "tags": [
          "14장",
          "p.28-48",
          "염기",
          "Kb",
          "다양성자산",
          "염"
        ],
        "summary": "<p>강염기와 약염기(<strong>Kb</strong>), <strong>다양성자산</strong>(K_a1 ≫ K_a2), 이온의 가수분해에 의한 <strong>염 수용액의 pH(산성·중성·염기성)</strong>, 그리고 전자쌍 받개/주개 기반의 <strong>Lewis 산-염기 모형</strong>을 다룹니다.</p>",
        "keyPoints": [
          "강산+강염기 염(NaCl) → 중성; 약산의 짝염기 염(NaF) → 염기성; 약염기의 짝산 염(NH₄Cl) → 산성",
          "높은 전하 금속 양이온(Al³⁺, Fe³⁺) 수화 이온은 산성 용액 형성",
          "Lewis 산 = 전자쌍 받개(BF₃, H⁺, 금속이온), Lewis 염기 = 전자쌍 주개(NH₃, H₂O)"
        ],
        "glossary": {
          "Lewis 산 / 염기": "비공유 전자쌍을 받아들이는 화학종(Lewis 산)과 전자쌍을 제공하는 화학종(Lewis 염기)."
        },
        "pdfExcerpts": {
          "41": "14.8 염의 산-염기 성질: 양이온·음이온의 Ka와 Kb를 비교하여 pH 예측.",
          "45": "14.11 Lewis 산-염기 모형: 가장 포괄적인 전자쌍 주개/받개 정의."
        },
        "pastQuestions": [
          {
            "id": "chem-final-25-49",
            "qType": "ox",
            "source": "25학번 · 49",
            "ref": "14장 · PDF 41–43쪽",
            "pdfRefPage": 41,
            "pdfRefPages": [
              41,
              42,
              43
            ],
            "stem": "양이온이 약염기의 짝산이고 음이온의 산·염기성이 무시되면 염의 수용액은 산성이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "약염기의 짝산인 양이온은 물에 H⁺를 내놓을 수 있고, 강산의 짝염기처럼 산·염기성이 무시되는 음이온은 이를 상쇄하지 않는다. NH₄Cl 수용액이 대표적인 산성 염 용액이다.\n\n[복원 메모]\n원본의 중성 음이온을 산·염기성 무시라는 뜻으로 풀어 씀."
          },
          {
            "id": "chem-final-25-52",
            "qType": "ox",
            "source": "25학번 · 52",
            "ref": "14장 · PDF 34–37쪽",
            "pdfRefPage": 34,
            "pdfRefPages": [
              34,
              35,
              36,
              37
            ],
            "stem": "인산 H₃PO₄의 두 번째 이온화 상수는 첫 번째 이온화 상수보다 항상 크다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "인산의 연속 이온화에서는 Kₐ₁>Kₐ₂>Kₐ₃이다. 양성자를 잃어 음전하가 커질수록 다음 양성자를 내놓기 어려워진다. 전하가 누락된 원문 H₂PO₄를 그대로 산의 분자식으로 쓰지 않고, 강의의 인산 H₃PO₄ 연속 이온화 비교로 학습용 보완했다.\n\n[복원 메모]\n전하가 빠진 원본 H₂PO₄를 강의 인산 H₃PO₄ 연속 이온화 비교로 학습용 보완."
          },
          {
            "id": "chem-final-25-53",
            "qType": "ox",
            "source": "25학번 · 53",
            "ref": "14장 · PDF 28쪽",
            "pdfRefPage": 28,
            "pdfRefPages": [
              28
            ],
            "stem": "NaOH 수용액은 전해질이며 녹은 NaOH는 완전히 해리한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "NaOH는 강염기·강전해질로서 물에 녹은 부분은 Na⁺와 OH⁻로 거의 완전히 해리한다."
          },
          {
            "id": "chem-final-25-54",
            "qType": "ox",
            "source": "25학번 · 54",
            "ref": "14장 · PDF 38쪽",
            "pdfRefPage": 38,
            "pdfRefPages": [
              38
            ],
            "stem": "25 °C에서 순수한 물로 만든 NaCl 수용액은 pH 7을 벗어날 수 있다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "25 °C에서 순수한 물로 만든 NaCl 수용액은 Na⁺와 Cl⁻의 가수분해가 무시되어 중성이고 pH≈7이다. 온도가 달라지면 중성 pH도 바뀔 수 있으므로 원문에 강의의 25 °C 조건을 보완해 판단했다.\n\n[복원 메모]\n중성 pH=7 비교의 25°C·순수한 물 조건 보완."
          },
          {
            "id": "chem-final-25-55",
            "qType": "ox",
            "source": "25학번 · 55",
            "ref": "14장 · PDF 41–43쪽",
            "pdfRefPage": 41,
            "pdfRefPages": [
              41,
              42,
              43
            ],
            "stem": "NH₄Cl은 물에 녹아 산성 용액을 만든다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "NH₄Cl이 녹으면 NH₄⁺가 NH₄⁺+H₂O⇌NH₃+H₃O⁺ 반응을 하여 산성 용액을 만든다. Cl⁻의 염기성은 무시할 만큼 작다."
          },
          {
            "id": "chem-final-25-56",
            "qType": "ox",
            "source": "25학번 · 56",
            "ref": "14장 · PDF 44쪽",
            "pdfRefPage": 44,
            "pdfRefPages": [
              44
            ],
            "stem": "염의 수용액이 중성인지 알려면 반드시 그 용액의 Kₐ 또는 Kᵦ를 알아야 한다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "강산과 강염기에서 온 NaCl 같은 염은 이온의 유래만으로도 중성임을 판단할 수 있다. 약산·약염기에서 온 염은 Kₐ와 Kᵦ 비교가 필요할 수 있지만 모든 염에서 그 수치를 반드시 알아야 하는 것은 아니다."
          },
          {
            "id": "chem-final-25-58",
            "qType": "ox",
            "source": "25학번 · 58",
            "ref": "14장 · PDF 45–48쪽",
            "pdfRefPage": 45,
            "pdfRefPages": [
              45,
              46,
              47,
              48
            ],
            "stem": "Lewis 산은 항상 수소 이온을 포함하고 있다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "Lewis 산의 조건은 전자쌍을 받는 것이다. BF₃처럼 H를 포함하지 않는 산도 있으므로 수소 이온을 반드시 포함해야 하는 것은 아니다."
          },
          {
            "id": "chem-final-25-70",
            "qType": "ox",
            "source": "25학번 · 70",
            "ref": "14장 · PDF 28쪽",
            "pdfRefPage": 28,
            "pdfRefPages": [
              28
            ],
            "stem": "수산화 바륨은 강염기이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "Ba(OH)₂는 강염기이다. 물에 녹은 부분이 Ba²⁺와 2OH⁻로 해리한다. 용해도와 해리 정도는 구별한다."
          },
          {
            "id": "chem-final-24-90",
            "qType": "ox",
            "source": "24학번 · 90",
            "ref": "14장 · PDF 45–48쪽",
            "pdfRefPage": 45,
            "pdfRefPages": [
              45,
              46,
              47,
              48
            ],
            "stem": "Lewis 산은 전자쌍 받개이다.",
            "choices": [
              "O (옳다)",
              "X (틀리다)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "Lewis 산은 전자쌍 받개이고 Lewis 염기는 전자쌍 주개이다. H⁺ 전달이 없는 반응에도 적용할 수 있다."
          }
        ],
        "aiQuestions": []
      }
    ]
  },
  {
    "id": "subj-signal",
    "name": "세포신호전달학개론",
    "engName": "Cell Signaling · 기말고사 (09~14주차)",
    "icon": "📡",
    "color": "#06b6d4",
    "pdfName": "09주차~14주차 강의자료 PDF (총 173p)",
    "totalPages": 173,
    "concepts": [
      {
        "id": "sig-09-gf-igf",
        "chapter": "09주차 · 성장인자",
        "title": "성장인자 정의·전달방식·역사적 발견(NGF/EGF/PDGF/IGF)",
        "pdfPages": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20
        ],
        "tags": [
          "09주차",
          "p.1-20",
          "성장인자",
          "EGF",
          "IGF",
          "PDGF"
        ],
        "summary": "<p><strong>성장인자(Growth Factor)</strong>의 정의(세포외에서 막수용체에 결합해 전사/비전사 반응을 유도하는 작은 단백질), 전달 방식(<strong>Endocrine, Paracrine, Autocrine, Juxtacrine</strong>), 그리고 역사적 발견(Levi-Montalcini의 종양 이식 <strong>NGF</strong>, Stanley Cohen의 생쥐 턱밑샘 추출물 <strong>EGF</strong>, 혈소판 <strong>PDGF</strong>, 간 생성 <strong>IGF-1</strong>)을 다룹니다.</p>",
        "keyPoints": [
          "대부분의 성장인자는 인접 세포에 빠르게 작용하는 주변분비(Paracrine) 또는 자가분비(Autocrine) 방식 사용",
          "GH(성장호르몬)는 간을 자극해 IGF-1을 분비하게 하여 연골·골격·근육 성장을 간접 촉진",
          "태아 발달: 성장 촉진(IGF-I/II, EGF, PDGF, FGF, NGF) vs 억제(TGF-β, MIS: 뮬러관 퇴화)"
        ],
        "glossary": {
          "Paracrine vs Autocrine": "Paracrine은 인접 세포에, Autocrine은 분비한 자기 자신의 수용체에 결합하는 신호 전달 방식이다."
        },
        "pdfExcerpts": {
          "9": "성장인자 정의: 세포외에서 막관통 수용체에 결합해 세포 증식·상처치유·분화를 유도하는 단백질.",
          "12": "EGF 발견: Stanley Cohen이 턱밑샘 추출물로 상피세포 두께 증가 확인.",
          "20": "전달 방식 4가지: Endocrine(느림/혈액), Paracrine(빠름/국소), Autocrine(가장 빠름/암세포), 막부착형."
        },
        "pastQuestions": [
          {
            "id": "signal-final-25-11",
            "qType": "mcq",
            "source": "25학번 · 11",
            "ref": "9주차(10장) PDF p.8–9,18",
            "pdfRefPage": 8,
            "pdfRefPages": [
              8,
              9,
              18
            ],
            "stem": "이 강의에서 정의하는 성장인자의 일반적인 작용 방식은?",
            "choices": [
              "세포 내에서 생성 핵 내 수용체 직접결합",
              "세포 외부에서 도달해 막 수용체 결합",
              "Endocrine",
              "Tyr/Src 수용체 결합 스테로이드",
              "이온 통로를 열어 나트륨 이온의 출입 유도"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 9쪽은 성장인자를 세포 밖에서 도달하여 막수용체에 의존하는 신호전달로 세포 내 변화를 유발하는 단백질로 정의한다. 핵 수용체에 직접 결합하는 스테로이드 호르몬 방식이나 이온통로만 여는 방식과 구분한다."
          },
          {
            "id": "signal-final-25-28",
            "qType": "mcq",
            "source": "25학번 · 28",
            "ref": "9주차(10장) PDF p.20 · 12주차(첫번째 수업) PDF p.8–9",
            "pdfRefPage": 8,
            "pdfRefPages": [
              8,
              9,
              20
            ],
            "stem": "호르몬이 혈액을 통해 먼 조직에 신호를 전달하는 방식은?",
            "choices": [
              "paracrine",
              "autocrine",
              "endocrine",
              "Synaptic",
              "Gap junction"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] Endocrine은 혈류를 통해 먼 표적 세포에 작용하는 신호 방식이다. Autocrine은 자기 자신, paracrine은 인접 세포에 작용한다. Gap junction을 통한 직접 전달과도 구분한다."
          },
          {
            "id": "signal-final-24-1",
            "qType": "mcq",
            "source": "24학번 · 1",
            "ref": "9주차(10장) PDF p.10",
            "pdfRefPage": 10,
            "pdfRefPages": [
              10
            ],
            "stem": "다음 조류 혈액표본과 관련된 성장인자 발견 설명으로 강의에 제시된 것은?",
            "choices": [
              "적혈구가 증식하여 적혈구성장인자가 발견된다",
              "백혈구가 증식하여 성장인자가 발견된다",
              "골수 색 착색인자가 발견된다",
              "림프구 분화 억제인자",
              "골수 성장 억제인자"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 10장 10쪽은 혈액세포의 비정상적 증식과 성장인자 발견의 예를 제시한다. 이 기출의 복원 선지에서는 백혈구 증식과 성장인자 발견을 연결한 설명이 대응한다. 적혈구·골수 착색·림프구 분화 억제 등으로 바꾸지 않는다."
          },
          {
            "id": "signal-final-24-4",
            "qType": "mcq",
            "source": "24학번 · 4",
            "ref": "9주차(10장) PDF p.11–15",
            "pdfRefPage": 11,
            "pdfRefPages": [
              11,
              12,
              13,
              14,
              15
            ],
            "stem": "쥐의 종양 단편을 닭의 배아에 이식한 실험에서 확인한 성장인자는?",
            "choices": [
              "EGF",
              "FGF",
              "NGF",
              "IGF",
              "PDGF"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 11쪽은 쥐 종양 단편과 닭 배아를 이용해 신경 성장을 관찰한 NGF 발견 실험을 제시한다. EGF의 턱밑샘 추출물 실험, PDGF의 혈장 주변 배양 실험과 구분한다."
          },
          {
            "id": "signal-final-24-6",
            "qType": "mcq",
            "source": "24학번 · 6",
            "ref": "9주차(10장) PDF p.11–15",
            "pdfRefPage": 11,
            "pdfRefPages": [
              11,
              12,
              13,
              14,
              15
            ],
            "stem": "쥐의 턱밑샘 추출물을 이용한 실험에서 확인한 성장인자는?",
            "choices": [
              "EGF",
              "FGF",
              "NGF",
              "IGF",
              "PDGF"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 10장 12쪽은 턱밑샘 추출물을 사용한 EGF 발견 실험과 표피 성장의 변화를 제시한다. EGF는 epidermal growth factor(표피성장인자)다. 쥐 종양 단편을 닭 배아에 이식한 NGF 실험, 혈장 주변 결합조직 배양에서 관찰한 PDGF와 구분한다."
          },
          {
            "id": "signal-final-24-15",
            "qType": "mcq",
            "source": "24학번 · 15",
            "ref": "9주차(10장) PDF p.14–15",
            "pdfRefPage": 14,
            "pdfRefPages": [
              14,
              15
            ],
            "stem": "50일간 배양된 결합조직이 혈장 주변에서 지속적으로 성장하도록 한 성장인자는?",
            "choices": [
              "EGF",
              "FGF",
              "NGF",
              "IGF",
              "PDGF"
            ],
            "answerIndex": 4,
            "answerIndices": null,
            "rationale": "[강의 기준] 14–15쪽은 혈장 주변에서 배양한 결합조직의 성장과 PDGF를 연결한다. PDGF는 platelet-derived growth factor(혈소판유래성장인자)이며 혈소판에서 유래하여 결합조직 세포의 증식과 상처 치유에 관여한다. EGF는 표피, NGF는 신경 분화 관련 실험과 구분한다."
          },
          {
            "id": "signal-final-23-4",
            "qType": "mcq",
            "source": "23학번 · 4",
            "ref": "9주차(10장) PDF p.9,33",
            "pdfRefPage": 9,
            "pdfRefPages": [
              9,
              33
            ],
            "stem": "성장인자에 의해 발생할 수 있는 현상을 모두 포함하는 조합은?\n\n가. 세포 증식(cell proliferation)\n나. 세포 이동(cell migration)\n다. 세포 분화(cell differentiation)\n라. 상처 치유(wound healing)",
            "choices": [
              "가",
              "가, 나",
              "가, 나, 다",
              "가, 나, 라",
              "가, 나, 다, 라"
            ],
            "answerIndex": 4,
            "answerIndices": null,
            "rationale": "[강의 기준] 성장인자는 세포 증식, 이동, 분화, 생존과 상처 치유에 관여한다. 9쪽은 증식·상처 치유·분화를, 33쪽은 분화·생존·이동·증식에 대한 양성·음성 조절을 정리한다. 따라서 제시된 네 현상은 모두 해당한다. 모든 성장인자가 항상 모든 세포에서 증식을 촉진한다는 뜻은 아니다."
          },
          {
            "id": "signal-final-22-1",
            "qType": "mcq",
            "source": "22학번 · 1",
            "ref": "부분 근거 · 9주차(10장) PDF p.3–7",
            "pdfRefPage": 3,
            "pdfRefPages": [
              3,
              4,
              5,
              6,
              7
            ],
            "stem": "다음 중 성장인자의 분비가 가장 활발하게 일어나는 곳은?",
            "choices": [
              "골수",
              "부신",
              "시상하부",
              "뇌하수체 전엽",
              "뇌하수체 후엽"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 10장 3–7쪽에는 시상하부–뇌하수체 전엽–성장호르몬–간의 IGF 생성 경로와 혈소판 유래 성장인자가 제시된다. 그러나 모든 성장인자를 통틀어 분비가 가장 활발한 장소가 골수라고 확정하는 설명은 없다. 성장호르몬의 분비 장소와 성장인자의 생성 장소도 같지 않다. 원본 답 ① 골수는 근거 미확인이므로 정답으로 확정하지 않는다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "sig-09-prolif-diff",
        "chapter": "09주차 · 성장인자",
        "title": "세포증식(IGF/TGF-β·세포주기 Rb-E2F)과 분화(NGF·BMP2)",
        "pdfPages": [
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33
        ],
        "tags": [
          "09주차",
          "p.21-33",
          "TGF",
          "IGF-I",
          "IGF-II",
          "결핍"
        ],
        "summary": "<p><strong>IGF-I/II 결핍 시 전반적 성장 저하</strong>와 <strong>TGF-β의 정상세포 증식 억제</strong>, 성장인자의 <strong>Cyclin-CDK → Rb 인산화 → E2F 해리</strong> 세포주기 촉진 및 표적항암제(mAb/TKI), 그리고 <strong>NGF의 신경분화</strong>와 <strong>BMP-2(TGF-β superfamily)의 조골세포(osteoblast) 분화 촉진 / 지방세포 분화 억제</strong>를 다룹니다.</p>",
        "keyPoints": [
          "IGF-I/II 녹아웃 시 근육·뼈·장기의 전반적 성장 결핍(출생 체중 감소)",
          "TGF-β는 정상 상피세포 등에서 증식을 억제하지만 암세포에서는 전이·증식을 촉진하기도 함",
          "BMP-2는 MSC를 조골세포(osteoblast)로 분화 촉진(골다공증 치료 응용)하고, 반대로 지방세포 분화는 억제(Oil red O 염색 감소)"
        ],
        "glossary": {
          "BMP-2": "TGF-β superfamily에 속하는 골형성 단백질로 조골세포 분화를 촉진하고 지방세포 분화를 억제한다."
        },
        "pdfExcerpts": {
          "23": "IGF-I/II 결핍: 전신적인 근육·골격·장기 성장 저하(Relative birth weight 감소).",
          "25": "세포주기: GF 자극 → Cyclin D/E-CDK4/6/2 활성화 → Rb 인산화 → E2F 유리 → S기 진입.",
          "30": "BMP-2(TGF-β superfamily): 조골세포 분화 촉진(OVX 골다공증 마우스 골밀도 회복)."
        },
        "pastQuestions": [
          {
            "id": "signal-final-25-12",
            "qType": "mcq",
            "source": "25학번 · 12",
            "ref": "9주차(10장) PDF p.22–23",
            "pdfRefPage": 22,
            "pdfRefPages": [
              22,
              23
            ],
            "stem": "IGF-I 또는 IGF-II 결핍 시 강의에서 제시한 특징적인 현상은?",
            "choices": [
              "지방세포의 과성장",
              "몸무게는 그대로 유지되나 뼈조직만 결핍",
              "뼈, 근육, 장기 전반에 걸쳐 성장 결핍",
              "세포 분열 증가로 인한 비정상적 성장",
              "신경세포 분화 촉진 및 증가"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 23쪽은 IGF-I·IGF-II 결핍 시 muscle, bone, organs의 general growth deficiency를 제시한다. 뼈만 선택적으로 결핍되거나 신경 분화만 증가하는 현상과 구분한다."
          },
          {
            "id": "signal-final-25-13",
            "qType": "mcq",
            "source": "25학번 · 13",
            "ref": "9주차(10장) PDF p.30–32",
            "pdfRefPage": 30,
            "pdfRefPages": [
              30,
              31,
              32
            ],
            "stem": "TGF-β superfamily에 속하며 세포 유형에 따라 다른 분화 효과를 보이는 성장인자는?",
            "choices": [
              "BMP2",
              "EGF",
              "IL-2",
              "NGF",
              "WNT"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 30쪽은 BMP2가 TGF-β superfamily에 속하며 조골세포 분화를 촉진한다고 명시한다. 32쪽은 BMP가 지방세포 분화를 억제하는 예를 보여 준다. EGF·IL-2·NGF·Wnt로 바꾸지 않는다."
          },
          {
            "id": "signal-final-25-14",
            "qType": "mcq",
            "source": "25학번 · 14",
            "ref": "9주차(10장) PDF p.29",
            "pdfRefPage": 29,
            "pdfRefPages": [
              29
            ],
            "stem": "NGF가 가장 직접적으로 유도하는 현상은?",
            "choices": [
              "지방세포 성숙",
              "조골세포 분화 억제",
              "신경세포 분화 및 신경돌기 생성",
              "세포주기 G₂–M 촉진",
              "TGF-β 억제"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 29쪽은 NGF 처리 후 신경세포 분화와 neurite 형성의 증가를 보여 준다. 지방세포 성숙이나 조골세포 분화 억제를 이 도식의 직접 결과로 제시하지 않는다."
          },
          {
            "id": "signal-final-24-8",
            "qType": "mcq",
            "source": "24학번 · 8",
            "ref": "9주차(10장) PDF p.25–26",
            "pdfRefPage": 25,
            "pdfRefPages": [
              25,
              26
            ],
            "stem": "성장인자 신호에 의해 촉진되는 현상을 고르시오.\n\n가. Rb의 인산화\n나. E2F의 인산화\n다. E2F/Rb 복합체 형성\n라. Cyclin/CDK 복합체 형성",
            "choices": [
              "가, 나",
              "가, 다",
              "가, 라",
              "나, 다",
              "나, 라"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 성장인자 신호는 cyclin/CDK 복합체의 형성과 활성을 통해 Rb를 인산화한다. 인산화된 Rb는 E2F에 대한 억제를 해제하여 세포주기 진행을 돕는다. 따라서 Rb 인산화와 cyclin/CDK 복합체 형성이 해당하며, E2F/Rb 억제 복합체 형성은 반대 방향이다."
          },
          {
            "id": "signal-final-23-1",
            "qType": "mcq",
            "source": "23학번 · 1",
            "ref": "9주차(10장) PDF p.30–32",
            "pdfRefPage": 30,
            "pdfRefPages": [
              30,
              31,
              32
            ],
            "stem": "지방세포 분화를 억제하여 Oil red O 염색이 옅어지게 하는 성장인자는?",
            "choices": [
              "BMP",
              "EGF",
              "FGF",
              "NGF",
              "PDGF"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 32쪽은 BMP 처리에 의한 adipocyte differentiation 억제와 Oil red O 염색 결과를 제시한다. Oil red O는 지방 축적을 관찰하는 염색이므로 분화·지방 축적이 억제되면 염색이 옅어진다. BMP2의 조골세포 분화 촉진과는 세포 유형이 다르다.\n\n[복원 메모] 원본의 ②–⑤는 미복원이다. 강의에 있는 다른 성장인자를 학습용 오답 보기로 구성했으며, 원래 시험 보기와 동일하다고 주장하지 않는다."
          },
          {
            "id": "signal-final-22-4",
            "qType": "mcq",
            "source": "22학번 · 4",
            "ref": "부분 근거 · 9주차(10장) PDF p.7,24,33",
            "pdfRefPage": 7,
            "pdfRefPages": [
              7,
              24,
              33
            ],
            "stem": "TGF-β(transforming growth factor beta)의 기능에 대한 설명으로 옳은 것은?",
            "choices": [
              "결합 조직 세포의 증식을 자극한다",
              "형질 전환을 유도하는 기능이 우선이다",
              "배아 발생기 동안 가장 중요한 성장인자이다",
              "대부분 세포의 증식을 촉진시키는 효과가 있다",
              "부상 부위로 세포를 유인하는 주화성 (chemotasix)이 우수하다"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 강의는 TGF-β의 작용이 세포와 상황에 따라 달라질 수 있음을 설명하며, 24쪽에는 세포 증식 억제가 제시되어 있다. 7쪽의 상처 치유·기질 관련 작용만으로 제시된 다섯 설명 중 하나를 단정하기 어렵다. 원본 답 ①을 유지한 채 자동 채점하지 않고 검토 보류한다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "sig-10-rtk-sh2",
        "chapter": "10주차 · RTK·Ras-MAPK·PI3K-Akt",
        "title": "RTK 구조·이량체화·교차자가인산화·SH2/SH3·Adaptor/Effector",
        "pdfPages": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20
        ],
        "tags": [
          "10주차",
          "p.1-20",
          "RTK",
          "Tony Hunter",
          "phosphotyrosine",
          "erbB"
        ],
        "summary": "<p><strong>RTK</strong>의 4대 공통 구조와 10개 아군(erbB 암유전자 등), Tony Hunter의 <strong>인산티로신</strong> 규명, 리간드 유도 <strong>이량체화 및 교차자가인산화</strong>, <strong>SH2(pTyr 인식: PI3K -x-pY-x-x-M, Grb2 -x-pY-x-N-x-, Src -x-pY-x-x-I-)</strong> 및 <strong>SH3(PxxP 인식)</strong> 도메인, Adaptor(Grb2)와 Effector(GAP, PLCγ)를 다룹니다.</p>",
        "keyPoints": [
          "체내 인산화 비율: Ser(~90%) > Thr > Tyr(가장 적지만 수용체 신호의 핵심 스위치)",
          "SH2는 인산티로신 + 인접 아미노산까지 인식해 신호 혼선 방지; SH3는 Proline-rich(PxxP) 서열과 결합",
          "PLCγ는 PIP₂를 IP₃(ER에서 Ca²⁺ 방출)와 DAG(PKC 활성화)로 절단; GAP은 Ras의 GTP 가수분해 촉진(OFF)"
        ],
        "glossary": {
          "SH2 / SH3 도메인": "SH2는 인산화된 티로신(pTyr)에, SH3는 프롤린이 풍부한(PxxP) 서열에 결합하는 단백질 상호작용 도메인."
        },
        "pdfExcerpts": {
          "12": "Receptor auto-transphosphorylation: 서로 마주보는 티로신 잔기를 인산화해 하위 단백질의 docking site 제공.",
          "16": "SH2 특이성: PI3K(-x-pY-x-x-M), Grb2(-x-pY-x-N-x-), Src(-x-pY-x-x-I-).",
          "20": "PLCγ: RTK에 의해 활성화되어 PI(4,5)P₂를 DAG와 IP₃로 분해."
        },
        "pastQuestions": [
          {
            "id": "signal-final-25-2",
            "qType": "mcq",
            "source": "25학번 · 2",
            "ref": "10주차(11장) PDF p.15,19,22,28",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15,
              19,
              22,
              28
            ],
            "stem": "활성화된 RTK에 Sos를 연결하여 Ras 활성화를 돕는 어댑터 단백질은?",
            "choices": [
              "Raf",
              "Grb2",
              "ERK",
              "PI3K",
              "MNK1"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] Grb2의 SH2는 수용체의 pTyr 서열에, SH3는 Sos의 proline-rich 영역에 결합한다. Sos는 GEF로서 Ras의 GDP–GTP 교환을 촉진한다. Raf·ERK는 하위 키나아제이며 Grb2와 역할이 다르다."
          },
          {
            "id": "signal-final-25-3",
            "qType": "mcq",
            "source": "25학번 · 3",
            "ref": "10주차(11장) PDF p.11",
            "pdfRefPage": 11,
            "pdfRefPages": [
              11
            ],
            "stem": "RTK 리간드의 일반적인 특성으로 옳은 것은?",
            "choices": [
              "대부분 큰 막관통 단백질이다",
              "주로 내분비(hormonal)방식으로 장거리에서 작용한다",
              "자가분비(autocrine)및 측분비(paracrine)방식으로 작용한다",
              "항상 2가이온이 결합해야 활성화된다",
              "세포질 내에서 합성 즉시 핵으로 이동한다"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 11쪽은 RTK 리간드를 보통 작은 수용성 단백질로 설명하고 autocrine·paracrine 방식의 작용을 제시한다. 큰 막관통 단백질 또는 항상 2가 이온이 필요하다는 설명은 이 강의의 일반적 정의가 아니다."
          },
          {
            "id": "signal-final-25-9",
            "qType": "mcq",
            "source": "25학번 · 9",
            "ref": "10주차(11장) PDF p.12–16",
            "pdfRefPage": 12,
            "pdfRefPages": [
              12,
              13,
              14,
              15,
              16
            ],
            "stem": "RTK 활성화에서 상호인산화(trans-autophosphorylation)가 수행하는 직접적 기능은?",
            "choices": [
              "리간드 간 친화성 증가",
              "리간드 결합 없이도 dimerization을 유도",
              "SH2 도킹 부위 생성",
              "PLCγ의 활성을 억제",
              "리간드수용체 없이도 구조적 안정성 제공"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 서로 마주 보는 수용체 키나아제 도메인이 Tyr를 인산화하여 효소 활성과 하위 단백질의 결합을 조절한다. 생성된 pTyr는 SH2 단백질 등의 docking site가 된다. PLCγ를 일괄 억제하거나 리간드 없이 모든 이량체화를 일으키는 기능으로 설명하지 않는다."
          },
          {
            "id": "signal-final-25-10",
            "qType": "mcq",
            "source": "25학번 · 10",
            "ref": "10주차(11장) PDF p.9–10",
            "pdfRefPage": 9,
            "pdfRefPages": [
              9,
              10
            ],
            "stem": "RTK의 일반적인 구조에 대한 설명으로 옳지 않은 것은?",
            "choices": [
              "세포질 외 리간드 도메인",
              "단일 막관통 영역",
              "세포질 내 serine/threonine kinase 영역",
              "세포질 내 tyrosine kinase 영역",
              "Regulatory 도메인"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] RTK의 공통 요소는 세포외 리간드결합 영역, 단일 막관통 영역, 세포질 tyrosine kinase 영역과 조절 영역이다. 세포질의 촉매 영역을 serine/threonine kinase로 설명한 보기가 틀리다."
          },
          {
            "id": "signal-final-24-7",
            "qType": "mcq",
            "source": "24학번 · 7",
            "ref": "10주차(11장) PDF p.15,18–20",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15,
              18,
              19,
              20
            ],
            "stem": "다음 도메인과 기능의 연결 중 올바른 것은?",
            "choices": [
              "PLCγ : IP₃, Ca²⁺ 신호 전달",
              "SH3 domain : phospho-tyrosine 결합",
              "PH domain : phospho-tyrosine 결합",
              "PTB domain : proline-rich region 결합",
              "SH2 domain : proline-rich region 결합"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] SH2는 pTyr를 포함한 서열, SH3는 proline-rich(PxxP) 서열을 인식한다. PH는 인지질 결합, PTB는 인산화 티로신 관련 인식에 관여한다. PLCγ는 PIP₂ 분해를 통해 IP₃·DAG·Ca²⁺ 신호를 연결한다. 원본의 ‘PLC domain’은 ‘PLCγ’로 명확히 했다.\n\n[복원 메모] 원본의 오기·모호한 문장 또는 보기 배치를 강의에 맞게 보완했다. 원래 시험 문장과 동일한 복원으로 단정하지 않는다."
          },
          {
            "id": "signal-final-24-10",
            "qType": "mcq",
            "source": "24학번 · 10",
            "ref": "부분 근거 · 10주차(11장) PDF p.11–13",
            "pdfRefPage": 11,
            "pdfRefPages": [
              11,
              12,
              13
            ],
            "stem": "리간드에 의한 RTK 활성화 과정에 대한 설명으로 틀린 것은?",
            "choices": [
              "ligand가 extracellular domain에 결합하면 ligand는 dimer를 형성한다",
              "ligand가 extracellular domain에 결합하면 수용체는 dimer를 형성한다",
              "ligand가 결합하면 Cytoplasmic domain의 입체 구조가 변한다",
              "수용체는 자신의 domain에 있는 tyrosine 잔기를 인산화시킨다",
              "ligand는 autocrine이나 paracrine을 통해서 수용체에 주로 작용한다"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 강의는 리간드에 의해 수용체가 이량체화되고, 서로 마주 보는 키나아제 도메인이 상대 사슬의 Tyr를 인산화하는 과정을 보여 준다. 원본 답 ④는 ‘자기 사슬’의 인산화라는 의도로 보인다. 그러나 ①의 ‘결합하면 리간드가 이량체를 형성한다’도 모든 RTK 리간드에 공통인 설명이 아니므로 원문 그대로는 유일 정답이 명확하지 않다. 보기 자체를 임의로 바꾸지 않고 검토 보류한다."
          },
          {
            "id": "signal-final-24-12",
            "qType": "mcq",
            "source": "24학번 · 12",
            "ref": "10주차(11장) PDF p.16",
            "pdfRefPage": 16,
            "pdfRefPages": [
              16
            ],
            "stem": "Grb2의 SH2 도메인이 가장 잘 인식하는 아미노산 서열은?",
            "choices": [
              "x-pY-x-x-I",
              "x-pY-x-l-x",
              "x-pY-x-N-x",
              "x-pY-x-x-N",
              "x-pY-x-x-M"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 16쪽 표에서 Grb2는 pY–x–N 계열 서열을 인식한다. 제시된 x–pY–x–N–x가 이에 대응한다. PI3K·Src 등 다른 SH2 단백질의 선호 서열과 구분한다."
          },
          {
            "id": "signal-final-24-13",
            "qType": "mcq",
            "source": "24학번 · 13",
            "ref": "10주차(11장) PDF p.17",
            "pdfRefPage": 17,
            "pdfRefPages": [
              17
            ],
            "stem": "v-Abl이 p130을 효율적으로 인산화하도록 두 단백질을 연결하는 A는?",
            "choices": [
              "SH3 domain",
              "Adaptor protein",
              "Specificity pocket",
              "Catalytic domain",
              "Phosphotyrosine pocket"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 17쪽의 도식은 어댑터 단백질 p47ᵍᵃᵍ-Crk가 v-Abl과 p130을 연결하여 인산화가 잘 일어나도록 하는 모습을 보여 준다. 어댑터는 효소 촉매 기능보다 단백질 사이의 연결·배치에 중요하다."
          },
          {
            "id": "signal-final-23-6",
            "qType": "multi",
            "source": "23학번 · 6",
            "ref": "10주차(11장) PDF p.2,7",
            "pdfRefPage": 2,
            "pdfRefPages": [
              2,
              7
            ],
            "stem": "다음 중 단백질 키나아제에 의해 인산화되는 아미노산을 모두 고르시오.",
            "choices": [
              "Serine",
              "Alanine",
              "Leucine",
              "Threonine"
            ],
            "answerIndex": 0,
            "answerIndices": [
              0,
              3
            ],
            "rationale": "[강의 기준] 11장 도입에서는 Ser·Thr·Tyr의 인산화를 다룬다. 제시된 네 보기 중 serine과 threonine이 해당한다. Tyrosine은 이 문항의 보기에는 없다. 복원된 보기가 네 개이므로 다섯 번째 보기를 임의로 만들지 않고 복수선택형으로 제시한다.\n\n[복원 메모] 원본의 오기·모호한 문장 또는 보기 배치를 강의에 맞게 보완했다. 원래 시험 문장과 동일한 복원으로 단정하지 않는다."
          },
          {
            "id": "signal-final-23-7",
            "qType": "mcq",
            "source": "23학번 · 7",
            "ref": "10주차(11장) PDF p.9–12",
            "pdfRefPage": 9,
            "pdfRefPages": [
              9,
              10,
              11,
              12
            ],
            "stem": "RTK를 구성하는 도메인의 특징에 대한 설명으로 틀린 것은?",
            "choices": [
              "extracellular ligand-binding domina : 다른 RTK에서 가장 다양한 특징을 가진다",
              "kinase insert domain : regulatory 기능을 가지고 있다",
              "single transmembrane domain : alpha helix 구조를 가진다",
              "cytoplasmic tyrosine kinase domain : autophosphorylation을 통해 자신의 tyrosine 잔기를 가장 먼저 인산화시킨다",
              "모두 맞다"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 세포외 리간드결합 영역은 다양하고, 단일 막관통 영역은 α-helix 구조를 갖는다. 활성화된 수용체 이량체에서는 서로 마주 보는 키나아제가 상대 사슬의 Tyr를 인산화하는 trans-phosphorylation이 일어난다. 강의는 같은 사슬을 먼저 인산화한다는 설명과 구분한다."
          },
          {
            "id": "signal-final-23-9",
            "qType": "multi",
            "source": "23학번 · 9",
            "ref": "10주차(11장) PDF p.19,22 · 11주차(12장) PDF p.18",
            "pdfRefPage": 18,
            "pdfRefPages": [
              18,
              19,
              22
            ],
            "stem": "GDP가 결합한 불활성 G단백질에서 GDP–GTP 교환을 촉진하는 GEF를 모두 고르시오.",
            "choices": [
              "Grb2",
              "Sos",
              "Vav",
              "Raf"
            ],
            "answerIndex": 1,
            "answerIndices": [
              1,
              2
            ],
            "rationale": "[강의 기준] Sos는 Ras의 GDP–GTP 교환을 촉진하는 GEF다. 12장 IgE 수용체 도식에는 Vav가 GEF로 제시된다. Grb2는 어댑터이고 Raf는 하위 키나아제이므로 GEF와 다르다. 두 정답을 모두 선택해야 한다.\n\n[복원 메모] 원본의 오기·모호한 문장 또는 보기 배치를 강의에 맞게 보완했다. 원래 시험 문장과 동일한 복원으로 단정하지 않는다."
          },
          {
            "id": "signal-final-22-6",
            "qType": "mcq",
            "source": "22학번 · 6",
            "ref": "10주차(11장) PDF p.3–5",
            "pdfRefPage": 3,
            "pdfRefPages": [
              3,
              4,
              5
            ],
            "stem": "RTK(receptor tyrosine kinase)는 다음 수용체 유형 중 어디에 속하는가?",
            "choices": [
              "Ion channel receptor",
              "G-protein coupled receptor",
              "Enzyme-linked receptor",
              "Nuclear receptor",
              "Cytosolic receptor"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] RTK는 수용체의 세포질 쪽에 티로신 키나아제 활성을 갖는 효소연결 수용체다. 이온통로형 수용체, G단백질연결 수용체, 핵·세포질 내 수용체와 구분한다."
          },
          {
            "id": "signal-final-22-7",
            "qType": "mcq",
            "source": "22학번 · 7",
            "ref": "10주차(11장) PDF p.9–10",
            "pdfRefPage": 9,
            "pdfRefPages": [
              9,
              10
            ],
            "stem": "서로 다른 RTK 사이에서 가장 다양한 구조적 특징을 보이는 영역은?",
            "choices": [
              "Extracellular ligand-binding domain",
              "kinase insert domain",
              "Single transmembrane domain",
              "Cytoplasmic tyrosine kinase domain",
              "Regulatory domain"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] RTK family는 세포외 리간드결합 영역의 차이에 따라 분류된다. 단일 막관통 영역과 세포질 티로신 키나아제 영역은 공통 구조인 반면, 세포외 영역은 인식하는 리간드에 따라 다양하다."
          },
          {
            "id": "signal-final-22-8",
            "qType": "mcq",
            "source": "22학번 · 8",
            "ref": "10주차(11장) PDF p.15,18",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15,
              18
            ],
            "stem": "프롤린이 풍부한 영역(proline-rich region)에 주로 결합하는 도메인은?",
            "choices": [
              "SH2 domain",
              "SH3 domain",
              "PTB domain",
              "PH domain",
              "kinase domain"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] SH3 도메인은 프롤린이 풍부한 PxxP 서열에 결합한다. SH2는 인산화된 티로신(pTyr)을 포함한 서열을 인식한다. PTB도 인산화 티로신 관련 결합에 관여하며, PH는 인지질 결합에 관련된다. 따라서 kinase 도메인이 아니라 SH3가 정답이다.\n\n[정답 정정] 원본 답 ⑤ → 강의 기준 ②."
          },
          {
            "id": "signal-final-22-13",
            "qType": "mcq",
            "source": "22학번 · 13",
            "ref": "10주차(11장) PDF p.16",
            "pdfRefPage": 16,
            "pdfRefPages": [
              16
            ],
            "stem": "SH2 도메인이 서로 다른 인산화 티로신 주변 서열을 선택적으로 인식하도록 하는 구조는?",
            "choices": [
              "SH3 domain",
              "Adaptor protein",
              "Specificity pocket",
              "Catalytic domain",
              "Phosphotyrosine pocket"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] SH2 도메인의 phosphotyrosine pocket은 인산화 티로신을 인식하고, specificity pocket은 그 주변 아미노산 서열의 차이를 구별한다. 서로 다른 결합 특이성을 묻는 이 문항은 specificity pocket이 적절하다. 원문의 ‘서로 다른 RTK가 결합한다’는 표현을 SH2의 서열 인식으로 명확히 했다.\n\n[정답 정정] 원본 답 ② → 강의 기준 ③.\n\n[복원 메모] 원본의 오기·모호한 문장 또는 보기 배치를 강의에 맞게 보완했다. 원래 시험 문장과 동일한 복원으로 단정하지 않는다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "sig-10-ras-mapk-akt",
        "chapter": "10주차 · RTK·Ras-MAPK·PI3K-Akt",
        "title": "Ras-Raf-MEK-ERK(MAPK)·전사/번역(MNK1)·Insulin-PI3K-Akt",
        "pdfPages": [
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29
        ],
        "tags": [
          "10주차",
          "p.21-29",
          "Sos",
          "Ras",
          "Raf",
          "MEK"
        ],
        "summary": "<p><strong>Grb2-Sos(GEF) → Ras-GTP → Raf(MAPKKK) → MEK(MAPKK) → ERK(MAPK, TEY motif 이중 인산화)</strong> 연쇄 반응과, ERK의 핵 내 전사 조절(<strong>p62 TCF/Elk-1 + p67 SRF → SRE → c-fos</strong>) 및 번역 개시 조절(<strong>MNK1 → eIF-4E Ser-209 인산화</strong>), 그리고 <strong>Insulin/IGF의 IRS → PI3K → PDK1/Akt → Bad(생존)·GSK-3β(글리코겐)·mTOR</strong> 경로를 다룹니다.</p>",
        "keyPoints": [
          "MEK는 ERK의 Thr과 Tyr(TEY 모티프)을 모두 인산화하는 이중특이성 키나아제 → ERK 이량체 형성 후 핵 이동",
          "ERK의 두 가지 역할: ① 전사 조절(Elk-1/SRF → c-fos → Cyclin/CDK), ② 번역 개시 촉진(MNK1 → eIF-4E Ser-209 인산화)",
          "Akt는 Bad 인산화(세포사멸 억제), GSK-3β 억제(글리코겐 합성↑), TSC1/2 억제(mTOR 활성화 → 단백질 번역↑)"
        ],
        "glossary": {
          "MNK1 & eIF-4E": "ERK가 MNK1을 활성화하면 eIF-4E(Ser-209)가 인산화되어 mRNA 5' 헤어핀을 풀고 단백질 번역 개시를 촉진한다."
        },
        "pdfExcerpts": {
          "22": "Ras-MAPK: Sos(GEF)가 Ras-GDP를 Ras-GTP로 전환 → Raf → MEK → ERK(Tyr/Thr 인산화).",
          "24": "전사 활성화: 핵으로 들어간 ERK가 p62 TCF(Elk-1)를 인산화 → p67 SRF와 SRE에 결합해 c-fos 전사.",
          "25": "번역 활성화: ERK → MNK1 인산화 → eIF-4E(Ser-209) 인산화로 단백질 합성 개시."
        },
        "pastQuestions": [
          {
            "id": "signal-final-25-6",
            "qType": "mcq",
            "source": "25학번 · 6",
            "ref": "10주차(11장) PDF p.22–24,28",
            "pdfRefPage": 22,
            "pdfRefPages": [
              22,
              23,
              24,
              28
            ],
            "stem": "RTK 하위의 Ras–MAPK 신호전달 순서로 올바른 것은?",
            "choices": [
              "Raf-Mek-Erk-Ras",
              "Raf-Erk-Mek-Ras",
              "Ras-Mek-Raf-Erk",
              "Ras-Raf-Mek-Erk",
              "Mek-Ras-Raf-Erk"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 강의 도식의 순서는 Ras → Raf → MEK → ERK다. Ras는 GTP 결합 단백질이고 Raf는 MAPKKK, MEK는 MAPKK, ERK는 MAPK로 이어진다."
          },
          {
            "id": "signal-final-24-5",
            "qType": "mcq",
            "source": "24학번 · 5",
            "ref": "10주차(11장) PDF p.25",
            "pdfRefPage": 25,
            "pdfRefPages": [
              25
            ],
            "stem": "활성화된 ERK가 A를 인산화하고, A가 번역 개시인자 B를 인산화한다. A와 B의 올바른 조합은?",
            "choices": [
              "A : MNK1, B : eIF-4A",
              "A : MNK1, B : eIF-4B",
              "A : MNK1, B : eIF-4E",
              "A : p62 TCF, B : eIF-4A",
              "A : p62 TCF, B : eIF-4B"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 강의 도식의 경로는 ERK → MNK1 → eIF4E다. eIF4E는 mRNA의 5′ cap 인식에 관여한다. 원문은 eIF4E가 poly(A) tail에 직접 결합하여 hairpin을 푼다고 혼재되어 있으므로, 경로를 묻는 핵심을 유지해 문장을 보완했다. eIF4A·eIF4B는 이 문항에서 묻는 MNK1의 표적과 구분한다.\n\n[복원 메모] 원본의 오기·모호한 문장 또는 보기 배치를 강의에 맞게 보완했다. 원래 시험 문장과 동일한 복원으로 단정하지 않는다."
          },
          {
            "id": "signal-final-24-9",
            "qType": "mcq",
            "source": "24학번 · 9",
            "ref": "10주차(11장) PDF p.24,26",
            "pdfRefPage": 24,
            "pdfRefPages": [
              24,
              26
            ],
            "stem": "MEK에 의해 ERK가 인산화되는 두 아미노산은?",
            "choices": [
              "serine, threonine",
              "serine, tyrosine",
              "tyrosine, threonine",
              "tyrosine, methionine",
              "threonine, asparagine"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] MEK는 ERK 활성화 고리의 TEY 모티프에서 threonine(Thr)과 tyrosine(Tyr)을 인산화한다. 따라서 순서와 관계없이 Tyr·Thr의 조합이다. Ser·Thr 조합이나 methionine·asparagine 조합은 해당하지 않는다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "sig-11-nrtk-jak-stat",
        "chapter": "11주차 · nRTK와 면역신호",
        "title": "nRTK 구조·Jak-STAT·조혈작용(EPO/TPO) & IFNα",
        "pdfPages": [
          1,
          2,
          3,
          4,
          5,
          7,
          8,
          9,
          10,
          19,
          20,
          21,
          22
        ],
        "tags": [
          "11주차",
          "p.1-22",
          "nRTK",
          "Jak",
          "STAT",
          "EPO"
        ],
        "summary": "<p>자체 키나아제 도메인이 없는 수용체와 결합해 작동하는 <strong>비수용체 티로신 키나아제(nRTK)</strong>, 특히 <strong>Jak-STAT 경로</strong>(수용체 이량체화 → Jak 교차인산화 → STAT 인산화/이량체화 → 핵 이동), 조혈 인자(<strong>EPO, TPO, CSF</strong>), 그리고 <strong>IFNα(JAK1/Tyk2 → ISGF3)</strong> 신호를 다룹니다.</p>",
        "keyPoints": [
          "RTK와 달리 사이토카인 수용체는 세포 내 키나아제 도메인이 없어 Jak/Src 등 nRTK를 동원",
          "STAT은 SH2 도메인으로 서로의 pTyr에 결합해 이량체를 형성한 뒤 핵으로 이동해 전사인자로 작동",
          "IFNα/β 자극 시 JAK1·Tyk2 활성화 → STAT1/STAT2 + IRF9 복합체(ISGF3) 형성"
        ],
        "glossary": {
          "Jak-STAT 경로": "사이토카인·조혈인자 신호를 세포막에서 핵 내 유전자 발현까지 중간 단계 없이 직접 전달하는 신속 경로."
        },
        "pdfExcerpts": {
          "2": "12장 RTK vs nRTK: 사이토카인 수용체는 리간드 결합으로 이량체화되며 결합된 nRTK가 교차인산화된다.",
          "5": "Jak-STAT: Jak이 수용체 Tyr을 인산화 → STAT 결합·인산화 → STAT 이량체 핵 이동.",
          "20": "IFNα 수용체: Tyk2와 JAK1 활성화 → STAT1/2 이량체 + p48(IRF9) = ISGF3."
        },
        "pastQuestions": [
          {
            "id": "signal-final-25-7",
            "qType": "mcq",
            "source": "25학번 · 7",
            "ref": "부분 근거 · 11주차(12장) PDF p.2–6,21",
            "pdfRefPage": 2,
            "pdfRefPages": [
              2,
              3,
              4,
              5,
              6,
              21
            ],
            "stem": "다음 중 nRTK의 공통적인 특징으로 옳은 것은?",
            "choices": [
              "α-helix 구조 요소를 가진다.",
              "활성화를 위해 이량체 형성이 필수적이다.",
              "세포질에 위치하며 다른 단백질의 도움을 받아 활성화된다.",
              "SH2와 SH3 도메인을 가지고 있지 않다.",
              "regulatory system의 제어를 받는다."
            ],
            "answerIndex": 4,
            "answerIndices": null,
            "rationale": "[강의 기준] 강의는 여러 nRTK 계열의 도메인 구성과 조절을 비교한다. 원본 답 ⑤의 조절계에 의한 제어는 타당하지만, ① α-helix 구조 요소와 ③ 세포질 위치·다른 단백질에 의한 활성화도 넓은 문장으로 되어 있어 단 하나만 참이라고 확정하기 어렵다. 모든 nRTK가 SH2·SH3를 동일하게 갖는 것은 아니며 모든 활성화가 동일한 이량체화 방식인 것도 아니다. 원문 문구를 보존하고 채점에서 제외한다."
          },
          {
            "id": "signal-final-25-15",
            "qType": "mcq",
            "source": "25학번 · 15",
            "ref": "11주차(12장) PDF p.19–20,22",
            "pdfRefPage": 19,
            "pdfRefPages": [
              19,
              20,
              22
            ],
            "stem": "IFN-α 신호전달에 직접 관여하는 nRTK의 조합은?",
            "choices": [
              "Jak1&Tyk2",
              "Lck&ZAP-70",
              "Jak&Syk",
              "Src&Fyn",
              "Jak&Blk"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 20쪽의 IFN-α 수용체에는 JAK1과 TYK2가 연결된다. Lck·ZAP-70은 T세포, Syk는 비만세포 IgE 신호와 구분한다."
          },
          {
            "id": "signal-final-24-14",
            "qType": "mcq",
            "source": "24학번 · 14",
            "ref": "11주차(12장) PDF p.5–6",
            "pdfRefPage": 5,
            "pdfRefPages": [
              5,
              6
            ],
            "stem": "JAK(Janus kinase)를 구성하는 도메인에 해당하지 않는 것은?",
            "choices": [
              "FERM domain",
              "SH2 domain",
              "SH3 domain",
              "Kinase domain",
              "Pseudokinase domain"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 5쪽 도식은 FERM, SH2, pseudokinase, kinase 도메인을 제시한다. SH3는 이 JAK 도식에 포함되지 않는다. Src 계열의 SH3·SH2 구조와 혼동하지 않는다."
          },
          {
            "id": "signal-final-23-13",
            "qType": "mcq",
            "source": "23학번 · 13",
            "ref": "11주차(12장) PDF p.19–20,22",
            "pdfRefPage": 19,
            "pdfRefPages": [
              19,
              20,
              22
            ],
            "stem": "IFN-α 수용체의 JAK/STAT 신호전달에 관여하는 티로신 키나아제는?",
            "choices": [
              "Vav",
              "TYK2",
              "Syk",
              "Lck",
              "Src"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 20쪽은 IFN-α 수용체 신호에 TYK2와 JAK1을 제시한다. 원문의 Jyk2는 TYK2로 교정했다. Syk는 IgE, Lck는 T세포 초기 신호와 구분한다.\n\n[복원 메모] 원본의 오기·모호한 문장 또는 보기 배치를 강의에 맞게 보완했다. 원래 시험 문장과 동일한 복원으로 단정하지 않는다."
          },
          {
            "id": "signal-final-23-15",
            "qType": "mcq",
            "source": "23학번 · 15",
            "ref": "11주차(12장) PDF p.8,10",
            "pdfRefPage": 8,
            "pdfRefPages": [
              8,
              10
            ],
            "stem": "강의의 thrombopoietin(TPO) 신호전달 도식에 제시되지 않은 경로는?",
            "choices": [
              "JAK/STAT",
              "PI3K/AKT",
              "Ras/ERK",
              "PLC/IP₃",
              "모두 맞음"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 10쪽에는 JAK/STAT, PI3K/AKT, Ras–Raf–MEK–ERK 계열이 제시된다. 이 도식에 PLC/IP₃ 경로는 제시되지 않는다. ‘PAS/ERK’는 문맥과 도식에 따라 ‘Ras/ERK’로 교정했다.\n\n[복원 메모] 원본의 오기·모호한 문장 또는 보기 배치를 강의에 맞게 보완했다. 원래 시험 문장과 동일한 복원으로 단정하지 않는다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "sig-11-src-immune",
        "chapter": "11주차 · nRTK와 면역신호",
        "title": "Src family·T세포 활성화(Lck/ZAP70)·비만세포(FcεRI/Syk)",
        "pdfPages": [
          6,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18
        ],
        "tags": [
          "11주차",
          "p.6-18",
          "Src",
          "Lck",
          "Fyn",
          "ZAP70"
        ],
        "summary": "<p><strong>Src 계열 키나아제(c-Src, Lck, Fyn)</strong>의 조절 구조(SH3·SH2·C말단 pTyr527 억제), <strong>T세포 수용체(TCR)</strong>의 <strong>CD3 ITAM → Lck → ZAP-70 → LAT</strong> 신호 전달, 그리고 <strong>비만세포(FcεRI → Lyn/Syk)</strong>의 IgE 매개 탈과립을 다룹니다.</p>",
        "keyPoints": [
          "T세포 활성화: Lck가 CD3/ζ 사슬의 ITAM을 인산화 → ZAP-70의 SH2가 2개 pTyr에 결합·활성화 → LAT 인산화",
          "CD45 탈인산화효소는 Lck 억제성 Tyr을 탈인산화하여 Lck 활성화 준비",
          "비만세포: 알레르겐이 IgE-FcεRI 가교 → Lyn이 ITAM 인산화 → Syk 동원 → 히스타민 탈과립"
        ],
        "glossary": {
          "ITAM": "면역수용체(TCR, BCR, FcεRI) 세포질 꼬리에 존재하는 티로신 기반 활성화 모티프(YxxL/I)."
        },
        "pdfExcerpts": {
          "6": "Src family: N말단 미리스토일화, SH3, SH2, Kinase 도메인, C말단 음조절 Tyr.",
          "14": "T cell activation: Lck → ITAM 인산화 → ZAP-70 동원 및 활성화 → LAT/SLP-76 신호체.",
          "17": "비만세포 탈과립: FcεRI 가교 → Lyn/Syk → PLCγ/Vav → Ca²⁺ 유입 및 히스타민 방출."
        },
        "pastQuestions": [
          {
            "id": "signal-final-25-4",
            "qType": "mcq",
            "source": "25학번 · 4",
            "ref": "11주차(12장) PDF p.17–18,22",
            "pdfRefPage": 17,
            "pdfRefPages": [
              17,
              18,
              22
            ],
            "stem": "IgE 수용체(FcεRI) 하위 신호전달과 비만세포의 탈과립에 핵심적으로 관여하는 nRTK는?",
            "choices": [
              "Lck",
              "ZAP-70",
              "Syk",
              "Tyk",
              "Jak"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 강의의 IgE 수용체 도식과 요약표는 Syk를 비만세포 탈과립에 연결한다. T세포의 Lck·ZAP-70, IFN-α 신호의 JAK·TYK와 구분한다. 원문에 혼재된 ‘LAT과 FcεRI를 인산화’ 표현은 수용체 초기 인산화 단계와 혼동할 수 있어, 강의에서 명확히 확인되는 Syk의 하위 신호·탈과립 기능으로 보완했다.\n\n[복원 메모] 원본의 오기·모호한 문장 또는 보기 배치를 강의에 맞게 보완했다. 원래 시험 문장과 동일한 복원으로 단정하지 않는다."
          },
          {
            "id": "signal-final-25-5",
            "qType": "mcq",
            "source": "25학번 · 5",
            "ref": "11주차(12장) PDF p.6",
            "pdfRefPage": 6,
            "pdfRefPages": [
              6
            ],
            "stem": "c-Src 활성 증가가 암의 진행과 연관되는 이유로 강의에 가장 가까운 것은?",
            "choices": [
              "DNA polymerase 기능 이상을 유도하여 돌연변이를 증가시킨다.",
              "세포질 내 사이클린 의존성 키나제(CDK)를 억제한다.",
              "다른 키나아제를 활성화시켜 지속적인 세포 증식 신호를 유도한다.",
              "RTK의 리간드 결합을 차단하여 정상적인 신호를 방해한다.",
              "Ras의 GTPase 활성을 증가시켜 Ras 신호 전달을 억제한다."
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 12장 6쪽은 c-Src가 다른 신호를 촉진하여 암 진행과 연결될 수 있다고 설명한다. Src는 증식·분화·생존·이동·혈관형성에 관여한다. DNA polymerase의 기능을 직접 담당하거나 Ras의 신호 종료만을 유도하는 단백질로 설명하지 않는다."
          },
          {
            "id": "signal-final-25-8",
            "qType": "mcq",
            "source": "25학번 · 8",
            "ref": "11주차(12장) PDF p.15–16",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15,
              16
            ],
            "stem": "T세포 활성화 초기 단계에서 Src 계열 키나아제 Lck의 주된 역할은?",
            "choices": [
              "하위 신호 전달을 위해 어댑터 단백질인 LAT을 직접 인산화한다.",
              "GTP를 GDP로 교환하여 Ras 단백질을 활성화하는 GEF 역할을 한다.",
              "TCR 복합체의 ζ-chain에 존재하는 ITAM을 인산화한다.",
              "핵 내로 이동하여 IL-2 유전자의 발현을 유도하는 전사 인자로 작용한다.",
              "비만세포(Mast cell)의 IgE 수용체(FcεRI)를 인산화하여 탈과립을 유도한다."
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] Lck는 TCR ζ-chain의 ITAM을 인산화한다. 이후 ZAP-70이 결합하여 하위 LAT 등의 신호전달로 이어진다. GTP를 GDP로 교환하는 것이 GEF라는 설명은 방향과 역할이 모두 틀리며, Lck 자체가 핵 전사인자는 아니다."
          },
          {
            "id": "signal-final-25-30",
            "qType": "mcq",
            "source": "25학번 · 30",
            "ref": "부분 근거 · 11주차(12장) PDF p.15–16",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15,
              16
            ],
            "stem": "T세포 활성화 초기 단계에서 ZAP-70의 역할로 가장 적절한 것은?",
            "choices": [
              "CD28 공동자극 수용체에 결합하여 PI3K 신호를 직접 활성화한다.",
              "TCR 복합체의 ITAM을 직접 인산화하여 신호 전달을 개시한다.",
              "인산화된 ζ-chain ITAM에 결합한 뒤 LAT와 SLP-76을 인산화한다.",
              "Ras 단백질의 GTPase 활성을 증가시켜 신호를 종료한다.",
              "핵 내로 이동하여 NFAT의 전사를 직접 유도한다."
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] Lck가 인산화한 TCR ζ-chain ITAM에 ZAP-70이 결합하여 활성화되고, LAT 등 하위 단백질의 인산화를 통해 신호를 전달한다. TCR의 초기 ITAM 인산화는 Lck 단계다. [보충 설명] 복원 보기의 SLP-76까지 이 슬라이드에 직접 표시된 것은 아니지만, ③의 핵심인 인산화 ITAM 결합과 LAT 신호 연결은 강의와 일치한다."
          },
          {
            "id": "signal-final-24-11",
            "qType": "mcq",
            "source": "24학번 · 11",
            "ref": "11주차(12장) PDF p.15–16",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15,
              16
            ],
            "stem": "T세포 활성화에서 어댑터 단백질 LAT을 인산화하는 비수용체성 티로신 키나아제는?",
            "choices": [
              "Lck",
              "Syk",
              "Vav",
              "Src",
              "ZAP-70"
            ],
            "answerIndex": 4,
            "answerIndices": null,
            "rationale": "[강의 기준] Lck가 먼저 TCR ζ-chain의 ITAM을 인산화하고, ZAP-70이 인산화된 ITAM에 결합하여 활성화된다. 이후 LAT 등 하위 신호 단백질의 인산화를 통해 PLCγ·Ras 및 전사인자 활성화로 이어진다. Lck는 초기 TCR 인산화, ZAP-70은 LAT의 하위 연결이라는 단계 차이를 구분한다."
          },
          {
            "id": "signal-final-23-12",
            "qType": "mcq",
            "source": "23학번 · 12",
            "ref": "11주차(12장) PDF p.15–18",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15,
              16,
              17,
              18
            ],
            "stem": "강의의 T세포 활성화 신호 도식에 포함되지 않는 인자는?",
            "choices": [
              "Lck",
              "Syk",
              "Vav",
              "PLCγ",
              "ZAP-70"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] T세포 신호 도식에는 Lck·ZAP-70·LAT와 하위 PLCγ·Vav 등이 연결된다. Syk는 같은 강의의 비만세포 IgE 신호에 제시되는 nRTK다. ‘이 도식의 인자 구분’을 묻는 문항이며 모든 세포에서 Syk가 T세포와 절대 무관하다는 뜻은 아니다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "sig-12-messengers",
        "chapter": "12주차 · 신호전달 기원·1차 전령·수용체",
        "title": "신호전달 기원과 1차 전령물질 (호르몬·성장인자·신경전달물질)",
        "pdfPages": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14
        ],
        "tags": [
          "12주차",
          "p.1-14",
          "기원",
          "1차 전령",
          "호르몬",
          "성장인자"
        ],
        "summary": "<p>세포신호전달학의 역사적 기원(Sporinger 1979, Rodbell 1980, secretin·adrenaline 호르몬 개념)과 <strong>1차 전령물질(First Messengers)</strong>의 분류(호르몬, 성장인자, 사이토카인, Eicosanoids, 지용성 스테로이드/갑상선 호르몬, 아미노산/아민 신경전달물질)를 다룹니다.</p>",
        "keyPoints": [
          "수용성 1차 전령(펩타이드 호르몬, 카테콜아민 등)은 막수용체에 결합; 지용성(스테로이드, 갑상선호르몬, 레티노산)은 세포 내/핵 수용체에 결합",
          "Eicosanoids(프로스타글란딘, 류코트리엔 등)는 아라키돈산 유래 국소 매개체",
          "GABA·글리신은 억제성(Cl⁻ 유입), 글루타메이트는 흥분성 신경전달물질"
        ],
        "glossary": {
          "1차 전령물질": "세포 외부에서 신호를 전달해 표적 세포의 수용체에 결합하는 최초의 신호 분자."
        },
        "pdfExcerpts": {
          "3": "호르몬의 정의: secretin, adrenaline 등 1차 전령물질의 기원과 내분비 신호 개념.",
          "6": "1차 전령물질 분류: 호르몬, 성장인자, 사이토카인, Eicosanoids, 신경전달물질."
        },
        "pastQuestions": [
          {
            "id": "signal-final-25-16",
            "qType": "mcq",
            "source": "25학번 · 16",
            "ref": "부분 근거 · 12주차(첫번째 수업) PDF p.6–11",
            "pdfRefPage": 6,
            "pdfRefPages": [
              6,
              7,
              8,
              9,
              10,
              11
            ],
            "stem": "다음 중 1차 전령물질에 해당하지 않는 것은?",
            "choices": [
              "호르몬",
              "신경전달물질",
              "성장인자",
              "Eicosanoids",
              "ATP"
            ],
            "answerIndex": 4,
            "answerIndices": null,
            "rationale": "[강의 기준] 호르몬·신경전달물질·성장인자·eicosanoid는 강의에 제시된 1차 전령물질이다. 그러나 보기 ATP에는 세포 안의 대사 기질인지 세포 밖의 신호물질인지 조건이 없다. ATP가 cAMP 합성 기질로 쓰인다는 사실만으로 모든 ATP를 1차 전령물질에서 제외할 수 없다. 이 여섯 강의자료에서 원본 답 ⑤를 유일 정답으로 확정하기 어려우므로 검토 보류한다."
          },
          {
            "id": "signal-final-25-21",
            "qType": "mcq",
            "source": "25학번 · 21",
            "ref": "12주차(첫번째 수업) PDF p.14",
            "pdfRefPage": 14,
            "pdfRefPages": [
              14
            ],
            "stem": "GABA의 신경전달 기능으로 옳은 것은?",
            "choices": [
              "억제성 신경전달",
              "세포자살 유도",
              "근육 수축 촉진",
              "골흡수 촉진",
              "흥분성 물질"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 14쪽은 GABA와 glycine을 억제성 전달물질로 제시한다. 원문의 ‘저해성 물질 유도’는 기능을 명확히 표현하도록 ‘억제성 신경전달’로 보완했다. 흥분성 신경전달이나 골흡수가 이 문항의 답이 아니다.\n\n[복원 메모] 원본의 오기·모호한 문장 또는 보기 배치를 강의에 맞게 보완했다. 원래 시험 문장과 동일한 복원으로 단정하지 않는다."
          },
          {
            "id": "signal-final-25-29",
            "qType": "mcq",
            "source": "25학번 · 29",
            "ref": "12주차(첫번째 수업) PDF p.10",
            "pdfRefPage": 10,
            "pdfRefPages": [
              10
            ],
            "stem": "히스타민·세로토닌·브래디키닌의 공통적인 작용으로 강의에 제시된 것은?",
            "choices": [
              "세포자살 유도",
              "혈관 확장 및 투과성 증가",
              "Na⁺ 통로 억제",
              "항염증",
              "세포 분열 증가"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 10쪽은 이들을 혈관작용성 물질로 제시하고 혈관확장·국소 혈액순환 증가·혈관 투과성 증가를 설명한다. 항염증이나 골형성만을 공통 작용으로 보지 않는다."
          },
          {
            "id": "signal-final-25-32",
            "qType": "mcq",
            "source": "25학번 · 32",
            "ref": "12주차(첫번째 수업) PDF p.11",
            "pdfRefPage": 11,
            "pdfRefPages": [
              11
            ],
            "stem": "Prostaglandin·leukotriene·thromboxane의 공통적인 전구체는?",
            "choices": [
              "Arachidonic acid",
              "Linoleic acid",
              "Amino sugar",
              "Collagen",
              "Pyrrole ring"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 11쪽은 eicosanoid를 arachidonic acid 유래 신호물질로 설명하고 prostaglandin·thromboxane·leukotriene을 예로 든다. Amino sugar·collagen·pyrrole ring이 이 계열의 공통 전구체는 아니다."
          },
          {
            "id": "signal-final-24-16",
            "qType": "mcq",
            "source": "24학번 · 16",
            "ref": "12주차(첫번째 수업) PDF p.6–14 · 10주차(11장) PDF p.20",
            "pdfRefPage": 6,
            "pdfRefPages": [
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              20
            ],
            "stem": "수용체에 작용하는 세포외 1차 전령물질에 해당하지 않는 것은?",
            "choices": [
              "인슐린",
              "아세틸콜린",
              "인터페론 알파",
              "IP₃",
              "TGF"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 12주차 자료는 호르몬·신경전달물질·사이토카인·성장인자 등을 세포외 1차 전령물질로 설명한다. IP₃와 DAG는 수용체 활성화 뒤 세포 안에서 생성되는 2차 전령물질이다. 인슐린·아세틸콜린·IFN-α·TGF 또는 IL-1·노르아드레날린·EGF·TSH는 1차 전령물질에 해당한다."
          },
          {
            "id": "signal-final-24-17",
            "qType": "mcq",
            "source": "24학번 · 17",
            "ref": "12주차(첫번째 수업) PDF p.10,13–16",
            "pdfRefPage": 10,
            "pdfRefPages": [
              10,
              13,
              14,
              15,
              16
            ],
            "stem": "다음 중 신경전달물질인 1차 전령물질에 해당하지 않는 것은?",
            "choices": [
              "GABA",
              "Histidine",
              "Dopamine",
              "Adrenaline",
              "Norepinephrine"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 강의는 GABA·아세틸콜린 등을 신경전달물질로, 아드레날린·노르아드레날린·도파민을 카테콜아민으로 다룬다. Histidine(히스티딘)은 이 목록의 신경전달물질이 아니라 아미노산이며 histamine(히스타민)과 다른 이름이다. DAG는 세포 내 2차 전령물질이다."
          },
          {
            "id": "signal-final-24-18",
            "qType": "mcq",
            "source": "24학번 · 18",
            "ref": "부분 근거 · 12주차(첫번째 수업) PDF p.8 · 9주차(10장) PDF p.20",
            "pdfRefPage": 8,
            "pdfRefPages": [
              8,
              20
            ],
            "stem": "바이러스에 감염된 세포가 신호전달을 통해 세포자살(apoptosis)을 진행한다. 이때의 신호전달 방식은?",
            "choices": [
              "apocrine",
              "endocrine",
              "paracrine",
              "autocrine",
              "signaling across gap junctions"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] Autocrine은 분비한 신호가 그 세포 자신에 작용하는 방식이다. Paracrine은 인접 세포, endocrine은 혈류를 통해 먼 세포에 작용한다. 그러나 복원 지문에는 신호의 분비 세포·표적 세포가 명확히 제시되지 않았고, 감염 후 사멸한다는 사실만으로 자가분비를 판정할 수 없다. 원본의 자가분비 답은 출제 의도로만 표시하고 채점에서 제외한다."
          },
          {
            "id": "signal-final-24-19",
            "qType": "mcq",
            "source": "24학번 · 19",
            "ref": "12주차(첫번째 수업) PDF p.9,11–13",
            "pdfRefPage": 9,
            "pdfRefPages": [
              9,
              11,
              12,
              13
            ],
            "stem": "다음 1차 전령물질 중 나머지와 화학적 형태가 다른 것은?",
            "choices": [
              "Insulin",
              "Secretin",
              "Oxytocin",
              "Prostaglandin",
              "Parathyroid hormone"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] Glucagon·secretin·oxytocin·vasopressin·insulin·PTH는 펩타이드성 호르몬이다. Prostaglandin은 아라키돈산 유래 지질성 신호물질인 eicosanoid에 속하므로 다른 군이다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "sig-12-adrenergic-gpcr",
        "chapter": "12주차 · 신호전달 기원·1차 전령·수용체",
        "title": "수용체 특성과 아드레날린 α/β 수용체 (Gs/Gi/Gq)",
        "pdfPages": [
          15,
          16,
          17,
          18,
          19,
          20,
          21
        ],
        "tags": [
          "12주차",
          "p.15-21",
          "아드레날린",
          "α",
          "β",
          "GPCR"
        ],
        "summary": "<p>수용체의 특이성·포화성·가역성 및 <strong>작용제(Agonist) vs 길항제(Antagonist)</strong>, 그리고 <strong>아드레날린 수용체 아형(α₁, α₂, β₁, β₂, β₃)</strong>의 약리학적 구분(에피네프린/노르에피네프린/이소프로테레놀 반응성)과 연결된 <strong>G단백질(Gq, Gi, Gs)</strong>을 다룹니다.</p>",
        "keyPoints": [
          "α₁ → Gq → PLCβ → IP₃/DAG(Ca²⁺↑); α₂ → Gi → Adenylyl cyclase 억제(cAMP↓)",
          "β₁, β₂, β₃ → Gs → Adenylyl cyclase 활성화(cAMP↑ → PKA)",
          "아형 구분 기준: 합성 작용제/길항제(예: Isoproterenol은 β 선택적)에 대한 친화력 차이"
        ],
        "glossary": {
          "Agonist vs Antagonist": "작용제(Agonist)는 수용체에 결합해 생리 반응을 유발하고, 길항제(Antagonist)는 결합해 작용제의 결합을 차단한다."
        },
        "pdfExcerpts": {
          "18": "Gq-PLC 경로: PIP₂ → IP₃(소포체 Ca²⁺ 방출) + DAG(PKC 활성화).",
          "20": "아드레날린 수용체 효력 서열(α: Epi ≥ NE >> Iso; β: Iso > Epi ≥ NE) 및 G단백질 연계: Gs(β), Gi(α₂), Gq(α₁)."
        },
        "pastQuestions": [
          {
            "id": "signal-final-25-18",
            "qType": "mcq",
            "source": "25학번 · 18",
            "ref": "12주차(첫번째 수업) PDF p.20–21",
            "pdfRefPage": 20,
            "pdfRefPages": [
              20,
              21
            ],
            "stem": "아드레날린 수용체의 아형(subtype)을 구분하는 기준으로 강의에서 강조한 것은?",
            "choices": [
              "호르몬 농도",
              "세포막의 지질 조성",
              "합성된 agonist와 antagonist에 대한 반응성",
              "결합하는 G단백질의 종류",
              "수용체의 올리고머화 여부"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 20–21쪽은 합성 agonist·antagonist에 대한 반응을 이용해 아드레날린 수용체 아형을 구분하는 설명과 표를 제시한다. 연결된 G단백질은 하위 기능 이해에 중요하지만 이 문항이 묻는 약리학적 분류 기준과 구분한다."
          },
          {
            "id": "signal-final-24-20",
            "qType": "mcq",
            "source": "24학번 · 20",
            "ref": "12주차(첫번째 수업) PDF p.16–21",
            "pdfRefPage": 16,
            "pdfRefPages": [
              16,
              17,
              18,
              19,
              20,
              21
            ],
            "stem": "카테콜아민 계열의 신호물질과 결합하는 수용체는?",
            "choices": [
              "Somatostatin receptor",
              "Angiotensin receptor",
              "Adrenergic receptor",
              "Neurokinin receptor",
              "Purinergic receptor"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 강의 16쪽은 adrenaline과 noradrenaline이 α·β-adrenergic receptor에 작용한다고 설명한다. Somatostatin·angiotensin·neurokinin·purinergic 수용체는 각각 다른 리간드 계열과 연결된다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "sig-12-ach-oligomer",
        "chapter": "12주차 · 신호전달 기원·1차 전령·수용체",
        "title": "아세틸콜린 수용체(니코틴성·무스카린성)·다량체화·BCR/TCR",
        "pdfPages": [
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31
        ],
        "tags": [
          "12주차",
          "p.22-31",
          "아세틸콜린",
          "니코틴",
          "무스카린",
          "AChE"
        ],
        "summary": "<p><strong>니코틴성 아세틸콜린 수용체</strong>(리간드 개폐 이온 통로, 5량체 Na⁺/K⁺/Ca²⁺)와 <strong>무스카린성 수용체(M1~M5 GPCR)</strong>, <strong>AChE 저해제</strong>, 그리고 <strong>수용체 다량체화(oligomerization)</strong> 및 BCR/TCR 복합체를 다룹니다.</p>",
        "keyPoints": [
          "니코틴성 AChR: 빠른 시냅스 전달, 리간드 개폐 양이온 채널(α₂βγδ 5량체)",
          "무스카린성 AChR: M1/M3/M5(Gq → IP₃/DAG), M2/M4(Gi → cAMP↓, K⁺ 채널↑)",
          "AChE(아세틸콜린에스터라제) 저해제는 시냅스 내 ACh 농도를 높여 콜린성 신호를 증강"
        ],
        "glossary": {
          "니코틴성 vs 무스카린성 수용체": "니코틴성은 이온통로형(빠른 탈분극), 무스카린성은 GPCR형(느린 대사성 조절) 아세틸콜린 수용체다."
        },
        "pdfExcerpts": {
          "22": "니코틴성 ACh 수용체: 2분자의 ACh가 α 소단위에 결합하면 통로가 열려 Na⁺ 유입.",
          "25": "ACh 합성·분비·분해(AChE) 회로.",
          "27": "무스카린성 수용체(M1~M5) 아형별 특징 및 약리."
        },
        "pastQuestions": [
          {
            "id": "signal-final-25-20",
            "qType": "mcq",
            "source": "25학번 · 20",
            "ref": "12주차(첫번째 수업) PDF p.22–23",
            "pdfRefPage": 22,
            "pdfRefPages": [
              22,
              23
            ],
            "stem": "아세틸콜린의 니코틴성 수용체에 대한 설명으로 옳은 것은?",
            "choices": [
              "무스카린성 수용체이다",
              "이온 채널이다",
              "Gαq를 활성화한다",
              "cAMP 농도 증가 유발",
              "Gi단백질 활성화"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 22–23쪽은 nicotinic receptor를 리간드작동성 이온통로로, muscarinic receptor를 G단백질연결 수용체로 제시한다. 니코틴성 수용체가 직접 Gαq·Gi를 활성화한다는 설명과 구분한다."
          },
          {
            "id": "signal-final-25-22",
            "qType": "mcq",
            "source": "25학번 · 22",
            "ref": "12주차(첫번째 수업) PDF p.22–23,27",
            "pdfRefPage": 22,
            "pdfRefPages": [
              22,
              23,
              27
            ],
            "stem": "강의의 무스카린성 수용체 하위 신호 도식에 직접 제시되지 않은 것은?",
            "choices": [
              "IP₃ 증가",
              "PKC 활성화",
              "PLC 활성화",
              "AC 활성 조절",
              "수용체 자체가 Na⁺ 이온통로로 작동"
            ],
            "answerIndex": 4,
            "answerIndices": null,
            "rationale": "[강의 기준] M₁·M₃·M₅는 Gq–PLC–IP₃/DAG–Ca²⁺·PKC 계열, M₂·M₄는 Gi–AC 억제 계열로 연결된다. 원문의 ‘AC 증가 혹은 감소’는 ‘AC 활성 조절’로, ‘Na⁺ 전압성 통로 작동’은 ‘수용체 자체가 Na⁺ 이온통로’로 보완하여 GPCR과 이온통로형 수용체의 차이를 명확히 했다. GPCR이 간접적으로 이온통로를 조절할 수 없다는 뜻은 아니다.\n\n[복원 메모] 원본의 오기·모호한 문장 또는 보기 배치를 강의에 맞게 보완했다. 원래 시험 문장과 동일한 복원으로 단정하지 않는다."
          },
          {
            "id": "signal-final-25-23",
            "qType": "mcq",
            "source": "25학번 · 23",
            "ref": "12주차(첫번째 수업) PDF p.22–23,27–28",
            "pdfRefPage": 22,
            "pdfRefPages": [
              22,
              23,
              27,
              28
            ],
            "stem": "아세틸콜린의 무스카린성 수용체에 대한 설명으로 옳은 것을 모두 포함한 조합은?\n\nㄱ. G단백질과 연결된 7회 막관통 수용체다\nㄴ. 니코틴성 수용체와 마찬가지로 이온통로형이다\nㄷ. Atropine이 길항제로 작용한다\nㄹ. 아형에 따라 PLC 활성화 또는 AC 억제 경로와 연결된다",
            "choices": [
              "ㄱ",
              "ㄱ, ㄷ",
              "ㄴ, ㄷ, ㄹ",
              "ㄱ, ㄷ, ㄹ",
              "ㄱ, ㄴ, ㄷ, ㄹ"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 무스카린성 수용체는 7회 막관통 GPCR이다. Atropine은 길항제로 제시되며 수용체 아형에 따라 PLC 경로 또는 AC 억제 경로와 연결된다. 니코틴성 수용체와 같은 이온통로형이라는 설명은 틀리다. 원본 문서 끝의 ㄱ–ㄹ 설명을 이 문항에 재배치했으며, ㄹ의 포괄적인 활성화/억제 표현은 강의 도식에 맞게 보완했다.\n\n[복원 메모] 원본의 오기·모호한 문장 또는 보기 배치를 강의에 맞게 보완했다. 원래 시험 문장과 동일한 복원으로 단정하지 않는다."
          },
          {
            "id": "signal-final-25-24",
            "qType": "mcq",
            "source": "25학번 · 24",
            "ref": "부분 근거 · 12주차(첫번째 수업) PDF p.24–26",
            "pdfRefPage": 24,
            "pdfRefPages": [
              24,
              25,
              26
            ],
            "stem": "아세틸콜린분해효소 억제로 아세틸콜린의 작용이 증가할 때 나타날 수 있는 생리적 반응은?",
            "choices": [
              "심박수 증가",
              "동공 확대",
              "침분비 감소",
              "근육 수축 증가",
              "장운동 감소"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 24–26쪽은 AChE가 아세틸콜린을 분해하며 억제제가 신호 종료를 방해함을 보여 준다. 신경근접합부에서 초기에는 아세틸콜린 작용 증가로 근육 수축이 증가할 수 있다. 지속적·과도한 억제는 마비로 이어질 수 있어 다음 억제제 문항과 모순이 아니다. [보충 설명] 심박·동공·침·장운동에 대한 모든 선지 효과가 강의에 열거된 것은 아니므로, 이 문항은 신경근 작용을 기준으로 판단한다."
          },
          {
            "id": "signal-final-25-27",
            "qType": "mcq",
            "source": "25학번 · 27",
            "ref": "12주차(첫번째 수업) PDF p.24–26",
            "pdfRefPage": 24,
            "pdfRefPages": [
              24,
              25,
              26
            ],
            "stem": "아세틸콜린분해효소를 지속적으로 강하게 억제할 때 나타날 수 있는 결과는?",
            "choices": [
              "신경전달감소 → 무력감",
              "아세틸콜린 축적 → 근섬유 마비",
              "콜린성 수용체의 발현 증가",
              "nicotinic 수용체의 특이적 억제",
              "근육 이완, 체온 저하"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] AChE 억제 시 시냅스의 아세틸콜린 제거가 지연된다. 강의 24쪽은 강력한 AChE 억제제가 근섬유를 마비시킬 수 있다고 설명한다. 초기의 수축 증가와 지속적 과자극에 따른 마비는 시간·노출 조건이 다르다. 단순히 아세틸콜린 방출이 감소하는 현상은 아니다.\n\n[복원 메모] 원본의 오기·모호한 문장 또는 보기 배치를 강의에 맞게 보완했다. 원래 시험 문장과 동일한 복원으로 단정하지 않는다."
          },
          {
            "id": "signal-final-24-21",
            "qType": "mcq",
            "source": "24학번 · 21",
            "ref": "12주차(첫번째 수업) PDF p.22–23,27",
            "pdfRefPage": 22,
            "pdfRefPages": [
              22,
              23,
              27
            ],
            "stem": "아세틸콜린과 결합하는 두 수용체 유형의 올바른 조합은?",
            "choices": [
              "Nicotinic receptor, Purinergic receptor",
              "Purinergic receptor, Muscarinic receptor",
              "Purinergic receptor, Amino acid receptor",
              "Nicotinic receptor, Amino acid receptor",
              "Muscarinic receptor, Nicotinic receptor"
            ],
            "answerIndex": 4,
            "answerIndices": null,
            "rationale": "[강의 기준] 아세틸콜린 수용체는 nicotinic receptor와 muscarinic receptor로 나뉜다. 전자는 리간드작동성 이온통로이고, 후자는 G단백질연결 수용체다. Purinergic receptor는 아세틸콜린 수용체의 다른 이름이 아니다."
          },
          {
            "id": "signal-final-24-22",
            "qType": "mcq",
            "source": "24학번 · 22",
            "ref": "12주차(첫번째 수업) PDF p.24–26",
            "pdfRefPage": 24,
            "pdfRefPages": [
              24,
              25,
              26
            ],
            "stem": "DFP·사린 등 아세틸콜린의 분해를 억제하는 물질이 표적으로 하는 효소는?",
            "choices": [
              "acetylcholine esterase",
              "acetylcholine kinase",
              "choline acetyltransferase",
              "phosphocholine cytidyltransferase",
              "choline hydrolase"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] Acetylcholinesterase(AChE)는 시냅스 틈의 아세틸콜린을 choline과 acetate로 가수분해하여 신호를 종료한다. Choline acetyltransferase는 합성 효소이며 분해 효소와 구분한다. 원문에서 DFP와 sarin을 동일 물질처럼 병기한 표현은 수정했다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "sig-13-ptm-integrin",
        "chapter": "13주차 · 세포부착·Integrin·Cadherin·세포사멸",
        "title": "번역후 변형(PTM)·Adhesion 분자·Integrin(파골세포 αvβ₃)",
        "pdfPages": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23
        ],
        "tags": [
          "13주차",
          "p.1-23",
          "PTM",
          "NCAM",
          "Ig",
          "ICAM"
        ],
        "summary": "<p><strong>단백질 번역후 변형(PTM)</strong>(인산화, 아세틸화, 메틸화, 유비퀴틴화, 수모화, 지질화, 당화 등), <strong>NCAM & Ig superfamily(ICAM-1, VCAM-1, PECAM)</strong>, 그리고 <strong>Integrin(α/β 이종이합체, RGD/EILDV 인식)</strong>의 양방향 신호전달과 <strong>파골세포(Osteoclast) αvβ₃ 인테그린</strong>의 골흡수 조절(c-Src/Pyk2/p130Cas, RGD 펩타이드로 골흡수 억제)을 다룹니다.</p>",
        "keyPoints": [
          "Integrin은 세포내 신호가 친화도를 높이는 Inside-out과, ECM 결합이 세포내로 전달되는 Outside-in 신호 모두 매개",
          "파골세포의 αvβ₃ integrin은 vitronectin·osteopontin 등의 RGD 서열에 결합해 골흡수 촉진 (항체/RGD 펩타이드 처리 시 골흡수 억제)",
          "β₂-integrin(LFA-1 등)은 백혈구에만, αIIbβ₃는 혈소판 혈액응고에 특이적"
        ],
        "glossary": {
          "RGD 서열": "Arg-Gly-Asp 트리펩타이드 모티프로, Integrin이 세포외 기질 단백질(피브로넥틴 등)을 인식해 결합하는 부위."
        },
        "pdfExcerpts": {
          "12": "Adhesion molecules: Inside-out 신호전달의 표적이자 Outside-in 신호전달의 수용체.",
          "18": "Integrin 구조: 비공유 결합된 α, β 소단위로 ECM과 세포내 액틴 세포골격을 연결.",
          "21": "파골세포 αvβ₃ integrin: RGD-함유 단백질에 결합해 골흡수(bone resorption) 수행."
        },
        "pastQuestions": [
          {
            "id": "signal-final-25-19",
            "qType": "mcq",
            "source": "25학번 · 19",
            "ref": "13주차(14장) PDF p.21–23",
            "pdfRefPage": 21,
            "pdfRefPages": [
              21,
              22,
              23
            ],
            "stem": "파골세포의 αᵥβ₃ integrin은 골흡수 기능에 어떤 영향을 미치는가?",
            "choices": [
              "M-CSF 수용체 발현 증가",
              "골흡수 증가",
              "골흡수 억제",
              "RANKL 발현 증가",
              "OPG 발현 억제"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 21–23쪽은 αᵥβ₃ integrin이 골기질 부착과 골흡수에 중요하며, RGD 펩타이드나 차단 항체가 결합을 방해하면 골흡수가 억제됨을 제시한다. 따라서 정상 수용체의 기능은 골흡수를 지지·촉진하는 방향이다."
          },
          {
            "id": "signal-final-24-23",
            "qType": "mcq",
            "source": "24학번 · 23",
            "ref": "13주차(14장) PDF p.16–29",
            "pdfRefPage": 16,
            "pdfRefPages": [
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29
            ],
            "stem": "다음 중 강의에서 분류한 세포 부착분자(adhesion molecule) family에 속하지 않는 것은?",
            "choices": [
              "cadherin",
              "β-catenin",
              "selectin",
              "integrin",
              "immunoglobulin superfamily"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 강의는 immunoglobulin superfamily, integrin, cadherin, selectin, cartilage-like protein을 세포부착분자군으로 제시한다. β-catenin은 cadherin의 세포질 쪽에 연결되는 세포 내 단백질이며, 독립적인 세포부착분자 family가 아니다."
          },
          {
            "id": "signal-final-24-24",
            "qType": "mcq",
            "source": "24학번 · 24",
            "ref": "13주차(14장) PDF p.21–23",
            "pdfRefPage": 21,
            "pdfRefPages": [
              21,
              22,
              23
            ],
            "stem": "파골세포에서 특징적으로 발현되어 골기질 부착에 관여하는 integrin 조합은?",
            "choices": [
              "α₁β₃",
              "αᵥβ₅",
              "α₃β₁",
              "αᵥβ₃",
              "α₁β₁"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 파골세포는 αᵥβ₃ integrin을 많이 발현한다. 이 수용체는 osteopontin 등 골기질 단백질과 결합하여 부착·골흡수에 관여한다. α·β 소단위체의 다른 조합과 구분한다."
          },
          {
            "id": "signal-final-24-25",
            "qType": "mcq",
            "source": "24학번 · 25",
            "ref": "13주차(14장) PDF p.21–23",
            "pdfRefPage": 21,
            "pdfRefPages": [
              21,
              22,
              23
            ],
            "stem": "Integrin이 세포외기질 단백질에서 인식하는 대표적인 아미노산 서열은?",
            "choices": [
              "Arg-Gly-Asp (RGD)",
              "Leu-Met-Asp (LMD)",
              "Phe-Ser-Cys (FSC)",
              "Gln-Thr-Asn (QTN)",
              "Ala-Gly-Tyr (AGY)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 강의의 파골세포 integrin 슬라이드는 Arg–Gly–Asp(RGD) 서열을 제시한다. R은 arginine, G는 glycine, D는 aspartate다. 다른 제시 서열은 이 도식의 대표 인식 서열이 아니다."
          },
          {
            "id": "signal-final-24-34",
            "qType": "mcq",
            "source": "24학번 · 34",
            "ref": "13주차(14장) PDF p.28 · 14주차(세번째 수업) PDF p.5,13",
            "pdfRefPage": 5,
            "pdfRefPages": [
              5,
              13,
              28
            ],
            "stem": "백혈구가 염증 부위 혈관을 따라 구르는 과정에서 그림 A의 혈관내피세포 표면에 있는 세포 부착분자는?",
            "choices": [
              "vitronectin",
              "E-selectin",
              "L-selectin",
              "M-selectin",
              "fibronectin"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 혈관내피세포의 E-selectin은 백혈구의 리간드와 상호작용하여 rolling을 매개한다. L-selectin은 주로 백혈구 쪽에 발현된다. Fibronectin·vitronectin은 이 그림 A의 내피 selectin에 해당하지 않는다."
          },
          {
            "id": "signal-final-24-35",
            "qType": "mcq",
            "source": "24학번 · 35",
            "ref": "13주차(14장) PDF p.28 · 14주차(세번째 수업) PDF p.5,13",
            "pdfRefPage": 5,
            "pdfRefPages": [
              5,
              13,
              28
            ],
            "stem": "그림 B에서 백혈구 표면에 발현되어 내피세포의 ICAM과 결합하는 세포 부착분자는?",
            "choices": [
              "ICAM-2",
              "vitronectin",
              "NCAM",
              "PECAM",
              "LFA-1"
            ],
            "answerIndex": 4,
            "answerIndices": null,
            "rationale": "[강의 기준] LFA-1은 백혈구 표면의 integrin으로, 내피세포의 ICAM에 결합하여 강한 부착에 관여한다. ICAM은 반대쪽 리간드이고, PECAM은 혈관 밖 이동 과정과 관련되므로 그림 B의 LFA-1과 구분한다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "sig-13-cadherin-survival",
        "chapter": "13주차 · 세포부착·Integrin·Cadherin·세포사멸",
        "title": "Cadherin·Selectin·FAK 생존신호·세포주기·β-catenin 탈분화",
        "pdfPages": [
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37
        ],
        "tags": [
          "13주차",
          "p.24-37",
          "cadherin",
          "카드헤린",
          "Ca2+",
          "catenin"
        ],
        "summary": "<p><strong>Cadherin(Ca²⁺ 의존적 동종 부착, catenin-actin 연결, 종양억제자)</strong>과 <strong>Selectin(s-Le^x 당결합)</strong>, <strong>CD44</strong>, 부착 의존적 <strong>FAK(Y397/Y925) → PKB(Akt) 생존 및 Ras-ERK 증식</strong>(Signal 1 GF + Signal 2 ECM + RhoA → Cyclin D/E, p21 억제), 그리고 <strong>Adherens junction 소실 시 β-catenin/Tcf 핵 이동에 의한 탈분화·암 유발</strong>을 다룹니다.</p>",
        "keyPoints": [
          "E-cadherin 부착 소실 → 세포 극성 소실(탈분화) 및 유리된 β-catenin이 핵에서 Tcf와 결합해 cyclin D1·c-myc 발현 → 종양 형성",
          "정상 상태에서는 APC/GSK-3β 복합체가 유리 β-catenin을 인산화·유비퀴틴화하여 분해 (APC/β-catenin 변이 시 대장암)",
          "세포 증식에는 성장인자(Signal 1)와 ECM 부착(Signal 2: FAK·RhoA) 두 신호가 모두 필요"
        ],
        "glossary": {
          "FAK (Focal Adhesion Kinase)": "Integrin 군집 시 Y397 자가인산화되어 PI3K-PKB(생존)와 Src-Grb2-Ras(증식) 경로를 연결하는 키나아제."
        },
        "pdfExcerpts": {
          "24": "Cadherin: Ca²⁺ 의존성 세포-세포 부착 분자로 배아 치밀화(compaction) 및 상피 종양억제 기능.",
          "31": "FAK 생존·증식 신호: Y397 → PI3K/PKB(Bad/caspase-9 억제), Y925 → Shc/Grb2/Ras/ERK.",
          "37": "β-catenin & Tcf: E-cadherin 소실 시 β-catenin이 핵으로 들어가 cyclin D1/c-myc 전사 유도."
        },
        "pastQuestions": [
          {
            "id": "signal-final-25-25",
            "qType": "mcq",
            "source": "25학번 · 25",
            "ref": "13주차(14장) PDF p.24–26,36–37",
            "pdfRefPage": 24,
            "pdfRefPages": [
              24,
              25,
              26,
              36,
              37
            ],
            "stem": "강의에서 상피세포의 cadherin 접착이 상실될 때 제시한 변화는?",
            "choices": [
              "분화 촉진",
              "세포 자살 증가",
              "탈분화",
              "세포 부착 강화",
              "세포 이동 막기"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 36–37쪽은 adherens junction 손실과 상피세포의 탈분화(de-differentiation)를 연결한다. 원본 답 ④ ‘세포 부착 강화’는 접착 상실과 반대이므로 ③ 탈분화로 정정한다. 접착 상실이 생존에 영향을 줄 수도 있지만, 이 문항에서는 해당 강의 그림의 직접 결과를 묻도록 문장을 명확히 했다.\n\n[정답 정정] 원본 답 ④ → 강의 기준 ③.\n\n[복원 메모] 원본의 오기·모호한 문장 또는 보기 배치를 강의에 맞게 보완했다. 원래 시험 문장과 동일한 복원으로 단정하지 않는다."
          },
          {
            "id": "signal-final-25-33",
            "qType": "mcq",
            "source": "25학번 · 33",
            "ref": "13주차(14장) PDF p.26,36–37",
            "pdfRefPage": 26,
            "pdfRefPages": [
              26,
              36,
              37
            ],
            "stem": "Cadherin이 종양억제 기능을 하는 이유로 강의에 가장 가까운 것은?",
            "choices": [
              "G 단백질 결합 증가",
              "세포 자살 증가",
              "세포 부착 유지하여 전이를 억제",
              "핵 내 전사 인자 조절",
              "세포 부착을 약화하여 세포의 이탈을 촉진한다"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 26쪽은 cadherin이 tumor suppressor로 작용함을 제시하고, 36–37쪽은 접착 상실과 탈분화를 연결한다. 세포 사이 접착을 유지하는 기능이 종양세포의 이탈·전이를 억제하는 방향으로 작용한다. 원문 ⑤의 미복원 부분은 원래 문장으로 확정할 수 없어 학습용 오답 보기로 보완했다.\n\n[복원 메모] 원본의 오기·모호한 문장 또는 보기 배치를 강의에 맞게 보완했다. 원래 시험 문장과 동일한 복원으로 단정하지 않는다."
          },
          {
            "id": "signal-final-24-26",
            "qType": "mcq",
            "source": "24학번 · 26",
            "ref": "13주차(14장) PDF p.24–26",
            "pdfRefPage": 24,
            "pdfRefPages": [
              24,
              25,
              26
            ],
            "stem": "세포외 Ca²⁺에 의존하고, 세포질 쪽에서 catenin과 상호작용하는 세포 부착분자는?",
            "choices": [
              "selectin",
              "integrin",
              "cadherin",
              "immunoglobulin superfamily",
              "β-catenin"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] Cadherin은 calcium-dependent adhesion molecule에서 유래한 이름이다. 세포외 영역의 Ca²⁺ 결합은 접착 기능에 중요하고, 세포질 꼬리는 catenin을 통해 세포골격에 연결된다. Selectin도 Ca²⁺ 의존성이 있지만 catenin과 연결된다는 조건은 cadherin을 가리킨다."
          },
          {
            "id": "signal-final-24-27",
            "qType": "mcq",
            "source": "24학번 · 27",
            "ref": "13주차(14장) PDF p.27–28",
            "pdfRefPage": 27,
            "pdfRefPages": [
              27,
              28
            ],
            "stem": "강의 도식에 제시된 selectin과 대표 리간드의 연결로 올바른 것은?",
            "choices": [
              "P-selectin : sialyl Lewis X",
              "L-selectin : PSGL-1",
              "P-selectin : CD34",
              "E-selectin : sialyl Lewis X",
              "E-selectin : CD3X"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 27쪽의 대표 연결은 P-selectin–PSGL-1, E-selectin–sialyl Lewis X, L-selectin–CD34다. 이 표의 대응을 기준으로 E-selectin–sialyl Lewis X를 고른다. 이 문항의 대표 짝을 다른 생물학적 결합이 절대 불가능하다는 의미로 일반화하지 않는다.\n\n[복원 메모] 원본의 오기·모호한 문장 또는 보기 배치를 강의에 맞게 보완했다. 원래 시험 문장과 동일한 복원으로 단정하지 않는다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "sig-13-apoptosis",
        "chapter": "13주차 · 세포부착·Integrin·Cadherin·세포사멸",
        "title": "세포사멸(Apoptosis)·Caspase(DNA-PKcs)·Bcl-2·Fas/Cyt c",
        "pdfPages": [
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45
        ],
        "tags": [
          "13주차",
          "p.38-45",
          "Apoptosis",
          "necrosis",
          "Caspase",
          "DNA-PKcs"
        ],
        "summary": "<p>괴사(Necrosis)와 구분되는 <strong>세포자살(Apoptosis)</strong>의 형태적 특징, <strong>개시 Caspase(8,9,10) → 실행 Caspase(3,6,7)</strong> 연쇄 활성화와 표적(<strong>Lamin, ICAD → CAD DNA 절단, DNA-PKcs DNA 복구 차단</strong>), 그리고 <strong>외인성(Fas-FADD-Casp8) vs 내인성(Bid/Bax → 미토콘드리아 Cytochrome c → Apaf-1/Casp9, Bcl-2 억제)</strong> 경로를 다룹니다.</p>",
        "keyPoints": [
          "Caspase의 3대 표적: ① 핵 라민(Lamin) 분해, ② ICAD 분해로 CAD 활성화(DNA 단편화), ③ DNA-PKcs 분해(DNA 복구 차단)",
          "Bcl-2(t(14;18) 전위로 과발현 시 세포자살 억제 → 림프종) vs Bax/Bid(미토콘드리아 외막 구멍 형성)",
          "외인성 경로(FasL → Fas → FADD → Caspase-8)는 Bid 절단(t-Bid)을 통해 내인성 경로와 연결됨"
        ],
        "glossary": {
          "DNA-PKcs": "이중가닥 DNA 손상 복구에 관여하는 키나아제로, Caspase에 의해 분해되면 DNA 복구가 중단된다."
        },
        "pdfExcerpts": {
          "40": "Caspase 표적: Lamin 파괴, ICAD 파괴(CAD 활성화), DNA-PKcs 파괴(DNA repair 차단).",
          "41": "Bcl-2: t(14;18) 염색체 전위로 IgH 프로모터 아래 놓이면 과발현되어 세포자살을 억제.",
          "45": "Apoptosis 통합 경로: Death receptor(Casp-8) & Mitochondria(Cyt c-Apaf-1-Casp-9) → Casp-3/6/7."
        },
        "pastQuestions": [
          {
            "id": "signal-final-25-26",
            "qType": "mcq",
            "source": "25학번 · 26",
            "ref": "13주차(14장) PDF p.40",
            "pdfRefPage": 40,
            "pdfRefPages": [
              40
            ],
            "stem": "Caspase에 의해 DNA-PKcs가 분해될 때 직접적으로 나타나는 결과는?",
            "choices": [
              "DNA 이중가닥 복구 방해",
              "세포막 통로 열림",
              "NF-κB 활성화",
              "세포주기 G₀ 중지",
              "미토콘드리아 ATP 합성 촉진"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 40쪽은 DNA-dependent protein kinase 분해가 DNA 복구를 방해함을 제시한다. DNA-PKcs는 DNA 이중가닥 절단 복구와 관련된다. ICAD 분해에 따른 DNA 분해효소 활성화, lamin 분해에 따른 핵 구조 붕괴와 구분한다."
          },
          {
            "id": "signal-final-24-28",
            "qType": "mcq",
            "source": "24학번 · 28",
            "ref": "부분 근거 · 13주차(14장) PDF p.39–40",
            "pdfRefPage": 39,
            "pdfRefPages": [
              39,
              40
            ],
            "stem": "세포자살 과정에서 활성화된 caspase의 표적이 아닌 것을 고르시오.",
            "choices": [
              "Integrin",
              "Actin",
              "DNA-dependent protein kinase(DNA-PK)",
              "Nuclear lamina (lamin)",
              "Inhibitor of caspase-activated DNase (ICAD)"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 40쪽은 lamin 분해에 의한 핵 구조 붕괴, ICAD 분해에 의한 DNA 분해효소 활성화, DNA-PK 분해에 의한 DNA 복구 억제를 명시한다. 그러나 제시 보기의 integrin과 actin 중 하나만 비표적이라고 확정하는 설명은 없다. 강의에 예시가 없다는 사실만으로 비표적이라고 결론 내릴 수도 없다. 원본의 actin 정답을 확정하지 않고 검토 보류한다. 원문의 ‘표적세포’는 ‘표적 단백질’로 교정했다."
          },
          {
            "id": "signal-final-24-29",
            "qType": "mcq",
            "source": "24학번 · 29",
            "ref": "13주차(14장) PDF p.39",
            "pdfRefPage": 39,
            "pdfRefPages": [
              39
            ],
            "stem": "강의의 caspase 분류표에서 effector caspase에 해당하는 것은?",
            "choices": [
              "caspase-3",
              "caspase-8",
              "caspase-10",
              "caspase-1",
              "caspase-9"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 39쪽은 caspase-3·6·7을 effector로, caspase-8·9·10을 initiator로 표시하며 caspase-2는 initiator/effector로 함께 표시한다. 따라서 caspase-3가 있는 문항은 caspase-3, caspase-3 없이 caspase-2가 있는 23학번 문항은 강의표 기준으로 caspase-2를 고른다. 이는 해당 강의의 분류를 따른 판단이다."
          },
          {
            "id": "signal-final-23-29",
            "qType": "mcq",
            "source": "23학번 · 29",
            "ref": "13주차(14장) PDF p.39",
            "pdfRefPage": 39,
            "pdfRefPages": [
              39
            ],
            "stem": "강의의 caspase 분류표에서 effector caspase에 해당하는 것은?",
            "choices": [
              "caspase-1",
              "caspase-2",
              "caspase-8",
              "caspase-9",
              "caspase-10"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 39쪽은 caspase-3·6·7을 effector로, caspase-8·9·10을 initiator로 표시하며 caspase-2는 initiator/effector로 함께 표시한다. 따라서 caspase-3가 있는 문항은 caspase-3, caspase-3 없이 caspase-2가 있는 23학번 문항은 강의표 기준으로 caspase-2를 고른다. 이는 해당 강의의 분류를 따른 판단이다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "sig-14-inflammation-nfkb",
        "chapter": "14주차 · 세포부착분자·백혈구 유출",
        "title": "염증 매개자(LPS/TNF-α/Histamine)·내피세포 NF-κB 활성화",
        "pdfPages": [
          1,
          2,
          3,
          4,
          6
        ],
        "tags": [
          "14주차",
          "p.1-6",
          "염증",
          "LPS",
          "fMLP",
          "TNF"
        ],
        "summary": "<p>감염·손상 시 대식세포·비만세포 등에서 분비되는 <strong>염증 매개자(LPS, fMLP, TNF-α, IL-1β, Histamine)</strong>와, TNF-α 자극에 의해 내피세포에서 <strong>IKK → IκB 분해 → NF-κB 핵 이동</strong>이 일어나 <strong>E-selectin, ICAM-1, VCAM-1</strong> 발현이 유도되는 기작을 다룹니다.</p>",
        "keyPoints": [
          "TNF-α/IL-1β가 혈관 내피세포의 NF-κB를 활성화하여 백혈구 부착분자(Selectin, ICAM-1, VCAM-1) 발현 증가",
          "Histamine은 혈관 투과성 증가 및 P-selectin 표면 노출 촉진"
        ],
        "glossary": {
          "NF-κB": "염증 사이토카인 및 세포부착분자 유전자의 전사를 촉진하는 핵심 전사인자(평상시 IκB에 의해 세포질에 억제됨)."
        },
        "pdfExcerpts": {
          "3": "15장 염증 매개자: LPS, fMLP, TNF-α, IL-1β, histamine, MCP-1, IL-8, Gro.",
          "6": "내피세포 NF-κB: TNF-α → IKK 활성화 → IκB 인산화/분해 → NF-κB 핵 이동 → 부착분자 발현."
        },
        "pastQuestions": [
          {
            "id": "signal-final-25-35",
            "qType": "mcq",
            "source": "25학번 · 35",
            "ref": "14주차(세번째 수업) PDF p.6",
            "pdfRefPage": 6,
            "pdfRefPages": [
              6
            ],
            "stem": "NF-κB의 기능으로 가장 적절한 것은?",
            "choices": [
              "지방세포 성장",
              "신경세포 분화촉진",
              "세포자살 활성",
              "면역·염증 반응 조절",
              "뼈 형성 촉진"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 세번째 수업 6쪽은 TNF-α–NF-κB 경로와 내피세포 부착분자 발현 조절을 제시한다. NF-κB는 면역·염증 관련 유전자 발현에 관여한다. 신경세포 분화나 뼈 형성만을 전용 기능으로 보는 설명과 구분한다."
          },
          {
            "id": "signal-final-24-30",
            "qType": "mcq",
            "source": "24학번 · 30",
            "ref": "14주차(세번째 수업) PDF p.3–4",
            "pdfRefPage": 3,
            "pdfRefPages": [
              3,
              4
            ],
            "stem": "강의의 염증 반응 도식에 제시된 염증 매개체에 해당하지 않는 것은?",
            "choices": [
              "N-formylmethionyl peptide",
              "Histamine",
              "C5a",
              "MCP-1",
              "M-CSF"
            ],
            "answerIndex": 4,
            "answerIndices": null,
            "rationale": "[강의 기준] 14주차 도식과 본문에는 fMet-peptide, histamine, C5a, MCP-1 등이 염증 및 백혈구 이동의 매개체로 제시된다. M-CSF는 이 보기 중 해당 도식에 제시된 급성 염증 매개체가 아니다. M-CSF가 면역계에서 아무 역할도 하지 않는다는 뜻은 아니다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "sig-14-extravasation-chemokine",
        "chapter": "14주차 · 세포부착분자·백혈구 유출",
        "title": "백혈구 유출(4단계)·Chemokine(CC/CXC) 및 Integrin 활성화",
        "pdfPages": [
          5,
          7,
          8,
          9,
          10,
          11,
          12,
          13
        ],
        "tags": [
          "14주차",
          "p.5-13",
          "유출",
          "Rolling",
          "Selectin",
          "LFA-1"
        ],
        "summary": "<p>백혈구가 혈관에서 염증 조직으로 빠져나가는 <strong>4단계 유출(Rolling → Tight binding → Diapedesis → Migration)</strong>과 <strong>Chemokine(CC, CXC, C, CX3C)</strong>이 7TM GPCR을 통해 <strong>PLCβ(IP₃/DAG)·PI3Kγ·RhoA</strong>를 활성화하여 <strong>Integrin 친화도를 높이는(Inside-out signaling)</strong> 기작을 다룹니다.</p>",
        "keyPoints": [
          "1단계 Rolling: Selectin(E/P/L) ↔ s-Le^x(탄수화물) 약한 결합; 2단계 Tight binding: Integrin(LFA-1/VLA-4) ↔ ICAM-1/VCAM-1 강한 결합",
          "3단계 Diapedesis(혈관외 유주): 내피세포 간 CD31(PECAM-1) 관여; 4단계 Migration: 주화성 농도 구배 따라 이동",
          "Chemokine 분류: CC(MCP-1, RANTES — 주로 단핵구/림프구), CXC(IL-8, Gro — 주로 호중구)"
        ],
        "glossary": {
          "Leukocyte Extravasation": "혈류 내 백혈구가 내피세포를 따라 구르다 강하게 부착한 뒤 혈관 벽을 통과해 염증 부위로 이동하는 과정."
        },
        "pdfExcerpts": {
          "5": "백혈구 유출 4단계: Rolling(Selectin) → Tight binding(Integrin-ICAM) → Diapedesis(CD31) → Migration.",
          "10": "Chemokine 수용체(7TM GPCR): G단백질 활성화 → PLCβ(PIP₂ → IP₃+DAG), PI3Kγ, RhoA → Integrin 활성화."
        },
        "pastQuestions": [
          {
            "id": "signal-final-25-34",
            "qType": "mcq",
            "source": "25학번 · 34",
            "ref": "14주차(세번째 수업) PDF p.10–12",
            "pdfRefPage": 10,
            "pdfRefPages": [
              10,
              11,
              12
            ],
            "stem": "Chemokine 수용체의 G단백질 신호에 의해 PLC가 활성화된다. PLC가 PIP₂를 절단하여 생성하는 A와 B 중 A는 세포질 Ca²⁺ 증가에 관여하고, B는 C를 활성화한다. A–B–C의 올바른 조합은?",
            "choices": [
              "IP₃-cAMP-PK(protein kinase)A",
              "Diacylglycerol(DAG)-cAMP-PKC",
              "IP₃-DAG-PKC",
              "cAMP-DAG-PKC",
              "cAMP-IP₃-PKA"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] PLC는 PIP₂(phosphatidylinositol 4,5-bisphosphate)를 IP₃와 DAG로 가수분해한다. IP₃는 소포체의 IP₃ 수용체를 통해 Ca²⁺ 방출을 유도하고, DAG는 PKC 활성화에 관여한다. cAMP–PKA는 이 문항의 PLC 생성물 경로와 구분한다. Gα와 Gₒ의 혼재 등 원문의 하위 소단위체 표기는 강의의 공통 PLC 경로를 묻도록 보완했다.\n\n[복원 메모] 원본의 오기·모호한 문장 또는 보기 배치를 강의에 맞게 보완했다. 원래 시험 문장과 동일한 복원으로 단정하지 않는다."
          },
          {
            "id": "signal-final-24-31",
            "qType": "mcq",
            "source": "24학번 · 31",
            "ref": "14주차(세번째 수업) PDF p.4,7–9",
            "pdfRefPage": 4,
            "pdfRefPages": [
              4,
              7,
              8,
              9
            ],
            "stem": "염증 부위로 면역세포를 유도하는 chemokine에 해당하지 않는 것은?",
            "choices": [
              "MCP-1",
              "IL-8",
              "GRO1",
              "Ras",
              "MCP-2"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] MCP-1(CCL2), MCP-2(CCL8), GRO1(CXCL1), IL-8(CXCL8)은 chemokine이다. Ras는 세포 내 소형 GTP 결합 단백질이므로 분비성 주화성 사이토카인과 구분한다."
          },
          {
            "id": "signal-final-24-32",
            "qType": "mcq",
            "source": "24학번 · 32",
            "ref": "14주차(세번째 수업) PDF p.7–9",
            "pdfRefPage": 7,
            "pdfRefPages": [
              7,
              8,
              9
            ],
            "stem": "N말단 근처 cysteine의 배열에 따른 chemokine 분류에 속하지 않는 것은?",
            "choices": [
              "CX₃C chemokine",
              "CX₂C chemokine",
              "C chemokine",
              "CC chemokine",
              "CXC chemokine"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 강의는 C, CC, CXC, CX₃C 계열을 제시한다. X는 cysteine 사이의 다른 아미노산을 뜻한다. CX₂C는 이 강의에서 제시한 네 계열에 포함되지 않는다."
          }
        ],
        "aiQuestions": []
      }
    ]
  },
  {
    "id": "subj-biology",
    "name": "생물학",
    "engName": "General Biology · 기말고사 (21·26~30장)",
    "icon": "🧬",
    "color": "#10b981",
    "pdfName": "21·26·27·28·29·30장 PPT 필기본 PDF (총 168p)",
    "totalPages": 168,
    "concepts": [
      {
        "id": "bio-21-feeding-gi",
        "chapter": "21장 영양 및 소화",
        "title": "먹이 섭취 유형·소화의 4단계·소화관 vs 위수강·구강/식도",
        "pdfPages": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "tags": [
          "21장",
          "p.3-15",
          "섭취",
          "부유물",
          "덩어리",
          "기질"
        ],
        "summary": "<p>동물의 <strong>4가지 먹이 섭취 유형</strong>(부유물·기질·액체·덩어리 섭취자), 영양 처리 <strong>4단계(섭취·소화·흡수·제거)</strong>, <strong>위수강 vs 완전 소화관</strong>의 진화적 이점, 그리고 사람의 구강(침 아밀라아제)·인두·식도(연동운동)를 다룹니다.</p>",
        "keyPoints": [
          "사자·사람 등 큰 먹이를 삼키는 동물은 덩어리 섭취자(bulk feeder); 대왕고래·조개 등은 부유물 섭취자",
          "입과 항문이 분리된 완전 소화관은 한 방향 이동과 부위별 전문화(연속적 소화·흡수)가 가능",
          "식도는 교대 수축·이완하는 연동운동(peristalsis)으로 음식물을 위로 운반"
        ],
        "glossary": {
          "완전 소화관(Alimentary Canal)": "입과 항문 두 개의 구멍이 있어 음식물이 한 방향으로 이동하며 단계적으로 소화·흡수되는 관."
        },
        "pdfExcerpts": {
          "5": "먹이 섭취 유형: 부유물(고래), 기질(애벌레), 액체(모기/벌새), 덩어리(사자/비단뱀).",
          "8": "위수강(입=항문, 자포동물) vs 소화관(입≠항문, 부위별 특화 가능)."
        },
        "pastQuestions": [
          {
            "id": "bio-final-25-16",
            "qType": "short",
            "source": "25학번 · 16",
            "ref": "21장 PDF p.5",
            "pdfRefPage": 5,
            "pdfRefPages": [
              5
            ],
            "stem": "다음 먹이 섭취 유형의 연결 중 잘못된 부분을 바르게 쓰시오: ‘사자 – 부유물 섭취자’",
            "choices": [],
            "answerIndex": 0,
            "answerIndices": null,
            "shortAnswer": "덩어리 섭취자",
            "rationale": "[강의 기준] 원본에는 잘못된 연결과 정답 요지만 남아 있다. 사자는 큰 먹이 조각을 먹는 덩어리 섭취자이다. 다른 선지를 임의로 만들지 않고 단답형으로 변환했다."
          },
          {
            "id": "bio-final-25-17",
            "qType": "mcq",
            "source": "25학번 · 17",
            "ref": "21장 PDF p.8–9",
            "pdfRefPage": 8,
            "pdfRefPages": [
              8,
              9
            ],
            "stem": "위수강과 비교할 때 입과 항문이 분리된 소화관의 진화적 이점은?",
            "choices": [
              "구멍이 하나여서 구조가 단순하다.",
              "입과 항문이 분리되어 있어 먹이 섭취와 배출이 동시에 가능하다.",
              "부위별로 특수한 기능이 없다.",
              "역류가 자주 발생하여 소화 효율이 증가한다.",
              "먹이 섭취와 배출이 같은 구멍에서 일어난다."
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 입과 항문이 분리된 소화관은 먹이를 연속 처리할 수 있고 부위별 기능 분화가 가능하다."
          },
          {
            "id": "bio-final-24-2",
            "qType": "mcq",
            "source": "24학번 · 2",
            "ref": "21장 PDF p.5",
            "pdfRefPage": 5,
            "pdfRefPages": [
              5
            ],
            "stem": "다양한 유형의 먹이 섭취 방법 중 그림 속 생물의 유형은?",
            "choices": [
              "부유물 섭취자",
              "기질 섭취자",
              "덩어리 섭취자",
              "액체 섭취자",
              "해당 없음"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 그림은 입을 벌리고 물속의 먹이 입자를 걸러 먹는 가오리이다. 부유물 섭취에 해당한다. 원본 답 ②를 ①로 정정했다. 애벌레 등의 기질 섭취와 구별한다."
          },
          {
            "id": "bio-final-23-2",
            "qType": "mcq",
            "source": "23학번 · 2",
            "ref": "21장 PDF p.5",
            "pdfRefPage": 5,
            "pdfRefPages": [
              5
            ],
            "stem": "다음 그림의 동물에서 나타나는 먹이 섭취 방식으로 옳은 것은?",
            "choices": [
              "부유물 섭취자",
              "기질 섭취자",
              "액체 섭취자",
              "덩어리 섭취자",
              "답 없음"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 그림의 애벌레는 먹이인 잎 위에서 살며 먹이를 섭취하는 기질 섭취자이다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "bio-21-stomach-intestine",
        "chapter": "21장 영양 및 소화",
        "title": "위(펩신/HCl/궤양)·작은창자·간/이자·큰창자와 진화적 적응",
        "pdfPages": [
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24
        ],
        "tags": [
          "21장",
          "p.16-24",
          "위",
          "펩시노겐",
          "펩신",
          "HCl"
        ],
        "summary": "<p><strong>위</strong>의 위액 분비(주세포 펩시노겐, 벽세포 HCl, 점액세포 보호)와 <strong>H. pylori 위궤양</strong>, <strong>작은창자</strong>(이자 효소·간 쓸개즙 유화·융모/미세융모 흡수), <strong>간문맥</strong>, <strong>큰창자</strong>(수분 재흡수·비타민 K) 및 초식/육식동물 소화기관 비교를 다룹니다.</p>",
        "keyPoints": [
          "HCl이 비활성 펩시노겐을 활성 펩신으로 전환(자가촉매); 두꺼운 점액층이 위벽 보호",
          "쓸개즙은 효소가 아니라 지방을 작은 방울로 유화(emulsification)시켜 리파아제 작용 면적 확대",
          "초식동물은 식이섬유 발효를 위해 육식동물보다 긴 소화관과 큰 막창자(맹장)/반추위 발달"
        ],
        "glossary": {
          "간문맥": "작은창자 융모 모세혈관에서 흡수된 수용성 영양소(포도당, 아미노산 등)를 간으로 직접 운반하는 혈관."
        },
        "pdfExcerpts": {
          "16": "위(Stomach): 펩시노겐 + HCl → 펩신(단백질 분해), 점액층과 세포 재생으로 자가소화 방지.",
          "24": "진화적 적응: 초식동물은 셀룰로스 소화를 위해 소화관이 더 길고 미생물 공생 공간이 발달."
        },
        "pastQuestions": [
          {
            "id": "bio-final-25-18",
            "qType": "multi",
            "source": "25학번 · 18",
            "ref": "21장 PDF p.16",
            "pdfRefPage": 16,
            "pdfRefPages": [
              16
            ],
            "stem": "펩시노겐과 위의 보호 기작에 대한 설명 중 옳은 것을 모두 고르시오.\nㄱ. HCl은 펩시노겐을 펩신으로 전환한다.\nㄴ. 펩신은 탄수화물 분해 효소이다.\nㄷ. 펩시노겐은 비활성 형태로 분비되어 위벽 손상을 방지한다.\nㄹ. 점액은 위벽을 보호한다.",
            "choices": [
              "ㄱ",
              "ㄴ",
              "ㄷ",
              "ㄹ"
            ],
            "answerIndex": 0,
            "answerIndices": [
              0,
              2,
              3
            ],
            "rationale": "[강의 기준] 펩신은 단백질을 분해한다. 원본의 ㄱ·ㄷ·ㄹ을 유지하고, 사라진 조합형 선택지 대신 보기별 복수 선택형으로 보완했다."
          },
          {
            "id": "bio-final-25-19",
            "qType": "mcq",
            "source": "25학번 · 19",
            "ref": "21장 PDF p.24",
            "pdfRefPage": 24,
            "pdfRefPages": [
              24
            ],
            "stem": "초식동물과 육식동물의 소화기관을 비교한 설명 중 옳은 것을 모두 고른 것은?\nㄱ. 초식동물은 육식동물보다 일반적으로 소화관이 길다.\nㄴ. 초식동물은 셀룰로스를 분해하는 미생물이 사는 구획을 가진다.\nㄷ. 육식동물은 단백질 소화에 더 오래 걸리기 때문에 소화관이 더 짧다.\nㄹ. 초식성 먹이는 소화하기 어려워 초식동물의 소화관이 길다.",
            "choices": [
              "ㄱ·ㄴ",
              "ㄱ·ㄷ",
              "ㄴ·ㄹ",
              "ㄱ·ㄴ·ㄹ",
              "ㄱ·ㄴ·ㄷ·ㄹ"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 식물의 세포벽은 분해하기 어려워 초식동물은 일반적으로 긴 소화관과 공생 미생물을 가진다. 원문의 ‘셀룰로스 분해 성분’은 강의의 공생 미생물로 보완했다."
          },
          {
            "id": "bio-final-25-25",
            "qType": "mcq",
            "source": "25학번 · 25",
            "ref": "21장 PDF p.12–13·18·21 · 26장 PDF p.20–21",
            "pdfRefPage": 18,
            "pdfRefPages": [
              18,
              21
            ],
            "stem": "다음 중 옳지 않은 것은?",
            "choices": [
              "포도당의 소화는 입속 침샘 아밀레이스로부터 시작된다.",
              "작은창자의 융모와 미세융모는 표면적을 증가시킨다.",
              "흡수된 포도당은 간문맥을 지나 간으로 이동하여 혈당 조절을 받는다.",
              "제1형 당뇨 환자는 이자의 베타세포에서 인슐린을 생산하지 못한다",
              "제1형 당뇨 환자에게 글루카곤을 주사하면 혈당이 안정화될 것이다"
            ],
            "answerIndex": 4,
            "answerIndices": null,
            "rationale": "[강의 기준] ⑤의 글루카곤은 혈당을 올리므로 제1형 당뇨의 고혈당을 안정화하는 치료가 아니다. ①도 원문 그대로라면 틀리다. 포도당은 단당류로 소화가 필요 없고, 침 아밀레이스는 녹말을 분해한다. 원문을 보존하고 ①·⑤를 모두 인정한다."
          },
          {
            "id": "bio-final-23-3",
            "qType": "mcq",
            "source": "23학번 · 3",
            "ref": "21장 PDF p.22",
            "pdfRefPage": 22,
            "pdfRefPages": [
              22
            ],
            "stem": "작은창자에서 항문까지 내용물이 이동하는 순서로 옳은 것은?",
            "choices": [
              "결장 → 막창자 → 곧창자 → 항문",
              "곧창자 → 결장 → 막창자 → 항문",
              "곧창자 → 막창자 → 결장 → 항문",
              "막창자 → 결장 → 곧창자 → 항문",
              "막창자 → 곧창자 → 결장 → 항문"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 작은창자에서 나온 내용물은 막창자 → 결장 → 곧창자 → 항문 순으로 이동한다. 막창자와 결장, 곧창자는 큰창자에 속한다. 원문의 선택지에서 “큰창자”를 막창자·곧창자와 병렬로 쓴 부분은 “결장”으로 바로잡았다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "bio-21-nutrition",
        "chapter": "21장 영양 및 소화",
        "title": "대사율·필수 영양소(아미노산/지방산/비타민/무기질)·영양과 건강",
        "pdfPages": [
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37
        ],
        "tags": [
          "21장",
          "p.25-37",
          "대사율",
          "필수",
          "아미노산",
          "비타민"
        ],
        "summary": "<p>기초대사율(BMR), <strong>필수 아미노산(9종)과 필수 지방산</strong>, 수용성/지용성 <strong>비타민</strong>과 <strong>무기질</strong>의 역할, 그리고 비만·<strong>LDL(나쁜) vs HDL(좋은) 콜레스테롤</strong>과 심혈관 질환을 다룹니다.</p>",
        "keyPoints": [
          "지용성 비타민(A, D, E, K)은 체지방에 축적되므로 과잉 섭취 시 독성 가능; 수용성(B군, C)은 소변 배출",
          "LDL은 콜레스테롤을 혈관·조직으로 운반(동맥경화 위험↑), HDL은 간으로 회수"
        ],
        "glossary": {
          "필수 영양소": "생명 유지에 필요하지만 체내에서 합성할 수 없어 반드시 음식으로 섭취해야 하는 물질."
        },
        "pdfExcerpts": {
          "29": "필수 영양소: 필수 아미노산, 필수 지방산, 비타민(조효소 등), 무기질(Ca, Fe, I 등)."
        },
        "pastQuestions": [
          {
            "id": "bio-final-25-20",
            "qType": "mcq",
            "source": "25학번 · 20",
            "ref": "21장 PDF p.35",
            "pdfRefPage": 35,
            "pdfRefPages": [
              35
            ],
            "stem": "렙틴과 비만 연구에 대한 설명 중 옳은 것을 모두 고른 것은?\nㄱ. 렙틴은 지방세포에서 만들어지며 식욕을 억제한다.\nㄴ. 렙틴에 결함이 있는 생쥐는 비만해진다.\nㄷ. 비만인은 대부분 렙틴 유전자 돌연변이를 갖는다.\nㄹ. 렙틴 투여는 렙틴 유전자 돌연변이를 가진 어린이의 체중 감소에 효과적이다.",
            "choices": [
              "ㄱ·ㄴ",
              "ㄴ·ㄷ",
              "ㄴ·ㄷ·ㄹ",
              "ㄱ·ㄴ·ㄹ",
              "ㄱ·ㄴ·ㄷ·ㄹ"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 렙틴 유전자 돌연변이로 비만해지는 사람은 상대적으로 매우 적다. ㄱ·ㄴ·ㄹ이 옳다."
          },
          {
            "id": "bio-final-24-4",
            "qType": "mcq",
            "source": "24학번 · 4",
            "ref": "21장 PDF p.35",
            "pdfRefPage": 35,
            "pdfRefPages": [
              35
            ],
            "stem": "그림은 특정 호르몬이 결핍된 생쥐와 정상 생쥐를 비교한 것이다. A는 B에 비해 어떤 호르몬이 결핍되었을 가능성이 높은가?",
            "choices": [
              "렙틴",
              "인슐린",
              "그렐린",
              "글루카곤",
              "바소프레신"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 지방세포에서 분비되는 렙틴은 식욕을 억제한다. 렙틴 유전자에 결함이 있는 생쥐는 매우 비만해진다."
          },
          {
            "id": "bio-final-24-5",
            "qType": "mcq",
            "source": "24학번 · 5",
            "ref": "21장 PDF p.30",
            "pdfRefPage": 30,
            "pdfRefPages": [
              30
            ],
            "stem": "코엔자임 A의 성분으로, 결핍은 드물지만 부족하면 피로를 유발할 수 있는 비타민은?",
            "choices": [
              "비타민 B₁",
              "비타민 B₂",
              "비타민 B₃",
              "비타민 B₅",
              "비타민 B₆"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 비타민 B₅(판토텐산)는 코엔자임 A의 성분이다. 강의의 비타민 표를 기준으로 판정했다."
          },
          {
            "id": "bio-final-23-5",
            "qType": "mcq",
            "source": "23학번 · 5",
            "ref": "21장 PDF p.27–28",
            "pdfRefPage": 27,
            "pdfRefPages": [
              27,
              28
            ],
            "stem": "건강한 성인의 일반적인 분류에서 필수 아미노산 9종에 포함되지 않는 것은?",
            "choices": [
              "라이신",
              "아르지닌",
              "아이소류신",
              "메싸이오닌(메티오닌)",
              "트립토판"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 21장 27–28쪽의 필수 아미노산 설명과 그림에는 라이신·아이소류신·메싸이오닌·트립토판이 제시되고 아르지닌은 포함되지 않는다. 따라서 ②이다.\n\n[보충 설명] 아르지닌은 조건부 필수 아미노산으로 분류하며, 성장 상태 등에 따라 필요성이 달라질 수 있어 문항은 건강한 성인 기준으로 한정했다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "bio-26-mechanism-edc",
        "chapter": "26장 호르몬과 내분비계",
        "title": "내분비계 vs 신경계·수용성/지용성 호르몬·환경호르몬",
        "pdfPages": [
          3,
          4,
          5,
          6,
          7,
          8
        ],
        "tags": [
          "26장",
          "p.3-8",
          "수용성",
          "지용성",
          "막수용체",
          "세포 내 수용체"
        ],
        "summary": "<p>혈액을 통해 광범위·지속적으로 작용하는 <strong>내분비계</strong>, <strong>수용성 호르몬</strong>(막수용체 결합 → 세포질 신호전달, 빠른 반응)과 <strong>지용성 호르몬</strong>(세포막 통과 → 세포 내 수용체 결합 → 전사인자 작용, 느리지만 지속적)의 차이, 그리고 <strong>내분비계 교란물질(아트라진·BPA)</strong>을 다룹니다.</p>",
        "keyPoints": [
          "수용성 호르몬(아민·펩타이드): 막수용체 → 2차 전령(cAMP 등) → 효소 활성 변화",
          "지용성 호르몬(스테로이드·갑상선호르몬): 세포질/핵 수용체와 결합해 직접 유전자 전사 조절",
          "아트라진(제초제)은 개구리 수컷의 여성화 등 내분비 교란 유발"
        ],
        "glossary": {
          "내분비 교란물질(환경호르몬)": "체내 호르몬을 모방하거나 차단하여 정상 내분비 신호를 교란하는 외부 화학물질(아트라진, BPA 등)."
        },
        "pdfExcerpts": {
          "5": "호르몬 신호기작: 수용성(세포 표면 수용체 → 신호전달 연쇄) vs 지용성(핵 내 수용체 → 유전자 발현).",
          "7": "환경호르몬: 아트라진 노출 실험에서 양서류 생식기 이상 및 암컷화 관찰."
        },
        "pastQuestions": [
          {
            "id": "bio-final-24-8",
            "qType": "mcq",
            "source": "24학번 · 8",
            "ref": "26장 PDF p.7–8",
            "pdfRefPage": 7,
            "pdfRefPages": [
              7,
              8
            ],
            "stem": "그림의 아트라진 노출 실험에 대한 설명 및 분석으로 옳은 것은?",
            "choices": [
              "아트라진은 식품과 음료수병에 포함되어 있는 성분이다",
              "아트라진은 수컷 개구리의 포접 확률을 증가시킨다",
              "아트라진에 노출된 수컷 개구리는 테스토스테론 농도가 감소한다",
              "대조군은 아트라진에 노출되어 체중이 감소한 수컷 개구리이다",
              "아트라진은 환경호르몬으로 인해 인체 내에서 호르몬처럼 작용하는 유해물질이다"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 노출군은 테스토스테론과 포접 비율이 감소한다. 대조군은 아트라진에 노출되지 않았다. 식품·음료수 용기와 관련해 언급된 물질은 BPA이다. 원본의 27장 표기는 26장으로 바로잡았다."
          },
          {
            "id": "bio-final-23-7",
            "qType": "mcq",
            "source": "23학번 · 7",
            "ref": "26장 PDF p.4–6",
            "pdfRefPage": 4,
            "pdfRefPages": [
              4,
              5,
              6
            ],
            "stem": "다음 중 호르몬에 의한 신호 전달과 가장 관련이 없는 것은?",
            "choices": [
              "축삭",
              "혈류",
              "수용체",
              "분비소포",
              "내분비계(endocrine system)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 호르몬은 혈류를 통해 표적세포에 전달되어 수용체에 결합한다. 축삭은 신경세포의 전기 신호 전달 구조이다."
          },
          {
            "id": "bio-final-23-8",
            "qType": "mcq",
            "source": "23학번 · 8",
            "ref": "26장 PDF p.5–6",
            "pdfRefPage": 5,
            "pdfRefPages": [
              5,
              6
            ],
            "stem": "수용성/지용성 호르몬에 대한 설명으로 맞는 것은?",
            "choices": [
              "지용성 호르몬과 결합한 수용체 복합체는 전사 조절에 관여한다",
              "지용성 호르몬은 비교적 빠른 세포질 반응을 이끈다",
              "수용성 호르몬은 세포질 내의 핵수용체에 결합한다",
              "지용성 호르몬은 세포막 수용체 단백질에 결합한다",
              "수용성 호르몬은 비교적 느린 유전자 조절을 통한 단백질 합성을 조절한다"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 스테로이드 호르몬은 세포 내 수용체와 결합하여 유전자 발현을 조절한다. ‘호르몬 자체가 전사인자’라는 원문은 호르몬–수용체 복합체로 정밀하게 보완했다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "bio-26-glands-axis",
        "chapter": "26장 호르몬과 내분비계",
        "title": "시상하부-뇌하수체·갑상샘·부신·이자·생식소 호르몬",
        "pdfPages": [
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24
        ],
        "tags": [
          "26장",
          "p.9-24",
          "시상하부",
          "뇌하수체",
          "갑상샘",
          "저하증"
        ],
        "summary": "<p><strong>시상하부-뇌하수체</strong>(후엽: 옥시토신/ADH; 전엽: TSH/ACTH/FSH/LH/GH/프로락틴)와 음성피드백, <strong>갑상샘(항진증 vs 저하증)</strong>, <strong>혈당 조절(인슐린/글루카곤) 및 당뇨병</strong>, <strong>부신(속질 에피네프린 vs 겉질 코르티코이드)</strong>, <strong>프로락틴의 진화적 다기능</strong>을 다룹니다.</p>",
        "keyPoints": [
          "갑상샘 저하증(체중↑·무기력·추위 민감) vs 항진증(체중↓·발한·불안·안구돌출); 요오드 결핍 시 둘 다 갑상샘종 가능",
          "제1형 당뇨(β세포 파괴로 인슐린 부족) vs 제2형 당뇨(표적세포 인슐린 저항성)",
          "프로락틴은 사람 젖 분비·비인간 포유류 둥지 짓기, 조류 지방대사·생식 조절, 양서류 물 이동·변태, 어류 삼투조절 등 종마다 다양한 기능 수행"
        ],
        "glossary": {
          "음성 피드백": "표적 샘에서 분비된 호르몬(예: T₃/T₄)이 시상하부와 뇌하수체 전엽을 억제해 항상성을 유지하는 조절 기작."
        },
        "pdfExcerpts": {
          "15": "갑상샘 이상: 갑상샘종, 기능 저하증 vs 항진증 증상 비교.",
          "23": "프로락틴(PRL): 척추동물 계통에 따라 젖 분비, 모성 행동, 수분/염분 균형 등 다양한 역할."
        },
        "pastQuestions": [
          {
            "id": "bio-final-25-29",
            "qType": "mcq",
            "source": "25학번 · 29",
            "ref": "26장 PDF p.23",
            "pdfRefPage": 23,
            "pdfRefPages": [
              23
            ],
            "stem": "프로락틴의 다양한 기능에 대해 옳지 않은 것은?",
            "choices": [
              "사람의 젖샘의 성장을 자극하고 젖 분비를 촉진한다.",
              "사람을 제외한 포유류에서 둥지를 짓도록 자극한다.",
              "조류에서 지방대사 및 생식을 조절한다.",
              "양서류가 변태를 하지 않고 육지에 머물게 한다.",
              "연어와 같은 회유성 어류에서는 아가미와 콩팥에서 염분과 수분을 조절한다."
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 프로락틴은 양서류가 부화 준비를 위해 물 쪽으로 이동하도록 자극하고, 어류에서 염분·수분 조절에 관여한다. 원문의 ‘육지에 머문다’는 설명이 틀리다."
          },
          {
            "id": "bio-final-24-6",
            "qType": "mcq",
            "source": "24학번 · 6",
            "ref": "26장 PDF p.10·13·15",
            "pdfRefPage": 10,
            "pdfRefPages": [
              10,
              13,
              15
            ],
            "stem": "뼈의 형성에 관여하는 호르몬은?",
            "choices": [
              "갑상샘 호르몬, 부신겉질 호르몬",
              "부신겉질 호르몬, 칼시토닌",
              "멜라토닌, 칼시토닌",
              "갑상샘 호르몬, 칼시토닌",
              "멜라토닌, 갑상샘 호르몬"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 강의의 내분비샘 표에서 갑상샘 호르몬은 정상적인 성장과 성숙, 칼시토닌은 혈중 칼슘 감소 및 뼈로의 칼슘 침착과 관련된다."
          },
          {
            "id": "bio-final-23-6",
            "qType": "mcq",
            "source": "23학번 · 6",
            "ref": "26장 PDF p.12–13·23",
            "pdfRefPage": 12,
            "pdfRefPages": [
              12,
              13,
              23
            ],
            "stem": "A는 뇌하수체 후엽, B는 뇌하수체 전엽이다. 분비 호르몬과 기능을 바르게 연결한 것은?",
            "choices": [
              "A 난포자극호르몬 – 난포 성숙 및 난포호르몬 분비 촉진",
              "B 프로락틴 – 유즙 분비 촉진",
              "A 항이뇨 호르몬 – 수분 분비 촉진",
              "B 갑상선 호르몬 – T₃, T₄ 분비 촉진",
              "A 옥시토신 – 유즙 생성 촉진"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 전엽의 프로락틴은 유즙 생성을 촉진한다. 후엽은 시상하부에서 만든 ADH와 옥시토신을 저장·방출한다. 옥시토신은 유즙 분출을 촉진한다."
          },
          {
            "id": "bio-final-23-10",
            "qType": "mcq",
            "source": "23학번 · 10",
            "ref": "부분 근거 · 26장 PDF p.15–16",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15,
              16
            ],
            "stem": "다음 중 갑상선 기능 저하증과 항진증에서 공통적으로 나타나는 증상은?",
            "choices": [
              "고혈압",
              "체중 감소",
              "갑상선종",
              "무기력증",
              "과열 및 과민증"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 26장 16쪽은 기능 항진증과 저하증의 증상을 비교하고, 요오드 결핍에 의한 갑상샘종을 설명한다.\n\n[보충 설명] 갑상샘종은 갑상샘이 커진 상태이며 기능 저하와 일부 기능 항진 상태 모두에서 나타날 수 있으므로 ③이 가장 적절하다. 두 상태 모두에서 반드시 나타나는 증상이라는 뜻은 아니다. 이 공통성 자체는 강의 본문에 직접 명시되어 있지 않다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "bio-27-repro",
        "chapter": "27장 생식과 배 발생",
        "title": "무성/유성생식·남녀 생식계·배우자 형성·생식주기",
        "pdfPages": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
        ],
        "tags": [
          "27장",
          "p.1-10",
          "무성생식",
          "유성생식",
          "정자",
          "난자"
        ],
        "summary": "<p><strong>무성생식(출아·분열·분절·재생) vs 유성생식</strong>, 여성 생식계(난소 난포·자궁관·자궁)와 남성 생식계(정소·부정소·정관·<strong>정낭/전립샘/망울요도샘</strong>), <strong>정자형성과정 vs 난자형성과정</strong>(제1/제2 극체, 정자 수정 시 제2감수분열 완성), 그리고 <strong>난소주기-월경주기</strong>의 호르몬(FSH/LH/에스트로젠/프로게스테론) 조절을 다룹니다.</p>",
        "keyPoints": [
          "전립샘(정액이 굳는 것을 막아 액체 상태 유지, 운동성 돕는 액 분비) vs 정낭(정액 약 70%, 영양분 공급) vs 망울요도샘(윤활·요도 산도 중화)",
          "정자형성: 사춘기 이후 끊임없이 4개의 반수체 정자 생성; 난자형성: 제2 난모세포(제2감수분열 중기 정지) 상태로 배란되며 정자 침입 시 완성",
          "배란 직전 고농도 에스트로젠의 양성 피드백 → LH 급상승(LH surge) → 배란 및 황체 형성"
        ],
        "glossary": {
          "황체(Corpus Luteum)": "배란 후 파열된 난포가 변하여 프로게스테론과 에스트로젠을 분비해 자궁내막을 유지하는 구조."
        },
        "pdfExcerpts": {
          "8": "남성 부속샘: 정낭(70%, 영양), 전립샘(정액 응고 방지/운동성), 망울요도샘(윤활/중화).",
          "9": "정자형성(4개 정자) vs 난자형성(1개 성숙 난자 + 제1·2 극체, 불균등 세포질 분열).",
          "10": "생식주기: 난소주기(난포기-배란-황체기)와 자궁주기(월경기-증식기-분비기)의 통합."
        },
        "pastQuestions": [
          {
            "id": "bio-final-25-26",
            "qType": "mcq",
            "source": "25학번 · 26",
            "ref": "27장 PDF p.9",
            "pdfRefPage": 9,
            "pdfRefPages": [
              9
            ],
            "stem": "정자 형성 과정과 난자 형성 과정의 비교 중 옳은 것은?",
            "choices": [
              "정자형성 과정 중 제1정모세포는 감수분열을 거쳐 2개의 반수체 세포를 만든다",
              "매달 여러 개의 난자가 성숙된다",
              "제2난모세포는 정자를 만나기 전 이미 성숙해 있다",
              "정자 형성 과정은 정소에서 끊임없이 일어난다",
              "반수체 난자의 핵과 2배체 정자의 핵이 만나 접합체를 형성한다"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 27장 9쪽은 제1정모세포가 감수분열을 거쳐 4개의 반수체 세포를 형성하고, 정소에서 지속적으로 만들어진다고 설명한다. 이 문항의 감수분열은 전체 과정을 뜻하므로 ①의 “2개”는 틀리고 ④가 옳다. 난자와 정자의 핵은 모두 반수체이다.\n\n[정답 정정] 원본 기록 ①을 강의 내용에 따라 ④로 정정했다."
          },
          {
            "id": "bio-final-24-1",
            "qType": "mcq",
            "source": "24학번 · 1",
            "ref": "27장 PDF p.9",
            "pdfRefPage": 9,
            "pdfRefPages": [
              9
            ],
            "stem": "난소의 난포 발달 과정에 대해 옳은 것은?",
            "choices": [
              "출생 직후에는 감수분열이 시작되지 않는다",
              "사춘기 이전에는 난포의 성숙이 일어나지 않는다",
              "배란 때 제1감수분열이 완료된 난포세포가 방출된다",
              "정자를 만나지 않으면 제2감수분열이 완료되지 않는다",
              "폐경 이후에도 난포의 발달이 계속된다"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 27장 9쪽의 난자 형성 그림에서는 제1난모세포가 출생 전에 만들어지고, 사춘기 이후 난포의 주기적인 성숙이 진행된다. 배란된 제2난모세포는 정자와 만나야 제2감수분열을 완료한다. 따라서 ④가 옳으며, ②를 성숙 난포로의 주기적 발달을 뜻하는 것으로 읽으면 역시 옳다.\n\n[원문 검토] 원본의 “난포의 성숙”이라는 넓은 표현을 보존하고 ②·④를 모두 정답으로 인정한다. ③의 난포세포는 난모세포와 구별해야 한다."
          },
          {
            "id": "bio-final-24-10",
            "qType": "mcq",
            "source": "24학번 · 10",
            "ref": "27장 PDF p.4–5",
            "pdfRefPage": 4,
            "pdfRefPages": [
              4,
              5
            ],
            "stem": "개체와 생식 방법의 연결 중 틀린 것은?",
            "choices": [
              "효모 – 출아",
              "지렁이 – 분열",
              "투구게 – 유성생식",
              "말미잘 – 유성생식",
              "말미잘 – 분절"
            ],
            "answerIndex": 4,
            "answerIndices": null,
            "rationale": "[강의 기준] 27장 4쪽 필기는 분열의 예로 말미잘을, 분절의 예로 지렁이 등을 구분하여 제시한다. 이 구분을 적용하면 ② “지렁이–분열”과 ⑤ “말미잘–분절”이 모두 틀린 연결이다. 효모는 출아의 예이며, 말미잘은 유성생식도 한다.\n\n[원문 검토] 원본에는 ⑤만 정답으로 기록되어 있으나 강의의 용어 구분에 따라 ②·⑤를 모두 정답으로 인정한다."
          },
          {
            "id": "bio-final-24-11",
            "qType": "mcq",
            "source": "24학번 · 11",
            "ref": "27장 PDF p.8",
            "pdfRefPage": 8,
            "pdfRefPages": [
              8
            ],
            "stem": "그림에서 정자가 정소를 떠난 후 발달·성숙하는 장소는?",
            "choices": [
              "그림의 ①",
              "그림의 ②",
              "그림의 ③",
              "그림의 ④",
              "그림의 ⑤"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 정자는 부정소(부고환)에서 성숙한다. 원문에 남아 있는 그림의 번호를 보기에 연결해 ③으로 표기했다. (참고: 강의 슬라이드 27장 p.8 그림 번호 기준 ②가 부정소이나 원 시험지 그림 번호에 따라 ③ 표기 유지)"
          },
          {
            "id": "bio-final-24-12",
            "qType": "mcq",
            "source": "24학번 · 12",
            "ref": "27장 PDF p.10",
            "pdfRefPage": 10,
            "pdfRefPages": [
              10
            ],
            "stem": "월경 주기에 따른 호르몬 및 자궁·난소의 변화에 대한 설명으로 옳지 않은 것은?",
            "choices": [
              "배란 전기에 난포자극호르몬이 분비되어 난포 성숙을 촉진한다",
              "배란 전기에 에스트로겐의 음성 되먹임으로 황체형성호르몬과 난포자극호르몬의 분비가 억제된다",
              "배란 시에는 에스트로겐이 감소하며 최고치에 달한 황체형성호르몬에 의해 배란이 유도된다",
              "배란 후기에 프로게스테론과 에스트로겐에 의해 자궁내막이 두껍게 유지된다",
              "착상되지 않으면 황체형성호르몬 분비가 중지되고 자궁내막이 붕괴되어 월경이 시작된다"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 27장 10쪽은 난포 발달과 배란, 황체의 호르몬 분비 감소 및 월경의 관계를 설명한다.\n\n[검토 보류] 원본 기록 답은 ③이다. 그러나 배란을 유도하는 높은 에스트로겐과 LH 급증의 관계와, 에스트로겐 최고점 이후의 감소를 구별해야 하므로 “배란 시 에스트로겐이 감소한다”만으로 ③을 틀렸다고 단정하기 어렵다. ②의 “배란 전기”와 ⑤의 “LH 분비 중지”도 시기·표현이 불명확하다. 강의자료만으로 이 문항의 유일한 오답을 확정하기 어려워 자동 채점에서 제외한다."
          },
          {
            "id": "bio-final-23-11",
            "qType": "short",
            "source": "23학번 · 11",
            "ref": "부분 근거 · 27장 PDF p.8",
            "pdfRefPage": 8,
            "pdfRefPages": [
              8
            ],
            "stem": "정자가 활발히 운동하도록 돕고 정액의 액체 상태 유지에 관여하는 액을 분비하는 샘은?",
            "choices": [],
            "answerIndex": 0,
            "answerIndices": null,
            "shortAnswer": "전립샘",
            "rationale": "[강의 기준] 27장 8쪽은 정낭·전립샘·망울요도샘이 정액에 기여한다고 설명한다.\n\n[학습용 복원] 원본에는 생식기관 그림과 ② 정소라는 선지 일부만 남아 있어 전립샘을 묻는 단답형으로 보완했다. 원문의 영양 공급과 액화 기능을 혼합한 표현을 정리했다.\n\n[보충 설명] 정액의 액화는 전립샘 분비물의 효소와 관련된다. 이 효소 기능은 강의 본문에서 직접 확인되지 않아 보충 설명으로 구분한다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "bio-27-dev",
        "chapter": "27장 생식과 배 발생",
        "title": "수정·분할·낭배형성(3배엽)·기관형성·호미오유전자·배외막·분만",
        "pdfPages": [
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25
        ],
        "tags": [
          "27장",
          "p.11-25",
          "수정",
          "첨체",
          "분할",
          "포배"
        ],
        "summary": "<p>정자의 첨체 반응과 다수정 방지, <strong>분할(세포 크기 증가 없이 세포 수만 증가 → 포배)</strong>, <strong>낭배형성과 3배엽(외·중·내배엽)</strong>, <strong>기관형성(척삭·신경관·체절)</strong>, <strong>유도와 아폽토시스</strong>(손가락 사이 제거), <strong>호미오 유전자</strong>(패턴형성), <strong>4가지 배외막(양막·융모막·난황주머니·요막)과 태반</strong>, 그리고 <strong>분만(에스트로젠·옥시토신·프로스타글란딘 양성 피드백)</strong>을 다룹니다.</p>",
        "keyPoints": [
          "3배엽 유래: 외배엽(표피·신경계·눈 각막/수정체), 내배엽(소화관·호흡기 상피·간·이자·갑상샘), 중배엽(뼈대·근육·순환·배설·생식계)",
          "호미오 유전자(Homeotic gene): 초파리부터 마우스까지 보존된 패턴형성 유전자로 기관·부속지의 위치 정체성 결정",
          "배외막 중 융모막(Chorion)의 융모막 융모가 자궁내막과 함께 태반을 형성해 모체와 기체·영양분 교환; 분만 시 프로게스테론은 감소하고 옥시토신·에스트로젠·프로스타글란딘 증가"
        ],
        "glossary": {
          "융모막(Chorion)": "배외막 중 가장 바깥쪽 막으로 태반의 태아 측 부분을 형성해 모체 혈액으로부터 산소와 영양분을 흡수한다."
        },
        "pdfExcerpts": {
          "14": "분할(Cleavage): 세포 전체 크기 변화 없이 세포 수만 늘고 각 세포는 작아져 포배(blastula) 형성.",
          "15": "표 27.11 3배엽 유래 기관: 외배엽(신경·표피), 내배엽(소화·호흡 내벽/간/이자), 중배엽(근육·뼈·순환·배설).",
          "20": "배외막 4종: 양막(양수 보호), 융모막(태반·가스/영양 교환), 난황주머니(초기 혈구), 요막(탯줄 혈관/노폐물).",
          "24": "분만(Labor): 에스트로젠(옥시토신 수용체 유도) + 옥시토신 + 프로스타글란딘 양성 피드백; 프로게스테론 감소."
        },
        "pastQuestions": [
          {
            "id": "bio-final-25-27",
            "qType": "multi",
            "source": "25학번 · 27",
            "ref": "27장 PDF p.14–15",
            "pdfRefPage": 14,
            "pdfRefPages": [
              14,
              15
            ],
            "stem": "배 발생에 대한 설명 중 옳은 것을 모두 고르시오.\nㄱ. 분할 시 세포 수는 늘고 각 세포는 작아진다.\nㄴ. 외배엽에서 소화관이 형성된다.\nㄷ. 중배엽에서 근육과 뼈가 형성된다.\nㄹ. 내배엽에서 피부와 신경계가 형성된다.\nㅁ. 3배엽은 분할 단계에서 형성되지 않는다.",
            "choices": [
              "ㄱ",
              "ㄴ",
              "ㄷ",
              "ㄹ",
              "ㅁ"
            ],
            "answerIndex": 0,
            "answerIndices": [
              0,
              2,
              4
            ],
            "rationale": "[강의 기준] 3배엽은 분할이 아닌 낭배형성 중 생긴다. 피부의 표피와 신경계는 외배엽 유래다. 원본 답 ㄱ·ㄷ·ㄹ은 ㄱ·ㄷ·ㅁ으로 정정했다. 조합 선지 미복원으로 보기별 복수 선택형을 사용한다."
          },
          {
            "id": "bio-final-25-28",
            "qType": "mcq",
            "source": "25학번 · 28",
            "ref": "27장 PDF p.18",
            "pdfRefPage": 18,
            "pdfRefPages": [
              18
            ],
            "stem": "배 발생에서 호미오 유전자 X를 결손시켰더니 체절 위치와 부속지의 정체성에 이상이 생겼지만 세포 분열은 정상적이었다. X를 다른 부위에서 발현시키면 그 부위에 이상 구조가 생겼다. 타당한 추론은?",
            "choices": [
              "X는 낭배형성 과정에서 세포 이동을 직접 조절한다.",
              "X는 패턴 발현을 조절한다.",
              "X는 외배엽, 중배엽, 내배엽의 발현을 억제한다.",
              "X는 분할 과정에서 중요한 역할을 한다.",
              "X의 발현 위치는 배의 화학 물질 기울기와 상관없다."
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 호미오 유전자는 기관과 조직이 제자리에 형성되는 패턴 형성에 관여한다. 원문은 초파리에 척삭·신경관을 혼합하고 ‘발생’을 ‘발현’으로 잘못 썼다. 강의 27.14에 맞춰 모순된 조건을 제거한 학습용 보완 문항이다."
          },
          {
            "id": "bio-final-24-3",
            "qType": "mcq",
            "source": "24학번 · 3",
            "ref": "27장 PDF p.16",
            "pdfRefPage": 16,
            "pdfRefPages": [
              16
            ],
            "stem": "척추동물의 초기 발생 과정에서 형성되는 구조에 대한 설명으로 옳은 것은?",
            "choices": [
              "신경관은 척삭 아래에서 발달하여 뇌가 된다",
              "체절은 척삭과 평행하게 형성되는 단일한 구조물이다",
              "척삭은 대부분의 척삭동물에서 영구적으로 유지된다",
              "체강은 나중에 근육과 뼈를 형성하는 데 기여한다",
              "척삭은 몸의 중심축을 형성하고 나중에 척추로 대체된다"
            ],
            "answerIndex": 4,
            "answerIndices": null,
            "rationale": "[강의 기준] 강의에서는 척삭이 중심축을 형성하고 대부분의 척삭동물에서 나중에 척추로 대체된다고 설명한다. 신경관은 척삭 위, 체절은 양옆에 쌍으로 형성된다."
          },
          {
            "id": "bio-final-24-7",
            "qType": "mcq",
            "source": "24학번 · 7",
            "ref": "27장 PDF p.21",
            "pdfRefPage": 21,
            "pdfRefPages": [
              21
            ],
            "stem": "성체의 모든 구조가 초보적인 형태로 존재하며, 길이가 약 4 cm로 배아에서 태아로 넘어가는 시기는? (수정 후 경과 기준)",
            "choices": [
              "수정 후 4주",
              "수정 후 8주",
              "수정 후 14주",
              "수정 후 14주",
              "수정 후 40주"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 강의는 수정 후 약 8주령의 배를 태아라고 부른다고 설명한다. 산과에서 마지막 월경일로 계산하는 임신 주수와 혼동하지 않도록 수정 후 경과 기준을 명시했다. 원문 선지 ③·④의 14주 중복은 보존했다."
          },
          {
            "id": "bio-final-24-14",
            "qType": "mcq",
            "source": "24학번 · 14",
            "ref": "27장 PDF p.20",
            "pdfRefPage": 20,
            "pdfRefPages": [
              20
            ],
            "stem": "그림 속 배외막 중 조혈 기능을 수행하는 것은?",
            "choices": [
              "그림의 ①",
              "그림의 ②",
              "그림의 ③",
              "그림의 ④",
              "그림의 ⑤"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 난황주머니(난황낭)는 초기 조혈과 관련된다. 남아 있는 원본 그림의 ④가 난황주머니이다. 문항의 번호형 보기를 그림에 맞춰 보완했다."
          },
          {
            "id": "bio-final-24-15",
            "qType": "mcq",
            "source": "24학번 · 15",
            "ref": "27장 PDF p.24",
            "pdfRefPage": 24,
            "pdfRefPages": [
              24
            ],
            "stem": "분만 과정에서 나타나는 변화가 아닌 것은?",
            "choices": [
              "자궁내막의 탈락",
              "옥시토신 작용 향상",
              "에스트로겐 작용 증가",
              "프로게스테론 분비 감소에 의한 자궁 연화 증가",
              "프로스타글란딘 감소에 의한 자궁 수축 증가"
            ],
            "answerIndex": 4,
            "answerIndices": null,
            "rationale": "[강의 기준] 프로스타글란딘 증가는 자궁 수축을 촉진하므로 ⑤(프로스타글란딘 감소)는 틀리다. ①의 자궁내막 탈락은 강의 슬라이드(27장 p.24)에서 분만 시 탈락막(산모의 자궁내막)이 밖으로 빠져나가는 과정으로 명시되어 있으므로 ⑤만 단독 정답이다."
          },
          {
            "id": "bio-final-23-13",
            "qType": "mcq",
            "source": "23학번 · 13",
            "ref": "27장 PDF p.15",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15
            ],
            "stem": "다음 중 3배엽으로부터 생성되는 기관과 조직이 바르게 짝지어진 것은?",
            "choices": [
              "외배엽 – 근육계",
              "내배엽 – 생식계",
              "내배엽 – 순환계",
              "중배엽 – 배설계",
              "중배엽 – 부갑상선"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 중배엽에서는 근육·뼈·순환계·배설계·생식계 등이 형성된다. 표피와 신경계는 외배엽, 소화관 상피와 부속샘 등은 내배엽에서 유래한다."
          },
          {
            "id": "bio-final-23-14",
            "qType": "mcq",
            "source": "23학번 · 14",
            "ref": "27장 PDF p.20",
            "pdfRefPage": 20,
            "pdfRefPages": [
              20
            ],
            "stem": "태반의 일부를 형성하며 태아와 모체 사이 기체·영양분 교환에 관여하는 배외막은?",
            "choices": [
              "양막",
              "양수",
              "융모막",
              "난황주머니",
              "요막"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 융모막과 그 융모가 태반의 태아 쪽 구조를 형성한다. 원문의 ‘태반으로부터 발달’은 발생 방향이 뒤바뀌어 바로잡았다."
          },
          {
            "id": "bio-final-23-15",
            "qType": "mcq",
            "source": "23학번 · 15",
            "ref": "27장 PDF p.24",
            "pdfRefPage": 24,
            "pdfRefPages": [
              24
            ],
            "stem": "분만 시 작용이 증가하는 물질을 모두 고른 것은?\n가. 옥시토신\n나. 에스트로겐\n다. 프로게스테론\n라. 프로스타글란딘",
            "choices": [
              "가",
              "가·나",
              "가·나·다",
              "가·나·라",
              "가·나·다·라"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 강의의 분만 모형에서 에스트로겐은 자궁의 옥시토신 반응성을 높이고 옥시토신·프로스타글란딘은 수축을 촉진한다. 프로게스테론 작용은 감소한다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "bio-28-neuron-ap",
        "chapter": "28장 신경계",
        "title": "뉴런 구조(수초/다발성경화증)·휴지전위·활동전위",
        "pdfPages": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14
        ],
        "tags": [
          "28장",
          "p.3-14",
          "뉴런",
          "슈반세포",
          "수초",
          "란비에르"
        ],
        "summary": "<p>감각-연합-운동 뉴런과 무릎반사, <strong>슈반세포·수초·란비에르 마디</strong>(도약전도) 및 수초 손상 질환인 <strong>다발성 경화증</strong>, <strong>Na⁺-K⁺ 펌프(3 Na⁺ 밖, 2 K⁺ 안)</strong>가 만드는 휴지전위(-70 mV), 그리고 <strong>활동전위(탈분극 Na⁺ 유입 → 재분극 K⁺ 유출)</strong>를 다룹니다.</p>",
        "keyPoints": [
          "다발성 경화증: 중추신경계 수초(myelin sheath)의 자가면역성 파괴로 전도 속도 저하",
          "활동전위는 역치(-55 mV) 이상에서 실무율(all-or-none)로 발생하며 불응기 때문에 한 방향으로만 전도",
          "Na⁺-K⁺ 펌프는 ATP 1분자 소모당 Na⁺ 3개를 밖으로, K⁺ 2개를 안으로 능동수송"
        ],
        "glossary": {
          "도약 전도": "수초로 절연된 축삭에서 활동전위가 란비에르 마디에서 다음 마디로 건너뛰며 빠르게 전도되는 현상."
        },
        "pdfExcerpts": {
          "8": "수초와 다발성 경화증: 수초가 손상되면 신경 신호 전도가 느려지거나 차단된다.",
          "11": "휴지전위(-70 mV): Na⁺-K⁺ 펌프와 K⁺ 누출 통로에 의한 이온 농도 구배 유지.",
          "12": "활동전위 단계: 휴지상태 → 탈분극(전압 개폐 Na⁺ 통로 열림) → 재분극(K⁺ 통로 열림) → 과분극."
        },
        "pastQuestions": [
          {
            "id": "bio-final-25-6",
            "qType": "mcq",
            "source": "25학번 · 6",
            "ref": "28장 PDF p.8",
            "pdfRefPage": 8,
            "pdfRefPages": [
              8
            ],
            "stem": "다음 중 다발성 경화증의 가장 직접적인 원인으로 알맞은 것은?",
            "choices": [
              "신경세포체 파괴",
              "바닥핵 퇴화",
              "수초 파괴",
              "란비에르마디 절단",
              "뉴런 내부 타우 단백질 다발"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 다발성 경화증은 중추신경계의 수초 손상으로 신호 전도가 방해되는 질환이다."
          },
          {
            "id": "bio-final-25-8",
            "qType": "mcq",
            "source": "25학번 · 8",
            "ref": "28장 PDF p.12",
            "pdfRefPage": 12,
            "pdfRefPages": [
              12
            ],
            "stem": "다음 중 ③에서 나타나는 현상을 고르시오.",
            "choices": [
              "K⁺ 이온 통로가 열린다.",
              "Na⁺ 이온 통로가 열린다.",
              "K⁺ 이온 통로와 Na⁺ 이온 통로가 모두 닫힌다.",
              "K⁺ 이온 통로와 Na⁺ 이온 통로가 모두 열린다.",
              "뉴런 내부가 외부보다 음전하가 많아진다."
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] ③은 탈분극 상승기이다. 전압 개폐성 Na⁺ 통로가 열려 Na⁺가 세포 안으로 유입된다. 원본에 답·선지까지 포함된 그림 대신 동일 도식의 24학번 그림 부분을 사용했다."
          },
          {
            "id": "bio-final-25-9",
            "qType": "mcq",
            "source": "25학번 · 9",
            "ref": "28장 PDF p.11–12",
            "pdfRefPage": 11,
            "pdfRefPages": [
              11,
              12
            ],
            "stem": "Na⁺–K⁺ 펌프의 기능으로 옳은 것은?",
            "choices": [
              "K⁺ 3개를 밖으로, Na⁺ 2개를 안으로 이동시킨다",
              "ATP를 이용해 Na⁺ 3개를 밖으로, K⁺ 2개를 안으로 이동시켜 이온 농도 기울기와 안정막전위 유지에 기여한다",
              "ATP 없이 Na⁺와 K⁺를 수동으로 이동시킨다",
              "활동전위 발생 시 Na⁺의 유입을 직접 촉진한다",
              "세포 안팎 Na⁺와 K⁺의 농도를 같게 하여 막전위를 0 mV로 유지한다"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 원본 ②의 생략된 문장을 강의로 보완하고, 원본 답 ④를 ②로 정정했다. 활동전위의 빠른 Na⁺ 유입은 Na⁺ 통로의 작용이다."
          },
          {
            "id": "bio-final-24-24",
            "qType": "mcq",
            "source": "24학번 · 24",
            "ref": "28장 PDF p.11",
            "pdfRefPage": 11,
            "pdfRefPages": [
              11
            ],
            "stem": "축삭막의 Na⁺–K⁺ 펌프에 대한 설명으로 틀린 것은?",
            "choices": [
              "세포 안팎의 이온 농도를 유지한다",
              "이온 통로로 인해 교란된 이온 농도 기울기를 원상태로 되돌린다",
              "축삭의 세포막에 존재하는 단백질이다",
              "K⁺ 2개를 안으로, Na⁺ 3개를 밖으로 이동시킨다",
              "통로 단백질을 이용한 촉진 확산을 한다"
            ],
            "answerIndex": 4,
            "answerIndices": null,
            "rationale": "[강의 기준] Na⁺–K⁺ 펌프는 ATP를 이용하는 운반 단백질로 능동수송을 수행한다. 원문의 Ka⁺는 K⁺로 교정했다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "bio-28-synapse-nt",
        "chapter": "28장 신경계",
        "title": "시냅스(EPSP/IPSP)·신경전달물질(ACh·도파민·세로토닌·SSRI)",
        "pdfPages": [
          15,
          16,
          17,
          18,
          19,
          20
        ],
        "tags": [
          "28장",
          "p.15-20",
          "시냅스",
          "EPSP",
          "IPSP",
          "총합"
        ],
        "summary": "<p>전기적/화학적 시냅스, <strong>흥분성(EPSP) 및 억제성(IPSP) 시냅스 후 전위의 시간적·공간적 총합</strong>, 그리고 주요 신경전달물질(ACh, 글루타메이트, GABA, 도파민, 세로토닌, 노르에피네프린)과 향정신성 약물(<strong>SSRI</strong>, ADHD 치료제 등)을 다룹니다.</p>",
        "keyPoints": [
          "SSRI(선택적 세로토닌 재흡수 억제제): 시냅스 틈의 세로토닌 재흡수를 막아 우울증 완화",
          "ADHD 치료제(메틸페니데이트 등): 주로 도파민과 노르에피네프린의 재흡수를 억제하여 농도 증가",
          "GABA는 중추신경계의 주된 억제성 신경전달물질"
        ],
        "glossary": {
          "SSRI": "시냅스 전 뉴런으로의 세로토닌 재흡수를 선택적으로 차단해 시냅스 내 세로토닌 작용을 높이는 항우울제."
        },
        "pdfExcerpts": {
          "19": "신경전달물질과 약물: SSRI(세로토닌), ADHD 치료제(도파민·노르에피네프린), 아편계(엔도르핀 수용체)."
        },
        "pastQuestions": [
          {
            "id": "bio-final-25-7",
            "qType": "multi",
            "source": "25학번 · 7",
            "ref": "28장 PDF p.19",
            "pdfRefPage": 19,
            "pdfRefPages": [
              19
            ],
            "stem": "ADHD 치료제가 주로 작용하는 신경전달물질 2개를 고르시오.",
            "choices": [
              "세로토닌",
              "글루타메이트",
              "도파민",
              "GABA",
              "노르에피네프린"
            ],
            "answerIndex": 2,
            "answerIndices": [
              2,
              4
            ],
            "rationale": "[강의 기준] ADHD 치료제는 도파민과 노르에피네프린의 재흡수를 억제하는 작용을 한다. 두 개를 모두 선택해야 정답이다."
          },
          {
            "id": "bio-final-25-10",
            "qType": "mcq",
            "source": "25학번 · 10",
            "ref": "28장 PDF p.19",
            "pdfRefPage": 19,
            "pdfRefPages": [
              19
            ],
            "stem": "항우울제인 선택적 세로토닌 재흡수 억제제(SSRI)의 작용 기전은?",
            "choices": [
              "도파민 수용체를 차단한다",
              "도파민과 노르에피네프린의 재흡수를 차단한다",
              "아세틸콜린 수용체와 결합하여 아세틸콜린의 작용을 활성화한다",
              "GABA 수용체를 활성화하여 억제성 시냅스에서 신경전달물질의 효과를 증가시킨다",
              "신경전달물질 수송 단백질을 차단해 신경전달물질이 시냅스에 머물러 있도록 한다."
            ],
            "answerIndex": 4,
            "answerIndices": null,
            "rationale": "[강의 기준] SSRI는 세로토닌의 재흡수를 억제하여 시냅스 틈에 세로토닌이 더 오래 남도록 한다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "bio-28-cns-brain",
        "chapter": "28장 신경계",
        "title": "CNS/PNS(자율신경)·뇌의 구조(백색질/회색질)와 신경장애",
        "pdfPages": [
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31
        ],
        "tags": [
          "28장",
          "p.21-31",
          "CNS",
          "PNS",
          "자율신경",
          "교감"
        ],
        "summary": "<p>뇌척수액, <strong>백색질(유수 축삭 다발) vs 회색질(세포체·무수 축삭)</strong>, 말초신경계의 <strong>교감/부교감/장신경계</strong>, <strong>뇌의 주요 영역</strong>(뇌간, 소뇌, 시상, 시상하부, 대뇌겉질 4엽), 그리고 <strong>파킨슨병(도파민 부족)·알츠하이머병·조현병·뇌졸중</strong>을 다룹니다.</p>",
        "keyPoints": [
          "백색질은 주로 수초로 둘러싸인 축삭(신경로), 회색질은 뉴런의 세포체와 수상돌기 집합",
          "파킨슨병: 중뇌 흑질의 도파민 분비 뉴런 퇴행으로 떨림·운동장애 발생",
          "알츠하이머병: 아밀로이드 플라크와 타우 단백질 신경섬유매듭 축적에 의한 기억 상실"
        ],
        "glossary": {
          "백색질 vs 회색질": "백색질은 수초화된 축삭 다발로 이루어져 희게 보이고, 회색질은 세포체와 시냅스가 모여 회색을 띤다."
        },
        "pdfExcerpts": {
          "23": "백색질과 회색질: 뇌에서는 바깥쪽이 회색질(겉질)·안쪽이 백색질, 척수에서는 반대.",
          "30": "신경장애: 파킨슨병(중뇌 도파민 뉴런 사멸), 알츠하이머병(아밀로이드·타우), 조현병, 뇌졸중."
        },
        "pastQuestions": [
          {
            "id": "bio-final-24-22",
            "qType": "mcq",
            "source": "24학번 · 22",
            "ref": "28장 PDF p.23",
            "pdfRefPage": 23,
            "pdfRefPages": [
              23
            ],
            "stem": "뇌와 척수에서 주로 뉴런의 세포체로 이루어진 부분은?",
            "choices": [
              "뇌실",
              "회색질",
              "백색질",
              "뇌척수막",
              "뇌척수액"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 회색질은 주로 세포체와 가지돌기, 백색질은 주로 수초로 둘러싸인 축삭으로 이루어진다."
          },
          {
            "id": "bio-final-23-21",
            "qType": "short",
            "source": "23학번 · 21",
            "ref": "28장 PDF p.30",
            "pdfRefPage": 30,
            "pdfRefPages": [
              30
            ],
            "stem": "파킨슨병의 운동장애와 관련하여 중뇌 뉴런의 퇴행으로 부족해지는 신경전달물질은?",
            "choices": [],
            "answerIndex": 0,
            "answerIndices": null,
            "shortAnswer": "도파민",
            "rationale": "[강의 기준] 원본 ‘바닥체 퇴화’는 바닥핵 관련 표현의 오기이며 직접 기전이 부정확했다. 강의에 명시된 도파민 뉴런 소실을 묻는 단답형으로 보완했다."
          },
          {
            "id": "bio-final-23-22",
            "qType": "mcq",
            "source": "23학번 · 22",
            "ref": "28장 PDF p.23",
            "pdfRefPage": 23,
            "pdfRefPages": [
              23
            ],
            "stem": "뇌와 척수에서 주로 축삭으로 이루어진 부분은?",
            "choices": [
              "뇌실",
              "회백질",
              "백색질",
              "뇌척수막",
              "뇌척수액"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 백색질은 주로 수초로 둘러싸인 축삭으로 이루어진다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "bio-29-transduction-ear",
        "chapter": "29장 감각",
        "title": "감각전환·5종 수용기·청각(달팽이관/중이염)과 평형감각(이석증)",
        "pdfPages": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "tags": [
          "29장",
          "p.1-15",
          "감각전환",
          "감각적응",
          "수용기",
          "기계적"
        ],
        "summary": "<p><strong>감각전환(자극 → 수용기전위 → 활동전위)</strong>과 감각적응, <strong>5가지 감각수용기</strong>(온도·기계적·통각·화학·전자기), 그리고 귀의 <strong>청각</strong>(겉귀 → 고막 → 망치·모루·등자뼈 → 타원창 → 달팽이관 <strong>코르티기관 털세포</strong>, <strong>유스타키오관</strong>을 통한 중이염) 및 <strong>평형감각</strong>(반고리관 회전 vs 타원주머니·둥근주머니 중력/이석증)을 다룹니다.</p>",
        "keyPoints": [
          "청각 수용기는 달팽이관 가운데 통로 코르티기관(기저막 위)의 털세포(기계적 감각수용기)",
          "유스타키오관(귀인두관)은 중이와 인두를 연결해 기압을 조절하지만 코감기 세균/바이러스가 중이로 이동해 중이염을 유발하는 통로가 되기도 함",
          "이석증: 타원주머니(난형낭)·둥근주머니(구형낭)의 이석이 떨어져 반고리관으로 들어가 어지럼증·구토 유발"
        ],
        "glossary": {
          "털세포(유모세포)": "달팽이관과 전정기관에 있는 기계적 감각수용기로, 섬모가 휘어지면 이온통로가 열려 수용기전위를 만든다."
        },
        "pdfExcerpts": {
          "7": "5종류 감각수용기: 온도(진피), 기계적(진피·털세포), 통각(표피), 화학(혀·코·혈관), 전자기(광수용기).",
          "12": "유스타키오관: 가운데귀와 인두를 연결해 고막 양쪽 압력 평형 유지.",
          "13": "달팽이관 코르티기관: 기저막 진동 → 털세포 돌기가 덮개막에 부딪혀 휘어짐 → 청신경 활동전위.",
          "15": "평형감각: 반고리관(팽대정, 회전운동), 타원주머니·둥근주머니(중력/직선가속도)."
        },
        "pastQuestions": [
          {
            "id": "bio-final-25-12",
            "qType": "mcq",
            "source": "25학번 · 12",
            "ref": "부분 근거 · 29장 PDF p.15",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15
            ],
            "stem": "평소에 뇌 질환이 없던 20대 여성은 갑자기 머리가 어지럽고 구토 등의 증상을 느껴 병원에 갔더니 이석증을 진단받았다. 이석증은 이석이 떨어져 나와 이 기관에 들어가면서 발생하는 것이다. 이 기관은?",
            "choices": [
              "유스타키오관",
              "달팽이관",
              "수정체",
              "타원창",
              "반고리관"
            ],
            "answerIndex": 4,
            "answerIndices": null,
            "rationale": "[강의 기준] 29장 15쪽은 반고리관을 포함한 속귀의 평형기관을 설명한다.\n\n[보충 설명] 이석증은 떨어져 나온 이석이 반고리관으로 들어가 평형감각을 교란하여 발생한다. 이석증의 발생 기전 자체는 해당 강의 본문에 직접 명시되어 있지 않다."
          },
          {
            "id": "bio-final-25-15",
            "qType": "mcq",
            "source": "25학번 · 15",
            "ref": "29장 PDF p.12",
            "pdfRefPage": 12,
            "pdfRefPages": [
              12
            ],
            "stem": "4살 상진이가 코감기에 걸려 병원에 방문했다. 의사의 진단을 받아 본 결과 중이염이라고 판명났다. 이처럼 감기에 걸렸을 때 코로 들어온 세균이나 바이러스가 귀까지 침입하거나 염증이 확산되어 중이염의 합병증이 생길 수 있는데, 이에 중요하게 관여하는 것으로 평소에는 닫혀 있다가 침을 삼킬 때 열리는 것은?",
            "choices": [
              "반고리관",
              "달팽이관",
              "타원창",
              "유스타키오관",
              "정원창"
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 유스타키오관(귀인두관)은 중이와 인두를 연결하고 중이의 압력을 조절한다."
          },
          {
            "id": "bio-final-24-26",
            "qType": "mcq",
            "source": "24학번 · 26",
            "ref": "29장 PDF p.10",
            "pdfRefPage": 10,
            "pdfRefPages": [
              10
            ],
            "stem": "시각과 관련 있는 감각수용기는?",
            "choices": [
              "화학수용기",
              "전자기수용기",
              "기계적감각수용기",
              "통각수용기",
              "온도수용기"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 광수용기는 빛이라는 전자기파를 감지하므로 전자기수용기로 분류한다."
          },
          {
            "id": "bio-final-23-26",
            "qType": "mcq",
            "source": "23학번 · 26",
            "ref": "29장 PDF p.7·12–13",
            "pdfRefPage": 7,
            "pdfRefPages": [
              7,
              12,
              13
            ],
            "stem": "다음 중 청각과 관련 있는 감각수용기는?",
            "choices": [
              "화학수용기",
              "전자기수용기",
              "기계적감각수용기",
              "통각수용기",
              "온도수용기"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 청각은 소리 진동에 의한 털세포의 변형을 감지하므로 기계적 감각이다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "bio-29-eye-chemo",
        "chapter": "29장 감각",
        "title": "시각(눈 구조·원근조절·근시/원시·백내장/녹내장·망막)과 미각/후각",
        "pdfPages": [
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27
        ],
        "tags": [
          "29장",
          "p.16-27",
          "눈",
          "수정체",
          "모양체",
          "섬모체"
        ],
        "summary": "<p>사람 홑눈의 구조(공막·각막·홍채·수정체·망막), <strong>원근조절</strong>(근거리 볼 때 <strong>모양체근육 수축 → 인대 느슨 → 수정체 두꺼워짐</strong>), <strong>근시(오목/발산렌즈)·원시(볼록/수렴렌즈)·난시</strong>, <strong>백내장(수정체 혼탁) vs 녹내장(안구방수 안압↑ → 시신경 손상)</strong>, <strong>막대세포(로돕신/야맹증)·원뿔세포(포돕신/색각)</strong>, 그리고 미각·후각을 다룹니다.</p>",
        "keyPoints": [
          "가까이 볼 때: 모양체근육 수축 → 인대(진대) 느슨해짐 → 탄력 있는 수정체가 두껍고 둥글어져 굴절률 증가",
          "원시(상이 망막 뒤) → 볼록렌즈(수렴 교정렌즈); 근시(상이 망막 앞) → 오목렌즈(발산 교정렌즈)",
          "백내장은 수정체 단백질 엉김/혼탁(인공수정체 수술 교정 가능) vs 녹내장은 안구방수 증가로 시신경 손상(시력 영구 손상 주의)"
        ],
        "glossary": {
          "원근조절(Accommodation)": "모양체근육의 수축·이완으로 수정체 두께를 조절해 망막에 정확한 상을 맺게 하는 과정."
        },
        "pdfExcerpts": {
          "19": "원근조절: 근거리 시 모양체근육 수축 → 인대 느슨 → 수정체 두껍고 둥글게 됨.",
          "20": "시력장애: 근시(발산/오목렌즈), 원시(수렴/볼록렌즈), 난시(비대칭 렌즈).",
          "21": "노화 질환: 노안(수정체 탄력 감소), 백내장(수정체 혼탁), 녹내장(안압 상승 → 시신경 손상).",
          "22": "망막 광수용기: 막대세포(로돕신, 명암/비타민 A 결핍 시 야맹증) vs 원뿔세포(포돕신, 3색각)."
        },
        "pastQuestions": [
          {
            "id": "bio-final-25-11",
            "qType": "mcq",
            "source": "25학번 · 11",
            "ref": "29장 PDF p.19",
            "pdfRefPage": 19,
            "pdfRefPages": [
              19
            ],
            "stem": "근거리 작업 시 시각이 선명하게 보이는 이유는?",
            "choices": [
              "수정체가 평평해진다.",
              "수정체가 두꺼워져 굴절력이 커진다.",
              "망막이 이동한다.",
              "동공이 커진다.",
              "안구방수가 많아진다."
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 근거리 조절 시 모양체 근육이 수축하고 인대의 장력이 줄어 수정체가 두꺼워진다. 굴절력이 커져 가까운 물체의 상을 망막에 맺는다."
          },
          {
            "id": "bio-final-25-13",
            "qType": "mcq",
            "source": "25학번 · 13",
            "ref": "29장 PDF p.20",
            "pdfRefPage": 20,
            "pdfRefPages": [
              20
            ],
            "stem": "원시 교정 시 쓰이는 렌즈는?",
            "choices": [
              "볼록렌즈",
              "오목렌즈",
              "원형렌즈",
              "평면렌즈",
              "프리즘렌즈"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 원시는 가까운 물체의 상이 망막 뒤에 맺히므로 볼록렌즈로 교정한다."
          },
          {
            "id": "bio-final-25-14",
            "qType": "mcq",
            "source": "25학번 · 14",
            "ref": "29장 PDF p.21",
            "pdfRefPage": 21,
            "pdfRefPages": [
              21
            ],
            "stem": "백내장의 원인이 되는 눈의 부위는?",
            "choices": [
              "모양체 근육",
              "망막",
              "수정체",
              "안구방수",
              "각막"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 백내장은 수정체가 혼탁해져 시야가 흐려지는 질환이다."
          },
          {
            "id": "bio-final-24-28",
            "qType": "mcq",
            "source": "24학번 · 28",
            "ref": "29장 PDF p.19",
            "pdfRefPage": 19,
            "pdfRefPages": [
              19
            ],
            "stem": "멀리 있는 물체를 볼 때 눈의 상태로 옳은 것은?",
            "choices": [
              "수정체가 평평해진다",
              "수정체가 인대를 잡아당겨 늘린다",
              "모양체 근육이 수정체를 앞뒤로 움직여 초점을 맞춘다",
              "모양체 근육이 수축한다",
              "발산하는 광선을 굴절시켜 초점을 맞춘다"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 모양체 근육이 이완하고 인대가 팽팽해져 수정체가 얇고 평평해진다."
          },
          {
            "id": "bio-final-23-28",
            "qType": "mcq",
            "source": "23학번 · 28",
            "ref": "29장 PDF p.19",
            "pdfRefPage": 19,
            "pdfRefPages": [
              19
            ],
            "stem": "가까이 있는 물체를 볼 때 눈(eye)의 상태로 맞는 것은?",
            "choices": [
              "모양체 근육이 수축한다.",
              "수정체가 인대를 잡아당겨 늘린다.",
              "모양체가 수정체를 앞뒤로 움직여 초점을 맞춘다.",
              "수정체가 평평해진다.",
              "발산하는 광선을 굴절시켜 초점을 맞춘다."
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 가까운 물체를 볼 때 모양체 근육이 수축하고 인대가 느슨해져 수정체가 두꺼워진다. ⑤의 ‘발산하는 광선을 굴절’도 근거리 물체의 빛을 다룬 일반 설명으로 성립할 수 있다. 원본 정답 표기는 없으며 ①·⑤를 모두 인정한다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "bio-30-skeleton-joint",
        "chapter": "30장 동물의 운동",
        "title": "운동과 뼈대 유형·뼈 구조(치밀뼈/해면뼈·적색골수)·관절·힘줄/인대",
        "pdfPages": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14
        ],
        "tags": [
          "30장",
          "p.1-14",
          "수성뼈대",
          "외골격",
          "내골격",
          "힘줄"
        ],
        "summary": "<p><strong>3가지 뼈대(수성뼈대·외골격·내골격)</strong>, 척추동물 몸통뼈대/팔다리뼈대, 살아 있는 뼈의 구조(<strong>치밀뼈 vs 해면뼈 내 적색뼈속질[적색골수: 혈액세포 생성]</strong>, 중앙공간의 황색뼈속질), <strong>골다공증</strong>, <strong>3가지 가동관절(절구·경첩·중쇠관절)</strong> 및 <strong>인대(뼈-뼈) vs 힘줄(근육-뼈)</strong>을 다룹니다.</p>",
        "keyPoints": [
          "적색뼈속질(적색골수)은 해면뼈에 들어 있으며 적혈구·백혈구·혈소판 등 혈액세포를 생성",
          "인대(ligament)는 관절에서 뼈와 뼈를 연결; 힘줄(tendon)은 근육과 뼈를 연결",
          "관절 분류: 절구관절(어깨·고관절, 다방향), 경첩관절(팔꿈치·무릎, 한 방향), 중쇠관절(제1·2목뼈, 회전)"
        ],
        "glossary": {
          "적색뼈속질(적색골수)": "해면뼈 내부에 위치하며 혈액세포(적혈구·백혈구·혈소판)를 생성하는 조혈 조직."
        },
        "pdfExcerpts": {
          "10": "뼈의 구조: 바깥쪽 치밀뼈, 양 끝 안쪽 해면뼈(적색뼈속질 포함), 중앙 황색뼈속질(지방 저장).",
          "12": "관절의 분류: 인대(뼈-뼈 연결), 절구관절·경첩관절·중쇠관절.",
          "14": "뼈대와 근육: 힘줄(근육-뼈 연결)과 길항근(위팔 두갈래근 수축 vs 세갈래근 이완)."
        },
        "pastQuestions": [
          {
            "id": "bio-final-25-1",
            "qType": "mcq",
            "source": "25학번 · 1",
            "ref": "30장 PDF p.14",
            "pdfRefPage": 14,
            "pdfRefPages": [
              14
            ],
            "stem": "근육과 뼈를 연결하는 부위는?",
            "choices": [
              "근섬유",
              "힘줄",
              "인대",
              "해면뼈",
              "물렁뼈"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 힘줄은 근육과 뼈를 연결한다. 인대는 뼈와 뼈를 연결한다."
          },
          {
            "id": "bio-final-25-3",
            "qType": "mcq",
            "source": "25학번 · 3",
            "ref": "30장 PDF p.10",
            "pdfRefPage": 10,
            "pdfRefPages": [
              10
            ],
            "stem": "혈액세포(적혈구·백혈구·혈소판)를 만드는 적색골수와 관련된 뼈 부위는?",
            "choices": [
              "긴뼈의 치밀뼈",
              "긴뼈의 해면뼈",
              "골 내부의 지방조직",
              "연골",
              "오돌뼈"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 해면뼈의 적색골수에서 조혈이 일어난다. 원문의 ‘분비’는 ‘생성’으로, 긴뼈 전체와 뼈몸통을 혼용한 diaphysis 표기는 삭제했다."
          },
          {
            "id": "bio-final-24-16",
            "qType": "mcq",
            "source": "24학번 · 16",
            "ref": "30장 PDF p.12",
            "pdfRefPage": 12,
            "pdfRefPages": [
              12
            ],
            "stem": "여러 형태의 운동을 가능하게 하는 관절에 대한 설명으로 옳지 않은 것은?",
            "choices": [
              "구상관절: 공이 글러브에 들어 있는 모양이며 위팔뼈와 팔이음뼈 사이에 있다",
              "번접관절: 빠른 회전이 필요한 배구·농구·테니스 등의 운동 중 특히 손상되기 쉽다",
              "차축관절: 한쪽 방향으로만 움직이게 한다",
              "구상관절: 돌리거나 다양한 평면으로 움직일 수 있게 한다",
              "차축관절: 팔꿈치에서 아래팔이 회전하도록 한다"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 한 평면에서 굽힘·폄을 하는 것은 경첩관절(번접관절)이다. 중쇠관절(차축관절)은 축을 중심으로 회전한다."
          },
          {
            "id": "bio-final-23-18",
            "qType": "mcq",
            "source": "23학번 · 18",
            "ref": "30장 PDF p.12·14",
            "pdfRefPage": 12,
            "pdfRefPages": [
              12,
              14
            ],
            "stem": "관절에서 뼈와 뼈를 연결하는 구조는?",
            "choices": [
              "근섬유",
              "인대",
              "힘줄",
              "해면뼈",
              "물렁뼈"
            ],
            "answerIndex": 1,
            "answerIndices": null,
            "rationale": "[강의 기준] 인대는 뼈와 뼈를, 힘줄은 근육과 뼈를 연결한다. ‘뼈와 관절 사이’라는 모호한 표현을 보완했다."
          }
        ],
        "aiQuestions": []
      },
      {
        "id": "bio-30-muscle",
        "chapter": "30장 동물의 운동",
        "title": "근육원섬유마디·활주모델·Ca²⁺-트로포닌-트로포미오신·ATP원·근섬유 유형",
        "pdfPages": [
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24
        ],
        "tags": [
          "30장",
          "p.15-24",
          "근육",
          "근절",
          "근육원섬유마디",
          "Z선"
        ],
        "summary": "<p><strong>근육원섬유마디(Sarcomere: Z선~Z선)</strong>와 <strong>활주모델</strong>(수축 시 액틴·미오신 자체 길이는 불변 → 암대[A대] 불변, Z선 간격·명대[I대] 감소), 운동뉴런(ACh) → T소관 → 근소포체 <strong>Ca²⁺ 방출 → 트로포닌 결합 → 트로포미오신 이동</strong>에 의한 수축 개시, 에너지원(<strong>ATP/PCr·유산소호흡·젖산발효</strong>), 그리고 <strong>느린 연축(마라톤, 미오글로빈·미토콘드리아↑) vs 빠른 연축(단거리)</strong>을 다룹니다.</p>",
        "keyPoints": [
          "수축 시 변화: 근육원섬유마디(Z선 사이) 짧아짐, 명대(I대) 짧아짐, 가는·굵은 필라멘트 길이(및 암대/A대)는 변화 없음",
          "Ca²⁺가 트로포닌(X)에 결합하면 트로포미오신(Y)이 미오신 결합 부위에서 멀어져 교차다리 형성",
          "마라톤 선수(느린 연축 섬유 풍부): 유산소 호흡 주경로, 미오글로빈 함량↑, 미토콘드리아·모세혈관↑, 피로에 강함"
        ],
        "glossary": {
          "활주모델(Sliding-Filament Model)": "액틴과 미오신 필라멘트 자체 길이는 변하지 않고 서로 미끄러져 겹치면서 근육원섬유마디가 짧아지는 수축 원리."
        },
        "pdfExcerpts": {
          "15": "근육원섬유마디(Sarcomere): Z선-Z선 사이 수축 단위, 명대(가는 액틴), 암대(굵은 미오신).",
          "16": "활주모델: 수축 시 Z선이 가까워지지만 가는·굵은 필라멘트 길이 자체는 불변.",
          "19": "조절 기작: Ca²⁺가 트로포닌에 결합 → 트로포미오신이 미오신 결합부위 노출.",
          "23": "표 30.12A: 느린 섬유(유산소, 미오글로빈·미토콘드리아·모세혈관 높음) vs 빠른 섬유(발효, 빠르고 강하지만 빨리 피로)."
        },
        "pastQuestions": [
          {
            "id": "bio-final-25-2",
            "qType": "mcq",
            "source": "25학번 · 2",
            "ref": "30장 PDF p.15–16",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15,
              16
            ],
            "stem": "근육 수축 시 Z선 사이 거리, 명대(I대), 암대(A대)의 변화로 알맞은 것은?",
            "choices": [
              "Z선 사이 거리 감소, 명대 감소, 암대 일정",
              "Z선 사이 거리 증가, 명대 증가, 암대 증가",
              "Z선 사이 거리 감소, 명대 일정, 암대 감소",
              "Z선 사이 거리 증가, 명대 감소, 암대 일정",
              "Z선 사이 거리·명대·암대 모두 일정"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 근절과 명대는 짧아지고 암대는 일정하다. 원문의 ‘Z선 감소’는 Z선 자체가 아니라 두 Z선 사이 거리 감소로 보완했다."
          },
          {
            "id": "bio-final-25-4",
            "qType": "mcq",
            "source": "25학번 · 4",
            "ref": "30장 PDF p.19",
            "pdfRefPage": 19,
            "pdfRefPages": [
              19
            ],
            "stem": "위팔두갈래근이 수축할 때 Ca²⁺가 X에 결합하여 Y가 미오신 결합 부위에서 멀어진다. X와 Y는?",
            "choices": [
              "액틴 필라멘트 – 트로포닌",
              "가로 T소관 – 세포판",
              "트로포닌 – 트로포미오신",
              "세포판 – 가로 T소관",
              "트로포미오신 – 트로포닌"
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] Ca²⁺가 트로포닌에 결합하면 트로포미오신의 위치가 변해 액틴의 미오신 결합 부위가 노출된다."
          },
          {
            "id": "bio-final-25-5",
            "qType": "mcq",
            "source": "25학번 · 5",
            "ref": "30장 PDF p.23",
            "pdfRefPage": 23,
            "pdfRefPages": [
              23
            ],
            "stem": "역도 선수의 주된 운동 능력을 담당하는 근육 섬유 수축의 특성은?",
            "choices": [
              "모세혈관과 미오글로빈이 풍부하다.",
              "ATP 가수분해 속도가 느려 장거리 달리기에 적합하다.",
              "무산소 해당과정을 주요 ATP 공급 경로로 사용하여 단시간 고강도 운동에 적합하다.",
              "근섬유 내 지방산을 산화하여 에너지원으로 사용한다.",
              "젖산 축적이 적어 지구력 운동에 적합하다."
            ],
            "answerIndex": 2,
            "answerIndices": null,
            "rationale": "[강의 기준] 속근섬유는 빠르게 수축하고 해당과정·젖산발효를 활용하여 짧고 강한 운동을 수행한다."
          },
          {
            "id": "bio-final-24-17",
            "qType": "mcq",
            "source": "24학번 · 17",
            "ref": "30장 PDF p.15–16",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15,
              16
            ],
            "stem": "근육 수축 시 짧아지는 것은?",
            "choices": [
              "Z선",
              "T소관",
              "액틴 필라멘트",
              "미오신 필라멘트",
              "근육원섬유마디(근절)"
            ],
            "answerIndex": 4,
            "answerIndices": null,
            "rationale": "[강의 기준] 액틴과 미오신 필라멘트 자체의 길이는 변하지 않는다. 두 Z선 사이 거리인 근절이 짧아진다. 원문의 sacromere는 sarcomere의 오기이다."
          },
          {
            "id": "bio-final-23-17",
            "qType": "mcq",
            "source": "23학번 · 17",
            "ref": "30장 PDF p.15",
            "pdfRefPage": 15,
            "pdfRefPages": [
              15
            ],
            "stem": "가는 필라멘트(액틴 필라멘트)가 고정되는 구조는?",
            "choices": [
              "Z선",
              "암대",
              "액틴 필라멘트",
              "미오신 필라멘트",
              "근육원섬유마디(근절, sarcomere)"
            ],
            "answerIndex": 0,
            "answerIndices": null,
            "rationale": "[강의 기준] 가는 필라멘트는 Z선에 고정된다. 모호했던 원문 표현을 강의의 근절 구조에 맞춰 보완했다."
          },
          {
            "id": "bio-final-23-20",
            "qType": "mcq",
            "source": "23학번 · 20",
            "ref": "30장 PDF p.23",
            "pdfRefPage": 23,
            "pdfRefPages": [
              23
            ],
            "stem": "근섬유 중 마라톤 선수에게서 더 많이 나타나는 근섬유의 특징은?",
            "choices": [
              "수축 속도가 매우 빠르다.",
              "모세혈관이 적다.",
              "미오글로빈 함량이 낮다.",
              "ATP 주요 공급 경로가 세포호흡이다.",
              "미오신의 ATP 소모 속도가 빠르다."
            ],
            "answerIndex": 3,
            "answerIndices": null,
            "rationale": "[강의 기준] 지근섬유는 모세혈관과 미오글로빈이 풍부하며 산소를 이용한 세포호흡으로 ATP를 공급한다. 마라톤처럼 오래 지속하는 운동에 적합하다."
          }
        ],
        "aiQuestions": []
      }
    ]
  }
];
