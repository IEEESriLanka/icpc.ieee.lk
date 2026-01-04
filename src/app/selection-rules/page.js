'use client';

import Link from 'next/link';
import { FaTrophy, FaUniversity, FaMedal, FaGlobeAsia, FaAward, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function SelectionRules() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <FadeIn>
        <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/gallery/54763867697_572b983ab2_k.jpg')"
            }}
          ></div>
          <div className="absolute inset-0 bg-[#143C68]/90"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 text-white px-4">
              Selection &amp; Advancement Rules
            </h1>
            <div className="h-2 w-24 sm:w-32 bg-[#FDBC1D] mx-auto mb-8 sm:mb-10 rounded-full"></div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#FDBC1D] font-semibold max-w-4xl mx-auto px-4">
              Clear guidelines for team selection and advancement to higher ICPC levels
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Onsite Selection Process */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Onsite Selection Process
              </h2>
              <div className="h-2 w-24 bg-[#FDBC1D] mx-auto mb-8 rounded-full"></div>
              <p className="text-xl sm:text-2xl text-[#143C68] font-semibold">Online → Onsite</p>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-8">
            <StaggerItem>
              <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border-2 border-transparent hover:border-[#143C68] transition-all duration-300">
                <div className="flex items-start gap-4 sm:gap-6 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#143C68] rounded-2xl flex items-center justify-center">
                    <FaTrophy className="w-6 h-6 sm:w-8 sm:h-8 text-[#FDBC1D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                      Primary Selection Criterion
                    </h3>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Teams will be ranked strictly based on their <span className="font-bold text-[#143C68]">online round scores and official tie-breaking rules</span>. Only teams that exceed the minimum qualification score threshold will be considered for onsite selection.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border-2 border-transparent hover:border-[#143C68] transition-all duration-300">
                <div className="flex items-start gap-4 sm:gap-6 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#143C68] rounded-2xl flex items-center justify-center">
                    <FaUniversity className="w-6 h-6 sm:w-8 sm:h-8 text-[#FDBC1D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                      Institutional Representation Constraint
                    </h3>
                  </div>
                </div>
                <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p>
                    A maximum of <span className="font-bold text-[#143C68]">N teams per university</span> (where N ≈ 7) may be invited to the onsite round. The final value of N will be announced before onsite selection begins.
                  </p>
                  <p className="font-semibold">If more than N teams from the same university fall within the cutoff:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="text-[#FDBC1D] font-bold text-xl mt-1">•</span>
                      <span>Only the top-ranked N teams from that university will be selected</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FDBC1D] font-bold text-xl mt-1">•</span>
                      <span>Remaining slots will be allocated to the next highest-ranked teams from other universities</span>
                    </li>
                  </ul>
                  <p className="font-bold text-[#143C68]">
                    This rule applies uniformly to all universities with no exceptions.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Advancement from Regional */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Advancement from Sri Lanka Regional to Higher ICPC Levels
              </h2>
              <div className="h-2 w-24 bg-[#FDBC1D] mx-auto mb-8 rounded-full"></div>
              <p className="text-xl sm:text-2xl text-[#143C68] font-semibold">
                A total of <span className="text-[#FDBC1D]">5 teams</span> will advance to the next ICPC level based on final onsite rankings.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-8">
            {/* Champion Team */}
            <StaggerItem>
              <div className="bg-gradient-to-br from-[#FDBC1D] to-[#e6a91a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
                <div className="flex items-start gap-4 sm:gap-6 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#143C68] rounded-2xl flex items-center justify-center">
                    <FaTrophy className="w-6 h-6 sm:w-8 sm:h-8 text-[#FDBC1D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#143C68] mb-3">
                      Champion Team (1st Place)
                    </h3>
                  </div>
                </div>
                <div className="space-y-4 text-base sm:text-lg text-[#143C68] leading-relaxed">
                  <p>
                    The champion team advances <span className="font-bold">directly to the ICPC World Finals</span>, subject to global eligibility confirmation.
                  </p>
                  <div className="bg-white/30 rounded-xl p-4 border-2 border-[#143C68]">
                    <p className="font-bold flex items-start gap-2">
                      <FaExclamationTriangle className="flex-shrink-0 mt-1" />
                      <span>Important: No other team from the Champion Team&apos;s university will be selected for ICPC Asia West.</span>
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Runners-Up */}
            <StaggerItem>
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border-2 border-[#143C68]">
                <div className="flex items-start gap-4 sm:gap-6 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#143C68] rounded-2xl flex items-center justify-center">
                    <FaGlobeAsia className="w-6 h-6 sm:w-8 sm:h-8 text-[#FDBC1D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                      Runners-Up – Asia West Advancement
                    </h3>
                  </div>
                </div>
                <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p>
                    The next <span className="font-bold text-[#143C68]">4 highest-ranked teams</span> will advance to ICPC Asia West, subject to the following constraint:
                  </p>
                  <div className="bg-[#FDBC1D]/10 rounded-xl p-4 border-2 border-[#FDBC1D]">
                    <p className="font-bold text-[#143C68]">
                      Maximum 2 teams per university among these 4 teams.
                    </p>
                  </div>
                  <p className="font-semibold">If more than 2 teams from the same university qualify:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="text-[#FDBC1D] font-bold text-xl mt-1">•</span>
                      <span>Only the top 2 ranked teams from that university will be selected</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FDBC1D] font-bold text-xl mt-1">•</span>
                      <span>Remaining slots go to the next highest-ranked eligible teams from other universities</span>
                    </li>
                  </ul>
                  <p className="font-bold text-[#143C68]">
                    This rule applies equally to all universities with no nationality-based distinction.
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* Merit Principle */}
            <StaggerItem>
              <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border-2 border-transparent hover:border-[#143C68] transition-all duration-300">
                <div className="flex items-start gap-4 sm:gap-6 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#143C68] rounded-2xl flex items-center justify-center">
                    <FaCheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-[#FDBC1D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                      Merit Principle
                    </h3>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Advancement is <span className="font-bold text-[#143C68]">strictly performance-based</span>. Institutional representation limits are applied only after ranking to ensure balanced representation across universities.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Special Recognitions */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Special Recognitions (Honorary Awards)
              </h2>
              <div className="h-2 w-24 bg-[#FDBC1D] mx-auto mb-8 rounded-full"></div>
            </div>
          </FadeIn>

          <ScaleIn delay={0.2}>
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                The following special recognitions are <span className="font-bold text-[#143C68]">honorary awards only</span> and do not grant automatic ICPC advancement:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 border-2 border-[#FDBC1D] shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FaAward className="w-6 h-6 text-[#FDBC1D]" />
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">First Team to Solve a Problem</h4>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-[#FDBC1D] shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FaMedal className="w-6 h-6 text-[#FDBC1D]" />
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">Best All-Women Team</h4>
                  </div>
                </div>
              </div>

              <div className="bg-[#143C68]/10 rounded-xl p-6 border-2 border-[#143C68]">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  These awards <span className="font-bold text-[#143C68]">do not grant ICPC advancement</span> unless the team independently qualifies by ranking, consistent with official ICPC rules. All honorary awards will be posted on this website.
                </p>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Final Notice */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-[#143C68] to-[#1e4a7a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 border-2 border-white/30 text-center">
              <FaExclamationTriangle className="w-16 h-16 text-[#FDBC1D] mx-auto mb-6" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                Important Notice
              </h3>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
                All selection and advancement decisions made by the ICPC Sri Lanka Regional judging panel are <span className="text-[#FDBC1D] font-bold">final and binding</span>. These decisions cannot be challenged or appealed.
              </p>
              <p className="text-base sm:text-lg text-white/80">
                For questions or clarifications, please contact the ICPC Sri Lanka Regional organizing committee.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:icpc@soc.pdn.ac.lk"
                  className="inline-block bg-[#FDBC1D] text-[#143C68] px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold hover:bg-[#e6a91a] transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  Contact Organizing Committee
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <FadeIn>
        <section className="py-12 sm:py-16 md:py-24 bg-[#FDBC1D]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#143C68] mb-6 sm:mb-8 px-4">
              Ready to Compete?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#143C68] font-semibold mb-8 sm:mb-10 md:mb-12 px-4">
              Register your team and prepare to make history!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="/registration"
                className="inline-block bg-[#143C68] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              >
                Register Now
              </Link>
              <Link
                href="/faq"
                className="inline-block bg-white text-[#143C68] px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
