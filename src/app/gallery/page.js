'use client';

import { FadeIn, ScaleIn } from '@/components/AnimatedSection';

const EVENT_ALBUM_URL = 'https://drive.google.com/drive/folders/1m0BICEznbYXErQ8njB8lrKbIP63ttUHt?usp=drive_link';

export default function Gallery() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <FadeIn>
        <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden bg-[#143C68]">
          <div className="absolute inset-0 bg-[#143C68]/90"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 text-center text-white px-4">Gallery</h1>
            <div className="h-2 w-24 sm:w-32 bg-[#FDBC1D] mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center max-w-4xl mx-auto font-bold text-[#FDBC1D] px-4">
              Moments from ICPC Sri Lanka 2025/2026
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Album Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center bg-white rounded-2xl sm:rounded-3xl shadow-xl p-8 sm:p-10 md:p-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">ICPC 2025/26 Official Event Album</h2>
              <div className="h-2 w-20 sm:w-24 bg-[#FDBC1D] mx-auto mb-6 sm:mb-8 rounded-full"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-[#143C68] font-semibold px-4 max-w-3xl mx-auto">
                Explore ICPC Sri Lanka 2025/26 event photo album.
              </p>
              <a
                href={EVENT_ALBUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-8 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-[#143C68] text-white font-semibold text-base sm:text-lg hover:bg-[#1e4a7a] transition-colors duration-300"
              >
                Open Event Album
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Call to Action */}
      <FadeIn>
        <section className="py-12 sm:py-16 md:py-24 bg-[#FDBC1D]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#143C68] mb-6 sm:mb-8 px-4">Be Part of ICPC Sri Lanka 2026/2027</h2>
            <ScaleIn delay={0.3}>
              <a
                href="https://forms.gle/aT5KV7kHCW5QkDrF9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#143C68] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg md:text-xl hover:bg-[#1e4a7a] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl w-full sm:w-auto text-center"
              >
                Register Your Team
              </a>
            </ScaleIn>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
