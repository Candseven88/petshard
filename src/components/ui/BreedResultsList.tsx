/**
 * BreedResultsList Component
 * 
 * Displays the results of a pet breed identification in a formatted list
 */

interface Breed {
  breed: string;
  confidence: number;
}

interface Section {
  title: string;
  content: string;
}

interface BreedResultsListProps {
  breeds: Breed[];
  sections?: Section[];
}

export default function BreedResultsList({ breeds, sections }: BreedResultsListProps) {
  // Ensure we have breeds to display
  if (!breeds || breeds.length === 0) {
    return (
      <div className="bg-gray-50 border rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">No Results</h3>
        <p className="text-gray-600">
          No breed information was found. Please try again with a clearer image.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Results</h3>
      
      <div className="space-y-4">
        {breeds.map((breed, index) => (
          <div 
            key={index}
            className={`p-4 rounded-lg ${index === 0 ? 'bg-blue-50 border border-blue-100' : 'bg-white border'}`}
          >
            <div className="flex justify-between items-center">
              <div>
                <span className={`font-medium text-lg ${index === 0 ? 'text-blue-800' : ''}`}>
                  {breed.breed}
                </span>
                {index === 0 && (
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Best Match
                  </span>
                )}
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm bg-gray-100 px-2 py-1 rounded font-medium">
                  {Math.round(breed.confidence * 100)}% confidence
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Display sections in cards */}
      {sections && sections.length > 0 ? (
        <div className="mt-6 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
          {sections.map((section, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-blue-800 mb-2">{section.title}</h4>
              <p className="text-gray-700 text-sm">{section.content}</p>
            </div>
          ))}
        </div>
      ) : (
        // 如果没有详细信息，显示默认的物种信息
        <div className="mt-6 pt-4 border-t border-gray-200">
          {breeds[0] && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium">Characteristics:</p>
                  <ul className="list-disc pl-5 mt-1 text-gray-600">
                    {getSpeciesCharacteristics(breeds[0].breed).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Care Tips:</p>
                  <ul className="list-disc pl-5 mt-1 text-gray-600">
                    {getSpeciesCareTips(breeds[0].breed).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      )}
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h4 className="font-medium text-sm mb-2">About these results</h4>
        <p className="text-sm text-gray-600 mb-2">
          These results are based on visual analysis and may not be 100% accurate. 
          The AI model compares your pet's image with thousands of species examples.
        </p>
        <p className="text-sm text-gray-600">
          For mixed-breed animals or unusual species, the results show the species that most closely match your pet's appearance.
        </p>
      </div>
    </div>
  );
}

// 清理文本，移除多余的格式标记
function cleanText(text: string): string {
  if (!text) return '';
  
  return text
    // 移除markdown粗体标记
    .replace(/\*\*(.*?)\*\*/g, '$1')
    // 移除数字编号（如 "1. "、"2. "等）
    .replace(/^\d+\.\s*/gm, '')
    // 移除多余的破折号
    .replace(/^-\s*/gm, '')
    // 移除多余的冒号
    .replace(/：\s*$/, '')
    // 清理多余的空格
    .replace(/\s+/g, ' ')
    // 清理行首行尾空格
    .trim();
}

// 根据物种名称返回特征信息
function getSpeciesCharacteristics(species: string): string[] {
  // 这里可以添加更多物种的信息
  const speciesInfo: Record<string, string[]> = {
    "Bulldog": [
      "Short and sturdy build with loose, wrinkled skin",
      "Distinctive pushed-in nose and undershot jaw",
      "Medium size, weighing between 40-50 pounds",
      "Known for their calm and friendly temperament"
    ],
    "Eastern Gray Squirrel": [
      "Medium-sized rodent with bushy tail",
      "Typically gray with white underparts",
      "Excellent climbers and jumpers",
      "Highly adaptable to urban environments"
    ],
    "Fox Squirrel": [
      "Largest tree squirrel species in North America",
      "Reddish-brown to gray with orange underparts",
      "More ground-dwelling than other tree squirrels",
      "Excellent foragers and food hoarders"
    ],
    "Red Squirrel": [
      "Smaller than gray squirrels with reddish fur",
      "Very territorial and vocal",
      "Quick and agile tree dwellers",
      "Known for collecting and storing nuts and seeds"
    ],
    "House Sparrow": [
      "Small bird with brown and gray plumage",
      "Males have black bibs and gray crowns",
      "Highly social and form large flocks",
      "Adapted to living near human settlements"
    ],
    "Eurasian Tree Sparrow": [
      "Similar to house sparrow but with chestnut crown",
      "Black spot on each cheek",
      "Less urban-adapted than house sparrows",
      "More shy and less aggressive than house sparrows"
    ],
    "Field Sparrow": [
      "Small sparrow with rusty cap and pink bill",
      "Prefers grassland and shrubby habitats",
      "Melodious song that speeds up at the end",
      "Builds cup-shaped nests close to the ground"
    ]
  };
  
  // 尝试匹配物种名称（不区分大小写）
  const lowerCaseSpecies = species.toLowerCase();
  for (const key in speciesInfo) {
    if (key.toLowerCase().includes(lowerCaseSpecies) || lowerCaseSpecies.includes(key.toLowerCase())) {
      return speciesInfo[key];
    }
  }
  
  // 默认信息
  return [
    "Unique physical characteristics",
    "Natural habitat and distribution",
    "Behavioral patterns",
    "Distinctive features for identification"
  ];
}

// 根据物种名称返回护理提示
function getSpeciesCareTips(species: string): string[] {
  // 这里可以添加更多物种的护理提示
  const speciesTips: Record<string, string[]> = {
    "Bulldog": [
      "Regular cleaning of facial wrinkles to prevent infection",
      "Moderate exercise - avoid excessive heat and strenuous activity",
      "Regular veterinary check-ups for respiratory and joint issues",
      "Maintain healthy weight to reduce strain on joints"
    ],
    "Eastern Gray Squirrel": [
      "Wild animals - best observed from a distance",
      "Do not feed human food or attempt to domesticate",
      "If injured, contact wildlife rehabilitation center",
      "Provide natural habitat by planting native trees"
    ],
    "Fox Squirrel": [
      "Wild animals - best observed from a distance",
      "Do not feed human food or attempt to domesticate",
      "If injured, contact wildlife rehabilitation center",
      "Can damage gardens and homes if attracted too close"
    ],
    "Red Squirrel": [
      "Wild animals - best observed from a distance",
      "Protected in some regions - check local regulations",
      "If injured, contact wildlife rehabilitation center",
      "Appreciate from afar to minimize stress to the animal"
    ],
    "House Sparrow": [
      "Wild birds - best observed from a distance",
      "Can be attracted with bird feeders and baths",
      "Invasive in North America - check local regulations",
      "Do not attempt to handle or domesticate"
    ],
    "Eurasian Tree Sparrow": [
      "Wild birds - best observed from a distance",
      "Can be attracted with appropriate bird feeders",
      "Provide sheltered nesting boxes in suitable habitats",
      "Do not attempt to handle or domesticate"
    ],
    "Field Sparrow": [
      "Wild birds - best observed from a distance",
      "Preserve grassland habitats to support populations",
      "Avoid pesticides in areas where they feed",
      "If injured, contact bird rehabilitation specialists"
    ]
  };
  
  // 尝试匹配物种名称（不区分大小写）
  const lowerCaseSpecies = species.toLowerCase();
  for (const key in speciesTips) {
    if (key.toLowerCase().includes(lowerCaseSpecies) || lowerCaseSpecies.includes(key.toLowerCase())) {
      return speciesTips[key];
    }
  }
  
  // 默认提示
  return [
    "Observe wildlife from a respectful distance",
    "Do not attempt to feed or domesticate wild animals",
    "Contact wildlife experts if the animal appears injured",
    "Learn about the species to better appreciate it"
  ];
} 