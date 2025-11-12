import Link from 'next/link';
import { FadeIn, FadeInLeft, FadeInRight } from '@/components/AnimatedSection';
import { TimelineCard } from './TimelineCard';

export default function TimelineSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">Timeline</h2>
            <div className="h-2 w-24 sm:w-32 bg-[#FDBC1D] mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-semibold px-4">Your journey to ICPC World Finals</p>
          </div>
        </FadeIn>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#143C68]"></div>
          
          <div className="space-y-12">
            <FadeInLeft delay={0.1}>
              <TimelineCard
                date="11th November 2025"
                title="Registrations Open"
                align="left"
                color="bg-[#143C68]"
              />
            </FadeInLeft>
            <FadeInRight delay={0.2}>
              <TimelineCard
                date="10th December 2025"
                title="Registrations Close"
                align="right"
                color="bg-[#143C68]"
              />
            </FadeInRight>
            <FadeInLeft delay={0.3}>
              <TimelineCard
                date="December 14th 2025"
                title="Online Round"
                align="left"
                color="bg-[#143C68]"
              />
            </FadeInLeft>
            <FadeInRight delay={0.4}>
              <TimelineCard
                date="04th January 2026"
                title="Sri Lanka Onsite Regional"
                align="right"
                color="bg-[#FDBC1D]"
                highlight={true}
              />
            </FadeInRight>
            <FadeInLeft delay={0.5}>
              <TimelineCard
                date="March 2026"
                title="ICPC Asia West"
                align="left"
                color="bg-[#B22E1B]"
              />
            </FadeInLeft>
            <FadeInRight delay={0.6}>
              <TimelineCard
                date="August 2026"
                title="ICPC World Finals"
                align="right"
                color="bg-red-500"
              />
            </FadeInRight>
          </div>
        </div>
        
        <FadeIn delay={0.8}>
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href="/timeline"
              className="inline-flex items-center gap-2 sm:gap-3 bg-[#143C68] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              View Complete Timeline
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

