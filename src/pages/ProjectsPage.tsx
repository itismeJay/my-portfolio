import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ChatButton from "@/components/ChatButton";
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
    name: "Luxury Presence",
    desc: "Premium AI‑driven real estate websites & marketing platform.",
    url: "luxurypresence.com",
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

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <StaggeredReveal baseDelay={80} step={80}>
        <div className="px-5 py-6 md:py-10 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <Link
              to="/"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-foreground">All Projects</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {projects.map((project, i) => {
              const href = project.url.startsWith("http")
                ? project.url
                : `https://${project.url}`;

              return (
                <a
                  key={project.name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-card rounded-xl border border-border p-4 sm:p-5 hover:bg-accent transition-colors"
                >
                  <h3 className="text-sm font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 mb-2">
                    {project.desc}
                  </p>
                  <span className="inline-block text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground font-mono break-all">
                    {project.url}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </StaggeredReveal>
      <ChatButton />
    </div>
  );
};

export default ProjectsPage;
