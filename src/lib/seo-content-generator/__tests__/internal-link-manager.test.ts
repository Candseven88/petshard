import { InternalLinkManager } from '../internal-link-manager';

describe('InternalLinkManager', () => {
  let linkManager: InternalLinkManager;

  beforeEach(() => {
    linkManager = new InternalLinkManager();
  });

  describe('generateInternalLinks', () => {
    it('should generate minimum required links', () => {
      const links = linkManager.generateInternalLinks('golden retriever', 'breed', 2);
      
      expect(links.length).toBeGreaterThanOrEqual(2);
      expect(links.every(link => link.text && link.url && link.context)).toBe(true);
    });

    it('should generate breed-specific links for breed content', () => {
      const links = linkManager.generateInternalLinks('labrador', 'breed', 2);
      
      expect(links.some(link => link.url === '/breed-identification')).toBe(true);
      expect(links.some(link => link.text.includes('breed'))).toBe(true);
    });

    it('should generate health-specific links for health content', () => {
      const links = linkManager.generateInternalLinks('dog health', 'health', 2);
      
      expect(links.some(link => link.url === '/health-center' || link.url === '/health-guide')).toBe(true);
      expect(links.some(link => link.text.includes('health'))).toBe(true);
    });

    it('should generate care-specific links for care content', () => {
      const links = linkManager.generateInternalLinks('pet care', 'care', 2);
      
      expect(links.some(link => link.url === '/pet-care-guide')).toBe(true);
      expect(links.some(link => link.text.includes('care'))).toBe(true);
    });

    it('should generate general links for general content', () => {
      const links = linkManager.generateInternalLinks('pet tips', 'general', 2);
      
      expect(links).toHaveLength(2);
      expect(links.every(link => link.url.startsWith('/'))).toBe(true);
    });

    it('should not generate duplicate URLs', () => {
      const links = linkManager.generateInternalLinks('dog breed health care', 'general', 3);
      const urls = links.map(link => link.url);
      const uniqueUrls = new Set(urls);
      
      expect(urls.length).toBe(uniqueUrls.size);
    });

    it('should include keyword in context', () => {
      const keyword = 'golden retriever';
      const links = linkManager.generateInternalLinks(keyword, 'breed', 2);
      
      expect(links.some(link => link.context.includes(keyword))).toBe(true);
    });

    it('should cap links at maximum of 3', () => {
      const links = linkManager.generateInternalLinks('dog cat health care breed', 'general', 3);
      
      expect(links.length).toBeLessThanOrEqual(3);
    });
  });

  describe('validateLinks', () => {
    it('should validate correct links', () => {
      const links = linkManager.generateInternalLinks('test', 'general', 2);
      const isValid = linkManager.validateLinks(links, 2);
      
      expect(isValid).toBe(true);
    });

    it('should reject insufficient links', () => {
      const links = linkManager.generateInternalLinks('test', 'general', 1);
      const isValid = linkManager.validateLinks(links, 3);
      
      expect(isValid).toBe(false);
    });

    it('should reject invalid link structure', () => {
      const invalidLinks = [
        { text: '', url: '/test', context: 'test' },
        { text: 'test', url: '', context: 'test' }
      ];
      const isValid = linkManager.validateLinks(invalidLinks, 2);
      
      expect(isValid).toBe(false);
    });
  });

  describe('getAvailableFeatures', () => {
    it('should return available feature URLs', () => {
      const features = linkManager.getAvailableFeatures();
      
      expect(features).toContain('/breed-identification');
      expect(features).toContain('/health-center');
      expect(features).toContain('/pet-care-guide');
      expect(features.length).toBeGreaterThan(5);
    });
  });

  describe('keyword pattern matching', () => {
    it('should match dog-related keywords', () => {
      const links = linkManager.generateInternalLinks('dog training', 'general', 2);
      
      expect(links.some(link => 
        link.url === '/breed-identification' || 
        link.url === '/pet-care-guide'
      )).toBe(true);
    });

    it('should match health-related keywords', () => {
      const links = linkManager.generateInternalLinks('pet illness', 'general', 2);
      
      expect(links.some(link => 
        link.url === '/health-center' || 
        link.url === '/health-guide'
      )).toBe(true);
    });

    it('should match age-related keywords', () => {
      const links = linkManager.generateInternalLinks('puppy age', 'general', 2);
      
      expect(links.some(link => link.url === '/pet-age-calculator')).toBe(true);
    });
  });
});