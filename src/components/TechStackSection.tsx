import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import StaggeredReveal from "@/components/StaggeredReveal";

const techStack = {
  Frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"],
  Backend: ["Node.js", "Python", "PHP", "Laravel", "PostgreSQL", "MongoDB"],
  "DevOps & Cloud": ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
};

const TechStackSection = () => {
  return (
    <div className="relative bg-card rounded-xl border border-border p-6">
      <GlowingEffect spread={40} glow={false} proximity={64} disabled={false} />
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-foreground">Tech Stack</h2>
        <Link to="/tech-stack" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
          View All <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
      <div className="space-y-5">
        <StaggeredReveal baseDelay={40} step={220}>
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground mb-2">{category}</h3>
              <div className="flex flex-wrap gap-3">
                <StaggeredReveal baseDelay={30} step={80}>
                  {techs.map((tech) => (
                    <span key={tech} className="text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </StaggeredReveal>
              </div>
            </div>
          ))}
        </StaggeredReveal>
      </div>
    </div>
  );
};

export default TechStackSection;
