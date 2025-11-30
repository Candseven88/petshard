/**
 * Property-Based Test for Metadata Uniqueness
 * **Feature: blog-content-improvement, Property 3: Metadata Uniqueness**
 * **Validates: Requirements 5.5**
 * 
 * Property 3: Metadata Uniqueness
 * For any two different blog articles, their title tags and meta descriptions 
 * SHALL be unique (no duplicates).
 * 
 * This test verifies that all articles have unique metadata to avoid
 * duplicate content issues in search results.
 */

import fc from 'fast-check';
import { SEOMetadataGenerator } from '../seo-metadata-generator';
import { ArticleStructureGenerator } from '../article-structure-generator';

describe('Property 3: Metadata Uniqueness', () => {
  let metadataGenerator: SEOMetadataGenerator;
  let structureGenerator: ArticleStructureGenerator;

  beforeEach(() => {
    metadataGenerator = new SEOMetadataGenerator();
    structureGenerator = new ArticleStructureGenerator();
  });

  /**
   * Property: Title tags must be unique across articles
   * 
   * For any two different keywords, the generated title tags SHALL be different.
   * 
   * This ensures each article has a unique title tag for SEO purposes.
   */
  test('Property 3.1: Title tags are unique across different articles', () => {
    const keywords = [
      'best dog breeds for families',
      'best dog breeds for apartments',
      'best dog breeds for first time owners',
      'friendliest dog breeds',
      'rare dog breeds',
      'dog breed characteristics',
      'dog breed temperament',
      'dog breed health issues',
      'dog breed exercise requirements',
      'dog breed grooming needs'
    ];

    fc.assert(
      fc.property(
        fc.tuple(
          fc.constantFrom(...keywords),
          fc.constantFrom(...keywords)
        ),
        ([keyword1, keyword2]: [string, string]) => {
          // Skip if same keyword
          if (keyword1 === keyword2) {
            return true;
          }

          const content1 = structureGenerator.generateStructure(keyword1);
          const content2 = structureGenerator.generateStructure(keyword2);

          const metadata1 = metadataGenerator.generateMetadata(keyword1, content1);
          const metadata2 = metadataGenerator.generateMetadata(keyword2, content2);

          // Property: Title tags MUST be different for different keywords
          return metadata1.title !== metadata2.title;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Meta descriptions must be unique across articles
   * 
   * For any two different keywords, the generated meta descriptions SHALL be different.
   * 
   * This ensures each article has a unique meta description for SEO purposes.
   */
  test('Property 3.2: Meta descriptions are unique across different articles', () => {
    const keywords = [
      'best dog breeds for families',
      'best dog breeds for apartments',
      'best dog breeds for first time owners',
      'friendliest dog breeds',
      'rare dog breeds',
      'dog breed characteristics',
      'dog breed temperament',
      'dog breed health issues',
      'dog breed exercise requirements',
      'dog breed grooming needs'
    ];

    fc.assert(
      fc.property(
        fc.tuple(
          fc.constantFrom(...keywords),
          fc.constantFrom(...keywords)
        ),
        ([keyword1, keyword2]: [string, string]) => {
          // Skip if same keyword
          if (keyword1 === keyword2) {
            return true;
          }

          const content1 = structureGenerator.generateStructure(keyword1);
          const content2 = structureGenerator.generateStructure(keyword2);

          const metadata1 = metadataGenerator.generateMetadata(keyword1, content1);
          const metadata2 = metadataGenerator.generateMetadata(keyword2, content2);

          // Property: Meta descriptions MUST be different for different keywords
          return metadata1.description !== metadata2.description;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Title tags must be reasonable length
   * 
   * For any article, the title tag SHALL be a reasonable length
   * for optimal search result display (30-100 characters).
   * 
   * This ensures title tags are properly optimized for search results.
   */
  test('Property 3.3: Title tags are reasonable length', () => {
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
          const content = structureGenerator.generateStructure(keyword);
          const metadata = metadataGenerator.generateMetadata(keyword, content);

          // Property: Title tag length MUST be reasonable (30-100 characters)
          return metadata.title.length >= 30 && metadata.title.length <= 100;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Meta descriptions must be reasonable length
   * 
   * For any article, the meta description SHALL be a reasonable length
   * for display in search results (120-200 characters).
   * 
   * This ensures meta descriptions are properly optimized for search results.
   */
  test('Property 3.4: Meta descriptions are reasonable length', () => {
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
          const content = structureGenerator.generateStructure(keyword);
          const metadata = metadataGenerator.generateMetadata(keyword, content);

          // Property: Meta description length MUST be reasonable (120-200 characters)
          return metadata.description.length >= 120 && metadata.description.length <= 200;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Title tags should minimize duplicate words
   * 
   * For any article, the title tag SHOULD NOT contain the same word repeated
   * (e.g., "Pet Nutrition Guide Guide" is invalid).
   * 
   * This ensures title tags are professional and well-written.
   */
  test('Property 3.5: Title tags minimize duplicate words', () => {
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
          const content = structureGenerator.generateStructure(keyword);
          const metadata = metadataGenerator.generateMetadata(keyword, content);

          // Split title into words and check for duplicates
          const words = metadata.title.toLowerCase().split(/\s+/);
          const uniqueWords = new Set(words);

          // Property: At least 80% of words should be unique
          const uniqueRatio = uniqueWords.size / Math.max(words.length, 1);
          return uniqueRatio >= 0.8;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Title tags must include target keyword
   * 
   * For any article, the title tag SHALL include the target keyword
   * for SEO relevance.
   * 
   * This ensures title tags are optimized for the target keyword.
   */
  test('Property 3.6: Title tags include target keyword', () => {
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
          const content = structureGenerator.generateStructure(keyword);
          const metadata = metadataGenerator.generateMetadata(keyword, content);

          // Property: Title tag MUST include target keyword
          return metadata.title.toLowerCase().includes(keyword.toLowerCase());
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Meta descriptions must include target keyword
   * 
   * For any article, the meta description SHALL include the target keyword
   * for SEO relevance.
   * 
   * This ensures meta descriptions are optimized for the target keyword.
   */
  test('Property 3.7: Meta descriptions include target keyword', () => {
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
          const content = structureGenerator.generateStructure(keyword);
          const metadata = metadataGenerator.generateMetadata(keyword, content);

          // Property: Meta description MUST include target keyword
          return metadata.description.toLowerCase().includes(keyword.toLowerCase());
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Meta descriptions must include call-to-action or benefit
   * 
   * For any article, the meta description SHALL include a call-to-action
   * or benefit statement to improve click-through rates.
   * 
   * This ensures meta descriptions are compelling and action-oriented.
   */
  test('Property 3.8: Meta descriptions include call-to-action or benefit', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    // Call-to-action and benefit indicators
    const ctaIndicators = [
      'learn', 'discover', 'find', 'guide', 'tips', 'advice',
      'complete', 'comprehensive', 'expert', 'professional',
      'help', 'understand', 'know', 'get', 'explore'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = structureGenerator.generateStructure(keyword);
          const metadata = metadataGenerator.generateMetadata(keyword, content);

          const descriptionLower = metadata.description.toLowerCase();

          // Check for at least one CTA indicator
          const hasCTA = ctaIndicators.some(indicator =>
            descriptionLower.includes(indicator)
          );

          // Property: Meta description MUST include CTA or benefit
          return hasCTA;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Integration test: Validate complete metadata optimization
   * 
   * This test validates that generated articles have properly
   * optimized metadata.
   */
  test('Property 3.9: Generated articles have optimized metadata', () => {
    const keywords = [
      'best dog breeds for families',
      'best dog breeds for apartments',
      'best dog breeds for first time owners',
      'friendliest dog breeds',
      'rare dog breeds'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = structureGenerator.generateStructure(keyword);
          const metadata = metadataGenerator.generateMetadata(keyword, content);

          // Validate metadata properties
          return (
            metadata.title.length >= 40 &&
            metadata.title.length <= 70 &&
            metadata.description.length >= 120 &&
            metadata.description.length <= 200 &&
            metadata.title.toLowerCase().includes(keyword.toLowerCase()) &&
            metadata.description.toLowerCase().includes(keyword.toLowerCase())
          );
        }
      ),
      { numRuns: 100 }
    );
  });
});
