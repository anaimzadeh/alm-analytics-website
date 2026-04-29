import { ShieldCheck, Server, Sparkles } from "lucide-react";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function PastPerformance() {
  useDocumentMeta({
    title: "Past Performance | ALM Analytics",
    description: "Anonymized past performance capabilities supporting government and commercial missions.",
  });

  const performances = [
    {
      id: "gov-workforce",
      title: "Government-adjacent workforce analytics",
      icon: ShieldCheck,
      description: "Built analytics assets for a cyber workforce development program; supported tracking of participants, institutions, program activities, and outcomes; delivered dashboards, data models, and reporting workflows."
    },
    {
      id: "platform-modernization",
      title: "Data platform modernization",
      icon: Server,
      description: "Designed data warehouse concepts, canonical data models, and reporting structures; worked with tools such as Microsoft Fabric, Power BI, APIs, and cloud data services."
    },
    {
      id: "applied-ml",
      title: "AI/RAG and applied ML systems",
      icon: Sparkles,
      description: "Supported retrieval-augmented generation architecture, evaluation planning, and ML experiment tracking; focused on reproducibility, governance, and measurable retrieval quality."
    }
  ];

  return (
    <div className="min-h-[100dvh] pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Past Performance</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Recent engagements have included:
          </p>
        </div>

        <div className="space-y-8 max-w-4xl">
          {performances.map((item) => (
            <Card key={item.id} className="bg-card border-border overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="bg-secondary/30 p-6 md:p-8 flex items-center justify-center md:w-48 shrink-0 border-b md:border-b-0 md:border-r border-border">
                  <item.icon className="h-12 w-12 text-primary opacity-80" />
                </div>
                <div className="p-6 md:p-8">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
