'use client';

import Image from 'next/image';
import { useState, useMemo } from 'react';
import {
  FaTrophy,
  FaMedal,
  FaGlobeAsia,
  FaGlobeAmericas,
  FaHourglassHalf,
  FaLaptopCode,
  FaStar,
  FaSearch,
  FaCheckCircle,
} from 'react-icons/fa';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { finalists } from '@/data/finalistsData';

// ---------------------------------------------------------
// DATA: ONSITE RESULTS
// ---------------------------------------------------------
const onsite2025TopResults = [
  { rank: 'Champions', team: 'Team Glory', university: 'SLIIT, Sri Lanka', image: '/winner/01_TeamGlory.jpg', medal: 'gold' },
  { rank: '1st Runners-Up', team: 'TLEMora', university: 'University of Moratuwa', image: '/winner/02_Telemora.jpg', medal: 'silver' },
  { rank: '2nd Runners-Up', team: 'AfterShock', university: 'East West University, Bangladesh', image: '/winner/03_Aftershock.jpg', medal: 'bronze' },
  { rank: '3rd Runners-Up', team: 'TechnoLogic', university: 'IIT Kharagpur, India', image: null, medal: null },
  { rank: '4th Runners-Up', team: 'RePeaTers', university: 'University of Kelaniya', image: '/winner/05_Repeaters.jpg', medal: null },
  { rank: '5th Runners-Up', team: 'Velosphere', university: 'University of Moratuwa', image: '/winner/Velosphere.jpg', medal: null },
  { rank: '6th Runners-Up', team: 'NovaCore', university: 'University of Peradeniya', image: '/winner/NovaCore.jpg', medal: null },
];

const onsite2025WorldFinalsQualifier = {
  team: 'Team Glory',
  university: 'Sri Lanka Institute of Information Technology (SLIIT)',
  image: '/winner/01_TeamGlory.jpg',
  medal: null,
};

const onsite2025AsiaWestQualifiers = [
  { team: 'TLEMora', university: 'University of Moratuwa, Sri Lanka', image: '/winner/02_Telemora.jpg', medal: null },
  { team: 'AfterShock', university: 'East West University, Bangladesh', image: '/winner/03_Aftershock.jpg', medal: null },
  { team: 'RePeaTers', university: 'University of Kelaniya, Sri Lanka', image: '/winner/05_Repeaters.jpg', medal: null },
  { team: 'Velosphere', university: 'University of Moratuwa, Sri Lanka', image: '/winner/Velosphere.jpg', medal: null },
  { team: 'NovaCore', university: 'University of Peradeniya, Sri Lanka', image: '/winner/NovaCore.jpg', medal: null },
];

const seasonsList = [
  { id: 'all', label: 'All Seasons' },
  { id: '2026-27', label: 'Season 2026/27 (Latest)' },
  { id: '2025-26', label: 'Season 2025/26' },
];

// ---------------------------------------------------------
// MAIN WINNERS PAGE
// ---------------------------------------------------------
export default function WinnersPage() {
  const [activeRound, setActiveRound] = useState('onsite'); // 'onsite' | 'online'
  const [selectedSeason, setSelectedSeason] = useState('all'); // 'all' | '2026-27' | '2025-26'

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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
                ICPC Sri Lanka
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FDBC1D] mb-4">
                Winners &amp; Results
              </h2>

              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8">
                <div className="h-1 w-12 sm:w-16 bg-[#FDBC1D]/50 rounded-full"></div>
                <div className="h-2 w-16 sm:w-24 bg-[#FDBC1D] rounded-full"></div>
                <div className="h-1 w-12 sm:w-16 bg-[#FDBC1D]/50 rounded-full"></div>
              </div>

              {/* Main Tabs: Online & Onsite */}
              <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 p-1.5 sm:p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
                <button
                  type="button"
                  onClick={() => setActiveRound('onsite')}
                  className={`px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer ${
                    activeRound === 'onsite'
                      ? 'bg-[#FDBC1D] text-[#143C68] shadow-xl scale-[1.02]'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <FaTrophy className={`w-5 h-5 ${activeRound === 'onsite' ? 'text-[#143C68]' : 'text-[#FDBC1D]'}`} />
                  Regional Onsite Round
                </button>

                <button
                  type="button"
                  onClick={() => setActiveRound('online')}
                  className={`px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer ${
                    activeRound === 'online'
                      ? 'bg-[#FDBC1D] text-[#143C68] shadow-xl scale-[1.02]'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <FaLaptopCode className={`w-5 h-5 ${activeRound === 'online' ? 'text-[#143C68]' : 'text-[#FDBC1D]'}`} />
                  Preliminary Online Round
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Season Quick-Filter Bar */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-16 sm:top-20 z-20 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm sm:text-base font-semibold text-gray-700 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#143C68]"></span>
              <span>Showing:</span>
              <span className="text-[#143C68] font-bold">
                {activeRound === 'onsite' ? 'Regional Onsite Results' : 'Preliminary Online Qualifiers'}
              </span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <span className="text-xs sm:text-sm font-medium text-gray-500 whitespace-nowrap mr-1">
                Filter Season:
              </span>
              {seasonsList.map((season) => (
                <button
                  key={season.id}
                  type="button"
                  onClick={() => setSelectedSeason(season.id)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    selectedSeason === season.id
                      ? 'bg-[#143C68] text-[#FDBC1D] shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {season.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <div className="py-8 sm:py-12">
        {activeRound === 'onsite' ? (
          <OnsiteRoundResults selectedSeason={selectedSeason} />
        ) : (
          <OnlineRoundResults selectedSeason={selectedSeason} />
        )}
      </div>
    </main>
  );
}

// ---------------------------------------------------------
// ONSITE ROUND COMPONENT (LISTS SEASONS, MOST RECENT FIRST)
// ---------------------------------------------------------
function OnsiteRoundResults({ selectedSeason }) {
  const show2026 = selectedSeason === 'all' || selectedSeason === '2026-27';
  const show2025 = selectedSeason === 'all' || selectedSeason === '2025-26';

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Season 2026-27 (Most Recent at Top) */}
      {show2026 && (
        <section id="onsite-2026-27" className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10">
              <FadeIn>
                <div className="inline-flex items-center gap-2 bg-[#143C68] text-[#FDBC1D] px-5 py-2.5 rounded-full font-bold text-sm shadow-md">
                  <FaTrophy className="w-4 h-4" />
                  ICPC SRI LANKA 2026/27 &mdash; REGIONAL ONSITE ROUND
                </div>
              </FadeIn>
            </div>

            <ScaleIn>
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 text-center border-t-8 border-[#FDBC1D]">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#143C68] text-[#FDBC1D] mb-6 shadow-lg">
                    <FaHourglassHalf className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143C68] mb-4">
                    Results Coming Soon
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
                    The ICPC Sri Lanka 2026/27 Regional Onsite Round is yet to be held. Winners will be
                    published here as soon as the contest concludes.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-semibold border border-amber-200">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                    Contest Scheduled &bull; Stay Tuned
                  </div>
                </div>
              </div>
            </ScaleIn>
          </div>
        </section>
      )}

      {/* Season 2025-26 */}
      {show2025 && (
        <section id="onsite-2025-26" className="relative">
          {/* Season Badge Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-[#FDBC1D] text-[#143C68] px-5 py-2.5 rounded-full font-bold text-sm sm:text-base shadow-md">
                <FaTrophy className="w-4 h-4 sm:w-5 sm:h-5" />
                ICPC SRI LANKA 2025/26 &mdash; CONTEST CONCLUDED
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143C68] mt-4 mb-2">
                2025/26 Regional Onsite Winners
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                Official final standings and qualifiers from the inaugural ICPC Sri Lanka Regional Contest.
              </p>
            </FadeIn>
          </div>

          {/* Top Results Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
            <FadeIn>
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#143C68] mb-2">
                  Competition Results
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Congratulations to all participating teams for their outstanding performance!
                </p>
              </div>
            </FadeIn>

            <div className="max-w-4xl mx-auto">
              <StaggerContainer className="space-y-4">
                {onsite2025TopResults.map((result, index) => (
                  <StaggerItem key={index}>
                    <div
                      className={`bg-white rounded-2xl shadow-lg p-5 sm:p-7 border-l-4 transition-all duration-300 hover:shadow-xl ${
                        index === 0
                          ? 'border-[#FFD700] bg-gradient-to-r from-[#FFD700]/10 to-white'
                          : result.medal === 'silver'
                          ? 'border-gray-400 bg-gradient-to-r from-gray-100 to-white'
                          : result.medal === 'bronze'
                          ? 'border-amber-600 bg-gradient-to-r from-amber-50 to-white'
                          : 'border-[#143C68]'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl shadow-md ${
                            index === 0
                              ? 'bg-[#FFD700] text-[#143C68]'
                              : result.medal === 'silver'
                              ? 'bg-gray-400 text-white'
                              : result.medal === 'bronze'
                              ? 'bg-amber-600 text-white'
                              : 'bg-[#143C68] text-white'
                          }`}
                        >
                          {index === 0 ? <FaTrophy className="w-6 h-6 sm:w-8 sm:h-8" /> : index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-1 sm:mb-2 ${
                              index === 0
                                ? 'bg-[#FFD700] text-[#143C68]'
                                : result.medal === 'silver'
                                ? 'bg-gray-400 text-white'
                                : result.medal === 'bronze'
                                ? 'bg-amber-600 text-white'
                                : 'bg-[#143C68] text-white'
                            }`}
                          >
                            {result.rank}
                          </div>
                          <h4 className="text-xl sm:text-2xl font-bold text-[#143C68] mb-0.5 truncate">
                            {result.team}
                          </h4>
                          <p className="text-gray-600 font-medium text-sm sm:text-base">
                            {result.university}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          {/* World Finals Qualifier Section */}
          <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#143C68] to-[#1a4d7f] mb-16 sm:mb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn>
                <div className="text-center mb-10 sm:mb-14">
                  <div className="inline-flex items-center gap-2 bg-[#FDBC1D] text-[#143C68] px-4 py-2 rounded-full font-bold text-sm mb-4 sm:mb-6 shadow-md">
                    <FaGlobeAmericas className="w-4 h-4" />
                    WORLD FINALS
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                    World Finals Qualifier
                  </h3>
                  <p className="text-white/80 max-w-3xl mx-auto text-base sm:text-lg">
                    ICPC Asia Peradeniya Gold Medal Winner
                  </p>
                </div>
              </FadeIn>

              <ScaleIn>
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    {onsite2025WorldFinalsQualifier.image && (
                      <div className="relative w-full h-64 sm:h-80 md:h-96">
                        <Image
                          src={onsite2025WorldFinalsQualifier.image}
                          alt={onsite2025WorldFinalsQualifier.team}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-[#FFD700] text-[#143C68] px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg">
                          <FaMedal className="w-4 h-4" />
                          Gold Medal Winner
                        </div>
                      </div>
                    )}
                    <div className="p-6 sm:p-8 text-center bg-gradient-to-br from-[#FFD700]/20 to-[#FDBC1D]/10">
                      <h4 className="text-2xl sm:text-3xl font-bold text-[#143C68] mb-2">
                        {onsite2025WorldFinalsQualifier.team}
                      </h4>
                      <p className="text-lg text-gray-700 font-semibold mb-4">
                        {onsite2025WorldFinalsQualifier.university}
                      </p>
                      <div className="bg-[#143C68] text-white px-6 py-3.5 rounded-xl inline-block shadow-md">
                        <p className="font-bold text-base sm:text-lg">
                          Successfully Qualified for the ICPC World Finals
                        </p>
                        <p className="text-[#FDBC1D] font-semibold text-sm sm:text-base">
                          To be held in the United Arab Emirates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            </div>
          </div>

          {/* Asia West Regional Qualifiers Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
            <FadeIn>
              <div className="text-center mb-10 sm:mb-14">
                <div className="inline-flex items-center gap-2 bg-[#143C68] text-white px-4 py-2 rounded-full font-bold text-sm mb-4 sm:mb-6 shadow-md">
                  <FaGlobeAsia className="w-4 h-4" />
                  ASIA WEST REGIONAL
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#143C68] mb-3">
                  Asia West Regional Qualifiers
                </h3>
                <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
                  The following teams qualified to represent Sri Lanka at the ICPC Asia West Regional Contest in India!
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {onsite2025AsiaWestQualifiers.map((team, index) => (
                <StaggerItem
                  key={index}
                  className={
                    index < 3
                      ? 'lg:col-span-2'
                      : index === 3
                      ? 'lg:col-span-2 lg:col-start-2'
                      : 'lg:col-span-2'
                  }
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#143C68] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    {team.image && (
                      <div className="relative w-full h-48 sm:h-56">
                        <Image
                          src={team.image}
                          alt={team.team}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-center">
                      <h4 className="text-xl font-bold text-[#143C68] mb-1">{team.team}</h4>
                      <p className="text-gray-600 text-sm sm:text-base">{team.university}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Thank You Section */}
          <div className="py-12 sm:py-16 bg-[#143C68]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <FadeIn>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Thank You to All Participants!
                </h3>
                <p className="text-white/80 text-base sm:text-lg mb-6 leading-relaxed">
                  ICPC Sri Lanka 2025/26 was a historic success. We thank all teams, coaches, volunteers,
                  and sponsors who made this event possible.
                </p>
                <p className="text-[#FDBC1D] font-bold text-xl sm:text-2xl">
                  See you at the next ICPC!
                </p>
              </FadeIn>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

// ---------------------------------------------------------
// ONLINE ROUND COMPONENT (LISTS SEASONS, MOST RECENT FIRST)
// ---------------------------------------------------------
function OnlineRoundResults({ selectedSeason }) {
  const show2026 = selectedSeason === 'all' || selectedSeason === '2026-27';
  const show2025 = selectedSeason === 'all' || selectedSeason === '2025-26';

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Season 2026-27 (Most Recent at Top) */}
      {show2026 && (
        <OnlineSeasonSection
          seasonId="2026-27"
          seasonLabel="2026/27"
          badgeText="ICPC SRI LANKA 2026/27 &mdash; PRELIMINARY ONLINE ROUND CONCLUDED"
          teams={finalists['2026-27'] || []}
          isLatest={true}
        />
      )}

      {/* Season 2025-26 */}
      {show2025 && (
        <OnlineSeasonSection
          seasonId="2025-26"
          seasonLabel="2025/26"
          badgeText="ICPC SRI LANKA 2025/26 &mdash; PRELIMINARY ONLINE ROUND CONCLUDED"
          teams={finalists['2025-26'] || []}
          isLatest={false}
        />
      )}
    </div>
  );
}

function OnlineSeasonSection({ seasonId, seasonLabel, badgeText, teams, isLatest }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTeams = useMemo(() => {
    if (!searchQuery.trim()) return teams;
    const query = searchQuery.toLowerCase();
    return teams.filter(
      (t) =>
        t.name.toLowerCase().includes(query) ||
        t.university.toLowerCase().includes(query)
    );
  }, [teams, searchQuery]);

  return (
    <section id={`online-${seasonId}`} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-[#143C68] text-[#FDBC1D] px-5 py-2.5 rounded-full font-bold text-sm shadow-md mb-4">
            <FaLaptopCode className="w-4 h-4" />
            <span dangerouslySetInnerHTML={{ __html: badgeText }} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143C68] mb-3">
            {seasonLabel} Qualified Teams
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Top {teams.length} teams selected from the Preliminary Online Round advancing to the Regional Onsite Round.
          </p>
        </FadeIn>
      </div>

      {/* Search and Stats Bar */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm sm:text-base text-gray-700 font-semibold">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#143C68] text-[#FDBC1D] font-bold text-sm">
              {teams.length}
            </span>
            <span>Total Qualified Finalists</span>
          </div>

          <div className="relative w-full sm:w-72 md:w-80">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search team or university..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#143C68] text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-100">
          {filteredTeams.length > 0 ? (
            <StaggerContainer key={`${seasonId}-${searchQuery}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {filteredTeams.map((team, index) => (
                  <StaggerItem key={`${seasonId}-${team.name}-${index}`}>
                    <div className="bg-gradient-to-br from-[#FDBC1D]/10 via-[#FDBC1D]/5 to-transparent border-2 border-[#143C68] rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-3.5 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-base sm:text-lg shadow-md bg-[#143C68] text-white">
                        <FaStar className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDBC1D]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="text-base sm:text-lg font-bold text-[#143C68] truncate">
                            {team.name}
                          </h4>
                          <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full shrink-0">
                            #{index + 1}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 font-medium leading-snug">
                          {team.university}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-base">
                No teams found matching &ldquo;{searchQuery}&rdquo;.
              </p>
            </div>
          )}

          {/* Note Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs sm:text-sm text-gray-600 text-center font-medium leading-relaxed">
              <span className="font-bold text-[#143C68]">Note:</span> Kindly note that this list shows the top {teams.length} teams arranged by team number rather than contest rankings.
            </p>
          </div>
        </div>
      </div>

      {/* Congratulations Card */}
      {isLatest && (
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <ScaleIn>
            <div className="bg-gradient-to-r from-[#143C68] to-[#1e4a7a] rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="inline-block p-3 rounded-full bg-white/10 mb-4 backdrop-blur-sm">
                <FaCheckCircle className="w-10 h-10 text-[#FDBC1D]" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                Congratulations to All Finalists!
              </h3>
              <p className="text-[#FDBC1D] font-bold text-lg sm:text-xl mb-2">
                QUALIFIED FOR THE SRI LANKA REGIONAL ONSITE ROUND
              </p>
              <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
                We look forward to seeing your problem-solving prowess and teamwork at the Regional Finals!
              </p>
            </div>
          </ScaleIn>
        </div>
      )}
    </section>
  );
}
