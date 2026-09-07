import { ChevronRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import StaggeredReveal from "@/components/StaggeredReveal";
import { projects } from "@/lib/projects";

const featured = projects.filter((p) => p.featured);

const ProjectsSection = () => {
  return (
    <div className="relative bg-card rounded-xl border border-border p-6">
      <GlowingEffect spread={40} glow={false} proximity={64} disabled={false} />
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-foreground">
          Featured Projects
        </h2>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          View All <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <StaggeredReveal baseDelay={40} step={140}>
          {featured.map((project) => (
            <div
              key={project.name}
              className="p-3 rounded border border-border/60 hover:bg-accent transition-colors"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 mb-2">
                {project.desc}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </a>
                )}
                {project.url && (
                  <a
                    href={`https://${project.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </StaggeredReveal>
      </div>
    </div>
  );
};

export default ProjectsSection;
