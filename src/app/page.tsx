
import HeroSection from "@/src/components/sections/hero-section";
import AboutSection from "@/src/components/sections/about-section";
import ProjectSection from "@/src/components/sections/project-section";
import { SkiperCardDemo } from "@/src/components/sections/skiper-card-demo";
import CTASection from "@/src/components/sections/cta-section";
import { TextScrollDemo } from "@/src/components/sections/text-scroll-demo";
import { CursorTrailDemo } from "@/src/components/sections/cursor-trail-demo";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TextScrollDemo />
      <AboutSection />
      <ProjectSection />
      <CursorTrailDemo />
      <SkiperCardDemo />
      <CTASection />
    </div>
  );
}
