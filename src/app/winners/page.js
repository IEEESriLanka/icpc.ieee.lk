'use client';

import Image from 'next/image';
import { FaTrophy, FaMedal, FaGlobeAsia, FaGlobeAmericas } from 'react-icons/fa';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function WinnersPage() {
  const topResults = [
    { rank: 'Champions', team: 'Team Glory', university: 'SLIIT, Sri Lanka', image: '/winner/01_TeamGlory.jpg', medal: 'gold' },
    { rank: '1st Runners-Up', team: 'TLEMora', university: 'University of Moratuwa', image: '/winner/02_Telemora.jpg', medal: 'silver' },
    { rank: '2nd Runners-Up', team: 'AfterShock', university: 'East West University, Bangladesh', image: '/winner/03_Aftershock.jpg', medal: 'bronze' },
    { rank: '3rd Runners-Up', team: 'TechnoLogic', university: 'IIT Kharagpur, India', image: null, medal: null },
    { rank: '4th Runners-Up', team: 'RePeaTers', university: 'University of Kelaniya', image: '/winner/05_Repeaters.jpg', medal: null },
    { rank: '5th Runners-Up', team: 'Velosphere', university: 'University of Moratuwa', image: '/winner/Velosphere.jpg', medal: null },
    { rank: '6th Runners-Up', team: 'NovaCore', university: 'University of Peradeniya', image: '/winner/NovaCore.jpg', medal: null },
  ];

  const worldFinalsQualifier = {
    team: 'Team Glory',
    university: 'Sri Lanka Institute of Information Technology (SLIIT)',
    image: '/winner/01_TeamGlory.jpg',
    medal: null,
  };

  const asiaWestQualifiers = [
    { team: 'TLEMora', university: 'University of Moratuwa, Sri Lanka', image: '/winner/02_Telemora.jpg', medal: null },
    { team: 'AfterShock', university: 'East West University, Bangladesh', image: '/winner/03_Aftershock.jpg', medal: null },
    { team: 'RePeaTers', university: 'University of Kelaniya, Sri Lanka', image: '/winner/05_Repeaters.jpg', medal: null },
    { team: 'Velosphere', university: 'University of Moratuwa, Sri Lanka', image: '/winner/Velosphere.jpg', medal: null },
    { team: 'NovaCore', university: 'University of Peradeniya, Sri Lanka', image: '/winner/NovaCore.jpg', medal: null },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-[#143C68] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#FDBC1D]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-[#FDBC1D] text-[#143C68] px-4 py-2 rounded-full font-bold text-sm mb-6">
                <FaTrophy className="w-4 h-4" />
                CONTEST CONCLUDED
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
                ICPC Sri Lanka 2025/26
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FDBC1D] mb-4">
                Regional Onsite Round Results
              </h2>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="h-1 w-12 sm:w-16 bg-[#FDBC1D]/50 rounded-full"></div>
                <div className="h-2 w-16 sm:w-24 bg-[#FDBC1D] rounded-full"></div>
                <div className="h-1 w-12 sm:w-16 bg-[#FDBC1D]/50 rounded-full"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Top Results Section - Text Only */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#143C68] mb-4">Competition Results</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Congratulations to all participating teams for their outstanding performance!
              </p>
            </div>
          </FadeIn>

          {/* Results List */}
          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="space-y-4">
              {topResults.map((result, index) => (
                <StaggerItem key={index}>
                  <div className={`bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 ${
                    index === 0 ? 'border-[#FFD700] bg-gradient-to-r from-[#FFD700]/10 to-white' :
                    result.medal === 'silver' ? 'border-gray-400 bg-gradient-to-r from-gray-100 to-white' :
                    result.medal === 'bronze' ? 'border-amber-600 bg-gradient-to-r from-amber-50 to-white' :
                    'border-[#143C68]'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl ${
                        index === 0 ? 'bg-[#FFD700] text-[#143C68]' :
                        result.medal === 'silver' ? 'bg-gray-400 text-white' :
                        result.medal === 'bronze' ? 'bg-amber-600 text-white' :
                        'bg-[#143C68] text-white'
                      }`}>
                        {index === 0 ? <FaTrophy className="w-6 h-6 sm:w-8 sm:h-8" /> : index + 1}
                      </div>
                      <div className="flex-1">
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                          index === 0 ? 'bg-[#FFD700] text-[#143C68]' :
                          result.medal === 'silver' ? 'bg-gray-400 text-white' :
                          result.medal === 'bronze' ? 'bg-amber-600 text-white' :
                          'bg-[#143C68] text-white'
                        }`}>
                          {result.rank}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#143C68] mb-1">{result.team}</h3>
                        <p className="text-gray-600 font-medium">{result.university}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* World Finals Qualifier Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#143C68] to-[#1a4d7f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 bg-[#FDBC1D] text-[#143C68] px-4 py-2 rounded-full font-bold text-sm mb-6">
                <FaGlobeAmericas className="w-4 h-4" />
                WORLD FINALS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">World Finals Qualifier</h2>
              <p className="text-white/80 max-w-3xl mx-auto text-lg">
                ICPC Asia Peradeniya Gold Medal Winner
              </p>
            </div>
          </FadeIn>

          <ScaleIn>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {worldFinalsQualifier.image && (
                  <div className="relative w-full h-64 sm:h-80 md:h-96">
                    <Image
                      src={worldFinalsQualifier.image}
                      alt={worldFinalsQualifier.team}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[#FFD700] text-[#143C68] px-4 py-2 rounded-full font-bold flex items-center gap-2">
                      <FaMedal className="w-4 h-4" />
                      {worldFinalsQualifier.medal}
                    </div>
                  </div>
                )}
                <div className="p-6 sm:p-8 text-center bg-gradient-to-br from-[#FFD700]/20 to-[#FDBC1D]/10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#143C68] mb-2">{worldFinalsQualifier.team}</h3>
                  <p className="text-lg text-gray-700 font-semibold mb-4">{worldFinalsQualifier.university}</p>
                  <div className="bg-[#143C68] text-white px-6 py-3 rounded-xl inline-block">
                    <p className="font-bold">Successfully Qualified for the ICPC World Finals</p>
                    <p className="text-[#FDBC1D] font-semibold">To be held in the United Arab Emirates</p>
                  </div>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Asia West Regional Qualifiers Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 bg-[#143C68] text-white px-4 py-2 rounded-full font-bold text-sm mb-6">
                <FaGlobeAsia className="w-4 h-4" />
                ASIA WEST REGIONAL
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#143C68] mb-4">Asia West Regional Qualifiers</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                The following teams qualified to represent Sri Lanka at the ICPC Asia West Regional Contest in India!
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {asiaWestQualifiers.map((team, index) => (
              <StaggerItem key={index} className={
                index < 3 ? 'lg:col-span-2' :
                index === 3 ? 'lg:col-span-2 lg:col-start-2' :
                'lg:col-span-2'
              }>
                <div className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${
                  team.medal === 'Silver Medal Winner' ? 'border-gray-400' :
                  team.medal === 'Bronze Medal Winner' ? 'border-amber-600' : 'border-[#143C68]'
                } hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full`}>
                  {team.image && (
                    <div className="relative w-full h-48 sm:h-56">
                      <Image
                        src={team.image}
                        alt={team.team}
                        fill
                        className="object-cover"
                      />
                      {team.medal && (
                        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 ${
                          team.medal === 'Silver Medal Winner' ? 'bg-gray-400 text-white' : 'bg-amber-600 text-white'
                        }`}>
                          <FaMedal className="w-3 h-3" />
                          {team.medal}
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl font-bold text-[#143C68] mb-1">{team.team}</h3>
                    <p className="text-gray-600">{team.university}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-12 sm:py-16 bg-[#143C68]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Thank You to All Participants!
            </h2>
            <p className="text-white/80 text-lg mb-6">
              ICPC Sri Lanka 2025/26 was a historic success. We thank all teams, coaches, volunteers, and sponsors
              who made this event possible.
            </p>
            <p className="text-[#FDBC1D] font-bold text-xl">
              See you at the next ICPC!
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
