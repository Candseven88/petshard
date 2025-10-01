import React from 'react';

interface BreedingAnalysisResult {
  compatibility: string;
  puppyDescription: string;
  traits: string[];
  healthConsiderations: string[];
}

interface BreedingResultsDisplayProps {
  result: BreedingAnalysisResult;
  firstDogPreview: string | null;
  secondDogPreview: string | null;
  onBack?: () => void;
}

export default function BreedingResultsDisplay({
  result,
  firstDogPreview,
  secondDogPreview,
  onBack
}: BreedingResultsDisplayProps) {
  return (
    <div className="mt-12 max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-center">Breeding Analysis Results</h2>
        {onBack && (
          <button
            onClick={onBack}
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            ← Back to Analysis
          </button>
        )}
      </div>
      
      {/* Dog Images */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
        {firstDogPreview && (
          <div className="w-40 h-40 relative">
            <img 
              src={firstDogPreview} 
              alt="First Dog" 
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        )}
        
        <div className="flex items-center">
          <span className="text-2xl mx-2">+</span>
        </div>
        
        {secondDogPreview && (
          <div className="w-40 h-40 relative">
            <img 
              src={secondDogPreview} 
              alt="Second Dog" 
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        )}
      </div>
      
      {/* Compatibility */}
      <div className="mb-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-blue-800">Compatibility</h3>
        <p className="text-gray-700">{result.compatibility}</p>
      </div>
      
      {/* Potential Puppies */}
      <div className="mb-6 bg-purple-50 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-purple-800">Potential Puppies</h3>
        <p className="text-gray-700">{result.puppyDescription}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Expected Traits */}
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-green-800">Expected Traits</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {result.traits.map((trait, index) => (
              <li key={index} className="mb-1">{trait}</li>
            ))}
          </ul>
        </div>
        
        {/* Health Considerations */}
        <div className="bg-amber-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-amber-800">Health Considerations</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {result.healthConsiderations.map((consideration, index) => (
              <li key={index} className="mb-1">{consideration}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Note: This analysis is for informational purposes only. Please consult with a veterinarian or professional breeder before making breeding decisions.</p>
      </div>
    </div>
  );
} 