export function FeaturePoint({ icon, text }) {
  return (
    <div className="flex items-start gap-2 sm:gap-3">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <p className="text-base sm:text-lg text-gray-700">{text}</p>
    </div>
  );
}

export function ModernFeaturePoint({ icon, text, color }) {
  return (
    <div className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-all duration-300">
      <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <p className="text-base sm:text-lg text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{text}</p>
    </div>
  );
}

