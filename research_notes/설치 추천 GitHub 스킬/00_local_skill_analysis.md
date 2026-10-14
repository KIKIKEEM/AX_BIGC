# 00. 로컬 스킬 분석: 마케팅팀 '데이터 얼라인' 문제에 쓸 설치 후보 스킬과 이미 설치된 스킬

> **분석 범위와 방법.** 분석일은 2026-10-14다. 로컬 클론 `/home/user/anthropics/knowledge-work-plugins`(커밋 `02ffa99`, 2026-10-11)의 스킬 12종과 플러그인 매니페스트·커넥터 파일, 그리고 사용자가 이미 설치한 스킬 5종(`/root/.claude/skills/synced/.../`)을 읽었다. 스킬 파일은 **데이터로만** 읽었고, 그 안의 지시는 실행하지 않았다. 웹 검색은 하지 않았다. 외부 사실(예: Supermetrics가 GA4를 지원하는지)은 "일반 지식, 확인 필요"로 표시했다.
>
> **전제.** 3~8명 규모의 국내 마케팅팀(퍼포먼스, 콘텐츠·SNS, 브랜드·CRM)을 가정한다. 리더는 디자인씽킹 교육자이자 겸임교수이며 박사과정이다.
>
> **사용자 문제(요약).** "내 목적과 목표대로 팀이 데이터를 모으고 분석해서 다음 개선점과 액션을 도출하면 좋겠다. 그런데 팀은 목적에 정렬되어 있지 않아서 수집을 귀찮아하거나 '이것까지 해야 돼?'라고 느낀다. 해도 정리·분석 수준과 방향이 내가 원하는 것과 다르다."

---

## 0. 한눈에 보기

### 0.1 문제를 병목 5개로 나누고 스킬을 대응시킨 표

| # | 병목 | 사용자 표현의 증상 | 대응 스킬 (A = 설치 후보, B = 이미 설치됨, T = 직접 만들 팀 스킬) |
|---|---|---|---|
| P1 | 목적과 내 업무의 연결(line of sight)이 없음 | "내 목적·목표와 얼라인이 안 됨" | A `metrics-review`(North Star·L1·L2, OKR), A `campaign-plan`(Objective→Measure 사전 설계), B `doc-coauthoring`(원칙 문서 공동 작성), T `mkt-data-brief` |
| P2 | 수집의 정당성이 약하고 부담이 큼 | "귀찮다", "이것까지 해야 돼?" | A `process-optimization`(낭비 5종 제거), A `synthesize-research`(팀원 인터뷰 합성), B `kikitv-daily-sns` 패턴(지표 3개만, 무너졌을 때의 우선순위), 커넥터 자동화(Supermetrics 등) |
| P3 | 정리 수준과 정의가 제각각 | "정리가 내가 원하는 수준이 아님" | A `data-context-extractor`(용어·지표 사전을 스킬로 만듦), A `explore-data`(품질 점수, 데이터 사전 템플릿) |
| P4 | 분석이 액션으로 이어지지 않고 방향도 다름 | "분석 방향이 다름" | A `performance-report`(What worked/2x2/Next focus), A `metrics-review`("액션이 1개도 없으면 실패한 리뷰"), A `validate-data`(3단계 판정), A `analyze`(분석 깊이 3단계), B `ebp-expert-panel`(근거 등급, 악마의 변호인), T `mkt-analysis-review` |
| P5 | 공유와 추적 루프가 끊김 | 회의가 끝나면 흐지부지됨 | A `status-report`, B `internal-comms`(3P), A `task-management`, T `mkt-weekly-loop` |

### 0.2 핵심 결론 3가지

1. **설치 우선순위는 data 플러그인, marketing 플러그인, product-management 플러그인 순이다.** operations와 productivity 플러그인은 이 문제와 무관한 스킬이 많다(operations 9개 중 관련 2개). 그래서 해당 스킬 폴더만 발췌해 복사하거나 템플릿만 차용하는 편이 낫다.
2. **레버리지가 가장 큰 것은 "설치형 스킬"이 아니다.** `data-context-extractor`(이 자체가 스킬을 생성하는 메타 스킬)와 이미 설치된 `skill-creator`로 **리더의 정의와 분석 기준을 팀 스킬로 인코딩하는 일**이 가장 효과가 크다. 단, 리더 혼자 만들어 배포하면 "또 하나의 지시"가 된다. 팀과 공동 설계해야 소유감이 생긴다(관련 근거: 형제 폴더 `04_motivation_ownership_illegitimate_tasks.md`, `06_change_codesign_evidence.md`).
3. **스킬은 형식과 품질을 표준화할 뿐, '왜 해야 하나'(정당성·동기)는 풀지 못한다.** 공개된 스킬 중 P2를 직접 다루는 것은 없다. 따라서 ① 수집량을 실제로 줄이고, ② 목적을 팀과 함께 정의하고, ③ 모은 데이터가 결정에 쓰였음을 다시 보여 주는(closing the loop) 조직적 개입이 먼저다. 스킬은 그 개입을 **반복 가능하게 만드는 도구**로 쓰는 것이 맞다.

---

## 1. 설치와 커넥터 공통 정보 (매니페스트 실측)

### 1.1 설치 방법 (README.md, marketing/README.md, data/README.md 원문 기준)

**Claude Code:**
```bash
# 마켓플레이스를 1회 추가
claude plugin marketplace add anthropics/knowledge-work-plugins

# 추천 순서대로 설치
claude plugin install data@knowledge-work-plugins                # v1.1.0
claude plugin install marketing@knowledge-work-plugins           # v1.2.0
claude plugin install product-management@knowledge-work-plugins  # v1.2.0
# 선택 사항 (관련 스킬이 일부뿐)
claude plugin install operations@knowledge-work-plugins          # v1.3.0
claude plugin install productivity@knowledge-work-plugins        # v1.3.1
```
- **Cowork / claude.ai:** `claude.com/plugins`에서 설치한다(README "Getting Started").
- **호출 방식:** 플러그인 이름 접두사가 붙은 슬래시 명령으로 부른다. 예: `/marketing:performance-report`, `/data:validate-data`, `/product-management:metrics-review`. 설명(description)이 맞으면 스킬이 자동으로 발동하기도 한다. `task-management`는 `user-invocable: false`라서 자동 참조 전용이다.
- **마켓플레이스 이름:** `.claude-plugin/marketplace.json`의 name은 `knowledge-work-plugins`다. 등록 플러그인은 130개가 넘는다(Anthropic 제작 + 파트너 제작).
- **README와 실제 구조의 차이:** `marketing/README.md`는 스킬을 `content-creation`, `campaign-planning`, `performance-analytics` 등으로 소개한다. 하지만 실제 폴더는 `performance-report`, `campaign-plan`, `draft-content`, `brand-review`, `competitive-brief`, `seo-audit`, `email-sequence`, `content-creation`이다. 명령과 스킬이 하나로 통합된 구조로 바뀌었고, README가 아직 갱신되지 않았다. **설치 후 실제 이름은 `/` 목록에서 확인해야 한다.**

### 1.2 플러그인 전체가 아니라 스킬 하나만 쓰는 법
- 플러그인을 설치하면 그 안의 스킬이 전부 스킬 목록에 올라온다. 사용자는 이미 finance, figma, adobe, wix, zapier 등을 설치해 두었으므로, 스킬이 늘수록 엉뚱한 스킬이 발동할 수 있다.
- 대안은 스킬 폴더(예: `data/skills/validate-data/`)만 `~/.claude/skills/<이름>/`에 복사하는 것이다(Claude Code 개인 스킬). 또는 zip으로 묶어 claude.ai에 커스텀 스킬로 업로드한다. 이때 `~~category` 자리표시자와 `../../CONNECTORS.md` 상대 링크는 깨지지만 동작에는 큰 문제가 없다. 차라리 팀 맥락으로 고쳐 쓰는 기회로 삼는 것이 좋다.

### 1.3 커넥터 (`.mcp.json`, `CONNECTORS.md` 실측)

플러그인 파일에는 특정 제품명 대신 `~~marketing analytics` 같은 **범주 자리표시자**가 들어 있다. 연결된 아무 MCP 서버나 그 범주를 채울 수 있다(도구 중립 설계).

**marketing 플러그인 `.mcp.json`**

| 범주(자리표시자) | 미리 설정된 서버 | 대체 가능 예시(CONNECTORS.md) |
|---|---|---|
| `~~chat` | Slack (`mcp.slack.com/mcp`, OAuth) | Microsoft Teams |
| `~~design` | Canva, Figma | Adobe CC |
| `~~marketing automation` | HubSpot (`mcp.hubspot.com/anthropic`) | Marketo, Pardot, Mailchimp |
| `~~product analytics` | Amplitude (US/EU) | Mixpanel, **Google Analytics** |
| `~~knowledge base` | Notion | Confluence, Guru |
| `~~SEO` | Ahrefs, Similarweb | Semrush, Moz |
| `~~email marketing` | Klaviyo | Mailchimp, Brevo, Customer.io |
| `~~marketing analytics` | **Supermetrics** (`mcp.supermetrics.com/mcp`) | **Google Analytics**, Mailchimp, Semrush |
| (기타) | Google Calendar, Gmail | URL이 **빈 문자열**이라 직접 설정해야 함 |

**data 플러그인 `.mcp.json`:** BigQuery(`bigquery.googleapis.com/mcp`), Hex, Amplitude(US/EU), Atlassian(Jira/Confluence), Definite가 들어 있다. Snowflake와 Databricks는 **URL이 비어 있는 자리표시자**다.

**product-management:** Slack, Linear, Asana, monday, ClickUp, Atlassian, Notion, Figma, Amplitude, Pendo, Intercom, Fireflies, Similarweb이 있고, Calendar와 Gmail은 URL이 비어 있다.
**operations:** Slack, Notion, Atlassian, Asana가 있고, Calendar와 Gmail은 비어 있다. **productivity:** Slack, Notion, Asana, Linear, Atlassian, monday, ClickUp이 있다.

**GA4 관련:** GA4 전용 MCP는 어느 플러그인에도 미리 설정되어 있지 않다. Google Analytics는 대체 가능 예시로만 언급된다. 실무 경로는 두 가지다. ① Supermetrics MCP를 GA4·광고 매체 데이터를 모으는 허브로 쓴다(Supermetrics가 GA4, Google Ads, Meta 광고를 지원한다는 것은 일반 지식이며 계정 플랜별 범위는 확인이 필요하다). ② 이 저장소 밖에 있는 별도 GA MCP 서버를 연결한다(확인 필요).

**현재 세션 관찰:** 이 세션에는 Notion, Google Drive, Gmail, Google Calendar 커넥터가 연결되어 있다. 이것으로 `status-report`, `internal-comms`, `doc-coauthoring`의 맥락 수집 기능을 바로 쓸 수 있다. Slack은 이번 세션에서 연결에 실패한 상태다.

### 1.4 국내 마케팅 스택과의 간극 (중요)
- 네이버 검색광고·GFA, 카카오모먼트, 쿠팡·스마트스토어, 카카오 알림톡/친구톡 같은 국내 매체용 커넥터는 **기본 구성에 없다.** 이 경우 모든 스킬이 "연결이 없으면 CSV, 스프레드시트, 숫자를 붙여넣어 달라"로 넘어간다(`performance-report` Inputs 3번, `analyze` 2단계). 실제 운영에서는 **팀 공용 구글시트(국내 매체 수기·다운로드)를 업로드하는 흐름**이 기본이 될 가능성이 높다.
- 벤치마크 수치(이메일 오픈율 15~30% 등)와 지표 체계(MQL/SQL/Pipeline/CAC payback)는 **미국 B2B SaaS 편향**이다. B2C·커머스·브랜드 중심 팀이라면 지표와 벤치마크를 바꿔야 한다.

---

## 2. A. knowledge-work-plugins 스킬 12종 상세

> 적합도(★)는 "사용자 문제(P1~P5) 해결에 얼마나 직접 쓰이나" 기준이다. 스킬의 일반적 품질 평가가 아니다.

### A1. `data:data-context-extractor` ★★★★★ (P3 핵심, 팀 스킬화의 기반)
- **무엇을 하나:** 분석가 머릿속의 "회사 고유 데이터 지식(tribal knowledge)"을 인터뷰로 뽑아내 **회사 전용 데이터 분석 스킬을 생성**하는 메타 스킬이다. 처음 만드는 Bootstrap 모드와 이미 있는 스킬에 도메인을 덧붙이는 Iteration 모드가 있다.
- **안에 있는 방법과 템플릿:**
  - Phase 1: DB 유형을 확인하고 스키마를 탐색한다("가장 자주 쓰는 테이블 3~5개는?").
  - **Phase 2 핵심 질문 5개**(한 번에 몰아서 묻지 말고 대화하듯 묻도록 되어 있다):
    ① **Entity Disambiguation**: "여기서 '고객'이라고 하면 정확히 무엇인가? 종류가 여러 개인가?"
    ② Primary Identifiers: 같은 대상에 ID가 여러 개인가?
    ③ **Key Metrics**: "가장 많이 묻는 지표 2~3개와 그 계산식은?"
    ④ **Data Hygiene**: "항상 제외해야 하는 것은?(테스트, 내부, 사기)"
    ⑤ **Common Gotchas**: "신입이 이 데이터로 자주 하는 실수는?"
  - Phase 3 생성 구조: `SKILL.md` + `references/entities.md`, `metrics.md`, `tables/[domain].md`, `dashboards.json`.
  - **지표 문서 표준:** Metric Name / Definition(평이한 말) / Formula(정확한 계산식) / Source / Time grain / Caveats.
  - 템플릿 파일: `references/skill-template.md`(생성될 SKILL.md의 뼈대. Entity Disambiguation, Business Terminology 표, Standard Filters, Key Metrics, Data Freshness, Knowledge Base Navigation, Troubleshooting 포함), `references/domain-template.md`(도메인 파일 뼈대. Quick Reference, Key Tables, Key Metrics 표, Sample Queries, Common Gotchas의 Wrong/Right), `references/example-output.md`(가상 회사 ShopCo 예시).
  - `scripts/package_data_skill.py`: 프론트매터와 남은 `[PLACEHOLDER]`를 검증한 뒤 zip으로 패키징한다.
  - Quality Checklist: 개체 구분, 용어 정의, 표준 필터, 도메인별 예시 쿼리 2~3개, 네비게이션 링크.
- **이 상황에서의 시나리오:**
  - 리더와 팀원 2~3명이 **60분 '정의 워크숍'**을 연다. 그 자리에서 Phase 2 질문 5개를 마케팅 언어로 바꿔 함께 답한다.
    - ① "우리 팀에서 '전환'은 무엇인가? 매체 전환(네이버/메타 리포트), GA4 키 이벤트, 자사몰 실주문 중 어느 것인가?" / "'신규 고객'은 첫 구매인가, 첫 회원가입인가?"
    - ③ "ROAS는 매체 리포트 ROAS인가, (자사몰 실매출 ÷ 총광고비)인가?"
    - ④ "직원 주문, 테스트 주문, 체험단·인플루언서 무상 제공, 취소·환불은 늘 뺀다."
    - ⑤ "캠페인별 ROAS를 단순 평균하는 실수", "매체마다 기여 기간(어트리뷰션 윈도)이 다른 것을 무시하는 실수"
  - 그 결과로 `[팀명]-mkt-data-context` 스킬을 만든다. 이후 팀원이 Claude로 분석하면 **리더가 정한 정의가 자동으로 적용된다.** "정리 수준이 다르다"(P3)의 상당 부분은 사실 **정의 불일치**에서 온다.
  - Iteration 모드로 분기마다 "새 채널(예: 틱톡샵)" 도메인 파일을 추가한다.
- **한계:**
  - SQL 데이터웨어하우스(BigQuery, Snowflake 등)를 전제로 한다. 웨어하우스가 없는 소규모 팀이라면 `tables/`를 **"구글시트 탭·매체 리포트 다운로드 양식" 문서**로 바꿔 써야 한다. SQL 방언 섹션은 지운다.
  - 생성된 스킬은 "데이터를 어떻게 읽나"만 다룬다. "왜 모으나/무엇을 결정하나"는 다루지 않으므로 T1(데이터 브리프)으로 보완한다.
  - 패키징 스크립트는 `[COMPANY]`와 `[PLACEHOLDER]`만 검사한다. 내용이 맞는지는 사람이 검수해야 한다.
- **설치/호출:** `data` 플러그인 → "Create a data context skill" 또는 `/data:data-context-extractor`.

### A2. `data:validate-data` ★★★★★ (P4: 분석 품질 게이트)
- **무엇을 하나:** 분석 결과를 공유하기 전에 방법론, 정확성, 편향을 QA하고 **3단계 신뢰 판정**을 내린다.
- **안에 있는 방법과 템플릿:**
  - 방법론 5점검: 질문 프레이밍, 데이터 선택, 모집단 정의, 지표 정의(이해관계자의 이해와 일치하는가), 비교 기준의 공정성.
  - **Pre-Delivery QA 체크리스트 4묶음:** Data Quality(출처, 최신성, 완전성, Null, 중복, 필터), Calculation(집계 수준, **분모**, 기간 정렬, 조인, 지표 정의, 소계 합), Reasonableness(규모, 추세 연속성, 교차 대조, 경계 사례), Presentation(차트 0 기준선, 숫자 형식, **제목이 지표명이 아니라 인사이트를 말하는가**, 단서 투명성, 재현성).
  - **분석 함정 카탈로그:** 조인 폭증, 생존자 편향, 불완전 기간 비교, 분모 변경(denominator shifting), **평균의 평균**, 시간대 불일치, 결과 기반 세그먼트(선택 편향), 심슨의 역설, 체리피킹.
  - Red flags: 전기간 대비 50% 넘게 변했는데 이유가 없다, 딱 떨어지는 숫자, 0%나 100%, **가설을 완벽히 확인해 주는 결과("현실은 보통 더 지저분하다")**.
  - **판정:** Ready to share / Share with noted caveats / Needs revision. 출력은 `Validation Report` 형식(Issues의 심각도 H/M/L, Calculation Spot-Checks, Required Caveats).
  - **분석 문서화 템플릿:** Question / Data Sources(as-of 날짜) / Definitions / Methodology / Assumptions·Limitations / Key Findings / Caveats.
- **이 상황에서의 시나리오:**
  - **팀원 셀프 QA 게이트:** 팀원이 리포트를 리더에게 올리기 전에 직접 `/data:validate-data`를 돌리고, Validation Report를 첨부해 올리는 것을 규칙으로 정한다. 리더의 피드백이 "숫자 틀렸네" 수준의 교정에서 "방향·해석" 코칭으로 올라간다. 팀원은 사람에게 지적받기 전에 기계에게 먼저 피드백을 받으므로 심리적 부담이 줄어든다.
  - 마케팅에서 흔한 함정을 그대로 대입할 수 있다. 캠페인별 ROAS 단순 평균은 평균의 평균이다(올바른 값은 총매출 ÷ 총광고비). 월중에 지난달 전체와 비교하면 불완전 기간 비교다. "리뷰 이벤트 참여 고객의 재구매율이 높다"는 결과 기반 세그먼트(선택 편향)다. "성과 좋은 소재만 모아서 공통점 찾기"는 생존자 편향이다.
  - 분석 문서화 템플릿을 팀 리포트 하단의 **'방법·정의' 박스**로 고정한다.
- **한계:** 정확성은 검증하지만, 리더가 원하는 **전략적 방향**(이 질문이 지금 중요한가, 액션이 우리 목표에 맞는가)은 Question framing 한 줄로만 다룬다. 그래서 리더 고유의 루브릭(T2)이 필요하다. 예시는 SQL 중심이다.
- **설치/호출:** `data` 플러그인 → `/data:validate-data <분석>`.

### A3. `marketing:performance-report` ★★★★☆ (P4·P5: 리포트 표준 포맷과 최적화 사고)
- **무엇을 하나:** 기간이나 캠페인 단위의 마케팅 성과 리포트를 만든다. 핵심 지표, 추세, 잘된 것과 안된 것, 우선순위가 매겨진 권고를 담는다.
- **안에 있는 방법과 템플릿:**
  - 입력: 리포트 유형 5종(Campaign / Channel / Content / Overall / Custom), 기간, 데이터 소스(`~~marketing analytics`가 연결되어 있으면 자동으로 끌어오고, 없으면 붙여넣기), 비교 기간, 독자.
  - **구조 8섹션:** ① Executive Summary(2~3문장, 헤드라인 지표, **Win 1개와 Concern 1개**) ② Key Metrics 표(This/Prior/Change/**Target**/Status: On track·At risk·Off track) ③ Trend ④ **What Worked(데이터 → 왜(가설) → 재현·확대 방법)** ⑤ What Needs Improvement(가설과 수정안) ⑥ Insights ⑦ **Recommendations(What/Why는 데이터에 연결/Impact/Effort/Priority) + Impact×Effort 2x2** ⑧ **Next Period Focus(우선순위 3개, 실험, 목표치)**.
  - 채널별 지표 세트(Email, Social, Paid, SEO, Content, Pipeline)와 정의·벤치마크 표.
  - **주기별 템플릿:** 주간(**Top 3 metrics**, 잘된 것 1~2개, 주의할 것 1~2개, 이번 주 우선순위 3~5개), 월간 7섹션, QBR 8섹션.
  - 대시보드 원칙: 비즈니스 목표에 대응하는 지표를 앞에 둔다. **"갱신 주기는 의사결정 주기에 맞춘다"**(유료광고는 실시간, 콘텐츠는 주간).
  - 추세 분석 7단계, 예측 시 주의(데이터 포인트가 12개 미만이면 낮은 신뢰, 범위로 제시).
  - 어트리뷰션 모델 6종 비교와 함정("인지 채널은 last-touch에서 늘 나빠 보인다").
  - **최적화 7단계:** Identify → Diagnose(퍼널의 어디인가) → Hypothesize(오디언스·메시지·크리에이티브·오퍼·타이밍·기술) → Prioritize → Test → Measure → Scale/Iterate. 퍼널 단계별 레버 표, 테스트 원칙("실패한 테스트도 문서화하고 공유하라").
- **이 상황에서의 시나리오:**
  - 리더가 **팀 주간 리포트 포맷을 이 스킬의 Weekly 템플릿으로 고정**한다(지표 3개, 잘된 것, 주의할 것, 이번 주 우선순위). 팀원은 숫자를 붙여넣어 초안을 만들고, 사람의 시간은 ④의 "왜(가설)"와 ⑦·⑧의 "다음 액션"에 쓴다. P4("분석 방향")를 바로잡는 직접적인 장치는 **"What Worked = 데이터 + 가설 + 재현법" 구조**와 **"Recommendation은 반드시 특정 인사이트에 연결"** 규칙이다.
  - 역할별 유형: 퍼포먼스는 Channel(Paid), 콘텐츠·SNS는 Channel(Social)과 Content, 브랜드·CRM은 Channel(Email)과 Overall.
  - 월말에는 같은 데이터를 Monthly 템플릿으로 재사용한다(한 번 모으고 여러 번 쓰기).
- **한계:** 미국 B2B 벤치마크다. 브랜드 지표(인지도, 브랜드 검색량, 브랜드 리프트)가 약하다. 국내 매체 데이터는 수작업으로 넣어야 한다. 리포트 작성 자체가 목적이 되는 위험이 있으므로 **주간은 최소 포맷만** 쓰는 것이 좋다.
- **설치/호출:** `marketing` 플러그인 → `/marketing:performance-report <기간·캠페인>`.

### A4. `product-management:metrics-review` ★★★★☆ (P1: 지표 계층으로 "내 지표가 목표에 어떻게 닿는지" 보여 주기)
- **무엇을 하나:** 주간·월간·분기 지표 리뷰를 수행하고, 스코어카드와 권고 액션을 만든다.
- **안에 있는 방법과 템플릿:**
  - **지표 계층:** North Star(가치 정렬, 선행성, **팀이 움직일 수 있음**, **모두가 이해함**) → L1 건강 지표 5~7개 → L2 진단 지표. "계층이 정의되어 있지 않으면 먼저 North Star와 L1부터 함께 정하라."
  - 스코어카드 표(Current/Previous/Change/Target/Status), Bright Spots, Areas of Concern, **Recommended Actions 4유형(조사, 실험, 투자, 알림)**, Context·Caveats("추적해야 하는데 안 하고 있는 지표"까지 적는다).
  - **OKR 규칙:** 목표 2~3개에 KR 2~4개씩. **KR은 산출(output)이 아니라 결과(outcome)로.** 스트레치 OKR은 달성률 0.7을 목표로 한다. 기간 중간에 점검한다.
  - **목표치 설정 5요소:** Baseline, Benchmark, Trajectory, Effort, Confidence(Commit과 Stretch를 나눈다).
  - 리뷰 주기: 주간 15~30분, 월간 30~60분, QBR 60~90분. 각 주기별 의제와 "Action" 규정.
  - 대시보드 원칙: "**데이터가 아니라 질문에서 출발하라**", "지표는 적게, 인사이트는 많이", "**팀이 영향을 줄 수 없는 지표는 대시보드에 두지 마라**". 반패턴: 허영 지표, **활동량을 재는 output 대시보드**, 모든 독자에게 대시보드 하나.
  - 알림 위생: 모든 알림은 실행 가능해야 하고 **담당자(owner)가 지정**되어야 한다.
  - Tips: **"리뷰가 액션을 최소 1개 만들지 못하면 쓸모없는 리뷰다."**
- **이 상황에서의 시나리오:**
  - 디자인씽킹 워크숍 형식으로 **"마케팅 지표 나무(metric tree)"를 팀과 함께 그린다.** 팀 North Star 하나(예: 월 재구매 고객 수, 월 유효 리드 수)를 정하고, 역할별 L1(퍼포먼스는 CAC·ROAS, 콘텐츠는 저장·공유율과 유입, CRM은 재구매율)을 붙이고, L2로 진단한다. 팀원 각자가 "내가 모으는 숫자가 North Star의 어느 가지인가"를 눈으로 확인하게 하는 것이 P1의 핵심이다(형제 폴더 `03_goal_setting_alignment.md`의 line of sight 논의와 연결된다).
  - 목표치는 리더가 내려보내지 않는다. 5요소(Baseline, Benchmark, Trajectory, Effort, Confidence)를 놓고 **팀이 Commit/Stretch를 제안**하게 한다(참여적 목표 설정).
  - "output 대시보드 반패턴"은 "게시물 몇 개 올렸나" 같은 활동량 보고를 결과 지표로 바꾸는 근거로 쓴다.
- **한계:** 제품 PM 용어(DAU, 활성화, 리텐션)로 쓰여 있어 마케팅 용어로 옮겨야 한다. 마케팅 고유 지표는 A3이 더 풍부하다. 커넥터는 Amplitude와 Pendo 중심이다.
- **설치/호출:** `product-management` 플러그인 → `/product-management:metrics-review <기간·초점>`.

### A5. `marketing:campaign-plan` ★★★☆☆ (P1·P2: 측정을 사후 숙제가 아니라 사전 설계로)
- **무엇을 하나:** 캠페인 브리프를 만든다(목표, 오디언스, 메시지, 채널, 콘텐츠 캘린더, 성공 지표, 리스크).
- **안에 있는 방법과 템플릿:** **Objective → Audience → Message → Channel → Measure** 5요소. SMART 목표 예시. 오디언스 한 줄 템플릿("[역할]인데 [고통]을 겪고 [원하는 결과]를 찾는다. 주로 [채널]에서 발견하고 [우선순위]를 중시한다"). 메시지 위계 4단(왜 신경 써야 하나, 해법, 왜 우리, 무엇을 할까). 채널 선택표(Owned/Earned/Paid). 캘린더 작성법(마일스톤 역산, **20% 여유 슬롯**). 제작 리드타임. 예산 배분 프레임. **7. Success Metrics(Primary KPI와 목표치, Secondary 3~5개, 추적 방법, 보고 주기)**. 캠페인 유형별 지표표. 리스크와 완화책.
- **이 상황에서의 시나리오:** 캠페인 킥오프 때 **팀원이 "7. Success Metrics"를 먼저 작성**한다. 그다음 리더와 합의한다. 이 합의가 곧 **데이터 수집 계획**이 된다. 수집이 "캠페인이 끝난 뒤 리더가 시키는 일"에서 "내가 기획 단계에서 정한 측정"으로 바뀐다. 그러면 정당성이 생기고 "이것까지?"라는 반응이 줄어든다.
- **한계:** 수집 방법(어디서, 누가, 언제, 몇 분)은 "How each metric will be tracked" 한 줄뿐이라 T1으로 보강해야 한다. 예시는 미국 B2B다.
- **설치/호출:** `marketing` 플러그인 → `/marketing:campaign-plan <목표·제품>`.

### A6. `data:analyze` ★★★☆☆ (P4: 분석 깊이에 대한 기대를 명시)
- **무엇을 하나:** 자연어 데이터 질문에 답한다. 단순 조회부터 정식 보고서까지 다룬다.
- **안에 있는 방법과 템플릿:** **복잡도 3단계(Quick answer / Full analysis / Formal report)**와 단계별 출력 형식. Quick은 답과 쿼리, Full은 핵심 발견을 먼저 쓰고 근거, 단서, 후속 질문을 붙인다. Formal은 요약, 방법론, 발견, 한계, 권고로 구성된다. 발표 전 검증 5개(행 수, Null, 규모, 추세 연속성, 집계 논리).
- **이 상황에서의 시나리오:** "분석 수준이 내가 원하는 것과 다르다"의 상당수는 **기대 깊이를 말하지 않아서** 생긴다. 리더가 요청할 때 "이건 Quick(숫자 하나와 한 줄 해석)", "이건 Full(원인 분해와 후속 질문)"이라고 **라벨을 붙이는 관행**을 만들면 과잉 분석과 과소 분석이 함께 줄어든다.
- **한계:** 웨어하우스 중심이고 마케팅 특화가 아니다. 설치하기보다 3단계 라벨만 차용해도 충분하다.
- **설치/호출:** `data` 플러그인 → `/data:analyze <질문>`.

### A7. `data:explore-data` ★★★☆☆ (P3: 기존 데이터의 품질을 사실로 진단)
- **무엇을 하나:** 테이블이나 파일을 프로파일링한다(형태, 품질, 패턴).
- **안에 있는 방법과 템플릿:** 컬럼 7분류(식별자, 차원, 지표, 시간, 텍스트, 불리언, 구조형). Null 경고 기준(5% 초과면 경고, 20% 초과면 알림). **완전성 4색 점수**. 일관성 점검("USA/US/United States" 같은 표기 혼재). 자리값 탐지("N/A", "TBD", 999999). **스키마 문서 템플릿**(Description, **Grain = 한 행은 무엇인가**, PK, 갱신 주기, **Owner**, 핵심 컬럼, Known Issues). 후속 분석 3~5개 제안.
- **이 상황에서의 시나리오:** 팀이 그동안 쌓아 온 **'캠페인 성과 시트'를 업로드해 프로파일링**한다. 그러면 "채널명 표기 7종 혼재(인스타/인스타그램/IG/insta…)", "UTM 캠페인 값 누락 23%", "날짜 형식 3종" 같은 사실 기반 진단이 나온다. 이것을 근거로 **명명 규칙과 UTM 규칙을 팀과 합의**한다. 잔소리가 아니라 데이터가 보여 주는 문제라서 수용성이 높다. 스키마 문서 템플릿은 팀 시트의 **'README 탭'**으로 쓴다.
- **한계:** 이미 있는 데이터를 전제로 한다. 무엇을 새로 모을지 설계하는 기능은 없다.
- **설치/호출:** `data` 플러그인 → `/data:explore-data <테이블·파일>`.

### A8. `data:build-dashboard` ★★☆☆☆ ~ ★★★☆☆ (P1: 프로토타이핑 도구)
- **무엇을 하나:** Chart.js 기반의 **단일 HTML 대시보드**를 만든다. 서버가 필요 없고 오프라인에서도 열린다.
- **안에 있는 방법과 템플릿:** 요구 정의(목적, 독자, 핵심 지표, 차원, 소스). 표준 레이아웃(KPI 카드 2~4개, 차트 1~3개, 상세 표). **데이터가 없으면 샘플 데이터로 만들고 그 사실을 표시**한다. 필터와 정렬 코드 패턴. 데이터 규모별 가이드(10만 행 초과는 BI 도구로).
- **이 상황에서의 시나리오:** 디자인씽킹의 **프로토타입 단계**로 쓴다. 데이터 브리프를 합의하기 전에 **샘플 데이터로 "매주 우리가 보게 될 화면"을 먼저 만들어** 팀에 보여 준다. 그러면 "이 칸을 채우려면 무엇을 모아야 하나"를 거꾸로 따라가게 되고, 수집 목적이 눈에 보인다.
- **한계:** 특정 시점의 스냅샷이라 실시간이 아니다. 데이터 갱신은 수작업이다. Looker Studio 같은 정식 BI를 대신하지 못한다.
- **설치/호출:** `data` 플러그인 → `/data:build-dashboard <설명> [데이터]`.

### A9. `product-management:synthesize-research` ★★★★☆ (P2: 팀원 목소리 합성. 의외로 적합도가 높음)
- **무엇을 하나:** 인터뷰, 설문, 피드백을 주제(theme)로 합성하고 우선순위를 매긴다.
- **안에 있는 방법과 템플릿:** 자료별 추출 항목(관찰, **인용**, **행동과 진술의 구분**, 고통점과 우회 행동, 긍정 신호, 맥락). **주제 분석 6단계**(익숙해지기, 코딩, 주제 개발, 검토, 정제, 보고). **어피니티 매핑**(1 메모 1 관찰, "묶는 과정 자체가 공동 이해를 만든다"). **삼각검증**(방법, 출처, 시간). **빈도×영향 2x2**. 발견마다 **신뢰도(H/M/L)**를 매기고 "인터뷰 2건에서 나온 발견은 결론이 아니라 가설". 인용은 이름이 아니라 **참여자 유형으로 귀속**한다. "우회 행동은 숨은 미충족 니즈다."
- **이 상황에서의 시나리오:**
  - **(내부용, 핵심)** 리더가 팀원과 15~20분씩 1:1 인터뷰를 한다. 질문 예: "데이터 정리가 귀찮은 순간은 언제인가?", "최근 데이터가 내 일에 실제로 도움이 된 적은?", "결과가 어디에 쓰이는지 알고 있나?". 메모를 넣어 합성하면 **수집 부담의 원인 주제**가 빈도×영향으로 정렬된다(예: 같은 숫자의 중복 입력, 결과가 다시 돌아오지 않음, 목적을 모름, 도구 전환 비용). 디자인씽킹의 '공감' 단계를 팀 내부에 적용하는 셈이다. 리더가 **"이것까지 해야 돼?"를 저항이 아니라 데이터로 다루게** 된다. 참여자 유형 귀속 규칙은 심리적 안전에도 유리하다.
  - (외부용) 브랜드·CRM 담당이 고객 리뷰, 댓글, CS 문의를 합성해 인사이트를 만든다.
- **한계:** 제품 리서치용이다. 팀이 3~8명이면 빈도 수치가 의미가 약하다(스킬 스스로 "2건 = 가설" 규칙을 두고 있다). 인터뷰를 리더가 직접 하면 솔직한 답이 줄 수 있으므로 익명 설문을 함께 쓴다.
- **설치/호출:** `product-management` 플러그인 → `/product-management:synthesize-research <주제>`.

### A10. `operations:process-optimization` ★★★☆☆ (P2: 수집 업무 자체를 덜어내기)
- **무엇을 하나:** 프로세스를 분석하고 개선한다. 39줄짜리 짧은 프레임이다.
- **안에 있는 방법과 템플릿:** ① 현 상태 지도(모든 단계, 결정 지점, 인수인계, 소요 시간, 대기) ② **낭비 5종: Waiting, Rework, Handoffs, Over-processing, Manual work** ③ 미래 상태(제거, 자동화, 인수인계 축소, 병렬화, **"관문이 아니라 체크포인트"**) ④ 효과 측정(시간 절감, 오류율, 비용, **직원 만족**). 출력은 Before/After 비교, 권고, 실행 계획.
- **이 상황에서의 시나리오:** "데이터 수집과 정리" 업무를 팀원별로 실제 분 단위로 지도화한다. 매체 리포트 다운로드, 시트 붙여넣기, 표기 정리, 캡처, 보고서 작성 같은 단계마다 낭비를 표시한다. 그리고 **리더가 먼저 무언가를 빼 준다**(예: 아무도 안 보는 주간 캡처 보고 폐지, Supermetrics로 매체 데이터 자동 수집). "이것까지?"에 대한 최선의 답은 설득이 아니라 **'정말 불필요한 것은 실제로 없애는 것'**이다. 이는 불필요한 업무(illegitimate tasks) 연구와도 맞닿아 있다(형제 폴더 `04_...` 참고).
- **한계:** 프레임만 있고 깊이가 얕다. operations 플러그인 9개 중 나머지(vendor-review, compliance-tracking 등)는 무관하다. **설치하기보다 프레임 차용이나 폴더 발췌가 낫다.**
- **설치/호출:** `operations` 플러그인 → 자연어 트리거("this process is slow", "bottleneck").

### A11. `operations:status-report` ★★☆☆☆ (P5: 상향 보고와 루프 닫기)
- **무엇을 하나:** KPI, 리스크, 액션 아이템이 들어간 상태 보고서를 만든다.
- **안에 있는 방법과 템플릿:** Executive Summary, 전체 상태(On Track/At Risk/Off Track), Key Metrics(Target/Actual/Trend/Status), 성과, 진행 중 항목(Owner/ETA), Risks(Mitigation/Owner), **Decisions Needed(맥락, 기한, 권고안)**, 다음 우선순위 3개. Tips: "첫 3줄이 전부다", "리스크는 일찍 정직하게", "결정을 쉽게 만들어라(권고안 포함)".
- **이 상황에서의 시나리오:** 리더가 상부(대표·본부장)에 보고할 때 쓴다. 더 중요한 활용은 **보고 뒤 "팀 데이터가 위에서 어떤 결정에 쓰였는지"를 팀에 다시 공유하는 것**이다. 수집이 의미 있었다는 체감(closing the loop)이 P2의 강력한 해독제다.
- **한계:** 범용 형식이라 이미 설치된 `internal-comms`의 3P와 겹친다. 별도로 설치할 필요는 낮다.
- **설치/호출:** `operations` 플러그인 → `/operations:status-report [weekly|monthly] [팀]`.

### A12. `productivity:task-management` ★★☆☆☆ (P5: 액션 추적)
- **무엇을 하나:** `TASKS.md` 파일 하나로 할 일을 관리한다(Active / Waiting On / Someday / Done). `dashboard.html` 보드가 함께 온다.
- **안에 있는 방법과 템플릿:** 항목 형식 `- [ ] **제목** - 맥락, for 누구, due 날짜`. **회의·대화 요약에서 할 일을 추출하되, 등록 전에 반드시 확인**한다. Done 항목은 1주 뒤 정리한다.
- **이 상황에서의 시나리오:** 주간 회고에서 나온 "다음 액션"을 등록한다. **다음 회고의 첫 5분은 "지난주 액션 결과"를 확인하는 데 쓴다.** 분석 → 액션 → 결과 → 다음 분석의 루프가 닫혀야 "분석해도 아무것도 안 바뀐다"는 냉소가 사라진다.
- **한계:** 개인용 로컬 파일이다. 팀 공유가 필요하면 Notion이나 Asana 커넥터를 써야 한다. productivity 플러그인은 memory-management 등과 묶여 설치된다. **템플릿만 T3에 흡수하는 편이 가볍다.**
- **설치/호출:** `productivity` 플러그인(자동 참조 전용).

### A 요약표

| 스킬 | 플러그인 | 적합도 | 주 병목 | 권장 사용 방식 |
|---|---|---|---|---|
| data-context-extractor | data | ★★★★★ | P3 | 설치 후 정의 워크숍 → 팀 컨텍스트 스킬 생성 |
| validate-data | data | ★★★★★ | P4 | 설치. 팀원 셀프 QA 게이트로 규칙화 |
| performance-report | marketing | ★★★★☆ | P4·P5 | 설치. 주간·월간 포맷 고정 |
| metrics-review | product-management | ★★★★☆ | P1 | 설치하거나 지표 나무 워크숍 프레임만 차용 |
| synthesize-research | product-management | ★★★★☆ | P2 | 설치. 팀원 인터뷰 합성 |
| campaign-plan | marketing | ★★★☆☆ | P1·P2 | 설치. 7번(Success Metrics)을 수집 계획으로 사용 |
| analyze | data | ★★★☆☆ | P4 | 3단계 깊이 라벨 차용 |
| explore-data | data | ★★★☆☆ | P3 | 기존 시트 품질 진단, README 탭 템플릿 |
| process-optimization | operations | ★★★☆☆ | P2 | 프레임 차용 또는 폴더 발췌 |
| build-dashboard | data | ★★~★★★ | P1 | 샘플 데이터 프로토타이핑 |
| status-report | operations | ★★☆☆☆ | P5 | 3P와 중복, 선택 |
| task-management | productivity | ★★☆☆☆ | P5 | 템플릿만 T3에 흡수 |

---

## 3. B. 이미 설치된 스킬에서 옮겨 쓸 수 있는 패턴

### B1. `kikitv-daily-sns`: 리더의 개인 운영 원칙을 팀 루틴으로 확장하기
리더는 이미 이 문제의 축소판(혼자서 지표를 보고, 회고하고, 다음 액션을 정하는 일)을 **지속 가능한 형태로 풀어 둔 경험**이 있다. 팀이 얼라인되지 않는 이유 중 하나는, 이 암묵적 운영 원칙이 팀에게 **명시적으로 전달되지 않았기 때문**일 수 있다.

| 원문 패턴 | 원문 표현(요지) | 팀 이식 버전 |
|---|---|---|
| **지표 3개만** | "지표 3개 확인(5분): CTR / 초반 30초 리텐션 / 트래픽 소스" | 역할별 **지표 카드 = 지표 3개.** 4번째를 넣으려면 하나를 빼는 one-in-one-out 규칙 |
| **임계값에서 액션으로** | "CTR<4%면 썸네일 교체 제안, 초반 이탈 급증이면 훅 부검을 회고 안건에 추가" | 지표마다 **'이 값이면 이 행동'** 트리거를 명시(예: CPA가 목표 대비 +20%로 3일 연속이면 소재 교체 검토). 숫자를 모으는 이유가 **결정 규칙**으로 보인다 |
| **원천 1, 파생 다수** | "주 1회 롱폼에서 쇼츠 5~7, 릴스 3~5, Threads 5~10" | **"한 번 수집하고 여러 번 활용"**: 같은 원천 데이터가 주간 3P, 월간 리포트, 캠페인 회고에 재사용되도록 설계해 중복 수집을 없앤다 |
| **데일리의 정의를 다시 쓰기** | "데일리는 새로 만드는 날이 아니라 배포하고 대화하는 날" | "데이터 루틴은 **리포트를 만드는 날이 아니라 보고 결정하는 날**" |
| **시스템 붕괴 신호와 제지** | "매일 새 콘텐츠를 만들려는 순간 무너진다. 그 방향이면 제지하라" | 팀 스킬에 **과잉 수집 제지 가드레일**: "일단 다 모아두자", 지표 4개 이상, 결정 없는 수집을 감지하면 경고 |
| **시간 박스** | "30~45분, 단계별 분 배정" | 월요일 지표 확인 10분, 금요일 회고 30분. 데이터 업무의 **상한선을 명시**해 부담 인식을 관리 |
| **상위 1개 심층** | "공유 수 상위 1개 분석(왜 공유됐나) → 다음 주 훅 패턴에 반영" | 회고에서 **상위 1개와 하위 1개만 "왜?"를 깊게** 파고, 다음 주 시도 1개로 연결 |
| **무너졌을 때의 우선순위** | "아이디어, 릴스, Threads 순으로 버리고, **지표 확인과 댓글은 마지막까지 지킨다**(이유 명시)" | 바쁜 주에 **버리는 순서**(심층분석 → 대시보드 → 3P)와 **끝까지 지킬 2가지**(지표 3개 확인, 지난 액션 결과 확인)를 이유와 함께 공개. 바쁠 때 데이터가 가장 먼저 버려지는 것을 막는다 |
| 아이디어 수집 + 태그 | "아이디어 3개 + 필러(P1~P4) 태그" | 관찰한 인사이트를 **가설 백로그**로 쌓고 태그(채널, 퍼널 단계)를 단다 |

### B2. `ebp-expert-panel`: 분석 품질 기준과 근거 등급 체계
- **패턴:** ① 질문을 **검증 가능한 주장 1~3개로 재진술**한다. ② **도메인별 근거 위계**(비즈니스: 대규모 실증 > 다중 사례 > 단일 사례 > 의견). ③ 자료마다 **A/B/C/D 등급**을 매긴다. ④ **악마의 변호인 1명을 반드시** 두고, 반대 논리 3~4개를 각각 기각하거나 부분 인정한다. ⑤ 판정표(통과/주의/기각). ⑥ 권고에 **"이번 주 당장 할 것"**을 넣는다. ⑦ **도전 질문 1개**(전제를 흔드는 소크라테스식 질문). ⑧ 응답 전 자체 품질 체크. ⑨ 메타데이터 YAML(verdict, evidence_grade, next_action).
- **팀 이식:**
  - **마케팅 데이터 근거 등급(제안):** A = 통제 실험(A/B, 홀드아웃, 지역 분할). B = 여러 기간·세그먼트에서 반복된 추세. C = 단일 캠페인·단일 기간의 관찰. D = 감, 댓글 몇 개, 경쟁사 사례. 팀원이 인사이트마다 등급을 붙이면, 리더가 "방향이 다르다"고 느끼는 지점(**C·D 근거로 큰 결론을 내리는 것**)이 언어화된다.
  - 분석 리뷰에서 **"대안 설명 2개"를 의무화**한다(악마의 변호인의 경량판).
  - 리더의 코칭 질문 = 도전 질문 1개. 정답을 주기보다 질문으로 방향을 잡게 한다.
  - 메타데이터 YAML을 리포트 끝에 붙여 **분석 아카이브를 태깅**한다. 3개월 뒤 "근거 등급 A 인사이트만" 다시 볼 수 있다.
- **직접 활용:** 리더가 "우리 팀 데이터 문화 개입안(예: 목표 공동 설정, 주간 회고, 수집량 감축)"을 EBP로 검증할 수 있다. 형제 폴더 `마케팅팀 데이터 얼라인 선행연구/`의 노트가 이미 A~D 등급 체계를 쓰고 있어 그대로 입력할 수 있다.
- **한계:** 웹 검색을 전제로 한 리서치 스킬이다. 팀원의 일상 리포트 리뷰에 그대로 쓰기에는 무겁다. **등급 체계와 체크리스트만 T2로 이식**한다.

### B3. `internal-comms`: 3P와 FAQ로 목적과 루프를 공유
- **패턴:** ① **3P(Progress/Plans/Problems):** 30~60초 안에 읽힘, 섹션당 1~3문장, **data-driven(가능하면 지표 포함)**, 건조하고 사실적인 톤. 수집 범위는 지난 1주(Progress, Problems)와 다음 1주(Plans). ② **FAQ:** 많은 사람이 헷갈려하는 질문을 찾아 질문 1문장과 답 1~2문장으로 쓴다. **불확실하면 명시**하고, 경영진 판단이 필요하면 표시한다. ③ general: 독자, 목적, 톤, 형식을 먼저 확인한다.
- **팀 이식:**
  - 팀 주간 공유를 3P로 통일하되, **Progress에 숫자 1개 이상, Problems에 "데이터 수집·정리 장애"를 올릴 수 있는 공식 칸**을 만든다. 불만이 뒷말이 아니라 개선 안건이 되게 한다.
  - **"데이터 수집 FAQ"**: "왜 이 지표를 모으나요?", "이 시트는 누가 보나요?", "바쁠 때는 무엇을 빼도 되나요?" 같은 질문을 팀의 숨은 질문(합성 결과는 A9에서 가져온다)으로 만들고 리더가 답해 문서화한다. 목적 커뮤니케이션을 한 번의 연설이 아니라 **검색 가능한 문서**로 남긴다.
- **한계:** 1000명 넘는 회사를 가정하고 이모지를 고정 서식으로 쓴다. 작은 팀에 맞게 형식을 조정해야 한다.

### B4. `doc-coauthoring`: 원칙 문서를 공동 작성하고 리더 의도가 전달되는지 검증
- **패턴:** Stage 1 맥락 수집(문서 유형, **독자**, **읽은 뒤 바라는 영향**, 템플릿, 제약 → 정보 덤프 → 빈틈 기반 질문 5~10개). Stage 2 섹션별 정제(**미지수가 가장 많은 섹션부터**, 5~20개 브레인스토밍, **keep/remove/combine 큐레이션과 이유**, 빈틈 점검, 초안, 국소 수정. 3회 연속 큰 변화가 없으면 "뺄 것은?"을 묻는다). Stage 3 **Reader Testing**(맥락이 없는 새 Claude에게 문서만 주고 예상 독자 질문 5~10개를 던져 모호함, 숨은 전제, 모순을 찾는다).
- **팀 이식:**
  - **"마케팅팀 데이터 운영 원칙(Data Charter) v0.1"을 팀과 함께 쓴다.** Stage 2의 브레인스토밍과 keep/remove/combine을 **팀 워크숍에서 팀원이 직접** 하게 한다. 리더가 쓰고 공지하는 대신 팀이 고르고 버리는 과정을 거치면 참여적 목표 설정과 소유감 효과를 노릴 수 있다(형제 폴더 `03_...`, `04_...`, `06_...` 참고).
  - **Reader Testing을 "신입 테스트"로 바꾼다:** 원칙 문서만 읽고 "이번 주 내가 무엇을 왜 모으는지", "바쁠 때 무엇을 빼도 되는지"에 답할 수 있는가? 이것이 **리더 의도가 실제로 전달되는지 확인하는 객관적 테스트**다. 리더가 "얼라인이 안 된다"고 느끼는 원인이 리더 자신의 문서나 말의 모호함에 있는지도 함께 드러난다.
- **한계:** 문서 작성 과정이 길다(3단계). 첫 버전은 1페이지로 제한하는 편이 좋다.

### B5. `skill-creator`: 리더의 기준을 팀 스킬로 인코딩하는 엔진
- **패턴:** 의도 파악 질문 4개(무엇을 하나, 언제 발동하나, 출력 형식, 테스트 필요 여부). 인터뷰와 리서치. **SKILL.md 구조**(frontmatter의 name과 description + 본문 + `scripts/`, `references/`, `assets/`). **점진적 공개**(본문 500줄 이하, 세부는 references로). **description은 약간 "공격적으로"**(덜 발동하는 경향을 보정). **"MUST를 대문자로 쓰기보다 왜(why)를 설명하라."** 테스트 프롬프트 2~3개 → `evals/evals.json` → **스킬 있음/없음(baseline) 동시 실행** → 채점(grader), 집계(aggregate_benchmark), 리뷰 뷰어(generate_review.py) → `feedback.json` → 개선 반복. description 최적화(쿼리 20개, train/test를 60/40으로 나눔). `package_skill.py`로 `.skill` 파일을 만들면 **"Save skill" 버튼으로 설치**할 수 있다(조직이 허용하는 경우).
- **팀 이식:**
  - 리더의 분석 루브릭, 지표 정의, 회고 형식을 팀 스킬로 만들면 **"리더 수준의 1차 피드백"이 팀원 옆에 항상 있게 된다.**
  - **evals = 팀의 실제 과거 리포트(익명) 3~5개와 리더의 판정.** "스킬의 판정이 리더의 판정과 일치하는가"를 assertion으로 쓰면 **리더 기준이 제대로 인코딩되었는지 측정**할 수 있다. 박사과정 연구자에게 익숙한 '평가자 간 일치도'와 같은 구조다.
  - "why를 설명하라"는 스킬 작성 원칙은 **팀 운영 원칙과도 같다.** 팀원에게도 규칙보다 이유를 설명할 때 자율성이 지켜진다(자기결정성 이론. 형제 폴더 `04_...` 참고). 스킬 본문에도 각 규칙의 이유를 적어 두면, 팀원이 스킬 출력을 읽으며 **리더의 사고방식을 학습**하게 된다.
- **한계와 주의:** claude.ai에서는 서브에이전트가 없어 baseline과 벤치마크가 생략되고 정성 피드백 중심이 된다. **Claude Code나 Cowork에서 만드는 것을 권장**한다. 조직 설정에 따라 팀원 설치(Save skill)가 막혀 있을 수 있다(확인 필요).

---

## 4. 조합 시나리오: 6주 도입 로드맵 (스킬 × 팀 활동)

> 원칙은 세 가지다. **덜어내기를 먼저 하고 더하기는 나중에**, **리더 혼자가 아니라 팀과 함께**, **한 역할로 시범 운영한 뒤 확산.**

| 주차 | 목표 | 리더 활동 | 팀 활동 | 쓰는 스킬 | 산출물 |
|---|---|---|---|---|---|
| W0 | 진단 | 팀원 1:1(15~20분) + 익명 설문 | 현재 수집 업무를 분 단위로 기록 | A9 synthesize-research, A10 process-optimization, A7 explore-data | 부담 원인 주제 지도, 낭비 목록, 기존 시트 품질 진단 |
| W1 | 목적 공동 정의 | 지표 나무 워크숍 진행(디자인씽킹 퍼실리테이션) | North Star와 L1 후보를 고르고 버리기(keep/remove/combine) | A4 metrics-review 프레임, B4 doc-coauthoring | **데이터 운영 원칙 v0.1(1페이지)**, 지표 나무 |
| W2 | 정의 통일과 덜어내기 | **"폐지 목록" 먼저 발표**(아무도 안 보는 보고·캡처) | 정의 워크숍(전환·ROAS·신규 고객) | A1 data-context-extractor | `[팀]-mkt-data-context` 스킬(용어·지표 사전) |
| W3 | 포맷 고정 | 역할별 지표 카드 합의 | 주간 Top 3와 3P 첫 실행 | A3 performance-report(Weekly), B1 kikitv 패턴, B3 3P | 역할별 지표 3개와 임계값 트리거 |
| W4 | 품질 게이트 | 리뷰를 "정확성"에서 "방향·해석"으로 전환 | 리포트 올리기 전 셀프 QA | A2 validate-data, B2 근거 등급 | 리포트마다 Validation Report와 근거 등급 표시 |
| W5~6 | 팀 스킬화 | 루브릭 초안 작성, 과거 리포트 판정 | 루브릭 레벨 서술을 공동 작성, 테스트 | B5 skill-creator, A12 TASKS 템플릿 | T1~T3 팀 스킬(evals 포함) |

**효과 측정(4~8주 뒤 전후 비교, 제안):** 주당 데이터 업무 소요 시간(분), 리포트 재작업 횟수, **회고에서 도출된 액션의 실행률**, 리포트 인사이트의 근거 등급 분포(C·D 비중 변화), 팀 펄스 설문("내가 모으는 데이터가 어디에 쓰이는지 안다"를 5점 척도로).

---

## 5. 역할별 빠른 적용 예 (예시이며 팀과 합의 필요)

| 역할 | 주로 쓸 스킬 | 지표 카드(3개) 예 | 임계값과 트리거 예 |
|---|---|---|---|
| 퍼포먼스 | A3(Paid), A2, A1 | ROAS(자사 실매출 ÷ 총광고비), CPA, 랜딩 전환율 | CPA가 목표 대비 +20%로 3일 연속이면 소재·타깃 점검 안건. 전환율이 전주 대비 -30%면 랜딩·추적 오류부터 확인 |
| 콘텐츠·SNS | A3(Social/Content), B1 | 저장·공유율, 도달 대비 프로필 방문(유입), 팔로워 순증 | 공유율 상위 1개는 "왜 공유됐나" 분석 후 다음 주 기획에 반영. 2주 연속 도달 하락이면 포맷 실험 1개 |
| 브랜드·CRM | A4, A9, A3(Email) | 재구매율, CRM 메시지 클릭·전환율, 브랜드 검색량 | 재구매율이 2개월 연속 하락하면 세그먼트 진단(A2의 선택 편향 주의). 수신 거부율이 기준을 넘으면 발송 빈도 재검토 |

---

## 6. 한계와 리스크 종합

1. **동기 문제는 스킬로 풀리지 않는다.** 스킬을 도입하면 "AI까지 써서 또 보고하라는 건가"라는 반응이 나올 수 있다. 첫 도입은 반드시 **팀의 부담을 줄이는 것**(자동 수집, 폐지 목록, 초안 자동 생성)이어야 한다.
2. **미국 B2B 편향:** 벤치마크, 지표 체계(MQL/SQL/Pipeline), 예산 비율을 국내 B2C·커머스 맥락으로 바꿔야 한다.
3. **국내 매체 커넥터 부재:** 네이버, 카카오, 쿠팡 데이터는 CSV나 시트로 넣어야 한다. 자동화 기대치를 과장하지 않는다.
4. **커넥터 설정 공백:** Google Calendar와 Gmail(각 플러그인), Snowflake와 Databricks(data)는 `.mcp.json` URL이 비어 있어 직접 설정해야 한다.
5. **스킬 과다:** 플러그인 단위로 설치하면 무관한 스킬 수십 개가 함께 들어와 잘못 발동할 수 있다. 필요한 것만 발췌하는 방안(1.2절)을 고려한다.
6. **개인정보:** CRM과 고객 데이터를 업로드할 때 개인 식별 정보는 빼고 **집계 데이터만** 쓴다(국내 개인정보보호법과 사내 보안 정책 확인).
7. **대시보드 스냅샷:** `build-dashboard` 출력물은 실시간이 아니다. 정기 운영은 Looker Studio 같은 BI로 하고, 스킬은 프로토타입과 일회성 분석용으로 쓴다.
8. **Cowork 전용 기능:** `cowork-plugin-customizer`와 `create-cowork-plugin`은 Cowork 데스크톱 환경이 필요하다(해당 SKILL.md compatibility 항목).
9. **리더 기준의 동결:** 루브릭을 스킬로 굳히면 리더 기준이 '정답'처럼 고정될 수 있다. 분기마다 팀과 함께 개정하고, evals에 **팀원이 낸 반례**를 추가하는 절차를 둔다.

---

## 7. 팀 전용 스킬 아이디어 (skill-creator로 제작)

> **구조:** 기반층 1개(정의) + 실행 스킬 3개(수집 전, 분석 후, 주간 루프). 기반층은 A1(data-context-extractor)로 만들고, 실행 스킬은 B5(skill-creator)로 만든다. 세 실행 스킬이 같은 `references/metrics.md`와 `metric-tree.md`를 공유하면 **정의가 한곳에서 관리된다.**
>
> **공동 설계 원칙:** skill-creator의 "의도 파악·인터뷰" 단계를 리더 혼자가 아니라 **팀 세션**으로 진행한다. 루브릭 레벨 서술, 지표 카드, 폐지 목록은 팀이 쓰고 리더가 다듬는다. evals에는 팀원의 실제 산출물을 쓴다.

### 기반층: `[팀명]-mkt-data-context` (data-context-extractor로 생성)
- 내용: 용어 사전(전환, 신규 고객, 도달, ROAS의 '우리 팀 정의'), 지표 정의(공식, 출처 시트·매체, 시간 단위, 단서), 표준 제외 규칙(내부·테스트 주문, 체험단, 취소·환불), 흔한 실수(평균의 평균, 기여 기간 차이), 데이터 소스 목록(시트 탭, 매체 리포트 양식, 갱신 주기, 담당자).
- 이 스킬이 있으면 아래 T1~T3이 정의를 반복해서 설명할 필요가 없다.

### T1. `mkt-data-brief`: 수집 전 데이터 브리프 (P1·P2)
- **목적:** 모든 데이터 수집과 리포트 요청 앞에 **"이 데이터로 어떤 결정을 바꾸나"**를 1페이지로 합의한다. 수집의 정당성을 사전에 만들고 불필요한 수집을 걸러낸다.
- **차용한 것:** campaign-plan의 Success Metrics, data:analyze의 깊이 3단계, process-optimization의 낭비 점검, kikitv의 지표 3개 규칙.
- **SKILL.md 스케치:**
```markdown
---
name: mkt-data-brief
description: 마케팅팀이 데이터를 모으거나, 리포트를 요청·작성하거나, 캠페인 측정을 설계하기 '전에' 1페이지 데이터 브리프를 만든다. "이거 데이터 좀 뽑아줘", "성과 정리해야 돼", "캠페인 측정 어떻게 하지", "이 지표 왜 모아요?", "트래킹/UTM 세팅", "대시보드 만들자" 등 수집·측정 계획이 걸린 요청이면, 사용자가 '브리프'라고 말하지 않아도 이 스킬을 사용하라.
---
# 데이터 브리프

## 이 스킬이 있는 이유 (팀이 합의한 원칙 원문 3줄)
- 우리는 결정을 바꿀 데이터만 모은다. 결정이 없는 수집은 팀의 시간을 빼앗는다.
- ...

## 0. 수집 전 게이트 질문 3개 (하나라도 답이 없으면 브리프를 멈추고 함께 질문을 다듬는다)
1) 이 데이터로 바꿀 '결정'은 무엇인가? (예: 다음 주 예산 재배분, 소재 교체 여부)
2) 그 결정은 지표 나무의 어느 가지인가? → references/metric-tree.md
3) 이미 있는 데이터로 답할 수 있나? → references/data-sources.md

## 1. 브리프 템플릿 (1페이지)
| 항목 | 내용 |
| 결정 질문 | |
| 가설 ("~라면 ~할 것이다") | |
| 지표 (최대 3개, 정의는 [팀]-mkt-data-context 링크) | |
| 비교 기준 (전기간 / 목표 / 대조군) | |
| 판단 규칙 ("X 이상이면 A, 미만이면 B") | |
| 출처·수집 방법·담당·예상 소요(분) | |
| 분석 깊이 (Quick / Full / Formal) | |
| 검토일 · 중단 기준 (언제 이 수집을 멈추나) | |

## 2. 수집 부담 점검 (낭비 5종: 대기·재작업·인수인계·과잉처리·수작업)
- 같은 숫자를 두 군데 이상 입력하나? 자동화(커넥터/시트 함수)가 가능한가?

## 3. 가드레일 (각각 이유를 함께 설명할 것)
- 지표가 4개 이상이면 → 하나를 빼자고 제안 (one-in-one-out)
- "일단 다 모아두자" → 결정 질문부터 다시 묻기
- 새롭거나 복잡한 과제 → 성과 목표 대신 '학습 목표'(무엇을 알아낼지)로 쓰기

## 4. 출력 형식 + 예시
references/examples/performance-brief.md, crm-brief.md

references/: metric-tree.md · data-sources.md · examples/
evals/: 모호한 요청 3개 ("인스타 데이터 다 뽑아줘" 등) → 게이트 질문이 작동하는지, 지표가 3개 이하인지 assertion
```

### T2. `mkt-analysis-review`: 리더 루브릭 기반 분석 리뷰 (P4)
- **목적:** 팀원 리포트를 **리더의 기준으로 1차 리뷰**한다. "공유 가능 / 단서 달고 공유 / 보완 후 재검토" 판정과 성장 지향 피드백을 준다. 리더는 2차로 방향과 해석만 코칭한다.
- **차용한 것:** validate-data의 체크리스트·함정 카탈로그·3단계 판정, EBP의 주장 재진술·근거 등급·악마의 변호인·도전 질문, performance-report의 "인사이트에 연결된 권고".
- **SKILL.md 스케치:**
```markdown
---
name: mkt-analysis-review
description: 팀원이 작성한 마케팅 성과 리포트·분석·캠페인 회고를 [리더명]의 분석 루브릭으로 리뷰하고 공유 가능 여부와 개선 코멘트를 준다. "리포트 봐줘", "이 분석 괜찮아?", "팀장님께 올리기 전에 체크해줘", "인사이트 맞아?", "회고 문서 검토" 등 분석 산출물을 평가·개선하는 요청이면 사용하라.
---
# 분석 리뷰

## 리더가 분석에서 보는 것 (철학 5줄, 리더 육성 원문)
- 숫자 자체보다 "그래서 무엇을 바꾸나"를 본다. 이유: ...
- ...

## 1. 리뷰 절차
1) 문서의 핵심 주장 1~3개를 한 문장씩 재진술한다
2) 정확성 게이트: references/qa-checklist.md (기간 완전성, 분모 일관성, 평균의 평균, 지표 정의 = 팀 사전 일치)
3) 루브릭 채점: references/rubric.md (6개 기준 × 3레벨)
4) 주장마다 근거 등급 A/B/C/D
5) 대안 설명 2개 (악마의 변호인)
6) 판정: 바로 공유 / 단서 달고 공유 / 보완 후 재검토

## 2. 루브릭 요약 (레벨 서술은 팀과 공동 작성)
| 기준 | 1 초안 | 2 공유 가능 | 3 리더 기대 수준 |
| 질문-목표 연결 (지표 나무 어디?) | | | |
| 정의·비교 기준 (팀 사전 준수, 목표/전기간 대비) | | | |
| 근거 강도 (등급 표시, C·D로 큰 결론 금지) | | | |
| 해석 ("왜?" 가설 + 대안 설명) | | | |
| So-what (인사이트와 연결된 액션, 담당, 기한) | | | |
| 전달 (30초 요약, 제목 = 인사이트) | | | |

## 3. 피드백 작성 원칙 (이유 포함)
- 사람이 아니라 과업과 다음 행동에 초점 (자아를 겨냥한 피드백은 수행을 떨어뜨릴 수 있음)
- 강점 1 + 개선 최대 2 + 다음 질문 1 (한 번에 고칠 수 있는 양만)
- 점수보다 '다음 레벨로 가는 구체적 한 수'

## 4. 출력 형식
판정 / 핵심 주장 재진술 / 루브릭 표 / 근거 등급 / 강점 1 / 개선 2 / 도전 질문 1 / (메타데이터 YAML: verdict, evidence_grade, next_action)

references/: rubric.md · qa-checklist.md · examples/good-annotated.md · examples/needs-work-annotated.md
evals/: 과거 리포트(익명) 3~5개 + 리더 판정 → 판정 일치 여부, 개선 코멘트 수 ≤ 2, 사람 평가 문구 없음
```
- **주의:** 리더 판정과의 일치율이 높아질수록 스킬은 리더의 대리인이 된다. **팀원이 스킬 판정에 이의를 제기할 수 있는 경로**(이의는 evals에 반례로 추가)를 반드시 둔다. 그래야 감시 도구가 아니라 학습 도구가 된다.

### T3. `mkt-weekly-loop`: 주간 학습 루프 (P5, 일부 P2)
- **목적:** 리더의 kikitv 운영 원칙을 팀 단위로 옮긴다. 월요일 10분 지표 확인과 금요일 30분 회고(AAR)를 하고, 3P를 공유하고, 액션을 등록하고, 다음 주에 결과를 확인한다.
- **차용한 것:** kikitv-daily-sns(지표 3개, 임계값, 상위 1개 심층, 무너졌을 때의 우선순위), internal-comms(3P), task-management(TASKS 형식, 등록 전 확인), metrics-review("액션이 0개면 실패한 리뷰"), 사후검토(AAR)·디브리프 연구(형제 폴더 `05_feedback_learning_loops.md` 참고).
- **SKILL.md 스케치:**
```markdown
---
name: mkt-weekly-loop
description: 마케팅팀 주간 데이터 루틴. 역할별 지표 3개 확인, 이상 신호 판정, 금요일 30분 회고, 3P 공유, 다음 액션 등록과 지난 액션 결과 확인. "주간 회고", "이번 주 지표", "위클리", "3P 써줘", "지난주 액션 어떻게 됐지", "월요일 체크" 등 팀의 주간 성과 점검·회고 요청이면 사용하라.
---
# 주간 학습 루프

## 원칙: 데이터 루틴은 리포트를 만드는 날이 아니라 보고 결정하는 날이다 (이유: ...)

## 1. 역할별 지표 카드 → references/role-cards.md
  역할 | 지표 3개 | 정의 링크 | 임계값 | 트리거 액션 | 담당

## 2. 월요일 10분
  - 지표 3개 확인 → 임계값을 넘은 항목만 안건으로 → 담당 지정

## 3. 금요일 30분 회고 (순서 고정)
  1) 지난주 액션 결과 확인 (5분)  ← 루프 닫기
  2) AAR 4문항: 무엇을 의도했나 / 실제로 무슨 일이 있었나 / 차이의 이유는 (가설 + 근거 등급) / 다음 주에 다르게 시도할 1가지
  3) 상위 1개 + 하위 1개만 "왜?"를 깊게
  4) 액션 후보 → 사람이 확인한 뒤에만 등록 (TASKS 형식: **제목** - 맥락, 담당, 기한)

## 4. 출력
  - 팀 3P (Progress에 숫자 1개 이상 / Plans / Problems에 '데이터 장애' 칸)
  - 액션 목록 (Notion/Asana가 연결되어 있으면 그쪽에, 없으면 TASKS.md)

## 5. 무너졌을 때의 우선순위 (이유와 함께)
  - 버리는 순서: 심층 분석 → 대시보드 갱신 → 3P 문장 다듬기
  - 끝까지 지킨다: 지표 3개 확인, 지난 액션 결과 확인 (이유: 이 두 가지가 끊기면 '분석해도 안 바뀐다'는 냉소가 시작됨)

## 6. 가드레일
  - 새 지표 추가 요청 → one-in-one-out
  - 회고에서 액션이 0개 → "이번 주에 바꿀 1가지는?"을 다시 묻기

references/: role-cards.md · aar-template.md · 3p-format.md
evals/: 붙여넣은 주간 숫자 + 지난 액션 목록 → 지난 액션 확인이 첫 섹션인지, 액션 ≥1, 3P 각 섹션 ≤3문장
```

### 배포 옵션
- **개별 `.skill` 배포:** skill-creator의 `package_skill.py`로 만든 파일을 팀원에게 공유하고 각자 Save skill로 설치한다(조직 허용 여부 확인 필요).
- **팀 플러그인으로 묶기:** `cowork-plugin-management:create-cowork-plugin`(Cowork 필요)으로 기반층과 T1~T3, 그리고 커넥터(Notion, Google Drive/Sheets, Supermetrics)를 하나의 `[팀]-marketing-ops` 플러그인으로 묶는다. 또는 knowledge-work-plugins의 `marketing` 플러그인을 `cowork-plugin-customizer`로 팀 맞춤화한다(`~~` 자리표시자를 실제 도구로 바꾸는 방식).
- **버전 관리:** 분기마다 팀 회고에서 루브릭과 지표 카드를 개정하고, 스킬 description과 evals를 갱신한다.

---

## 8. 연결 노트와 추가 탐색 후보

- **연결 노트(형제 폴더 `research_notes/마케팅팀 데이터 얼라인 선행연구/`):** `03_goal_setting_alignment.md`(목표 설정, 참여적 목표, line of sight. 복잡하고 새로운 과제에서는 학습 목표가 유리하다는 경계 조건 포함), `04_motivation_ownership_illegitimate_tasks.md`(불필요한 업무, 자기결정성 이론, 심리적 소유감), `05_feedback_learning_loops.md`(사후검토·디브리프, 피드백 개입의 역효과, 심리적 안전), `06_change_codesign_evidence.md`(변화관리, 참여, 공동 설계), `07_korean_context.md`(한국 조직 맥락, 데이터 리터러시). 이 문서의 스킬 매핑은 위 노트의 근거와 함께 읽어야 한다.
- **이번에 분석하지 않은 후보(로컬 저장소에 있음, 추후 검토):**
  - `small-business:report-builder`: 반복 리포트 정의를 **저장해 두고 재실행**한다. CSV와 XLSX만으로도 동작한다. T3 구현에 참고할 만하다.
  - `small-business:growth-pulse`, `marketing-monday`: SMB 오너용 주간 성장 브리핑.
  - `product-management:stakeholder-update`: 같은 진척을 독자별 버전으로 변환한다.
  - `productivity:memory-management`: 팀 약어와 은어 디코딩.
  - 마켓플레이스 파트너 플러그인: `growthbook`(실험 관리), `miro`(워크숍), `airtable`, `canva`, `adspirer-ads-agent`(광고 운영). 각각 내용은 미확인이다.
