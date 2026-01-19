'use client';

import { DocumentTextIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function DocumentsPage() {
  const documents = [
    {
      title: 'ICPC Sri Lanka Regional 2025/26 Lineup',
      description: 'Complete lineup and schedule for the ICPC Sri Lanka Regional Contest 2025/26.',
      url: 'https://drive.google.com/file/d/1NQtW5Jg9H8nl9mQ_KhBOpNPo_DdYBlRp/view?usp=drivesdk',
    },
    {
      title: 'Regional Onsite Contest Guidelines',
      description: 'Official guidelines and rules for the regional onsite programming contest.',
      url: 'https://drive.google.com/file/d/1RrhpVAtts54P2jNeii1sR8Y_ln7-2zlh/view?usp=drivesdk',
    },
  ];

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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
                Important Documents
              </h1>
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="h-1 w-12 sm:w-16 bg-[#FDBC1D]/50 rounded-full"></div>
                <div className="h-2 w-16 sm:w-24 bg-[#FDBC1D] rounded-full"></div>
                <div className="h-1 w-12 sm:w-16 bg-[#FDBC1D]/50 rounded-full"></div>
              </div>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                Access all official documents, guidelines, and resources for ICPC Sri Lanka 2025/2026.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 gap-6 sm:gap-8">
            {documents.map((doc, index) => (
              <StaggerItem key={index}>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#FDBC1D] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#143C68] to-[#1a4d7f] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <DocumentTextIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#143C68] mb-2 sm:mb-3 group-hover:text-[#FDBC1D] transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-4">
                        {doc.description}
                      </p>
                      <div className="inline-flex items-center gap-2 text-[#143C68] font-semibold group-hover:text-[#FDBC1D] transition-colors">
                        <span>View Document</span>
                        <ArrowDownTrayIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}
