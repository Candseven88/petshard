export interface LightingFactor {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  keyPoints: string[];
  icon: string;
}

export interface AquariumLight {
  id: number;
  name: string;
  priceRange: string;
  lumens: string;
  wattage: string;
  spectrum: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  rating: number;
  sizeRange?: string;
}

export interface Product {
  name: string;
  affiliateLink: string;
  features: string[];
  description: string;
  price?: string;
  rating?: number;
  videoUrl?: string;
  imageUrl?: string;
}

export interface ProTip {
  icon: string;
  title: string;
  description: string;
}

export interface PlantCategory {
  category: string;
  lightRequirement: string;
  examples: string[];
  recommendedLumen: string;
  icon: string;
}
