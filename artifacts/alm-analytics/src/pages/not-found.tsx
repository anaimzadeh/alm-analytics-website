import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/LogoMark";
import { Button } from "@/components/ui/button";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function NotFound() {
  useDocumentMeta({
    title: "Page Not Found",
    description: "The page you were looking for could not be found.",
  });

  const suggestions = [
    { href: "/projects", label: "Browse the project gallery", desc: "Dashboards, pipelines, and models in use." },
    { href: "/approach", label: "Read the framework", desc: "Five stages behind every project." },
    { href: "/services", label: "Ways to engage", desc: "Build, prototype, or advisory work." },
    { href: "/contact", label: "Get in touch", desc: "Send a short note about your problem." },
  ];

  return (
    <div className="min-h-[100dvh] pt-24 pb-20 flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <LogoMark size={48} className="text-primary mb-8" />
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">404</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            That page doesn't exist.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            The link may have changed, or the page was never published. A few useful places to head instead:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
            {suggestions.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="group block rounded-lg border border-border bg-card p-4 hover-elevate transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-foreground mb-0.5">{s.label}</p>
                      <p className="text-sm text-muted-foreground leading-snug">{s.desc}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <Button asChild size="lg">
            <Link href="/">
              Back to home <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
