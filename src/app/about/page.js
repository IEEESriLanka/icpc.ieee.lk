'use client';

import Link from 'next/link';
import { GlobeAltIcon, BriefcaseIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { FaChartLine } from 'react-icons/fa';
import { FadeIn, FadeInLeft, FadeInRight, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery/54755925319_a8c95c4d63_3k.jpg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-[#143C68]/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 text-center text-white">What is ICPC?</h1>
            <div className="h-2 w-24 sm:w-32 bg-[#FDBC1D] mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center max-w-4xl mx-auto font-bold text-[#FDBC1D] px-4">
              The Olympics of Programming
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16">
            <FadeIn>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 sm:mb-12 text-center font-semibold px-4">
                The International Collegiate Programming Contest (ICPC) isn&apos;t just another coding challenge; 
                it&apos;s <strong className="text-[#143C68]">the Olympics of programming</strong>, which is the oldest, largest, and most 
                prestigious competitive programming contest in the world.
              </p>
            </FadeIn>

            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
                <StaggerItem>
                  <StatBox number="100+" label="Countries" />
                </StaggerItem>
                <StaggerItem>
                  <StatBox number="3,000+" label="Universities" />
                </StaggerItem>
                <StaggerItem>
                  <StatBox number="60,000+" label="Students" />
                </StaggerItem>
              </div>
            </StaggerContainer>

            <ScaleIn delay={0.4}>
              <div className="bg-[#FDBC1D] rounded-2xl p-6 sm:p-8 md:p-12 my-8 sm:my-12 md:my-16 shadow-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143C68] mb-4 sm:mb-6 text-center">One Goal</h2>
                <p className="text-lg sm:text-xl md:text-2xl text-center text-[#143C68] font-semibold px-4">
                  Solving problems that push the limits of human creativity and teamwork
                </p>
              </div>
            </ScaleIn>

            <FadeInLeft delay={0.5}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-4">A Historic Moment for Sri Lanka</h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8 text-center font-semibold px-4">
                And in 2026, <strong className="text-[#143C68]">Sri Lanka joins the map</strong>. 
                This is your chance to be part of history.
              </p>
            </FadeInLeft>

            <FadeInRight delay={0.6}>
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-12 my-8 sm:my-12 shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#143C68] mb-6 sm:mb-8 text-center">The Path to Glory</h3>
                <ul className="space-y-4 sm:space-y-6">
                  <PathItem 
                    step="1" 
                    title="Sri Lanka National Contest" 
                    description="Compete against the best teams in Sri Lanka. The champion team advances directly to ICPC World Finals. Four runner-up teams advance to ICPC Asia West Regional."
                  />
                  <PathItem 
                    step="2" 
                    title="ICPC Asia West Regional" 
                    description="Four runner-up teams from the national contest represent Sri Lanka on the regional stage. Top teams from this regional advance to ICPC World Finals."
                  />
                  <PathItem 
                    step="3" 
                    title="ICPC World Finals" 
                    description="The national champion and top teams from Asia West Regional compete with the world's best programmers at the ultimate stage."
                  />
                </ul>
              </div>
            </FadeInRight>

            <FadeIn delay={0.7}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-10 mt-8 sm:mt-12 md:mt-16 text-center px-4">Why ICPC Matters</h2>
              <div className="h-2 w-20 sm:w-24 bg-[#FDBC1D] mx-auto mb-8 sm:mb-12 rounded-full"></div>
            </FadeIn>
            <StaggerContainer delay={0.8}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                <StaggerItem>
                  <FeatureBlock
                    title="Global Recognition"
                    description="ICPC is recognized by top universities and tech companies worldwide. Participating demonstrates exceptional problem-solving abilities and technical skills."
                    icon={<GlobeAltIcon className="w-12 h-12 text-[#143C68]" />}
                  />
                </StaggerItem>
                <StaggerItem>
                  <FeatureBlock
                    title="Career Opportunities"
                    description="Many ICPC alumni have gone on to work at leading tech companies like Google, Facebook, Microsoft, and more."
                    icon={<BriefcaseIcon className="w-12 h-12 text-[#143C68]" />}
                  />
                </StaggerItem>
                <StaggerItem>
                  <FeatureBlock
                    title="Skill Development"
                    description="ICPC challenges push you to master algorithms, data structures, and efficient problem-solving under pressure."
                    icon={<FaChartLine className="w-12 h-12 text-[#143C68]" />}
                  />
                </StaggerItem>
                <StaggerItem>
                  <FeatureBlock
                    title="Networking"
                    description="Connect with brilliant minds from across the country and region, building relationships that last a lifetime."
                    icon={<UserGroupIcon className="w-12 h-12 text-[#143C68]" />}
                  />
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-[#FDBC1D] text-[#143C68]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 px-4">Ready to Join the Competition?</h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 font-semibold px-4">
              Be part of the first ICPC contest in Sri Lanka&apos;s history
            </p>
          </FadeIn>
          <ScaleIn delay={0.3}>
            <Link
              href="/registration"
              className="inline-flex items-center gap-2 sm:gap-3 bg-[#143C68] text-white px-8 sm:px-12 py-4 sm:py-6 rounded-2xl sm:rounded-3xl text-lg sm:text-xl md:text-2xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 shadow-2xl hover:-translate-y-2"
            >
              Register Your Team
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScaleIn>
        </div>
      </section>
    </main>
  );
}

function StatBox({ number, label }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143C68] mb-3 sm:mb-4">{number}</div>
      <div className="text-gray-700 text-base sm:text-lg font-semibold">{label}</div>
    </div>
  );
}

function PathItem({ step, title, description }) {
  return (
    <li className="flex items-start space-x-3 sm:space-x-4 md:space-x-6 p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#143C68] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl">
        {step}
      </div>
      <div>
        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{title}</h4>
        <p className="text-gray-600 text-base sm:text-lg">{description}</p>
      </div>
    </li>
  );
}

function FeatureBlock({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="flex items-center justify-center mb-4 sm:mb-6">{icon}</div>
      <div className="text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-[#143C68] mb-3 sm:mb-4">{title}</h3>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
