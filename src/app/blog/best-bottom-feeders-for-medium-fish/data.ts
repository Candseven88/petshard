import { BottomFeeder, Product, ProTip } from './types';

export const bottomFeeders: BottomFeeder[] = [
  {
    id: 1,
    name: "Kuhli Loach",
    emoji: "🐍",
    imageUrl: "https://www.hygger-online.com/wp-content/uploads/2023/03/Top-10-Bottom-Feeder-Fish-For-Freshwater-Community-Tank-1-1.jpg",
    size: "3-4 inches",
    compatibility: 5,
    specialSkill: "Snake-like substrate sifter",
    description: "These eel-like loaches are peaceful nocturnal scavengers that burrow through substrate searching for food particles. Their snake-like appearance and gentle nature make them fascinating tank inhabitants that won't disturb other fish.",
    tankRequirement: "20+ gallons, soft substrate preferred",
    whyItWorks: "Completely peaceful, excellent at finding hidden food particles"
  },
  {
    id: 2,
    name: "Zebra Loach",
    emoji: "🦓",
    imageUrl: "https://www.hygger-online.com/wp-content/uploads/2023/03/Top-10-Bottom-Feeder-Fish-For-Freshwater-Community-Tank-1-1.jpg",
    size: "3-4 inches",
    compatibility: 4,
    specialSkill: "Active group scavenger",
    description: "Striped loaches that are more active during the day than their Kuhli cousins. They work in groups to clean substrate and are excellent at controlling snail populations while being peaceful with other fish.",
    tankRequirement: "30+ gallons, groups of 5+",
    whyItWorks: "Social cleaners that are active during feeding time"
  },
  {
    id: 3,
    name: "Yoyo Loach",
    emoji: "🎯",
    imageUrl: "https://www.hygger-online.com/wp-content/uploads/2023/03/Top-10-Bottom-Feeder-Fish-For-Freshwater-Community-Tank-2.jpg",
    size: "4-6 inches",
    compatibility: 4,
    specialSkill: "Snail control specialist",
    description: "Named for their Y-O-Y-O pattern, these active loaches are excellent scavengers and natural snail controllers. They're playful and social, working together to keep the tank bottom clean.",
    tankRequirement: "40+ gallons, groups preferred",
    whyItWorks: "Perfect size match with excellent cleaning abilities"
  },
  {
    id: 4,
    name: "Cory Catfish",
    emoji: "😸",
    imageUrl: "https://www.hygger-online.com/wp-content/uploads/2023/03/Top-10-Bottom-Feeder-Fish-For-Freshwater-Community-Tank-2.jpg",
    size: "2-4 inches",
    compatibility: 5,
    specialSkill: "Living vacuum cleaner",
    description: "The most popular bottom feeders, Corydoras use their barbels to search substrate for food particles. They're peaceful, social, and come in many beautiful varieties. Essential for any community tank.",
    tankRequirement: "20+ gallons, groups of 3+",
    whyItWorks: "Perfect community fish that cleans constantly"
  },
  {
    id: 5,
    name: "Otocinclus Catfish",
    emoji: "🔍",
    imageUrl: "https://www.hygger-online.com/wp-content/uploads/2023/03/Top-10-Bottom-Feeder-Fish-For-Freshwater-Community-Tank-3.jpg",
    size: "1.5-2 inches",
    compatibility: 5,
    specialSkill: "Algae cleaning specialist",
    description: "Tiny algae-eating catfish that work tirelessly to keep glass and decorations clean. They're completely peaceful and won't bother any tankmates, making them perfect for community tanks.",
    tankRequirement: "10+ gallons, groups preferred",
    whyItWorks: "Small, peaceful, and excellent algae control"
  },
  {
    id: 6,
    name: "Twig Catfish",
    emoji: "🌿",
    imageUrl: "https://www.hygger-online.com/wp-content/uploads/2023/03/Top-10-Bottom-Feeder-Fish-For-Freshwater-Community-Tank-3.jpg",
    size: "4-6 inches",
    compatibility: 4,
    specialSkill: "Camouflaged algae eater",
    description: "These stick-like catfish blend perfectly with driftwood while eating algae and biofilm. They're peaceful and unique-looking, adding both function and visual interest to planted tanks.",
    tankRequirement: "30+ gallons, driftwood required",
    whyItWorks: "Unique appearance with excellent cleaning abilities"
  },
  {
    id: 7,
    name: "Synodontis Catfish",
    emoji: "🎭",
    imageUrl: "https://www.hygger-online.com/wp-content/uploads/2023/03/Top-10-Bottom-Feeder-Fish-For-Freshwater-Community-Tank-4-1.jpg",
    size: "4-8 inches",
    compatibility: 4,
    specialSkill: "Robust scavenger",
    description: "African catfish known for their distinctive patterns and upside-down swimming behavior. They're excellent scavengers that can handle larger food particles and are compatible with medium-sized fish.",
    tankRequirement: "40+ gallons",
    whyItWorks: "Hardy cleaners perfect for medium-sized community tanks"
  },
  {
    id: 8,
    name: "Siamese Algae Eater",
    emoji: "🧹",
    imageUrl: "https://www.hygger-online.com/wp-content/uploads/2023/03/Top-10-Bottom-Feeder-Fish-For-Freshwater-Community-Tank-4-1.jpg",
    size: "4-6 inches",
    compatibility: 4,
    specialSkill: "Black beard algae destroyer",
    description: "The only fish that reliably eats black beard algae and other tough algae types. They're active swimmers that also scavenge for food particles, making them dual-purpose cleaners.",
    tankRequirement: "30+ gallons",
    whyItWorks: "Specialized algae control with scavenging abilities"
  },
  {
    id: 9,
    name: "Bristlenose Pleco",
    emoji: "🦔",
    imageUrl: "https://www.hygger-online.com/wp-content/uploads/2023/03/Top-10-Bottom-Feeder-Fish-For-Freshwater-Community-Tank-5.jpg",
    size: "4-5 inches",
    compatibility: 5,
    specialSkill: "Algae and wood cleaner",
    description: "Compact plecos that stay small while providing excellent algae control. They rasp algae from surfaces and help break down driftwood, contributing to a healthy tank ecosystem.",
    tankRequirement: "30+ gallons, driftwood preferred",
    whyItWorks: "Perfect size with outstanding cleaning performance"
  },
  {
    id: 10,
    name: "Bumblebee Goby",
    emoji: "🐝",
    imageUrl: "https://www.hygger-online.com/wp-content/uploads/2023/03/Top-10-Bottom-Feeder-Fish-For-Freshwater-Community-Tank-5.jpg",
    size: "1.5 inches",
    compatibility: 3,
    specialSkill: "Micro-cleanup specialist",
    description: "Tiny bottom dwellers with striking yellow and black stripes. They pick at substrate for small food particles and are perfect for nano tanks or as supplementary cleaners in larger setups.",
    tankRequirement: "10+ gallons, peaceful tankmates only",
    whyItWorks: "Small size allows access to tight spaces other fish miss"
  }
];

export const products: Product[] = [
  {
    name: "Tetra PRO PlecoWafers 5.29 Ounces - Nutritionally Balanced Vegetarian Fish Food for Bottom Feeders",
    affiliateLink: "https://amzn.to/4pw6fL3",
    features: [
      "Nutritionally Balanced: Specially formulated for bottom-feeding fish dietary needs",
      "Sinking Wafers: Designed to sink quickly to reach bottom feeders before other fish",
      "Vegetarian Formula: Perfect for herbivorous plecos and algae-eating species",
      "High Quality Ingredients: Promotes healthy growth and vibrant colors",
      "Easy to Digest: Reduces waste and maintains better water quality"
    ],
    description: "Even the best bottom feeders need proper nutrition. These specialized wafers ensure your cleanup crew stays healthy and active."
  },
  {
    name: "Planted Aquarium Lighting System",
    affiliateLink: "https://amzn.to/48oU4sH",
    features: [
      "Full Spectrum LED: Promotes healthy plant growth and enhances fish colors",
      "Adjustable Brightness: Customize lighting intensity for different tank needs",
      "Energy Efficient: Long-lasting LEDs reduce electricity costs",
      "Easy Installation: Simple mounting system fits most aquarium sizes",
      "Timer Function: Automated day/night cycle for consistent lighting"
    ],
    description: "Healthy plants create a better environment for bottom feeders by providing natural filtration and oxygen production."
  },
  {
    name: "Mini Wave Maker Aquarium Circulation Pump",
    affiliateLink: "https://amzn.to/44sCzGD",
    features: [
      "Improved Water Circulation: Prevents dead spots where debris accumulates",
      "Compact Design: Small size won't disturb tank aesthetics",
      "Adjustable Flow: Multiple speed settings for different tank sizes",
      "Quiet Operation: Silent motor won't stress fish or disturb peace",
      "Easy Maintenance: Simple design makes cleaning and upkeep effortless"
    ],
    description: "Better water circulation helps bottom feeders by distributing food particles and preventing waste buildup in corners."
  }
];

export const proTips: ProTip[] = [
  {
    icon: "🍽️",
    text: "Feed bottom feeders specialized sinking foods - they can't compete with surface feeders for floating food"
  },
  {
    icon: "🌊",
    text: "Good water circulation prevents food from settling in dead spots where it can rot"
  },
  {
    icon: "🌱",
    text: "Live plants work with bottom feeders to create a natural cleaning system"
  },
  {
    icon: "📏",
    text: "Match bottom feeder size to your existing fish - avoid tiny cleaners with large, aggressive fish"
  },
  {
    icon: "🏠",
    text: "Provide hiding spots for shy bottom feeders like caves, driftwood, or dense plants"
  }
];
