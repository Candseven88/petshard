// TypeScript interfaces for DogBreedGroomingNeedsGuide

export interface DogBreedGroomingNeedsGuideData {
  title: string;
  description: string;
  content: string;
  metadata: {
    keywords: string[];
    category: string;
    readTime: string;
  };
}

export interface RelatedTool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface UseCaseItem {
  title: string;
  description: string;
  example?: string;
}
