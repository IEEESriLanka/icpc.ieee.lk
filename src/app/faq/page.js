'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'Registration',
      questions: [
        {
          question: 'When does registration open?',
          answer: 'Registration for ICPC Sri Lanka 2026 opens in November 2025. Make sure to register early as spots are limited!'
        },
        {
          question: 'How much is the registration fee?',
          answer: 'There is no registration fee for the Preliminary Online Round. For the Regional Onsite Round, the registration fee is LKR 2,000 per team. This fee includes meals and logistics on the day of the contest.'
        },
        {
          question: 'Can we register multiple teams from the same university?',
          answer: 'Yes! Multiple teams from the same university can register, subject to contest capacity. Each team must have 3 different students and a coach.'
        },
        {
          question: 'What if we don\'t have a coach?',
          answer: 'A coach is required for registration. You must find a faculty member or staff from your university to act as your team coach.'
        }
      ]
    },
    {
      category: 'Team Requirements',
      questions: [
        {
          question: 'How many members should be in a team?',
          answer: 'Each team must have exactly 3 members plus 1 coach. All members must be from the same university.'
        },
        {
          question: 'Can graduate students participate?',
          answer: 'Yes! Both undergraduate and graduate students are eligible, as long as they meet ICPC eligibility requirements.'
        },
        {
          question: 'Can team members be from different departments?',
          answer: 'Yes! Team members can be from different departments or faculties, as long as they are all enrolled at the same university.'
        }
      ]
    },
    {
      category: 'Contest Details',
      questions: [
        {
          question: 'What programming languages are allowed?',
          answer: 'C, C++, Java, Python, and other ICPC-approved programming languages. The exact list will be provided closer to the contest date.'
        },
        {
          question: 'How long is the contest?',
          answer: 'The regional contest lasts 5 hours. Teams work together to solve 8-12 programming problems.'
        },
        {
          question: 'Can we bring reference materials?',
          answer: 'Yes! Teams can bring printed reference materials (books, notes, etc.). However, no electronic devices except the provided computer are allowed.'
        },
        {
          question: 'Where will the contest be held?',
          answer: 'The contest location will be announced closer to the event date. It will be held in University of Peradeniya.'
        }
      ]
    },
    {
      category: 'Preparation',
      questions: [
        {
          question: 'How should we prepare for ICPC?',
          answer: 'Practice solving algorithmic problems on platforms like Codeforces, LeetCode, and HackerRank. Study data structures, algorithms, and problem-solving techniques. Practice as a team!'
        },
        {
          question: 'Are there practice contests before the regional?',
          answer: 'Yes! There will be an online preliminary round in October-November 2025 to help teams prepare and qualify for the regional contest.'
        },
        {
          question: 'What topics should we focus on?',
          answer: 'Focus on data structures (graphs, trees, heaps), algorithms (sorting, searching, dynamic programming), mathematics, and string processing.'
        }
      ]
    },
    {
      category: 'After Registration',
      questions: [
        {
          question: 'What happens after we register?',
          answer: 'You\'ll receive a confirmation email with further instructions about payment, contest details, and important dates.'
        },
        {
          question: 'Can we change team members after registration?',
          answer: 'Changes may be possible before a certain deadline. Contact the organizing committee as soon as possible if you need to make changes.'
        },
        {
          question: 'How will we know if we qualify for the World Finals?',
          answer: 'The champion team from the Sri Lanka National Contest advances directly to the ICPC World Finals. Five runner-up teams will compete at the Asia West Regional, where top performers also advance to the World Finals.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <FadeIn>
        <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/gallery/54763867697_572b983ab2_k.jpg')"
            }}
          ></div>
          <div className="absolute inset-0 bg-[#143C68]/90"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 text-white px-4">
              Frequently Asked Questions
            </h1>
            <div className="h-2 w-24 sm:w-32 bg-[#FDBC1D] mx-auto mb-8 sm:mb-10 rounded-full"></div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#FDBC1D] font-semibold max-w-4xl mx-auto px-4">
              Find answers to common questions about ICPC Sri Lanka 2026
            </p>
          </div>
        </section>
      </FadeIn>

      {/* FAQ Categories */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-8 sm:space-y-12 md:space-y-16">
            {faqs.map((category, categoryIndex) => (
              <StaggerItem key={categoryIndex}>
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 hover:shadow-3xl transition-all duration-300">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b-4 border-[#FDBC1D] text-center">
                    {category.category}
                  </h2>
                  <div className="space-y-4 sm:space-y-6">
                    {category.questions.map((faq, questionIndex) => {
                      const isOpen = openIndex === `${categoryIndex}-${questionIndex}`;
                      return (
                        <div
                          key={questionIndex}
                          className="bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 border-transparent hover:border-[#143C68] transition-all duration-300 hover:shadow-2xl"
                        >
                          <button
                            onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                            className="w-full text-left px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex justify-between items-center focus:outline-none hover:bg-gray-100 transition-colors duration-200"
                          >
                            <span className="text-base sm:text-lg md:text-xl font-bold text-gray-900 pr-2 sm:pr-4">
                              {faq.question}
                            </span>
                            <svg
                              className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#143C68] flex-shrink-0 transform transition-transform duration-300 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                          {isOpen && (
                            <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 bg-white border-t-2 border-[#FDBC1D]">
                              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 px-4">
              Still Have Questions?
            </h2>
            <div className="h-2 w-20 sm:w-24 bg-[#FDBC1D] mx-auto mb-6 sm:mb-8 md:mb-10 rounded-full"></div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl text-[#143C68] font-semibold mb-8 sm:mb-10 md:mb-12 px-4">
              Contact the ICPC Sri Lanka organizing committee for more information
            </p>
          </FadeIn>
          <ScaleIn delay={0.4}>
            <a
              href="mailto:icpc@soc.pdn.ac.lk"
              className="inline-block bg-[#143C68] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl w-full sm:w-auto"
            >
              Contact Us
            </a>
          </ScaleIn>
        </div>
      </section>

      {/* CTA Section */}
      <FadeIn>
        <section className="py-12 sm:py-16 md:py-24 bg-[#FDBC1D]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#143C68] mb-6 sm:mb-8 px-4">Ready to Register?</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#143C68] font-semibold mb-8 sm:mb-10 md:mb-12 px-4">
              Don&apos;t wait! Registration opens on 11th November 2025
            </p>
            <ScaleIn delay={0.3}>
              <Link
                href="/registration"
                className="inline-block bg-[#143C68] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl w-full sm:w-auto"
              >
                Registration Details
              </Link>
            </ScaleIn>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
