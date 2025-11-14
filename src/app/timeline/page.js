'use client';

import Link from 'next/link';

import { 
  FaEdit, 
  FaLaptopCode, 
  FaTrophy, 
  FaGlobeAsia,
  FaCheckCircle
} from 'react-icons/fa';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function Timeline() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery/54761196795_4f95803daf_o.jpg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-[#143C68]/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 text-center text-white px-4">Timeline</h1>
            <div className="h-2 w-24 sm:w-32 bg-[#FDBC1D] mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center max-w-4xl mx-auto font-bold text-[#FDBC1D] px-4">
              Your journey to ICPC World Finals 2026
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-1 sm:w-2 bg-[#143C68] rounded-full"></div>

            {/* Timeline Items */}
            <StaggerContainer>
              <div className="space-y-12">
                <StaggerItem>
                  <TimelineEvent
                    date="11th November 2025"
                    title="Registrations Open"
                    description="Team registration opens for universities across Sri Lanka. Form your team of 3 students and find a faculty coach to register."
                    icon={<FaEdit className="w-8 h-8" />}
                    color="bg-[#143C68]"
                    actions={[
                      'Form your team (3 students)',
                      'Find a faculty coach',
                      'Register online'
                    ]}
                    registrationLink="/registration"
                    registrationText="Proceed to Online Registration"
                  />
                </StaggerItem>

                <StaggerItem>
                  <TimelineEvent
                    date="10th December 2025"
                    title="Registrations Close"
                    description="Registration deadline for teams. Make sure to complete your registration before this date to secure your spot in the competition."
                    icon={<FaCheckCircle className="w-8 h-8" />}
                    color="bg-[#143C68]"
                    actions={[
                      'Complete team registration',
                      'Submit all required documents',
                      'Confirm coach registration'
                    ]}
                  />
                </StaggerItem>

                <StaggerItem>
                  <TimelineEvent
                    date="December 14th 2025"
                    title="Preliminary Online Round"
                    description="An online preliminary round to help teams prepare and get familiar with the contest format."
                    icon={<FaLaptopCode className="w-8 h-8" />}
                    color="bg-[#143C68]"
                    actions={[
                      'Practice problems available',
                      'Get familiar with contest platform',
                      'Warm up with your team'
                    ]}
                    registrationLink="/registration"
                    registrationText="Proceed to Online Registration"
                  />
                </StaggerItem>

                <StaggerItem>
                  <TimelineEvent
                    date="04th January 2026"
                    title="Sri Lanka Onsite Regional"
                    description="The main national contest held onsite. This is where history will be made as Sri Lanka hosts its first-ever ICPC contest!"
                    icon={<FaTrophy className="w-8 h-8" />}
                    color="bg-[#FDBC1D]"
                    highlight={true}
                    actions={[
                      '5-hour onsite competition',
                      'Solve 5-10 programming problems',
                      'Compete for national championship',
                      'Champion team advances to World Finals',
                      'Five runner-up teams qualify for Asia West Regional'
                    ]}
                    registrationLink="/registration"
                    registrationText="Proceed to Onsite Registration"
                    registrationDisabled={true}
                  />
                </StaggerItem>

                <StaggerItem>
                  <TimelineEvent
                    date="March 2026"
                    title="ICPC Asia West Regional"
                    description="Five runner-up teams from Sri Lanka will represent the country at the ICPC Asia West Regional Contest."
                    icon={<FaGlobeAsia className="w-8 h-8" />}
                    color="bg-[#143C68]"
                    actions={[
                      'Represent Sri Lanka internationally',
                      'Compete with top teams from Asia West',
                      'Potential advancement to World Finals'
                    ]}
                  />
                </StaggerItem>

                <StaggerItem>
                  <TimelineEvent
                    date="August 2026"
                    title="ICPC World Finals"
                    description="The ultimate destination - compete with the world's best programming teams at the ICPC World Finals."
                    icon={<FaGlobeAsia className="w-8 h-8" />}
                    color="bg-[#143C68]"
                    actions={[
                      'Global competition',
                      'Meet teams from 100+ countries',
                      'Compete for world championship'
                    ]}
                  />
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Key Dates Summary */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8 px-4">Quick Reference</h2>
            <div className="h-2 w-20 sm:w-24 bg-[#FDBC1D] mx-auto mb-8 sm:mb-12 md:mb-16 rounded-full"></div>
          </FadeIn>
          <ScaleIn delay={0.2}>
            <div className="bg-[#FDBC1D] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
              <div className="space-y-4 sm:space-y-6">
                <QuickDate date="11th November 2025" event="Registrations Open" />
                <QuickDate date="10th December 2025" event="Registrations Close" />
                <QuickDate date="December 14th 2025" event="Preliminary Online Round" />
                <QuickDate date="04th January 2026" event="Sri Lanka Onsite Regional" highlight={true} />
                <QuickDate date="March 2026" event="ICPC Asia West" />
                <QuickDate date="August 2026" event="ICPC World Finals" />
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-[#143C68]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 px-4">Don&apos;t Miss Out!</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 font-semibold px-4">
              Registration opens on 11th November 2025. Be ready to register your team!
            </p>
          </FadeIn>
          <ScaleIn delay={0.3}>
            <Link
              href="/registration"
              className="inline-flex items-center gap-2 sm:gap-3 bg-[#FDBC1D] text-[#143C68] px-8 sm:px-12 py-4 sm:py-6 rounded-2xl sm:rounded-3xl text-lg sm:text-xl md:text-2xl font-bold hover:bg-[#e6a91a] transition-all duration-300 shadow-2xl hover:-translate-y-2"
            >
              Registration Details
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

function TimelineEvent({ date, title, description, icon, color, highlight, actions, registrationLink, registrationText, registrationDisabled }) {
  return (
    <div className="relative pl-12 sm:pl-16 md:pl-20 lg:pl-24">
      {/* Icon Circle */}
      <div className={`absolute left-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 ${color} rounded-full flex items-center justify-center text-white shadow-2xl`}>
        {icon}
      </div>

      {/* Content */}
      <div className={`${highlight ? 'bg-[#FDBC1D]' : 'bg-white'} rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 p-6 sm:p-8 md:p-10`}>
        <div className={`text-sm sm:text-base md:text-lg font-bold ${highlight ? 'text-[#143C68]' : 'text-gray-600'} mb-3 sm:mb-4 uppercase tracking-wide`}>{date}</div>
        <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${highlight ? 'text-[#143C68]' : 'text-gray-900'} mb-4 sm:mb-6`}>{title}</h3>
        <p className={`${highlight ? 'text-[#143C68]' : 'text-gray-700'} mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed`}>{description}</p>
        
        {actions && actions.length > 0 && (
          <ul className="space-y-3 sm:space-y-4 mb-6">
            {actions.map((action, actionIndex) => (
              <li key={`${title}-${actionIndex}`} className={`flex items-start space-x-2 sm:space-x-3 md:space-x-4 ${highlight ? 'text-[#143C68]' : 'text-gray-700'}`}>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FDBC1D] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base md:text-lg">{action}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Registration Button */}
        {registrationLink && (
          <div className="mt-6 pt-6 border-t-2 border-gray-200">
            {registrationDisabled ? (
              <button
                disabled
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold cursor-not-allowed opacity-60"
              >
                {registrationText}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            ) : (
              <Link
                href={registrationLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#143C68] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold hover:bg-[#1e4a7a] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                {registrationText}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function QuickDate({ date, event, highlight }) {
  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 p-4 sm:p-6 ${highlight ? 'bg-white border-l-4 sm:border-l-8 border-[#143C68]' : 'bg-[#143C68]/10'} rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300`}>
      <span className={`font-bold text-base sm:text-lg md:text-xl ${highlight ? 'text-[#143C68]' : 'text-[#143C68]'}`}>{date}</span>
      <span className={`text-base sm:text-lg md:text-xl ${highlight ? 'text-gray-900' : 'text-[#143C68]'} font-semibold`}>{event}</span>
    </div>
  );
}
