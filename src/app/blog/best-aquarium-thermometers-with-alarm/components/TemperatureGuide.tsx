import { TemperatureGuide as TempGuideType } from '../types';

interface TemperatureGuideProps {
  guides: TempGuideType[];
}

export default function TemperatureGuide({ guides }: TemperatureGuideProps) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <span className="text-3xl">🌡️</span>
        Ideal Temperature Ranges by Fish Type
      </h2>
      
      <p className="text-gray-700 mb-6">
        Different fish species thrive at different temperatures. Use this guide to set your thermometer alarms correctly:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {guides.map((guide, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">{guide.icon}</span>
              <h3 className="text-lg font-bold text-gray-800">
                {guide.fishType}
              </h3>
            </div>
            <div className="bg-blue-100 rounded-lg p-3">
              <p className="text-2xl font-bold text-blue-700 text-center">
                {guide.tempRange}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-yellow-50 rounded-lg p-5 border-l-4 border-yellow-400">
        <p className="text-sm text-gray-700">
          <strong className="text-yellow-700">💡 Pro Tip:</strong> Set your high temperature alarm 2-3°F above your target range and your low temperature alarm 2-3°F below. This gives you time to react before temperatures become dangerous.
        </p>
      </div>
    </div>
  );
}
