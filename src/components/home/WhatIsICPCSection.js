import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { FaCode, FaChartLine, FaAward, FaRocket, FaTrophy, FaMedal, FaStar } from 'react-icons/fa';
import { FadeInLeft, FadeInRight } from '@/components/AnimatedSection';
import { ModernFeaturePoint } from './FeaturePoint';
import { ModernPathStep } from './PathStep';

export default function WhatIsICPCSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#FDBC1D]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#143C68]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
          <FadeInLeft>
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-3 bg-[#FDBC1D]/10 rounded-full px-6 py-3 mb-6">
                  <FaCode className="w-6 h-6 text-[#FDBC1D]" />
                  <span className="text-[#143C68] font-semibold">The Olympics of Programming</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#143C68] mb-6 sm:mb-8">
                  What is ICPC?
                </h2>
                <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                  <div className="h-1 w-12 sm:w-16 bg-[#FDBC1D]/50 rounded-full"></div>
                  <div className="h-2 w-20 sm:w-24 bg-[#FDBC1D] rounded-full"></div>
                  <div className="h-1 w-12 sm:w-16 bg-[#FDBC1D]/50 rounded-full"></div>
                </div>
              </div>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                The International Collegiate Programming Contest (ICPC) isn&apos;t just another coding challenge; 
                it&apos;s <span className="text-[#143C68] font-bold">the Olympics of programming</span> — the oldest, largest, and most prestigious 
                competitive programming contest in the world.
              </p>
              
              <div className="space-y-6">
                <ModernFeaturePoint 
                  icon={<FaCode className="w-10 h-10" />}
                  text="World's most prestigious programming competition"
                  color="bg-[#143C68]"
                />
                <ModernFeaturePoint 
                  icon={<FaChartLine className="w-10 h-10" />}
                  text="Recognized by top tech companies globally"
                  color="bg-[#FDBC1D]"
                />
                <ModernFeaturePoint 
                  icon={<FaAward className="w-10 h-10" />}
                  text="Gateway to ICPC World Finals"
                  color="bg-[#143C68]"
                />
              </div>
              
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 sm:gap-4 bg-[#143C68] text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 shadow-2xl transform hover:scale-105 w-full sm:w-auto justify-center"
              >
                <span>Learn More About ICPC</span>
                <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInLeft>
          
          <FadeInRight>
            <div className="bg-[#143C68] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FDBC1D] rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <FaRocket className="w-6 h-6 sm:w-8 sm:h-8 text-[#143C68]" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Sri Lanka Joins the Map</h3>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 text-white/95 leading-relaxed">
                In 2026, <span className="text-[#FDBC1D] font-bold text-xl sm:text-2xl">Sri Lanka makes history</span> as 
                we host our first-ever ICPC contest. This is your chance to be a pioneer.
              </p>
              
              <div className="space-y-4">
                {/* Step 1: National Contest */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#FDBC1D] rounded-lg flex items-center justify-center">
                      <span className="text-[#143C68] font-bold">1</span>
                    </div>
                    <div className="flex items-center gap-2 flex-1">
                      <FaTrophy className="w-5 h-5 text-[#FDBC1D]" />
                      <p className="text-base sm:text-lg font-semibold text-white">Compete in Sri Lanka National Contest</p>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-[#FDBC1D] to-transparent"></div>
                </div>
                
                {/* Step 2: Two Paths Branch */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 items-stretch">
                  {/* Path A: Champion */}
                  <div className="bg-gradient-to-br from-[#FDBC1D]/20 to-[#FDBC1D]/5 backdrop-blur-sm rounded-xl p-4 border-2 border-[#FDBC1D]/40 shadow-lg flex flex-col">
                    <div className="flex flex-col items-center justify-center gap-2 text-center flex-grow">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#FDBC1D] rounded-lg flex items-center justify-center shadow-md">
                        <FaStar className="w-4 h-4 text-[#143C68]" />
                      </div>
                      <div>
                        <p className="font-bold text-[#FDBC1D] text-base sm:text-lg leading-tight">🏆 Champion Team</p>
                        <p className="text-white/90 text-xs sm:text-sm">Direct qualification</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Path B: Runner-ups */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg flex flex-col">
                    <div className="flex flex-col items-center text-center mb-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                        <FaMedal className="w-4 h-4 text-[#FDBC1D]" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-base sm:text-lg">🥈 Four Runner-Up Teams</p>
                        <p className="text-white/80 text-xs sm:text-sm">Via regional contest</p>
                      </div>
                    </div>
                    <div className="flex justify-center my-2">
                      <div className="w-0.5 h-4 bg-white/30"></div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10 text-center">
                      <p className="text-white/90 font-medium text-sm sm:text-base">🌏 Asia West Regional</p>
                    </div>
                  </div>
                </div>
                
                {/* Converging Arrows */}
                <div className="flex justify-center items-start gap-8 sm:gap-12">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-[#FDBC1D] to-[#FDBC1D]/30"></div>
                  <div className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-white/10"></div>
                </div>
                
                {/* Final Destination - World Finals */}
                <div className="text-center">
                  <div className="inline-block bg-gradient-to-r from-[#FDBC1D] to-[#e6a91a] rounded-2xl px-6 py-4 shadow-2xl border-2 border-[#FDBC1D]/50">
                    <div className="flex items-center gap-3 justify-center">
                      <FaTrophy className="w-6 h-6 text-[#143C68]" />
                      <span className="text-[#143C68] text-lg sm:text-xl font-bold">World Finals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
}

