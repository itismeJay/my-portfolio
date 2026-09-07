"use client";

import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import StaggeredReveal from "@/components/StaggeredReveal";
import { projects } from "@/lib/projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <StaggeredReveal baseDelay={80} step={80}>
        <div className="px-5 py-6 md:py-10 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <Link
              href="/"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-foreground">All Projects</h1>
          </div>

          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-card rounded-xl border border-border p-4 sm:p-5"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="text-sm text-secondary-foreground mt-1.5 leading-relaxed">
                  {project.detail ?? project.desc}
                </p>

                {project.tech && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-md border border-border text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4 mt-4">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={`https://${project.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.url}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </StaggeredReveal>
    </div>
  );
};

export default ProjectsPage;
