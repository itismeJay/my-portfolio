import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import StaggeredReveal from "@/components/StaggeredReveal";

const projects = [
  { name: "CodeCred", desc: "Online certifications for programmers", url: "codecred.dev" },
  { name: "BASE404", desc: "Online coding bootcamp", url: "base-404.com" },
  { name: "DIIN.PH", desc: "AI-powered wardrobe assistant", url: "diin.ph" },
  { name: "DYNAMIS Workout Tracker", desc: "AI-powered workout tracker", url: "dynamis-app.online" },
];

const ProjectsSection = () => {
  return (
    <div className="relative bg-card rounded-xl border border-border p-6">
      <GlowingEffect spread={40} glow={false} proximity={64} disabled={false} />
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-foreground">Recent Projects</h2>
        <Link to="/projects" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
          View All <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <StaggeredReveal baseDelay={40} step={140}>
          {projects.map((project) => (
            <div key={project.name}>
              <h3 className="text-sm font-semibold text-foreground">{project.name}</h3>
              <p className="text-xs text-muted-foreground mb-1">{project.desc}</p>
              <span className="inline-block text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground font-mono">
                {project.url}
              </span>
            </div>
          ))}
        </StaggeredReveal>
      </div>
    </div>
  );
};

export default ProjectsSection;
