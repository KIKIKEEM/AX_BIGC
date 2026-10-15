# GitHub에서 설치하면 좋을 스킬 — 마케팅팀 데이터 얼라인 문제 해결용

> **작성일** 2026-10-14
> **대상** 3~8명 규모 국내 마케팅팀(퍼포먼스, 콘텐츠·SNS, 브랜드·CRM)의 리더. 리더는 디자인씽킹 교육자이자 겸임교수, 박사과정생입니다.
> **범위** 이미 설치한 스킬(internal-comms, doc-coauthoring, skill-creator, ebp-expert-panel, deep-research, kikitv-daily-sns 등)은 추천 목록에서 뺐습니다. 이 스킬들을 어떻게 다시 쓸지는 5장에 정리했습니다.
> **근거**
> - 외부 저장소 12곳: 읽기 전용으로 받아 파일을 직접 검토했고, 코드는 실행하지 않았습니다. 스타 수와 마지막 커밋 날짜는 2026-10-14에 확인한 값입니다.
> - [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins): 로컬 클론(커밋 `02ffa99`, 2026-10-11)으로 분석했습니다. 스타 수는 확인하지 않았습니다.
>
> **같이 읽을 문서**
> - `reports/실무 솔루션 레드팀 반영본.md`: 진단과 실행 설계
> - `research_notes/설치 추천 GitHub 스킬/00_local_skill_analysis.md`: knowledge-work-plugins 스킬 12종 상세

---

## 0. 읽기 전에: 스킬이 풀 수 있는 것과 없는 것

- **"왜 이걸 해야 하나"를 직접 풀어 주는 공개 스킬은 없습니다.** 검토한 스킬들이 해 주는 일은 세 가지입니다.
  1. 리더가 진단하고 설계하는 과정을 구조화합니다.
  2. 팀 산출물의 형식과 품질 기준을 맞춥니다.
  3. 반복되는 수작업을 덜어 줍니다.
- 그래서 일의 순서는 **빼기 → 목적 공동 정의 → 루프 닫기 → 기준 보여 주기**입니다. 스킬은 이 개입을 매주 반복할 수 있게 해 주는 도구로 씁니다.
- **팀에 처음 내놓는 스킬은 팀의 일을 덜어 주는 것이어야 합니다.** 첫 도입이 새 양식이면 "AI까지 써서 또 보고하라는 건가"라는 반응이 나오기 쉽습니다. 초안 자동 생성이나 폐지 목록처럼 일이 줄어드는 것부터 내놓으세요.
- **리더용 진단 스킬(표의 '리더' 표시)의 결과는 리더 혼자 봅니다.** `fixing-underperforming-teams` 같은 스킬 이름이나 진단 문구를 팀에 그대로 보여 주지 마세요.

---

## 1. 한 줄 결론

> **먼저 설치할 것은 세 가지입니다.**
> ① [lenny-skills](https://github.com/refoundai/lenny-skills)에서 5개를 골라 설치합니다. 리더가 정렬과 변화를 설계할 때 씁니다.
> ② [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)의 `change-management`와 `strategic-alignment`를 설치합니다. 저항을 진단하고 목표를 아래로 이어 내릴(캐스케이드) 때 씁니다.
> ③ [Anthropic knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)의 `data` 플러그인에서 `data-context-extractor`와 `validate-data`를 씁니다. 팀의 지표 정의를 통일하고, 분석을 올리기 전에 품질을 점검하는 관문으로 씁니다.
>
> 그다음에는 목적별로 하나씩만 더합니다. 지표 나무와 OKR이 필요하면 [phuryn/pm-skills](https://github.com/phuryn/pm-skills)의 `/setup-metrics`와 `/plan-okrs`를, 주간 리포트 포맷이 필요하면 knowledge-work-plugins의 `marketing:performance-report`를 씁니다.

---

## 2. 추천 등급표

**등급 정의**
- **1순위:** 먼저 설치합니다.
- **2순위:** 목적별로 하나씩 골라 추가합니다.
- **3순위:** 조건이 맞을 때만 설치합니다.
- **참고:** 설치하지 않고 템플릿만 가져다 씁니다.

| 우선순위 | 스킬/플러그인 | 저장소(링크) | 해결하는 문제 층위 | 누가 쓰나 | 신뢰도·안전 |
|---|---|---|---|---|---|
| **1** | `stakeholder-alignment`, `marketing-org-and-stack`, `fixing-underperforming-teams`, `growth-experimentation`, `leading-org-change` | [refoundai/lenny-skills](https://github.com/refoundai/lenny-skills) | 리더 얼라인, 코칭·소통, 회고 리듬 | 리더. `growth-experimentation`의 회의 형식은 팀 | **높음.** 마크다운 230개뿐이고 실행 코드와 훅이 없습니다. MIT 라이선스이지만 인용문과 프레임워크 내용은 Lenny와 게스트의 지적재산입니다. 스타 1.4k, 마지막 커밋 2026-07-15 |
| **1** | `change-management`, `strategic-alignment`, (+`company-os`) | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | 리더 얼라인, 수집 부담(저항 진단), 회고 리듬 | 리더 | **중상.** 고른 3개는 텍스트 위주이고, 스크립트는 표준 라이브러리만 씁니다. 플러그인을 통째로 설치하면 URL을 가져오거나 subprocess를 쓰는 다른 스킬도 함께 들어옵니다. MIT, 스타 약 28.2k, 2026-08-26 |
| **1** | `data` 플러그인 중 `data-context-extractor`, `validate-data` | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | 분석 품질, 정의 통일(팀 전용 스킬의 기반) | 리더와 팀 | **높음.** Anthropic 공식, Apache-2.0입니다. 스크립트는 zip 패키저 1개뿐(sys, zipfile, pathlib)이고 훅이 없습니다. `.mcp.json`에 BigQuery, Hex, Amplitude 등 커넥터 설정이 함께 들어 있습니다. 2026-10-11 |
| **2** | `/setup-metrics`(metrics-dashboard), `/plan-okrs`(brainstorm-okrs), (+`retro`, `pre-mortem`) | [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | 리더 얼라인(지표 나무, OKR 정렬 지도), 회고 리듬 | 리더와 팀(워크숍) | **높음.** 마크다운만 있습니다. 일부 스킬이 웹 검색을 지시합니다. MIT, 스타 27.0k, 2026-10-10 |
| **2** | `marketing` 플러그인 중 `performance-report`, `campaign-plan` | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | 리포팅, 수집 부담(측정을 사전에 설계) | 팀 | **높음.** 커넥터 설정(Slack, HubSpot, Supermetrics 등)이 함께 들어 있습니다 |
| **2** | `product-management` 플러그인 중 `synthesize-research` | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | 수집 부담의 원인 진단(팀원 인터뷰 합성) | 리더 | **높음** |
| **2** | `problem-framing-canvas`, `lean-ux-canvas`, (의존 스킬 `workshop-facilitation`) | [deanpeters/Product-Manager-Skills](https://github.com/deanpeters/Product-Manager-Skills) | 리더 얼라인(문제를 함께 정의), 수집 부담(가설 기반 최소 수집) | 리더와 팀(워크숍) | **높음.** 마크다운만 있습니다. **라이선스가 CC BY-NC-SA 4.0입니다**(7장 참고). 스타 약 7.4k, 2026-09-01 |
| **2** | `analytics`, `ab-testing`, (+`marketing-loops`) | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 수집 부담(결정에 필요한 것만 수집), 분석 품질, 회고 리듬 | 팀 | **중상~상.** 스킬은 마크다운입니다. 플러그인 방식으로 설치하면 Node CLI 66개를 포함한 저장소 전체가 캐시에 들어옵니다(자동 실행은 없음). MIT, 스타 54.6k, 2026-10-13 |
| **3** | `okr`, `mckinsey-7s`, `pyramid-principle` | [ironyjk/strategy-frameworks](https://github.com/ironyjk/strategy-frameworks) | 리더 얼라인, 리포팅(피라미드 구조) | 리더 | **낮음~중간.** 스킬 자체는 마크다운입니다. 하지만 `install.sh`와 자동 업데이트 훅에 공급망 위험이 있습니다. MIT, 스타 13, 2026-04-17 |
| **3** | `project-artifact` | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 리더 얼라인(목적과 성공 기준을 한 장에), 회고 리듬 | 리더 | **높음.** 스크립트, 훅, MCP가 없습니다. Apache-2.0, 스타 37.9k, 2026-10-13. Artifacts 기능은 README상 Team/Enterprise 플랜 베타입니다 |
| **3** | `windsor-ai`(windsor-insights, `/performance-review`, windsor-export) | [windsor-ai/claude-windsor-ai-plugin](https://github.com/windsor-ai/claude-windsor-ai-plugin) | 수집 부담(자동 수집), 리포팅 | 팀 | **중상.** 로컬 코드는 없고 원격 MCP로 동작합니다. 제3자가 데이터를 처리하고, 쓰기 권한이 있으니 주의가 필요합니다. MIT, 스타 1, 2026-10-09 |
| **3** | `discernment-nudge` | [anthropics/skills](https://github.com/anthropics/skills) | 분석 품질(AI 해석을 한 번 더 따져 보는 습관) | 팀 | **높음.** SKILL.md 1개뿐이고 Apache-2.0입니다. 스타 약 181k, 2026-10-09 |
| 참고 | `efficiency_dashboard_doc`, `daily_standup_summary` 템플릿 | [supermetrics-public/claude-marketing-plugin](https://github.com/supermetrics-public/claude-marketing-plugin) | 리포팅 | 리더(팀 양식 설계) | **중.** Python은 표준 라이브러리만 씁니다. 커밋 1개, 스타 0, 2026-05-12. 유료 커넥터를 전제로 합니다 |
| 참고 | `data-storytelling`(1페이지 월간 리뷰 템플릿) | [wshobson/agents](https://github.com/wshobson/agents) | 리포팅 | 리더(양식 설계) | **높음.** MIT, 스타 40,650, 2026-10-04 |
| 참고 | `ds-channel-report` 보고서 틀 | [Dataslayer-AI/Marketing-skills](https://github.com/Dataslayer-AI/Marketing-skills) | 리포팅 | 리더(양식 설계) | **중간.** 스타 25, 7개월째 업데이트가 없습니다. `ds-report-pdf`는 설치하지 마세요 |

### 2-1. 층위별로 하나씩만 고르세요

같은 일을 하는 스킬을 여러 저장소에서 함께 설치하면 설명(description)이 겹쳐서 엉뚱한 스킬이 실행될 수 있습니다. 층위마다 기본 선택 하나만 두세요.

| 층위 | 기본 선택 | 대안 | 공개 스킬로는 안 되는 부분 |
|---|---|---|---|
| 리더 얼라인 | `strategic-alignment`와 lenny `stakeholder-alignment` | phuryn `/setup-metrics`·`/plan-okrs`, deanpeters `problem-framing-canvas`, KWP `metrics-review`, ironyjk `okr` | 리더가 팀과 함께 목적을 정의하는 자리 자체 |
| 수집 부담 | **직접 해결하는 스킬은 없습니다.** `change-management`의 저항 진단, coreyhaines `analytics`의 '결정에 필요한 것만 수집' 원칙, KWP `campaign-plan`의 Success Metrics 섹션을 함께 씁니다 | windsor-export 자동 내보내기(해외 채널 중심인 팀일 때) | 리더가 먼저 일을 빼 주는 것(폐지 목록), 국내 매체 데이터 자동 수집 |
| 분석 품질 | KWP `validate-data`와 `data-context-extractor` | `discernment-nudge` | 리더만의 기준. 팀 전용 스킬로 만들어야 합니다(6장) |
| 리포팅 | KWP `performance-report` 주간 템플릿 | Supermetrics·wshobson·Dataslayer 템플릿을 가져다 씀 | 국내 채널 지표와 벤치마크 |
| 회고 리듬 | lenny `growth-experimentation`(Impact & Learnings 회의), `company-os`의 스코어카드와 IDS | phuryn `retro`·`pre-mortem`, coreyhaines `marketing-loops`, `project-artifact` | 지난 액션의 결과를 확인하는 습관(리더 몫) |
| 코칭·소통 | lenny `fixing-underperforming-teams` | deanpeters `stakeholder-engagement-advisor`, lenny `giving-feedback`, ironyjk `okr`의 CFR | 1:1 대화 자체 |

### 2-2. 도입 순서 제안

| 시기 | 무엇을 | 쓰는 스킬 | 팀에 보이는 것 |
|---|---|---|---|
| 1주 | 리더 혼자 진단합니다. 팀원과 1:1을 하고 익명 설문을 돌립니다 | lenny `fixing-underperforming-teams`·`stakeholder-alignment`, `change-management`, KWP `synthesize-research` | **폐지 목록을 먼저 발표합니다**(아무도 안 보는 보고와 캡처) |
| 2주 | 목적을 함께 정의하는 워크숍을 엽니다 | `strategic-alignment`(명료성 테스트), phuryn `/setup-metrics`, deanpeters `problem-framing-canvas` | 지표 나무, 데이터 운영 원칙 v0.1(1페이지) |
| 3주 | 정의를 통일하는 워크숍을 엽니다 | `data-context-extractor` | 팀 컨텍스트 스킬(용어·지표 사전) |
| 4주부터 | 주간 루틴을 돌립니다 | `performance-report`(주간), `validate-data`(셀프 점검), `growth-experimentation`·`company-os` 회의 형식 | 주간 3개 지표와 액션 목록 |
| 6주부터 | 팀 전용 스킬을 만듭니다 | `skill-creator`(이미 설치됨) | 6장의 `mkt-analysis-review` 등 |

---

## 3. 추천 스킬 상세

> **공통 설치 메모**
> - 웹 버전 Claude Code에서는 대화형 `/plugin` 명령을 쓸 수 없습니다. 대신 `claude plugin marketplace add …`, `claude plugin install …` 형식을 씁니다(coreyhaines31 README 안내).
> - 스킬 폴더를 직접 복사할 때 `~/.claude/skills/`에 두면 모든 프로젝트에서 쓰고, `.claude/skills/`에 두면 그 프로젝트에서만 씁니다.
> - 플러그인으로 설치하면 그 안의 스킬이 전부 등록됩니다. 스킬이 많은 저장소는 폴더 복사를 권합니다.

### 3-1. lenny-skills: 리더의 정렬·변화 설계 [1순위 · 리더]

**무엇을 하나.** Lenny's Podcast와 뉴스레터 597개 에피소드·포스트에서 뽑아낸 76개 스킬 가운데 리더십과 정렬 계열 5개를 씁니다. SKILL.md 본문은 얇고, 실제 가치는 `references/`(artifacts.md)에 들어 있는 이름 붙은 프레임워크와 템플릿에 있습니다.

**안에 담긴 방법론**

| 스킬 | 핵심 도구 |
|---|---|
| `stakeholder-alignment` | 4단계(Incentive Mapping → Conflict Neutralization → Co-creation → 단일 정본 문서). **Silver Burrito 정렬 테스트**: 착수 전에 팀원 각자에게 목표를 묻고, 답이 다르면 정렬 실패로 봅니다. 공동창작 3전략(초안 단계에서 끌어들이기, 진행 과정 공유하기, 'What am I missing?' 묻기). Consulting/Collaboration/Consensus 의사결정 모드 구분. 정보를 모으는 1:1 질문 6개 |
| `marketing-org-and-stack` | **GACCS 원페이저**(Goals: 상위 OKR에 연결된 목표, 성공 지표, non-goal / Audience / Creative / Channels / Stakeholders). 모든 작업 문서 맨 위에 붙이고, 피드백도 GACCS를 기준으로 합니다. 'Six Reasons Marketing Work Misses the Mark', 측정 3방법(MTA/MMM/Lift test), 공식 트래킹 플랜 |
| `fixing-underperforming-teams` | **Can't / Won't / Not set up 진단**(능력 부족, 동기·정렬 부족, 리더가 일하는 방식을 설계하지 않음). OISA(Observe→Identify→Share→Act), Team Diagnosis Document(관찰 사실 / 팀에 미친 영향 / 권고 변경), Vision-Skills-Incentives-Resources-Action Plan |
| `growth-experimentation` | **Impact and Learnings Review Meeting**: 한 일을 보고하는 시간은 0으로 두고, 학습과 그 함의, 다른 팀이 쓸 방법만 논의합니다. Experiment Design Template, ICE·RICE |
| `leading-org-change` | Motivation Mapping(팀원별 동기를 찾아 변화를 다르게 설명), KPI + Narrative(KPI 하나를 모든 회의에 걸고 같은 '왜'를 반복), Managing Complex Change(비전이 없으면 혼란, 인센티브가 없으면 저항, 스킬이 없으면 불안, 실행계획이 없으면 헛출발), Ally Mapping |

**우리 팀 사용 시나리오**

| 언제 | 누가 | 입력 → 출력 |
|---|---|---|
| 다음 데이터 과제를 시작하기 전 | 리더 | 팀원 각자에게 "이 데이터를 왜 모으나요?"를 한 줄씩 쓰게 한 답을 `/stakeholder-alignment`에 넣습니다 → 답이 서로 얼마나 다른지 보여 주는 지도, 초안 단계에서 함께 만드는 계획, "이건 상의하고 저건 합의로 정한다"는 결정 모드 표 |
| 팀원과 1:1 하기 전 | 리더 혼자 | 관찰한 사실(재작업 횟수, 몰아서 채우는 시점 등)을 `/fixing-underperforming-teams`에 넣습니다 → Can't/Won't/Not set up 분류와 Team Diagnosis Document. **Not set up(리더 책임)부터 점검**합니다 |
| 반응이 사람마다 다를 때 | 리더 | 역할별 반응을 `/leading-org-change`에 넣습니다 → 퍼포먼스 담당에게는 예산 효율로, 콘텐츠 담당에게는 반복 작업 감소로 설명하는 Motivation Mapping |
| 모든 캠페인 킥오프 | 팀 | 캠페인 개요 → GACCS 한 장. 이 데이터가 어느 목표에 연결되는지가 문서로 보입니다. 리더의 피드백도 "별로다"가 아니라 "GACCS 목표에 비춰 보면"이 됩니다 |
| 주간 회의 | 팀 | 회의 형식을 Impact & Learnings로 바꿉니다 → 데이터가 다음 액션으로 이어지는 장면을 팀이 직접 겪습니다 |

**설치 (README에 적힌 방법: 클론한 뒤 필요한 폴더만 복사)**
```bash
git clone https://github.com/RefoundAI/lenny-skills.git
for s in stakeholder-alignment marketing-org-and-stack fixing-underperforming-teams growth-experimentation leading-org-change; do cp -R lenny-skills/skills/$s ~/.claude/skills/; done
# 선택: goal-setting-okrs, north-star-metrics, giving-feedback
```
- SKILL.md와 같은 폴더의 `references/`를 반드시 함께 복사하세요.
- **claude.ai:** 저장소에 공식 절차는 없습니다. README에는 "refoundai.com/lenny-skills에서 개별 스킬을 내려받을 수 있다"고만 적혀 있습니다. 일반적인 방법은 스킬 폴더를 zip으로 묶어 설정의 기능(Capabilities) > Skills에 올리는 것입니다(레포 문서에는 없는 일반 절차입니다).

**주의점**
- 미국의 제품(PM)·스타트업 맥락이고 영어로 쓰여 있습니다. 걸러서 써야 할 조언도 섞여 있습니다. 예: `fixing-underperforming-teams`의 Enthusiastic Rehire Test('30일 뒤 아니면 즉시 해고'), `team-culture`의 '지쳐야 정상'.
- references 파일이 스킬당 최대 약 160KB라서 컨텍스트를 많이 씁니다.
- `leading-org-change`는 설명이 대기업·위기 맥락이라 한국어로 물으면 자동으로 실행되지 않을 수 있습니다. `/leading-org-change`로 직접 부르세요. Vision-Skills-Incentives 진단은 `change-management`, `fixing-underperforming-teams`와 겹치므로 하나를 기준으로 정하세요.
- 외부 강의나 출판물에 인용문을 쓸 때는 출처를 밝혀야 합니다.

### 3-2. alirezarezvani/claude-skills: 저항 진단과 목표 캐스케이드 [1순위 · 리더]

**무엇을 하나.** C-level 자문 스킬 가운데 3개를 골라 씁니다. `change-management`는 새 프로세스를 혼란 없이 정착시키는 플레이북이고, `strategic-alignment`는 위에서 아래로 내려가며 의도가 변질되는 현상을 진단합니다. `company-os`는 주간 운영 리듬을 잡아 줍니다.

**안에 담긴 방법론**
- **`change-management`:** ADKAR 5단계(인식-욕구-지식-능력-강화)를 스타트업 속도에 맞게 줄였습니다. 핵심은 **저항 진단표**입니다.

  | 팀원의 말 | 비어 있는 단계 | 처방 |
  |---|---|---|
  | "왜 지금이요?" | 인식 | 이유를 설명합니다 |
  | "나랑 상의 안 했잖아요" | 욕구 | '어떻게'를 정하는 데 참여시킵니다 |
  | "시간 없어요" | 능력 | 업무를 덜어 주거나 일정을 늦춥니다 |
  | "전에도 해봤잖아요" | 신뢰 | 신뢰 공백으로 보고 대응합니다 |

  그 밖에 4~8주 도입 순서(-2주 why 공지, -1주 교육, 0주 런칭과 담당자 지정, 2주 채택 점검, 4주 피드백과 성공 사례 공개, 8주 기존 방식 폐기), Adoption과 Compliance의 구분, 변화 인벤토리, '이번 분기에 바뀌지 않는 것' 공지가 들어 있습니다.
- **`strategic-alignment`:**
  - 전략 명료성 테스트: 다섯 명에게 지금 가장 중요한 우선순위를 묻고, 몇 명이 같은 답을 하는지 봅니다.
  - 회사→부서→팀→개인 캐스케이드 맵, 고아·상충·공백 목표 탐지.
  - 메시지 감쇠의 4원인(모호함, 빈도, 매체, 신뢰).
  - 재정렬 원칙: 메모 대신 워크숍으로 하고, 목표보다 인센티브를 먼저 고칩니다.
  - Alignment Score(0~50점), Cascade Workshop 5단계.
  - '팀 목표의 20~30%는 팀이 스스로 정한다', 'WHAT이 아니라 WHY를 캐스케이드하라'.
- **`company-os`:**
  - 주간 스코어카드: 지표 5~15개, 지표마다 담당자 1명과 숫자 목표 1개를 두고 빨강·노랑·초록으로 표시합니다. 빨간 지표만 논의합니다.
  - IDS: Identify(근본 원인 한 문장) → Discuss(시간 제한) → Solve(담당자 1명, 액션 1개, 마감일 1개).
  - 90일 Rocks.

**우리 팀 사용 시나리오**

| 언제 | 누가 | 입력 → 출력 |
|---|---|---|
| 이번 주 | 리더 혼자 | 팀원 반응을 원문 그대로 넣습니다(예: "퍼포먼스 담당은 시간이 없다고 하고, 콘텐츠 담당은 왜 하는지 모르겠다고 한다") → ADKAR 공백별 대응, 4~8주 도입 순서, 기존 엑셀·보고 방식을 폐기할 시점 |
| 목적 워크숍 전 | 리더 → 팀 | 팀원 3~8명에게 명료성 테스트를 합니다 → 답이 어떻게 갈리는지 보고, 캐스케이드 맵에서 **고아 지표(어느 목표에도 이어지지 않은 수집 항목) 목록**을 뽑습니다. 이 목록이 곧 폐지 후보입니다 |
| 주간 팀 미팅 | 팀 | 역할별 지표 5~8개와 담당자로 스코어카드를 만듭니다 → 빨간 지표만 IDS로 다뤄 '담당자, 액션, 마감일'을 정합니다. 수집한 데이터가 보고용이 아니라 결정의 입력이 됩니다 |

**설치**
- README의 플러그인 방식은 통째로 설치합니다(C-level 스킬 33개). **권하지 않습니다.**
  ```
  /plugin marketplace add alirezarezvani/claude-skills
  /plugin install c-level-skills@claude-code-skills
  ```
- 권장하는 방식은 README의 수동 설치에 따라 필요한 폴더만 복사하는 것입니다.
  ```bash
  git clone https://github.com/alirezarezvani/claude-skills.git
  cp -r claude-skills/c-level-advisor/skills/change-management ~/.claude/skills/
  cp -r claude-skills/c-level-advisor/skills/strategic-alignment ~/.claude/skills/
  cp -r claude-skills/c-level-advisor/skills/company-os ~/.claude/skills/
  ```
  INSTALLATION.md의 예시 경로는 현재 구조와 다릅니다. 실제 경로는 `<도메인>/skills/<스킬명>`입니다.
- **claude.ai:** 레포 문서에는 별도 절차가 없습니다. 일반적인 zip 업로드 방식을 씁니다. 위 3개는 SKILL.md와 references만으로 동작합니다.

**주의점**
- 모두 CEO·스타트업·SaaS 기준(OKR, ARR, 시리즈B)이라 팀 규모로 줄여서 써야 합니다.
- ADKAR, EOS, OKR처럼 널리 알려진 프레임워크를 정리한 수준이라 박사과정 연구자에게 이론적으로 새로운 내용은 적습니다. 가치는 **Claude가 진단과 처방을 빠짐없이 순서대로 진행하게 만드는 체크리스트**라는 데 있습니다.
- 마케팅 쪽 `social-media-analyzer`, `cmo-advisor`는 제외하세요(4장). 이 저장소는 1인 메인테이너가 운영하므로 업데이트할 때마다 다시 검토하세요.

### 3-3. knowledge-work-plugins `data`: 정의 통일과 분석 품질 관문 [1순위 · 리더와 팀]

**무엇을 하나**
- `data-context-extractor`는 팀의 암묵적인 데이터 지식을 인터뷰로 끌어내 **팀 전용 데이터 분석 스킬을 만들어 주는 메타 스킬**입니다.
- `validate-data`는 분석을 공유하기 전에 방법론, 정확성, 편향을 점검하고 3단계로 판정합니다.

**안에 담긴 방법론**
- **`data-context-extractor`:**
  - Phase 2 질문 5개: ① 개체 구분 ("'고객'이라고 하면 정확히 무엇인가?") ② 식별자 ③ 핵심 지표와 계산식 ④ 항상 빼야 하는 데이터 ⑤ 신입이 자주 하는 실수.
  - 만들어지는 구조: `SKILL.md` + `references/entities.md`, `metrics.md`, `tables/[domain].md`.
  - 지표 문서 표준: Metric Name / Definition / Formula / Source / Time grain / Caveats.
  - 처음 만드는 Bootstrap 모드와 내용을 덧붙이는 Iteration 모드가 있습니다.
- **`validate-data`:**
  - Pre-Delivery QA 4묶음: 데이터 품질, 계산(분모, 기간 정렬), 타당성, 표현(**제목이 지표명이 아니라 인사이트를 말하는가**).
  - 분석 함정 카탈로그: 평균의 평균, 불완전 기간 비교, 분모 변경, 생존자 편향, 결과 기반 세그먼트, 심슨의 역설, 체리피킹.
  - Red flags: "가설을 완벽히 확인해 주는 결과"도 의심합니다.
  - 판정: **Ready to share / Share with noted caveats / Needs revision**.
  - 분석 문서화 템플릿.

**우리 팀 사용 시나리오**

| 언제 | 누가 | 입력 → 출력 |
|---|---|---|
| 정의 워크숍 (60분) | 리더와 팀원 2~3명 | 5개 질문을 마케팅 언어로 바꿔 함께 답합니다 → `[팀명]-mkt-data-context` 스킬이 만들어집니다. 이후 팀원이 Claude로 분석하면 리더가 정한 정의가 자동으로 적용됩니다. 질문 예: "우리 팀 '전환'은 매체 전환, GA4 키 이벤트, 자사몰 실주문 중 무엇인가?", "ROAS는 매체 리포트 ROAS인가, 자사몰 실매출 ÷ 총광고비인가?", "직원·테스트 주문, 체험단 무상 제공, 취소·환불은 늘 뺀다" |
| 리포트를 올리기 전 (매주) | 팀원 | 리포트를 `/data:validate-data`에 넣고 → 나온 Validation Report를 첨부해 올립니다. 리더의 피드백이 숫자 교정에서 방향과 해석 코칭으로 옮겨 갑니다. 사람보다 기계에게 먼저 지적받으니 부담도 줄어듭니다 |
| 분기마다 | 리더 | Iteration 모드로 새 채널(예: 틱톡샵) 도메인 파일을 추가합니다 |

**설치 (README 기준)**
```bash
claude plugin marketplace add anthropics/knowledge-work-plugins
claude plugin install data@knowledge-work-plugins   # v1.1.0
```
- **Cowork / claude.ai:** `claude.com/plugins`에서 설치합니다(README "Getting Started").
- **호출:** `/data:data-context-extractor`, `/data:validate-data <분석>`.
- **폴더만 쓰기:** 플러그인을 설치하면 data 스킬 10개(analyze, build-dashboard, create-viz, sql-queries 등)와 커넥터 설정이 모두 들어옵니다. 원하는 것만 쓰려면 `data/skills/validate-data/`와 `data/skills/data-context-extractor/`만 `~/.claude/skills/`에 복사하세요. `../../CONNECTORS.md` 상대 링크는 깨지지만 동작에는 큰 문제가 없습니다.

**주의점**
- SQL 데이터웨어하우스를 전제로 합니다. 웨어하우스가 없다면 `tables/`를 **구글시트 탭과 매체 리포트 양식을 설명하는 문서**로 바꾸고, SQL 방언 섹션은 지우세요.
- 만들어진 스킬은 "데이터를 어떻게 읽나"만 다루고 "왜 모으나"는 다루지 않습니다. 이 부분은 6장의 `mkt-data-brief`로 보완합니다.
- 네이버, 카카오, 쿠팡 커넥터는 없습니다. CSV나 시트를 붙여넣는 흐름이 기본이 됩니다.
- 패키징 스크립트는 `[PLACEHOLDER]`가 남았는지만 검사합니다. 내용이 맞는지는 사람이 검수해야 합니다.

### 3-4. phuryn/pm-skills: 지표 나무와 OKR 정렬 지도 [2순위 · 리더와 팀]

**무엇을 하나.** `/setup-metrics`는 North Star → 입력 지표 → 담당자로 이어지는 지표 체계를 설계합니다. `/plan-okrs`는 회사 목표에 연결된 팀 OKR 후보 3세트와 정렬 지도를 만듭니다.

**안에 담긴 방법론**
- **`/setup-metrics`:**
  - Lean Analytics의 좋은 지표 4조건. 그중 하나가 **'행동을 바꾸지 못하는 지표는 나쁜 지표'**입니다.
  - 허영 지표와 실행 지표, 선행 지표와 후행 지표를 구분합니다.
  - 지표별 표(정의 = 분자/분모/기간, 출처, 목표, 경보 기준).
  - `North Star ├ Input → 담당 팀/행동` 형태의 Metrics Tree, Green/Yellow/Red 임계값.
  - 리뷰 주기: 일간(건강 지표), 주간(입력 지표), 월간(NSM·OKR), 분기(체계 재점검).
  - Goodhart 법칙을 막는 반대 지표(counter-metric).
- **`/plan-okrs`:**
  - Christina Wodtke의 Radical Focus를 따릅니다.
  - 맥락 질문 → 3세트 생성 → 검증(KR이 판단이 아니라 데이터로 확인되는가, 게이밍 가능성) 순으로 진행합니다.
  - 결과물: Baseline/Target/Owner 표, **Alignment Map(회사 목표 → 팀 목표 → KR → 기대 효과)**, 0~1.0 채점, 주간 신호등 체크인.
  - '데이터를 확보할 수 있다는 가정은 표시하라'는 규칙이 있습니다.
- **함께 쓸 것:**
  - `retro`: Start/Stop/Continue, 4Ls, Sailboat로 회고하고 액션은 2~3개로 줄입니다. 지난 액션을 이행했는지도 확인합니다.
  - `pre-mortem`: Tigers / Paper Tigers / Elephants(말하지 않는 걱정)로 위험을 나눕니다.
  - `strategy-red-team`: 계획의 핵심 가정마다 실패 조건과 가장 싼 확인 방법을 뽑습니다.

**우리 팀 사용 시나리오**

| 언제 | 누가 | 입력 → 출력 |
|---|---|---|
| 분기 시작 워크숍 (90분) | 리더와 팀 전원 | `/setup-metrics`로 팀 North Star → 역할별 입력 지표 → 각자의 행동을 트리로 그리고, 지표마다 담당자를 정합니다. '행동을 바꾸지 못하는 지표' 기준으로 수집 항목을 정리합니다. 이어서 `/plan-okrs`가 **일부러 동등한 3개 안**을 내므로, 팀이 고르고 고치는 발산→수렴 방식으로 진행할 수 있습니다 → Metrics Tree, 리뷰 주기표, OKR 표, Alignment Map |
| 계획을 팀에 내놓기 전 | 리더 혼자 | '데이터 기반 운영 도입 계획'을 `strategy-red-team`에 넣습니다 → "팀원이 지표의 가치를 이해하면 자발적으로 수집할 것이다" 같은 가정마다 실패 조건과 가장 싼 확인 방법(1:1 3회, 2주 파일럿 등) |
| 도입 4주 차 | 팀 | `pre-mortem`: "3개월 뒤 우리 데이터 체계가 흐지부지됐다. 왜?" → 업무 과중, 목적 불신, 역량 부족처럼 말하지 않던 걱정(Elephants)을 안전하게 꺼냅니다 |
| 월간 데이터 리뷰 뒤 | 팀 | `retro`: '귀찮다'는 불만을 Sailboat의 Anchor 칸에 올리고 → 개선 액션 2~3개로 바꿉니다 |

**설치 (README 기준)**
```bash
claude plugin marketplace add phuryn/pm-skills
claude plugin install pm-execution@pm-skills          # brainstorm-okrs(/plan-okrs), retro, pre-mortem, strategy-red-team
claude plugin install pm-product-discovery@pm-skills  # metrics-dashboard(/setup-metrics), opportunity-solution-tree
```
- **Cowork:** Customize(왼쪽 아래) → Browse plugins → Personal → + → 'Add marketplace from GitHub' → `phuryn/pm-skills`. 이 경로는 플러그인 9개가 모두 설치되므로, 필요 없는 `pm-ai-shipping`, `pm-toolkit` 등은 설치 후 끄세요.
- **claude.ai 웹:** README에 설치 방법이 없습니다.

**주의점**
- 제품관리(PM) 전제(Amplitude, 스프린트, 벨로시티)라서 GA4, 광고 매체, CRM, 콘텐츠 KPI 상황에 맞게 바꿔 말해 줘야 합니다. 템플릿도 영어입니다.
- `brainstorm-okrs`, `outcome-roadmap` 등은 '필요하면 웹 검색'을 지시합니다. 민감한 사내 전략을 다룰 때는 "웹 검색하지 마"라고 지시하세요.
- **마켓플레이스 이름이 deanpeters 저장소와 같은 `pm-skills`입니다.** 두 저장소를 모두 마켓플레이스로 추가하면 이름이 겹칠 수 있습니다. 하나는 폴더 복사나 zip 방식으로 설치하세요.
- KWP `metrics-review`, lenny `north-star-metrics`·`goal-setting-okrs`, ironyjk `okr`과 기능이 겹치니 하나만 쓰세요.

### 3-5. knowledge-work-plugins `marketing`: 주간 리포트 포맷과 측정 사전 설계 [2순위 · 팀]

**무엇을 하나.** `performance-report`는 성과 리포트를 표준 구조로 만들어 줍니다. `campaign-plan`은 캠페인 브리프를 만들고, 그 안에 측정 계획을 미리 넣게 합니다.

**안에 담긴 방법론**
- **`performance-report`:**
  - 8섹션 구조입니다.
    1. Executive Summary: Win 1개, Concern 1개
    2. Key Metrics 표: This/Prior/Change/**Target**/Status
    3. Trend
    4. **What Worked: 데이터 → 왜(가설) → 재현 방법**
    5. What Needs Improvement
    6. Insights
    7. **Recommendations: 인사이트에 연결된 권고, Impact×Effort 2x2**
    8. **Next Period Focus: 우선순위 3개**
  - 주간 템플릿: Top 3 metrics, 잘된 것 1~2, 주의할 것 1~2, 이번 주 우선순위 3~5.
  - "갱신 주기는 의사결정 주기에 맞춘다"는 원칙과 최적화 7단계가 들어 있습니다.
- **`campaign-plan`:** Objective → Audience → Message → Channel → Measure 순서로 씁니다. 그중 **7. Success Metrics** 섹션에 Primary KPI와 목표치, Secondary 지표 3~5개, 추적 방법, 보고 주기를 적습니다.

**우리 팀 사용 시나리오**

| 언제 | 누가 | 입력 → 출력 |
|---|---|---|
| 매주 월요일 | 팀원 각자 | 지난주 숫자를 붙여넣고 `/marketing:performance-report`의 주간 템플릿으로 초안을 받습니다. 사람의 시간은 What Worked의 '왜'와 Next Period Focus에 씁니다. 리포트 유형은 역할별로 고릅니다: 퍼포먼스는 Channel(Paid), 콘텐츠·SNS는 Channel(Social)·Content, 브랜드·CRM은 Channel(Email)·Overall |
| 캠페인 킥오프 | 담당 팀원이 쓰고 리더와 합의 | `/marketing:campaign-plan`의 7번 Success Metrics를 **팀원이 먼저** 씁니다 → 이 합의가 곧 데이터 수집 계획이 됩니다. 수집이 '끝나고 시키는 숙제'에서 '내가 기획 때 정한 측정'으로 바뀝니다 |

**설치**
```bash
claude plugin install marketing@knowledge-work-plugins   # v1.2.0 (마켓플레이스 추가는 3-3과 같음)
```

**주의점**
- 벤치마크와 지표 체계(MQL/SQL 등)가 미국 B2B 중심입니다. 브랜드 지표는 약합니다.
- `marketing/README.md`의 스킬 이름과 실제 폴더 이름(`performance-report`, `campaign-plan` 등)이 다릅니다. **설치한 뒤 `/` 목록에서 실제 이름을 확인하세요.**
- 주간 리포트는 최소 포맷만 쓰세요. 리포트 작성이 목적이 되면 안 됩니다.
- 커넥터 설정(Slack, Canva, Figma, HubSpot, Amplitude, Notion, Ahrefs, Similarweb, Klaviyo, Supermetrics)이 함께 들어오므로, 쓰지 않는 서버는 연결하지 마세요.

### 3-6. knowledge-work-plugins `product-management`: `synthesize-research` [2순위 · 리더]

**무엇을 하나.** 인터뷰, 설문, 피드백을 주제별로 묶어 우선순위를 매깁니다. 원래 고객 리서치용인데, **팀원의 목소리를 합성하는 데 쓰면 이번 문제에 잘 맞습니다.**

**안에 담긴 방법론**
- 자료에서 뽑는 항목: 관찰, 인용, **행동과 진술의 구분**, 고통점과 우회 행동.
- 주제 분석 6단계, 어피니티 매핑, 삼각검증, 빈도×영향 2x2.
- 발견마다 신뢰도(H/M/L)를 매깁니다. "인터뷰 2건에서 나온 발견은 결론이 아니라 가설"이라고 봅니다.
- 인용은 이름이 아니라 참여자 유형으로 표시합니다.

**우리 팀 사용 시나리오**
- **1주 차 진단(리더):** 팀원과 15~20분씩 1:1을 하고 익명 설문을 함께 돌립니다.
  - 질문 예: "데이터 정리가 귀찮은 순간은 언제인가?", "최근 데이터가 내 일에 실제로 도움이 된 적은?", "결과가 어디에 쓰이는지 아는가?"
  - 메모를 넣으면 → 수집 부담의 원인 주제가 빈도×영향 순으로 정렬됩니다. 예: 중복 입력, 결과가 돌아오지 않음, 목적을 모름, 도구 전환 비용.
  - 디자인씽킹의 공감 단계를 팀 내부에 적용하는 셈이고, "이것까지 해야 돼?"를 저항이 아니라 데이터로 다루게 됩니다.

**설치**
```bash
claude plugin install product-management@knowledge-work-plugins   # v1.2.0
```
호출은 `/product-management:synthesize-research`입니다.

**주의점**
- 3~8명 팀에서는 빈도 숫자의 의미가 약합니다.
- 리더가 직접 인터뷰하면 솔직한 답이 줄 수 있으니 익명 설문을 꼭 함께 쓰세요.
- 이 플러그인에는 `metrics-review`(North Star·L1·L2, OKR 규칙, "리뷰가 액션을 하나도 못 만들면 쓸모없는 리뷰")와 `write-spec`, `sprint-planning` 등도 함께 들어 있습니다. phuryn `/setup-metrics`와 겹치니 둘 중 하나만 쓰거나, 폴더만 복사하세요.

### 3-7. deanpeters/Product-Manager-Skills: 문제를 함께 정의하고 가설로 수집 줄이기 [2순위 · 리더와 팀]

**무엇을 하나.** MITRE Innovation Toolkit과 Lean UX 캔버스를 대화형으로 진행합니다. 디자인씽킹 교육자인 리더의 언어(HMW)와 그대로 맞습니다.

**안에 담긴 방법론**
- **`problem-framing-canvas`(MITRE Problem Framing Canvas v3):** 8개 질문을 3단계로 진행합니다.
  - ① Look Inward: 증상, 왜 아직 못 풀었나, **'우리가 어떻게 문제의 일부인가'**
  - ② Look Outward: 누가 겪고 누가 안 겪나, 누가 빠졌나, 문제가 지속되면 누가 이득을 보나
  - ③ Reframe: 재정의 문장과 'How might we [행동] as we aim to [목표]?'

  '혼자 채우지 말라'는 경고가 들어 있습니다. 예시 호출 중 '현장 영업사원이 CRM을 안 쓴다'가 이번 상황과 구조가 거의 같습니다.
- **`lean-ux-canvas`(Jeff Gothelf v2):** 8칸을 정해진 순서로 채웁니다(비즈니스 문제, 비즈니스 성과, 사용자, 사용자 성과, 해결책, 가설, **가장 위험한 가정 1개**, **그걸 배우는 최소 실험**).
- **`stakeholder-engagement-advisor`(선택):** 유형을 '회의론자', 상황을 '저항·갈등'으로 두면 접근안 3개, 핵심 메시지, '내가 필요한 것 vs 상대가 필요한 것', 다음 행동을 줍니다. 갈등 이력이 있으면 '설득보다 경청 먼저'라는 규칙이 적용됩니다.

**우리 팀 사용 시나리오**

| 언제 | 누가 | 입력 → 출력 |
|---|---|---|
| 워크숍 전 | 리더 혼자 | Look Inward만 진행합니다 → "팀이 내 목적을 몰라서인가", "이유 없이 지시만 해서인가", "부담은 팀원에게 가고 결과는 내가 가져가서인가" 셀프 점검 |
| 주간 회의 | 리더와 팀 | Look Outward와 Reframe을 함께 채웁니다 → 공동 HMW 문장. 예: "HMW 우리가 수집한 데이터가 각자 다음 캠페인 결정에 바로 쓰이게 하면서 분기 목표 OO를 달성할 수 있을까?" |
| 월 1회 | 팀 | `lean-ux-canvas` 7번에 이번 달 가장 위험한 가정 1개를 둡니다(예: 'SNS 리텐션 콘텐츠가 CRM 재구매율을 올린다') → 8번 최소 실험을 설계하면 수집 항목이 2~3개로 줄고, 항목마다 이유가 붙습니다 |
| 저항하는 팀원과 1:1 전 | 리더 | `stakeholder-engagement-advisor` → 그 팀원이 원하는 것(업무량 감소, 성과 인정)과 리더가 원하는 것을 나눈 메시지와 다음 행동 |

**설치 (docs/INSTALL-CLAUDE-CODE.md 기준. 스킬 하나가 플러그인 하나입니다)**
```
/plugin marketplace add deanpeters/Product-Manager-Skills
/plugin install problem-framing-canvas@pm-skills
/plugin install lean-ux-canvas@pm-skills
/plugin install workshop-facilitation@pm-skills        # 캔버스 스킬이 진행 규칙으로 참조
/plugin install stakeholder-engagement-advisor@pm-skills   # 선택
/reload-plugins
```
- **claude.ai(docs/INSTALL-CLAUDE-DESKTOP.md):**
  1. `releases/latest`에서 팩 zip을 받거나, 저장소 `dist/`에 있는 개별 zip(`dist/problem-framing-canvas.zip`, `dist/lean-ux-canvas.zip`)을 받습니다.
  2. 팩 zip은 먼저 압축을 풉니다.
  3. Settings → Capabilities → Skills에서 개별 스킬 zip을 올립니다.
  4. 77개를 전부 올리지 말고 3~5개만 고르세요.

**주의점**
- **라이선스 CC BY-NC-SA 4.0:**
  - 회사에서 팀 업무에 쓰는 것, 워크숍이나 강의에서 가르치는 것은 README가 명시적으로 허용합니다.
  - 금지되는 것은 스킬 자체를 유료 상품·강좌·서비스로 재포장해 파는 행위입니다.
  - 겸임교수로서 유료 외부 강의 교안에 원문을 넣으려면 출처를 밝히고 동일 라이선스로 공유해야 하며, 판매 성격이면 저자의 서면 허락이 필요합니다.
- `workshop-facilitation`은 사람을 대상으로 한 워크숍 도구가 아닙니다. Claude가 질문하는 방식을 정한 규칙이라 단독으로 쓸 가치는 낮습니다.
- 예시가 제품·SaaS 중심이라 마케팅 맥락으로 각색해야 합니다. 마켓플레이스 이름이 phuryn과 같은 `pm-skills`인 점도 주의하세요(3-4).

### 3-8. coreyhaines31/marketingskills: 결정에 필요한 것만 수집, 가설·학습 로그 [2순위 · 팀]

**무엇을 하나.** 마케팅 실무 스킬 50개 가운데 측정과 실험 계열 2~3개만 씁니다.

**안에 담긴 방법론**
- **`analytics`의 원칙 7개:**
  1. 데이터가 아니라 의사결정을 위해 트래킹하고, 허영 지표는 버린다.
  2. 질문에서 출발해 거꾸로 따라간다.
  3. 이름 규칙을 먼저 정한다.
  4. 양보다 깨끗한 데이터.
  5. **눈대중 금지. 다른 방법으로 한 번 더 교차검증한다.**
  6. **비율 지표는 분자와 분모의 관측 기간을 맞춘다.**
  7. **권고는 목표에 비추어 논증하고, 각 옵션이 무엇을 포기하는지 밝힌다.**

  그 밖에 트래킹 플랜 표, `object_action` 이벤트 명명 규칙, 'UTM은 모두 스프레드시트에 기록'하는 규칙이 있습니다. 시작할 때 '이 데이터가 어떤 결정에 쓰이나'를 묻습니다.
- **`ab-testing`:**
  - 가설 템플릿: "Because [관찰], we believe [변경] will cause [기대 결과] for [대상]. We'll know this is true when [지표]".
  - 주요·보조·가드레일 지표 구분, ICE 우선순위, 실험 플레이북.
  - 운영 주기: 주간 30분 / 격주 / 월간 1시간 / 분기 점검.
- **`marketing-loops`(선택):** weekly-marketing-review 루프와 tracking-QA 루프가 있습니다. '아무도 결과로 행동하지 않는 루프는 삭제하라(vanity loop)'는 원칙이 들어 있습니다.

**우리 팀 사용 시나리오**

| 언제 | 누가 | 입력 → 출력 |
|---|---|---|
| 측정 계획을 정리할 때 | 리더와 Claude | 팀이 매월 내리는 결정을 나열합니다(예산 재배분, 콘텐츠 주제, CRM 메시지) → 결정마다 꼭 필요한 데이터만 남기고, **어떤 결정에도 이어지지 않는 수집 항목은 삭제**합니다. UTM과 이벤트 명명 사전은 팀 표준 문서로 둡니다 |
| 모든 분석 보고서 | 팀원 | 보고서 끝에 가설 템플릿 형식으로 '다음 액션 가설'을 1~3개 씁니다 → 팀 공용 백로그에 모으고, 월 1회 ICE로 함께 점수를 매깁니다 → 플레이북이 곧 팀의 학습 기록이 됩니다. 트래픽이 적으면 통계적 A/B 테스트는 빼고 가설·우선순위·학습 로그 구조만 씁니다 |
| 매주 (선택) | 팀 | `marketing-loops`로 반복 취합을 정기 실행으로 돌립니다 → 팀원은 해석과 다음 액션만 덧붙입니다. 단, GA4 등 데이터 커넥터가 있어야 하고 국내 플랫폼은 따로 준비해야 합니다 |

**설치 (README Option 1, 선택 설치 권장)**
```bash
npx skills add coreyhaines31/marketingskills --skill analytics ab-testing marketing-loops -a claude-code
```
- `-a claude-code`를 빼면 `.agents/skills/`에만 설치되는데, Claude Code는 이 경로를 읽지 않습니다.
- 모든 스킬이 `.agents/product-marketing.md`를 먼저 읽습니다. `product-marketing`도 함께 설치해 컨텍스트 파일을 한 번 만들어 두세요. 그 파일의 Goals 섹션에 리더의 목적을 적어 두면, 같은 프로젝트를 쓰는 팀원의 분석도 같은 목표를 기준으로 삼습니다.
- **claude.ai(Option 8):** `releases/latest`에서 `analytics-claude-web.zip` 등을 받아 Customize → Skills → + Create skill → Upload a skill로 올립니다. 아카이브 하나에 스킬 하나가 들어 있습니다.

**주의점**
- SaaS·스타트업 대상이고, 측정 부분은 GA4/GTM 웹 구현이 대부분입니다. 네이버·카카오 채널과 팀 설득·변화관리는 다루지 않습니다.
- 플러그인 방식(Option 2)은 50개 스킬과 `tools/clis/` Node CLI 66개를 포함한 저장소 전체를 캐시에 받습니다. 선택 설치를 쓰세요.
- `marketing-loops`의 정기 실행 등록은 사용자가 동의한 경우에만 하세요.
- README에 제휴 링크와 유료 'Verified Partners'가 있습니다. 도구 추천에는 상업적 편향이 있을 수 있습니다.

### 3-9. 조건이 맞을 때만 [3순위]

**ironyjk/strategy-frameworks: `okr`, `mckinsey-7s`, `pyramid-principle` [리더]**
- **언제 쓰나:** OKR을 한국어 본문으로 쓰고 싶을 때 phuryn `/plan-okrs` 대신 씁니다.
- **방법론:**
  - `okr`: Objective 규칙 5개, KR 규칙 5개, 하향 60%·상향 40% 캐스케이드, CFR(1:1 질문 예시, 48시간 이내 피드백, 공개적 인정), 'OKR을 인사평가와 분리'.
  - `mckinsey-7s`: '공유가치↔시스템' 불일치 패턴. "분석 수준이 기대에 못 미친다"는 역량(Skills) 문제로, "수집이 귀찮다"는 시스템(Systems) 문제로 나눠 봅니다.
  - `pyramid-principle`: 한국어. SCQ → 핵심 메시지 → MECE 근거 3~5개 → 다음 단계.
- **설치:** 커밋이 고정된 커뮤니티 마켓플레이스를 쓰거나, 세 폴더만 수동 복사합니다.
  ```
  /plugin marketplace add anthropics/claude-plugins-community
  /plugin install strategy-frameworks@claude-community      # SHA 146aa1c 고정, 스킬 27개가 한꺼번에 들어옴
  ```
  ```bash
  git clone https://github.com/ironyjk/strategy-frameworks.git /tmp/sf
  cp -r /tmp/sf/{okr,mckinsey-7s,pyramid-principle} .claude/skills/
  ```
- **주의:**
  - README의 `curl … install.sh | bash`, `--with-hook`, `update.sh`는 쓰지 마세요(7장).
  - `think/SKILL.md` 프론트매터의 `install:` 필드에 git clone 명령이 있습니다. Claude에게 "의존성 설치해 줘"라고 하지 마세요.
  - 예시가 산업청소·건설 영업 위주이고, 6개월째 업데이트가 없습니다.

**anthropics/claude-plugins-official: `project-artifact` [리더]**
- **언제 쓰나:** claude.ai 로그인으로 Claude Code를 쓰고, Artifacts(README상 Team/Enterprise 베타)를 쓸 수 있고, 이니셔티브를 한 페이지로 매주 운영하고 싶을 때.
- **페이지 구조:**
  - 상태 배너
  - **Next steps('누가 → 정확히 무엇을 → 그 결과 무엇이 풀리는지')**
  - Overview(왜 하는지, 성공 기준과 각각의 확인 방법, 범위 밖)
  - Workstreams(담당, 상태)
  - **Decisions/FAQ**
- **시나리오:** '마케팅 데이터 수집·분석 이니셔티브' 페이지를 만들고, FAQ 탭에 "이것까지 해야 하나요?"와 그 답·근거를 남깁니다. 주간 회의 전에 '아티팩트 새로고침'이라고 하면 바뀐 점만 받습니다.
- **설치:**
  ```
  /plugin marketplace add anthropics/claude-plugins-official
  /plugin install project-artifact@claude-plugins-official
  ```
- **주의:**
  - 정렬·동기에 대한 방법론은 없습니다.
  - 이 환경에는 이미 Artifact 도구가 있으니, 더해지는 것은 탭 구조와 새로고침 워크플로입니다.
  - 일부 단계가 현재 Artifact 도구 사양과 어긋납니다(deprecated `favicon` 파라미터, WebFetch로 읽기).
  - 팀원 개인 성과나 고객 데이터는 넣지 마세요(claude.ai에 올라갑니다).

**windsor-ai/claude-windsor-ai-plugin [팀]**
- **언제 쓰나:** 주력 채널이 Meta, Google, Instagram, GA4, YouTube이고, 수작업 export가 실제 병목일 때.
- **시나리오:**
  - `windsor-export`로 매주 자동으로 시트나 Looker Studio에 데이터가 쌓이게 합니다. '이것까지?' 반발을 가장 직접적으로 줄여 줍니다.
  - `/performance-review`('액션이 필요한 발견 3가지와 근거 수치')와 `marketing-analyst`(답, 근거, 권고 액션 최대 3개)의 출력 포맷을 팀 공통 리포트 표준으로 삼습니다.
  - `attribution-analyst`의 매칭률 개선안(폼 hidden field로 UTM 수집, gclid를 CRM에 전달)은 "UTM을 왜 정확히 입력해야 하나"를 수치로 보여 주는 설득 재료가 됩니다.
- **설치:**
  ```
  /plugin install windsor-ai@claude-plugins-official
  ```
  최신 HEAD를 쓰려면 `claude plugin marketplace add https://github.com/windsor-ai/claude-windsor-ai-plugin` 후 `claude plugin install windsor-ai`를 실행합니다. claude.ai에서는 스킬이 아니라 커넥터(https://claude.com/connectors/windsor-ai)로 데이터에만 접근할 수 있습니다.
- **주의:**
  - **네이버(검색광고, 블로그, 스마트스토어), 카카오, 쿠팡, 카페24는 저장소 어디에도 언급이 없습니다.** 국내 채널 중심이면 설치하지 않는 편에 가깝습니다.
  - 광고, CRM, 매출 데이터가 Windsor.ai 서버를 거치므로 회사 보안·개인정보 검토가 필요합니다.
  - **쓰기 기능은 꺼 두세요.** 캠페인 일시중지, 예산 변경, 인스타그램 게시·댓글 삭제가 가능합니다. 최적화 쪽은 읽기 전용 `/optimization-review`만 쓰세요.
  - 공식 마켓플레이스는 이전 커밋(`d7ba1cb`)에 고정되어 있어 현재 HEAD(`c1d90da`)와 내용이 다를 수 있습니다.

**anthropics/skills: `discernment-nudge` [팀]**
- **언제 쓰나:** 팀원이 Claude에게 데이터 해석이나 '다음 액션 제안'을 자주 시킬 때.
- **무엇을 하나:** 답변 끝에 사실 확인, 추론 점검, 빠진 맥락을 묻는 질문 2~3개를 붙입니다. 대화당 한 번만 붙습니다.
- **설치:**
  ```
  /plugin marketplace add anthropics/skills
  /plugin install discernment-nudge@anthropic-agent-skills
  ```
- **주의:**
  - Claude 자신의 답변을 점검하게 하는 구조입니다. 팀원이 직접 한 분석을 코칭하는 기능은 아닙니다.
  - 리드 문구가 영어('A few things worth a second look:')로 고정되어 있습니다.
  - 팀원 각자가 설치해야 합니다(조직 플랜은 관리자가 조직 스킬로 배포).

### 3-10. 설치하지 말고 템플릿만 가져올 것 [참고]

모두 6장의 팀 전용 스킬에 넣을 재료입니다.

| 가져올 것 | 위치 | 내용 |
|---|---|---|
| 목표 대비 효율 리뷰 양식 | [supermetrics-public/claude-marketing-plugin](https://github.com/supermetrics-public/claude-marketing-plugin) `plugins/supermetrics-marketing/skills/marketing-leader/assets/efficiency_dashboard_doc.md` | 헤드라인 → 지표 스코어카드(목표, 실적, 편차, 추세) → 미달 지표 진단(원인, 증거, **기한 있는 조치**) → 잘된 점 2~3개 → 리스크 → 다음 체크포인트. '헤드라인을 못 정하면 분석이 덜 된 것', 분기 리뷰에 '시도했지만 안 된 것' 넣기 |
| 데일리 체크 양식 | 같은 저장소 `performance-marketer/assets/daily_standup_summary.md` | '오늘 할 일'과 '지켜볼 것'. 지켜볼 것에는 **트립와이어 조건이 필수**입니다(예: 빈도 4 초과 시 소재 교체). **'모니터링하겠다'는 액션으로 인정하지 않습니다** |
| 1페이지 월간 리뷰 | [wshobson/agents](https://github.com/wshobson/agents) `plugins/business-analytics/skills/data-storytelling/references/details.md` | 헤드라인 / 핵심 지표 4개 / 잘 되는 것 / 주의할 것 / 원인 / 권고 3개 / 다음 달 집중 과제. **헤드라인 공식 = [구체적 숫자] + [비즈니스 영향] + [실행 맥락]**. 설치하려면 `gh skill install wshobson/agents data-storytelling` 또는 `npx skills add wshobson/agents --skill data-storytelling` |
| 주간 크로스채널 다이제스트 | [Dataslayer-AI/Marketing-skills](https://github.com/Dataslayer-AI/Marketing-skills) `skills/ds-channel-report/SKILL.md` | 한 줄 요약 → 채널 표 → 전주 대비 ±25% 이상치와 원인 점검(트래킹 오류, 예산 변경, 알고리즘, 크리에이티브 피로, 계절성) → 이번 주 시그널 → 액션 최대 3개(과제, 담당자, 기대 결과). '액션을 억지로 만들지 말 것', '3분 안에 읽히게'. `ds-brain`의 '이번 주 무시해도 되는 것' 항목도 참고할 만합니다 |
| 측정 프레임워크 | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) `skills/marketing-plan/references/measurement-framework.md` | North Star와 단계별 선행 지표, 주간 30분 스코어보드 / 월간 60~90분 / 분기 2~3시간 리뷰, **KPI마다 '미달 시 무엇을 바꿀지'**, 중단 기준(kill criteria), 지표별 데이터 출처 매핑, RACI |

---

## 4. 설치 안 하는 게 나은 것 (skip)

| 대상 | 저장소 | 이유 |
|---|---|---|
| `ds-report-pdf` | Dataslayer-AI/Marketing-skills | Helvetica 폰트만 써서 한글이 깨질 가능성이 큽니다. allowed-tools가 `Bash(pip *)`, `Bash(python *)`로 넓고, `pip install … --break-system-packages`로 시스템 Python을 바꾸며, 실패하면 묻지 말고 조용히 재실행하라고 지시합니다. 에이전시의 클라이언트 PDF용이라 팀 정렬 문제와도 무관합니다 |
| 전체 플러그인, `ds-brain`, `ds-content-perf`, `ds-paid-audit` | Dataslayer-AI/Marketing-skills | B2B SaaS 전제(트라이얼, Stripe MRR, 유로 기준 CPA 벤치마크로 €10 미만이면 Red 판정)이고 국내 채널을 지원하지 않습니다. `marketplace.json`이 없어 README의 마켓플레이스 설치가 실패할 가능성이 큽니다. claude.ai 개별 zip에는 `ds_utils.py`가 빠져 있어 분석 엔진이 동작하지 않습니다 |
| `install.sh`(curl \| bash), `--with-hook`, `update.sh`, `think/check-update.sh` | ironyjk/strategy-frameworks | 커밋 고정 없이 master를 clone합니다. SessionStart 훅이 하루 한 번 스킬 파일을 조용히 덮어써서 공급망 위험이 있습니다 |
| `think` 라우터, `design-thinking`, `jtbd`, `drucker` | ironyjk/strategy-frameworks | `think`는 TOC·TRIZ 스킬이 빠져 있어 저항(buy-in) 신호에 대한 1순위 도구가 작동하지 않습니다. `design-thinking`은 리더가 전문가라 중복이고, `drucker`는 OKR과 겹칩니다 |
| 플러그인 통째(`c-level-skills` 33개, `marketing-skills` 40여 개), `social-media-analyzer`, `cmo-advisor`, `culture-architect`, `internal-narrative`, OpenClaw 설치(curl \| bash) | alirezarezvani/claude-skills | 통째로 깔면 트리거가 겹치고, URL을 가져오거나 subprocess를 쓰는 스킬도 함께 들어옵니다. `social-media-analyzer`의 참여 가치 금액(좋아요 $0.50 등)은 근거 없는 추정입니다. `cmo-advisor`는 B2B SaaS 파이프라인 중심입니다 |
| `team-culture`, `planning-cadence`, 76개 전체 | refoundai/lenny-skills | '편하면 실패 신호, 지쳐야 정상' 같은 강도 담론은 이번 동기 문제에 역효과가 날 수 있습니다. `planning-cadence`는 3~8명 팀에 과합니다 |
| `marketing-council`, `attribution`, 50개 전체 플러그인, `marketing-plan` 본체 | coreyhaines31/marketingskills | `marketing-council`은 이미 가진 `ebp-expert-panel`과 겹칩니다. `attribution` 구현에는 개발 리소스가 필요합니다. `marketing-plan`은 8,000~12,000단어짜리 플랜이라 과하니 `measurement-framework.md`만 참고하세요 |
| `summarize-meeting`, `cohort-analysis`, `stakeholder-map`, `pm-ai-shipping`, `pm-toolkit` | phuryn/pm-skills | Claude 기본 능력과 차이가 거의 없습니다. 회의 내용이 웹 검색어로 나갈 수 있습니다. 팀원을 권력×관심 그리드에 놓으면 낙인이 찍힐 위험이 있습니다. 이번 문제와 무관합니다 |
| `workshop-facilitation` 단독, `stakeholder-identification`, `derisk-measurement-advisor`, 77개 전체 | deanpeters/Product-Manager-Skills | Claude의 대화 규칙일 뿐입니다. 소규모 팀에는 효용이 작습니다. 신규 제품 위험 점검용입니다 |
| `playground`, `receipts`, `session-report` | anthropics/claude-plugins-official | 개발 관점 예시이거나 Claude Code 사용량 리포트라 무관합니다 |
| `academy-guide` | anthropics/skills | Claude Academy 강좌 추천이라 이번 문제와 거의 관련이 없습니다 |
| `windsor-optimize`의 쓰기 실행, `/wasted-spend` 실행 | windsor-ai | 광고 계정을 실제로 바꿉니다. 핵심 문제와도 거리가 멉니다 |
| `content-marketer`, `demand-gen`, `field-marketer` | supermetrics-public | 미국 B2B·이벤트 조직용입니다. 이커머스 팀이라면 `ecommerce-marketer`의 코호트 분석만 CRM 참고용으로 볼 만합니다 |
| `kpi-dashboard-design`, `startup-metrics-framework`, `postmortem-writing` | wshobson/agents | Claude 기본 지식 수준이고 SaaS·IT 장애 예시입니다. '비난 없는 회고' 개념만 참고하세요 |
| `operations`, `productivity` 플러그인 전체 | anthropics/knowledge-work-plugins | 관련 있는 것은 `process-optimization`(낭비 5종)과 `task-management`(TASKS 형식) 정도뿐입니다. 프레임만 가져다 쓰세요 |
| `internal-comms`, `doc-coauthoring` | anthropics/skills | 이미 설치되어 있습니다(5장) |

---

## 5. 이미 가진 스킬 재활용법

### `kikitv-daily-sns`: 리더의 운영 원칙을 팀 루틴으로 옮기기
리더는 이미 혼자서 "지표 → 회고 → 다음 액션"을 지속 가능하게 돌리고 있습니다. 팀이 얼라인되지 않는 이유 중 하나는 이 암묵적인 운영 원칙이 팀에 명시적으로 전달되지 않았기 때문일 수 있습니다.

| 원래 패턴 | 팀 버전 |
|---|---|
| 지표 3개만 확인(5분) | 역할별 **지표 카드 = 지표 3개**. 4번째를 넣으려면 하나를 뺍니다(one-in-one-out) |
| 임계값에서 액션으로(CTR이 4% 미만이면 썸네일 교체 제안) | 지표마다 '이 값이면 이 행동' 트리거(예: CPA가 목표 대비 +20%로 3일 연속이면 소재 교체 검토). 숫자를 모으는 이유가 결정 규칙으로 보입니다 |
| 롱폼 1개에서 쇼츠·릴스 여러 개 | **한 번 수집해서 여러 번 활용.** 같은 원천 데이터를 주간 3P, 월간 리포트, 캠페인 회고에 다시 씁니다 |
| "데일리는 새로 만드는 날이 아니라 배포하고 대화하는 날" | "데이터 루틴은 **리포트를 만드는 날이 아니라 보고 결정하는 날**" |
| 시간 박스(30~45분) | 월요일 지표 확인 10분, 금요일 회고 30분. 데이터 업무에 **상한선**을 둡니다 |
| 상위 1개만 심층 분석 | 회고에서는 상위 1개와 하위 1개만 "왜?"를 깊게 묻습니다 |
| 무너졌을 때 버리는 순서와 끝까지 지킬 것 | 바쁜 주에 버리는 순서(심층 분석 → 대시보드 → 3P 문장 다듬기)와 **끝까지 지킬 2가지**(지표 3개 확인, 지난 액션 결과 확인)를 이유와 함께 공개합니다 |

### `ebp-expert-panel`: 근거 등급과 반대 논리
- **마케팅 데이터 근거 등급:**
  - A: 통제 실험(A/B, 홀드아웃)
  - B: 여러 기간·세그먼트에서 반복된 추세
  - C: 단일 캠페인·단일 기간의 관찰
  - D: 감, 댓글 몇 개, 경쟁사 사례

  인사이트마다 등급을 붙이면, 리더가 "방향이 다르다"고 느끼는 지점(**C·D 근거로 큰 결론을 내리는 것**)이 말로 표현됩니다.
- '악마의 변호인'을 가볍게 바꿔서, 분석 리뷰마다 **"대안 설명 2개"를 의무**로 둡니다. '도전 질문 1개'는 리더의 코칭 질문으로 씁니다.
- 리더가 계획한 개입안(목표 공동 설정, 주간 회고, 수집량 줄이기)을 EBP로 먼저 검증할 수 있습니다. 형제 폴더 `마케팅팀 데이터 얼라인 선행연구/`의 노트가 이미 A~D 등급을 쓰고 있습니다.
- 팀의 일상 리뷰에 그대로 쓰기에는 무겁습니다. 등급 체계와 체크리스트만 6장의 팀 스킬로 옮기세요. coreyhaines의 `marketing-council` 대신 이 스킬을 쓰면 됩니다.

### `deep-research`: 이번에 확인하지 못한 것을 조사
여러 출처를 조사해 서술형 보고서로 정리하는 스킬입니다(서브에이전트 도구가 있는 환경에서 동작). 다음을 조사하는 데 쓰세요.
1. Windsor, Supermetrics, Dataslayer 같은 데이터 허브가 네이버 검색광고·GFA, 카카오모먼트, 쿠팡을 지원하는가?
2. 국내 B2C·커머스 마케팅 벤치마크
3. 8장의 미검증 저장소 비교

### `internal-comms`: 3P와 FAQ로 목적을 공유하고 루프 닫기
- 팀 주간 공유를 **3P(Progress/Plans/Problems)**로 통일합니다. Progress에는 숫자를 1개 이상 넣고, **Problems에는 "데이터 수집·정리 장애"를 올리는 공식 칸**을 둡니다. 불만이 뒷말이 아니라 개선 안건이 됩니다.
- **"데이터 수집 FAQ"**를 만듭니다. 예: "왜 이 지표를 모으나요?", "이 시트는 누가 보나요?", "바쁠 때는 무엇을 빼도 되나요?". 질문은 `synthesize-research` 결과에서 가져오고, 리더가 답합니다. 목적 설명을 한 번의 연설이 아니라 검색 가능한 문서로 남기는 방법입니다.
- 원래 1000명 넘는 회사와 이모지 서식을 전제로 하므로 작은 팀에 맞게 줄이세요.

### `doc-coauthoring`: 원칙 문서를 팀과 함께 쓰고 "신입 테스트"하기
- **"마케팅팀 데이터 운영 원칙 v0.1(1페이지)"**을 팀과 함께 씁니다. Stage 2의 keep/remove/combine을 팀원이 직접 하게 합니다.
- Stage 3 Reader Testing을 **신입 테스트**로 바꿉니다. 원칙 문서만 읽고 "이번 주 내가 무엇을 왜 모으는지", "바쁠 때 무엇을 빼도 되는지"에 답할 수 있는지 봅니다. 리더 의도가 실제로 전달되는지 확인하는 객관적 테스트입니다.

### `skill-creator`: 리더의 기준을 팀 스킬로 만드는 엔진 → 6장

---

## 6. 팀 전용 스킬 만들기 제안

**왜 직접 만드나.** 검토한 공개 스킬은 모두 미국 SaaS·PM 맥락이고 영어입니다. 국내 채널이 없고, 리더 고유의 기준도 모릅니다. "분석 수준과 방향이 다르다"를 줄이는 데 효과가 가장 큰 것은 **리더의 정의, 루브릭, 리포트 형식을 팀 스킬로 직접 인코딩하는 일**입니다. 그러면 팀원 곁에 "리더 수준의 1차 피드백"이 늘 있게 됩니다.

### 6-1. 구조: 기반층 1개 + 실행 스킬 3개

| 스킬 | 만드는 도구 | 하는 일 | 다루는 층위 |
|---|---|---|---|
| `[팀명]-mkt-data-context` (기반층) | `data-context-extractor` | 용어·지표 사전, 제외 규칙, 흔한 실수, 데이터 출처(시트 탭, 매체 리포트 양식, 담당자) | 분석 품질 |
| `mkt-data-brief` | `skill-creator` | 수집 전 게이트: 이 데이터로 바꿀 결정, 지표 최대 3개, 판단 규칙, 중단 기준 | 리더 얼라인, 수집 부담 |
| **`mkt-analysis-review`** | `skill-creator` | 리더 루브릭으로 1차 리뷰하고 판정합니다 | 분석 품질, 코칭 |
| `mkt-weekly-loop` | `skill-creator` | 월요일 10분 지표 확인, 금요일 30분 회고, 3P, 지난 액션 결과 확인 | 회고 리듬, 리포팅 |

세 실행 스킬이 같은 `references/metrics.md`와 `metric-tree.md`를 공유하게 하면, 정의를 한곳에서 관리할 수 있습니다.

### 6-2. 공개 스킬에서 가져올 재료

| 넣을 요소 | 출처 |
|---|---|
| 정의 인터뷰 5개 질문, 지표 문서 표준 | KWP `data-context-extractor` |
| 분석 함정 카탈로그, 3단계 판정 | KWP `validate-data` |
| GACCS 원페이저 | lenny `marketing-org-and-stack` |
| Impact & Learnings 회의 | lenny `growth-experimentation` |
| 원칙 5~7(교차검증, 기간 일치, 목표 기준 권고와 트레이드오프) | coreyhaines `analytics` |
| 가설 템플릿, ICE | coreyhaines `ab-testing` |
| '행동을 바꾸지 못하는 지표는 나쁜 지표', 반대 지표 | phuryn `metrics-dashboard` |
| 스코어카드 → 진단 → 기한 있는 조치, 트립와이어 | Supermetrics 템플릿 |
| 헤드라인 공식, 1페이지 리뷰 | wshobson `data-storytelling` |
| SCQ → 결론 → MECE 근거 → 액션 | ironyjk `pyramid-principle` |
| 근거 등급 A~D, 대안 설명, 도전 질문 | `ebp-expert-panel`(설치됨) |
| 지표 3개, 임계값 트리거, 무너졌을 때의 우선순위 | `kikitv-daily-sns`(설치됨) |

> **라이선스 메모**
> - MIT 저장소의 문장을 그대로 옮기면 저작권·라이선스 고지를 함께 둡니다.
> - lenny-skills의 인용과 프레임워크 내용은 출처를 밝힙니다.
> - deanpeters는 CC BY-NC-SA 4.0입니다(3-7).

### 6-3. `mkt-analysis-review` SKILL.md 뼈대

```
mkt-analysis-review/
├── SKILL.md
├── references/
│   ├── rubric.md            # 6기준 × 3레벨 (레벨 서술은 팀이 함께 씀)
│   ├── qa-checklist.md      # 정확성 점검
│   ├── report-template.md   # 1페이지 리포트 양식
│   └── examples/
│       ├── good-annotated.md
│       └── needs-work-annotated.md
└── evals/
    └── evals.json           # 과거 리포트(익명) 3~5개 + 리더 판정
```

```markdown
---
name: mkt-analysis-review
description: 팀원이 쓴 마케팅 성과 리포트, 데이터 분석, 캠페인 회고를 우리 팀 분석 기준(루브릭)으로 1차 리뷰하고 "바로 공유 / 단서 달고 공유 / 보완 후 재검토" 판정과 다음 한 수를 제안한다. "리포트 봐줘", "이 분석 괜찮아?", "팀장님께 올리기 전에 체크해줘", "인사이트 맞아?", "회고 문서 검토", "주간 보고 점검"처럼 분석 산출물을 평가·개선하는 요청이면, 사용자가 '리뷰'라고 말하지 않아도 이 스킬을 사용한다.
---

# 마케팅 분석 리뷰 (1차 리뷰어)

## 이 스킬이 있는 이유 (팀이 합의한 문장으로 바꿀 것)
- 리더가 기대하는 분석 수준은 결과물을 받은 뒤가 아니라 쓰기 전에 보여야 한다. 그래서 기준을 여기 적어 둔다.
- 이 리뷰는 평가가 아니라 연습 상대다. 사람(성격, 태도)이 아니라 문서와 다음 행동만 다룬다.
  이유: 자아를 겨냥한 피드백은 오히려 수행을 떨어뜨릴 수 있다.
- 리더는 이 리뷰 뒤에 방향과 해석만 본다.

## 0. 먼저 확인
- 정의는 [팀명]-mkt-data-context를 따른다(전환, ROAS, 신규 고객, 제외 규칙).
- 문서에 "이 분석으로 바꿀 결정"이 없으면 리뷰 전에 그것부터 묻는다.
  이유: 결정이 없으면 깊이와 방향을 판단할 기준이 없다.

## 1. 리뷰 절차
1) 핵심 주장 1~3개를 한 문장씩 다시 쓴다.
2) 정확성 점검 → references/qa-checklist.md
   - 기간이 완전한가 / 분자·분모의 기간이 같은가 / 평균의 평균이 아닌가
   - 매체별 수치를 합산하지 않았나 / 팀 정의와 같은가 / 다른 방법으로 한 번 교차검증했나
3) 루브릭 채점 → references/rubric.md
4) 주장마다 근거 등급 A/B/C/D를 붙인다. C·D 근거로 큰 결론을 내렸으면 표시한다.
5) 대안 설명 2개를 쓴다(이 숫자가 다르게 설명될 수 있는 이유).
6) 판정: 바로 공유 / 단서 달고 공유 / 보완 후 재검토

## 2. 루브릭 요약 (레벨 서술은 팀 워크숍에서 함께 쓴다)
| 기준 | 1 초안 | 2 공유 가능 | 3 리더 기대 수준 |
|---|---|---|---|
| 목적 연결: 지표 나무의 어느 가지, 어떤 결정 | | | |
| 정의·비교 기준: 팀 사전, 목표·전기간 대비 | | | |
| 근거 강도: 등급 표시, C·D로 큰 결론 금지 | | | |
| 해석: '왜?' 가설 + 대안 설명 | | | |
| So-what: 인사이트에 연결된 액션, 담당, 기한, 트립와이어 | | | |
| 전달: 30초 요약, 제목이 지표명이 아니라 인사이트 | | | |

## 3. 피드백 원칙 (이유와 함께)
- 강점 1 + 개선 최대 2 + 다음 질문 1. 이유: 한 번에 고칠 수 있는 양만 준다.
- 점수보다 '다음 레벨로 가는 구체적인 한 수'를 준다.
- "모니터링하겠다"는 액션으로 치지 않는다. 지켜볼 항목에는 "X가 Y를 넘으면 Z" 조건을 붙이게 한다.
- 액션이 0개면 "이번 주에 바꿀 1가지는?"을 묻는다. 이유: 액션이 없는 리뷰는 루프를 닫지 못한다.

## 4. 출력 형식
판정 / 핵심 주장 / 루브릭 표 / 근거 등급 / 강점 1 / 개선 2 / 도전 질문 1
마지막 줄 메타데이터:
verdict: <바로 공유|단서 달고 공유|보완 후 재검토>  evidence_grade: <A~D>  next_action: <한 줄>

## 5. 이의 제기
- 판정에 동의하지 않으면 이유를 적어 리더에게 보낸다. 받아들여진 이의는 evals에 반례로 추가한다.
  이유: 이 스킬이 감시 도구가 아니라 학습 도구로 남게 하기 위해서다.
```

**evals 예시(assertion):**
- 판정이 리더 판정과 같다.
- 개선 코멘트가 2개 이하다.
- 사람을 평가하는 문구가 없다.
- 트립와이어 없는 "모니터링" 액션을 지적한다.
- 결정 질문이 없는 리포트에는 먼저 질문한다.

### 6-4. `mkt-data-brief` 게이트 (수집 부담을 줄이는 핵심부)

```markdown
## 0. 수집 전 게이트 질문 3개 (하나라도 답이 없으면 브리프를 멈추고 함께 질문을 다듬는다)
1) 이 데이터로 바꿀 '결정'은 무엇인가? (예: 다음 주 예산 재배분, 소재 교체 여부)
2) 그 결정은 지표 나무의 어느 가지인가? → references/metric-tree.md
3) 이미 있는 데이터로 답할 수 있나? → references/data-sources.md

## 1. 브리프 (1페이지)
결정 질문 | 가설("~라면 ~할 것이다") | 지표(최대 3개) | 비교 기준 | 판단 규칙("X 이상이면 A, 미만이면 B")
| 출처·담당·예상 소요(분) | 분석 깊이(Quick / Full / Formal) | 검토일·중단 기준(언제 이 수집을 멈추나)

## 2. 가드레일 (각각 이유를 함께 설명)
- 지표가 4개 이상이면 하나를 빼자고 제안한다(one-in-one-out).
- "일단 다 모아두자"에는 결정 질문부터 다시 묻는다.
- 같은 숫자를 두 군데 이상 입력하면 자동화(커넥터, 시트 함수)를 먼저 제안한다.
```

### 6-5. 만드는 순서 (`skill-creator`를 팀과 함께 쓰기)

1. Claude Code나 Cowork에서 "skill-creator로 우리 팀 분석 리뷰 스킬을 만들자"고 시작합니다. claude.ai에는 서브에이전트가 없어 스킬 있음/없음 비교(baseline)가 생략되므로 Claude Code나 Cowork를 권합니다.
2. **의도 파악 단계를 팀 세션(60분)으로 진행합니다.** 루브릭 레벨 서술, 지표 카드, 폐지 목록은 팀이 쓰고 리더가 다듬습니다. 리더 혼자 만들어 배포하면 "또 하나의 지시"가 됩니다.
3. 과거 리포트 3~5개를 익명화하고 리더가 먼저 판정해 `evals.json`을 만듭니다.
4. 스킬이 있을 때와 없을 때를 비교 실행해 **판정이 얼마나 일치하는지** 봅니다. 평가자 간 일치도와 같은 구조입니다.
5. `package_skill.py`로 `.skill` 파일을 만들어 팀원이 Save skill로 설치합니다. 조직 설정에서 허용되는지 확인하세요.
6. 분기마다 팀 회고에서 루브릭을 개정하고, 팀원이 낸 반례를 evals에 추가합니다. 리더의 기준이 '정답'으로 굳지 않게 하는 장치입니다.

skill-creator의 작성 원칙인 **"MUST를 대문자로 쓰기보다 왜(why)를 설명하라"**는 팀 운영 원칙과도 같습니다. 스킬 본문에 규칙마다 이유를 적어 두면, 팀원이 스킬 출력을 읽으면서 리더의 사고방식을 배우게 됩니다.

---

## 7. 안전 수칙: 서드파티 스킬 설치 전 확인할 것

1. **파일 목록부터 봅니다.** `hooks`/`hooks.json`, `.mcp.json`, `settings.json`, `scripts/`(.sh, .py, .js)가 있는지 확인합니다. 마크다운만 있는 저장소(lenny, phuryn, deanpeters)는 위험이 낮습니다.
2. **`curl … | bash` 설치는 쓰지 않습니다.** ironyjk의 `install.sh`, alirezarezvani의 OpenClaw 설치법이 여기에 해당합니다. 폴더를 직접 복사하거나 커밋이 고정된 마켓플레이스를 쓰세요.
3. **자동 업데이트 훅을 등록하지 않습니다.** ironyjk의 `check-update.sh`처럼 SessionStart 훅이 스킬을 조용히 덮어쓰면, 업스트림이 바뀌거나 계정이 탈취됐을 때 Claude가 읽는 지시가 몰래 바뀝니다.
4. **커밋을 고정합니다.** 마켓플레이스 설치는 원격 저장소를 따라 업데이트됩니다. 업데이트한 뒤에는 CHANGELOG와 바뀐 SKILL.md를 다시 읽으세요. 공식 마켓플레이스의 고정 커밋과 저장소 HEAD가 다를 수 있습니다(windsor-ai).
5. **플러그인을 통째로 설치하지 말고 필요한 스킬 폴더만 씁니다.** 통째로 설치하면 트리거가 겹치고, 검토하지 않은 코드가 함께 들어옵니다(coreyhaines의 `tools/clis`, alirezarezvani의 URL 조회 스킬, wshobson의 다른 플러그인 훅).
6. **`allowed-tools`를 확인합니다.** `Bash(pip *)`, `Bash(python *)`처럼 넓은 실행 권한을 요구하는 스킬(Dataslayer `ds-report-pdf`)은 설치하지 않습니다.
7. **제3자 데이터 흐름을 확인합니다.** Windsor.ai, Supermetrics, Dataslayer MCP를 쓰면 광고·CRM·매출 데이터가 외부 서버를 거칩니다. 회사 보안·개인정보 정책을 검토하고, 쓰기 권한은 꺼 두고, 읽기 전용·최소 권한 자격증명을 쓰세요.
8. **웹 검색 지시를 확인합니다.** phuryn의 `brainstorm-okrs`, `summarize-meeting` 등은 필요하면 웹 검색을 합니다. 사내 전략이나 회의 내용을 넣을 때는 "웹 검색하지 마"라고 지시하세요.
9. **고객 개인정보는 넣지 않습니다.** CRM 원본은 비식별화하고 집계 데이터만 씁니다(국내 개인정보보호법과 사내 정책 확인). Artifact나 claude.ai에 올라가는 페이지에는 팀원 개인 성과를 넣지 마세요.
10. **스킬 파일에 적힌 설치 명령을 Claude가 실행하지 않게 합니다.** ironyjk `think`의 `install:` 필드처럼 검토하지 않은 저장소를 받아 오는 명령이 들어 있을 수 있습니다.
11. **라이선스를 확인합니다.**
    - deanpeters는 CC BY-NC-SA 4.0(유료 재포장 금지)입니다.
    - lenny-skills의 인용·프레임워크는 Lenny와 게스트의 지적재산이라 출처를 표기해야 합니다.
    - anthropics/skills의 docx, xlsx, pptx, pdf 스킬은 Anthropic 독점 라이선스(소스만 공개)입니다.
12. **설치한 뒤 바로 확인합니다.** `/` 목록에서 실제 스킬 이름을 확인하고(README와 다를 수 있음), 무해한 샘플 입력으로 먼저 실행해 보세요.

---

## 8. 미검증 후보 (이번에 파일을 열어 보지 않음)

아래는 후보 탐색에서 이름만 확인한 저장소입니다. **내용과 안전성을 검토하기 전에는 설치하지 마세요.** 관심 가는 것이 있으면 `deep-research`로 조사하거나, 위와 같은 방식으로 파일을 직접 검토한 뒤 판단하세요.

| 저장소 | 이름으로 확인한 항목 | 관련 층위(추정) |
|---|---|---|
| [thatrebeccarae/claude-marketing](https://github.com/thatrebeccarae/claude-marketing) | UTM & Attribution Strategy, GA4, Looker Studio, Meta/Google Ads 감사, Pro Report Builder | 수집 부담, 리포팅 |
| [guia-matthieu/clawfu-skills](https://github.com/guia-matthieu/clawfu-skills) | 리더십(1:1, radical candor, high-output management), 분석(funnel analyzer, cohort analysis) | 코칭·소통 |
| [polar-bear-org/claude-skills](https://github.com/polar-bear-org/claude-skills) | ways-of-working-change-pack, team-performance-pack, workshop-pack, ai-for-managers-pack | 리더 얼라인, 코칭 |
| [modu-ai/moai-cowork](https://github.com/modu-ai/moai-cowork) | moai-marketer(marketing-performance-report, marketing-evidence-audit 등), moai-coworker(productivity-retro, collab-feedback-loop, productivity-goal 등) | 리포팅, 회고 리듬 |
| [andrewluxem/4-blocker-business-reviews](https://github.com/andrewluxem/4-blocker-business-reviews) | 4-blocker-business-reviews | 리포팅 |
| [clamp-sh/analytics-skills](https://github.com/clamp-sh/analytics-skills) | analytics-diagnostic-method, traffic-change-diagnosis, metric-context-and-benchmarks, causal-evidence-checklist 등 | 분석 품질 |
| [product-on-purpose/pm-skills](https://github.com/product-on-purpose/pm-skills) | retrospective, lessons-log, okr-writer, okr-grader, instrumentation-spec, experiment-design, Design Sprint, note-and-vote | 회고 리듬, 리더 얼라인 |
| [captainbook/okr-os](https://github.com/captainbook/okr-os) | /okr-set, /monday, /friday, /okr-coach 등 12개 | 리더 얼라인, 회고 리듬 |
| [millwright-labs/minto-pyramid-skill](https://github.com/millwright-labs/minto-pyramid-skill) | minto-pyramid | 리포팅 |
| [bayramannakov/ideo-method-cards](https://github.com/bayramannakov/ideo-method-cards) | ideo-method-cards | (디자인씽킹, 중복 가능) |
| [rastian/design-thinking-skills](https://github.com/rastian/design-thinking-skills) | design-thinking | (디자인씽킹, 중복 가능) |
| [spillwavesolutions/running-marketing-campaigns-agent-skill](https://github.com/spillwavesolutions/running-marketing-campaigns-agent-skill) | running-marketing-campaigns | 리포팅 |
