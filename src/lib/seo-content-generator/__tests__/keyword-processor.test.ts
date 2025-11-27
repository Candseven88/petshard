// Comprehensive tests for KeywordProcessor
import { KeywordProcessor } from '../keyword-processor';
import { KeywordInput } from '../types';

describe('KeywordProcessor', () => {
  let processor: KeywordProcessor;

  beforeEach(() => {
    processor = new KeywordProcessor();
  });

  describe('processKeywords', () => {
    test('should process valid pet-related keywords', () => {
      const input: KeywordInput = {
        keywords: ['dog breed', 'cat care', 'pet health']
      };

      const result = processor.processKeywords(input);
      expect(result).toHaveLength(3);
      expect(result).toContain('dog breed');
      expect(result).toContain('cat care');
      expect(result).toContain('pet health');
    });

    test('should throw error for empty keywords', () => {
      const input: KeywordInput = {
        keywords: []
      };

      expect(() => processor.processKeywords(input)).toThrow('Keywords array cannot be empty');
    });

    test('should remove duplicates', () => {
      const input: KeywordInput = {
        keywords: ['dog breed', 'Dog Breed', 'DOG BREED', 'cat care']
      };

      const result = processor.processKeywords(input);
      expect(result).toHaveLength(2);
      expect(result).toContain('dog breed');
      expect(result).toContain('cat care');
    });

    test('should normalize keywords', () => {
      const input: KeywordInput = {
        keywords: ['  Dog   Breed  ', 'CAT care', 'Pet  Health  ']
      };

      const result = processor.processKeywords(input);
      expect(result).toContain('dog breed');
      expect(result).toContain('cat care');
      expect(result).toContain('pet health');
    });
  });

  describe('validateKeywords', () => {
    test('should validate pet-related keywords', () => {
      const keywords = ['dog breed', 'car repair', 'cat health'];
      const result = processor.validateKeywords(keywords);
      
      expect(result.valid).toContain('dog breed');
      expect(result.valid).toContain('cat health');
      expect(result.invalid).toContain('car repair');
    });

    test('should reject low-quality keywords', () => {
      const keywords = ['a', '123', '---', 'dog breed'];
      const result = processor.validateKeywords(keywords);
      
      expect(result.valid).toContain('dog breed');
      expect(result.invalid).toContain('a');
      expect(result.invalid).toContain('123');
      expect(result.invalid).toContain('---');
    });
  });

  describe('processBatchKeywords', () => {
    test('should process multiple keyword lists', () => {
      const inputs: KeywordInput[] = [
        { keywords: ['dog breed', 'cat care'] },
        { keywords: ['pet health', 'bird feeding'] },
        { keywords: ['fish tank', 'reptile care'] }
      ];

      const result = processor.processBatchKeywords(inputs);
      expect(result).toHaveLength(3);
      expect(result[0]).toContain('dog breed');
      expect(result[1]).toContain('pet health');
      expect(result[2]).toContain('fish tank');
    });

    test('should throw error for empty batch', () => {
      expect(() => processor.processBatchKeywords([])).toThrow('Input array cannot be empty');
    });
  });

  describe('generateKeywordVariations', () => {
    test('should generate variations for singular keyword', () => {
      const variations = processor.generateKeywordVariations('dog');
      expect(variations).toContain('dog');
      expect(variations).toContain('dogs');
      expect(variations).toContain('dog breed');
      expect(variations).toContain('dog care');
    });

    test('should generate variations for plural keyword', () => {
      const variations = processor.generateKeywordVariations('cats');
      expect(variations).toContain('cats');
      expect(variations).toContain('cat');
      expect(variations).toContain('cats breed');
    });
  });

  describe('isQualityKeyword', () => {
    test('should accept quality keywords', () => {
      expect(processor.isQualityKeyword('dog breed')).toBe(true);
      expect(processor.isQualityKeyword('pet care')).toBe(true);
      expect(processor.isQualityKeyword('cat123')).toBe(true);
    });

    test('should reject low-quality keywords', () => {
      expect(processor.isQualityKeyword('a')).toBe(false);
      expect(processor.isQualityKeyword('123')).toBe(false);
      expect(processor.isQualityKeyword('---')).toBe(false);
      expect(processor.isQualityKeyword('')).toBe(false);
    });
  });

  describe('normalizeKeyword', () => {
    test('should normalize keywords correctly', () => {
      expect(processor.normalizeKeyword('  Dog   Breed  ')).toBe('dog breed');
      expect(processor.normalizeKeyword('CAT CARE')).toBe('cat care');
      expect(processor.normalizeKeyword('Pet    Health')).toBe('pet health');
    });
  });
});