'use client';

import { useState } from 'react';
import { FaTrophy, FaStar } from 'react-icons/fa';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const seasons = [
  { id: '2025-26', label: 'ICPC Sri Lanka Finalists 25/26' },
  { id: '2026-27', label: 'ICPC Sri Lanka Finalists 26/27' },
];

const finalists = {
  '2025-26': [
    { name: '3D-X', university: 'Chennai Institute of Technology' },
    { name: 'AfterShock', university: 'East West University' },
    { name: 'APX', university: 'Chennai Institute of Technology' },
    { name: 'Binary Titans', university: 'University of Vavuniya' },
    { name: 'Cache Crew', university: 'Chennai Institute of Technology' },
    { name: 'Ceymoss', university: 'Sri Lanka Institute of Information Technology' },
    { name: 'Vizhaiyor', university: 'University of Peradeniya' },
    { name: 'Velosphere', university: 'University of Moratuwa' },
    { name: 'DevSync', university: 'Sri Lanka Institute of Information Technology' },
    { name: 'Vanguard', university: 'University of Peradeniya' },
    { name: 'Exit code 0', university: 'Chennai Institute of Technology' },
    { name: 'TLEMora', university: 'University of Moratuwa' },
    { name: 'TechnoLogic', university: 'Indian Institute of Technology, Kharagpur' },
    { name: 'HelloWorld', university: 'University of Colombo' },
    { name: 'Infinite_coders', university: 'University of Peradeniya' },
    { name: 'LastMinuteLazies', university: 'University of Peradeniya' },
    { name: 'Logic Legion 1.0', university: 'Sri Lanka Institute of Information Technology' },
    { name: 'Nasakarar', university: 'University of Peradeniya' },
    { name: 'Team Axion', university: 'Wayamba University of Sri Lanka' },
    { name: 'NovaCore', university: 'University of Peradeniya' },
    { name: 'O (infinity)', university: 'Chennai Institute of Technology' },
    { name: 'Syntax09', university: 'University of Peradeniya' },
    { name: 'RandomCoders', university: 'Chennai Institute of Technology' },
    { name: 'RePeaTers', university: 'University of Kelaniya' },
    { name: 'Supreme coders', university: 'Chennai Institute of Technology' },
    { name: 'Stackstorm', university: 'University of Peradeniya' },
    { name: 'Syntax Warriors', university: 'Sri Lanka Institute of Information Technology' },
    { name: 'Team Xcode', university: 'Open University of Sri Lanka' },
    { name: 'Empyrean', university: 'Empyrean School' },
    { name: 'Team Glory', university: 'Sri Lanka Institute of Information Technology' },
  ],
  '2026-27': [
    { name: 'just_good', university: 'IIT Bombay' },
    { name: '2.6 hog riders', university: 'Indian Institute of Technology Kanpur' },
    { name: 'Knurdz Decoherence', university: 'University of Moratuwa' },
    { name: 'Apex Predictors', university: 'Sabaragamuwa University of Sri Lanka' },
    { name: 'Nocturnals', university: 'University of Peradeniya' },
    { name: '#exclude', university: 'Indian Institute of Technology Bombay' },
    { name: 'FourZeroFour', university: 'University of Moratuwa' },
    { name: 'NeuralStack', university: 'APIIT' },
    { name: 'XOR', university: 'University of Moratuwa' },
    { name: 'EchoBinary', university: 'University of Moratuwa' },
    { name: 'Arceus2004', university: 'University of Moratuwa' },
    { name: 'KodersX', university: 'University of Peradeniya' },
    { name: 'hehe', university: 'University of Colombo' },
    { name: 'trojanHex', university: 'University of Moratuwa' },
    { name: 'Velosphere', university: 'University of Moratuwa' },
    { name: 'Infinite', university: 'Ajeenkya DY Patil University' },
    { name: 'Kok', university: 'University of Moratuwa' },
    { name: 'Total Chaos Squad', university: 'University of Moratuwa' },
    { name: 'Zero Protocol', university: 'University of Peradeniya' },
    { name: 'Team Hackstreet Boys', university: 'University of Moratuwa' },
    { name: 'Mavericks', university: 'SLIIT' },
    { name: 'Yosync', university: 'University of Peradeniya' },
    { name: 'Runtime Rebels', university: 'South Eastern University of Sri Lanka' },
    { name: 'Potatato', university: 'Lanka Nippon BizTech Institute' },
    { name: 'PurgyXTeam', university: 'Lanka Nippon BizTech Institute' },
    { name: 'Badgers', university: 'University of Moratuwa' },
    { name: 'Git Happens', university: 'SLIIT Northern Uni' },
    { name: 'Hungry Beasts', university: 'The Open University of Sri Lanka' },
    { name: 'Syntax Samurai', university: 'The Open University of Sri Lanka' },
    { name: 'BLE', university: 'University of Moratuwa' },
    { name: 'Proof or Perish', university: 'Indian Institute of Technology Kharagpur' },
    { name: 'DecaMinds', university: 'Sabaragamuwa University of Sri Lanka' },
    { name: 'CodeMode', university: 'Sri Lanka Institute of Information Technology' },
    { name: 'Nasakarar', university: 'University of Peradeniya' },
    { name: 'TheWeak3', university: 'Faculty of Technology, University of Delhi' },
    { name: 'BinaryBeast', university: 'University of Jaffna' },
    { name: 'TLE on test 29', university: 'IIT Kanpur' },
    { name: 'Vizhaiyor', university: 'University of Peradeniya' },
    { name: 'Hackophiles', university: 'University of Peradeniya' },
    { name: 'Penguins', university: 'University of Peradeniya' },
    { name: 'NovaCore', university: 'University of Peradeniya' },
    { name: 'RePeaTers', university: 'University of Sri Jayewardenepura' },
    { name: 'SANDbox', university: 'University of Moratuwa' },
    { name: 'The Falcon\'s Xtreme', university: 'General Sir John Kotelawala Defence University' },
    { name: 'infinite_coders', university: 'University of Peradeniya' },
    { name: 'Bug slayers', university: 'University of Peradeniya' },
    { name: 'CodingDucks', university: 'University of Moratuwa' },
    { name: 'std::win', university: 'University of Moratuwa' },
    { name: 'Code Blooded', university: 'University of Colombo School of Computing' },
    { name: 'Atreides', university: 'Sri Lanka Institute of Information Technology' },
    { name: 'alt+f4', university: 'University of Peradeniya' },
    { name: 'Omega n', university: 'University of Peradeniya' },
    { name: 'CodeForge', university: 'University of Peradeniya' },
    { name: '404', university: 'ICBT Colombo' },
    { name: 'Heuristic Logicians', university: 'Management and Science Institute' },
    { name: 'Codefevers', university: 'University of Kelaniya' },
    { name: 'Qorvenz', university: 'University of Moratuwa' },
    { name: 'Amethyst', university: 'NIBM' },
    { name: 'KpolitX', university: 'LNBTI University' },
    { name: 'Error 404', university: 'SLIIT' },
  ]
};

export default function QualifiedTeams() {
  const [activeSeason, setActiveSeason] = useState('2026-27');
  const teams = finalists[activeSeason] || [];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <FadeIn>
        <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/gallery/54765652272_3b41b9d298_o.jpg')"
            }}
          ></div>
          <div className="absolute inset-0 bg-[#143C68]/90"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScaleIn>
              <div className="inline-block mb-8">
                <FaTrophy className="w-20 h-20 sm:w-24 sm:h-24 text-[#FDBC1D] mx-auto mb-4 drop-shadow-2xl" />
              </div>
            </ScaleIn>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white px-4">
              Qualified Teams
            </h1>
            <div className="h-2 w-20 sm:w-24 bg-[#FDBC1D] mx-auto mb-8 sm:mb-10 rounded-full"></div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#FDBC1D] font-semibold max-w-4xl mx-auto px-4">
              Top {teams.length} Teams from Preliminary Online Round
            </p>

            {/* Season Tabs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              {seasons.map((season) => (
                <button
                  key={season.id}
                  onClick={() => setActiveSeason(season.id)}
                  className={`px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg font-bold transition-all duration-300 shadow-lg cursor-pointer ${
                    activeSeason === season.id
                      ? 'bg-[#FDBC1D] text-[#143C68] shadow-xl'
                      : 'bg-white/10 text-white hover:bg-white/20 border-2 border-white/30'
                  }`}
                >
                  {season.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Teams List Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12">
              <StaggerContainer key={activeSeason}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {teams.map((team, index) => (
                    <StaggerItem key={`${activeSeason}-${team.name}-${index}`}>
                      <TeamCard
                        name={team.name}
                        university={team.university}
                      />
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>

              {/* Note Section */}
              <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t-2 border-gray-200">
                <p className="text-sm sm:text-base text-gray-600 text-center font-medium leading-relaxed">
                  <span className="font-bold text-[#143C68]">Note:</span> Kindly note that this list shows the top {teams.length} teams arranged by team number rather than contest rankings.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Congratulations Section */}
      <FadeIn delay={0.4}>
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-[#143C68] to-[#1e4a7a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScaleIn>
              <FaStar className="w-16 h-16 sm:w-20 sm:h-20 text-[#FDBC1D] mx-auto mb-6 sm:mb-8 animate-pulse" />
            </ScaleIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 px-4">
              Congratulations!
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-[#FDBC1D] font-bold mb-8 sm:mb-10 px-4">
              ON QUALIFYING FOR THE
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl text-white font-bold px-4">
              SRI LANKA REGIONAL ONSITE ROUND!
            </p>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}

function TeamCard({ name, university }) {
  return (
    <div className="bg-gradient-to-br from-[#FDBC1D]/10 to-[#FDBC1D]/5 border-2 border-[#143C68] rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg bg-[#143C68] text-white">
          <FaStar className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-bold text-[#143C68] mb-1 sm:mb-2 truncate">
            {name}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 font-medium leading-snug">
            {university}
          </p>
        </div>
      </div>
    </div>
  );
}
