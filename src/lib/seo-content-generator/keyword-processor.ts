// Keyword Processor - Handles keyword validation and processing
import { KeywordInput } from './types';

export class KeywordProcessor {
  private petRelatedTerms = [
    'pet', 'dog', 'cat', 'breed', 'animal', 'puppy', 'kitten', 'health', 'care',
    'training', 'feeding', 'grooming', 'veterinary', 'vet', 'breeding', 'behavior',
    'nutrition', 'exercise', 'toy', 'food', 'medicine', 'vaccine', 'shelter',
    'adoption', 'rescue', 'wildlife', 'bird', 'fish', 'reptile', 'hamster',
    'rabbit', 'guinea pig', 'ferret', 'horse', 'livestock'
  ];

  /**
   * Validates if keywords are relevant to pet-related content
   */
  validateKeywords(keywords: string[]): { valid: string[]; invalid: string[] } {
    const valid: string[] = [];
    const invalid: string[] = [];

    for (const keyword of keywords) {
      const normalized = this.normalizeKeyword(keyword);
      
      if (this.isQualityKeyword(normalized) && this.isPetRelated(normalized)) {
        valid.push(normalized);
      } else {
        invalid.push(keyword);
      }
    }

    return { valid, invalid };
  }

  /**
   * Processes keyword input and returns validated keywords
   */
  processKeywords(input: KeywordInput): string[] {
    if (!input.keywords || input.keywords.length === 0) {
      throw new Error('Keywords array cannot be empty');
    }

    const { valid, invalid } = this.validateKeywords(input.keywords);

    if (invalid.length > 0) {
      console.warn(`Non-pet-related keywords filtered out: ${invalid.join(', ')}`);
    }

    if (valid.length === 0) {
      throw new Error('No valid pet-related keywords found');
    }

    return this.removeDuplicates(valid);
  }

  /**
   * Processes multiple keyword lists in batch
   */
  processBatchKeywords(inputs: KeywordInput[]): string[][] {
    if (!inputs || inputs.length === 0) {
      throw new Error('Input array cannot be empty');
    }

    return inputs.map(input => this.processKeywords(input));
  }

  /**
   * Normalizes keywords for consistent processing
   */
  normalizeKeyword(keyword: string): string {
    return keyword.trim().toLowerCase().replace(/\s+/g, ' ');
  }

  /**
   * Checks if a keyword meets minimum quality standards
   */
  isQualityKeyword(keyword: string): boolean {
    const normalized = this.normalizeKeyword(keyword);
    
    // Must be at least 2 characters
    if (normalized.length < 2) return false;
    
    // Must contain at least one letter
    if (!/[a-zA-Z]/.test(normalized)) return false;
    
    // Must not be only numbers or special characters
    if (/^[\d\s\-_]+$/.test(normalized)) return false;
    
    return true;
  }

  /**
   * Generates keyword variations and semantic alternatives
   */
  generateKeywordVariations(keyword: string): string[] {
    const variations = [keyword];
    
    // Add plural/singular variations
    if (keyword.endsWith('s')) {
      variations.push(keyword.slice(0, -1));
    } else {
      variations.push(keyword + 's');
    }

    // Add common pet-related combinations
    const combinations = [
      `${keyword} breed`,
      `${keyword} care`,
      `${keyword} health`,
      `${keyword} training`,
      `${keyword} guide`,
      `best ${keyword}`,
      `${keyword} tips`
    ];

    return [...variations, ...combinations];
  }

  private isPetRelated(keyword: string): boolean {
    const lowerKeyword = keyword.toLowerCase();
    return this.petRelatedTerms.some(term => 
      lowerKeyword.includes(term) || term.includes(lowerKeyword)
    );
  }

  private removeDuplicates(keywords: string[]): string[] {
    return [...new Set(keywords)];
  }
}