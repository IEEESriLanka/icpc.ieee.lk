'use client';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ICPC Sri Lanka",
    "alternateName": "International Collegiate Programming Contest Sri Lanka",
    "url": "https://icpc.ieee.lk",
    "logo": "https://icpc.ieee.lk/logo.png",
    "description": "Sri Lanka's first ICPC contest - the world's most prestigious programming competition",
    "foundingDate": "2025",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LK",
      "addressRegion": "Sri Lanka"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@icpc.lk",
      "contactType": "General Inquiries"
    },
    "sameAs": [
      "https://www.facebook.com/icpclk",
      "https://icpc.global"
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "IEEE CodeX Sri Lanka"
    }
  };

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "ICPC Sri Lanka 2025/2026 National Contest",
    "description": "Sri Lanka's first International Collegiate Programming Contest - the world's most prestigious programming competition",
    "startDate": "2026-01-25",
    "endDate": "2026-01-25",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "To be announced",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "LK",
        "addressRegion": "Sri Lanka"
      }
    },
    "image": [
      "https://icpc.ieee.lk/gallery/54766698584_76f21665d5_k.jpg"
    ],
    "organizer": {
      "@type": "Organization",
      "name": "IEEE CodeX Sri Lanka",
      "url": "https://icpc.ieee.lk"
    },
    "performer": {
      "@type": "Person",
      "name": "Dr. Upul Jayasinghe",
      "jobTitle": "ICPC Sri Lanka Director"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://icpc.ieee.lk/registration",
      "price": "2000",
      "priceCurrency": "LKR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-11-11"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ICPC Sri Lanka 2025/2026",
    "alternateName": "ICPC SL",
    "url": "https://icpc.ieee.lk",
    "description": "Official website for ICPC Sri Lanka 2025/2026 - Code Beyond Borders",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://icpc.ieee.lk/?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://icpc.ieee.lk/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://icpc.ieee.lk/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Registration",
        "item": "https://icpc.ieee.lk/registration"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Timeline",
        "item": "https://icpc.ieee.lk/timeline"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When does registration open?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Registration for ICPC Sri Lanka 2025/2026 opens on 11th November 2025."
        }
      },
      {
        "@type": "Question",
        "name": "How many members should be in a team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each team must have exactly 3 members plus 1 coach. All members must be from the same university."
        }
      },
      {
        "@type": "Question",
        "name": "What is the registration fee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The registration fee for the Regional Onsite Round is LKR 2,000 per team for Sri Lankan teams and USD 300 per team for International teams. There is no fee for the Preliminary Online Round."
        }
      },
      {
        "@type": "Question",
        "name": "What programming languages are allowed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "C, C++, Java, Python, and other ICPC-approved programming languages are allowed."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

