import { SEOMetadataGenerator } from '../seo-metadata-generator';
import { ArticleStructure, FAQItem } from '../types';

describe('SEOMetadataGenerator', () => {
  let generator: SEOMetadataGenerator;
  let mockArticleStructure: ArticleStructure;

  beforeEach(() => {
    generator = new SEOMetadataGenerator();
    
    mockArticleStructure = {
      title: 'Complete Guide to Dog Training for Pet Owners',
      summary: 'Expert guide on dog training for pet owners',
      sections: {
        introduction: 'Introduction to dog training...',
        coreContent: 'Core content about dog training...',
        useCases: ['Daily training routine', 'Emergency situations', 'Seasonal considerations'],
        faq: [
          { question: 'What is the best approach to dog training?', answer: 'The best approach involves consistency...' },
          { question: 'How often should I train my dog?', answer: 'Training frequency depends on various factors...' },
          { question: 'What are common training mistakes?', answer: 'Common mistakes include inconsistency...' },
          { question: 'When should I consult a professional?', answer: 'Consult a professional if you notice...' },
          { question: 'Can training vary between breeds?', answer: 'Yes, training can vary significantly...' }
        ],
        conclusion: 'Conclusion about dog training...'
      },
      metadata: {
        title: 'Complete Guide to Dog Training for Pet Owners',
        description: 'Expert guide on dog training for pet owners',
        keywords: ['dog training', 'pet training', 'dog care']
      },
      internalLinks: []
    };
  });

  describe('generateMetadata', () => {
    it('should generate complete SEO metadata', () => {
      const keyword = 'dog training';
      const result = generator.generateMetadata(keyword, mockArticleStructure);

      expect(result).toHaveProperty('title');
      expect(result).toHaveProperty('description');
      expect(result).toHaveProperty('keywords');
      expect(result).toHaveProperty('canonicalUrl');
      expect(result).toHaveProperty('structuredData');
    });

    it('should generate meta description within optimal length', () => {
      const keyword = 'cat grooming';
      const result = generator.generateMetadata(keyword, mockArticleStructure);

      expect(result.description.length).toBeGreaterThanOrEqual(120);
      expect(result.description.length).toBeLessThanOrEqual(160);
    });

    it('should include keyword in meta description', () => {
      const keyword = 'pet nutrition';
      const result = generator.generateMetadata(keyword, mockArticleStructure);

      expect(result.description.toLowerCase()).toContain(keyword.toLowerCase());
    });

    it('should generate canonical URL with proper format', () => {
      const keyword = 'bird care tips';
      const result = generator.generateMetadata(keyword, mockArticleStructure);

      expect(result.canonicalUrl).toMatch(/^https:\/\/petshard\.com\/blog\/[a-z0-9-]+$/);
      expect(result.canonicalUrl).toContain('bird-care-tips');
    });

    it('should generate comprehensive keyword list', () => {
      const keyword = 'fish tank maintenance';
      const result = generator.generateMetadata(keyword, mockArticleStructure);

      expect(Array.isArray(result.keywords)).toBe(true);
      expect(result.keywords.length).toBeGreaterThan(5);
      expect(result.keywords).toContain(keyword);
      expect(result.keywords).toContain(`${keyword} guide`);
    });
  });

  describe('generateStructuredData', () => {
    it('should generate valid Article schema', () => {
      const keyword = 'pet exercise';
      const canonicalUrl = 'https://petshard.com/blog/pet-exercise';
      const result = generator.generateStructuredData(keyword, mockArticleStructure, canonicalUrl);

      expect(result['@context']).toBe('https://schema.org');
      expect(result['@type']).toBe('Article');
      expect(result).toHaveProperty('headline');
      expect(result).toHaveProperty('description');
      expect(result).toHaveProperty('author');
      expect(result).toHaveProperty('publisher');
      expect(result).toHaveProperty('datePublished');
      expect(result).toHaveProperty('dateModified');
      expect(result).toHaveProperty('mainEntityOfPage');
    });

    it('should include FAQ structured data', () => {
      const keyword = 'rabbit care';
      const canonicalUrl = 'https://petshard.com/blog/rabbit-care';
      const result = generator.generateStructuredData(keyword, mockArticleStructure, canonicalUrl);

      expect(result).toHaveProperty('hasPart');
      expect(result.hasPart['@type']).toBe('FAQPage');
      expect(result.hasPart).toHaveProperty('mainEntity');
      expect(Array.isArray(result.hasPart.mainEntity)).toBe(true);
    });

    it('should include proper organization data', () => {
      const keyword = 'pet health';
      const canonicalUrl = 'https://petshard.com/blog/pet-health';
      const result = generator.generateStructuredData(keyword, mockArticleStructure, canonicalUrl);

      expect(result.author['@type']).toBe('Organization');
      expect(result.author.name).toBe('PetShard');
      expect(result.publisher['@type']).toBe('Organization');
      expect(result.publisher.name).toBe('PetShard');
    });
  });

  describe('generateOpenGraphMetadata', () => {
    it('should generate complete Open Graph metadata', () => {
      const keyword = 'dog grooming';
      const result = generator.generateOpenGraphMetadata(keyword, mockArticleStructure);

      expect(result).toHaveProperty('og:type', 'article');
      expect(result).toHaveProperty('og:title');
      expect(result).toHaveProperty('og:description');
      expect(result).toHaveProperty('og:url');
      expect(result).toHaveProperty('og:site_name', 'PetShard');
      expect(result).toHaveProperty('og:image');
      expect(result).toHaveProperty('og:image:width', '1200');
      expect(result).toHaveProperty('og:image:height', '630');
    });
  });

  describe('generateTwitterCardMetadata', () => {
    it('should generate complete Twitter Card metadata', () => {
      const keyword = 'cat behavior';
      const result = generator.generateTwitterCardMetadata(keyword, mockArticleStructure);

      expect(result).toHaveProperty('twitter:card', 'summary_large_image');
      expect(result).toHaveProperty('twitter:title');
      expect(result).toHaveProperty('twitter:description');
      expect(result).toHaveProperty('twitter:image');
      expect(result).toHaveProperty('twitter:site', '@PetShard');
      expect(result).toHaveProperty('twitter:creator', '@PetShard');
    });
  });

  describe('generateBreadcrumbStructuredData', () => {
    it('should generate valid breadcrumb schema', () => {
      const keyword = 'pet training';
      const result = generator.generateBreadcrumbStructuredData(keyword);

      expect(result['@context']).toBe('https://schema.org');
      expect(result['@type']).toBe('BreadcrumbList');
      expect(result).toHaveProperty('itemListElement');
      expect(Array.isArray(result.itemListElement)).toBe(true);
      expect(result.itemListElement).toHaveLength(3);

      // Check breadcrumb structure
      expect(result.itemListElement[0].name).toBe('Home');
      expect(result.itemListElement[1].name).toBe('Blog');
      expect(result.itemListElement[2].name).toBe('Pet Training');
    });
  });
});