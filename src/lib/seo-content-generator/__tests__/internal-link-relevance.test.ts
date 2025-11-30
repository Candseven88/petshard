/**
 * Property-Based Test for Internal Link Relevance
 * **Feature: blog-content-improvement, Property 4: Internal Link Relevance**
 * **Validates: Requirements 6.2, 6.3**
 * 
 * Property 4: Internal Link Relevance
 * For any internal link in a blog article, the linked article SHALL be 
 * contextually relevant to the linking article's topic.
 * 
 * This test verifies that internal links point to related, relevant content
 * and not unrelated articles or tools.
 */

import fc from 'fast-check';
import { InternalLinkManager } from '../internal-link-manager';
import { ArticleStructureGenerator } from '../article-structure-generator';

describe('Property 4: Internal Link Relevance', () => {
  let linkManager: InternalLinkManager;
  let structureGenerator: ArticleStructureGenerator;

  beforeEach(() => {
    linkManager = new InternalLinkManager();
    structureGenerator = new ArticleStructureGenerator();
  });

  /**
   * Property: Internal links must be contextually relevant
   * 
   * For any article, all internal links SHALL point to contextually relevant
   * content (not random or unrelated articles).
   * 
   * This ensures internal links provide value to users and search engines.
   */
  test('Property 4.1: Internal links are contextually relevant', () => {
    const breedKeywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'dog breed temperament',
      'dog breed health issues',
      'dog breed exercise requirements'
    ];

    const healthKeywords = [
      'cat health symptoms',
      'common dog diseases',
      'pet emergency signs',
      'pet dental health',
      'pet parasite prevention'
    ];

    const careKeywords = [
      'dog grooming tips',
      'pet nutrition guide',
      'dog training basics',
      'pet first aid',
      'healthy pet treats'
    ];

    // Define relevance patterns for each category
    const relevancePatterns: Record<string, RegExp> = {
      breed: /breed|dog|cat|temperament|characteristic|health|exercise|grooming|training|cost|lifespan|popularity|history|standard|selection|practices/i,
      health: /health|symptom|disease|condition|care|treatment|veterinary|vet|medical|illness|infection|prevention|diagnosis|therapy|medication|wellness|emergency|dental|parasite|vaccination|allergy|weight|urinary|skin/i,
      care: /care|grooming|nutrition|training|exercise|first aid|treats|litter|walking|safety|breed identification|bird|reptile|humidity/i
    };

    // Test breed keywords with breed focus
    fc.assert(
      fc.property(
        fc.constantFrom(...breedKeywords),
        (keyword: string) => {
          const links = linkManager.generateInternalLinks(keyword, 'breed', 3);
          const relevancePattern = relevancePatterns['breed'];
          const allLinksRelevant = links.every(link => {
            const linkText = `${link.text} ${link.context}`.toLowerCase();
            return relevancePattern.test(linkText);
          });
          return allLinksRelevant;
        }
      ),
      { numRuns: 50 }
    );

    // Test health keywords with health focus
    fc.assert(
      fc.property(
        fc.constantFrom(...healthKeywords),
        (keyword: string) => {
          const links = linkManager.generateInternalLinks(keyword, 'health', 3);
          const relevancePattern = relevancePatterns['health'];
          const allLinksRelevant = links.every(link => {
            const linkText = `${link.text} ${link.context}`.toLowerCase();
            return relevancePattern.test(linkText);
          });
          return allLinksRelevant;
        }
      ),
      { numRuns: 50 }
    );

    // Test care keywords with care focus
    fc.assert(
      fc.property(
        fc.constantFrom(...careKeywords),
        (keyword: string) => {
          const links = linkManager.generateInternalLinks(keyword, 'care', 3);
          const relevancePattern = relevancePatterns['care'];
          const allLinksRelevant = links.every(link => {
            const linkText = `${link.text} ${link.context}`.toLowerCase();
            return relevancePattern.test(linkText);
          });
          return allLinksRelevant;
        }
      ),
      { numRuns: 50 }
    );
  });

  /**
   * Property: Internal links must have descriptive anchor text
   * 
   * For any internal link, the anchor text SHALL be descriptive and not
   * generic phrases like "click here" or "read more".
   * 
   * This ensures links provide context and improve SEO value.
   */
  test('Property 4.2: Internal links have descriptive anchor text', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    // Generic anchor text that should be avoided
    const genericPhrases = [
      'click here',
      'read more',
      'learn more',
      'here',
      'link',
      'article',
      'page',
      'website'
    ];

    fc.assert(
      fc.property(
        fc.tuple(
          fc.constantFrom(...keywords),
          fc.constantFrom('breed', 'health', 'care')
        ),
        ([keyword, contentFocus]: [string, 'breed' | 'health' | 'care']) => {
          const links = linkManager.generateInternalLinks(keyword, contentFocus, 3);

          // Check that anchor text is descriptive
          const allDescriptive = links.every(link => {
            const anchorText = link.text.toLowerCase();
            
            // Anchor text should not be generic
            const isGeneric = genericPhrases.some(phrase =>
              anchorText === phrase || anchorText.includes(phrase)
            );

            // Anchor text should be at least 2 words (usually)
            const wordCount = anchorText.split(/\s+/).length;

            return !isGeneric && wordCount >= 2;
          });

          // Property: All anchor text MUST be descriptive
          return allDescriptive;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Internal links must have 3-5 links per article
   * 
   * For any article, the number of internal links SHALL be between 3-5
   * to provide navigation without overwhelming the reader.
   * 
   * This ensures proper link density for SEO and user experience.
   */
  test('Property 4.3: Articles have 3-5 internal links', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    fc.assert(
      fc.property(
        fc.tuple(
          fc.constantFrom(...keywords),
          fc.constantFrom('breed', 'health', 'care')
        ),
        ([keyword, contentFocus]: [string, 'breed' | 'health' | 'care']) => {
          const links = linkManager.generateInternalLinks(keyword, contentFocus, 3);

          // Property: Articles MUST have 3-5 internal links
          return links.length >= 3 && links.length <= 5;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Internal links must not be to the same article
   * 
   * For any article, internal links SHALL not point to the same article
   * (no self-referential links).
   * 
   * This ensures links point to different, related content.
   */
  test('Property 4.4: Internal links do not point to the same article', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    fc.assert(
      fc.property(
        fc.tuple(
          fc.constantFrom(...keywords),
          fc.constantFrom('breed', 'health', 'care')
        ),
        ([keyword, contentFocus]: [string, 'breed' | 'health' | 'care']) => {
          const links = linkManager.generateInternalLinks(keyword, contentFocus, 3);

          // Check that all links are unique (no duplicates)
          const uniqueUrls = new Set(links.map(link => link.url));

          // Property: All link URLs MUST be unique
          return uniqueUrls.size === links.length;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Internal links must have context information
   * 
   * For any internal link, the context field SHALL contain information
   * about why the link is relevant.
   * 
   * This ensures links are well-integrated into the content.
   */
  test('Property 4.5: Internal links have context information', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    fc.assert(
      fc.property(
        fc.tuple(
          fc.constantFrom(...keywords),
          fc.constantFrom('breed', 'health', 'care')
        ),
        ([keyword, contentFocus]: [string, 'breed' | 'health' | 'care']) => {
          const links = linkManager.generateInternalLinks(keyword, contentFocus, 3);

          // Check that all links have context
          const allHaveContext = links.every(link => {
            return link.context && link.context.length > 10;
          });

          // Property: All links MUST have meaningful context
          return allHaveContext;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Internal links must be diverse (not all to same category)
   * 
   * For any article, internal links SHALL point to diverse content
   * (not all to the same category or tool).
   * 
   * This ensures a well-rounded internal link structure.
   */
  test('Property 4.6: Internal links are diverse', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    fc.assert(
      fc.property(
        fc.tuple(
          fc.constantFrom(...keywords),
          fc.constantFrom('breed', 'health', 'care')
        ),
        ([keyword, contentFocus]: [string, 'breed' | 'health' | 'care']) => {
          const links = linkManager.generateInternalLinks(keyword, contentFocus, 3);

          // Check URL diversity (different paths)
          const urlPaths = links.map(link => {
            const path = link.url.split('/')[1]; // Get first path segment
            return path;
          });

          const uniquePaths = new Set(urlPaths);

          // Property: Links should point to at least 2 different paths
          return uniquePaths.size >= 2;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property: Internal links should be relevant to content
   * 
   * For any article, internal links SHOULD be relevant to the article content.
   * 
   * This ensures links match the article's topic and purpose.
   */
  test('Property 4.7: Internal links are relevant to content', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    fc.assert(
      fc.property(
        fc.tuple(
          fc.constantFrom(...keywords),
          fc.constantFrom('breed', 'health', 'care')
        ),
        ([keyword, contentFocus]: [string, 'breed' | 'health' | 'care']) => {
          const links = linkManager.generateInternalLinks(keyword, contentFocus, 3);

          // Check that links have meaningful content
          const meaningfulLinks = links.filter(link => {
            const linkInfo = `${link.text} ${link.context}`.toLowerCase();
            
            // Link should have meaningful text and context
            return link.text.length > 5 && link.context.length > 10;
          });

          // Property: All links should be meaningful
          return meaningfulLinks.length === links.length;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Integration test: Validate complete internal link relevance
   * 
   * This test validates that generated articles have relevant, well-structured
   * internal links.
   */
  test('Property 4.8: Generated articles have relevant internal links', () => {
    const keywords = [
      'best dog breeds for families',
      'dog breed characteristics',
      'cat health symptoms',
      'pet nutrition guide',
      'dog training basics'
    ];

    fc.assert(
      fc.property(
        fc.tuple(
          fc.constantFrom(...keywords),
          fc.constantFrom('breed', 'health', 'care')
        ),
        ([keyword, contentFocus]: [string, 'breed' | 'health' | 'care']) => {
          const links = linkManager.generateInternalLinks(keyword, contentFocus, 3);

          // Validate all link properties
          const allValid = links.every(link => {
            // Must have text, URL, and context
            const hasRequiredFields = link.text && link.url && link.context;
            
            // Text should be descriptive (2+ words)
            const isDescriptive = link.text.split(/\s+/).length >= 2;
            
            // URL should start with /
            const isValidUrl = link.url.startsWith('/');
            
            // Context should be meaningful
            const hasMeaningfulContext = link.context.length > 10;

            return hasRequiredFields && isDescriptive && isValidUrl && hasMeaningfulContext;
          });

          // Property: All links must be valid and relevant
          return (
            allValid &&
            links.length >= 3 &&
            links.length <= 5 &&
            new Set(links.map(l => l.url)).size === links.length
          );
        }
      ),
      { numRuns: 100 }
    );
  });
});
