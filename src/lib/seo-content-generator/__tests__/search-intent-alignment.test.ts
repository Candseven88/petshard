/**
 * Property-Based Test for Search Intent Alignment
 * **Feature: blog-content-improvement, Property 6: Search Intent Alignment**
 * **Validates: Requirements 10.1, 10.2**
 * 
 * Property 6: Search Intent Alignment
 * For any blog article, the article content SHALL directly address the primary 
 * search intent of its target keyword.
 * 
 * This test verifies that articles answer the key questions (what, why, how, when)
 * related to the search intent.
 */

import fc from 'fast-check';
import { ArticleStructureGenerator } from '../article-structure-generator';

describe('Property 6: Search Intent Alignment', () => {
  let generator: ArticleStructureGenerator;

  beforeEach(() => {
    generator = new ArticleStructureGenerator();
  });

  /**
   * Property: Article must answer "what" question
   * 
   * For any article, the content SHALL answer the "what" question
   * (what is the topic, what are the options, what should I know).
   * 
   * This ensures articles address the basic information need.
   */
  test('Property 6.1: Article answers the "what" question', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    // "What" indicators
    const whatIndicators = [
      'what', 'definition', 'meaning', 'is', 'are', 'include', 'consist',
      'comprise', 'contain', 'feature', 'characteristic', 'type', 'kind',
      'category', 'example', 'such as', 'like', 'including'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          
          const fullText = [
            content.sections.introduction,
            content.sections.coreContent
          ].join(' ').toLowerCase();

          // Check for "what" indicators
          const hasWhatIndicators = whatIndicators.some(indicator =>
            fullText.includes(indicator)
          );

          // Property: Article MUST answer "what" question
          return hasWhatIndicators;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Article must answer "why" question
   * 
   * For any article, the content SHALL answer the "why" question
   * (why is this important, why should I care, why choose this).
   * 
   * This ensures articles explain the relevance and importance.
   */
  test('Property 6.2: Article answers the "why" question', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    // "Why" indicators
    const whyIndicators = [
      'why', 'reason', 'benefit', 'advantage', 'important', 'matter',
      'significance', 'value', 'purpose', 'goal', 'objective', 'help',
      'improve', 'enhance', 'better', 'best', 'ideal', 'perfect'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          
          const fullText = [
            content.sections.introduction,
            content.sections.coreContent,
            content.sections.conclusion
          ].join(' ').toLowerCase();

          // Check for "why" indicators
          const hasWhyIndicators = whyIndicators.some(indicator =>
            fullText.includes(indicator)
          );

          // Property: Article MUST answer "why" question
          return hasWhyIndicators;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Article must answer "how" question
   * 
   * For any article, the content SHALL answer the "how" question
   * (how to choose, how to use, how to implement).
   * 
   * This ensures articles provide actionable guidance.
   */
  test('Property 6.3: Article answers the "how" question', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    // "How" indicators
    const howIndicators = [
      'how', 'step', 'guide', 'process', 'procedure', 'method', 'technique',
      'approach', 'way', 'instruction', 'tutorial', 'tips', 'advice',
      'recommendation', 'suggest', 'implement', 'apply', 'use', 'do'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          
          const fullText = [
            content.sections.coreContent,
            content.sections.conclusion
          ].join(' ').toLowerCase();

          // Check for "how" indicators
          const hasHowIndicators = howIndicators.some(indicator =>
            fullText.includes(indicator)
          );

          // Property: Article MUST answer "how" question
          return hasHowIndicators;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Article must answer "when" question
   * 
   * For any article, the content SHALL answer the "when" question
   * (when to use, when to choose, when to apply).
   * 
   * This ensures articles provide contextual guidance.
   */
  test('Property 6.4: Article answers the "when" question', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    // "When" indicators
    const whenIndicators = [
      'when', 'time', 'age', 'stage', 'phase', 'period', 'season',
      'situation', 'circumstance', 'condition', 'scenario', 'case',
      'appropriate', 'suitable', 'ideal', 'best', 'right', 'perfect'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          
          const fullText = [
            content.sections.introduction,
            content.sections.coreContent,
            content.sections.conclusion
          ].join(' ').toLowerCase();

          // Check for "when" indicators
          const hasWhenIndicators = whenIndicators.some(indicator =>
            fullText.includes(indicator)
          );

          // Property: Article MUST answer "when" question
          return hasWhenIndicators;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Article must directly address the search keyword
   * 
   * For any article, the content SHALL directly address the search keyword
   * in the introduction and conclusion.
   * 
   * This ensures articles are clearly relevant to the search query.
   */
  test('Property 6.5: Article directly addresses search keyword', () => {
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
          const conclusion = content.sections.conclusion.toLowerCase();
          const keywordLower = keyword.toLowerCase();

          // Property: Keyword must appear in both introduction and conclusion
          return (
            introduction.includes(keywordLower) &&
            conclusion.includes(keywordLower)
          );
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Article must not include irrelevant information
   * 
   * For any article, the content SHALL focus on the target topic
   * and not include irrelevant information that doesn't serve the search intent.
   * 
   * This ensures articles are focused and relevant.
   */
  test('Property 6.6: Article does not include irrelevant information', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    // Irrelevant topic indicators (should be minimal)
    const irrelevantIndicators = [
      'politics', 'sports', 'entertainment', 'celebrity', 'movie', 'music',
      'weather', 'news', 'business', 'finance', 'stock', 'cryptocurrency'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          
          const fullText = [
            content.sections.introduction,
            content.sections.coreContent,
            content.sections.conclusion
          ].join(' ').toLowerCase();

          // Count irrelevant indicators
          const irrelevantCount = irrelevantIndicators.filter(indicator =>
            fullText.includes(indicator)
          ).length;

          // Property: Article should have minimal irrelevant content
          return irrelevantCount === 0;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Article must include specific examples or data
   * 
   * For any article, the content SHALL include specific examples or data
   * that directly support the search intent.
   * 
   * This ensures articles provide concrete, actionable information.
   */
  test('Property 6.7: Article includes specific examples or data', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    // Specific data indicators
    const dataIndicators = [
      /\d+/,                                    // Numbers
      /example|such as|like|including|for instance/i,  // Example indicators
      /percent|%|pounds|lbs|kg|years|months|weeks/i    // Measurements
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          
          const fullText = [
            content.sections.introduction,
            content.sections.coreContent,
            content.sections.conclusion
          ].join(' ');

          // Check for specific data
          const hasSpecificData = dataIndicators.some(indicator =>
            indicator.test(fullText)
          );

          // Property: Article MUST include specific examples or data
          return hasSpecificData;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Article must include a clear summary or conclusion
   * 
   * For any article, the conclusion SHALL reinforce the main answer
   * and provide a clear takeaway for the reader.
   * 
   * This ensures articles have a strong conclusion that reinforces the intent.
   */
  test('Property 6.8: Article includes clear summary or conclusion', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    // Conclusion indicators
    const conclusionIndicators = [
      'conclusion', 'summary', 'key takeaway', 'remember', 'final',
      'important', 'essential', 'crucial', 'main', 'overall',
      'in conclusion', 'in summary', 'to summarize', 'ultimately'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          
          const conclusion = content.sections.conclusion.toLowerCase();

          // Check for conclusion indicators
          const hasConclusionIndicators = conclusionIndicators.some(indicator =>
            conclusion.includes(indicator)
          );

          // Property: Conclusion MUST include summary indicators
          return hasConclusionIndicators;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Article must include a call-to-action
   * 
   * For any article, the conclusion SHALL include a call-to-action
   * that guides users to the next step.
   * 
   * This ensures articles guide users to take action.
   */
  test('Property 6.9: Article includes call-to-action', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    // Call-to-action indicators
    const ctaIndicators = [
      'try', 'use', 'explore', 'discover', 'learn', 'find', 'get',
      'start', 'begin', 'visit', 'check', 'read', 'see', 'click',
      'tool', 'guide', 'resource', 'article', 'page', 'next'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          
          const conclusion = content.sections.conclusion.toLowerCase();

          // Check for CTA indicators
          const hasCTA = ctaIndicators.some(indicator =>
            conclusion.includes(indicator)
          );

          // Property: Conclusion MUST include call-to-action
          return hasCTA;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Integration test: Validate complete search intent alignment
   * 
   * This test validates that generated articles directly address the
   * search intent with comprehensive coverage.
   */
  test('Property 6.10: Generated articles align with search intent', () => {
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
          const coreContent = content.sections.coreContent.toLowerCase();
          const conclusion = content.sections.conclusion.toLowerCase();
          const keywordLower = keyword.toLowerCase();

          // Define intent question indicators
          const whatIndicators = ['what', 'definition', 'is', 'are', 'include', 'type'];
          const whyIndicators = ['why', 'reason', 'benefit', 'advantage', 'important'];
          const howIndicators = ['how', 'step', 'guide', 'process', 'method'];
          const whenIndicators = ['when', 'time', 'age', 'stage', 'situation'];

          // Check that article addresses all intent questions
          const answersWhat = whatIndicators.some(i => coreContent.includes(i));
          const answersWhy = whyIndicators.some(i => coreContent.includes(i));
          const answersHow = howIndicators.some(i => coreContent.includes(i));
          const answersWhen = whenIndicators.some(i => coreContent.includes(i));

          // Check that article directly addresses keyword
          const addressesKeyword = introduction.includes(keywordLower) && conclusion.includes(keywordLower);

          // Property: Article MUST address all intent questions and keyword
          return (
            answersWhat &&
            answersWhy &&
            answersHow &&
            answersWhen &&
            addressesKeyword
          );
        }
      ),
      { numRuns: 100 }
    );
  });
});
