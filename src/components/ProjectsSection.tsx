import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import StaggeredReveal from "@/components/StaggeredReveal";

const projects = [
  {
    name: "RezumaX",
    desc: "AI-powered resume builder for programmers online",
    url: "rezumax.vercel.app",
  },
  {
    name: "Auracare AI",
    desc: "AI healthcare assistant that listens.",
    url: "auracareai.vercel.app",
  },
  {
    name: "SmartAccounting AI",
    desc: "AI-powered accounting platform automating financial tasks.",
    url: "dev.smartaccounting.ai",
  },
  {
    name: "Certicode",
    desc: "IT services and training hub empowering tech careers.",
    url: "certicode.tech",
  },
];

const ProjectsSection = () => {
  return (
    <div className="relative bg-card rounded-xl border border-border p-6">
      <GlowingEffect spread={40} glow={false} proximity={64} disabled={false} />
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-foreground">
          Recent Projects
        </h2>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          View All <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <StaggeredReveal baseDelay={40} step={140}>
          {projects.map((project) => {
            const href = project.url.startsWith("http")
              ? project.url
              : `https://${project.url}`;

            return (
              <a
                key={project.name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded hover:bg-accent transition-colors"
              >
                <h3 className="text-sm font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-1">
                  {project.desc}
                </p>
                <span className="inline-block text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground font-mono">
                  {project.url}
                </span>
              </a>
            );
          })}
        </StaggeredReveal>
      </div>
    </div>
  );
};

export default ProjectsSection;
