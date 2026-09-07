"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import StaggeredReveal from "@/components/StaggeredReveal";

const certs = [
  { title: "Huawei Developer Expert", org: "Huawei" },
  { title: "Generative AI Leader", org: "Google" },
  { title: "Google Analytics", org: "Google" },
  { title: "Digital Marketing", org: "Google" },
  { title: "Software Engineering", org: "TestDome" },
  { title: "JavaScript", org: "TestDome" },
  { title: "PHP", org: "TestDome" },
  { title: "Python", org: "TestDome" },
  { title: "SQL", org: "TestDome" },
  { title: "Scrum Master", org: "TestDome" },
  { title: "Lean Six Sigma White Belt", org: "Management & Strategy Institute" },
  { title: "Project Management Certified", org: "Management & Strategy Institute" },
  { title: "Certified Kanban Associate", org: "International Scrum Institute™" },
  { title: "Scrum Associate", org: "International Scrum Institute™" },
  { title: "Diploma in Project Management", org: "Alison" },
  { title: "Cybersecurity Certificate", org: "Trend Micro" },
  { title: "Monitoring Kubernetes", org: "Datadog" },
  { title: "Certified Cloud Practitioner", org: "Amazon Web Services (AWS)" },
  { title: "Generative AI Professional", org: "Oracle" },
];

const CertificationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-5 py-6 md:py-10 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Link href="/" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-2xl font-bold text-foreground">All Certifications</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <StaggeredReveal baseDelay={80} step={50}>
            {certs.map((cert) => (
              <div key={cert.title} className="bg-card rounded-xl border border-border p-4 sm:p-5">
                <h3 className="text-sm font-semibold text-foreground">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{cert.org}</p>
              </div>
            ))}
          </StaggeredReveal>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
