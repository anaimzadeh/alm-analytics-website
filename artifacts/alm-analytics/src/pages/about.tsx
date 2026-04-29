import { Linkedin, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function About() {
  useDocumentMeta({
    title: "About | ALM Analytics",
    description: "About the founder and the mission of ALM Analytics.",
  });

  return (
    <div className="min-h-[100dvh] pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">About the Practice</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Image / Links Column */}
            <div className="md:col-span-4 space-y-6">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border bg-secondary">
                <img 
                  src="/founder-avatar.png" 
                  alt="Founder representation" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100"><rect width="100" height="100" fill="%231e293b"/><text x="50" y="50" font-family="sans-serif" font-size="40" fill="%2394a3b8" text-anchor="middle" dy=".3em">ALM</text></svg>';
                  }}
                />
              </div>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-3" /> Connect on LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-3" /> View GitHub Profile
                  </a>
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-3" /> Download Resume / CV
                </Button>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-8 prose prose-invert prose-lg max-w-none text-muted-foreground">
              <p className="text-2xl text-foreground font-light leading-relaxed mb-8">
                ALM Analytics is a specialized data science and analytics engineering practice bridging the gap between operational strategy and technical implementation.
              </p>
              
              <p>
                Too often, mission-driven organizations and defense-adjacent programs are stuck between two extremes: high-level strategic advice that produces no working code, or generic IT implementations that miss the nuances of analytical data.
              </p>
              
              <p>
                I operate in the space between. As a practitioner who builds data pipelines, writes analytical code, and architects ML systems, I deliver production-minded data products—dashboards, models, and workflows—that provide clarity to program managers and decision-makers.
              </p>
              
              <p>
                Experience spans across non-profits, mid-market businesses, prime contractors, and government-adjacent programs. The common thread is always a messy operational data environment that needs to be wrangled into reliable, secure, and reproducible intelligence.
              </p>

              <div className="bg-card border border-border p-6 rounded-xl mt-10 not-prose">
                <h3 className="text-foreground font-semibold text-xl mb-4">Core Philosophy</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                    <span><strong>Code over slides:</strong> Functioning prototypes clarify requirements faster than written specifications.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                    <span><strong>Reproducibility is paramount:</strong> Analytical results must be traceable from the source data to the final dashboard.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                    <span><strong>Security by design:</strong> In defense and commercial environments, secure architecture cannot be an afterthought.</span>
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
