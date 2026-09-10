'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaHotel, FaUtensils, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaExclamationCircle, FaPassport, FaFileAlt, FaClipboardCheck } from 'react-icons/fa';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function PlanATrip() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <FadeIn>
        <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/gallery/54766880654_d0cf0b7e86_o.jpg')"
            }}
          ></div>
          <div className="absolute inset-0 bg-[#143C68]/90"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScaleIn>
              <div className="inline-block mb-8">
                <FaHotel className="w-16 h-16 sm:w-20 sm:h-20 text-[#FDBC1D] mx-auto mb-4 drop-shadow-2xl" />
              </div>
            </ScaleIn>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white px-4">
              Plan a Trip
            </h1>
            <div className="h-2 w-20 sm:w-24 bg-[#FDBC1D] mx-auto mb-8 sm:mb-10 rounded-full"></div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#FDBC1D] font-semibold max-w-4xl mx-auto px-4">
              Accommodation and visa support for the ICPC Sri Lanka Regional Onsite Round
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Tabs Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <PlanATripTabs />
        </div>
      </section>

      {/* CTA Section */}
      <FadeIn delay={0.4}>
        <section className="py-16 sm:py-20 md:py-24 bg-[#FDBC1D]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143C68] mb-6 sm:mb-8">
              Need More Information?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#143C68] font-semibold mb-8 sm:mb-10">
              Contact us if you have any questions about your trip, accommodation, or visa support
            </p>
            <ScaleIn delay={0.5}>
              <Link
                href="/faq"
                className="inline-block bg-[#143C68] text-white px-10 sm:px-12 py-4 rounded-2xl text-lg sm:text-xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              >
                View FAQ
              </Link>
            </ScaleIn>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}

function PlanATripTabs() {
  const [activeTab, setActiveTab] = useState('accommodation');

  return (
    <div className="max-w-6xl mx-auto">
      {/* Tab Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 sm:mb-8 border-b-4 border-gray-200">
        <button
          onClick={() => setActiveTab('accommodation')}
          className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-bold rounded-t-xl sm:rounded-t-2xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 ${
            activeTab === 'accommodation'
              ? 'bg-[#143C68] text-white border-b-4 border-[#FDBC1D]'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <FaHotel className="w-5 h-5 sm:w-6 sm:h-6" />
          Accommodation
        </button>
        <button
          onClick={() => setActiveTab('visa')}
          className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-bold rounded-t-xl sm:rounded-t-2xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 ${
            activeTab === 'visa'
              ? 'bg-[#143C68] text-white border-b-4 border-[#FDBC1D]'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <FaPassport className="w-5 h-5 sm:w-6 sm:h-6" />
          Visa Support
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12">
        {activeTab === 'accommodation' ? <AccommodationContent /> : <VisaSupportContent />}
      </div>
    </div>
  );
}

function AccommodationContent() {
  const hotels = [
    {
      name: 'Joint Research and Demonstration Centre (JRDC)',
      address: 'E.O.E. Pereira Mawatha, Meewathura, Peradeniya, Sri Lanka',
      phone: '+94 81 205 8116',
      email: 'info@jrdc.lk',
      website: 'https://www.jrdc.lk',
      rates: ['Single Room: Rs. 3,200/-*', 'Double Room: Rs. 5,000/-*'],
      note: '*Limited number available.'
    },
    {
      name: 'The Grand Kandyan Hotel',
      address: 'No. 89/10 Lady Gordon\'s Drive, Kandy, Sri Lanka',
      phone: '+94 81 203 0400',
      email: 'info@grandkandyan.com',
      website: 'https://www.grandkandyan.com'
    },
    {
      name: 'Earl\'s Regent Kandy',
      address: 'No. 40/1 Deveni Rajasinghe Mawatha, Kandy, Sri Lanka',
      phone: '+94 81 222 1144',
      email: 'res@regentkandy.lk',
      website: 'https://www.earlshotels.com/kandyregent'
    },
    {
      name: 'Hotel Topaz Kandy',
      address: 'Aniwatta Road, Kandy, Sri Lanka',
      phone: '+94 81 738 9000',
      email: 'info@topaz.lk',
      website: 'https://www.topaz.lk'
    },
    {
      name: 'Sun Dove Suite',
      address: 'No. 19, Keerthi Sri Rajasinghe Mawatha, Kandy, Sri Lanka',
      phone: '+94 81 223 4334',
      website: 'https://www.sundovesuite.com'
    },
    {
      name: 'Peradeniya Rest House',
      address: 'Kandy Road, Peradeniya, Sri Lanka',
      phone: '+94 81 238 8299',
      website: 'https://www.peradeniya-rest-house.com'
    },
    {
      name: 'Oak-Ray Regency – Kandy',
      address: 'Devani Rajasinghe Mawatha, Getambe, Kandy, Sri Lanka',
      phone: '+94 81 238 9141',
      email: 'inquiries@oakrayhotels.com',
      website: 'https://www.oakrayhotels.com'
    },
    {
      name: 'Hanthana Mountain View',
      address: 'No. 473/B, New Gampola Road, Peradeniya, Sri Lanka',
      phone: '+94 70 147 9439',
      email: 'hmvmanagement18@gmail.com',
      website: 'https://hanthanamountview.site'
    },
    {
      name: 'The Golden Crown – Kandy',
      address: 'No. 322, Udagama, Ampitiya, Kandy, Sri Lanka',
      phone: '+94 81 224 4000',
      email: 'reservations@thegoldenhospitality.com',
      website: 'https://www.thegoldencrownhotel.com'
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Important Notice */}
      <div className="bg-[#FDBC1D]/10 border-2 border-[#FDBC1D] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
        <div className="flex items-start gap-4 sm:gap-6">
          <FaExclamationCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#143C68] flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#143C68] mb-3">Important Notice</h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Accommodation will <strong>not</strong> be generally funded by the ICPC Sri Lanka Regional organizers. Participants are expected to arrange and cover their own accommodation.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              To assist with planning, a list of recommended accommodation options near the University of Peradeniya is provided below to facilitate independent booking based on individual preferences and budgets.
            </p>
          </div>
        </div>
      </div>

      {/* Book Accommodation Section */}
      <div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143C68] mb-4 sm:mb-6 text-center">
          Book Accommodation
        </h3>
        <p className="text-base sm:text-lg text-gray-700 text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          Participants may choose from the following accommodation options in and around Kandy / Peradeniya.
          <span className="font-bold text-[#143C68]"> Early reservations are recommended as availability is limited.</span>
        </p>

        {/* Hotels Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {hotels.map((hotel) => (
              <StaggerItem key={hotel.name}>
                <HotelCard hotel={hotel} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>

      {/* Meals Section */}
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#143C68] to-[#1e4a7a] p-6 sm:p-8 md:p-10">
        <div className="text-center mb-8 sm:mb-10">
          <FaUtensils className="w-12 h-12 sm:w-16 sm:h-16 text-[#FDBC1D] mx-auto mb-6" />
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Meals</h3>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#FDBC1D] mt-2 flex-shrink-0"></div>
              <p className="text-lg sm:text-xl text-white leading-relaxed">
                <span className="font-bold text-[#FDBC1D]">Lunch on the contest day (6th December 2026)</span> will be provided by the organizers for all registered contestants.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#FDBC1D] mt-2 flex-shrink-0"></div>
              <p className="text-lg sm:text-xl text-white leading-relaxed">
                All other meals are to be arranged by participants at their own expense.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#FDBC1D] mt-2 flex-shrink-0"></div>
              <p className="text-lg sm:text-xl text-white leading-relaxed">
                Participants are kindly advised to plan their accommodation and meals accordingly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisaSupportContent() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <div className="text-center">
        <FaPassport className="w-12 h-12 sm:w-16 sm:h-16 text-[#143C68] mx-auto mb-6" />
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143C68] mb-4">Visa Support</h3>
        <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
          Guidance for international teams travelling to Sri Lanka for the ICPC Sri Lanka Regional Onsite Round.
        </p>
      </div>

      <div className="bg-[#143C68]/5 border-2 border-[#143C68]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
        <div className="flex items-start gap-4 sm:gap-6">
          <FaExclamationCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#143C68] flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#143C68] mb-3">Details Coming Soon</h4>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Full visa support information for qualified international teams &mdash; including the invitation letter process, required documents, and application guidance &mdash; will be published here soon.
            </p>
          </div>
        </div>
      </div>

      <StaggerContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <StaggerItem>
            <VisaInfoCard
              icon={<FaFileAlt className="w-8 h-8" />}
              title="Invitation Letters"
              description="Official invitation letters will be issued to qualified international teams to support their visa applications."
            />
          </StaggerItem>
          <StaggerItem>
            <VisaInfoCard
              icon={<FaClipboardCheck className="w-8 h-8" />}
              title="Required Documents"
              description="A checklist of documents needed for your visa application will be shared closer to the event."
            />
          </StaggerItem>
          <StaggerItem>
            <VisaInfoCard
              icon={<FaPassport className="w-8 h-8" />}
              title="Application Guidance"
              description="Step-by-step guidance on applying for a Sri Lankan visa (including ETA) will be provided here."
            />
          </StaggerItem>
        </div>
      </StaggerContainer>

      <div className="text-center pt-4">
        <p className="text-base sm:text-lg text-gray-700 mb-4">
          Have an urgent visa question for your team?
        </p>
        <a
          href="mailto:icpc@soc.pdn.ac.lk"
          className="inline-flex items-center justify-center gap-2 bg-[#143C68] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold hover:bg-[#1e4a7a] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          <FaEnvelope className="w-5 h-5" />
          Contact the Organizers
        </a>
      </div>
    </div>
  );
}

function VisaInfoCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 border-2 border-transparent hover:border-[#143C68] rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <div className="text-[#143C68] mb-4">{icon}</div>
      <h4 className="text-lg sm:text-xl font-bold text-[#143C68] mb-3">{title}</h4>
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

function HotelCard({ hotel }) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col border border-gray-200">
      <h4 className="text-lg sm:text-xl font-bold text-[#143C68] mb-4">{hotel.name}</h4>

      <div className="space-y-3 flex-1">
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="w-4 h-4 text-[#143C68] flex-shrink-0 mt-1" />
          <p className="text-sm sm:text-base text-gray-600">{hotel.address}</p>
        </div>

        {hotel.phone && (
          <div className="flex items-center gap-3">
            <FaPhone className="w-4 h-4 text-[#143C68] flex-shrink-0" />
            <a href={`tel:${hotel.phone}`} className="text-sm sm:text-base text-gray-600 hover:text-[#143C68] transition-colors">
              {hotel.phone}
            </a>
          </div>
        )}

        {hotel.email && (
          <div className="flex items-center gap-3">
            <FaEnvelope className="w-4 h-4 text-[#143C68] flex-shrink-0" />
            <a href={`mailto:${hotel.email}`} className="text-sm sm:text-base text-gray-600 hover:text-[#143C68] transition-colors truncate">
              {hotel.email}
            </a>
          </div>
        )}

        {hotel.website && (
          <div className="flex items-center gap-3">
            <FaGlobe className="w-4 h-4 text-[#143C68] flex-shrink-0" />
            <a
              href={hotel.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-[#143C68] font-semibold hover:text-[#FDBC1D] transition-colors"
            >
              Visit Website
            </a>
          </div>
        )}

        {hotel.rates && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm font-bold text-[#143C68] mb-2">Room Rates:</p>
            {hotel.rates.map((rate, idx) => (
              <p key={idx} className="text-sm text-gray-700">{rate}</p>
            ))}
            {hotel.note && (
              <p className="text-xs text-gray-500 mt-2 italic">{hotel.note}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
