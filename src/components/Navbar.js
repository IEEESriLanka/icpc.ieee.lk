'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-[#FDBC1D]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-4 group">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-[#143C68] rounded-xl sm:rounded-2xl p-2 sm:p-3 group-hover:bg-[#FDBC1D] transition-all duration-300 shadow-lg">
              <Image
                src="/logo.png"
                alt="ICPC Sri Lanka Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain filter brightness-0 invert group-hover:filter-none group-hover:brightness-100"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-black group-hover:text-[#143C68] transition-colors">ICPC Sri Lanka</span>
              <span className="text-sm sm:text-base md:text-lg font-bold text-[#FDBC1D]">2025/2026</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/why-join">Why Join</NavLink>
            <NavLink href="/timeline">Timeline</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/winners">Winners</NavLink>
            <NavLink href="/staff">Staff</NavLink>
            <NavLink href="/sponsors">Support Us</NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/winners"
              className="inline-flex items-center gap-2 bg-[#FDBC1D] text-[#143C68] px-6 py-3 rounded-2xl text-sm font-bold hover:bg-[#143C68] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              View Results
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-[#143C68] text-white hover:bg-[#FDBC1D] hover:text-[#143C68] transition-all duration-300 shadow-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            ) : (
              <Bars3Icon className="w-6 h-6 sm:w-7 sm:h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t-4 border-[#FDBC1D] py-4 sm:py-6 shadow-lg">
            <div className="space-y-2 sm:space-y-3">
              <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="/why-join" onClick={() => setIsMenuOpen(false)}>Why Join</MobileNavLink>
              <MobileNavLink href="/timeline" onClick={() => setIsMenuOpen(false)}>Timeline</MobileNavLink>
              <MobileNavLink href="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</MobileNavLink>
              <MobileNavLink href="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</MobileNavLink>
              <MobileNavLink href="/winners" onClick={() => setIsMenuOpen(false)}>Winners</MobileNavLink>
              <MobileNavLink href="/staff" onClick={() => setIsMenuOpen(false)}>Staff</MobileNavLink>
              <MobileNavLink href="/sponsors" onClick={() => setIsMenuOpen(false)}>Support Us</MobileNavLink>
              <div className="px-4 pt-4 sm:pt-6">
                <Link
                  href="/winners"
                  className="block bg-[#FDBC1D] text-[#143C68] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-center hover:bg-[#143C68] hover:text-white transition-all duration-300 shadow-lg text-base sm:text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View Results
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="px-4 py-3 rounded-xl text-black font-semibold hover:bg-[#143C68] hover:text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-6 py-4 mx-4 rounded-xl text-black font-semibold hover:bg-[#143C68] hover:text-white transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-[#FDBC1D]"
    >
      {children}
    </Link>
  );
}
