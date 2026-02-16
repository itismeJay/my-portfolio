import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import Globe3DDemo from "@/components/Globe3DDemo";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import RecommendationsSection from "@/components/RecommendationsSection";
import SideCards from "@/components/SideCards";
import FooterSection from "@/components/FooterSection";
import GallerySection from "@/components/GallerySection";
import ChatButton from "@/components/ChatButton";
import StaggeredReveal from "@/components/StaggeredReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StaggeredReveal baseDelay={100} step={140}>
        <div className="px-3 sm:px-5 md:px-9 lg:px-14 py-5 sm:py-7 md:py-10 max-w-5xl mx-auto">
          <HeroSection />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
            <div className="space-y-4">
              <AboutSection />
              <TechStackSection />
              <ProjectsSection />
              <CertificationsSection />
            </div>

            <div className="space-y-4">
              <SideCards />
              <ExperienceSection />
              <RecommendationsSection />
            </div>
          </div>

          <div className="mt-4">
            <FooterSection />
          </div>

          <GallerySection />

          <div className="mt-2">
            <Globe3DDemo />
          </div>
        </div>
      </StaggeredReveal>

      <ChatButton />
    </div>
  );
};

export default Index;
