import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ChatButton from "@/components/ChatButton";
import StaggeredReveal from "@/components/StaggeredReveal";

const techStack: Record<string, string[]> = {
  Frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "SCSS", "Styled Components", "Vite", "Webpack", "ESLint", "Prettier"],
  Backend: ["Node.js", "Python", "Java", "PHP", "Express.js", "NestJS", "FastAPI", "Spring Boot", "Laravel", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "OAuth", "JWT", "LDAP", "REST", "GraphQL", "gRPC", "AWS Lambda"],
  "DevOps & Cloud": ["AWS", "GCP", "Azure", "GitHub Actions", "Jenkins", "GitLab CI", "Terraform", "AWS CloudFormation", "Docker", "Kubernetes", "Prometheus", "Grafana", "Datadog"],
  "AI & Machine Learning": ["TensorFlow", "PyTorch", "LangChain", "Transformers", "OpenAI", "Anthropic", "Mistral", "Hugging Face", "LlamaIndex", "AutoGPT"],
  "Security & Identity": ["AWS IAM", "Azure AD", "Okta", "SAP CDC", "Auth0", "Cognito", "AES", "RSA", "SHA", "GDPR", "SOC 2", "ISO 27001"],
  "CMS & No-Code": ["WordPress", "Strapi", "Bubble", "Webflow", "Microsoft Power Platform", "n8n"],
};

const TechStackPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <StaggeredReveal baseDelay={120} step={480}>
        <div className="px-5 py-6 md:py-10 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <Link to="/" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Tech Stack</h1>
          </div>

          <div className="space-y-8 sm:space-y-10">
            {Object.entries(techStack).map(([category, techs], i) => (
              <StaggeredReveal key={category} baseDelay={0} step={200}>
                <div>
                  <h2 className="text-base font-semibold text-foreground mb-3 sm:mb-4">{category}</h2>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <StaggeredReveal baseDelay={60} step={120}>
                      {techs.map((tech) => (
                        <span key={tech} className="text-xs sm:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md border border-border text-foreground">
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
