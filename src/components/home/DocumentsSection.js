'use client';

import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function DocumentsSection() {
  const documents = [
    {
      title: 'ICPC Sri Lanka Regional 2025/26 Lineup',
      url: 'https://drive.google.com/file/d/1RrhpVAtts54P2jNeii1sR8Y_ln7-2zlh/view?usp=drivesdk',
    },
    {
      title: 'Regional Onsite Contest Guidelines',
      url: 'https://drive.google.com/file/d/1NQtW5Jg9H8nl9mQ_KhBOpNPo_DdYBlRp/view?usp=drivesdk',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#FDBC1D]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#143C68]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143C68] mb-3 sm:mb-4">
              Important Documents
            </h2>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="h-1 w-12 sm:w-16 bg-[#FDBC1D]/50 rounded-full"></div>
              <div className="h-2 w-16 sm:w-24 bg-[#FDBC1D] rounded-full"></div>
              <div className="h-1 w-12 sm:w-16 bg-[#FDBC1D]/50 rounded-full"></div>
            </div>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {documents.map((doc, index) => (
            <StaggerItem key={index}>
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-[#FDBC1D] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#143C68] to-[#1a4d7f] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <DocumentTextIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-[#143C68] mb-2 group-hover:text-[#FDBC1D] transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Click to view document
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-[#FDBC1D] group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
