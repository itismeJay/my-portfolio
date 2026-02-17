import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ChatButton from "@/components/ChatButton";
import StaggeredReveal from "@/components/StaggeredReveal";

const techStack: Record<string, string[]> = {
  Frontend: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "SCSS",
    "Styled Components",
    "Vite",
    "Webpack",
    "ESLint",
    "Prettier",
  ],

  Backend: [
    "Node.js",
    "Python",
    "Java",
    "PHP",
    "Express.js",
    "Laravel",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Supabase",
    "Firebase",
    "Neon",
    "Drizzle ORM",
    "OAuth",
    "JWT",
    "REST",
    "AWS",
  ],

  "AI & APIs": [
    "OpenAI",
    "Gemini",
    "Anthropic",
    "OpenRouter",
    "Vapi AI",
    "AssemblyAI",
  ],

  "Version Control & Tools": ["Git", "GitHub"],

  "CMS & No-Code": [
    "Strapi",
    "Webflow",
    "Microsoft Power Platform",
    "n8n",
    "WordPress",
    "Bubble",
  ],
};

const TechStackPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <StaggeredReveal baseDelay={120} step={480}>
        <div className="px-5 py-6 md:py-10 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <Link
              to="/"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Tech Stack</h1>
          </div>

          <div className="space-y-8 sm:space-y-10">
            {Object.entries(techStack).map(([category, techs]) => (
              <StaggeredReveal key={category} baseDelay={0} step={200}>
                <div>
                  <h2 className="text-base font-semibold text-foreground mb-3 sm:mb-4">
                    {category}
                  </h2>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <StaggeredReveal baseDelay={60} step={120}>
                      {techs.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs sm:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md border border-border text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </StaggeredReveal>
                  </div>
                </div>
              </StaggeredReveal>
            ))}
          </div>
        </div>
      </StaggeredReveal>
      <ChatButton />
    </div>
  );
};

export default TechStackPage;
