import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import WhatIsICPCSection from '@/components/home/WhatIsICPCSection';
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
