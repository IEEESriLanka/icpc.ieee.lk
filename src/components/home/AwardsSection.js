'use client';

import { FaTrophy, FaAward, FaCertificate, FaMoneyBillWave, FaHotel, FaGift, FaUniversity } from 'react-icons/fa';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function AwardsSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#FDBC1D]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#143C68]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16">

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#143C68] mb-6">
              Awards & Prizes
            </h2>
            <div className="flex items-center gap-2 sm:gap-4 mb-6 justify-center">
              <div className="h-1 w-12 sm:w-16 bg-[#FDBC1D]/50 rounded-full"></div>
              <div className="h-2 w-20 sm:w-24 bg-[#FDBC1D] rounded-full"></div>
              <div className="h-1 w-12 sm:w-16 bg-[#FDBC1D]/50 rounded-full"></div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Celebrating excellence in competitive programming
            </p>
          </div>
        </FadeIn>

        {/* Main Awards Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {/* Certificate + Trophy */}
            <StaggerItem>
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#FDBC1D]/20 hover:border-[#FDBC1D]/40 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FDBC1D] to-[#e6a91a] rounded-xl flex items-center justify-center shadow-lg">
                    <FaTrophy className="w-7 h-7 text-[#143C68]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#143C68]">Trophies & Certificates</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaCertificate className="w-5 h-5 text-[#FDBC1D] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base sm:text-lg">
                      Official ICPC certificates for all participating teams
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaTrophy className="w-5 h-5 text-[#FDBC1D] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base sm:text-lg">
                      Prestigious trophies for top-performing teams
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Cash Prizes */}
            <StaggerItem>
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#143C68]/20 hover:border-[#143C68]/40 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#143C68] to-[#1e4a7a] rounded-xl flex items-center justify-center shadow-lg">
                    <FaMoneyBillWave className="w-7 h-7 text-[#FDBC1D]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#143C68]">Cash Prizes</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaGift className="w-5 h-5 text-[#143C68] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base sm:text-lg">
                      Exciting cash prizes for winning teams
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaAward className="w-5 h-5 text-[#143C68] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base sm:text-lg">
                      Additional awards and recognitions
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>

        {/* Award Distribution Policy */}
        <FadeIn delay={0.3}>
          <div className="bg-gradient-to-br from-[#143C68]/5 to-[#FDBC1D]/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg mb-12 border-2 border-[#143C68]/20">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#143C68] rounded-lg flex items-center justify-center">
                <FaUniversity className="w-6 h-6 text-[#FDBC1D]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#143C68] mb-4">
                  Award Distribution Policy
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                  <strong className="text-[#143C68]">Champion and four runner-up teams will be recognized.</strong>
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
                  Allowed for awards and selections:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#143C68] rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-[#FDBC1D] font-bold text-sm">1</span>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg flex-1">
                      No additional teams from the Champion Team&apos;s university
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#FDBC1D] rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-[#143C68] font-bold text-sm">2</span>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg flex-1">
                      Four runner-up slots allocated by performance, any university
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Accommodations and Subsistence */}
        <FadeIn delay={0.4}>
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border-2 border-[#FDBC1D]/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <FaHotel className="w-8 h-8 text-[#143C68]" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143C68]">
                  Accommodations and Subsistence
                </h3>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#FDBC1D]/10 to-[#FDBC1D]/5 rounded-xl p-6 border border-[#FDBC1D]/20">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#FDBC1D] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#143C68] font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#143C68] mb-2">Asia West Regional</h4>
                    <p className="text-gray-700 text-base">
                      Teams advancing to the Asia West Regional will have their <strong>accommodations and subsistence covered</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#143C68]/10 to-[#143C68]/5 rounded-xl p-6 border border-[#143C68]/20">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#143C68] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#FDBC1D] font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#143C68] mb-2">World Finals</h4>
                    <p className="text-gray-700 text-base">
                      Teams qualifying for World Finals will have their <strong>accommodations and subsistence covered</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-gray-600 text-sm sm:text-base text-center">
                <strong className="text-[#143C68]">Note:</strong> Accommodations and subsistence include lodging and meals for team members advancing to regional and world finals competitions
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

