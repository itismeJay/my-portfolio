import { GlowingEffect } from "@/components/ui/glowing-effect";
import StaggeredReveal from "@/components/StaggeredReveal";

const AccessCard = () => {
  return (
    <div className="relative bg-secondary rounded-xl border border-border p-5 space-y-6">
      <GlowingEffect spread={40} glow={false} proximity={64} disabled={false} />
      <div className="text-foreground text-3xl font-mono">{`>_`}</div>
      <div>
        <h3 className="text-sm font-bold text-foreground tracking-wider uppercase">Devs One Hundred</h3>
        <p className="text-[10px] text-muted-foreground tracking-widest uppercase mt-0.5">Access Card</p>
      </div>
      <div className="pt-4">
        <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Founding Member</p>
        <p className="text-lg font-bold text-foreground mt-0.5">RB JAY</p>
      </div>
      <div className="flex items-end justify-between pt-2">
        <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Developer</p>
        <div className="w-10 h-10 bg-muted rounded grid grid-cols-4 grid-rows-4 gap-px p-1">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className={`${i % 3 === 0 ? 'bg-foreground' : 'bg-muted'} rounded-[1px]`} />
          ))}
        </div>
      </div>
    </div>
  );
};

const AchievementBadge = () => (
  <div className="relative bg-badge-red-bg rounded-xl border border-badge-red-text/20 p-4 flex items-center gap-3">
    <GlowingEffect spread={40} glow={false} proximity={64} disabled={false} />
    <div>
      <p className="text-badge-red-text font-bold text-sm">I'M PART OF</p>
      <p className="text-foreground font-black text-xl">PH▸100</p>
      <p className="text-[9px] text-muted-foreground mt-1">
        The PH100 is the annual list of the brightest minds under 30 in the Philippines
      </p>
    </div>
    <div className="text-xs text-badge-red-text font-mono">▸▸ STELLAR<span className="text-foreground">PH</span></div>
  </div>
);

const SideCards = () => (
  <StaggeredReveal baseDelay={100} step={140}>
    <AccessCard />
    <AchievementBadge />
  </StaggeredReveal>
);

export default SideCards;
