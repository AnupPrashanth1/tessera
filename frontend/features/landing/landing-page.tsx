import { ArchitecturePreviewSection } from '@/features/landing/components/architecture-preview-section';
import { CoreCapabilitiesSection } from '@/features/landing/components/core-capabilities-section';
import { HeroSection } from '@/features/landing/components/hero-section';
import { PlatformOverviewSection } from '@/features/landing/components/platform-overview-section';
import { ProblemSection } from '@/features/landing/components/problem-section';
import { RoadmapSection } from '@/features/landing/components/roadmap-section';
import { TechnologyStackSection } from '@/features/landing/components/technology-stack-section';

export function LandingPage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <PlatformOverviewSection />
      <CoreCapabilitiesSection />
      <ArchitecturePreviewSection />
      <TechnologyStackSection />
      <RoadmapSection />
    </main>
  );
}
