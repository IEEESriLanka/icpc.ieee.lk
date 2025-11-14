import Link from 'next/link';
import { TrophyIcon, GlobeAltIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { FaLaptopCode } from 'react-icons/fa';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { ModernBenefitCard } from './BenefitCard';

export default function WhyJoinSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#143C68] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#FDBC1D]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white">
              Why You Should Join?
            </h2>
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <div className="h-1 w-12 sm:w-16 md:w-20 bg-[#FDBC1D]/50 rounded-full"></div>
              <div className="h-2 w-24 sm:w-28 md:w-32 bg-[#FDBC1D] rounded-full"></div>
              <div className="h-1 w-12 sm:w-16 md:w-20 bg-[#FDBC1D]/50 rounded-full"></div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-semibold max-w-3xl mx-auto px-4">
              Transform your skills, career, and future with the world&apos;s most prestigious programming competition
            </p>
          </div>
        </FadeIn>
        
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <StaggerItem>
              <ModernBenefitCard
                icon={<TrophyIcon className="w-20 h-20" />}
                title="Compete with the Best"
                description="Challenge yourself against the sharpest minds in Sri Lanka and beyond"
                color="bg-[#FDBC1D]"
              />
            </StaggerItem>
            <StaggerItem>
              <ModernBenefitCard
                icon={<FaLaptopCode className="w-20 h-20" />}
                title="Build Lasting Skills"
                description="Master algorithms, problem-solving, and teamwork that last a lifetime"
                color="bg-[#143C68]"
              />
            </StaggerItem>
            <StaggerItem>
              <ModernBenefitCard
                icon={<GlobeAltIcon className="w-20 h-20" />}
                title="International Recognition"
                description="Earn national recognition and qualify for ICPC Asia West Regional"
                color="bg-[#FDBC1D]"
              />
            </StaggerItem>
          </div>
        </StaggerContainer>
        
        <FadeIn delay={0.6}>
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href="/why-join"
              className="group inline-flex items-center gap-3 sm:gap-4 bg-[#FDBC1D] text-[#143C68] px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-bold hover:bg-[#e6a91a] transition-all duration-300 shadow-2xl transform hover:scale-105 w-full sm:w-auto justify-center"
            >
              <span>Discover All Benefits</span>
              <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

