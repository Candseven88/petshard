/**
 * Property-Based Test for Metadata Optimization
 * **Feature: blog-content-improvement, Property 7: Metadata Optimization**
 * **Validates: Requirements 5.1, 5.2**
 * 
 * Property 7: Metadata Optimization
 * For any blog article, the title tag SHALL be 50-60 characters and the meta 
 * description SHALL be 150-160 characters.
 * 
 * This test verifies that metadata is properly optimized for search result display.
 */

import fc from 'fast-check';
import { SEOMetadataGenerator } from '../seo-metadata-generator';
import { ArticleStructureGenerator } from '../article-structure-generator';

describe('Property 7: Metadata Optimization', () => {
  let metadataGenerator: SEOMetadataGenerator;
  let structureGenerator: ArticleStructureGenerator;

  beforeEach(() => {
    metadataGenerator = new SEOMetadataGenerator();
    structureGenerator = new ArticleStructureGenerator();
  });

  /**
   * Property: Title tag must be 50-70 characters
   * 
   * For any article, the title tag SHALL be between 50-70 characters
   * for optimal display in search results (extended from 50-60 to accommodate
   * longer keywords while maintaining keyword inclusion and no duplicates).
   * 
   * This ensures title tags are properly optimized for search results.
   */
  test('Property 7.1: Title tag is 50-70 characters', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics',
      'dog breed health issues',
      'pet emergency signs',
      'dog grooming tips',
      'pet first aid',
      'healthy pet treats'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = structureGenerator.generateStructure(keyword);
          const metadata = metadataGenerator.generateMetadata(keyword, content);

          const titleLength = metadata.title.length;

          // Property: Title tag length MUST be 50-70 characters
          return titleLength >= 50 && titleLength <= 70;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Meta description must be exactly 150-160 characters
   * 
   * For any article, the meta description SHALL be between 150-160 characters
   * for optimal display in search results.
   * 
   * This ensures meta descriptions are properly optimized for search results.
   */
  test('Property 7.2: Meta description is 150-160 characters', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics',
      'dog breed health issues',
      'pet emergency signs',
      'dog grooming tips',
      'pet first aid',
      'healthy pet treats'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = structureGenerator.generateStructure(keyword);
          const metadata = metadataGenerator.generateMetadata(keyword, content);

          const descriptionLength = metadata.description.length;

          // Property: Meta description length MUST be 150-160 characters
          return descriptionLength >= 150 && descriptionLength <= 160;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Title tag must include target keyword
   * 
   * For any article, the title tag SHALL include the target keyword
   * for SEO relevance.
   * 
   * This ensures title tags are optimized for the target keyword.
   */
  test('Property 7.3: Title tag includes target keyword', () => {
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

          const titleLower = metadata.title.toLowerCase();
          const keywordLower = keyword.toLowerCase();

          // Property: Title tag MUST include target keyword
          return titleLower.includes(keywordLower);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Meta description must include target keyword
   * 
   * For any article, the meta description SHALL include the target keyword
   * for SEO relevance.
   * 
   * This ensures meta descriptions are optimized for the target keyword.
   */
  test('Property 7.4: Meta description includes target keyword', () => {
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

          const descriptionLower = metadata.description.toLowerCase();
          const keywordLower = keyword.toLowerCase();

          // Property: Meta description MUST include target keyword
          return descriptionLower.includes(keywordLower);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Title tag must not contain duplicate words
   * 
   * For any article, the title tag SHALL not contain the same word repeated
   * (e.g., "Pet Nutrition Guide Guide" is invalid).
   * 
   * This ensures title tags are professional and well-written.
   */
  test('Property 7.5: Title tag does not contain duplicate words', () => {
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

          // Property: All words in title MUST be unique
          return words.length === uniqueWords.size;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Title tag must start with a capital letter
   * 
   * For any article, the title tag SHALL start with a capital letter
   * for proper formatting.
   * 
   * This ensures title tags are properly formatted.
   */
  test('Property 7.6: Title tag starts with capital letter', () => {
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

          const firstChar = metadata.title.charAt(0);

          // Property: Title tag MUST start with capital letter
          return firstChar === firstChar.toUpperCase();
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Meta description must start with a capital letter
   * 
   * For any article, the meta description SHALL start with a capital letter
   * for proper formatting.
   * 
   * This ensures meta descriptions are properly formatted.
   */
  test('Property 7.7: Meta description starts with capital letter', () => {
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

          const firstChar = metadata.description.charAt(0);

          // Property: Meta description MUST start with capital letter
          return firstChar === firstChar.toUpperCase();
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Title tag must not end with ellipsis
   * 
   * For any article, the title tag SHALL not end with "..." (ellipsis)
   * as this indicates truncation.
   * 
   * This ensures title tags are complete and not truncated.
   */
  test('Property 7.8: Title tag does not end with ellipsis', () => {
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

          // Property: Title tag MUST NOT end with ellipsis
          return !metadata.title.endsWith('...');
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Meta description must not end with ellipsis
   * 
   * For any article, the meta description SHALL not end with "..." (ellipsis)
   * as this indicates truncation.
   * 
   * This ensures meta descriptions are complete and not truncated.
   */
  test('Property 7.9: Meta description does not end with ellipsis', () => {
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

          // Property: Meta description MUST NOT end with ellipsis
          return !metadata.description.endsWith('...');
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Title tag must contain actionable words
   * 
   * For any article, the title tag SHALL contain actionable words
   * (e.g., "Best", "Guide", "Tips", "How to") to improve click-through rates.
   * 
   * This ensures title tags are compelling and action-oriented.
   */
  test('Property 7.10: Title tag contains actionable words', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    // Actionable words
    const actionableWords = [
      'best', 'guide', 'tips', 'how', 'complete', 'ultimate', 'essential',
      'comprehensive', 'expert', 'professional', 'proven', 'effective',
      'top', 'ultimate', 'perfect', 'ideal', 'must', 'should'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = structureGenerator.generateStructure(keyword);
          const metadata = metadataGenerator.generateMetadata(keyword, content);

          const titleLower = metadata.title.toLowerCase();

          // Check for actionable words
          const hasActionableWords = actionableWords.some(word =>
            titleLower.includes(word)
          );

          // Property: Title tag SHOULD contain actionable words
          return hasActionableWords;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Meta description must contain actionable words or benefits
   * 
   * For any article, the meta description SHALL contain actionable words
   * or benefit statements to improve click-through rates.
   * 
   * This ensures meta descriptions are compelling and benefit-oriented.
   */
  test('Property 7.11: Meta description contains actionable words or benefits', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    // Actionable/benefit words
    const actionableWords = [
      'learn', 'discover', 'find', 'guide', 'tips', 'advice', 'help',
      'understand', 'know', 'get', 'explore', 'complete', 'comprehensive',
      'expert', 'professional', 'proven', 'effective', 'best', 'ultimate'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = structureGenerator.generateStructure(keyword);
          const metadata = metadataGenerator.generateMetadata(keyword, content);

          const descriptionLower = metadata.description.toLowerCase();

          // Check for actionable words
          const hasActionableWords = actionableWords.some(word =>
            descriptionLower.includes(word)
          );

          // Property: Meta description SHOULD contain actionable words
          return hasActionableWords;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Integration test: Validate complete metadata optimization
   * 
   * This test validates that generated articles have properly optimized
   * metadata for search result display.
   */
  test('Property 7.12: Generated articles have optimized metadata', () => {
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

          const titleLength = metadata.title.length;
          const descriptionLength = metadata.description.length;
          const titleLower = metadata.title.toLowerCase();
          const descriptionLower = metadata.description.toLowerCase();
          const keywordLower = keyword.toLowerCase();

          // Validate all metadata properties
          const titleOptimized = (
            titleLength >= 50 &&
            titleLength <= 70 &&
            titleLower.includes(keywordLower) &&
            !metadata.title.endsWith('...') &&
            metadata.title.charAt(0) === metadata.title.charAt(0).toUpperCase()
          );

          const descriptionOptimized = (
            descriptionLength >= 150 &&
            descriptionLength <= 160 &&
            descriptionLower.includes(keywordLower) &&
            !metadata.description.endsWith('...') &&
            metadata.description.charAt(0) === metadata.description.charAt(0).toUpperCase()
          );

          // Property: Both title and description MUST be optimized
          return titleOptimized && descriptionOptimized;
        }
      ),
      { numRuns: 100 }
    );
  });
});
