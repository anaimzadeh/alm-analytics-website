import { BarChart3, Database, BrainCircuit, Bot, TerminalSquare } from "lucide-react";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function Services() {
  useDocumentMeta({
    title: "Services | ALM Analytics",
    description: "Data engineering, analytics, AI/ML, and technical prototyping consulting services.",
  });

  const services = [
    {
      title: "Analytics Dashboards",
      description: "Interactive dashboards and KPI reporting systems for operational decision-making.",
      icon: BarChart3,
    },
    {
      title: "Data Engineering",
      description: "Reliable pipelines, APIs, data models, and warehouse-ready datasets.",
      icon: Database,
    },
    {
      title: "Data Science & Machine Learning",
      description: "Forecasting, classification, experimentation, evaluation, and applied modeling.",
      icon: BrainCircuit,
    },
    {
      title: "AI & Automation",
      description: "RAG systems, LLM workflows, document intelligence, and workflow automation.",
      icon: Bot,
    },
    {
      title: "Technical Prototyping",
      description: "Rapid prototypes using Python, R, Streamlit, Shiny, Quarto, and modern cloud tools.",
      icon: TerminalSquare,
    }
  ];

  return (
    <div className="min-h-[100dvh] pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Core Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Specialized technical capabilities designed to move data from operational systems into the hands of decision-makers reliably and securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-card rounded-2xl p-8 border border-border flex flex-col hover-elevate transition-all duration-300 h-full group"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
