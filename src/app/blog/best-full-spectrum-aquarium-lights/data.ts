import { LightingFactor, AquariumLight, Product, ProTip, PlantCategory } from './types';

export const lightingFactors: LightingFactor[] = [
  {
    id: 1,
    title: "Color Spectrum",
    description: "The wavelengths of light your plants receive are crucial for photosynthesis. Full-spectrum lights mimic natural sunlight, providing the complete range of colors plants need to thrive.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0311/3149/files/shutterstock_601059413_97867db7-ccf6-45e3-b082-d4af94f1777f.jpg?v=1573605721",
    keyPoints: [
      "Red light (620-750nm): Promotes flowering and growth",
      "Blue light (400-520nm): Essential for leaf development",
      "Green light (500-600nm): Penetrates deeper into plant tissues",
      "Full-spectrum: Provides balanced wavelengths for all growth stages"
    ],
    icon: "🌈"
  },
  {
    id: 2,
    title: "Light Intensity",
    description: "Measured in lumens or PAR (Photosynthetically Active Radiation), intensity determines how much usable light reaches your plants. Higher intensity supports more demanding plants and faster growth.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0311/3149/files/shutterstock_521539267.jpg?v=1573605791",
    keyPoints: [
      "Low light (20-40 lumens/L): Easy plants like Anubias, Java Fern",
      "Medium light (40-60 lumens/L): Most common aquarium plants",
      "High light (60+ lumens/L): Demanding plants and carpeting species",
      "Adjustable intensity: Prevents algae while maximizing growth"
    ],
    icon: "💡"
  },
  {
    id: 3,
    title: "Light Spread",
    description: "Even light distribution ensures all plants receive adequate illumination. Poor spread creates dark spots where plants struggle, while good coverage promotes uniform, healthy growth throughout your tank.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0311/3149/files/shutterstock_1049174078.jpg?v=1573605875",
    keyPoints: [
      "LED placement: Multiple diodes provide better coverage",
      "Mounting height: Affects both intensity and spread",
      "Tank size: Match light length to aquarium dimensions",
      "Reflectors: Help direct light where plants need it most"
    ],
    icon: "📐"
  }
];

export const budgetLights: AquariumLight[] = [
  {
    id: 1,
    name: "Siora SR616",
    priceRange: "$15-20",
    lumens: "720 lumens",
    wattage: "10W",
    spectrum: "Full Spectrum",
    sizeRange: "12-18 inches",
    pros: [
      "Most affordable option",
      "Adjustable brightness (10% increments)",
      "Timer options: 6h, 10h, 12h",
      "Warmer color temperature",
      "Successfully grows easy category plants"
    ],
    cons: [
      "Lower lumen output",
      "May struggle with red plants",
      "Basic control system"
    ],
    bestFor: "Beginners with easy-care green plants on a tight budget",
    rating: 4
  },
  {
    id: 2,
    name: "Higer 058",
    priceRange: "$18-22",
    lumens: "774 lumens",
    wattage: "11W",
    spectrum: "Full Spectrum",
    sizeRange: "12-18 inches",
    pros: [
      "7.5% more lumens than Siora",
      "Adjustable brightness control",
      "Timer options: 6h, 8h, 12h",
      "Cooler color temperature",
      "Energy efficient"
    ],
    cons: [
      "Slightly more expensive than Siora",
      "Limited red plant growth",
      "Can be difficult to find in stock"
    ],
    bestFor: "Entry-level planted tanks with easy plants, cooler aesthetic preference",
    rating: 4
  },
  {
    id: 3,
    name: "Higer 957",
    priceRange: "$27-32",
    lumens: "927 lumens",
    wattage: "20W",
    spectrum: "Full Spectrum",
    sizeRange: "12-18 inches",
    pros: [
      "30% more lumens than budget options",
      "Advanced control system",
      "Successfully grows red plants",
      "On-body controller (easier to use)",
      "Multiple customization options"
    ],
    cons: [
      "Higher electricity costs ($12.16/year)",
      "Runs warmer than newer models",
      "Extendable legs may limit tank access"
    ],
    bestFor: "Intermediate aquascapers wanting to grow red plants with more control",
    rating: 5
  },
  {
    id: 4,
    name: "Higer 076",
    priceRange: "$25-30",
    lumens: "915 lumens",
    wattage: "14W",
    spectrum: "Full Spectrum",
    sizeRange: "12-18 inches",
    pros: [
      "More energy efficient than 957",
      "Built-in light risers for easier maintenance",
      "Lower electricity costs ($8.51/year)",
      "Supports red plants",
      "Advanced customization"
    ],
    cons: [
      "Inline controller (may be less convenient)",
      "Slightly fewer lumens than 957",
      "Higher initial cost"
    ],
    bestFor: "Energy-conscious aquascapers with heavily planted tanks",
    rating: 5
  },
  {
    id: 5,
    name: "Chihiros A2 Series",
    priceRange: "$47-54",
    lumens: "1,628 lumens (30cm) / 1,957 lumens (45cm)",
    wattage: "15W (30cm) / 21W (45cm)",
    spectrum: "White LED Only",
    sizeRange: "Fixed sizes for specific tanks",
    pros: [
      "75-126% more lumens than other options",
      "Bluetooth app control (faster, easier)",
      "Built-in risers for excellent light distribution",
      "Energy efficient despite high output",
      "Great reputation in aquascaping community",
      "Fast red plant coloration (observed within 6 days)"
    ],
    cons: [
      "Most expensive option (73-174% more)",
      "Not full spectrum (white LED only)",
      "Fixed legs (must match exact tank size)",
      "Runs warm like Higer 957",
      "Requires smartphone app to control"
    ],
    bestFor: "Serious aquascapers ready to grow medium-advanced category plants including reds",
    rating: 5
  }
];

export const topProducts: Product[] = [
  {
    name: "GooingTop LED Grow Light",
    affiliateLink: "https://amzn.to/4o9uIop",
    price: "$25-35",
    rating: 5,
    videoUrl: "https://a.co/d/aNenpLc",
    features: [
      "6000K White Light: 10 Red + 74 White LEDs, similar to full-spectrum sunlight at noon",
      "High Color Rendering Index (CRI 95): Soft, flicker-free light perfect for both plants and reading",
      "Timer Function: 4h, 8h, or 12h auto on/off based on 24-hour cycle",
      "Flexible Gooseneck & Strong Clamp: Position at any angle for optimal plant coverage",
      "Energy Efficient: Just 10W consumption (equivalent to 50W halogen), ~$2/month cost",
      "365 Days Warranty: Full replacement guarantee with 24h customer service"
    ],
    description: "Perfect for aquarium plant enthusiasts who want precise control over lighting angles. The flexible gooseneck design allows you to target specific plant areas, while the timer ensures consistent photoperiods. With CRI 95, your aquarium will look stunning while plants receive optimal light for photosynthesis.",
  },
  {
    name: "AQUANEAT LED Aquarium Light Full Spectrum",
    affiliateLink: "https://amzn.to/4pwCZUI",
    price: "$20-28",
    rating: 4,
    videoUrl: "https://a.co/d/26jAvNX",
    features: [
      "Perfect Fit for 10-24 Inch Tanks: Two extendable brackets fit 18-24 inch aquariums",
      "42 LED Configuration: 30x 6500K white, 6x blue, 3x pink, 3x green LEDs",
      "Super Bright & Energy Efficient: Suitable for all freshwater aquarium plants",
      "Simple On/Off Mode: No timer, no dimming - straightforward operation",
      "Compact Design: 17\" L x 2.7\" W body, min assembled size 18.5\" L",
      "Note: Not waterproof - keep away from splashing water"
    ],
    description: "An excellent entry-level full-spectrum light for 10-gallon planted tanks. The 42-LED configuration provides balanced light for most common aquarium plants. While it lacks advanced features like timers or dimming, its straightforward design makes it perfect for beginners who want reliable, affordable lighting without complexity.",
  }
];

export const proTips: ProTip[] = [
  {
    icon: "⏱️",
    title: "Start with 6 Hours Daily",
    description: "Begin with a 6-hour photoperiod and gradually increase if needed. This prevents algae blooms while establishing your planted tank."
  },
  {
    icon: "📊",
    title: "Monitor Your Plants, Not Just Specs",
    description: "Pale leaves mean insufficient light; algae growth means too much. Adjust intensity based on plant response, not just lumen numbers."
  },
  {
    icon: "🔄",
    title: "Match Light to Plant Difficulty",
    description: "Easy plants (Anubias, Java Fern) thrive under 720-774 lumens. Medium plants need 900+. Advanced red plants require 1,600+ lumens."
  },
  {
    icon: "🌡️",
    title: "Check Light Temperature",
    description: "High-wattage lights generate heat. Ensure adequate ventilation and monitor water temperature, especially in smaller tanks."
  },
  {
    icon: "💰",
    title: "Calculate Long-Term Costs",
    description: "A $15 light using 20W costs $12/year. A $30 light using 14W costs $8.50/year. Energy efficiency pays off over time."
  },
  {
    icon: "📱",
    title: "Consider Control Convenience",
    description: "App-controlled lights (like Chihiros) are faster to adjust. Button controls are more reliable but slower to customize."
  }
];

export const plantCategories: PlantCategory[] = [
  {
    category: "Easy Plants",
    lightRequirement: "Low to Medium (20-40 lumens/L)",
    examples: ["Anubias", "Java Fern", "Java Moss", "Cryptocoryne"],
    recommendedLumen: "720-900 lumens (Siora SR616, Higer 058)",
    icon: "🌿"
  },
  {
    category: "Medium Plants",
    lightRequirement: "Medium (40-60 lumens/L)",
    examples: ["Amazon Sword", "Vallisneria", "Hygrophila", "Ludwigia"],
    recommendedLumen: "900-1,200 lumens (Higer 957, Higer 076)",
    icon: "🪴"
  },
  {
    category: "Advanced Plants & Reds",
    lightRequirement: "High (60+ lumens/L)",
    examples: ["Rotala Blood Red", "Ludwigia Mini Super Red", "Redroot Floaters", "Carpeting Plants"],
    recommendedLumen: "1,600+ lumens (Chihiros A2 Series)",
    icon: "🌺"
  }
];

export const comparisonData = {
  videoUrl: "https://youtu.be/IvxX7jtEfzQ",
  videoTitle: "5 Cheap Aquarium Lights For Planted Tanks – Tested and Reviewed!",
  videoDescription: "Comprehensive review and testing of budget-friendly aquarium lights, comparing performance, energy efficiency, and plant growth results."
};
