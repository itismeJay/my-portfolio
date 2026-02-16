import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ChatButton from "@/components/ChatButton";
import StaggeredReveal from "@/components/StaggeredReveal";

const projects = [
  { name: "CodeCred", desc: "Online certifications for programmers", url: "codecred.dev" },
  { name: "BASE404", desc: "Online coding bootcamp", url: "base-404.com" },
  { name: "DYNAMIS Workout Tracker", desc: "AI-powered workout tracker", url: "dynamis-app.online" },
  { name: "DIIN.PH", desc: "AI-powered wardrobe assistant", url: "diin.ph" },
  { name: "Resume Builder", desc: "Harvard style and ATS-friendly resume builder", url: "resume-builder.bryllim.com" },
  { name: "Capstone Generator", desc: "Online capstone generator for IT/CS students", url: "capstone-generator.bryllim.com" },
  { name: "BOOQED", desc: "Leading workspace booking platform based in Singapore", url: "booqed.com" },
  { name: "Tunai", desc: "AI-powered social media fact-checker", url: "dict.gov.ph/news-and-updates/21070" },
  { name: "Seam", desc: "AI-native platform for spiritual exploration and learning.", url: "app.joinseam.space" },
  { name: "Petrogreen Energy", desc: "Central powerplant monitoring system", url: "petroenergy.com.ph" },
  { name: "Interlace", desc: "Architecture & Design Studio", url: "interlace.ph" },
  { name: "DOST-FNRI", desc: "Nutritional database and calorie counter", url: "fnri.dost.gov.ph" },
  { name: "UAPSA", desc: "University academic planning system", url: "uapsa.org" },
  { name: "SEANOGY", desc: "Southeast Asian genealogy platform", url: "seanogy.com" },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <StaggeredReveal baseDelay={80} step={80}>
        <div className="px-5 py-6 md:py-10 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <Link to="/" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-foreground">All Projects</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {projects.map((project, i) => (
              <div
                key={project.name}
                className="bg-card rounded-xl border border-border p-4 sm:p-5"
              >
                <h3 className="text-sm font-semibold text-foreground">{project.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 mb-2">{project.desc}</p>
                <span className="inline-block text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground font-mono break-all">
                  {project.url}
                </span>
              </div>
            ))}
          </div>
        </div>
      </StaggeredReveal>
      <ChatButton />
    </div>
  );
};

export default ProjectsPage;
