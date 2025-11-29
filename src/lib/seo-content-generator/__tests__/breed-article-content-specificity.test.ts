/**
 * Property-Based Test for Breed Article Content Specificity
 * **Feature: blog-content-improvement, Property 1: Content Specificity**
 * **Validates: Requirements 1.1, 10.1**
 * 
 * Property 1: Content Specificity
 * For any blog article targeting a specific keyword, the article content SHALL include 
 * specific, factual information directly relevant to that keyword (not generic template content).
 * 
 * This test verifies that breed articles mention specific breeds by name and include
 * specific, factual information rather than generic template content.
 */

import fc from 'fast-check';
import { ContentQualityValidator } from '../content-quality-validator';
import { ArticleStructureGenerator } from '../article-structure-generator';
import { ArticleStructure } from '../types';

describe('Property 1: Content Specificity for Breed Articles', () => {
  let validator: ContentQualityValidator;
  let generator: ArticleStructureGenerator;

  beforeEach(() => {
    validator = new ContentQualityValidator();
    generator = new ArticleStructureGenerator();
  });

  /**
   * Property: Breed articles must contain specific breed names
   * 
   * For any breed-related keyword, the generated article content SHALL include
   * specific breed names (not generic references like "dog" or "breed").
   * 
   * This ensures articles provide specific, actionable information rather than
   * generic template content.
   */
  test('Property 1.1: Breed articles contain specific breed names', () => {
    const breedKeywords = [
      'best dog breeds for families',
      'dog breeds for apartments',
      'dog breeds for first time owners',
      'friendliest dog breeds',
      'rare dog breeds',
      'dog breed characteristics',
      'dog breed temperament',
      'dog breed health issues',
      'dog breed exercise requirements',
      'dog breed grooming needs'
    ];

    // List of specific breed names that should appear in breed articles
    const specificBreeds = [
      'Labrador', 'Golden Retriever', 'Beagle', 'Bulldog', 'Poodle',
      'German Shepherd', 'Dachshund', 'Husky', 'Boxer', 'Corgi',
      'Retriever', 'Spaniel', 'Terrier', 'Shepherd', 'Setter'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...breedKeywords),
        (keyword: string) => {
          // Generate article content for the breed keyword
          const content = generator.generateStructure(keyword);

          // Extract full text from article
          const fullText = [
            content.title,
            content.summary,
            content.sections.introduction,
            content.sections.coreContent,
            content.sections.conclusion
          ].join(' ').toLowerCase();

          // Check that at least one specific breed name appears in the content
          const containsSpecificBreed = specificBreeds.some(breed =>
            fullText.includes(breed.toLowerCase())
          );

          // Property: Breed articles MUST contain at least one specific breed name
          return containsSpecificBreed;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Article content must not be purely generic template content
   * 
   * For any article, the core content section SHALL contain specific information
   * that is relevant to the target keyword (not just generic filler text).
   * 
   * This ensures articles provide real value rather than template-generated content.
   */
  test('Property 1.2: Article content is specific, not generic template', () => {
    const keywords = [
      'dog breed characteristics',
      'dog breed temperament',
      'dog breed health issues',
      'dog breed exercise requirements'
    ];

    // Generic phrases that indicate template content (should be minimal)
    const genericPhrases = [
      'this breed is known for',
      'this dog is a great',
      'these dogs are very',
      'this type of dog',
      'dogs of this breed'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          const coreContent = content.sections.coreContent.toLowerCase();

          // Count generic phrases
          const genericPhraseCount = genericPhrases.filter(phrase =>
            coreContent.includes(phrase)
          ).length;

          // Count total sentences (rough estimate)
          const sentenceCount = coreContent.split(/[.!?]+/).length;

          // Property: Generic phrases should be less than 30% of sentences
          // This allows some generic transitions but requires mostly specific content
          const genericRatio = genericPhraseCount / Math.max(sentenceCount, 1);
          return genericRatio < 0.3;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Article content must include specific data points
   * 
   * For any breed article, the content SHALL include specific, measurable information
   * such as size ranges, weight, lifespan, or other factual data points.
   * 
   * This ensures articles provide concrete, actionable information.
   */
  test('Property 1.3: Breed articles include specific data points', () => {
    const breedKeywords = [
      'dog breed characteristics',
      'dog breed cost',
      'dog breed lifespan',
      'dog breed size comparison'
    ];

    // Patterns that indicate specific data (numbers, measurements, ranges)
    const dataPatterns = [
      /\d+\s*(pounds|lbs|kg|kilograms)/i,  // Weight
      /\d+\s*-\s*\d+\s*(years|months)/i,   // Lifespan
      /\d+\s*-\s*\d+\s*(inches|cm)/i,      // Height/Size
      /\$\d+/,                              // Cost
      /\d+\s*%/,                            // Percentages
      /\d+\s*(calories|kcal)/i              // Nutrition
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...breedKeywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          const fullText = [
            content.sections.introduction,
            content.sections.coreContent,
            content.sections.conclusion
          ].join(' ');

          // Check that at least one data pattern appears in the content
          const containsDataPoints = dataPatterns.some(pattern =>
            pattern.test(fullText)
          );

          // Property: Articles MUST contain at least one specific data point
          return containsDataPoints;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Article content must address the search intent
   * 
   * For any article with a specific keyword, the content SHALL directly address
   * the search intent by answering key questions (what, why, how, when).
   * 
   * This ensures articles are relevant to what users are searching for.
   */
  test('Property 1.4: Article content addresses search intent', () => {
    const keywordIntentMap: Record<string, string[]> = {
      'best dog breeds for families': ['family', 'children', 'friendly', 'gentle', 'safe'],
      'dog breeds for apartments': ['apartment', 'small', 'quiet', 'low', 'space'],
      'dog breed characteristics': ['size', 'temperament', 'energy', 'grooming', 'breed'],
      'dog breed health issues': ['health', 'issue', 'condition', 'genetic', 'dysplasia'],
      'dog breed exercise requirements': ['exercise', 'activity', 'energy', 'walk', 'run']
    };

    fc.assert(
      fc.property(
        fc.constantFrom(...Object.keys(keywordIntentMap)),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          const fullText = [
            content.title,
            content.sections.introduction,
            content.sections.coreContent,
            content.sections.conclusion
          ].join(' ').toLowerCase();

          // Get intent keywords for this search query
          const intentKeywords = keywordIntentMap[keyword] || [];

          // Check that at least 50% of intent keywords appear in the content
          const matchedIntentKeywords = intentKeywords.filter(keyword =>
            fullText.includes(keyword.toLowerCase())
          ).length;

          const intentCoverage = matchedIntentKeywords / Math.max(intentKeywords.length, 1);

          // Property: Content MUST address at least 50% of search intent keywords
          return intentCoverage >= 0.5;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Article content must be sufficiently detailed
   * 
   * For any article, the core content section SHALL be substantial enough to
   * provide real value (not just a few sentences of generic information).
   * 
   * This ensures articles meet minimum quality standards for depth.
   */
  test('Property 1.5: Article content is sufficiently detailed', () => {
    const keywords = [
      'dog breed characteristics',
      'dog breed temperament',
      'dog breed health issues',
      'best dog breeds for families'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);

          // Calculate content metrics
          const coreContentLength = content.sections.coreContent.length;
          const coreContentWords = content.sections.coreContent.split(/\s+/).length;
          const paragraphCount = content.sections.coreContent.split(/\n\n+/).length;

          // Property: Core content MUST be at least 500 characters and 100 words
          // with at least 3 paragraphs for proper structure
          return (
            coreContentLength >= 500 &&
            coreContentWords >= 100 &&
            paragraphCount >= 3
          );
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Integration test: Validate complete article specificity
   * 
   * This test validates that generated breed articles include specific breed information
   * and are not just generic template content.
   */
  test('Property 1.6: Generated breed articles include specific breed information', () => {
    const breedKeywords = [
      'best dog breeds for families',
      'dog breeds for apartments',
      'dog breed characteristics'
    ];

    // Specific breed names that should appear in breed articles
    const specificBreeds = [
      'Labrador', 'Golden Retriever', 'Beagle', 'Bulldog', 'Poodle',
      'German Shepherd', 'Dachshund', 'Husky', 'Boxer', 'Corgi'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...breedKeywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);

          // Extract full text from article
          const fullText = [
            content.title,
            content.summary,
            content.sections.introduction,
            content.sections.coreContent,
            content.sections.conclusion
          ].join(' ').toLowerCase();

          // Property: Breed articles MUST contain specific breed names
          // This ensures they include specific information, not just generic content
          const containsSpecificBreed = specificBreeds.some(breed =>
            fullText.includes(breed.toLowerCase())
          );

          return containsSpecificBreed;
        }
      ),
      { numRuns: 100 }
    );
  });
});
