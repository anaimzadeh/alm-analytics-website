import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function Home() {
  useDocumentMeta({
    title: "ALM Analytics | Data Science & Analytics Consulting",
    description: "Data science, analytics, and AI systems for mission-driven decisions.",
  });

  const featuredProjects = projects.slice(0, 3);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/hero-bg.png" 
            alt="" 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Data science, analytics, and AI systems for mission-driven decisions.
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed font-light"
            >
              ALM Analytics builds dashboards, data pipelines, machine learning workflows, and decision-support tools for organizations that need clarity from complex data.
            </motion.p>
            
            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="text-base h-12 px-8" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base h-12 px-8" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground font-medium mb-4 uppercase tracking-widest">What that looks like</p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Built dashboards and data pipelines for live programs",
                  "Worked across government and defense-adjacent contexts",
                  "Python, SQL, R, and modern data tooling",
                  "Reproducible analytics and clean data models",
                  "End-to-end: data → dashboard → decision",
                ].map((chip) => (
                  <span key={chip} className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground text-sm rounded-md font-medium border border-border/50">
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Selected Work</h2>
              <p className="text-muted-foreground text-lg">
                A few projects worth opening — pilots, prototypes, and working implementations across analytics, data engineering, and applied AI.
              </p>
            </div>
            <Button variant="link" className="mt-4 md:mt-0 text-primary hover:text-primary/80 group" asChild>
              <Link href="/projects">
                See all projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map(project => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Performance Teaser */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Where the work has been used</h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Engagements have spanned a cyber workforce development program, a data platform modernization effort, and applied AI/RAG evaluation work — anonymized summaries are on the past performance page.
            </p>
            <Button size="lg" variant="default" asChild>
              <Link href="/past-performance">Review past performance</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="p-12 rounded-2xl bg-card border border-border text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Have a problem worth scoping?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Send a short note about the data, the decision it should support, and where things currently break. A reply usually lands within a couple of business days.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Start a conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
