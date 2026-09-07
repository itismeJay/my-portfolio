export type Project = {
  name: string;
  desc: string;
  /** Longer description shown on the full Projects page. */
  detail?: string;
  /** Live/production URL, without protocol. */
  url?: string;
  /** GitHub repository URL. */
  repo?: string;
  /** Key technologies, shown on the full Projects page. */
  tech?: string[];
  /** Featured engineering projects are highlighted on the home page. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Banking System with Real-Time Fraud Detection",
    desc: "Event-driven money-transfer platform with a Kafka saga and real-time fraud screening.",
    detail:
      "Money-transfer workflow across 6 Spring Boot microservices using a choreographed Kafka saga, PostgreSQL persistence, OpenFeign REST calls, and compensating refunds so balances stay consistent when a step fails. Duplicate transfers and double charges are prevented with a PostgreSQL processed-events ledger and HTTP idempotency keys for Razorpay payment creation. Real-time fraud screening runs before funds move using Redis-backed velocity, spend-anomaly, and balance-drain checks, triggering HMAC-SHA256 OTP step-up verification and gateway rate limiting.",
    repo: "https://github.com/itismeJay/banking-system",
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring Cloud Gateway",
      "OpenFeign",
      "Apache Kafka",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Razorpay API",
      "AWS EC2",
    ],
    featured: true,
  },
  {
    name: "Patient Management Microservices",
    desc: "Secure healthcare backend mixing synchronous gRPC and asynchronous Kafka messaging.",
    detail:
      "Multi-service healthcare backend where patient creation uses synchronous gRPC for billing provisioning and Kafka / Protocol Buffers for asynchronous analytics, keeping non-critical work from blocking the API. Protected-route authentication is centralized at Spring Cloud Gateway with JWT validation through a dedicated auth service, BCrypt password hashing, PostgreSQL persistence, Docker health checks, and environment-managed secrets.",
    repo: "https://github.com/itismeJay/patient-management-system",
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring Cloud Gateway",
      "gRPC",
      "Protocol Buffers",
      "Apache Kafka",
      "Spring Security",
      "JWT",
      "BCrypt",
      "PostgreSQL",
      "Docker",
    ],
    featured: true,
  },
  {
    name: "RezumaX",
    desc: "Full-stack, ATS-friendly resume builder with real-time preview and PDF export.",
    detail:
      "Resume builder with 14 customizable section types, drag-and-drop reordering with persistent state, a live preview that mirrors the exported PDF, multi-page pagination, auto-save, and ATS-friendly PDF export with selectable text.",
    url: "rezumax.vercel.app",
    repo: "https://github.com/itismeJay/renhanced",
    tech: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Drizzle ORM", "PostgreSQL"],
  },
  {
    name: "Auracare AI",
    desc: "AI healthcare assistant that listens.",
    detail:
      "AI-powered healthcare assistant built on Next.js that captures and responds to spoken patient input.",
    url: "auracareai.vercel.app",
    repo: "https://github.com/itismeJay/Auracare-AI",
    tech: ["Next.js", "TypeScript", "AI / Voice"],
  },
  {
    name: "Secure Authentication System",
    desc: "Registration and login system demonstrating hashing, salt, and pepper.",
    detail:
      "Cybersecurity project implementing PBKDF2 / SHA-256 password hashing with a per-user salt and an environment-stored pepper, plus a password-strength meter enforcing length and character-class rules.",
    url: "secure-authentication-red.vercel.app",
    repo: "https://github.com/itismeJay/secure-authentication",
    tech: ["Next.js", "TypeScript", "Drizzle ORM", "Neon Postgres"],
  },
  {
    name: "SmartAccounting AI",
    desc: "AI-powered accounting and payroll platform automating financial workflows.",
    detail:
      "Production accounting/payroll SaaS where I worked across Java / Spring Boot and TypeScript codebases — resolving a production 500 error spanning three codebases, authoring 42 JUnit / Mockito tests for a multi-employer payroll workflow, and wiring up GitHub Actions regression testing on pull requests.",
    url: "dev.smartaccounting.ai",
    tech: ["Java", "Spring Boot", "JPA / Hibernate", "TypeScript", "GitHub Actions"],
  },
  {
    name: "Luxury Presence",
    desc: "AI-driven real estate websites and marketing platform.",
    detail:
      "Delivered React UI work, production fixes, and API integration improvements — auditing 27 REST endpoints across 3 integrations, standardizing error handling, and converting 12 Figma designs into reusable React / Tailwind components.",
    url: "luxurypresence.com",
    tech: ["React", "Tailwind CSS", "REST APIs"],
  },
];
