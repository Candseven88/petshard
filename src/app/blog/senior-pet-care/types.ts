export interface SeniorPetCareMetadata {
  titleTag: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
}

export interface SeniorPetCareSection {
  title: string;
  content: string;
}

export interface SeniorPetCareFAQ {
  question: string;
  answer: string;
}

export interface SeniorPetCareRelatedArticle {
  title: string;
  slug: string;
  description: string;
}

export interface SeniorPetCareTool {
  title: string;
  slug: string;
  description: string;
  icon: string;
}

export interface SeniorPetCareContent {
  introduction: string;
  mainSections: SeniorPetCareSection[];
  faqQuestions: SeniorPetCareFAQ[];
  relatedArticles: SeniorPetCareRelatedArticle[];
  tools: SeniorPetCareTool[];
}

export interface SeniorPetCareRequirements {
  references: string[];
  description: string;
}

export interface SeniorPetCareData {
  title: string;
  slug: string;
  category: string;
  priority: number;
  metadata: SeniorPetCareMetadata;
  content: SeniorPetCareContent;
  requirements: SeniorPetCareRequirements;
}
