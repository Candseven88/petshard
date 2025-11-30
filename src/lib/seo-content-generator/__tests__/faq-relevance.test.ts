/**
 * Property-Based Test for FAQ Relevance
 * **Feature: blog-content-improvement, Property 5: FAQ Relevance**
 * **Validates: Requirements 7.1, 7.4**
 * 
 * Property 5: FAQ Relevance
 * For any FAQ section in a blog article, each question SHALL be specific to 
 * the article topic (not generic questions used across multiple articles).
 * 
 * This test verifies that FAQ sections contain topic-specific questions
 * that users actually search for.
 */

import fc from 'fast-check';
import { ArticleStructureGenerator } from '../article-structure-generator';

describe('Property 5: FAQ Relevance', () => {
  let generator: ArticleStructureGenerator;

  beforeEach(() => {
    generator = new ArticleStructureGenerator();
  });

  /**
   * Property: FAQ questions must be specific to the article topic
   * 
   * For any article, all FAQ questions SHALL be specific to the target keyword
   * and not generic questions that could apply to any article.
   * 
   * This ensures FAQ sections provide relevant, topic-specific information.
   */
  test('Property 5.1: FAQ questions are specific to article topic', () => {
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
          const faqItems = content.sections.faq;

          // Check that FAQ questions include topic-specific terms
          const keywordTerms = keyword.toLowerCase().split(/\s+/);
          
          const topicSpecificQuestions = faqItems.filter(item => {
            const questionLower = item.question.toLowerCase();
            
            // Question should include at least one keyword term
            return keywordTerms.some(term => questionLower.includes(term));
          });

          // Property: At least 70% of FAQ questions must be topic-specific
          const specificRatio = topicSpecificQuestions.length / Math.max(faqItems.length, 1);
          return specificRatio >= 0.7;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: FAQ questions must be unique within the article
   * 
   * For any article, all FAQ questions SHALL be unique (no duplicate questions).
   * 
   * This ensures FAQ sections don't repeat the same questions.
   */
  test('Property 5.2: FAQ questions are unique within the article', () => {
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
          const faqItems = content.sections.faq;

          // Get unique questions
          const questions = faqItems.map(item => item.question.toLowerCase());
          const uniqueQuestions = new Set(questions);

          // Property: All FAQ questions MUST be unique
          return uniqueQuestions.size === questions.length;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: FAQ questions must be formatted as questions
   * 
   * For any FAQ item, the question SHALL be formatted as a question
   * (end with "?" and start with question words like "What", "How", "Why", etc.).
   * 
   * This ensures proper FAQ formatting.
   */
  test('Property 5.3: FAQ questions are properly formatted', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    // Question indicators
    const questionIndicators = [
      'what', 'how', 'why', 'when', 'where', 'which', 'who', 'can', 'should', 'is', 'are', 'do', 'does'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          const faqItems = content.sections.faq;

          // Check that questions are properly formatted
          const properlyFormatted = faqItems.filter(item => {
            const question = item.question.trim();
            
            // Should end with ?
            const endsWithQuestion = question.endsWith('?');
            
            // Should start with a question indicator
            const startsWithIndicator = questionIndicators.some(indicator =>
              question.toLowerCase().startsWith(indicator)
            );

            return endsWithQuestion && startsWithIndicator;
          });

          // Property: At least 80% of FAQ questions must be properly formatted
          const formatRatio = properlyFormatted.length / Math.max(faqItems.length, 1);
          return formatRatio >= 0.8;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: FAQ answers must be concise (2-3 sentences)
   * 
   * For any FAQ item, the answer SHALL be 2-3 sentences maximum
   * to provide quick, useful information.
   * 
   * This ensures FAQ answers are scannable and useful.
   */
  test('Property 5.4: FAQ answers are concise (2-3 sentences)', () => {
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
          const faqItems = content.sections.faq;

          // Check answer length
          const conciseAnswers = faqItems.filter(item => {
            const answer = item.answer.trim();
            
            // Count sentences (rough estimate)
            const sentences = answer.split(/[.!?]+/).filter(s => s.trim().length > 0);
            
            // Should be 1-4 sentences (allowing some flexibility)
            return sentences.length >= 1 && sentences.length <= 4;
          });

          // Property: At least 80% of FAQ answers must be concise
          const conciseRatio = conciseAnswers.length / Math.max(faqItems.length, 1);
          return conciseRatio >= 0.8;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: FAQ answers must directly address the question
   * 
   * For any FAQ item, the answer SHALL directly address the question
   * (not provide unrelated information).
   * 
   * This ensures FAQ answers are relevant and helpful.
   */
  test('Property 5.5: FAQ answers directly address the question', () => {
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
          const faqItems = content.sections.faq;

          // Check that answers address questions
          const addressingAnswers = faqItems.filter(item => {
            const question = item.question.toLowerCase();
            const answer = item.answer.toLowerCase();
            
            // Extract key terms from question
            const questionTerms = question.split(/\s+/).filter(t => t.length > 3);
            
            // Answer should include at least one key term from question
            return questionTerms.some(term => answer.includes(term));
          });

          // Property: At least 70% of FAQ answers must address their questions
          const addressingRatio = addressingAnswers.length / Math.max(faqItems.length, 1);
          return addressingRatio >= 0.7;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: FAQ section must have 5-7 questions
   * 
   * For any article, the FAQ section SHALL contain 5-7 questions
   * to provide comprehensive coverage without overwhelming the reader.
   * 
   * This ensures proper FAQ section size.
   */
  test('Property 5.6: FAQ section has 5-7 questions', () => {
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
          const faqItems = content.sections.faq;

          // Property: FAQ section MUST have 5-7 questions
          return faqItems.length >= 5 && faqItems.length <= 7;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: FAQ questions must not be identical across different articles
   * 
   * For any two different articles, their FAQ questions SHALL be different
   * (not using the same generic FAQ template).
   * 
   * This ensures each article has unique, topic-specific FAQ sections.
   */
  test('Property 5.7: FAQ questions are unique across different articles', () => {
    const keywords = [
      'best dog breeds for families',
      'best dog breeds for apartments',
      'best dog breeds for first time owners',
      'friendliest dog breeds',
      'rare dog breeds'
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

          const content1 = generator.generateStructure(keyword1);
          const content2 = generator.generateStructure(keyword2);

          const questions1 = new Set(content1.sections.faq.map(item => item.question.toLowerCase()));
          const questions2 = new Set(content2.sections.faq.map(item => item.question.toLowerCase()));

          // Find common questions
          const commonQuestions = Array.from(questions1).filter(q => questions2.has(q));

          // Property: FAQ questions should not be identical across articles
          // Allow up to 1 common question (coincidence), but not more
          return commonQuestions.length <= 1;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: FAQ questions must address common user concerns
   * 
   * For any article, FAQ questions SHALL address common user concerns
   * related to the topic (e.g., cost, time, difficulty, safety).
   * 
   * This ensures FAQ sections address practical user questions.
   */
  test('Property 5.8: FAQ questions address common user concerns', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    // Common concern indicators
    const concernIndicators = [
      'cost', 'price', 'time', 'how long', 'difficult', 'easy', 'safe', 'dangerous',
      'best', 'worst', 'good', 'bad', 'healthy', 'unhealthy', 'need', 'require',
      'start', 'begin', 'learn', 'understand', 'choose', 'select', 'find'
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...keywords),
        (keyword: string) => {
          const content = generator.generateStructure(keyword);
          const faqItems = content.sections.faq;

          // Check that questions address common concerns
          const concernQuestions = faqItems.filter(item => {
            const question = item.question.toLowerCase();
            
            // Question should include at least one concern indicator
            return concernIndicators.some(indicator => question.includes(indicator));
          });

          // Property: At least 50% of FAQ questions must address common concerns
          const concernRatio = concernQuestions.length / Math.max(faqItems.length, 1);
          return concernRatio >= 0.5;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Integration test: Validate complete FAQ relevance
   * 
   * This test validates that generated articles have relevant, well-structured
   * FAQ sections.
   */
  test('Property 5.9: Generated articles have relevant FAQ sections', () => {
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
          const faqItems = content.sections.faq;

          // Validate all FAQ properties
          const keywordTerms = keyword.toLowerCase().split(/\s+/);
          const questionIndicators = ['what', 'how', 'why', 'when', 'where', 'which', 'who', 'can', 'should', 'is', 'are', 'do', 'does'];

          const validFAQ = faqItems.every(item => {
            const question = item.question.trim();
            const answer = item.answer.trim();
            const questionLower = question.toLowerCase();
            const answerLower = answer.toLowerCase();

            // Question must be properly formatted
            const isProperlyFormatted = question.endsWith('?') &&
              questionIndicators.some(indicator => questionLower.startsWith(indicator));

            // Question must be topic-specific
            const isTopicSpecific = keywordTerms.some(term => questionLower.includes(term));

            // Answer must be concise
            const sentences = answer.split(/[.!?]+/).filter(s => s.trim().length > 0);
            const isConcise = sentences.length >= 1 && sentences.length <= 4;

            // Answer must address question
            const addressesQuestion = keywordTerms.some(term => answerLower.includes(term));

            return isProperlyFormatted && isTopicSpecific && isConcise && addressesQuestion;
          });

          // Property: All FAQ items must be valid and relevant
          return (
            validFAQ &&
            faqItems.length >= 5 &&
            faqItems.length <= 7 &&
            new Set(faqItems.map(item => item.question.toLowerCase())).size === faqItems.length
          );
        }
      ),
      { numRuns: 100 }
    );
  });
});
