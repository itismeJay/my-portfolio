import { GlowingEffect } from "@/components/ui/glowing-effect";

const AboutSection = () => {
  return (
    <div className="relative bg-card rounded-xl border border-border p-6">
      <GlowingEffect spread={40} glow={false} proximity={64} disabled={false} />
      <h2 className="text-lg font-semibold text-foreground mb-4">About</h2>
      <div className="space-y-4 text-sm text-secondary-foreground leading-relaxed">
        <p>
          I’m a full-stack developer passionate about building practical,
          user-focused digital solutions. I enjoy transforming ideas into
          scalable applications that solve real problems and improve everyday
          processes.
        </p>

        <p>
          Through my experience as a Software Developer Intern and freelance web
          developer, I’ve worked on modern web applications using Next.js and
          backend technologies. These experiences helped me strengthen my
          ability to write clean, maintainable code, communicate effectively
          with clients, and approach challenges with a problem-solving mindset.
        </p>

        <p>
          <em>
            Currently, I’m focused on building AI-powered SaaS applications —
            integrating authentication systems, scalable backend architecture,
            and intelligent features into real-world products. My goal is to
            become a well-rounded software engineer capable of designing,
            developing, and deploying complete systems from concept to
            production.
          </em>
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
