import { ExternalLink, ChevronRight, Mail, Calendar, FileText } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import StaggeredReveal from "@/components/StaggeredReveal";

const FooterSection = () => {
  return (
    <div className="relative bg-card rounded-xl border border-border p-6">
      <GlowingEffect spread={40} glow={false} proximity={64} disabled={false} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Member of */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">A member of</h3>
          <div className="space-y-3">
            <StaggeredReveal baseDelay={30} step={100}>
              <a href="#" className="flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors">
                Analytics & Artificial Intelligence Association of the Philippines (AAIP)
                <ExternalLink className="w-3 h-3 flex-shrink-0" />
              </a>
              <a href="#" className="flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors">
                Philippine Software Industry Association
                <ExternalLink className="w-3 h-3 flex-shrink-0" />
              </a>
            </StaggeredReveal>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">Social Links</h3>
          <div className="space-y-2.5">
            <StaggeredReveal baseDelay={40} step={90}>
              {["LinkedIn", "GitHub", "Instagram"].map((social) => (
                <a key={social} href="#" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                  <span className="w-5 h-5 rounded bg-secondary flex items-center justify-center text-[10px] font-bold">
                    {social[0]}
                  </span>
                  {social}
                </a>
              ))}
            </StaggeredReveal>
          </div>
        </div>

        {/* Speaking */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">Speaking</h3>
          <p className="text-sm text-secondary-foreground mb-3">
            Available for speaking at events about software development and emerging technologies.
          </p>
          <a href="#" className="inline-flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors">
            Get in touch <ChevronRight className="w-3 h-3" />
          </a>
        </div>

        {/* Contact */}
        <div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-muted-foreground text-xs">Email</p>
                <p className="text-foreground">brylim@gmail.com</p>
              </div>
            </div>
            <a href="#" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-muted-foreground text-xs">Let's Talk</p>
                <p>Schedule a Call</p>
              </div>
              <ChevronRight className="w-3 h-3 ml-auto" />
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
              <FileText className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-muted-foreground text-xs">Blog</p>
                <p>Read my blog</p>
              </div>
              <ChevronRight className="w-3 h-3 ml-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
