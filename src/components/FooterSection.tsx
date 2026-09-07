import {
  ExternalLink,
  ChevronRight,
  Mail,
  Calendar,
  FileText,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import StaggeredReveal from "@/components/StaggeredReveal";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

const FooterSection = () => {
  return (
    <div className="relative bg-card rounded-xl border border-border p-6">
      <GlowingEffect spread={40} glow={false} proximity={64} disabled={false} />

      {/* Flex container for footer sections */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Social Links */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">
            Social Links
          </h3>
          <div className="flex flex-col gap-2.5">
            <StaggeredReveal baseDelay={40} step={90}>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rbjay-salamanes/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Linkedin className="w-4 h-4" />
                </span>
                LinkedIn
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/itismeJay"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Github className="w-4 h-4" />
                </span>
                GitHub
              </a>
            </StaggeredReveal>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Email */}
          <a
            href="mailto:salamanes.rb@gmail.com"
            className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-muted-foreground text-xs">Email</p>
              <p>salamanes.rb@gmail.com</p>
            </div>
          </a>

          {/* Schedule Call */}
          <a
            href="https://calendly.com/rbjay2005/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
          >
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-muted-foreground text-xs">Let's Talk</p>
              <p>Schedule a Call</p>
            </div>
            <ChevronRight className="w-3 h-3 ml-auto" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/itismeJay"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
          >
            <FileText className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-muted-foreground text-xs">Code</p>
              <p>github.com/itismeJay</p>
            </div>
            <ChevronRight className="w-3 h-3 ml-auto" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
