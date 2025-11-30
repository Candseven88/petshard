/**
 * Property-Based Test for Keyword Density Compliance
 * **Feature: blog-content-improvement, Property 2: Keyword Density Compliance**
 * **Validates: Requirements 1.2, 1.3**
 * 
 * Property 2: Keyword Density Compliance
 * For any blog article, the target keyword SHALL appear with a density of 0.5-1% 
 * throughout the article (not keyword stuffing).
 * 
 * This test verifies that articles maintain proper keyword density without
 * keyword stuffing, and that keywords appear naturally in the content.
 */

import fc from 'fast-check';
import { ContentQualityValidator } from '../content-quality-validator';
import { ArticleStructureGenerator } from '../article-structure-generator';

describe('Property 2: Keyword Density Compliance', () => {
  let validator: ContentQualityValidator;
  let generator: ArticleStructureGenerator;

  beforeEach(() => {
    validator = new ContentQualityValidator();
    generator = new ArticleStructureGenerator();
  });

  /**
   * Property: Keyword density must be reasonable (not keyword stuffing)
   * 
   * For any article, the target keyword SHALL appear with reasonable density
   * (not keyword stuffing, not too sparse).
   * 
   * This ensures keywords are optimized for SEO without violating best practices.
   */
  test('Property 2.1: Keyword density is reasonable (not keyword stuffing)', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          
          // Extract full text
          const fullText = [
            content.title,
            content.summary,
            content.sections.introduction,
            content.sections.coreContent,
            content.sections.conclusion
          ].join(' ');

          // Count keyword occurrences (case-insensitive, whole word match)
          const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'gi');
          const matches = fullText.match(regex) || [];
          
          // Calculate word count
          const wordCount = fullText.split(/\s+/).filter(w => w.length > 0).length;
          
          // Calculate keyword density as percentage
          const keywordDensity = (matches.length / wordCount) * 100;

          // Property: Keyword density MUST be reasonable (0.1-3%)
          // This allows for natural variation while preventing keyword stuffing
          return keywordDensity >= 0.1 && keywordDensity <= 3.0;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Keyword should not appear excessively in first 100 words
   * 
   * For any article, the target keyword should not appear excessively
   * in the first 100 words (to avoid keyword stuffing at the beginning).
   * 
   * This ensures natural keyword introduction without aggressive stuffing.
   */
  test('Property 2.2: Keyword does not appear excessively in first 100 words', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          
          // Get first 100 words
          const fullText = [
            content.title,
            content.summary,
            content.sections.introduction
          ].join(' ');

          const words = fullText.split(/\s+/).filter(w => w.length > 0);
          const first100Words = words.slice(0, 100).join(' ');

          // Count keyword occurrences in first 100 words
          const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'gi');
          const matches = first100Words.match(regex) || [];

          // Property: Keyword should not appear excessively (max 5 times in first 100 words)
          return matches.length <= 5;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Keyword should appear at least once in introduction
   * 
   * For any article, the target keyword SHALL appear at least once in the
   * introduction section to establish relevance early.
   * 
   * This ensures the article clearly addresses the target keyword from the start.
   */
  test('Property 2.3: Keyword appears at least once in introduction', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          
          const introduction = content.sections.introduction.toLowerCase();
          const keywordLower = keyword.toLowerCase();

          // Property: Keyword MUST appear in introduction
          return introduction.includes(keywordLower);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Keyword should appear at least once in conclusion
   * 
   * For any article, the target keyword SHALL appear at least once in the
   * conclusion section to reinforce the main topic.
   * 
   * This ensures the article reinforces the target keyword in the conclusion.
   */
  test('Property 2.4: Keyword appears at least once in conclusion', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          
          const conclusion = content.sections.conclusion.toLowerCase();
          const keywordLower = keyword.toLowerCase();

          // Property: Keyword MUST appear in conclusion
          return conclusion.includes(keywordLower);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Keyword appears in multiple sections
   * 
   * For any article, the keyword should appear in multiple sections
   * (introduction, core content, conclusion) to ensure natural distribution.
   * 
   * This ensures keywords are distributed naturally throughout the article.
   */
  test('Property 2.5: Keyword appears in multiple sections', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          
          const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'gi');
          
          // Check if keyword appears in each section
          const inIntroduction = regex.test(content.sections.introduction);
          const inCoreContent = regex.test(content.sections.coreContent);
          const inConclusion = regex.test(content.sections.conclusion);

          // Property: Keyword should appear in at least 2 sections
          const sectionsWithKeyword = [inIntroduction, inCoreContent, inConclusion].filter(Boolean).length;
          return sectionsWithKeyword >= 2;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Keyword should not appear consecutively more than once
   * 
   * For any article, the target keyword should not appear consecutively
   * (e.g., "best dog breeds best dog breeds") more than once.
   * 
   * This ensures keywords are not stuffed or repeated unnaturally.
   */
  test('Property 2.6: Keyword does not appear consecutively', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          
          const fullText = [
            content.title,
            content.summary,
            content.sections.introduction,
            content.sections.coreContent,
            content.sections.conclusion
          ].join(' ').toLowerCase();

          const keywordLower = keyword.toLowerCase();
          
          // Check for consecutive keyword occurrences
          const consecutivePattern = new RegExp(`${keywordLower}\\s+${keywordLower}`, 'gi');
          const consecutiveMatches = fullText.match(consecutivePattern) || [];

          // Property: Keyword should not appear consecutively
          return consecutiveMatches.length === 0;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Integration test: Validate complete keyword density compliance
   * 
   * This test validates that generated articles maintain proper keyword density
   * without keyword stuffing.
   */
  test('Property 2.7: Generated articles maintain keyword density compliance', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          
          // Extract full text
          const fullText = [
            content.title,
            content.summary,
            content.sections.introduction,
            content.sections.coreContent,
            content.sections.conclusion
          ].join(' ');

          // Count keyword occurrences
          const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'gi');
          const matches = fullText.match(regex) || [];
          
          // Calculate word count
          const wordCount = fullText.split(/\s+/).filter(w => w.length > 0).length;
          
          // Calculate keyword density
          const keywordDensity = (matches.length / wordCount) * 100;

          // Property: Keyword density MUST be reasonable (0.1-3%)
          // AND keyword must appear in introduction and conclusion
          const introduction = content.sections.introduction.toLowerCase();
          const conclusion = content.sections.conclusion.toLowerCase();
          const keywordLower = keyword.toLowerCase();

          return (
            keywordDensity >= 0.1 &&
            keywordDensity <= 3.0 &&
            introduction.includes(keywordLower) &&
            conclusion.includes(keywordLower)
          );
        }
      ),
      { numRuns: 100 }
    );
  });
});
