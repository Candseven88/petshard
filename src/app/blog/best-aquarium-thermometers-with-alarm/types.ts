export interface Thermometer {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
  priceRange: string;
  accuracy: string;
  features: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  rating: number;
}

export interface Product {
  name: string;
  affiliateLink: string;
  features: string[];
  description: string;
  imageUrl?: string;
  price?: string;
  rating?: number;
}

export interface ProTip {
  icon: string;
  text: string;
}

export interface TemperatureGuide {
  fishType: string;
  tempRange: string;
  icon: string;
}
