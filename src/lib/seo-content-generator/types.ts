// Core TypeScript interfaces for SEO Content Generator

export interface KeywordInput {
  keywords: string[];
  targetAudience?: string;
  contentFocus?: 'breed' | 'health' | 'care' | 'general';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface InternalLink {
  text: string;
  url: string;
  context: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
}

export interface ArticleStructure {
  title: string;
  summary: string;
  sections: {
    introduction: string;
    coreContent: string;
    useCases: string[];
    faq: FAQItem[];
    conclusion: string;
  };
  metadata: SEOMetadata;
  internalLinks: InternalLink[];
}

export interface GeneratedArticle {
  keyword: string;
  content: ArticleStructure;
  componentCode: string;
  filePath: string;
  wordCount: number;
  keywordDensity: number;
}

export interface ContentValidationResult {
  isValid: boolean;
  wordCount: number;
  keywordDensity: number;
  hasRequiredSections: boolean;
  hasMinimumFAQ: boolean;
  hasMinimumUseCases: boolean;
  hasInternalLinks: boolean;
  errors: string[];
}

export interface GenerationConfig {
  minWordCount: number;
  maxWordCount: number;
  minKeywordDensity: number;
  maxKeywordDensity: number;
  minFAQItems: number;
  minUseCases: number;
  minInternalLinks: number;
  summaryMinLength: number;
  summaryMaxLength: number;
}

export const DEFAULT_CONFIG: GenerationConfig = {
  minWordCount: 800,
  maxWordCount: 1200,
  minKeywordDensity: 6,
  maxKeywordDensity: 10,
  minFAQItems: 5,
  minUseCases: 3,
  minInternalLinks: 2,
  summaryMinLength: 40,
  summaryMaxLength: 60,
};

// Additional interfaces for enhanced validation
export interface SelfValidationResult {
  isValid: boolean;
  overallScore: number;
  errors: string[];
  warnings: string[];
  suggestions: string[];
  checks: {
    basicValidation: ContentValidationResult;
    readabilityCheck: { readabilityScore: 'good' | 'fair' | 'poor' };
    seoCheck: SEOComplianceCheck;
    structuralCheck: StructuralIntegrityCheck;
    linkCheck: InternalLinkQualityCheck;
  };
}

export interface SEOComplianceCheck {
  hasKeywordInTitle: boolean;
  hasKeywordInFirstParagraph: boolean;
  hasKeywordInConclusion: boolean;
  hasMetaDescription: boolean;
  hasStructuredData: boolean;
  titleLength: number;
  metaDescriptionLength: number;
}

export interface StructuralIntegrityCheck {
  hasBalancedSections: boolean;
  hasLogicalFlow: boolean;
  sectionCount: number;
  averageSectionLength: number;
}

export interface InternalLinkQualityCheck {
  linkCount: number;
  hasRelevantLinks: boolean;
  hasDiverseTargets: boolean;
  averageLinkTextLength: number;
}

export interface QualityReport {
  summary: {
    totalArticles: number;
    validArticles: number;
    invalidArticles: number;
    averageScore: number;
    duplicateContent: number;
  };
  issues: {
    commonErrors: Array<{item: string, count: number}>;
    commonWarnings: Array<{item: string, count: number}>;
    totalSuggestions: number;
  };
  recommendations: string[];
  generatedAt: string;
}