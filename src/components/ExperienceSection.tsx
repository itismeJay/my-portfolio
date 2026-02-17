import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Timeline } from "@/components/ui/timeline";

const experiences = [
  // { title: "Principal AI Engineer", company: "Standard Chartered", year: "2025" },
  // { title: "AI Ops Engineer", company: "Centre of Excellence for GenAI, Cambridge", year: "2025" },
  { title: "Software Developer", company: "SmartAccounting AI", year: "2025" },
  { title: "Web Developer", company: "Luxury Presence", year: "2025" },
  { title: "Frontend Developer", company: "Certicode", year: "2024" },
  { title: "Data Entry Intern", company: "City Hall", year: "2023" },
  {
    title: "BS Information Technology",
    company: "Davao Del Norte State College",
    year: "2023 - 2027",
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
