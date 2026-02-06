'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTrophy, FaTimes } from 'react-icons/fa';

export default function WinnerPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-scale-in">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors shadow-lg"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-[#143C68] to-[#1a4d7f] p-6 sm:p-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FDBC1D] text-[#143C68] px-4 py-2 rounded-full font-bold text-sm mb-4">
            <FaTrophy className="w-4 h-4" />
            CONTEST CONCLUDED
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            ICPC Sri Lanka 2025/26
          </h2>
          <p className="text-[#FDBC1D] font-semibold text-lg">
            Regional Onsite Round Complete!
          </p>
        </div>

        {/* Winner Preview */}
        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <div className="bg-gradient-to-br from-[#FFD700]/20 to-[#FDBC1D]/10 border-2 border-[#FFD700] rounded-2xl p-4 mb-4">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4">
                <Image
                  src="/winner/01_TeamGlory.jpg"
                  alt="Team Glory - Champions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#FFD700] text-[#143C68] px-4 py-1 rounded-full font-bold text-sm inline-flex items-center gap-2 mb-2">
                <FaTrophy className="w-3 h-3" />
                CHAMPIONS
              </div>
              <h3 className="text-xl font-bold text-[#143C68]">Team Glory</h3>
              <p className="text-gray-600 text-sm">SLIIT, Sri Lanka</p>
            </div>
          </div>

          <p className="text-gray-600 text-center mb-6">
            View all results, World Finals qualifiers, and Asia West Regional qualifiers!
          </p>

          <Link
            href="/winners"
            className="block w-full bg-[#143C68] hover:bg-[#1a4d7f] text-white text-center py-4 rounded-xl font-bold text-lg transition-colors"
            onClick={() => setIsOpen(false)}
          >
            View Full Results
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="block w-full text-gray-500 hover:text-gray-700 text-center py-3 font-medium transition-colors mt-2"
          >
            Continue to Website
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
