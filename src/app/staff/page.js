'use client';

import { motion } from 'framer-motion';
import { FadeInUp } from '@/components/AnimatedSection';

const staffMembers = [
  {
    name: "Dr. Upul Jayasinghe",
    position: "Regional Director",
    url: "http://people.ce.pdn.ac.lk/staff/academic/upul/"
  },
  {
    name: "Mr. Dhammika Marasinghe",
    position: "Deputy & Associate Director",
    url: "https://lk.linkedin.com/in/dhammikamarasinghe"
  },
  {
    name: "Prof. S. Vasanthapriyan",
    position: "Advisory",
    url: "https://www.sab.ac.lk/staff-directory/216"
  },
  {
    name: "Prof. Roshan G. Ragel",
    position: "Advisory",
    url: "http://people.ce.pdn.ac.lk/staff/academic/roshan-ragel/"
  },
  {
    name: "Dr. Hakim A. Usoof",
    position: "Judging Chair",
    url: "https://sci.pdn.ac.lk/scs/staff/Hakim-Usoof"
  },
  {
    name: "Dr. Tharindu Weerakoon",
    position: "Contest Chair",
    url: "http://web2.ee.pdn.ac.lk/TharinduW"
  },
  {
    name: "Mr. Biswajith Dissanayake",
    position: "Technical Chair",
    url: "http://people.ce.pdn.ac.lk/staff/academic/biswajith-dissanayake/"
  },
  {
    name: "Mr. Thamindu Sri Nirmal",
    position: "Communication Chair",
    url: "https://www.linkedin.com/in/thamindu-nirmal"
  },
  {
    name: "Ms. Yasodha Vimukthi",
    position: "Communication Chair",
    url: "http://people.ce.pdn.ac.lk/staff/academic/yasodha-vimukthi/"
  },
  {
    name: "Mr. Dineth Palliyaguru",
    position: "Communication Chair",
    url: "https://www.linkedin.com/in/dineth-palliyaguru"
  },
  {
    name: "Ms. Lithasa Jayamaha",
    position: "Finance Manager",
    url: "https://www.linkedin.com/in/lithasaj"
  },
  {
    name: "Ms. Sarani",
    position: "Volunteer Chair",
    url: null
  },
  {
    name: "Mr. Lasith",
    position: "Volunteer Chair",
    url: null
  },
  {
    name: "Ms. Rashmi Virajitha",
    position: "Volunteer Chair",
    url: null
  }
];

export default function StaffPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery/54766698584_76f21665d5_k.jpg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-[#143C68]/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 text-center text-white px-4">
              Organizing Committee
            </h1>
            <div className="h-2 w-24 sm:w-32 bg-[#FDBC1D] mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center max-w-4xl mx-auto font-bold text-[#FDBC1D] px-4">
              Meet the dedicated team behind <br /> ICPC Sri Lanka 2026
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-semibold px-4">
              The success of ICPC Sri Lanka 2026 is made possible by our dedicated organizing committee—a team of passionate professionals, educators, and volunteers working together to bring this historic event to life.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Staff Table Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-4 border-[#FDBC1D]">
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#143C68] text-white">
                      <th className="px-6 lg:px-8 py-4 lg:py-5 text-left text-sm lg:text-base font-bold uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 lg:px-8 py-4 lg:py-5 text-left text-sm lg:text-base font-bold uppercase tracking-wider">
                        Position
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {staffMembers.map((member, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="hover:bg-gray-50 transition-colors duration-200"
                      >
                        <td className="px-6 lg:px-8 py-4 lg:py-5 whitespace-nowrap">
                          {member.url ? (
                            <a
                              href={member.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#143C68] hover:text-[#FDBC1D] font-bold hover:underline transition-colors duration-200 text-base lg:text-lg inline-flex items-center gap-2"
                            >
                              {member.name}
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          ) : (
                            <span className="text-gray-900 font-bold text-base lg:text-lg">
                              {member.name}
                            </span>
                          )}
                        </td>
                        <td className="px-6 lg:px-8 py-4 lg:py-5 text-gray-700 font-semibold text-base lg:text-lg">
                          {member.position}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden space-y-3 p-3 sm:p-4">
                {staffMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg border-2 border-transparent hover:border-[#FDBC1D]"
                  >
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-bold text-[#143C68] uppercase tracking-wider block mb-1.5">
                          Name
                        </span>
                        <div className="flex items-center">
                          {member.url ? (
                            <a
                              href={member.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#143C68] hover:text-[#FDBC1D] font-bold hover:underline transition-colors duration-200 text-lg sm:text-xl flex items-center gap-2"
                            >
                              {member.name}
                              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          ) : (
                            <span className="text-gray-900 font-bold text-lg sm:text-xl">
                              {member.name}
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#143C68] uppercase tracking-wider block mb-1.5">
                          Position
                        </span>
                        <p className="text-gray-700 font-semibold text-base sm:text-lg">
                          {member.position}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInUp>

          {/* Additional Information */}
          <FadeInUp delay={0.3}>
            <div className="mt-8 sm:mt-12 md:mt-16">
              <div className="bg-[#143C68] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center shadow-2xl">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Have Questions?
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6 px-4">
                  For inquiries, please contact the organizing committee
                </p>
                <a
                  href="mailto:icpc@soc.pdn.ac.lk"
                  className="inline-flex items-center gap-2 bg-[#FDBC1D] text-[#143C68] px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  icpc@soc.pdn.ac.lk
                </a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}

