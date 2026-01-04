import Link from 'next/link';
import { TrophyIcon, PlayIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { FaRocket } from 'react-icons/fa';
import { FadeIn, ScaleIn } from '@/components/AnimatedSection';

export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-[#FDBC1D]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#143C68]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#143C68]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScaleIn>
          <div className="relative inline-block mb-12">
            <div className="w-32 h-32 bg-[#143C68] rounded-3xl flex items-center justify-center shadow-2xl">
              <TrophyIcon className="w-20 h-20 text-[#FDBC1D]" />
            </div>
          </div>
        </ScaleIn>
        
        <FadeIn delay={0.2}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#143C68] mb-6 sm:mb-8 drop-shadow-lg px-4">
            Ready to Make History?
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#143C68] mb-12 sm:mb-16 max-w-4xl mx-auto font-semibold leading-relaxed px-4">
            Join ICPC Sri Lanka 2025/2026 and represent your country on the world&apos;s biggest programming stage
          </p>
        </FadeIn>
        
        <ScaleIn delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto">
            <Link
              href="/registration"
              className="group relative inline-flex items-center gap-3 sm:gap-4 bg-[#143C68] text-white px-8 sm:px-12 md:px-16 py-4 sm:py-6 md:py-8 rounded-2xl sm:rounded-3xl text-lg sm:text-xl md:text-2xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 shadow-2xl hover:-translate-y-2 w-full sm:w-auto justify-center"
            >
              <FaRocket className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:animate-bounce" />
              <span>Register Your Team Now</span>
              <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 sm:gap-4 bg-white/20 backdrop-blur-md border border-white/30 text-[#143C68] px-8 sm:px-12 py-4 sm:py-6 rounded-2xl text-base sm:text-xl font-bold hover:bg-white hover:text-[#143C68] transition-all duration-300 shadow-xl hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Learn More</span>
            </Link>
          </div>
        </ScaleIn>
        
        <FadeIn delay={0.8}>
          <div className="mt-12 sm:mt-16 text-center px-4">
            <p className="text-base sm:text-lg text-[#143C68]/80 font-medium">
              Registration opens on <span className="font-bold text-[#143C68]">11th November 2025</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

