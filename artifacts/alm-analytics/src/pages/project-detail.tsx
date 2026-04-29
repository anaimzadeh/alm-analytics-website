import { useParams, Link } from "wouter";
import { ArrowLeft, ExternalLink, Github, Mail, Lock } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectEmbed } from "@/components/ProjectEmbed";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import NotFound from "./not-found";

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  useDocumentMeta({
    title: project ? `${project.title} | ALM Analytics` : "Project Not Found",
    description: project?.shortDescription,
  });

  if (!project) return <NotFound />;

  const isPrivate = project.status === "private";

  return (
    <article className="min-h-[100dvh] pt-24 pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Button variant="ghost" className="mb-8 -ml-4 text-muted-foreground hover:text-foreground" asChild>
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Gallery
            </Link>
          </Button>

          <div className="flex gap-3 items-center mb-6">
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground text-sm py-1">
              {project.type}
            </Badge>
            {isPrivate && (
              <Badge variant="outline" className="border-border text-muted-foreground flex items-center gap-1 text-sm py-1">
                <Lock className="h-3 w-3" /> Private Client Work
              </Badge>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-light mb-10">
            {project.executiveSummary}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool} variant="outline" className="px-3 py-1 bg-background">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Main Narrative */}
          <div className="lg:col-span-2 space-y-16 prose prose-invert prose-blue max-w-none">
            {project.heroImage && (
              <div className="rounded-xl overflow-hidden border border-border not-prose mb-12">
                <img 
                  src={project.heroImage} 
                  alt={`Visualization for ${project.title}`} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover aspect-[2/1]" 
                />
              </div>
            )}

            <section>
              <h2 className="text-3xl font-semibold mb-6 tracking-tight">The Problem</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {project.problem}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 tracking-tight">The Approach</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {project.approach}
              </p>
            </section>

            {!isPrivate && project.embedUrl && (
              <ProjectEmbed 
                embedUrl={project.embedUrl} 
                fallbackUrl={project.demoUrl} 
                title={project.title} 
              />
            )}

            <section>
              <h2 className="text-3xl font-semibold mb-6 tracking-tight">Outcomes & Impact</h2>
              <ul className="space-y-4">
                {project.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-3 text-xl leading-none">•</span>
                    <span className="text-lg text-foreground/80 leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-secondary/20 p-8 rounded-xl border border-border/50">
              <h2 className="text-2xl font-semibold mb-4 tracking-tight text-foreground">Lessons Learned</h2>
              <p className="text-lg text-foreground/80 italic font-serif">
                "{project.lessonsLearned}"
              </p>
            </section>
          </div>

          {/* Sidebar / Links */}
          <aside className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <h3 className="font-semibold text-lg mb-6 pb-2 border-b border-border">Project Links</h3>
              
              <div className="space-y-3">
                {!isPrivate ? (
                  <>
                    {project.demoUrl && (
                      <Button variant="default" className="w-full justify-start" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                        </a>
                      </Button>
                    )}
                    
                    {project.codeUrl && (
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" /> View Repository
                        </a>
                      </Button>
                    )}
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground italic mb-4">
                    Due to the sensitive nature of this engagement, code and live demonstrations are not publicly available.
                  </p>
                )}
                
                <Button variant={isPrivate ? "default" : "secondary"} className="w-full justify-start mt-4" asChild>
                  <Link href={`/contact?subject=${encodeURIComponent(`Inquiry regarding similar work to: ${project.title}`)}`}>
                    <Mail className="h-4 w-4 mr-2" /> Contact about similar work
                  </Link>
                </Button>
              </div>

              <div className="mt-10 pt-6 border-t border-border">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Tech Stack Summary</h4>
                <div className="flex flex-col gap-2">
                  {project.tools.map((tool) => (
                    <div key={tool} className="text-sm font-medium flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </article>
  );
}
