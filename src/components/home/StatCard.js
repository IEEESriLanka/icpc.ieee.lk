export function StatCard({ icon, number, label, color }) {
  return (
    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow text-center border-2 border-gray-100 hover:border-[#143C68]">
      <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl ${color} text-white mb-3 sm:mb-4`}>
        {icon}
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{number}</div>
      <div className="text-base sm:text-lg text-gray-600">{label}</div>
    </div>
  );
}

export function ModernStatCard({ icon, number, label, description, color }) {
  return (
    <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      <div className="relative">
        <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl ${color} text-white mb-4 sm:mb-6 shadow-xl`}>
          {icon}
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#143C68] transition-colors">{number}</div>
        <div className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{label}</div>
        <div className="text-xs sm:text-sm text-gray-600 font-medium">{description}</div>
      </div>
    </div>
  );
}

