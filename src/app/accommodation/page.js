'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AccommodationRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/plan-a-trip');
  }, [router]);

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-lg sm:text-xl text-gray-700 mb-4">
          Accommodation details have moved to the Plan Your Trip page.
        </p>
        <Link
          href="/plan-a-trip"
          className="inline-block bg-[#143C68] text-white px-8 py-3 rounded-2xl text-lg font-bold hover:bg-[#1e4a7a] transition-all duration-300"
        >
          Go to Plan Your Trip
        </Link>
      </div>
    </main>
  );
}
