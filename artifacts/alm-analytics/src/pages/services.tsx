import { Hammer, FlaskConical, Compass } from "lucide-react";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function Services() {
  useDocumentMeta({
    title: "Services | ALM Analytics",
    description: "Three ways to engage: build, prototype, or advise on data and AI work.",
  });

  const engagements = [
    {
      title: "Build",
      tagline: "Dashboards, pipelines, and models that go into use.",
      detail: "Sustained delivery work — analytics dashboards, data pipelines, and applied ML — scoped to fit inside your team's stack and review process.",
      icon: Hammer,
    },
    {
      title: "Prototype",
      tagline: "Rapid technical validation of an idea.",
      detail: "A short, focused engagement to test whether something is feasible: a RAG approach, a forecasting method, a data model, a workflow.",
      icon: FlaskConical,
    },
    {
      title: "Advisory",
      tagline: "Architecture, evaluation, and planning.",
      detail: "Light-touch guidance on data architecture, AI/ML evaluation, vendor and tooling choices, or how to structure a delivery roadmap.",
      icon: Compass,
    },
  ];

  return (
    <div className="min-h-[100dvh] pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ways to engage</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Most engagements fall into one of three shapes. The right starting point usually depends on how well-defined the problem is and how soon a working artifact needs to exist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {engagements.map((engagement, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-8 border border-border flex flex-col hover-elevate transition-all duration-300 h-full group"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <engagement.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-2">{engagement.title}</h3>
              <p className="text-foreground/90 font-medium mb-4">{engagement.tagline}</p>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {engagement.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
