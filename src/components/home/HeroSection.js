'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import { FaRocket } from 'react-icons/fa';
import { FadeIn, ScaleIn, SlideInBottom, HoverScale } from '@/components/AnimatedSection';

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '54766698584_76f21665d5_k.jpg',
    '54765742742_4627f90b74_o.jpg',
    '54766489486_8a75aab91f_o.jpg',
    '54766880654_d0cf0b7e86_o.jpg',
    '54782043998_27cb7988d2_k.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen min-h-[700px] sm:min-h-[800px] md:min-h-[900px] overflow-hidden bg-white">
      {/* Background Images Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={`/gallery/${image}`}
              alt="ICPC Event"
              fill
              className="object-cover"
              priority={index === 0}
              quality={95}
            />
          </div>
        ))}
        {/* Professional Overlay */}
        <div className="absolute inset-0 bg-[#143C68]/90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#FDBC1D]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[#143C68]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-[#FDBC1D]/30 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">

            {/* ICPC Logo */}
            <FadeIn duration={0.8} delay={0.2}>
              <div className="mb-6 sm:mb-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#143C68] rounded-2xl sm:rounded-3xl blur-lg opacity-30 scale-110"></div>
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-[#FDBC1D]/20">
                    <Image
                      src="/logo.png"
                      alt="ICPC Logo"
                      width={80}
                      height={80}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <ScaleIn delay={0.4} duration={0.8}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 text-white tracking-tight">
                <span className="text-white">
                  ICPC Sri Lanka
                </span>
                <br />
                <span className="text-[#FDBC1D] drop-shadow-2xl">2026</span>
              </h1>
            </ScaleIn>

            <FadeIn delay={0.6} duration={0.8}>
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="h-1 w-12 sm:w-16 bg-[#FDBC1D]/50 rounded-full"></div>
                <div className="h-2 w-24 sm:w-32 bg-[#FDBC1D] rounded-full"></div>
                <div className="h-1 w-12 sm:w-16 bg-[#FDBC1D]/50 rounded-full"></div>
              </div>
            </FadeIn>

            <SlideInBottom delay={0.8} duration={0.8}>
              <p className="text-xl sm:text-2xl md:text-4xl mb-4 sm:mb-6 text-[#FDBC1D] font-bold tracking-wide drop-shadow-lg">
                Code Beyond Borders
              </p>
            </SlideInBottom>

            <SlideInBottom delay={1} duration={0.8}>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed text-white/95 font-medium px-4">
                <span className="text-[#FDBC1D] font-bold">Join the biggest stage of competitive programming representing Sri Lanka.</span>
              </p>
            </SlideInBottom>

            <SlideInBottom delay={1.2} duration={0.8}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
                <Link
                  href="/registration"
                  className="relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#FDBC1D] text-[#143C68] px-6 sm:px-10 py-3 sm:py-4 rounded-2xl text-lg sm:text-xl font-bold hover:bg-[#e6a91a] transition-all duration-300 shadow-2xl transform hover:scale-105 w-full sm:w-auto"
                >
                  <FaRocket className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Register Now</span>
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-2xl text-lg sm:text-xl font-bold hover:bg-white hover:text-[#143C68] transition-all duration-300 shadow-2xl transform hover:scale-105 w-full sm:w-auto"
                >
                  <PlayIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Learn More</span>
                </Link>
              </div>
            </SlideInBottom>

            {/* Quick Stats */}
            <FadeIn delay={1.4} duration={0.8}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto px-4">
                <HoverScale>
                  <div className="group bg-white/95 backdrop-blur-md border border-[#FDBC1D]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl text-center hover:bg-white transition-all duration-300">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143C68] mb-1 sm:mb-2 group-hover:text-[#FDBC1D] transition-colors">100+</div>
                    <div className="text-sm sm:text-base md:text-lg text-[#143C68] font-semibold">Countries</div>
                    <div className="text-xs text-gray-600 mt-1">Participating</div>
                  </div>
                </HoverScale>
                <HoverScale>
                  <div className="group bg-white/95 backdrop-blur-md border border-[#FDBC1D]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl text-center hover:bg-white transition-all duration-300">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143C68] mb-1 sm:mb-2 group-hover:text-[#FDBC1D] transition-colors">3,000+</div>
                    <div className="text-sm sm:text-base md:text-lg text-[#143C68] font-semibold">Universities</div>
                    <div className="text-xs text-gray-600 mt-1">Worldwide</div>
                  </div>
                </HoverScale>
                <HoverScale>
                  <div className="group bg-white/95 backdrop-blur-md border border-[#FDBC1D]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl text-center hover:bg-white transition-all duration-300">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143C68] mb-1 sm:mb-2 group-hover:text-[#FDBC1D] transition-colors">60,000+</div>
                    <div className="text-sm sm:text-base md:text-lg text-[#143C68] font-semibold">Students</div>
                    <div className="text-xs text-gray-600 mt-1">Competing</div>
                  </div>
                </HoverScale>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="animate-bounce">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

