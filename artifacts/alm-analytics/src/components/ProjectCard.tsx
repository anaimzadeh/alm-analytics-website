import { Link } from "wouter";
import { ArrowRight, Lock, Github, ExternalLink, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isPrivate = project.status === "private";

  return (
    <Card className="flex flex-col h-full overflow-hidden bg-card hover-elevate transition-all duration-300 border-border/50 hover:border-primary/30 group">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2 gap-4">
          <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground font-medium">
            {project.type}
          </Badge>
          {isPrivate && (
            <Badge variant="outline" className="text-muted-foreground border-border flex items-center gap-1">
              <Lock className="h-3 w-3" /> Private Client
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow space-y-4 text-sm">
        <p className="text-foreground/90 font-medium">{project.shortDescription}</p>
        <div className="space-y-1">
          <span className="text-muted-foreground text-xs font-bold uppercase tracking-wider">{project.narrativeLabel ?? "Context"}</span>
          <p className="text-muted-foreground line-clamp-3">{project.problemSolved}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tools.map((tool) => (
            <Badge key={tool} variant="outline" className="text-xs bg-background/50 text-muted-foreground">
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-4 border-t border-border/40 mt-auto bg-background/20">
        {isPrivate ? (
          <Button variant="ghost" className="w-full text-muted-foreground" asChild>
            <Link href={`/projects/${project.slug}`}>
              View Capability Overview <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <div className="flex w-full gap-2">
            <Button variant="default" className="flex-1" asChild>
              <Link href={`/projects/${project.slug}`}>
                Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            {project.demoUrl && (
              <Button variant="outline" size="icon" title="Live Demo" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">Live Demo</span>
                </a>
              </Button>
            )}
            
            {project.codeUrl && (
              <Button variant="outline" size="icon" title="View Code" asChild>
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">View Code</span>
                </a>
              </Button>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
