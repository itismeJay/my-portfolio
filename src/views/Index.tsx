"use client";

import React, { Suspense, lazy } from "react";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
const Globe3DDemo = lazy(() => import("@/components/Globe3DDemo"));
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import RecommendationsSection from "@/components/RecommendationsSection";
import SideCards from "@/components/SideCards";
import { TracingBeam } from "@/components/ui/tracing-beam";
import FooterSection from "@/components/FooterSection";
import WorkWithMeSection from "@/components/WorkWithMeSection";
import GallerySection from "@/components/GallerySection";
import StaggeredReveal from "@/components/StaggeredReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StaggeredReveal baseDelay={100} step={140}>
        <TracingBeam>
          <div className="px-3 sm:px-5 md:px-9 lg:px-14 py-5 sm:py-7 md:py-10">
          {/* Hero Section */}
          <HeroSection />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
            {/* Left Column */}
            <div className="space-y-4">
              <AboutSection />
              <TechStackSection />
              <ProjectsSection />
              {/* <CertificationsSection /> */}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <SideCards />
              <ExperienceSection />
              {/* <RecommendationsSection /> */}
            </div>
          </div>

          {/* Work with me */}
          <div className="mt-4">
            <WorkWithMeSection />
          </div>

          {/* Footer */}
          <div className="mt-4">
            <FooterSection />
          </div>

          {/* Gallery Section */}
          {/* <GallerySection /> */}

          {/* 3D Globe Demo */}
          <div className="mt-2">
            <Suspense fallback={<div className="flex items-center justify-center py-6">Loading demo...</div>}>
              <Globe3DDemo />
            </Suspense>
          </div>
          </div>
        </TracingBeam>
      </StaggeredReveal>
    </div>
  );
};

export default Index;
