import Image from 'next/image';
import { BottomFeeder } from '../types';

interface BottomFeederCardProps {
  feeder: BottomFeeder;
  index: number;
}

export default function BottomFeederCard({ feeder, index }: BottomFeederCardProps) {
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
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48 w-full bg-gray-100">
        <Image
          src={feeder.imageUrl}
          alt={feeder.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 left-3 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
          {index + 1}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          {feeder.emoji && <span className="text-2xl">{feeder.emoji}</span>}
          {feeder.name}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 font-medium">Size:</span>
            <span className="text-sm text-gray-800">{feeder.size}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 font-medium">Compatibility:</span>
            {renderStars(feeder.compatibility)}
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-3 mb-3">
          <p className="text-sm font-medium text-blue-800">
            🎯 {feeder.specialSkill}
          </p>
        </div>

        <p className="text-gray-700 text-sm mb-3 line-clamp-3">
          {feeder.description}
        </p>

        {feeder.whyItWorks && (
          <div className="border-t pt-3">
            <p className="text-xs text-gray-600">
              <strong className="text-green-600">Why it works:</strong> {feeder.whyItWorks}
            </p>
          </div>
        )}

        {feeder.tankRequirement && (
          <div className="mt-2 text-xs text-gray-500">
            <strong>Tank:</strong> {feeder.tankRequirement}
          </div>
        )}
      </div>
    </div>
  );
}
