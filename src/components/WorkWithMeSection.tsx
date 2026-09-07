import { Mail } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const WorkWithMeSection = () => {
  return (
    <div className="relative bg-card rounded-xl border border-border p-6">
      <GlowingEffect spread={40} glow={false} proximity={64} disabled={false} />
      <h2 className="text-lg font-semibold text-foreground mb-3">Work with me</h2>
      <div className="space-y-3 text-sm text-secondary-foreground leading-relaxed">
        <p>
          I’m open to occasional freelance and contract work. If you’re building
          something around Java / Spring Boot backends, event-driven systems with
          Kafka, microservices, or payment integrations, send me some context and
          I’ll tell you honestly whether I’m the right fit.
        </p>
        <a
          href="mailto:salamanes.rb@gmail.com?subject=Work%20inquiry"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-90 transition-opacity"
        >
          <Mail className="w-4 h-4" />
          salamanes.rb@gmail.com
        </a>
      </div>
    </div>
  );
};

export default WorkWithMeSection;
