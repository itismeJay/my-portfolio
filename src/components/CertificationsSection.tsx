import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import StaggeredReveal from "@/components/StaggeredReveal";

const certs = [
  { title: "Huawei Developer Expert", org: "Huawei" },
  { title: "Generative AI Leader", org: "Google" },
  { title: "Software Engineering", org: "TestDome" },
  { title: "Generative AI Professional", org: "Oracle" },
];

const CertificationsSection = () => {
  return (
    <div className="relative bg-card rounded-xl border border-border p-6">
      <GlowingEffect spread={40} glow={false} proximity={64} disabled={false} />
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-foreground">Recent Certifications</h2>
        <Link href="/certifications" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
          View All <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
      <div className="space-y-3">
        <StaggeredReveal baseDelay={40} step={120}>
          {certs.map((cert) => (
            <div key={cert.title} className="border-l-2 border-border pl-4 py-1">
              <h3 className="text-sm font-medium text-foreground">{cert.title}</h3>
              <p className="text-xs text-muted-foreground">{cert.org}</p>
            </div>
          ))}
        </StaggeredReveal>
      </div>
    </div>
  );
};

export default CertificationsSection;
