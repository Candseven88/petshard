import { SEOContentGenerator } from '../seo-content-generator';
import { KeywordInput } from '../types';

describe('SEOContentGenerator', () => {
  let generator: SEOContentGenerator;

  beforeEach(() => {
    generator = new SEOContentGenerator();
  });

  describe('generateSingleArticle', () => {
    it('should generate a single article from a keyword', async () => {
      const keyword = 'dog training';
      const contentFocus = 'care';

      const result = await generator.generateSingleArticle(keyword, contentFocus);

      expect(result.article).toBeDefined();
      expect(result.article.keyword).toBe(keyword);
      expect(result.article.content).toBeDefined();
      expect(result.article.componentCode).toBeDefined();
      expect(result.article.filePath).toBeDefined();
      expect(result.validation).toBeDefined();
    });

    it('should throw error for invalid keyword', async () => {
      const keyword = '';

      await expect(generator.generateSingleArticle(keyword)).rejects.toThrow();
    });
  });

  describe('generateBatchArticles', () => {
    it('should generate multiple articles from keyword list', async () => {
      const input: KeywordInput = {
        keywords: ['dog training', 'cat care', 'pet health'],
        contentFocus: 'care'
      };

      const result = await generator.generateBatchArticles(input);

      expect(result.articles).toHaveLength(3);
      expect(result.validations).toHaveLength(3);
      expect(result.summary).toBeDefined();
      expect(result.summary.totalKeywords).toBe(3);
      expect(result.summary.successfulArticles).toBe(3);
    });

    it('should handle empty keyword list', async () => {
      const input: KeywordInput = {
        keywords: []
      };

      await expect(generator.generateBatchArticles(input)).rejects.toThrow('Keywords array cannot be empty');
    });

    it('should filter out non-pet-related keywords', async () => {
      const input: KeywordInput = {
        keywords: ['dog training', 'car repair', 'cat care', 'computer programming']
      };

      const result = await generator.generateBatchArticles(input);

      // Should only generate articles for pet-related keywords
      expect(result.articles.length).toBeLessThanOrEqual(2);
      expect(result.summary.validKeywords).toBeLessThanOrEqual(2);
    });
  });

  describe('generateWithQualityAssurance', () => {
    it('should generate articles with self-validation', async () => {
      const input: KeywordInput = {
        keywords: ['dog training', 'cat care'],
        contentFocus: 'care'
      };

      const result = await generator.generateWithQualityAssurance(input, true);

      expect(result.articles).toBeDefined();
      expect(result.validations).toBeDefined();
      expect(result.selfValidations).toBeDefined();
      expect(result.qualityReport).toBeDefined();
      expect(result.summary.averageQualityScore).toBeDefined();
    });

    it('should generate articles without self-validation when disabled', async () => {
      const input: KeywordInput = {
        keywords: ['dog training'],
        contentFocus: 'care'
      };

      const result = await generator.generateWithQualityAssurance(input, false);

      expect(result.articles).toBeDefined();
      expect(result.validations).toBeDefined();
      expect(result.selfValidations).toBeUndefined();
      expect(result.qualityReport).toBeUndefined();
    });
  });

  describe('performSelfValidation', () => {
    it('should perform self-validation on article content', async () => {
      const keyword = 'dog training';
      const { article } = await generator.generateSingleArticle(keyword);

      const selfValidation = generator.performSelfValidation(keyword, article.content);

      expect(selfValidation).toBeDefined();
      expect(selfValidation.isValid).toBeDefined();
      expect(selfValidation.overallScore).toBeGreaterThanOrEqual(0);
      expect(selfValidation.overallScore).toBeLessThanOrEqual(100);
      expect(selfValidation.errors).toBeDefined();
      expect(selfValidation.warnings).toBeDefined();
      expect(selfValidation.suggestions).toBeDefined();
      expect(selfValidation.checks).toBeDefined();
    });
  });

  describe('validateContentUniqueness', () => {
    it('should detect unique content', async () => {
      const input: KeywordInput = {
        keywords: ['dog training', 'cat care'],
        contentFocus: 'care'
      };

      const { articles } = await generator.generateBatchArticles(input);
      const uniquenessResult = generator.validateContentUniqueness(articles);

      expect(uniquenessResult).toBeDefined();
      expect(uniquenessResult.duplicateCount).toBeDefined();
      expect(uniquenessResult.isUnique).toBeDefined();
      expect(uniquenessResult.similarityThreshold).toBe(0.8);
    });
  });

  describe('generateQualityReport', () => {
    it('should generate comprehensive quality report', async () => {
      const input: KeywordInput = {
        keywords: ['dog training', 'cat care'],
        contentFocus: 'care'
      };

      const { articles } = await generator.generateBatchArticles(input);
      const keywordContentPairs = articles.map(article => ({
        keyword: article.keyword,
        content: article.content
      }));

      const report = generator.generateQualityReport(keywordContentPairs);

      expect(report).toBeDefined();
      expect(report.summary).toBeDefined();
      expect(report.issues).toBeDefined();
      expect(report.recommendations).toBeDefined();
      expect(report.generatedAt).toBeDefined();
    });
  });

  describe('configuration management', () => {
    it('should allow configuration updates', () => {
      const newConfig = {
        minWordCount: 1000,
        maxWordCount: 1500,
        minKeywordDensity: 8
      };

      generator.updateConfig(newConfig);
      const config = generator.getConfig();

      expect(config.minWordCount).toBe(1000);
      expect(config.maxWordCount).toBe(1500);
      expect(config.minKeywordDensity).toBe(8);
    });

    it('should return current configuration', () => {
      const config = generator.getConfig();

      expect(config).toBeDefined();
      expect(config.minWordCount).toBeDefined();
      expect(config.maxWordCount).toBeDefined();
      expect(config.minKeywordDensity).toBeDefined();
      expect(config.maxKeywordDensity).toBeDefined();
    });
  });
});