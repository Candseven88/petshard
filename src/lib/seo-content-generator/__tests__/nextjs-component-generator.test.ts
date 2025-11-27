import { NextJSComponentGenerator } from '../nextjs-component-generator';
import { ArticleStructure, FAQItem, InternalLink, SEOMetadata } from '../types';

describe('NextJSComponentGenerator', () => {
  let generator: NextJSComponentGenerator;
  let mockArticle: ArticleStructure;

  beforeEach(() => {
    generator = new NextJSComponentGenerator('https://test.com', 'TestSite');
    
    mockArticle = {
      title: 'Test Pet Care Guide',
      summary: 'A comprehensive guide for pet care',
      sections: {
        introduction: 'This is an introduction about pet care.',
        coreContent: 'Core content about pet care practices.',
        useCases: [
          'Daily feeding routine',
          'Exercise planning',
          'Health monitoring'
        ],
        faq: [
          { question: 'How often should I feed my pet?', answer: 'Twice daily for most pets.' },
          { question: 'What are signs of illness?', answer: 'Loss of appetite, lethargy, unusual behavior.' }
        ],
        conclusion: 'Pet care requires dedication and knowledge.'
      },
      metadata: {
        title: 'Test Pet Care Guide - TestSite',
        description: 'Learn essential pet care practices',
        keywords: ['pet care', 'pet health', 'pet feeding'],
        canonicalUrl: 'https://test.com/blog/test-pet-care-guide'
      } as SEOMetadata,
      internalLinks: [
        { text: 'Health Center', url: '/health-center', context: 'health monitoring' },
        { text: 'Breed Guide', url: '/breed-identification', context: 'breed specific care' }
      ] as InternalLink[]
    };
  });

  describe('generateComponent', () => {
    it('should generate valid TypeScript React component', () => {
      const result = generator.generateComponent(mockArticle, 'pet care');
      
      expect(result).toContain('"use client";');
      expect(result).toContain('import { Suspense } from "react";');
      expect(result).toContain('import Layout from "@/components/layout/Layout";');
      expect(result).toContain('function PetCareGuideContent()');
      expect(result).toContain('export default function PetCareGuide()');
    });

    it('should include article title in component', () => {
      const result = generator.generateComponent(mockArticle, 'pet care');
      
      expect(result).toContain('Test Pet Care Guide');
    });

    it('should include all required sections', () => {
      const result = generator.generateComponent(mockArticle, 'pet care');
      
      expect(result).toContain('Introduction');
      expect(result).toContain('Practical Use Cases');
      expect(result).toContain('Frequently Asked Questions');
      expect(result).toContain('Conclusion');
    });

    it('should include FAQ items', () => {
      const result = generator.generateComponent(mockArticle, 'pet care');
      
      expect(result).toContain('How often should I feed my pet?');
      expect(result).toContain('Twice daily for most pets.');
    });

    it('should include use cases', () => {
      const result = generator.generateComponent(mockArticle, 'pet care');
      
      expect(result).toContain('Daily feeding routine');
      expect(result).toContain('Exercise planning');
      expect(result).toContain('Health monitoring');
    });

    it('should include internal links when provided', () => {
      const result = generator.generateComponent(mockArticle, 'pet care');
      
      expect(result).toContain('Health Center');
      expect(result).toContain('/health-center');
    });

    it('should handle empty internal links gracefully', () => {
      mockArticle.internalLinks = [];
      const result = generator.generateComponent(mockArticle, 'pet care');
      
      expect(result).not.toContain('Related Tools & Resources');
    });
  });

  describe('generateArticle', () => {
    it('should generate complete GeneratedArticle object', () => {
      const result = generator.generateArticle(mockArticle, 'pet care');
      
      expect(result.keyword).toBe('pet care');
      expect(result.content).toBe(mockArticle);
      expect(result.componentCode).toContain('function PetCareGuideContent()');
      expect(result.filePath).toBe('src/app/blog/pet-care/page.tsx');
      expect(result.wordCount).toBeGreaterThan(0);
      expect(result.keywordDensity).toBeGreaterThan(0);
    });

    it('should calculate word count correctly', () => {
      const result = generator.generateArticle(mockArticle, 'pet care');
      
      expect(result.wordCount).toBeGreaterThan(10);
    });

    it('should calculate keyword density', () => {
      const result = generator.generateArticle(mockArticle, 'pet care');
      
      expect(result.keywordDensity).toBeGreaterThanOrEqual(0);
    });
  });

  describe('component name generation', () => {
    it('should generate proper component names', () => {
      const result = generator.generateComponent(mockArticle, 'dog training');
      expect(result).toContain('function DogTrainingGuideContent()');
      expect(result).toContain('export default function DogTrainingGuide()');
    });

    it('should handle special characters in keywords', () => {
      const result = generator.generateComponent(mockArticle, 'cat-care & health');
      expect(result).toContain('function CatCareHealthGuideContent()');
    });
  });

  describe('metadata generation', () => {
    it('should include SEO metadata export', () => {
      const result = generator.generateComponent(mockArticle, 'pet care');
      
      expect(result).toContain('export const metadata: Metadata');
      expect(result).toContain('title: "Test Pet Care Guide - TestSite"');
      expect(result).toContain('description: "Learn essential pet care practices"');
    });

    it('should include structured data', () => {
      const result = generator.generateComponent(mockArticle, 'pet care');
      
      expect(result).toContain('"@context": "https://schema.org"');
      expect(result).toContain('"@type": "Article"');
    });

    it('should include Open Graph metadata', () => {
      const result = generator.generateComponent(mockArticle, 'pet care');
      
      expect(result).toContain('openGraph:');
      expect(result).toContain('type: "article"');
    });
  });

  describe('string escaping', () => {
    it('should escape quotes in content', () => {
      mockArticle.title = 'Pet "Care" Guide';
      const result = generator.generateComponent(mockArticle, 'pet care');
      
      expect(result).toContain('Pet \\"Care\\" Guide');
    });

    it('should escape backslashes', () => {
      mockArticle.summary = 'Guide\\with\\backslashes';
      const result = generator.generateComponent(mockArticle, 'pet care');
      
      expect(result).toContain('Guide\\\\with\\\\backslashes');
    });
  });
});