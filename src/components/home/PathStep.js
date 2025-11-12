export function PathStep({ number, text }) {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3">
      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FDBC1D] text-[#143C68] font-bold flex items-center justify-center text-sm sm:text-base">
        {number}
      </div>
      <p className="text-base sm:text-lg">{text}</p>
    </div>
  );
}

export function ModernPathStep({ number, text, icon }) {
  return (
    <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300">
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#FDBC1D] text-[#143C68] font-bold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 text-sm sm:text-base">
        {number}
      </div>
      <div className="flex items-center gap-2 sm:gap-3 flex-1">
        <div className="text-[#FDBC1D] group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <p className="text-base sm:text-lg font-medium text-white/95 group-hover:text-white transition-colors">{text}</p>
      </div>
    </div>
  );
}

