import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaWhatsapp, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaHandshake, FaYoutube } from 'react-icons/fa';
import { UserIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-[#143C68] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-5">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl p-2 sm:p-3 shadow-lg">
                <Image
                  src="/logo.png"
                  alt="ICPC Sri Lanka Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  ICPC <span className="text-[#FDBC1D]">Sri Lanka</span>
                </h3>
                <div className="text-base sm:text-lg font-bold text-[#FDBC1D]">2026</div>
                <div className="text-xs text-white/90 font-medium">Code Beyond Borders</div>
              </div>
            </div>
            <p className="text-white/95 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              The International Collegiate Programming Contest is coming to Sri Lanka for the first time in 2026. 
              Join us in making history as we compete on the world&apos;s biggest programming stage.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              <SocialLink
                href="https://www.facebook.com/icpclk"
                icon={<FaFacebook className="w-5 h-5" />}
                label="Facebook"
              />
              <SocialLink
                href="https://whatsapp.com/channel/0029VbB9vyIHbFV7qVYULT41"
                icon={<FaWhatsapp className="w-5 h-5" />}
                label="WhatsApp Channel"
              />
              <SocialLink
                href="https://www.linkedin.com/company/icpclk"
                icon={<FaLinkedin className="w-5 h-5" />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://www.youtube.com/@ICPCslk"
                icon={<FaYoutube className="w-5 h-5" />}
                label="YouTube"
              />
              <SocialLink
                href="mailto:icpc@soc.pdn.ac.lk"
                icon={<FaEnvelope className="w-5 h-5" />}
                label="Email"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5 text-[#FDBC1D]">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About ICPC</FooterLink>
              <FooterLink href="/why-join">Why Join</FooterLink>
              <FooterLink href="/timeline">Timeline</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/gallery">Gallery</FooterLink>
              <FooterLink href="/staff">Staff</FooterLink>
              <FooterLink href="/sponsors">Support Us</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5 text-[#FDBC1D]">
              Resources
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              <FooterLink href="/registration">Registration</FooterLink>
              <li>
                <a
                  href="https://icpc.global/regionals/finder/Asia-Peradeniya-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FDBC1D] transition-colors flex items-center gap-2 font-semibold text-sm sm:text-base group"
                >
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  ICPC Global
                </a>
              </li>
              <li>
                <a
                  href="https://codex.ieee.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FDBC1D] transition-colors flex items-center gap-2 font-semibold text-sm sm:text-base group"
                >
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  IEEE CodeX
                </a>
              </li>
              <li>
                <a
                  href="mailto:icpc@soc.pdn.ac.lk"
                  className="text-white hover:text-[#FDBC1D] transition-colors flex items-center gap-2 font-semibold text-sm sm:text-base group"
                >
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Organizers Section */}
        <div className="border-t-2 border-[#FDBC1D] pt-6 sm:pt-8 mb-6 sm:mb-8">
          {/* Director and Organized by */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#FDBC1D] p-2 sm:p-3 rounded-lg">
                  <UserIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#143C68]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#143C68] uppercase tracking-wider mb-1">Director</div>
                  <a 
                    href="http://people.ce.pdn.ac.lk/staff/academic/upul/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-black hover:text-[#143C68] transition-colors"
                  >
                    Dr. Upul Jayasinghe
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#FDBC1D] p-2 sm:p-3 rounded-lg">
                  <BuildingOfficeIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#143C68]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#143C68] uppercase tracking-wider mb-1">Organized by</div>
                  <a 
                    href="https://codex.ieee.lk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-black hover:text-[#143C68] transition-colors leading-tight block"
                  >
                    IEEE CodeX Sri Lanka
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Supported by - Full width below */}
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-lg">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="bg-[#FDBC1D] p-2 sm:p-3 rounded-lg">
                <FaHandshake className="w-6 h-6 sm:w-7 sm:h-7 text-[#143C68]" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-[#143C68] uppercase tracking-wider mb-2">Supported by</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <a 
                    href="https://eees-uop.edu.lk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#143C68] transition-colors block group"
                  >
                    <div className="text-sm sm:text-base font-bold text-black leading-snug">
                      Electrical & Electronic Engineering Society (EEES)
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">
                      University of Peradeniya
                    </div>
                  </a>
                  <a 
                    href="https://aces.ce.pdn.ac.lk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#143C68] transition-colors block group"
                  >
                    <div className="text-sm sm:text-base font-bold text-black leading-snug">
                      Association of Computer Engineering Students (ACES)
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">
                      University of Peradeniya
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-[#FDBC1D] pt-5 sm:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="text-center md:text-left mb-3 md:mb-0">
              <p className="text-white font-bold text-sm sm:text-base">&copy; {new Date().getFullYear()} ICPC Sri Lanka. All rights reserved.</p>
              <p className="text-[#FDBC1D] font-bold text-base sm:text-lg mt-1">Code Beyond Borders</p>
            </div>
            <div className="flex items-center space-x-2 text-white bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg">
              <FaMapMarkerAlt className="w-4 h-4 text-[#FDBC1D]" />
              <span className="font-bold text-sm sm:text-base">Sri Lanka</span>
            </div>
          </div>
          <div className="text-center border-t border-white/20 pt-4">
            <p className="text-white/90 text-xs sm:text-sm">
              Developed by{' '}
              <a
                href="https://www.hiruna.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FDBC1D] font-bold transition-colors inline-flex items-center gap-1 group"
              >
                Hiruna Gallage
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white flex items-center justify-center hover:bg-[#FDBC1D] text-[#143C68] hover:text-[#143C68] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-white hover:text-[#FDBC1D] transition-colors font-semibold text-sm sm:text-base flex items-center gap-2 group"
      >
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        {children}
      </Link>
    </li>
  );
}
