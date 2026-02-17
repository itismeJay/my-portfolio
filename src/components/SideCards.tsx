import { GlowingEffect } from "@/components/ui/glowing-effect";
import StaggeredReveal from "@/components/StaggeredReveal";

const AccessCard = () => {
  return (
    <div className="relative bg-secondary rounded-xl border border-border p-5 space-y-6">
      <GlowingEffect spread={40} glow={false} proximity={64} disabled={false} />

      <div className="text-foreground text-3xl font-mono">{`>_`}</div>

      <div>
        <h3 className="text-sm font-bold text-foreground tracking-wider uppercase">
          Software Developer
        </h3>
        <p className="text-[10px] text-muted-foreground tracking-widest uppercase mt-0.5">
          Full-Stack • SaaS • AI Integration
        </p>
      </div>

      <div className="pt-4">
        <p className="text-[10px] text-muted-foreground tracking-widest uppercase">
          Identity
        </p>
        <p className="text-lg font-bold text-foreground mt-0.5">
          Rb Jay Salamanes
        </p>
      </div>

      <div className="flex items-end justify-between pt-2">
        <p className="text-[10px] text-muted-foreground tracking-widest uppercase">
          Building Scalable Systems
        </p>
      </div>
    </div>
  );
};

const AchievementBadge = () => (
  <div className="relative bg-secondary rounded-xl border border-primary/20 p-4 flex items-center gap-3">
    <GlowingEffect spread={40} glow={false} proximity={64} disabled={false} />

    <div>
      <p className="text-primary font-bold text-sm">CURRENT FOCUS</p>

      <p className="text-foreground font-black text-xl">
        AI-Powered SaaS Builder
      </p>

      <p className="text-[9px] text-muted-foreground mt-1">
        Developing full-stack applications with Next JS, authentication systems,
        and scalable backend architecture.
      </p>
    </div>

    <div className="text-xs text-primary font-mono">
      ▸▸ BUILD<span className="text-foreground">MODE</span>
    </div>
  </div>
);

const SideCards = () => (
  <StaggeredReveal baseDelay={100} step={140}>
    <AccessCard />
    <AchievementBadge />
  </StaggeredReveal>
);

export default SideCards;
