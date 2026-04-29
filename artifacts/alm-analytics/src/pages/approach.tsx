import { Fragment } from "react";
import { Link } from "wouter";
import { ArrowRight, Database, Layers, Search, GaugeCircle, MonitorCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDocumentMeta } from "@/hooks/use-document-meta";

const stages = [
  {
    key: "source",
    label: "Source",
    color: "#1e293b",
    accent: "border-[#334155]",
    icon: Database,
    body: "Where the data actually comes from: spreadsheets, transactional systems, exports, APIs, document drops. The first job is figuring out which of these is authoritative and which is a copy of a copy.",
  },
  {
    key: "structure",
    label: "Structure",
    color: "#1e3a8a",
    accent: "border-[#1d4ed8]",
    icon: Layers,
    body: "Shape the raw inputs into a small, well-named set of entities and relationships. Define grain explicitly. Most downstream confusion is really an unclear model — fix it here, not in the dashboard.",
  },
  {
    key: "retrieval",
    label: "Retrieval",
    color: "hsl(180 70% 35%)",
    accent: "border-primary/60",
    icon: Search,
    body: "Get the right slice in front of whatever consumes it: a query, a chart, a model, an LLM. The interesting question is not \"can we fetch it?\" but \"are we fetching the right thing, every time?\"",
  },
  {
    key: "evaluation",
    label: "Evaluation",
    color: "#0d9488",
    accent: "border-[#14b8a6]",
    icon: GaugeCircle,
    body: "Decide what \"working\" means and measure it. Tests on data quality, dbt asserts, model metrics, RAG scoring. Without this stage, every later change is guessed at.",
  },
  {
    key: "output",
    label: "Output",
    color: "#16a34a",
    accent: "border-[#22c55e]",
    icon: MonitorCheck,
    body: "The artifact someone actually uses: a dashboard, a report, a notebook, an API, an LLM response. Designed so the person on the other end can act on it without a translator.",
  },
];

export default function Approach() {
  useDocumentMeta({
    title: "How I Approach Data & AI Systems | ALM Analytics",
    description: "A reusable framework for scoping data, analytics, and AI work: Source → Structure → Retrieval → Evaluation → Output.",
  });

  return (
    <div className="min-h-[100dvh] pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <header className="max-w-3xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Framework</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            How I Approach Data &amp; AI Systems
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A short note on how I scope and structure data, analytics, and AI work. It is the same five stages whether the deliverable is a dashboard, a pipeline, a model, or a RAG system. Most projects that go sideways went sideways at one of these stages.
          </p>
        </header>

        {/* Horizontal flow diagram */}
        <section aria-label="Framework flow" className="mb-20">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-10 overflow-hidden">
            {/* Desktop: horizontal */}
            <div className="hidden md:grid grid-cols-9 items-center gap-2">
              {stages.map((stage, i) => (
                <Fragment key={stage.key}>
                  <div className="col-span-1 flex flex-col items-center text-center">
                    <div
                      className="h-14 w-14 rounded-xl flex items-center justify-center mb-3 border-2 shadow-sm"
                      style={{ backgroundColor: stage.color, borderColor: stage.color }}
                    >
                      <stage.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold tracking-tight text-foreground">{stage.label}</span>
                  </div>
                  {i < stages.length - 1 && (
                    <div className="col-span-1 flex items-center">
                      <div className="h-px w-full bg-gradient-to-r from-border via-primary/40 to-border" />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>

            {/* Mobile: vertical */}
            <div className="md:hidden flex flex-col gap-4">
              {stages.map((stage, i) => (
                <div key={stage.key} className="flex items-center gap-4">
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: stage.color }}
                  >
                    <stage.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 flex items-center">
                    <span className="text-base font-semibold tracking-tight text-foreground">{stage.label}</span>
                  </div>
                  {i < stages.length - 1 && (
                    <span className="text-muted-foreground text-sm shrink-0">↓</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stage details */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {stages.map((stage) => (
              <article
                key={stage.key}
                className={`rounded-xl border ${stage.accent} bg-card p-6 md:p-7`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="h-2 w-8 rounded-full"
                    style={{ backgroundColor: stage.color }}
                  />
                  <h2 className="text-xl font-semibold tracking-tight">{stage.label}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {stage.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Where projects usually break */}
        <section className="mb-24 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Where projects usually break</h2>
          <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <li className="flex gap-3">
              <span className="text-primary shrink-0">→</span>
              <span><span className="text-foreground font-medium">Skipping Structure.</span> The team jumps from raw exports straight to a chart, and the underlying model never gets defined. Every later question requires re-deriving the entities.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary shrink-0">→</span>
              <span><span className="text-foreground font-medium">Treating Evaluation as optional.</span> No tests, no metrics, no expected behavior. Every change becomes a vibes-based decision and regressions land in production unnoticed.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary shrink-0">→</span>
              <span><span className="text-foreground font-medium">Confusing Retrieval with Output.</span> A working query is shipped as the final artifact. The person on the other end is left to interpret raw results instead of a designed answer.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary shrink-0">→</span>
              <span><span className="text-foreground font-medium">Ignoring the Source.</span> The pipeline is built on a system nobody owns or that changes weekly. The artifact looks fine until the upstream schema shifts.</span>
            </li>
          </ul>
        </section>

        {/* Example: RAG */}
        <section className="mb-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Example: applying this to a RAG system</h2>
          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <ol className="space-y-5 text-muted-foreground leading-relaxed">
              <li>
                <span className="font-semibold text-foreground">Source.</span>{" "}
                What documents matter, who owns them, and how often do they change? If this answer is fuzzy, the rest of the system inherits the fuzziness.
              </li>
              <li>
                <span className="font-semibold text-foreground">Structure.</span>{" "}
                Chunking strategy, metadata schema, and a small ontology of what each document represents. This is where most retrieval quality is decided, before any embedding model is chosen.
              </li>
              <li>
                <span className="font-semibold text-foreground">Retrieval.</span>{" "}
                Embeddings, hybrid search, reranking. The point is not to be clever — the point is to consistently fetch the right passages for the questions the system will actually be asked.
              </li>
              <li>
                <span className="font-semibold text-foreground">Evaluation.</span>{" "}
                A small evaluation set, scored on context precision, answer relevance, and citation accuracy. Logged so a prompt or model change can be compared to the previous run.
              </li>
              <li>
                <span className="font-semibold text-foreground">Output.</span>{" "}
                Whatever the user sees: a chat reply, a structured extraction, an inline citation. Designed so the person reading it can verify the answer against the source without trusting the model on faith.
              </li>
            </ol>
          </div>
        </section>

        {/* How I make tradeoffs */}
        <section className="mb-24 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">How I make tradeoffs</h2>
          <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <li className="flex gap-3">
              <span className="text-primary shrink-0">·</span>
              <span><span className="text-foreground font-medium">Boring &gt; clever.</span> Postgres, dbt, scheduled jobs, and a small Streamlit app outperform a custom platform on most timelines.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary shrink-0">·</span>
              <span><span className="text-foreground font-medium">Working artifact &gt; full spec.</span> A scrappy prototype usually surfaces the real requirements faster than a written specification.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary shrink-0">·</span>
              <span><span className="text-foreground font-medium">Evaluated &gt; impressive.</span> A model with honest metrics beats a flashier one without them. Same for a dashboard.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary shrink-0">·</span>
              <span><span className="text-foreground font-medium">Handoff &gt; lock-in.</span> What ships should be readable, documented, and runnable by someone other than me.</span>
            </li>
          </ul>
        </section>

        {/* Closing CTA */}
        <section>
          <div className="rounded-2xl bg-card border border-border p-8 md:p-12 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Have a project that fits one of these stages?</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              If something here matches a problem you are trying to scope, send a short note describing the data, the decision it should support, and where things currently break.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
