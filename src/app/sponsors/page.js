'use client';

import { 
  FaUsers, 
  FaTrophy, 
  FaBuilding, 
  FaGlobe, 
  FaLightbulb
} from 'react-icons/fa';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function Sponsors() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery/54766880654_d0cf0b7e86_o.jpg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-[#143C68]/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 text-center text-white px-4">
              Support Us!
            </h1>
            <div className="h-2 w-24 sm:w-32 bg-[#FDBC1D] mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center max-w-4xl mx-auto font-bold text-[#FDBC1D] px-4">
              Partner with us to shape the future
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Partnership Content Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
            {/* Hero Section */}
            <FadeIn>
              <div className="text-center mb-12 sm:mb-16">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#143C68] mb-4 sm:mb-6 px-4">
                  Are You Ready for a Global Collaboration?
                </h3>
                <div className="h-2 w-20 sm:w-24 bg-[#FDBC1D] mx-auto mb-6 sm:mb-8 rounded-full"></div>
              </div>
            </FadeIn>

            {/* Why Sponsor Section */}
            <FadeIn delay={0.2}>
              <div className="mb-12 sm:mb-16">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143C68] mb-4 sm:mb-6 text-center px-4">
                  Why Sponsor ICPC Sri Lanka 2026?
                </h4>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto px-4">
                  ICPC Sri Lanka is the premier programming competition in the country, attracting the brightest minds from top universities. 
                  Sponsoring this event gives your organization a strategic advantage in talent acquisition, brand positioning, and innovation leadership.
                </p>
              </div>
            </FadeIn>

            {/* Key Benefits Section */}
            <FadeIn delay={0.3}>
              <div className="mb-8 sm:mb-12">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143C68] mb-8 sm:mb-12 text-center px-4">
                  Key Benefits
                </h4>
                <div className="h-1 w-16 sm:w-20 bg-[#FDBC1D] mx-auto mb-8 sm:mb-12 rounded-full"></div>
                
                <StaggerContainer>
                  <div className="space-y-6 sm:space-y-8">
                    <StaggerItem>
                      <BenefitCard
                        icon={<FaGlobe className="w-10 h-10" />}
                        title="Be Part of a Global Legacy"
                        description="Take part in the most prestigious programming competition in the world and connect with a global community of top programmers and innovators."
                      />
                    </StaggerItem>
                    <StaggerItem>
                      <BenefitCard
                        icon={<FaLightbulb className="w-10 h-10" />}
                        title="Support Innovation"
                        description="Help students develop critical skills in algorithms, problem solving, and teamwork that prepare them for future technology challenges."
                      />
                    </StaggerItem>
                    <StaggerItem>
                      <BenefitCard
                        icon={<FaUsers className="w-10 h-10" />}
                        title="Engage Top Talent"
                        description="Interact with students who excel in problem solving, algorithms, and teamwork."
                      />
                    </StaggerItem>
                    <StaggerItem>
                      <BenefitCard
                        icon={<FaTrophy className="w-10 h-10" />}
                        title="Tailored Opportunities"
                        description="Your sponsorship can include workshops, sessions for participants, promotional materials, and other benefits based on your preferences."
                      />
                    </StaggerItem>
                    <StaggerItem>
                      <BenefitCard
                        icon={<FaBuilding className="w-10 h-10" />}
                        title="Boost Your Brand"
                        description="Show your commitment to innovation and education while gaining recognition among students, faculty, and the tech community."
                      />
                    </StaggerItem>
                  </div>
                </StaggerContainer>
              </div>
            </FadeIn>

            {/* CTA Section */}
            <FadeIn delay={0.5}>
              <div className="text-center pt-6 sm:pt-8 border-t-2 border-gray-200">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#143C68] mb-6 sm:mb-8 px-4">
                  Partner with ICPC Sri Lanka 2026 and shape the future of technology in Sri Lanka.
                </p>
                <a
                  href="mailto:icpc@soc.pdn.ac.lk"
                  className="inline-block bg-[#143C68] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
                >
                  Contact Us for Partnership
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6">
        <div className="flex-shrink-0 text-[#143C68] bg-[#FDBC1D]/20 p-3 sm:p-4 rounded-lg sm:rounded-xl">
          {icon}
        </div>
        <div>
          <h5 className="text-xl sm:text-2xl font-bold text-[#143C68] mb-2 sm:mb-3">{title}</h5>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

