import { ArticleTemplateEngine } from '../article-template-engine';
import { InternalLink } from '../types';

describe('ArticleTemplateEngine', () => {
  let engine: ArticleTemplateEngine;

  beforeEach(() => {
    engine = new ArticleTemplateEngine();
  });

  describe('generateArticleStructure', () => {
    it('should generate complete article structure with all required sections', () => {
      const keyword = 'dog training';
      const internalLinks: InternalLink[] = [
        { text: 'Pet Training Guide', url: '/pet-care-guide', context: 'training' }
      ];

      const result = engine.generateArticleStructure(keyword, internalLinks);

      expect(result).toHaveProperty('title');
      expect(result).toHaveProperty('summary');
      expect(result).toHaveProperty('sections');
      expect(result).toHaveProperty('metadata');
      expect(result).toHaveProperty('internalLinks');

      // Check sections structure
      expect(result.sections).toHaveProperty('introduction');
      expect(result.sections).toHaveProperty('coreContent');
      expect(result.sections).toHaveProperty('useCases');
      expect(result.sections).toHaveProperty('faq');
      expect(result.sections).toHaveProperty('conclusion');

      // Check metadata structure
      expect(result.metadata).toHaveProperty('title');
      expect(result.metadata).toHaveProperty('description');
      expect(result.metadata).toHaveProperty('keywords');
      expect(result.metadata).toHaveProperty('structuredData');
    });

    it('should include keyword in title', () => {
      const keyword = 'cat grooming';
      const result = engine.generateArticleStructure(keyword);

      expect(result.title.toLowerCase()).toContain(keyword.toLowerCase());
    });

    it('should generate summary within character limits', () => {
      const keyword = 'pet nutrition';
      const result = engine.generateArticleStructure(keyword);

      expect(result.summary.length).toBeGreaterThanOrEqual(40);
      expect(result.summary.length).toBeLessThanOrEqual(60);
    });

    it('should generate at least 3 use cases', () => {
      const keyword = 'bird care';
      const result = engine.generateArticleStructure(keyword);

      expect(result.sections.useCases).toHaveLength(3);
      expect(Array.isArray(result.sections.useCases)).toBe(true);
    });

    it('should generate at least 5 FAQ items', () => {
      const keyword = 'fish tank maintenance';
      const result = engine.generateArticleStructure(keyword);

      expect(result.sections.faq.length).toBeGreaterThanOrEqual(5);
      expect(Array.isArray(result.sections.faq)).toBe(true);
      
      result.sections.faq.forEach(faq => {
        expect(faq).toHaveProperty('question');
        expect(faq).toHaveProperty('answer');
        expect(typeof faq.question).toBe('string');
        expect(typeof faq.answer).toBe('string');
      });
    });

    it('should include keyword multiple times in content sections', () => {
      const keyword = 'rabbit housing';
      const result = engine.generateArticleStructure(keyword);

      const allContent = [
        result.sections.introduction,
        result.sections.coreContent,
        result.sections.conclusion
      ].join(' ').toLowerCase();

      const keywordCount = (allContent.match(new RegExp(keyword.toLowerCase(), 'g')) || []).length;
      expect(keywordCount).toBeGreaterThanOrEqual(3);
    });

    it('should preserve internal links', () => {
      const keyword = 'pet health';
      const internalLinks: InternalLink[] = [
        { text: 'Health Center', url: '/health-center', context: 'health' },
        { text: 'Care Guide', url: '/pet-care-guide', context: 'care' }
      ];

      const result = engine.generateArticleStructure(keyword, internalLinks);

      expect(result.internalLinks).toEqual(internalLinks);
    });

    it('should generate structured data with correct schema', () => {
      const keyword = 'pet exercise';
      const result = engine.generateArticleStructure(keyword);

      expect(result.metadata.structuredData).toHaveProperty('@context', 'https://schema.org');
      expect(result.metadata.structuredData).toHaveProperty('@type', 'Article');
      expect(result.metadata.structuredData).toHaveProperty('headline');
      expect(result.metadata.structuredData).toHaveProperty('description');
      expect(result.metadata.structuredData).toHaveProperty('author');
      expect(result.metadata.structuredData).toHaveProperty('publisher');
    });
  });
});