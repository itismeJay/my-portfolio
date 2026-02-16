import { useState } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import StaggeredReveal from "@/components/StaggeredReveal";

const recommendations = [
  {
    text: "Sir Bryl's teaching approach is incredibly hands-on, and the projects significantly accelerated my learning process in web development. I am truly grateful for the mentorship I received from him during my web development internship.",
    name: "John Edmerson Pizarra",
    role: "Jr. Full-stack Developer, PocketDevs",
  },
  {
    text: "Working with Bryl was an incredible experience. His deep understanding of AI and software engineering helped our team deliver a product that exceeded expectations.",
    name: "Maria Santos",
    role: "Product Manager, TechCorp",
  },
  {
    text: "Bryl's mentorship transformed our development process. His expertise in modern web technologies and AI integration was invaluable to our startup.",
    name: "Carlos Rivera",
    role: "CTO, StartupPH",
  },
];

const RecommendationsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="relative bg-card rounded-xl border border-border p-6">
      <GlowingEffect spread={40} glow={false} proximity={64} disabled={false} />
      <h2 className="text-lg font-semibold text-foreground mb-5">Recommendations</h2>
      <div className="mb-4">
        <p className="text-sm text-secondary-foreground leading-relaxed italic mb-4">
          "{recommendations[active].text}"
        </p>
        <p className="text-sm font-medium text-foreground">{recommendations[active].name}</p>
        <p className="text-xs text-muted-foreground">{recommendations[active].role}</p>
      </div>
      <div className="flex gap-1.5">
        <StaggeredReveal baseDelay={30} step={90}>
          {recommendations.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === active ? "bg-foreground" : "bg-muted-foreground/40"
              }`}
            />
          ))}
        </StaggeredReveal>
      </div>
    </div>
  );
};

export default RecommendationsSection;
