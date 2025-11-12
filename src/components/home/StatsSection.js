import { TrophyIcon, GlobeAltIcon, AcademicCapIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { ModernStatCard } from './StatCard';

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#143C68]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FDBC1D]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#143C68]/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
              <TrophyIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#143C68]" />
              <span className="text-sm sm:text-base text-[#143C68] font-semibold">Global Recognition</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#143C68] mb-6 sm:mb-8">
              The Global Stage
            </h2>
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <div className="h-1 w-12 sm:w-16 md:w-20 bg-[#FDBC1D]/50 rounded-full"></div>
              <div className="h-2 w-24 sm:w-32 md:w-40 bg-[#FDBC1D] rounded-full"></div>
              <div className="h-1 w-12 sm:w-16 md:w-20 bg-[#FDBC1D]/50 rounded-full"></div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-semibold max-w-3xl mx-auto px-4">
              The world&apos;s premier programming competition that brings together the brightest minds
            </p>
          </div>
        </FadeIn>
        
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
            <StaggerItem>
              <ModernStatCard 
                icon={<GlobeAltIcon className="w-20 h-20" />}
                number="100+" 
                label="Countries Participating"
                description="From every continent"
                color="bg-[#143C68]"
              />
            </StaggerItem>
            <StaggerItem>
              <ModernStatCard 
                icon={<AcademicCapIcon className="w-20 h-20" />}
                number="3,000+" 
                label="Universities Worldwide"
                description="Top institutions"
                color="bg-[#FDBC1D]"
              />
            </StaggerItem>
            <StaggerItem>
              <ModernStatCard 
                icon={<UserGroupIcon className="w-20 h-20" />}
                number="60,000+" 
                label="Student Competitors"
                description="Future innovators"
                color="bg-[#143C68]"
              />
            </StaggerItem>
          </div>
        </StaggerContainer>
        
        <ScaleIn delay={0.5}>
          <div className="text-center">
            <div className="bg-[#143C68] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 text-white">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FDBC1D] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl">
                    <TrophyIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[#143C68]" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">One Goal</h3>
                  <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                    Push the limits of human creativity and teamwork
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}

