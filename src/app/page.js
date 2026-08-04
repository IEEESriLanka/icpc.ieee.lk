import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import WhatIsICPCSection from '@/components/home/WhatIsICPCSection';
// AwarenessSessionSection is hidden for now — bring back once the ICPC 2026/2027
// Awareness Session has been held, with a new section reflecting it.
// import AwarenessSessionSection from '@/components/home/AwarenessSessionSection';
// DocumentsSection is hidden for now — documents need to be updated for 2026/2027.
// import DocumentsSection from '@/components/home/DocumentsSection';
import WhyJoinSection from '@/components/home/WhyJoinSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import TimelineSection from '@/components/home/TimelineSection';
import AwardsSection from '@/components/home/AwardsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <WhatIsICPCSection />
      <WhyJoinSection />
      <HowItWorksSection />
      <TimelineSection />
      <AwardsSection />
      <CTASection />
    </main>
  );
}
