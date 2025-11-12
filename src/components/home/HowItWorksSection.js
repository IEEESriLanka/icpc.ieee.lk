import Link from 'next/link';
import { FaUsers, FaClock, FaCode, FaLaptopCode } from 'react-icons/fa';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { InfoCard } from './InfoCard';

export default function HowItWorksSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">How It Works</h2>
            <div className="h-2 w-24 sm:w-32 bg-[#FDBC1D] mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-semibold px-4">Understanding the contest format</p>
          </div>
        </FadeIn>
        
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <StaggerItem>
              <InfoCard 
                icon={<FaUsers className="w-12 h-12 text-[#143C68]" />}
                title="Team Size" 
                value="3 Students" 
                subtitle="from the same university" 
              />
            </StaggerItem>
            <StaggerItem>
              <InfoCard 
                icon={<FaClock className="w-12 h-12 text-[#143C68]" />}
                title="Duration" 
                value="5 Hours" 
                subtitle="of intense competition" 
              />
            </StaggerItem>
            <StaggerItem>
              <InfoCard 
                icon={<FaCode className="w-12 h-12 text-[#143C68]" />}
                title="Problems" 
                value="5-10" 
                subtitle="algorithmic challenges" 
              />
            </StaggerItem>
            <StaggerItem>
              <InfoCard 
                icon={<FaLaptopCode className="w-12 h-12 text-[#143C68]" />}
                title="Format" 
                value="Offline" 
                subtitle="pure skill, no internet" 
              />
            </StaggerItem>
          </div>
        </StaggerContainer>
        
        <FadeIn delay={0.8}>
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href="/registration"
              className="inline-flex items-center gap-2 sm:gap-3 bg-[#143C68] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              Register Now
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

