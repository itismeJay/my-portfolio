import { GlowingEffect } from "@/components/ui/glowing-effect";

const AboutSection = () => {
  return (
    <div className="relative bg-card rounded-xl border border-border p-6">
      <GlowingEffect spread={40} glow={false} proximity={64} disabled={false} />
      <h2 className="text-lg font-semibold text-foreground mb-4">About</h2>
      <div className="space-y-4 text-sm text-secondary-foreground leading-relaxed">
        <p>
          I'm a full-stack software engineer specializing in developing solutions with
          JavaScript, Python, and PHP. I work on projects including building modern web
          applications, mobile apps, search engine optimization, digital marketing, and
          making code tutorials.
        </p>
        <p>
          I've helped startups and MSMEs grow and streamline their processes through
          software solutions. I've also built a community of over 200,000 developers
          sharing knowledge and mentorship.
        </p>
        <p>
          <em>
            Lately, I've been diving deeper into the world of artificial intelligence, focusing on
            integrating AI tools and techniques into modern applications. My work now
            includes developing AI-powered solutions, creating intelligent applications, and
            leveraging generative AI to optimize development workflows and deliver cutting-edge technology.
          </em>
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
