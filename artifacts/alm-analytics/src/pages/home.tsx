import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, BarChart3, Landmark, Code2, GitBranch, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { LogoMark } from "@/components/LogoMark";
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
              Dashboards, pipelines, and models that teams actually use.
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed font-light"
            >
              ALM Analytics is a hands-on data and AI practice. The work is cleaning up the path between messy operational data and the decision someone needs to make on the other side.
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
              <div className="flex items-baseline justify-between gap-4 mb-8">
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">In practice</p>
                <p className="hidden sm:block text-xs text-muted-foreground/60 italic tracking-wide">Five facets of the practice</p>
              </div>

              {/* Desktop: pentagon arrangement */}
              <div className="hidden md:block relative mx-auto" style={{ maxWidth: 880, height: 460 }}>
                {/* Pentagon SVG - centered */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: 360, height: 360 }}>
                  <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                    <defs>
                      <radialGradient id="pentaGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="hsl(180 70% 35%)" stopOpacity="0.10" />
                        <stop offset="100%" stopColor="hsl(180 70% 35%)" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <polygon
                      points="50,8 90,37 75,84 25,84 10,37"
                      fill="url(#pentaGlow)"
                      stroke="hsl(180 70% 35%)"
                      strokeOpacity="0.55"
                      strokeWidth="0.6"
                      strokeLinejoin="round"
                    />
                    {[
                      [50, 8],
                      [90, 37],
                      [75, 84],
                      [25, 84],
                      [10, 37],
                    ].map(([cx, cy], i) => (
                      <g key={i}>
                        <circle cx={cx} cy={cy} r="2.2" fill="hsl(180 70% 35%)" fillOpacity="0.18" />
                        <circle cx={cx} cy={cy} r="1.1" fill="hsl(180 70% 35%)" />
                      </g>
                    ))}
                  </svg>
                </div>

                {/* Center LogoMark watermark */}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
                >
                  <LogoMark size={68} className="text-primary opacity-30" />
                </div>

                {/* Chip labels positioned around pentagon vertices */}
                {[
                  {
                    label: "Dashboards and pipelines for workforce and program tracking",
                    style: { top: "0%", left: "50%", transform: "translate(-50%, 0)" },
                    align: "text-center",
                    icon: BarChart3,
                  },
                  {
                    label: "Work across government, defense-adjacent, and nonprofit programs",
                    style: { top: "27%", right: "0%" },
                    align: "text-left",
                    icon: Landmark,
                  },
                  {
                    label: "Python, R, SQL, dbt, and modern data tooling",
                    style: { bottom: "0%", right: "8%" },
                    align: "text-right",
                    icon: Code2,
                  },
                  {
                    label: "Reproducible analytics and clean data models",
                    style: { bottom: "0%", left: "8%" },
                    align: "text-left",
                    icon: GitBranch,
                  },
                  {
                    label: "RAG and ML systems with real evaluation harnesses",
                    style: { top: "27%", left: "0%" },
                    align: "text-right",
                    icon: Sparkles,
                  },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="absolute z-10"
                    style={{ ...item.style, maxWidth: 210 }}
                  >
                    <div className={`px-3 py-2.5 bg-secondary/70 backdrop-blur-sm text-secondary-foreground text-xs leading-relaxed rounded-md font-medium border border-border/60 shadow-sm ${item.align}`}>
                      <div className={`flex items-center gap-1.5 mb-1 ${item.align === "text-right" ? "justify-end" : item.align === "text-center" ? "justify-center" : "justify-start"}`}>
                        <item.icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                        <span className="text-primary/80 font-mono text-[10px] tracking-wider">0{i + 1}</span>
                      </div>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile: stacked list */}
              <ul className="md:hidden flex flex-col gap-3">
                {[
                  { label: "Dashboards and pipelines for workforce and program tracking", icon: BarChart3 },
                  { label: "Work across government, defense-adjacent, and nonprofit programs", icon: Landmark },
                  { label: "Python, R, SQL, dbt, and modern data tooling", icon: Code2 },
                  { label: "Reproducible analytics and clean data models", icon: GitBranch },
                  { label: "RAG and ML systems with real evaluation harnesses", icon: Sparkles },
                ].map((chip, i) => (
                  <li key={chip.label} className="flex items-start gap-3 text-secondary-foreground text-sm leading-relaxed">
                    <chip.icon className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-primary/80 font-mono text-xs mt-0.5 shrink-0">0{i + 1}</span>
                    <span>{chip.label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured: How I Approach Data & AI Systems */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/approach"
            className="group block max-w-5xl mx-auto rounded-2xl border border-border bg-background p-8 md:p-12 hover-elevate transition-all"
          >
            <div className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Framework</p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How I Approach Data &amp; AI Systems</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    A short, reusable framework I lean on when scoping data and AI work. Five stages, where projects usually break, and how I make tradeoffs.
                  </p>
                </div>
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform shrink-0">
                  Read the framework <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>

              {/* Mini horizontal flow */}
              <div className="grid grid-cols-5 gap-2 md:gap-3">
                {[
                  { label: "Source", color: "bg-[#1e293b]" },
                  { label: "Structure", color: "bg-[#1e3a8a]" },
                  { label: "Retrieval", color: "bg-primary" },
                  { label: "Evaluation", color: "bg-[#0d9488]" },
                  { label: "Output", color: "bg-[#16a34a]" },
                ].map((stage) => (
                  <div key={stage.label} className="flex flex-col items-center gap-2">
                    <div className={`h-2 w-full rounded-full ${stage.color}`} />
                    <span className="text-xs md:text-sm font-medium text-muted-foreground tracking-tight">{stage.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Selected Work</h2>
              <p className="text-muted-foreground text-lg">
                Dashboards, models, and data systems in use.
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
            <h2 className="text-3xl font-bold tracking-tight mb-6">Recent engagements include</h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              A cyber workforce development program, a data platform modernization effort, and applied AI/RAG evaluation work. Anonymized summaries are on the past performance page.
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
