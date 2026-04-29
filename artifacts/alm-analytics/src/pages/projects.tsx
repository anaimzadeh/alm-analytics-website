import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, type ProjectType } from "@/data/projects";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function ProjectsGallery() {
  useDocumentMeta({
    title: "Projects | ALM Analytics",
    description: "Browse data science, analytics engineering, and ML projects by ALM Analytics.",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<ProjectType | "All">("All");

  const allTags: ProjectType[] = [
    "Streamlit App",
    "Shiny Dashboard",
    "Quarto Notebook",
    "Power BI Dashboard",
    "Machine Learning",
    "Data Engineering",
    "AI/RAG"
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = 
        searchQuery === "" || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        
      const matchesTag = activeTag === "All" || project.type === activeTag;
      
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, activeTag]);

  return (
    <div className="min-h-[100dvh] pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Project Gallery</h1>
          <p className="text-xl text-muted-foreground">
            A selection of dashboards, pipelines, models, and analytical tools.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-10 items-start md:items-center">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search projects, tools, or keywords..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 bg-card"
            />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full custom-scrollbar">
            <Filter className="h-4 w-4 text-muted-foreground mr-1 shrink-0" />
            <Badge 
              variant={activeTag === "All" ? "default" : "outline"}
              className="cursor-pointer shrink-0 py-1.5 px-3"
              onClick={() => setActiveTag("All")}
            >
              All Projects
            </Badge>
            {allTags.map((tag) => (
              <Badge 
                key={tag}
                variant={activeTag === tag ? "default" : "outline"}
                className="cursor-pointer shrink-0 py-1.5 px-3"
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-card rounded-lg border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-6">We couldn't find any projects matching your current filters.</p>
            <Button onClick={() => { setSearchQuery(""); setActiveTag("All"); }}>
              Clear Filters
            </Button>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
