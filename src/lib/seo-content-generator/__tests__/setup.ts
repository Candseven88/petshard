// Test setup and utilities for SEO Content Generator
import * as fc from 'fast-check';
import { KeywordInput, GenerationConfig, DEFAULT_CONFIG } from '../types';

// Property-based test generators
export const keywordArbitrary = fc.string({ minLength: 3, maxLength: 50 })
  .filter(s => s.trim().length > 0);

export const keywordListArbitrary = fc.array(keywordArbitrary, { minLength: 1, maxLength: 20 });

export const keywordInputArbitrary: fc.Arbitrary<KeywordInput> = fc.record({
  keywords: keywordListArbitrary,
  targetAudience: fc.option(fc.string()),
  contentFocus: fc.option(fc.constantFrom('breed', 'health', 'care', 'general')),
});

export const configArbitrary: fc.Arbitrary<GenerationConfig> = fc.record({
  minWordCount: fc.integer({ min: 500, max: 800 }),
  maxWordCount: fc.integer({ min: 1000, max: 1500 }),
  minKeywordDensity: fc.integer({ min: 4, max: 6 }),
  maxKeywordDensity: fc.integer({ min: 8, max: 12 }),
  minFAQItems: fc.integer({ min: 3, max: 5 }),
  minUseCases: fc.integer({ min: 2, max: 3 }),
  minInternalLinks: fc.integer({ min: 1, max: 3 }),
  summaryMinLength: fc.integer({ min: 30, max: 40 }),
  summaryMaxLength: fc.integer({ min: 50, max: 70 }),
});

// Test utilities
export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

export function countKeywordOccurrences(text: string, keyword: string): number {
  const regex = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  return (text.match(regex) || []).length;
}

export function hasRequiredSections(content: any): boolean {
  return !!(
    content.title &&
    content.summary &&
    content.sections?.introduction &&
    content.sections?.coreContent &&
    content.sections?.useCases &&
    content.sections?.faq &&
    content.sections?.conclusion
  );
}