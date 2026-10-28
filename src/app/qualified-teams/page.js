'use client';

import { useState } from 'react';
import { FaTrophy, FaStar } from 'react-icons/fa';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { finalists } from '@/data/finalistsData';

const seasons = [
  { id: '2025-26', label: 'ICPC Sri Lanka Finalists 25/26' },
  { id: '2026-27', label: 'ICPC Sri Lanka Finalists 26/27' },
];

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
