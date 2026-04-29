import { Link } from "wouter";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/LogoMark";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function About() {
  useDocumentMeta({
    title: "About",
    description: "ALM Analytics is a hands-on data science and analytics engineering practice.",
  });

  return (
    <div className="min-h-[100dvh] pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">About the Practice</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Brand mark / Contact column */}
            <div className="md:col-span-4 space-y-6">
              <div className="aspect-square rounded-2xl border border-border bg-card flex items-center justify-center relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, hsl(180 70% 35%) 1px, transparent 0)",
                    backgroundSize: "16px 16px",
                  }}
                />
                <LogoMark size={140} className="text-primary relative" />
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Get in touch
                </p>
                <a
                  href="mailto:hello@almanalytics.net"
                  className="inline-flex items-center gap-2 text-base font-medium text-foreground hover:text-primary transition-colors mb-4"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  hello@almanalytics.net
                </a>
                <Button variant="outline" className="w-full justify-between" asChild>
                  <Link href="/contact">
                    Start a conversation <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-8 prose prose-invert prose-lg max-w-none text-muted-foreground">
              <p className="text-2xl text-foreground font-light leading-relaxed mb-8">
                A hands-on data science and analytics engineering practice — the person writing the SQL, the dbt models, the Streamlit app, and the evaluation harness is the same person you'll be talking to.
              </p>

              <p>
                Most engagements start in the awkward middle of a problem: there is data, there is a decision someone needs to make, and the path between the two is full of spreadsheets, exports, and undocumented assumptions. The work is usually some mix of cleaning that path up, building the missing piece, and leaving behind something the team can actually maintain.
              </p>

              <p>
                That same scope shows up across cyber workforce development programs, data platform modernization efforts, nonprofits running data-heavy operations, and commercial teams trying to put a useful dashboard or AI workflow in front of real users. The deliverable changes — a pipeline, a model, a notebook, a dashboard, a RAG evaluation — but the operating mode does not: ship a working artifact, document it, and hand it over.
              </p>

              <div className="bg-card border border-border p-6 rounded-xl mt-10 not-prose">
                <h3 className="text-foreground font-semibold text-xl mb-4">How the work tends to go</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                    <span><strong>Working artifact first.</strong> A scrappy prototype usually surfaces the real requirements faster than a spec document.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                    <span><strong>Code, not slides.</strong> Analyses, dashboards, and pipelines are checked in, parameterized, and re-runnable.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                    <span><strong>Designed to be handed off.</strong> Whatever ships includes the docs, tests, and conventions another engineer can pick up.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
