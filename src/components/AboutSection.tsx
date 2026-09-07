import { GlowingEffect } from "@/components/ui/glowing-effect";

const AboutSection = () => {
  return (
    <div className="relative bg-card rounded-xl border border-border p-6">
      <GlowingEffect spread={40} glow={false} proximity={64} disabled={false} />
      <h2 className="text-lg font-semibold text-foreground mb-4">About</h2>
      <div className="space-y-4 text-sm text-secondary-foreground leading-relaxed">
        <p>
          My path into software has been fast and self-directed. I wrote my first
          line of code in 2023, and within about a year I was working remotely
          with teams in the U.S. and Australia.
        </p>

        <p>
          It started as a Software Developer Intern at Luxury Presence, turning
          Figma designs into React components, auditing REST integrations, and
          fixing a high-severity mobile rendering bug on client-facing platforms.
          From there I joined Smart Accounting AI, working across Java / Spring
          Boot and TypeScript on accounting and payroll workflows — I traced a
          production 500 error through three codebases, shipped a set of
          coordinated fixes, and wrote 42 JUnit and Mockito tests to protect a
          critical multi-employer payroll flow.
        </p>

        <p>
          At Optiq I built web and mobile features for a multi-tenant HR/payroll
          SaaS. I led the iOS App Store and Google Play release of a React Native
          app, wired JWT and Keycloak role-based access across microservices, and
          cut a scheduling page’s load time from about 7 seconds to 1 second in
          production.
        </p>

        <p>
          <em>
            Alongside the day job, I build fintech projects from scratch to go
            deeper on payment integrations — event-driven microservices with
            Apache Kafka, choreographed sagas and idempotent event processing,
            real-time fraud detection, and payment flows with proper idempotency
            and step-up verification. My goal is to become a backend engineer who
            can design and run distributed systems end to end.
          </em>
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
