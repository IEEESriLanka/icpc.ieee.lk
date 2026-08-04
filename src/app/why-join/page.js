'use client';

import { FaTrophy, FaLightbulb, FaStar } from 'react-icons/fa';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function WhyJoin() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery/54756036640_e17fd09ba2_k.jpg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-[#143C68]/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 text-center text-white px-4">Why You Should Join?</h1>
            <div className="h-2 w-24 sm:w-32 bg-[#FDBC1D] mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center max-w-4xl mx-auto font-bold text-[#FDBC1D] px-4">
              Transform your skills, career, and future
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              <StaggerItem>
                <BenefitCard
                  icon={<FaTrophy className="w-20 h-20" />}
                  title="Be Part of a Global Legacy"
                  description="Be part of the most prestigious programming competition in the world."
                  bgColor="bg-[#143C68]"
                />
              </StaggerItem>
              <StaggerItem>
                <BenefitCard
                  icon={<FaStar className="w-20 h-20" />}
                  title="Compete with the Best"
                  description="Compete with the sharpest minds in Sri Lanka."
                  bgColor="bg-[#FDBC1D]"
                />
              </StaggerItem>
              <StaggerItem>
                <BenefitCard
                  icon={<FaLightbulb className="w-20 h-20" />}
                  title="Build Lasting Skills"
                  description="Build skills in algorithms, problem solving, and teamwork that last a lifetime."
                  bgColor="bg-[#143C68]"
                />
              </StaggerItem>
              <StaggerItem>
                <BenefitCard
                  icon={<FaTrophy className="w-20 h-20" />}
                  title="Earn Recognition"
                  description="Earn national recognition and a ticket to the ICPC Asia West Regional."
                  bgColor="bg-[#FDBC1D]"
                />
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8 px-4">What ICPC Alumni Say</h2>
            <div className="h-2 w-20 sm:w-24 bg-[#FDBC1D] mx-auto mb-8 sm:mb-12 md:mb-16 rounded-full"></div>
          </FadeIn>
          <ScaleIn delay={0.2}>
            <div className="bg-[#FDBC1D] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl">
              <blockquote className="text-lg sm:text-xl md:text-2xl text-[#143C68] font-semibold italic mb-6 sm:mb-8 text-center px-4">
                &quot;ICPC was the most transformative experience of my university years. It taught me how to think algorithmically, work under pressure, and collaborate effectively. These skills have been invaluable throughout my career.&quot;
              </blockquote>
              <p className="text-[#143C68] font-bold text-base sm:text-lg md:text-xl text-center">— ICPC Alumni & Software Engineer</p>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-[#143C68]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 px-4">Ready to Start Your Journey?</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 font-semibold px-4">
              Don&apos;t miss this opportunity to compete, learn, and grow
            </p>
          </FadeIn>
          <ScaleIn delay={0.3}>
            <button
              disabled
              className="inline-flex items-center gap-2 sm:gap-3 bg-gray-400 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-2xl sm:rounded-3xl text-lg sm:text-xl md:text-2xl font-bold cursor-not-allowed opacity-60"
            >
              Register Your Team Now
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </ScaleIn>
        </div>
      </section>
    </main>
  );
}

function BenefitCard({ icon, title, description, bgColor }) {
  return (
    <div className={`${bgColor} text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2`}>
      <div className="mb-4 sm:mb-6 md:mb-8 flex justify-center">{icon}</div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center px-2">{title}</h3>
      <p className="text-white text-opacity-95 text-base sm:text-lg text-center leading-relaxed px-2">{description}</p>
    </div>
  );
}

