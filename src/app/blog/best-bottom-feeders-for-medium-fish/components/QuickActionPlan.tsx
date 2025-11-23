import { ProTip } from '../types';

interface QuickActionPlanProps {
  proTips: ProTip[];
}

export default function QuickActionPlan({ proTips }: QuickActionPlanProps) {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        🎯 Quick Action Plan
      </h2>

      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-700 mb-4">
          For immediate results with 4-5 inch fish:
        </h3>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </span>
              <p className="text-gray-700">
                <strong>First choice:</strong> Corydoras (2-4 inches) - can't go wrong
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </span>
              <p className="text-gray-700">
                <strong>Add snails:</strong> They work 24/7 in any tank
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                3
              </span>
              <p className="text-gray-700">
                <strong>Consider:</strong> Bristlenose plecos if you have 29+ gallons
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 rounded-lg p-5 border-l-4 border-yellow-400">
        <h3 className="text-lg font-bold text-gray-700 mb-3">Pro Tips:</h3>
        <div className="space-y-2">
          {proTips.map((tip, index) => (
            <p key={index} className="text-gray-700 flex items-start gap-2">
              <span className="text-yellow-600">{tip.icon}</span>
              <span>{tip.text}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
