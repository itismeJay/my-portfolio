import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Timeline } from "@/components/ui/timeline";

const experiences = [
  { title: "Principal AI Engineer", company: "Standard Chartered", year: "2025" },
  { title: "AI Ops Engineer", company: "Centre of Excellence for GenAI, Cambridge", year: "2025" },
  { title: "Senior Full-Stack Developer", company: "Core Technology, Cambridge", year: "2024" },
  { title: "Software Engineering Lead", company: "PocketDevs", year: "2022" },
  { title: "Lead Application Developer", company: "Bluewind Asia", year: "2021" },
  { title: "Software Engineer", company: "GCM", year: "2020" },
  { title: "BS Information Technology", company: "University of San Carlos", year: "2019" },
  { title: "Hello World! 👋", company: "Wrote my first line of code", year: "2015" },
];

const timelineData = experiences.map((exp) => ({
  title: exp.title,
  content: (
    <div className="flex items-baseline justify-between gap-2">
      <p className="text-xs text-muted-foreground">{exp.company}</p>
      <span className="text-xs text-muted-foreground flex-shrink-0">{exp.year}</span>
    </div>
  ),
}));

const ExperienceSection = () => {
  return (
    <div className="relative bg-card rounded-xl border border-border p-6">
      <GlowingEffect spread={40} glow={false} proximity={64} disabled={false} />
      <h2 className="text-lg font-semibold text-foreground mb-5">Experience</h2>
      <Timeline data={timelineData} />
    </div>
  );
};

export default ExperienceSection;
