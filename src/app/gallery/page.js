'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const EVENT_ALBUM_URL = 'https://drive.google.com/drive/folders/1m0BICEznbYXErQ8njB8lrKbIP63ttUHt?usp=drive_link';

const GALLERY_PHOTOS = [
  'y25_12.jpg',
  'y25_28.jpg',
  'y25_27.jpg',
  'y25_1.jpg',
  'y25_2.jpg',
  'y25_3.jpg',
  'y25_4.jpg',
  'y25_5.jpg',
  'y25_6.jpg',
  'y25_7.jpg',
  'y25_8.jpg',
  'y25_9.jpg',
  'y25_10.jpg',
  'y25_11.jpg',
  'y25_13.jpg',
  'y25_14.jpg',
  'y25_15.jpg',
  'y25_16.jpg',
  'y25_17.jpg',
  'y25_18.jpg',
  'y25_19.jpg',
  'y25_20.jpg',
  'y25_21.jpg',
  'y25_22.jpg',
  'y25_23.jpg',
  'y25_24.jpg',
  'y25_25.jpg',
  'y25_26.jpg',
  '54755925319_a8c95c4d63_3k.jpg',
  '54756036640_e17fd09ba2_k.jpg',
  '54760506656_c153ce78b8_3k.jpg',
  '54761196795_4f95803daf_o.jpg',
  '54762888219_af794c220a_k.jpg',
  '54763867697_572b983ab2_k.jpg',
  '54765652272_3b41b9d298_o.jpg',
  '54765742742_4627f90b74_o.jpg',
  '54766489486_8a75aab91f_o.jpg',
  '54766698584_76f21665d5_k.jpg',
  '54766880654_d0cf0b7e86_o.jpg',
  '54766883303_5b0dc3c134_o.jpg',
  '54782043998_27cb7988d2_k.jpg'
].map((file, index) => ({
  src: `/gallery/${file}`,
  alt: `ICPC Sri Lanka 2025/26 event photo ${index + 1}`
}));

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);
  const showPrev = useCallback(
    () => setSelectedIndex((i) => (i === null ? i : (i - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length)),
    []
  );
  const showNext = useCallback(
    () => setSelectedIndex((i) => (i === null ? i : (i + 1) % GALLERY_PHOTOS.length)),
    []
  );

  useEffect(() => {
    if (selectedIndex === null) return;
    function handleKeyDown(e) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, closeLightbox, showPrev, showNext]);

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

      {/* Photo Grid Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">ICPC 2025/26 Gallery</h2>
              <div className="h-2 w-20 sm:w-24 bg-[#FDBC1D] mx-auto mb-6 sm:mb-8 rounded-full"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-[#143C68] font-semibold px-4 max-w-3xl mx-auto">
                A look back at the ICPC Sri Lanka 2025/26 season.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {GALLERY_PHOTOS.map((photo, index) => (
                <StaggerItem key={photo.src}>
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className="group relative block w-full aspect-square overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    aria-label={`View ${photo.alt} in full screen`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#143C68]/0 group-hover:bg-[#143C68]/40 transition-colors duration-300 flex items-center justify-center">
                      <FaExpand className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </button>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Full Album Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center bg-white rounded-2xl sm:rounded-3xl shadow-xl p-8 sm:p-10 md:p-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">ICPC 2025/26 Official Event Album</h2>
              <div className="h-2 w-20 sm:w-24 bg-[#FDBC1D] mx-auto mb-6 sm:mb-8 rounded-full"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-[#143C68] font-semibold px-4 max-w-3xl mx-auto">
                Browse the complete ICPC Sri Lanka 2025/26 event photo album for the full-resolution collection.
              </p>
              <a
                href={EVENT_ALBUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-8 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-[#143C68] text-white font-semibold text-base sm:text-lg hover:bg-[#1e4a7a] transition-colors duration-300"
              >
                Open Full Album
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-[#FDBC1D] transition-colors z-10"
            aria-label="Close"
          >
            <FaTimes className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="absolute left-2 sm:left-6 text-white hover:text-[#FDBC1D] transition-colors z-10"
            aria-label="Previous photo"
          >
            <FaChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <div
            className="relative w-full h-full max-w-5xl max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY_PHOTOS[selectedIndex].src}
              alt={GALLERY_PHOTOS[selectedIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-2 sm:right-6 text-white hover:text-[#FDBC1D] transition-colors z-10"
            aria-label="Next photo"
          >
            <FaChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm sm:text-base font-semibold">
            {selectedIndex + 1} / {GALLERY_PHOTOS.length}
          </div>
        </div>
      )}

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
