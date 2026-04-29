export type ProjectType =
  | "Streamlit App"
  | "Shiny Dashboard"
  | "Quarto Notebook"
  | "Power BI Dashboard"
  | "Machine Learning"
  | "Data Engineering"
  | "AI/RAG";

export type ProjectStatus = "live-demo" | "case-study" | "github" | "private";

/**
 * Optional label used in the card body to introduce the short narrative.
 * Vary this across projects so the gallery doesn't read as one repeated template.
 */
export type NarrativeLabel =
  | "Context"
  | "Challenge"
  | "Why it mattered"
  | "What changed"
  | "Starting point"
  | "Outcome"
  | "Failure mode"
  | "Problem solved";

export interface Project {
  /** URL slug for /projects/:slug */
  slug: string;
  title: string;
  type: ProjectType;
  /** One-line description shown at the top of the card and in the gallery */
  shortDescription: string;
  /** Short narrative paragraph rendered under `narrativeLabel` on the card */
  problemSolved: string;
  /** Heading used above `problemSolved` on the card. Vary across projects. */
  narrativeLabel?: NarrativeLabel;
  /** Tools / stack chips */
  tools: string[];
  /** Drives badge styling and which buttons render on the card */
  status: ProjectStatus;
  /** External demo URL (Streamlit Community Cloud, Shiny, Quarto, etc.) */
  demoUrl?: string;
  /** External case-study URL if the writeup lives off-site */
  caseStudyUrl?: string;
  /** Public source repository */
  codeUrl?: string;
  /** iframe-friendly URL for the project detail embed block */
  embedUrl?: string;
  /** Long-form fields rendered on the project detail page */
  executiveSummary: string;
  problem: string;
  approach: string;
  outcomes: string[];
  lessonsLearned: string;
  /** Optional hero image shown above the narrative on the detail page */
  heroImage?: string;
}

export const projects: Project[] = [
  {
    slug: "workforce-analytics",
    title: "Workforce Program Analytics Dashboard",
    type: "Streamlit App",
    shortDescription: "An internal Streamlit app for tracking participants, institutions, and program activities in a cyber workforce development program.",
    narrativeLabel: "Starting point",
    problemSolved: "Program staff were assembling monthly reports from a stack of spreadsheets and exported reports. The dashboard replaced that with a single, parameterized view of the same numbers.",
    tools: ["Python", "Streamlit", "Pandas", "Plotly", "Postgres"],
    status: "case-study",
    executiveSummary: "A working internal dashboard that consolidated participant, institution, and program-activity data into a single Streamlit app used by program staff for routine reporting.",
    problem: "Reporting cycles depended on manually reconciling several spreadsheets and exported CSVs. Definitions drifted between reports, and questions like \"how many participants from institution X completed activity Y last quarter?\" were slow to answer.",
    approach: "Built a small Postgres-backed data layer, defined the canonical metrics in code, and wrapped the result in a Streamlit app with role-aware views. Filters and date ranges drive every chart so the same definitions are used everywhere.",
    outcomes: [
      "Routine reporting moved from a multi-day spreadsheet exercise to a few minutes of filtering",
      "Metric definitions are now in code and reviewed alongside the rest of the project",
      "Program staff can answer cohort and institution questions without pinging the data team",
    ],
    lessonsLearned: "Aligning on metric definitions with stakeholders before touching the UI saved more time than any chart-tuning ever did.",
  },
  {
    slug: "student-pathway-model",
    title: "Student Pathway Tracking Data Model",
    type: "Data Engineering",
    shortDescription: "A canonical data model for following student pathways across enrollment, programs, and outcomes.",
    narrativeLabel: "Challenge",
    problemSolved: "Linking the same student across enrollment, program participation, and outcome systems required brittle one-off joins. The model formalized the entities and the join keys.",
    tools: ["dbt", "Snowflake", "SQL", "Airflow"],
    status: "case-study",
    executiveSummary: "A dimensional data model and dbt project that gave downstream analysts a stable, documented foundation for longitudinal pathway analysis.",
    problem: "Each analysis was rebuilding student-level joins from scratch against transactional schemas, with subtle differences in how cohorts and time windows were defined.",
    approach: "Modeled the core entities (student, institution, program, enrollment, outcome) as dbt staging and mart layers, with tests on grain and referential integrity. Daily Airflow runs keep the marts fresh; documentation and lineage are exposed in dbt docs.",
    outcomes: [
      "Downstream analyses share the same student and cohort definitions",
      "Several recurring reports were rewritten as thin queries against the marts",
      "Data quality issues now surface as failed dbt tests instead of bad numbers in a report",
    ],
    lessonsLearned: "Tests on grain and referential integrity are the cheapest insurance an analytics codebase can buy.",
  },
  {
    slug: "rag-evaluation-toolkit",
    title: "RAG Evaluation Toolkit",
    type: "AI/RAG",
    shortDescription: "A small framework for running reproducible evaluations of retrieval-augmented generation pipelines.",
    narrativeLabel: "Why it mattered",
    problemSolved: "Without a consistent way to measure retrieval quality, every prompt or embedding change was a vibes-based decision. The toolkit makes regressions visible.",
    tools: ["Python", "LangChain", "pytest", "MLflow"],
    status: "case-study",
    executiveSummary: "An open framework for scoring RAG pipelines on retrieval and answer quality, with results tracked in MLflow so changes can be compared over time.",
    problem: "Teams iterating on a RAG system had no agreed-upon way to tell whether a new prompt, chunking strategy, or embedding model was actually better than the last one.",
    approach: "Defined a small set of metrics (context precision, answer relevance, citation accuracy), wrapped them in pytest-style fixtures, and logged every run to MLflow. Evaluation datasets are versioned alongside the code.",
    outcomes: [
      "A single command produces a comparable evaluation report for any pipeline change",
      "Embedding and prompt experiments are now tracked with the same rigor as model experiments",
      "Several quietly bad retrieval changes were caught before they shipped to a downstream demo",
    ],
    lessonsLearned: "Most \"LLM problems\" turn out to be retrieval and data problems hiding behind a chat UI.",
  },
  {
    slug: "survey-analysis-notebook",
    title: "Survey Response Analysis Notebook",
    type: "Quarto Notebook",
    shortDescription: "A reproducible Quarto report for an annual organizational survey, parameterized so it can be re-run on each new wave.",
    narrativeLabel: "What changed",
    problemSolved: "The previous workflow was a fragile Excel pipeline. The notebook turned it into a re-runnable analysis with versioned inputs and consistent visualizations.",
    tools: ["R", "Tidyverse", "Quarto", "ggplot2"],
    status: "case-study",
    executiveSummary: "A parameterized Quarto report that ingests a survey export, applies the same cleaning and coding rules every wave, and renders a polished HTML report.",
    problem: "Each survey wave was being processed by hand in Excel — error-prone, hard to audit, and impossible to compare cleanly across years.",
    approach: "Wrote the cleaning, coding, and weighting steps in R using the Tidyverse, exposed the survey wave as a Quarto parameter, and codified the chart templates so figures look identical across years.",
    outcomes: [
      "Each new wave renders to a polished HTML report with one command",
      "Year-over-year comparisons are straightforward instead of an archaeology project",
      "Source data, cleaning code, and final figures live in one auditable repo",
    ],
    lessonsLearned: "For anything that runs more than once a year, code-first reporting beats spreadsheet workflows every time.",
  },
  {
    slug: "secure-data-pipeline",
    title: "Secure Data Pipeline Prototype",
    type: "Data Engineering",
    shortDescription: "A prototype data pipeline showing how sensitive operational data can be moved into an analytics environment under tight access controls.",
    narrativeLabel: "Context",
    problemSolved: "The team needed a pattern for moving sensitive data into an analytics environment that the security review could accept. The prototype demonstrated one viable shape.",
    tools: ["Azure Data Factory", "Python", "SQL Server"],
    status: "private",
    executiveSummary: "A small reference pipeline that demonstrated a security-aware path from a regulated source system into an analytics-ready data store, with logging and access controls baked in.",
    problem: "Standard SaaS ETL tooling was off the table for the source system, but downstream teams still needed a reliable analytics-friendly copy of the data.",
    approach: "Used cloud-native services inside the existing tenancy, scoped service principals tightly, encrypted everything in transit and at rest, and emitted structured audit logs for every load. The result was a small, auditable reference pattern, not a finished platform.",
    outcomes: [
      "Established a reference pattern the team could extend for additional sources",
      "Cleared an initial security review on its target architecture",
      "Documented the trust boundaries clearly enough that follow-on engineers could pick it up",
    ],
    lessonsLearned: "Designing for the audit log first forces you to be honest about who can do what, and when.",
  },
  {
    slug: "ml-model-monitoring",
    title: "ML Model Monitoring Experiment",
    type: "Machine Learning",
    shortDescription: "An experiment in catching data drift and silent model degradation for a small classification model.",
    narrativeLabel: "Failure mode",
    problemSolved: "The model behaved well in training and badly in the wild. The monitoring layer made the drift visible instead of waiting for a downstream complaint.",
    tools: ["Python", "Evidently AI", "FastAPI", "Docker"],
    status: "case-study",
    executiveSummary: "A working implementation that captured live inference inputs, compared their distributions to the training data, and surfaced drift signals on a small dashboard.",
    problem: "A classification model that scored well in offline evaluation was quietly degrading in production. There was no agreed signal for when it should be retrained.",
    approach: "Wrapped the model in a FastAPI service that logged sampled inputs and predictions, ran scheduled drift checks with Evidently, and exposed the results on a small internal dashboard. Retraining is still a human decision — the system just makes the case visible.",
    outcomes: [
      "Drift signals are now surfaced before downstream users notice the model is off",
      "Feature-level changes can be reviewed instead of guessed at",
      "Retraining decisions are anchored to evidence rather than calendar dates",
    ],
    lessonsLearned: "Most of a model's lifecycle is after deployment; monitoring deserves the same care as the initial training run.",
  },
  {
    slug: "executive-kpi-dashboard",
    title: "Executive KPI Dashboard",
    type: "Power BI Dashboard",
    shortDescription: "A unified Power BI dashboard for a leadership team that previously reconciled cross-departmental reports by hand.",
    narrativeLabel: "Outcome",
    problemSolved: "When the same KPI shows three different values in three different decks, leadership stops trusting any of them. The dashboard collapsed the three back into one.",
    tools: ["Power BI", "DAX", "SQL Server Analysis Services"],
    status: "private",
    executiveSummary: "A Power BI dashboard backed by a tabular model that consolidated cross-departmental KPIs into one auditable view for a leadership team.",
    problem: "Each department was producing its own version of the same headline metrics, with subtly different definitions and update cadences.",
    approach: "Worked with each department to agree on canonical definitions, built a tabular model that encoded those definitions once, and surfaced the result through a Power BI dashboard with drill-down into the operational detail.",
    outcomes: [
      "Leadership reviews now start from a shared set of numbers instead of reconciling decks",
      "Drill-downs let department leads explain movement without rebuilding analyses",
      "Definition changes are made in one place rather than across several reports",
    ],
    lessonsLearned: "Adoption of an executive dashboard tracks how much the underlying model is trusted, not how it looks.",
  },
  {
    slug: "document-intelligence-prototype",
    title: "Document Intelligence Prototype",
    type: "AI/RAG",
    shortDescription: "A working prototype that extracts structured fields from a backlog of long-form policy and program documents.",
    narrativeLabel: "Problem solved",
    problemSolved: "Manual review of each document was the bottleneck. The prototype produced a structured first pass that reviewers could accept, edit, or reject.",
    tools: ["Python", "LangChain", "OpenAI", "Pydantic", "Streamlit"],
    status: "case-study",
    executiveSummary: "A small Streamlit prototype that combined OCR, retrieval, and structured-output prompting to extract a defined set of fields from long-form documents, with a human-in-the-loop review step.",
    problem: "A team was working through a large backlog of long policy and program documents, manually pulling the same set of fields from each one for downstream analysis.",
    approach: "Set up a typed schema in Pydantic for the target fields, used a small RAG pipeline to ground extractions in the source text, and wrapped the result in a Streamlit reviewer UI that shows the model's answer next to the cited passage.",
    outcomes: [
      "Reviewer time per document dropped substantially in pilot use",
      "Every extracted field is traceable back to the passage it came from",
      "Validation gaps in the prompt surface as visible review edits, not silent errors",
    ],
    lessonsLearned: "A structured schema and a clear citation makes a model's output reviewable; without those, you're just trusting a paragraph.",
  },
];
