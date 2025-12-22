import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import WhatIsICPCSection from '@/components/home/WhatIsICPCSection';
import AwarenessSessionSection from '@/components/home/AwarenessSessionSection';
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
      <AwarenessSessionSection />
      <WhyJoinSection />
      <HowItWorksSection />
      <TimelineSection />
      <AwardsSection />
      <CTASection />
    </main>
  );
}
