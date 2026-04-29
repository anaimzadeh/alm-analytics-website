export type ProjectType =
  | "Streamlit App"
  | "Shiny Dashboard"
  | "Quarto Notebook"
  | "Power BI Dashboard"
  | "Machine Learning"
  | "Data Engineering"
  | "AI/RAG";

export type ProjectStatus = "live-demo" | "case-study" | "github" | "private";

export interface Project {
  slug: string;
  title: string;
  type: ProjectType;
  shortDescription: string;
  problemSolved: string;
  tools: string[];
  status: ProjectStatus;
  demoUrl?: string;
  caseStudyUrl?: string;
  codeUrl?: string;
  embedUrl?: string;
  executiveSummary: string;
  problem: string;
  approach: string;
  outcomes: string[];
  lessonsLearned: string;
  heroImage?: string;
}

export const projects: Project[] = [
  {
    slug: "workforce-analytics",
    title: "Workforce Program Analytics Dashboard",
    type: "Streamlit App",
    shortDescription: "Interactive dashboard for tracking cyber workforce development outcomes.",
    problemSolved: "Program managers lacked a unified view of participant progress and institutional metrics.",
    tools: ["Python", "Streamlit", "Pandas", "Plotly"],
    status: "case-study",
    executiveSummary: "Developed a comprehensive reporting tool that aggregated disparate data sources into a single, reliable dashboard for program oversight.",
    problem: "Data was scattered across spreadsheets, making it impossible to answer basic questions about program efficacy and participant outcomes.",
    approach: "Built an automated data pipeline to clean and unify the data, surfacing the results in an interactive Streamlit application with secure access controls.",
    outcomes: [
      "Reduced monthly reporting time from 20 hours to 10 minutes",
      "Enabled real-time tracking of 500+ participants",
      "Provided actionable insights for program expansion"
    ],
    lessonsLearned: "Early stakeholder alignment on metric definitions is critical before building the UI."
  },
  {
    slug: "student-pathway-model",
    title: "Student Pathway Tracking Data Model",
    type: "Data Engineering",
    shortDescription: "Robust data model for analyzing educational pathways and interventions.",
    problemSolved: "Inability to track longitudinal student data across multiple disconnected systems.",
    tools: ["dbt", "Snowflake", "SQL", "Airflow"],
    status: "case-study",
    executiveSummary: "Designed and implemented a canonical data model to support longitudinal tracking of student interventions and outcomes.",
    problem: "Educational institutions struggled to measure the long-term impact of specific interventions due to siloed transactional databases.",
    approach: "Designed a dimensional data model using dbt, orchestrating daily ETL jobs via Airflow to build a reliable analytics foundation.",
    outcomes: [
      "Established a single source of truth for student pathway data",
      "Supported 10+ downstream analytical models",
      "Improved data freshness from weekly to daily"
    ],
    lessonsLearned: "Building trust in the data model requires comprehensive data quality testing at every pipeline stage."
  },
  {
    slug: "rag-evaluation-toolkit",
    title: "RAG Evaluation Toolkit",
    type: "AI/RAG",
    shortDescription: "Framework for evaluating and monitoring Retrieval-Augmented Generation systems.",
    problemSolved: "Lack of reproducible metrics for assessing LLM retrieval quality and hallucination rates.",
    tools: ["Python", "LangChain", "pytest", "MLflow"],
    status: "github",
    codeUrl: "https://github.com",
    executiveSummary: "An open-source toolkit for running automated evaluations on RAG architectures to ensure governance and quality.",
    problem: "Teams deploying LLM applications struggled to quantify retrieval accuracy or detect regressions when updating embeddings or prompts.",
    approach: "Developed a suite of automated tests and metrics (context precision, answer relevance) integrated with MLflow for experiment tracking.",
    outcomes: [
      "Standardized evaluation methodology across 3 distinct AI projects",
      "Reduced hallucination rates by identifying poor retrieval early",
      "Enabled safe, continuous iteration on prompt design"
    ],
    lessonsLearned: "RAG quality is fundamentally a data engineering and retrieval problem, not just an LLM problem."
  },
  {
    slug: "survey-analysis-notebook",
    title: "Survey Response Analysis Notebook",
    type: "Quarto Notebook",
    shortDescription: "Reproducible analysis of large-scale organizational surveys.",
    problemSolved: "Manual, error-prone survey analysis that was difficult to replicate.",
    tools: ["R", "Tidyverse", "Quarto", "ggplot2"],
    status: "live-demo",
    demoUrl: "https://example.com",
    executiveSummary: "Created a reproducible analytical report that automated the ingestion, cleaning, and visualization of survey data.",
    problem: "Annual surveys required weeks of manual data wrangling in Excel, prone to human error and difficult to update.",
    approach: "Leveraged Quarto and the Tidyverse to create a parameterized report that could be easily re-run with new data.",
    outcomes: [
      "Automated the entire reporting workflow",
      "Ensured statistical rigor and reproducibility",
      "Delivered a polished, interactive HTML report for stakeholders"
    ],
    lessonsLearned: "Code-first reporting is vastly superior to manual spreadsheet analysis for recurring tasks."
  },
  {
    slug: "secure-data-pipeline",
    title: "Secure Data Pipeline Prototype",
    type: "Data Engineering",
    shortDescription: "Architected a secure, compliant data pipeline for defense-adjacent operations.",
    problemSolved: "Needed a reliable, compliant way to move sensitive operational data into an analytics environment.",
    tools: ["Azure Data Factory", "Python", "SQL Server"],
    status: "private",
    executiveSummary: "Designed a proof-of-concept pipeline demonstrating secure data movement and transformation for a highly regulated environment.",
    problem: "Strict security requirements prevented the use of standard SaaS ETL tools.",
    approach: "Utilized cloud-native services within a secure enclave, implementing strict RBAC and auditing throughout the pipeline.",
    outcomes: [
      "Successfully demonstrated secure data ingestion",
      "Passed preliminary security review",
      "Paved the way for a full production deployment"
    ],
    lessonsLearned: "Security and compliance must be integrated into the architecture from day one, not bolted on later."
  },
  {
    slug: "ml-model-monitoring",
    title: "ML Model Monitoring Experiment",
    type: "Machine Learning",
    shortDescription: "Tracking data drift and performance degradation in production models.",
    problemSolved: "Silent failure of predictive models due to shifting input distributions over time.",
    tools: ["Python", "Evidently AI", "FastAPI", "Docker"],
    status: "github",
    codeUrl: "https://github.com",
    executiveSummary: "An experimental framework for detecting data drift and concept drift in machine learning models deployed in production environments.",
    problem: "Models trained on historical data were degrading in performance as real-world conditions changed, but there was no automated way to detect when retraining was necessary.",
    approach: "Implemented a monitoring service that calculates statistical distances between training distributions and live inference requests.",
    outcomes: [
      "Automated alerting for statistically significant data drift",
      "Reduced model downtime by proactively triggering retraining pipelines",
      "Provided a clear visual dashboard of feature importance changes"
    ],
    lessonsLearned: "A model's lifecycle truly begins after deployment; monitoring is just as important as the initial training."
  },
  {
    slug: "executive-kpi-dashboard",
    title: "Executive KPI Dashboard",
    type: "Power BI Dashboard",
    shortDescription: "High-level summary of operational metrics for C-suite decision makers.",
    problemSolved: "Fragmented reporting across departments leading to misaligned strategic goals.",
    tools: ["Power BI", "DAX", "SQL Server Analysis Services"],
    status: "private",
    executiveSummary: "A unified Power BI dashboard delivering daily insights into cross-departmental performance metrics.",
    problem: "Executives were spending hours each week reconciling conflicting reports from different departments.",
    approach: "Developed a centralized tabular model to serve as a single source of truth, surfaced through an interactive Power BI interface.",
    outcomes: [
      "Eliminated reporting discrepancies between departments",
      "Provided daily visibility into key performance indicators",
      "Enabled drill-down analysis from high-level summaries to operational details"
    ],
    lessonsLearned: "Adoption of executive dashboards depends heavily on the perceived reliability of the underlying data model."
  }
];
