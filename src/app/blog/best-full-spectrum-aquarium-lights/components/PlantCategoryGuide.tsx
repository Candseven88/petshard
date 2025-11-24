import React from 'react';
import { PlantCategory } from '../types';

interface PlantCategoryGuideProps {
  categories: PlantCategory[];
}

const PlantCategoryGuide: React.FC<PlantCategoryGuideProps> = ({ categories }) => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <span className="text-3xl">🌱</span>
        Match Your Light to Your Plants
      </h2>

      <p className="text-lg text-gray-700 mb-6">
        Different plants have different lighting needs. Use this guide to choose the right light intensity for your aquarium plants:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{category.icon}</span>
              <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600 mb-1">Light Requirement:</p>
              <p className="text-base text-blue-600 font-medium">{category.lightRequirement}</p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">Examples:</p>
              <div className="flex flex-wrap gap-2">
                {category.examples.map((example, idx) => (
                  <span 
                    key={idx} 
                    className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-3 border-l-4 border-pink-400">
              <p className="text-xs font-semibold text-gray-600 mb-1">Recommended:</p>
              <p className="text-sm text-gray-800 font-medium">{category.recommendedLumen}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-yellow-50 rounded-lg p-5 border-l-4 border-yellow-400">
        <p className="text-sm text-gray-700">
          <strong className="text-yellow-700">⚠️ Important:</strong> These are general guidelines. Always monitor your specific plants' response and adjust lighting intensity accordingly. Signs of insufficient light include slow growth and pale leaves; excess light causes algae blooms.
        </p>
      </div>
    </div>
  );
};

export default PlantCategoryGuide;
