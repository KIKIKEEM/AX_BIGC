# Data-driven decision-making (DDD) culture and data literacy in organizations

> Method note for the report writer: WebFetch failed in this session (DNS "ENOTFOUND" on mckinsey.com, wavestone.com and gartner.com), so I read no full texts. Every number below comes from **abstracts, publisher/repository records, press releases or search-result snippets**. Figures confirmed by two or more independent records are marked "consistent across records". Anything I could not pin to a source is in Gaps.
>
> Evidence grades: **A** = meta-analysis, systematic review or guideline. **B** = RCT or large empirical study. **C** = small study, executive or practitioner survey, conceptual work or expert opinion. **D** = anecdote, commentary or unverified claim. Vendor-sponsored and consultancy surveys are graded **C at best**: they are non-random, self-reported and often written by people selling the solution.

## Q1. What does empirical research say about the payoff of data-driven decision making?

### Takeaway
DDD has a real but modest payoff: about 3-8% on productivity or ROA, from large econometric studies (grade B) and pooled correlations of about r = .38 in meta-analyses (grade A, mostly self-report). The payoff depends on complements. It shows up only when data is paired with skilled people, structured management routines and a supportive analytics culture. Collecting data alone does not produce it.

### Cited Findings
- **[B] Brynjolfsson, Hitt & Kim (2011), "Strength in Numbers."** The sample was 179 large publicly traded US firms, measured with survey data on business practices and IT.
  - Firms that adopt DDD had output and productivity **5-6% higher** than their other investments and IT use would predict.
  - The association also appears in asset utilization, ROE and market value.
  - Instrumental-variables tests suggest the result is not just reverse causality.
  - DDD was defined as how data is **used** in decisions such as launching a new product, not merely whether it is collected.
  - Caveat: this is a cross-sectional ICIS/working paper, and the causal reading rests on the IV tests.
  - Sources: [SSRN 1819486](https://papers.ssrn.com/abstract=1819486); [ICIS 2011 record](https://aisel.aisnet.org/icis2011/proceedings/economicvalueIS/13). Consistent across records.
- **[B] Brynjolfsson & McElheran (2016), "The Rapid Adoption of Data-Driven Decision-Making," *AER Papers & Proceedings* 106(5):133-39.**
  - The data is from the US Census Bureau, covering a large representative sample of manufacturing plants.
  - DDD adoption nearly **tripled, from 11% to 30%**, between 2005 and 2010.
  - Adoption correlates with plant size, with **complements (IT and educated workers)**, and with firm learning.
  - In the companion paper, adopting plants show an **average 3% increase in value-added** from 2005 to 2010.
  - The gains appear only **after** plants report adopting DDD, which points to a causal effect.
  - Sources: [IDEAS/RePEc](https://ideas.repec.org/a/aea/aecrev/v106y2016i5p133-39.html); [MIT DSpace](https://dspace.mit.edu/handle/1721.1/108650); [Census working paper 16-06](https://econpapers.repec.org/paper/cenwpaper/16-06.htm). Consistent across records.
- **[B] Brynjolfsson, Jin & McElheran (2021), "The Power of Prediction," *Business Economics* 56(4).**
  - The sample was more than 30,000 US manufacturing establishments, surveyed with the Census Bureau.
  - Plants using predictive analytics had up to **$918,000 higher sales** than similar competitors. IV estimates and the timing of the gains suggest causality.
  - **The payoff appears only when analytics is combined with at least one complement:** substantial IT capital, educated workers, or high flow-efficiency workplace design.
  - The working-paper version adds that **managerial capacity**, measured as management practices or manager headcount, enables both adoption and gains.
  - This explains why some adopters see no benefit at all.
  - Sources: [RePEc](https://ideas.repec.org/a/pal/buseco/v56y2021i4d10.1057_s11369-021-00224-5.html); [Stanford Digital Economy Lab](https://digitaleconomy.stanford.edu/publication/the-power-of-prediction-predictive-analytics-workplace-complements-and-business-performance); [MIT DSpace](https://dspace.mit.edu/handle/1721.1/137842)
- **[B] Bloom, Brynjolfsson, Foster, Jarmin, Patnaik, Saporta-Eksten & Van Reenen (2019), "What Drives Differences in Management Practices?", *AER*.**
  - The data covers about 35,000 US plants in two waves (2010 and 2015).
  - "Structured" management means fine-grained, frequent **performance monitoring**, **targets** and incentives.
  - These practices explain **more than 20% of productivity variation** across plants. That is as much as or more than R&D, ICT or human capital.
  - About **40% of the variation in practices lies between plants of the same firm**, so practices differ by unit and manager, not just by company.
  - Sources: [AER PDF (MIT IDE)](https://ide.mit.edu/wp-content/uploads/2019/05/What-Drives-Diffs-in-Mgmt-Practices_AER-2019-May.20170491.pdf?x19295); [IZA DP10724](https://docs.iza.org/dp10724.pdf)
- **[B-, self-report cross-section] Germann, Lilien & Rangaswamy (2013), "Performance implications of deploying marketing analytics," *IJRM* 30(2):114-128.** This is the most marketing-specific study.
  - The sample was 212 senior executives at Fortune 1000 firms.
  - A **one-point increase on the 7-point marketing-analytics deployment scale goes with about 8% higher ROA**. The INFORMS release says up to 21% for firms that expand analytics use.
  - The effect is **stronger under high competition and volatile customer preferences**.
  - Deployment requires **top-management support, an analytics culture, appropriate data, IT support and analytics skills**.
  - Sources: [RePEc](https://ideas.repec.org/a/eee/ijrema/v30y2013i2p114-128.html); [INFORMS press release](https://www.informs.org/News-Room/INFORMS-Releases/News-Releases/Marketing-Analytics-Lilien); [Penn State record](https://pure.psu.edu/en/publications/performance-implications-of-deploying-marketing-analytics/)
- **[A] Meta-analyses of big-data and analytics capability and firm performance.**
  - **Anton, Oesterreich & Teuteberg (ICIS 2021)** ran a meta-analytic SEM on 63 studies, with 271 correlations and 33,281 observations. **Operational performance mediates** the path from analytics capability to market and financial performance. The abstract gives no pooled effect. — [DFKI record](https://dfki.de/web/forschung/projekte-publikationen/publikation/14804); [AIS eLibrary](https://aisel.aisnet.org/icis2021/governance/governance/1)
  - A Griffith University repository paper reports a **pooled association of r = 0.38 (95% CI .32-.44)** between big-data adoption and firm performance. — [Griffith repository](https://research-repository.griffith.edu.au/server/api/core/bitstreams/168dd4db-ea06-447a-b3ea-c402f63ab9e3/content)
  - A secondary source reports **r = .52 for decision quality**, moderated by environmental dynamism. Its venue is less established, so treat this as unverified (see Gaps).
  - Caveat: the underlying studies are mostly **self-report, cross-sectional surveys**, so the A grade describes the method, not causal strength.
- **[C] Process versus analysis (McKinsey; Lovallo & Sibony 2010, "The case for behavioral strategy").**
  - The sample was 1,048 major business decisions made over five years.
  - Managers reported on 17 practices. Eight were about the quantity and detail of analysis. The rest were about decision **process**, such as openly discussing uncertainties and including views that contradict the senior leader's.
  - **Process mattered more than analysis by a factor of about six** for outcomes such as revenue, profit and market share. This figure is verified only via secondary sources, because the McKinsey page failed to fetch.
  - Caveat: this is a consultancy study, self-reported and not peer-reviewed.
  - Sources: [McKinsey Quarterly (primary, not fetched)](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/the-case-for-behavioral-strategy); [Farnam Street summary](https://fs.blog/what-matters-more-in-decisions-analysis-or-process/)

### Inferences
- The leader can honestly tell the team that the research shows a measurable but modest edge (about 3-8%) **only when data changes decisions**. The team's "이거까지 해야 해?" ("do we really have to do this too?") is right about collection that never feeds a decision. Under the DDD definition, that kind of collection is not data-driven at all.
- Complementarity matters most for a small marketing team. Data payoff needs:
  - skills (educated workers, analytics skills)
  - structured management routines (monitoring, targets, incentives)
  - managerial capacity
  - a leader who sponsors the work

  Bloom et al.'s finding that practices vary widely between units of the same firm means the **team leader's routines are a lever in their own right**, independent of company-wide infrastructure.
- Germann et al. find the payoff is larger in competitive, volatile markets. That fits performance marketing and SNS work, where conditions change quickly. It is a reason to put data work first in the channels that move fastest.
- Lovallo & Sibony suggest the leader's alignment problem is about **process** (shared decision questions, open debate of uncertainties, permission to contradict the leader) more than analysis depth. More sophisticated analysis will not fix the misalignment by itself.

### Gaps
- No full texts were read. The exact model specifications behind the 5-6%, 3% and 8% figures are taken from abstracts.
- No study of DDD payoff in **small (3-8 person) marketing teams**, in SMEs, or in a Korean setting was found. All the B-grade evidence is about US manufacturing plants or large firms.
- The pooled r = .38 comes from a repository record whose included studies I could not see. The r = .52 for decision quality is from a less-established venue and is unverified.
- The "factor of six" is confirmed only through secondary summaries. I could not check the primary McKinsey text.
- Ansari & Ghasemaghaei (2023, *J. Computer Information Systems*), a meta-analysis of analytics capability and performance, appeared only in a reference list. Its effect size is unverified.

## Q2. What do large executive surveys say is the main barrier: technology, or culture, people and process?

### Takeaway
Every year for more than a decade, the NewVantage/Wavestone series has found that about 78-92% of senior data leaders name **culture, people, process and organization** as the main barrier, against about 8% naming technology. Only about 24-48% say they have built a data-driven organization or culture, and that share fluctuates rather than rising steadily. Gartner's CDAO surveys also rank **poor data literacy** among the top roadblocks. All of this is grade C evidence (small, non-random elite samples), but it is highly consistent across years and sources.

### Cited Findings
- **[C] Bean & Davenport, HBR 2019, summarizing the NewVantage 2019 survey.**
  - The sample was **64 C-level executives** of very large corporations.
  - **72% have yet to forge a data culture**, and 69% have not created a data-driven organization.
  - The share calling themselves data-driven **fell from 37.1% (2017) to 32.4% (2018) to 31.0% (2019)**.
  - The authors: "We hear little about initiatives devoted to changing human attitudes and behaviors around data."
  - Sources: [TechCrunch](https://techcrunch.com/2019/02/06/big-companies-are-not-becoming-data-driven-fast-enough/); [SPE/JPT reprint](https://jpt.spe.org/companies-are-failing-their-efforts-become-data-driven); [CMSWire](https://www.cmswire.com/customer-experience/the-data-driven-organization-is-an-endangered-species)
- **[C] NewVantage 2022 (10th edition).**
  - **91.9%** name cultural impediments as the greatest challenge.
  - **26.5%** report having created a data-driven organization.
  - Wavestone's own report says "more than nine out of ten" see culture, people and process as the primary challenge.
  - Sources: [Wavestone 2022 report PDF](https://wwa.wavestone.com/app/uploads/2022/01/Wavestone-2022-Data-and-AI-Leadership-Executive-Survey-Report-1.pdf); [RTInsights](https://www.rtinsights.com/everyone-wants-to-be-data-driven-but-few-want-to-do-the-driving/)
- **[C] NewVantage 2023 (11th edition).** **79.8%** cite cultural impediments as the main barrier, and only **23.9%** characterize their organization as data-driven. Snippets disagree on the sample size (about 113 companies), and the sample is not random. — [2023 survey PDF (hosted by Anaconda)](https://www.anaconda.com/wp-content/uploads/2023/03/e5361a_2f859f3457f24cff9b2f8a2bf54f82b7.pdf); [RetailWire](https://retailwire.com/?p=143715)
- **[C] Wavestone 2024 (12th edition, published January 2024, covering executives in role during 2023).**
  - The share saying they had "established a data and analytics culture" **rose from 21% to 43%**. The authors credit generative AI with catalyzing the most positive cultural change since the survey began.
  - Human factors (culture, people, process, organization) remain the barrier for **about 78%**.
  - 95.3% of respondents held a C-suite title or were the company's top data leader.
  - The exact decimals often quoted for this edition (77.6% barrier, 48.1% data-driven organization, 42.6% culture) could **not** be verified verbatim. They are consistent with the rounded figures above.
  - Sources: [Datanami, Feb 2024](https://www.datanami.com/2024/02/08/wavestone-survey-shows-genai-is-having-a-major-impact-on-data-culture/); [Wavestone news release](https://www.wavestone.com/en/news/2024-data-and-ai-leadership-executive-survey-41/); [PR Newswire](https://www.prnewswire.com/news-releases/wavestone-releases-2024-data-and-ai-leadership-executive-survey-302024534.html)
- **[C] 2025 AI & Data Leadership Executive Benchmark Survey (published December 2024; successor in the same Randy Bean series).**
  - The share reporting a data-driven organization or a data/AI culture **fell back to the mid-30s%**, about 10 points below the prior year but above the long-run average.
  - **92% name people and organizational change as the primary barrier, versus 8% technology.**
  - The publisher is attributed to Wavestone in a snippet but is hosted on a separate site. Treat the attribution as unverified.
  - Source: [2025 Benchmark Survey PDF](https://static1.squarespace.com/static/62adf3ca029a6808a6c5be30/t/67642c0d40b42a7d7e684f49/1734618125933/2025+AI+&+Data+Leadership+Executive+Benchmark+Survey+120624.pdf)
- **[C] Gartner.**
  - In the **2024 CDAO Survey**, respondents listed **poor data literacy and other skills gaps among their top 5 roadblocks**. **83%** of CDAOs say a data literacy program is in progress or planned within 12 months. — [Gartner data literacy topic page](https://www.gartner.com/en/data-analytics/topics/data-literacy)
  - The **2021 Gartner CDO Survey** ranked poor data literacy the **second-largest internal roadblock** to the CDO office's success. This is via a secondary source. — [Rackspace](https://www.rackspace.com/en-ph/solve/storytelling-numbers-data-literacy-creates-value)
  - A Gartner "Roadmap for Data Literacy" note says that for three consecutive years, **cultural resistance to change and poor data literacy** were among the **top three obstacles** for data and analytics teams. — [Gartner doc hosted by Databricks](https://databricks.com/wp-content/uploads/2020/10/Roadmap_for_Data_Lit_729278_ndx.pdf)
- **[C] MIT SMR / SAS analytics studies (Kiron, Ransbotham et al.; 2014 wave, about 2,037 respondents).**
  - Culture was the top factor for success with analytics.
  - A strong analytics culture means **using analytics "even if the results challenge views held by senior management."** In weaker cultures, "management experience overrides insights from data."
  - "Analytical innovators" were **3x more likely** than the least sophisticated group to use "a great deal or all" of their data.
  - **78%** of innovators reported senior-management pressure to be data-driven, versus **43%** of the "analytically challenged."
  - Sources: [Constellation Research summary](https://www.constellationr.com/research/blog/mit-sloan-management-review-culture-top-factor-achieving-success-analytics); [MIT SMR shop: Innovating With Analytics](https://shop.sloanreview.mit.edu/innovating-with-analytics); [MarketingCharts](https://www.marketingcharts.com/digital-42722)
- **[C] Accenture/Qlik (2020), "The Human Impact of Data Literacy"** (vendor-sponsored; about 9,000 employees surveyed).
  - Only **21%** of employees are confident in their data literacy skills, and **25%** feel fully prepared to use data.
  - **74%** feel overwhelmed or unhappy when working with data.
  - **36%** would find an alternative way to complete a task without using data.
  - Companies lose **more than 5 working days (about 43 hours) per employee per year** to data-related procrastination and sick leave.
  - Sources: [Qlik press release](https://www.qlik.com/us/news/company/press-room/press-releases/data-skills-gap-is-costing-organizations-billions-in-lost-productivity); [JPT/SPE](https://jpt.spe.org/twa/data-skills-gap-costing-organizations-billions-lost-productivity-report-finds)

### Inferences
- The leader's experience is the **modal pattern**, even in Fortune 1000 companies with chief data officers. The bottleneck is people, process and culture, not tools. Buying another dashboard or martech tool is unlikely to fix the "이거까지 해야 해?" resistance.
- The Accenture/Qlik numbers, though vendor-sponsored, line up with the team's behavior. Most employees feel unprepared, find data work stressful and route around it (36% avoid data). Resistance should be read as **low data self-efficacy plus unclear purpose**, not laziness.
- MIT SMR's "use analytics even when it challenges senior management" is a direct cultural test for the leader. If the team expects that analysis only counts when it confirms the leader's view, they will produce reports that look "off-level" or that hedge. The leader should model changing their mind publicly when the data says so.
- Senior pressure correlates with analytical maturity (78% vs 43%), but pressure alone is not a recipe. The 2025 benchmark's 92%-versus-8% split suggests that change-management practices (participation, meaning, routines) are where effort should go.

### Gaps
- No 2026 edition of the Wavestone/Bean survey was found in search, so the latest verified data is the December 2024 benchmark.
- The exact 2024 decimals (77.6%, 48.1%, 42.6%) were not verified. Sample sizes per year (about 64-125) are small, elite and non-random, and "data culture" is self-defined by respondents.
- No MIT CISR or Gartner survey breakdown specific to **marketing functions** was found. There is also no Korean-firm equivalent (see the 07_korean_context notes).
- I could not read Gartner's primary definition or full survey text (fetch blocked). The definition is quoted via a secondary source.

## Q3. How is data literacy defined and developed in non-analyst employees, and which interventions have evidence?

### Takeaway
Definitions have converged on reading, working with, analyzing and **communicating or arguing with data in context**, framed as an **inquiry process** that starts from a real question. Gartner and Wolff et al. are both grade C. The strongest intervention evidence comes from **education**, specifically teacher "data use" and "data team" professional development. Meta-analyses there find small-to-medium effects on outcomes (ES = 0.17 over 10 studies; g = 0.41 over 27 studies; grade A). Data literacy itself improves reliably, but transfer to practice is mixed and is mediated by actual changes in data-use routines. I found no rigorous (RCT or meta-analytic) evidence on corporate data-literacy training and business outcomes. MIT CISR argues that skills training alone is insufficient: access, motivation and strategic guidance are also needed.

### Cited Findings
- **[C] Gartner definition (via secondary).** Data literacy is "the ability to read, write and communicate data in context," including understanding of **data sources and constructs, the analytical methods and techniques applied**, and the ability to describe the **use case, application and resulting value**. Gartner treats application and value as the most important part. — [Rackspace citing Gartner](https://www.rackspace.com/en-ph/solve/storytelling-numbers-data-literacy-creates-value); [Gartner topic page](https://www.gartner.com/en/data-analytics/topics/data-literacy)
- **[C] Wolff, Gooch, Montaner et al. (2016), "Creating an Understanding of Data Literacy for a Data-driven Society," *Journal of Community Informatics* 12(3):9-26.**
  - The paper proposes a definition "focused on employing an **inquiry-based approach** to using data to understand real world phenomena."
  - The widely quoted wording is "the ability to ask and answer real-world questions from large and small data sets through an inquiry process, with consideration of ethical use of data" (p. 23, via secondary; check before quoting verbatim).
  - A companion paper frames it as reading, working with, analyzing and **arguing with** data.
  - Sources: [Open University ORO](https://oro.open.ac.uk/47779); [JoCI](https://openjournals.uwaterloo.ca/index.php/JoCI/article/view/3275)
- **[C] Competency-based turn.** Academic work separates **baseline** data competencies from **domain- or industry-specific** ones. Workplace frameworks stress non-technical skills, but there is "little if no agreement" on an assessment model. — [DEDALUS IO1 competence report](https://dedalus.pa.itd.cnr.it/images/DEDALUS_IO1_-_Research_on_good_practices_and_competence_profile.pdf)
- **[A] Data-literacy systematic review (2023, *El Profesional de la Información*).** It finds training limitations among students "and many professionals," and calls for data literacy in curricula and training programs. — [EPI article](https://revista.profesionaldelainformacion.com/index.php/EPI/article/view/87425)
- **[A] Ansyari, Groot & De Witte (2020), *Educational Research Review*: systematic review of data-use professional development interventions.**
  - They propose an input-process-output framework.
  - The interventions show promising effects on **satisfaction, data literacy, attitudes and beliefs**, and student outcomes.
  - **Effects on end outcomes are mediated by participant outcomes, actual data-use practices and instructional (work-practice) changes.**
  - Source: [Maastricht CRIS](https://cris.maastrichtuniversity.nl/en/publications/tracking-the-process-of-data-use-professional-development-interve)
- **[A] Ansyari, Groot & De Witte (2022), *Journal of Professional Capital and Community*: systematic review and meta-analysis.**
  - **ES = 0.17** on student outcomes.
  - It covers 27 studies from 4 countries, with only 10 in the meta-analysis, and publication bias is possible.
  - Effective design features: **conceptual, practical and continual goals**, plus facilitation through **modelling, feedback and reflection time**.
  - Source: [Emerald](https://emerald.com/insight/content/doi/10.1108/JPCC-09-2021-0055/full/html)
- **[A] Spiele, Janssen, Schildkamp & Poortman (2025), *Studies in Educational Evaluation*: meta-analysis of teacher data-use PD.**
  - 86 effect sizes from 27 studies give **g = 0.41** on student achievement, with significant heterogeneity.
  - Once study design was controlled, **intervention design characteristics did not significantly moderate** the effect.
  - Source: [Utwente record](https://research.utwente.nl/en/publications/the-effect-of-teacher-data-use-professional-development-intervent/)
- **[C] Schildkamp's "Data Team" procedure (University of Twente).**
  - Teams of **4-6 teachers plus 1-2 leaders** work through an **8-step inquiry cycle** with an external facilitator over about 2 years. The cycle runs: problem definition → hypotheses → data collection → data quality check → analysis → interpretation and conclusions → measures → evaluation.
  - In a 10-school mixed-methods study, participants were satisfied and **data-literacy test scores rose significantly** from pre-test.
  - Results on **applying the skills and on achievement were mixed**.
  - Kippers et al. (2018) document what educators learn and struggle with during the intervention: interpretation and drawing conclusions are harder than collecting data.
  - Sources: [AERA 2015 effects presentation](https://www.utwente.nl/en/bms/elan/datateams/Presentations/aera%202015%20effecten.pdf); [Kippers et al. 2018 PDF](https://ris.utwente.nl/ws/files/18816028/Kippers_et_al._2018_Data_literacy_What_do_educators_learn_and_struggle_with_during_a_data_use_intervention.pdf); [Utwente: effects on teacher PD](https://research.utwente.nl/en/publications/effects-of-an-intervention-for-data-based-decision-making-on-teac/)
- **[A, content not retrieved] Marsh (2012), "Interventions Promoting Educators' Use of Data: Research Insights and Gaps," *Teachers College Record* 114(11):1-48.** Other papers cite it for two points:
  - educators often lack the needed data-literacy skills;
  - data use is an **interpretive process**, in which data is analyzed and then **combined with professional expertise** to guide action.

  Source: [citing scoping review, CJLT](https://cjlt.ca/index.php/cjlt/article/view/28781)
- **[C] MIT CISR, "Mobilize Your Data Democracy" (van der Meulen, Someh, Wixom & Beath, September 2025).**
  - A data democracy means employees regularly have **(1) access to data assets, (2) the skills to exploit them, (3) the motivation to engage, and (4) guidance to use them strategically**.
  - Employee use of reusable data assets averages only **about 28%**.
  - Where **at least one-third of employees use data assets**, data-monetization initiatives account for **15% of revenue, versus under 5%** where use is lower.
  - **Connecting structures**, such as centers of excellence and cross-functional teams, amplify democratization.
  - Caveat: this is a practitioner research briefing, and I could not see its methods.
  - Sources: [MIT DSpace](https://dspace.mit.edu/handle/1721.1/174984); [CISR publication page](https://cisr.mit.edu/publication/2025_0901_DataDemocracy_VanderMeulenSomehWixomBeath)
- **[C] MIT CISR 2021 briefing (Wixom, Owens & Beath).** Literacy programs alone are not enough. Leaders should **build capabilities, optimize data-monetization initiatives and motivate pervasive data use, and measure all three**. The same authors' 2023 MIT Press book is *Data Is Everybody's Business*. — [CISR audio/briefing record](https://cisr-mit-edu.ezproxy.canberra.edu.au/publication/2021_0401_DataHeartsMinds_WixomOwensBeath_Audio)

### Inferences
- For the marketing team, data literacy should be defined as **inquiry on real marketing questions**, communicated to support a decision ("so what / now what"), rather than as tool or Excel skill. The leader's complaint that analyses miss "my level and direction" is a gap in the **communicate/argue-in-context** layer, not in calculation skill.
- The best-evidenced format to borrow is the **data-team inquiry cycle**:
  - a small team works on a real problem;
  - it states hypotheses before collecting data;
  - a facilitator models the steps, gives feedback and makes time for reflection;
  - the cycle repeats over months.

  This maps directly onto a 3-8 person marketing team, and it doubles as an alignment ritual. Hypotheses written before data collection make the leader's purpose explicit and answer "why are we collecting this?"
- Expect the education pattern to repeat. A workshop will raise literacy quickly, but changes in actual practice and business results will lag and vary. Results should be measured at the **practice** level (did a decision change?), not only by satisfaction.
- CISR's four elements give a diagnostic checklist for the leader: access, skills, motivation, guidance. "이거까지 해야 해?" signals failures in **motivation and guidance**, meaning the team does not see why the data matters or how it connects to strategy. It is not mainly a skills problem.

### Gaps
- **I found no RCT or meta-analysis of corporate or marketing-team data-literacy training measured on business outcomes.** Workplace evidence is vendor surveys (Accenture/Qlik) or practitioner briefings (CISR, Gartner). The education meta-analyses are the closest rigorous analogue, and transfer to marketing is an inference.
- The two education meta-analyses disagree on magnitude (0.17 vs 0.41), possibly because of different inclusion criteria and metrics. They also disagree on whether design features matter.
- I could not retrieve Marsh (2012) or Mandinach & Gummer's data-literacy-for-teachers framework in full.
- Gartner's primary definition text was not fetched.
- I found no Korean-language evidence on data-literacy interventions for marketers.

## Q4. What distinguishes teams that use data in decisions from those that only collect or report it?

### Takeaway
Use, not collection, is the scarce behavior. Marketers used available analytics in only about 30-42% of decisions (CMO Survey, grade C), and employees use reusable data assets about 28% of the time (CISR, grade C). Four things distinguish teams that use data:
- **decisions are made explicit up front** (decision-first or hypothesis-first);
- **the use of analytics is evaluated**: use was 49% where evaluated vs 32% where not;
- **routines are structured**: monitoring, targets and review cadence (Bloom et al., grade B);
- **the decision process allows data to challenge the leader**, with debate and open uncertainty (MIT SMR, grade C; Lovallo & Sibony, grade C).

Education research adds that use depends on collaborative inquiry routines and on combining data with professional expertise.

### Cited Findings
- **[C] CMO Survey (Moorman, Duke Fuqua): marketing-analytics use rate.**
  - In February 2012, available or requested analytics were used **before a decision in 37.2% of projects** (95% CI 31.5-43%). That means **analytics were not used about 63% of the time**.
  - Across 2012-2014 the rate ranged **29-37%**. By 2018 it had risen **from 30% to 42%** over five years, with B2C firms at about 55%.
  - In 2017, barely a third of available data was used, because managers lack tools to measure analytics' success and people who can link the data to marketing practice.
  - Sources: [CMO Survey blog: "what gets evaluated gets used"](https://cmosurvey.org/marketing-analytics-what-gets-evaluated-gets-used/); [CMO Survey blog: spend vs use](https://cmosurvey.org/cmo-survey-marketers-to-spend-on-analytics-use-remains-elusive/); [Fuqua Feb 2017 summary](https://www.fuqua.duke.edu/duke-fuqua-insights/cmo-survey-feb-2017)
- **[C] "What gets evaluated gets used" (CMO Survey 2012).** Analytics were used in **32% of projects in companies that do not evaluate their marketing analytics, versus 49% in companies that do**. The difference is statistically significant, but the direction of causality is unknown. A 2010 wave found only **25% of firms use metrics to evaluate the quality of insights**. — [CMO Survey blog](https://cmosurvey.org/marketing-analytics-what-gets-evaluated-gets-used/)
- **[C] MIT CISR (2025).** Average employee use of reusable data assets is about 28%. Financial returns are driven by data asset **use**, not by availability. — [MIT DSpace](https://dspace.mit.edu/handle/1721.1/174984)
- **[C] MIT SMR/SAS.**
  - Analytically mature organizations use far more of their data (3x) and face more senior pressure (78% vs 43%).
  - Their culture accepts analytics that **contradict senior management**. In laggards, "management experience overrides insights from data."
  - Source: [Constellation Research](https://www.constellationr.com/research/blog/mit-sloan-management-review-culture-top-factor-achieving-success-analytics)
- **[C] Lovallo & Sibony (McKinsey 2010).** Decision **process** (openly discussing uncertainties, inviting views contrary to the senior leader) mattered about **6x more than the amount of analysis** for decision outcomes, across 1,048 decisions. — [Farnam Street](https://fs.blog/what-matters-more-in-decisions-analysis-or-process/); [McKinsey primary](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/the-case-for-behavioral-strategy)
- **[B] Bloom et al. (2019).** Structured management practices (frequent performance monitoring, targets, incentives) explain more than 20% of productivity dispersion, and they vary hugely between plants of the same firm. This is the routine layer that turns data into action. — [AER PDF](https://ide.mit.edu/wp-content/uploads/2019/05/What-Drives-Diffs-in-Mgmt-Practices_AER-2019-May.20170491.pdf?x19295)
- **[B] Brynjolfsson, Jin & McElheran (2021).** The payoff from analytics requires workplace complements and managerial capacity. Without them, adopters "see no benefits at all." — [Stanford DEL](https://digitaleconomy.stanford.edu/publication/the-power-of-prediction-predictive-analytics-workplace-complements-and-business-performance)
- **[A] Ansyari et al. (2020).** Outcome gains come through changed **data-use practices** and changed work practice, not through training satisfaction or literacy alone. — [Maastricht CRIS](https://cris.maastrichtuniversity.nl/en/publications/tracking-the-process-of-data-use-professional-development-interve)
- **[C] Data team procedure.** Use is structured as a **hypothesis-led cycle** (problem → hypothesis → data → interpret → act → evaluate) run by a small cross-role team, which prevents collection without purpose. Kippers et al. (2018) find the hardest steps are **interpretation and drawing conclusions**. — [Kippers et al. 2018](https://ris.utwente.nl/ws/files/18816028/Kippers_et_al._2018_Data_literacy_What_do_educators_learn_and_struggle_with_during_a_data_use_intervention.pdf); [Schildkamp OECD presentation](https://www.utwente.nl/en/bms/elan/datateams/Presentations/oecd%20data%20use%20schildkamp%20tallinn%202015.pdf)
- **[D] "Data rich, information poor" and decision-first commentary.**
  - Collecting is passive and easy, while using forces interpretation, prioritization and accountability. **"Data usage rises only when decisions are explicit."** This is practitioner commentary with no data. — [INT Global commentary](https://intglobal.com/?p=47829)
  - Ellen Mandinach (WestEd), a leading data-driven decision-making researcher in education, frames leaders as "data-rich but information-poor." This is a webinar description only. — [NACUFS webinar page](https://learn.nacufs.org/products/executive-leadership-webinar-1-how-data-can-inform-effective-decisions)
  - A higher-education survey (2019) found **fewer than 20%** believe their university uses data effectively to inform decisions. This is via a conference paper. — [Webber 2019 paper (UGA)](https://ihe.uga.edu/sites/default/files/inline-files/Webber_2019016_paper.pdf)

### Inferences
Concrete design implications for the marketing team, each tied to evidence:
1. **Decision-first collection** (data team cycle; "decisions explicit"). Every metric request should name the decision it informs, the hypothesis behind it and the action threshold ("if CTR < X, then we change creative"). This turns "이거까지 해야 해?" into a visible why. It also cuts collection that serves no decision.
2. **Evaluate use, not output** (CMO Survey 49% vs 32%). In retros, track whether a given analysis changed a decision. This "analysis → decision log" makes data use the measured behavior instead of report production.
3. **Structured cadence** (Bloom et al.). A fixed weekly or biweekly review with shared targets per channel (performance, content/SNS, brand/CRM) supplies the "monitoring + targets" routines associated with productivity.
4. **Process over analysis depth** (Lovallo & Sibony; MIT SMR). In review meetings, the leader should explicitly invite contrary readings, discuss uncertainties and accept data that contradicts their own view. This also resolves the "analysis doesn't match my level" problem: the leader's expectations become shared criteria through dialogue, instead of a hidden standard.
5. **Teach interpretation, not collection** (Kippers et al.). Coaching should focus on the "so what / now what" steps, for example through worked examples or a shared analysis template, because that is where non-analysts struggle.

### Gaps
- There is no rigorous (B or better) study comparing **marketing teams** that use data with those that only report it at the team level. The evidence is from firm-level econometrics (manufacturing), CMO self-report surveys, or education.
- The CMO Survey has no data after 2018 in what I found, and the 2012 evaluation comparison lacks published sample sizes and controls.
- The causal direction of "evaluation → use" is unknown.
- Mandinach's primary publications on data use versus collection were not retrieved. The "decisions explicit" claim is commentary (grade D) and should be presented as expert heuristic, not evidence.
- I found no primary literature on "decision rights" or "decision-first analytics" (for example Davenport's decision-centric approach) in this session. If the report needs it, cite it as expert opinion (grade C) after separate verification.
