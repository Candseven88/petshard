// Tests for ArticleStructureGenerator
import { ArticleStructureGenerator } from '../article-structure-generator';
import { GenerationConfig, DEFAULT_CONFIG } from '../types';

describe('ArticleStructureGenerator', () => {
  let generator: ArticleStructureGenerator;

  beforeEach(() => {
    generator = new ArticleStructureGenerator();
  });

  describe('generateStructure', () => {
    test('should generate complete article structure', () => {
      const keyword = 'dog breed';
      const structure = generator.generateStructure(keyword);

      expect(structure.title).toBeTruthy();
      expect(structure.title.toLowerCase()).toContain(keyword);
      expect(structure.summary).toBeTruthy();
      expect(structure.sections.introduction).toBeTruthy();
      expect(structure.sections.coreContent).toBeTruthy();
      expect(structure.sections.conclusion).toBeTruthy();
      expect(structure.sections.useCases).toHaveLength(DEFAULT_CONFIG.minUseCases);
      expect(structure.sections.faq).toHaveLength(DEFAULT_CONFIG.minFAQItems);
    });

    test('should throw error for empty keyword', () => {
      expect(() => generator.generateStructure('')).toThrow('Keyword cannot be empty');
      expect(() => generator.generateStructure('   ')).toThrow('Keyword cannot be empty');
    });

    test('should normalize keywords', () => {
      const structure = generator.generateStructure('  DOG BREED  ');
      expect(structure.title.toLowerCase()).toContain('dog breed');
    });

    test('should generate different titles for different keyword types', () => {
      const breedStructure = generator.generateStructure('golden retriever breed');
      const healthStructure = generator.generateStructure('pet health issues');
      const careStructure = generator.generateStructure('pet care tips');

      expect(breedStructure.title).toBeTruthy();
      expect(healthStructure.title).toBeTruthy();
      expect(careStructure.title).toBeTruthy();
      
      // Titles should be different for different types
      expect(breedStructure.title).not.toBe(healthStructure.title);
    });
  });

  describe('generateBatchStructures', () => {
    test('should generate multiple structures', () => {
      const keywords = ['dog breed', 'cat care', 'pet health'];
      const structures = generator.generateBatchStructures(keywords);

      expect(structures).toHaveLength(3);
      structures.forEach((structure, index) => {
        expect(structure.title.toLowerCase()).toContain(keywords[index]);
      });
    });

    test('should throw error for empty keywords array', () => {
      expect(() => generator.generateBatchStructures([])).toThrow('Keywords array cannot be empty');
    });
  });

  describe('validateStructure', () => {
    test('should validate complete structure', () => {
      const structure = generator.generateStructure('dog breed');
      expect(generator.validateStructure(structure)).toBe(true);
    });

    test('should reject incomplete structure', () => {
      const incompleteStructure = {
        title: '',
        summary: 'test',
        sections: {
          introduction: 'test',
          coreContent: 'test',
          useCases: [],
          faq: [],
          conclusion: 'test'
        },
        metadata: {
          title: 'test',
          description: 'test',
          keywords: ['test']
        },
        internalLinks: []
      };

      expect(generator.validateStructure(incompleteStructure)).toBe(false);
    });
  });

  describe('content generation with custom config', () => {
    test('should respect custom configuration', () => {
      const customConfig: GenerationConfig = {
        ...DEFAULT_CONFIG,
        minUseCases: 5,
        minFAQItems: 8,
        summaryMinLength: 50,
        summaryMaxLength: 80
      };

      const customGenerator = new ArticleStructureGenerator(customConfig);
      const structure = customGenerator.generateStructure('pet care');

      expect(structure.sections.useCases.length).toBeGreaterThanOrEqual(5);
      expect(structure.sections.faq.length).toBeGreaterThanOrEqual(8);
      expect(structure.summary.length).toBeGreaterThanOrEqual(50);
      expect(structure.summary.length).toBeLessThanOrEqual(80);
    });
  });

  describe('content quality', () => {
    test('should include keyword in all major sections', () => {
      const keyword = 'dog training';
      const structure = generator.generateStructure(keyword);

      expect(structure.title.toLowerCase()).toContain(keyword);
      expect(structure.sections.introduction.toLowerCase()).toContain(keyword);
      expect(structure.sections.coreContent.toLowerCase()).toContain(keyword);
      expect(structure.sections.conclusion.toLowerCase()).toContain(keyword);
    });

    test('should generate unique FAQ questions', () => {
      const structure = generator.generateStructure('cat care');
      const questions = structure.sections.faq.map(item => item.question);
      const uniqueQuestions = new Set(questions);
      
      expect(uniqueQuestions.size).toBe(questions.length);
    });

    test('should generate meaningful use cases', () => {
      const structure = generator.generateStructure('pet health');
      
      structure.sections.useCases.forEach(useCase => {
        expect(useCase.length).toBeGreaterThan(10);
        // Use cases should be meaningful and related to pets
        expect(useCase.toLowerCase()).toMatch(/pet|care|health|owner|veterinar|breed/);
      });
    });
  });
});