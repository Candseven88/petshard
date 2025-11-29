// TypeScript interfaces for Pet Dental Health Guide

export interface PetDentalHealthGuideData {
  title: string;
  description: string;
  content: string;
  metadata: {
    keywords: string[];
    category: string;
    readTime: string;
  };
}

export interface DentalIssue {
  title: string;
  description: string;
  causes: string;
  severity: string;
  whenToCallVet: string;
}

export interface DentalCareTimeline {
  age: string;
  care: string;
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
