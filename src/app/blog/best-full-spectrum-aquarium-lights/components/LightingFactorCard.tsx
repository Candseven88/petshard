import React from 'react';
import Image from 'next/image';
import { LightingFactor } from '../types';

interface LightingFactorCardProps {
  factor: LightingFactor;
}

const LightingFactorCard: React.FC<LightingFactorCardProps> = ({ factor }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image 
          src={factor.imageUrl} 
          alt={factor.title} 
          fill 
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{factor.icon}</span>
          <h3 className="text-xl font-bold text-gray-800">{factor.title}</h3>
        </div>
        <p className="text-gray-700 mb-4">{factor.description}</p>
        <div className="space-y-2">
          {factor.keyPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <p className="text-sm text-gray-600">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LightingFactorCard;
