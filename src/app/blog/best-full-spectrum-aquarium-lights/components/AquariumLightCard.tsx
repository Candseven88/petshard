import React from 'react';
import { AquariumLight } from '../types';

interface AquariumLightCardProps {
  light: AquariumLight;
  rank?: number;
}

const AquariumLightCard: React.FC<AquariumLightCardProps> = ({ light, rank }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
      {rank && (
        <div className="flex items-center justify-between mb-4">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full font-bold text-lg">
            #{rank}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < light.rating ? "text-yellow-400" : "text-gray-300"}>
                ★
              </span>
            ))}
          </div>
        </div>
      )}

      <h3 className="text-2xl font-bold text-gray-800 mb-3">{light.name}</h3>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-1">Price Range</p>
          <p className="font-bold text-pink-600">{light.priceRange}</p>
        </div>
        <div className="bg-white rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-1">Lumens</p>
          <p className="font-bold text-blue-600">{light.lumens}</p>
        </div>
        <div className="bg-white rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-1">Wattage</p>
          <p className="font-bold text-green-600">{light.wattage}</p>
        </div>
        <div className="bg-white rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-1">Spectrum</p>
          <p className="font-bold text-purple-600">{light.spectrum}</p>
        </div>
      </div>

      {light.sizeRange && (
        <div className="bg-white rounded-lg p-3 mb-4">
          <p className="text-xs text-gray-500 mb-1">Size Range</p>
          <p className="font-semibold text-gray-700">{light.sizeRange}</p>
        </div>
      )}

      <div className="mb-4">
        <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
          <span>✅</span> Pros
        </h4>
        <ul className="space-y-1">
          {light.pros.map((pro, index) => (
            <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
              <span className="text-green-500 mt-0.5">•</span>
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2">
          <span>⚠️</span> Cons
        </h4>
        <ul className="space-y-1">
          {light.cons.map((con, index) => (
            <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
              <span className="text-red-500 mt-0.5">•</span>
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-4 border-l-4 border-pink-500">
        <p className="text-xs font-bold text-gray-600 mb-1">BEST FOR:</p>
        <p className="text-sm text-gray-800 font-medium">{light.bestFor}</p>
      </div>
    </div>
  );
};

export default AquariumLightCard;
