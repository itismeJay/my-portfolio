import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Timeline } from "@/components/ui/timeline";

const experiences = [
  { title: "Software Engineer", company: "Optiq · Remote, Australia", year: "2025 - 2026" },
  { title: "Software Engineer", company: "Smart Accounting AI · Remote, U.S.", year: "2025" },
  {
    title: "Software Developer Intern",
    company: "Luxury Presence · Remote, U.S.",
    year: "2024",
  },
  {
    title: "Hello World! 👋",
    company: "Wrote my first line of code",
    year: "2023",
  },
];

const timelineData = experiences.map((exp) => ({
  title: exp.title,
  content: (
    <div className="flex items-baseline justify-between gap-2">
      <p className="text-xs text-muted-foreground">{exp.company}</p>
      <span className="text-xs text-muted-foreground flex-shrink-0">
        {exp.year}
      </span>
    </div>
  ),
}));

const ExperienceSection = () => {
  return (
    <div className="relative bg-card rounded-xl border border-border p-6 ">
      <GlowingEffect spread={40} glow={false} proximity={64} disabled={false} />
      <h2 className="text-lg font-semibold text-foreground mb-3">Experience</h2>
      <Timeline data={timelineData} />
    </div>
  );
};

export default ExperienceSection;
