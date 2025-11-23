import Image from 'next/image';
import { Thermometer } from '../types';

interface ThermometerCardProps {
  thermometer: Thermometer;
}

export default function ThermometerCard({ thermometer }: ThermometerCardProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
            ⭐
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-56 w-full bg-gray-100">
        <Image
          src={thermometer.imageUrl}
          alt={thermometer.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {thermometer.priceRange}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
            {thermometer.type}
          </span>
          {renderStars(thermometer.rating)}
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {thermometer.name}
        </h3>

        <div className="mb-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 font-medium">Accuracy:</span>
            <span className="text-gray-800 font-semibold">{thermometer.accuracy}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-bold text-gray-700 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {thermometer.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-green-50 rounded-lg p-3">
              <h5 className="text-xs font-bold text-green-700 mb-1">Pros</h5>
              <ul className="space-y-1">
                {thermometer.pros.slice(0, 2).map((pro, idx) => (
                  <li key={idx} className="text-xs text-gray-600">• {pro}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-3">
              <h5 className="text-xs font-bold text-red-700 mb-1">Cons</h5>
              <ul className="space-y-1">
                {thermometer.cons.slice(0, 2).map((con, idx) => (
                  <li key={idx} className="text-xs text-gray-600">• {con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
          <p className="text-xs text-gray-700">
            <strong className="text-blue-700">Best for:</strong> {thermometer.bestFor}
          </p>
        </div>
      </div>
    </div>
  );
}
