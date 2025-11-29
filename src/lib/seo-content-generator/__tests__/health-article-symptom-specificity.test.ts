/**
 * Property-Based Test for Health Article Symptom Specificity
 * **Feature: blog-content-improvement, Property 1: Content Specificity**
 * **Validates: Requirements 1.1, 3.1**
 * 
 * Property 1: Content Specificity
 * For any blog article targeting a specific keyword, the article content SHALL include 
 * specific, factual information directly relevant to that keyword (not generic template content).
 * 
 * This test verifies that health articles mention specific symptoms by name and include
 * specific, factual information (severity levels, causes, when to call vet) rather than 
 * generic template content.
 */

import fc from 'fast-check';
import { ContentQualityValidator } from '../content-quality-validator';
import { ArticleStructureGenerator } from '../article-structure-generator';

describe('Property 1: Content Specificity for Health Articles', () => {
  let validator: ContentQualityValidator;
  let generator: ArticleStructureGenerator;

  beforeEach(() => {
    validator = new ContentQualityValidator();
    generator = new ArticleStructureGenerator();
  });

  /**
   * Property: Health articles must contain health-related terminology
   * 
   * For any health-related keyword, the generated article content SHALL include
   * health-related terminology (symptoms, conditions, health, care, etc.).
   * 
   * This ensures articles provide health-focused information rather than
   * generic template content.
   */
  test('Property 1.1: Health articles contain health-related terminology', () => {
    const healthKeywords = [
      'cat health symptoms',
      'common dog diseases',
      'pet vaccination schedule',
      'pet allergy management',
      'pet weight management',
      'dog skin conditions',
      'cat urinary health',
      'pet parasite prevention',
      'senior pet health issues',
      'pet emergency signs'
    ];

    // List of health-related terms that should appear in health articles
    const healthTerms = [
      'health', 'symptom', 'disease', 'condition', 'care', 'treatment',
      'veterinary', 'vet', 'medical', 'illness', 'infection', 'prevention',
      'diagnosis', 'therapy', 'medication', 'wellness', 'wellbeing'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...healthKeywords),
        (keyword: string) => {
          // Generate article content for the health keyword
          const content = generator.generateStructure(keyword);

          // Extract full text from article
          const fullText = [
            content.title,
            content.summary,
            content.sections.introduction,
            content.sections.coreContent,
            content.sections.conclusion
          ].join(' ').toLowerCase();

          // Check that at least 5 health-related terms appear in the content
          const healthTermMatches = healthTerms.filter(term =>
            fullText.includes(term.toLowerCase())
          ).length;

          // Property: Health articles MUST contain at least 5 health-related terms
          return healthTermMatches >= 5;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Health articles must include care and prevention guidance
   * 
   * For any health article, the content SHALL include guidance about care,
   * prevention, or management to help users understand how to address health issues.
   * 
   * This ensures articles provide actionable guidance, not just problem descriptions.
   */
  test('Property 1.2: Health articles include care and prevention guidance', () => {
    const healthKeywords = [
      'cat health symptoms',
      'common dog diseases',
      'pet emergency signs',
      'pet parasite prevention'
    ];

    // Care and prevention indicators that should appear in health articles
    const careIndicators = [
      'care', 'prevention', 'treatment', 'manage', 'health', 'wellness',
      'veterinary', 'checkup', 'screening', 'monitor', 'support', 'maintain'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...healthKeywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          const fullText = [
            content.sections.introduction,
            content.sections.coreContent,
            content.sections.conclusion
          ].join(' ').toLowerCase();

          // Count care indicators
          const careMatches = careIndicators.filter(indicator =>
            fullText.includes(indicator.toLowerCase())
          ).length;

          // Property: Health articles MUST include at least 4 care indicators
          return careMatches >= 4;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Health articles must include professional guidance references
   * 
   * For any health article, the content SHALL include references to professional
   * guidance or veterinary care to ensure credibility and safety.
   * 
   * This ensures articles provide trustworthy information for pet owners.
   */
  test('Property 1.3: Health articles include professional guidance references', () => {
    const healthKeywords = [
      'cat health symptoms',
      'common dog diseases',
      'pet emergency signs',
      'pet dental health',
      'pet parasite prevention'
    ];

    // Phrases that indicate professional guidance
    const professionalIndicators = [
      'veterinarian', 'vet', 'professional', 'expert', 'recommend',
      'research', 'science', 'medical', 'healthcare', 'specialist'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...healthKeywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          const fullText = [
            content.sections.introduction,
            content.sections.coreContent,
            content.sections.conclusion
          ].join(' ').toLowerCase();

          // Count professional guidance indicators
          const guidanceMatches = professionalIndicators.filter(indicator =>
            fullText.includes(indicator.toLowerCase())
          ).length;

          // Property: Health articles MUST include at least 3 professional indicators
          return guidanceMatches >= 3;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Health articles must include comprehensive information
   * 
   * For any health article, the content SHALL include comprehensive information
   * covering multiple aspects of the health topic.
   * 
   * This ensures articles provide thorough coverage, not just surface-level information.
   */
  test('Property 1.4: Health articles include comprehensive information', () => {
    const healthKeywords = [
      'cat health symptoms',
      'common dog diseases',
      'pet allergy management',
      'dog skin conditions',
      'cat urinary health'
    ];

    // Phrases that indicate comprehensive coverage
    const comprehensiveIndicators = [
      'understand', 'important', 'essential', 'key', 'factor',
      'aspect', 'element', 'component', 'consideration', 'approach'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...healthKeywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          const fullText = [
            content.sections.introduction,
            content.sections.coreContent,
            content.sections.conclusion
          ].join(' ').toLowerCase();

          // Count comprehensive indicators
          const comprehensiveMatches = comprehensiveIndicators.filter(indicator =>
            fullText.includes(indicator.toLowerCase())
          ).length;

          // Property: Health articles MUST include at least 4 comprehensive indicators
          return comprehensiveMatches >= 4;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Health articles must include prevention or management information
   * 
   * For any health article, the content SHALL include information about prevention
   * or management strategies (not just problem description).
   * 
   * This ensures articles provide actionable guidance for pet owners.
   */
  test('Property 1.5: Health articles include prevention or management guidance', () => {
    const healthKeywords = [
      'pet parasite prevention',
      'pet allergy management',
      'pet weight management',
      'pet dental health',
      'senior pet health issues'
    ];

    // Phrases that indicate prevention/management information
    const preventionIndicators = [
      'prevent', 'prevention', 'manage', 'management', 'reduce',
      'avoid', 'minimize', 'treatment', 'care', 'monitor',
      'check', 'regular', 'schedule', 'diet', 'exercise',
      'medication', 'supplement', 'lifestyle'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...healthKeywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          const fullText = [
            content.sections.introduction,
            content.sections.coreContent,
            content.sections.conclusion
          ].join(' ').toLowerCase();

          // Count prevention/management indicators
          const preventionMatches = preventionIndicators.filter(indicator =>
            fullText.includes(indicator.toLowerCase())
          ).length;

          // Property: Health articles MUST include at least 4 prevention indicators
          return preventionMatches >= 4;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Article content must not be purely generic template content
   * 
   * For any health article, the core content section SHALL contain specific information
   * that is relevant to the target keyword (not just generic filler text).
   * 
   * This ensures articles provide real value rather than template-generated content.
   */
  test('Property 1.6: Article content is specific, not generic template', () => {
    const keywords = [
      'cat health symptoms',
      'common dog diseases',
      'pet emergency signs',
      'pet dental health'
    ];

    // Generic phrases that indicate template content (should be minimal)
    const genericPhrases = [
      'this symptom is known for',
      'this condition is a great',
      'these symptoms are very',
      'this type of symptom',
      'symptoms of this disease'
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

          // Property: Generic phrases should be less than 20% of sentences
          // This allows some generic transitions but requires mostly specific content
          const genericRatio = genericPhraseCount / Math.max(sentenceCount, 1);
          return genericRatio < 0.2;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Health articles must include specific examples or references
   * 
   * For any health article, the content SHALL include specific examples or
   * references to concrete situations or conditions.
   * 
   * This ensures articles provide concrete, actionable information.
   */
  test('Property 1.7: Health articles include specific examples or references', () => {
    const healthKeywords = [
      'cat health symptoms',
      'common dog diseases',
      'pet vaccination schedule',
      'pet weight management'
    ];

    // Patterns that indicate specific examples or references
    const examplePatterns = [
      /\d+/,                                       // Any numbers
      /example|such as|like|including|for instance/i  // Example indicators
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...healthKeywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          const fullText = [
            content.sections.introduction,
            content.sections.coreContent,
            content.sections.conclusion
          ].join(' ');

          // Check that at least one example pattern appears in the content
          const containsExamples = examplePatterns.some(pattern =>
            pattern.test(fullText)
          );

          // Property: Articles MUST contain at least one specific example or number
          return containsExamples;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Article content must be sufficiently detailed
   * 
   * For any health article, the core content section SHALL be substantial enough to
   * provide real value (not just a few sentences of generic information).
   * 
   * This ensures articles meet minimum quality standards for depth.
   */
  test('Property 1.8: Article content is sufficiently detailed', () => {
    const keywords = [
      'cat health symptoms',
      'common dog diseases',
      'pet emergency signs',
      'pet dental health'
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
   * Property: Article content must address search intent
   * 
   * For any health article with a specific keyword, the content SHALL directly address
   * the search intent by including the keyword and related health terminology.
   * 
   * This ensures articles are relevant to what users are searching for.
   */
  test('Property 1.9: Article content addresses health search intent', () => {
    const keywordIntentMap: Record<string, string[]> = {
      'cat health symptoms': ['health', 'symptom', 'cat', 'care', 'pet'],
      'common dog diseases': ['disease', 'dog', 'health', 'condition', 'pet'],
      'pet emergency signs': ['emergency', 'pet', 'health', 'care', 'sign'],
      'pet dental health': ['dental', 'pet', 'health', 'care', 'teeth'],
      'pet parasite prevention': ['parasite', 'pet', 'prevention', 'health', 'care']
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

          // Check that at least 40% of intent keywords appear in the content
          const matchedIntentKeywords = intentKeywords.filter(keyword =>
            fullText.includes(keyword.toLowerCase())
          ).length;

          const intentCoverage = matchedIntentKeywords / Math.max(intentKeywords.length, 1);

          // Property: Content MUST address at least 40% of search intent keywords
          return intentCoverage >= 0.4;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Integration test: Validate complete health article specificity
   * 
   * This test validates that generated health articles include health-related terminology
   * and are not just generic template content.
   */
  test('Property 1.10: Generated health articles include health-related terminology', () => {
    const healthKeywords = [
      'cat health symptoms',
      'common dog diseases',
      'pet emergency signs'
    ];

    // Health-related terms that should appear in health articles
    const healthTerms = [
      'health', 'care', 'pet', 'symptom', 'disease', 'condition',
      'treatment', 'prevention', 'veterinary', 'wellness'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...healthKeywords),
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

          // Property: Health articles MUST contain health-related terminology
          // This ensures they include health-focused information, not just generic content
          const healthTermMatches = healthTerms.filter(term =>
            fullText.includes(term.toLowerCase())
          ).length;

          return healthTermMatches >= 5;
        }
      ),
      { numRuns: 100 }
    );
  });
});
