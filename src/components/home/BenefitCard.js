export function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 shadow-xl text-center">
      <div className="text-[#FDBC1D] mb-4 sm:mb-6 md:mb-8 flex justify-center">{icon}</div>
      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#143C68]">{title}</h3>
      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{description}</p>
    </div>
  );
}

export function ModernBenefitCard({ icon, title, description, color }) {
  return (
    <div className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 shadow-2xl">
      <div className="relative text-center">
        <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl ${color} text-white mb-4 sm:mb-6 md:mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white group-hover:text-[#FDBC1D] transition-colors px-2">{title}</h3>
        <p className="text-white/90 leading-relaxed text-base sm:text-lg group-hover:text-white transition-colors px-2">{description}</p>
      </div>
    </div>
  );
}

