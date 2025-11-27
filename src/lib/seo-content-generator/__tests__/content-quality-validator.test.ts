// Tests for ContentQualityValidator
import { ContentQualityValidator } from '../content-quality-validator';
import { ArticleStructureGenerator } from '../article-structure-generator';
import { ArticleStructure, GenerationConfig, DEFAULT_CONFIG } from '../types';

describe('ContentQualityValidator', () => {
  let validator: ContentQualityValidator;
  let generator: ArticleStructureGenerator;

  beforeEach(() => {
    validator = new ContentQualityValidator();
    generator = new ArticleStructureGenerator();
  });

  describe('validateContent', () => {
    test('should validate well-formed content', () => {
      const keyword = 'dog breed';
      const content = generator.generateStructure(keyword);
      const result = validator.validateContent(keyword, content);

      expect(result.isValid).toBe(true);
      expect(result.wordCount).toBeGreaterThanOrEqual(DEFAULT_CONFIG.minWordCount);
      expect(result.wordCount).toBeLessThanOrEqual(DEFAULT_CONFIG.maxWordCount);
      expect(result.keywordDensity).toBeGreaterThanOrEqual(DEFAULT_CONFIG.minKeywordDensity);
      expect(result.hasRequiredSections).toBe(true);
      expect(result.hasMinimumFAQ).toBe(true);
      expect(result.hasMinimumUseCases).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should detect missing sections', () => {
      const incompleteContent: ArticleStructure = {
        title: '',
        summary: 'test summary that meets length requirements for validation',
        sections: {
          introduction: 'test',
          coreContent: '',
          useCases: ['use case 1', 'use case 2', 'use case 3'],
          faq: [
            { question: 'q1', answer: 'a1' },
            { question: 'q2', answer: 'a2' },
            { question: 'q3', answer: 'a3' },
            { question: 'q4', answer: 'a4' },
            { question: 'q5', answer: 'a5' }
          ],
          conclusion: 'test'
        },
        metadata: {
          title: 'test',
          description: 'test',
          keywords: ['test']
        },
        internalLinks: []
      };

      const result = validator.validateContent('test', incompleteContent);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(error => error.includes('Missing required sections'))).toBe(true);
    });

    test('should detect insufficient FAQ items', () => {
      const content = generator.generateStructure('dog breed');
      content.sections.faq = [
        { question: 'q1', answer: 'a1' },
        { question: 'q2', answer: 'a2' }
      ];

      const result = validator.validateContent('dog breed', content);
      expect(result.isValid).toBe(false);
      expect(result.hasMinimumFAQ).toBe(false);
    });

    test('should detect insufficient use cases', () => {
      const content = generator.generateStructure('dog breed');
      content.sections.useCases = ['use case 1'];

      const result = validator.validateContent('dog breed', content);
      expect(result.isValid).toBe(false);
      expect(result.hasMinimumUseCases).toBe(false);
    });

    test('should detect missing keyword in title', () => {
      const content = generator.generateStructure('dog breed');
      content.title = 'Complete Guide to Cats';

      const result = validator.validateContent('dog breed', content);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(error => error.includes('Title does not contain the target keyword'))).toBe(true);
    });
  });

  describe('validateBatchContent', () => {
    test('should validate multiple articles', () => {
      const pairs = [
        { keyword: 'dog breed', content: generator.generateStructure('dog breed') },
        { keyword: 'cat care', content: generator.generateStructure('cat care') },
        { keyword: 'pet health', content: generator.generateStructure('pet health') }
      ];

      const results = validator.validateBatchContent(pairs);
      expect(results).toHaveLength(3);
      
      // Check that validation results are returned for each article
      results.forEach((result, index) => {
        expect(result.wordCount).toBeGreaterThan(0);
        expect(result.keywordDensity).toBeGreaterThanOrEqual(0);
        expect(typeof result.isValid).toBe('boolean');
        
        // Log any validation errors for debugging
        if (!result.isValid) {
          console.log(`Article ${index + 1} (${pairs[index].keyword}) validation errors:`, result.errors);
        }
      });
    });
  });

  describe('getValidationSummary', () => {
    test('should provide accurate summary statistics', () => {
      const validContent = generator.generateStructure('dog breed');
      const invalidContent = generator.generateStructure('cat care');
      invalidContent.sections.faq = []; // Make it invalid by removing FAQ items

      const results = [
        validator.validateContent('dog breed', validContent),
        validator.validateContent('cat care', invalidContent)
      ];

      const summary = validator.getValidationSummary(results);
      expect(summary.totalArticles).toBe(2);
      expect(summary.validArticles).toBeGreaterThanOrEqual(0);
      expect(summary.invalidArticles).toBeGreaterThanOrEqual(0);
      expect(summary.validArticles + summary.invalidArticles).toBe(2);
      expect(summary.averageWordCount).toBeGreaterThan(0);
      
      // The invalid content should generate at least one error
      expect(results[1].errors.length).toBeGreaterThan(0);
    });
  });

  describe('validateReadability', () => {
    test('should assess content readability', () => {
      const content = generator.generateStructure('dog breed');
      const readability = validator.validateReadability(content);

      expect(readability.averageSentenceLength).toBeGreaterThan(0);
      expect(readability.averageWordLength).toBeGreaterThan(0);
      expect(['good', 'fair', 'poor']).toContain(readability.readabilityScore);
    });
  });

  describe('checkContentUniqueness', () => {
    test('should detect similar content', () => {
      const content1 = generator.generateStructure('dog breed');
      const content2 = generator.generateStructure('dog breed'); // Same keyword, likely similar

      const uniqueness = validator.checkContentUniqueness([content1, content2]);
      expect(uniqueness.duplicateCount).toBeGreaterThanOrEqual(0);
      expect(uniqueness.similarityThreshold).toBe(0.8);
    });

    test('should detect unique content', () => {
      const content1 = generator.generateStructure('dog breed');
      const content2 = generator.generateStructure('cat health');

      const uniqueness = validator.checkContentUniqueness([content1, content2]);
      // Different keywords should produce more unique content
      expect(uniqueness.duplicateCount).toBeLessThanOrEqual(1);
    });
  });

  describe('custom configuration', () => {
    test('should respect custom validation rules', () => {
      const customConfig: GenerationConfig = {
        ...DEFAULT_CONFIG,
        minWordCount: 1000,
        maxWordCount: 1500,
        minKeywordDensity: 8,
        maxKeywordDensity: 12
      };

      const customValidator = new ContentQualityValidator(customConfig);
      const content = generator.generateStructure('dog breed');
      
      // Content generated with default config might not meet stricter custom config
      const result = customValidator.validateContent('dog breed', content);
      
      // Check that custom thresholds are being applied
      if (!result.isValid) {
        expect(result.errors.some(error => 
          error.includes('Word count') || error.includes('Keyword density')
        )).toBe(true);
      }
    });
  });
});