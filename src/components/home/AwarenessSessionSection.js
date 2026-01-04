import Link from 'next/link';
import { PlayIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { FaYoutube, FaUsers, FaClipboardList, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { FadeIn, ScaleIn } from '@/components/AnimatedSection';

export default function AwarenessSessionSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-[#143C68] to-[#1e4a7a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FDBC1D]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FDBC1D]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 bg-[#FDBC1D]/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-[#FDBC1D]/30">
              <PlayIcon className="w-6 h-6 text-[#FDBC1D]" />
              <span className="text-white font-semibold">Watch & Learn</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8">
              ICPC Sri Lanka 2025/2026
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FDBC1D] mb-6 sm:mb-8">
              Awareness Session
            </h3>

            <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-10 justify-center">
              <div className="h-1 w-12 sm:w-16 bg-white/30 rounded-full"></div>
              <div className="h-2 w-20 sm:w-24 bg-[#FDBC1D] rounded-full"></div>
              <div className="h-1 w-12 sm:w-16 bg-white/30 rounded-full"></div>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium">
              From forming your team of three to mastering the registration guidelines,
              this session is your <span className="text-[#FDBC1D] font-bold">ultimate guide to ICPC Sri Lanka 2025/2026</span>.
              We walk you through the timeline, the mission, and the critical rules you must follow
              to qualify for the onsite regionals.
              <span className="text-[#FDBC1D] font-bold"> Get the details. Register your team. Make history!</span>
            </p>
          </div>
        </FadeIn>

        {/* Video Placeholder or Key Points */}
        <ScaleIn delay={0.2}>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl border border-white/20 mb-12">
            <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl mb-8 border-2 border-[#FDBC1D]/30">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/3Vmr0nfBACk"
                title="ICPC Sri Lanka 2025/2026 Awareness Session | How to Compete in the World's Biggest Programming Contest"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Key Topics Covered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#FDBC1D] rounded-xl flex items-center justify-center">
                    <FaUsers className="w-5 h-5 sm:w-6 sm:h-6 text-[#143C68]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base sm:text-lg mb-1">Team Formation</h4>
                    <p className="text-white/80 text-sm sm:text-base">How to form your team of three and find a coach</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#FDBC1D] rounded-xl flex items-center justify-center">
                    <FaClipboardList className="w-5 h-5 sm:w-6 sm:h-6 text-[#143C68]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base sm:text-lg mb-1">Registration Guidelines</h4>
                    <p className="text-white/80 text-sm sm:text-base">Step-by-step registration process and requirements</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#FDBC1D] rounded-xl flex items-center justify-center">
                    <FaCalendarAlt className="w-5 h-5 sm:w-6 sm:h-6 text-[#143C68]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base sm:text-lg mb-1">Timeline & Deadlines</h4>
                    <p className="text-white/80 text-sm sm:text-base">Important dates and contest schedule</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#FDBC1D] rounded-xl flex items-center justify-center">
                    <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#143C68]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base sm:text-lg mb-1">Qualification Rules</h4>
                    <p className="text-white/80 text-sm sm:text-base">Eligibility criteria and contest rules</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScaleIn>

        {/* CTA Buttons */}
        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link
              href="/registration"
              className="group inline-flex items-center gap-3 sm:gap-4 bg-[#FDBC1D] text-[#143C68] px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-bold hover:bg-[#e6a91a] transition-all duration-300 shadow-2xl hover:-translate-y-2 w-full sm:w-auto justify-center"
            >
              <span>Register Your Team Now</span>
              <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/timeline"
              className="group inline-flex items-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-bold hover:bg-white/20 transition-all duration-300 shadow-xl hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <span>View Timeline</span>
              <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
