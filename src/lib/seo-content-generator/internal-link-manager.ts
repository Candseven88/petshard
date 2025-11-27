import { InternalLink } from './types';

/**
 * InternalLinkManager handles the generation of contextual internal links
 * for SEO content based on keywords and content focus areas.
 */
export class InternalLinkManager {
  private readonly featureMapping: Map<string, FeatureInfo>;
  private readonly keywordPatterns: Map<RegExp, string[]>;

  constructor() {
    this.featureMapping = this.initializeFeatureMapping();
    this.keywordPatterns = this.initializeKeywordPatterns();
  }

  /**
   * Generates contextual internal links based on keyword and content focus
   * @param keyword - The target keyword for the article
   * @param contentFocus - The content focus area (breed, health, care, general)
   * @param minLinks - Minimum number of links to generate (default: 2)
   * @returns Array of internal links
   */
  generateInternalLinks(
    keyword: string,
    contentFocus: 'breed' | 'health' | 'care' | 'general' = 'general',
    minLinks: number = 2
  ): InternalLink[] {
    const links: InternalLink[] = [];
    const usedUrls = new Set<string>();

    // Get content-specific links based on focus area
    const focusLinks = this.getContentSpecificLinks(contentFocus, keyword);
    for (const link of focusLinks) {
      if (!usedUrls.has(link.url) && links.length < 3) {
        links.push(link);
        usedUrls.add(link.url);
      }
    }

    // Always get keyword-based links to ensure pattern matching works
    const keywordLinks = this.getKeywordBasedLinks(keyword);
    for (const link of keywordLinks) {
      if (!usedUrls.has(link.url) && links.length < 3) {
        links.push(link);
        usedUrls.add(link.url);
      }
    }

    // Ensure minimum link requirement is met
    if (links.length < minLinks) {
      const fallbackLinks = this.getFallbackLinks(usedUrls);
      for (const link of fallbackLinks) {
        if (!usedUrls.has(link.url) && links.length < Math.max(minLinks, 3)) {
          links.push(link);
          usedUrls.add(link.url);
        }
      }
    }

    return links.slice(0, Math.max(minLinks, 3)); // Cap at 3 links maximum
  }

  /**
   * Gets content-specific internal links based on the content focus area
   */
  private getContentSpecificLinks(
    contentFocus: 'breed' | 'health' | 'care' | 'general',
    keyword: string
  ): InternalLink[] {
    const links: InternalLink[] = [];

    switch (contentFocus) {
      case 'breed':
        links.push(
          {
            text: 'breed identification tool',
            url: '/breed-identification',
            context: `Learn more about ${keyword} characteristics with our AI-powered`
          },
          {
            text: 'virtual breeding simulator',
            url: '/virtual-breeding',
            context: `Explore potential offspring combinations for ${keyword} with our`
          },
          {
            text: 'pet naming suggestions',
            url: '/pet-naming',
            context: `Find the perfect name for your ${keyword} using our`
          }
        );
        break;

      case 'health':
        links.push(
          {
            text: 'health center',
            url: '/health-center',
            context: `Get professional health advice for ${keyword} issues at our`
          },
          {
            text: 'health guide',
            url: '/health-guide',
            context: `Discover comprehensive health information for ${keyword} in our`
          },
          {
            text: 'pet care guide',
            url: '/pet-care-guide',
            context: `Learn proper care techniques for ${keyword} with our detailed`
          }
        );
        break;

      case 'care':
        links.push(
          {
            text: 'pet care guide',
            url: '/pet-care-guide',
            context: `Get expert advice on ${keyword} care with our comprehensive`
          },
          {
            text: 'pet diary',
            url: '/pet-diary',
            context: `Track your ${keyword} daily activities and progress using our`
          },
          {
            text: 'pet age calculator',
            url: '/pet-age-calculator',
            context: `Calculate your ${keyword} age in human years with our`
          }
        );
        break;

      default: // general
        links.push(
          {
            text: 'AI tools',
            url: '/ai-tools',
            context: `Explore all our ${keyword} related tools in our`
          },
          {
            text: 'pet horoscope',
            url: '/pet-horoscope',
            context: `Discover your ${keyword} personality traits with our`
          }
        );
    }

    return links;
  }

  /**
   * Gets keyword-based internal links by matching patterns
   */
  private getKeywordBasedLinks(keyword: string): InternalLink[] {
    const links: InternalLink[] = [];
    const lowerKeyword = keyword.toLowerCase();

    for (const [pattern, urls] of this.keywordPatterns) {
      if (pattern.test(lowerKeyword)) {
        for (const url of urls) {
          const feature = this.featureMapping.get(url);
          if (feature) {
            links.push({
              text: feature.linkText,
              url: url,
              context: feature.contextTemplate.replace('{keyword}', keyword)
            });
          }
        }
      }
    }

    return links;
  }

  /**
   * Gets fallback links when minimum requirements aren't met
   */
  private getFallbackLinks(usedUrls: Set<string>): InternalLink[] {
    const fallbackLinks: InternalLink[] = [
      {
        text: 'pet care guide',
        url: '/pet-care-guide',
        context: 'Get comprehensive pet care advice with our'
      },
      {
        text: 'health center',
        url: '/health-center',
        context: 'Access professional pet health resources at our'
      },
      {
        text: 'AI tools',
        url: '/ai-tools',
        context: 'Discover all our pet-related AI tools in our'
      }
    ];

    return fallbackLinks.filter(link => !usedUrls.has(link.url));
  }

  /**
   * Initializes the feature mapping with platform features
   */
  private initializeFeatureMapping(): Map<string, FeatureInfo> {
    const mapping = new Map<string, FeatureInfo>();

    mapping.set('/breed-identification', {
      name: 'Breed Identification',
      linkText: 'breed identification tool',
      contextTemplate: 'Identify your {keyword} breed with our AI-powered',
      categories: ['breed', 'identification', 'ai']
    });

    mapping.set('/virtual-breeding', {
      name: 'Virtual Breeding',
      linkText: 'virtual breeding simulator',
      contextTemplate: 'Explore {keyword} breeding possibilities with our',
      categories: ['breeding', 'genetics', 'simulation']
    });

    mapping.set('/pet-naming', {
      name: 'Pet Naming',
      linkText: 'pet naming tool',
      contextTemplate: 'Find the perfect name for your {keyword} with our',
      categories: ['naming', 'personality', 'ai']
    });

    mapping.set('/health-center', {
      name: 'Health Center',
      linkText: 'health center',
      contextTemplate: 'Get professional health advice for {keyword} at our',
      categories: ['health', 'medical', 'advice']
    });

    mapping.set('/health-guide', {
      name: 'Health Guide',
      linkText: 'health guide',
      contextTemplate: 'Learn about {keyword} health with our comprehensive',
      categories: ['health', 'guide', 'information']
    });

    mapping.set('/pet-care-guide', {
      name: 'Pet Care Guide',
      linkText: 'pet care guide',
      contextTemplate: 'Master {keyword} care techniques with our detailed',
      categories: ['care', 'guide', 'training']
    });

    mapping.set('/pet-diary', {
      name: 'Pet Diary',
      linkText: 'pet diary',
      contextTemplate: 'Track your {keyword} daily activities with our',
      categories: ['tracking', 'diary', 'monitoring']
    });

    mapping.set('/pet-horoscope', {
      name: 'Pet Horoscope',
      linkText: 'pet horoscope',
      contextTemplate: 'Discover your {keyword} personality with our',
      categories: ['horoscope', 'personality', 'fun']
    });

    mapping.set('/pet-age-calculator', {
      name: 'Pet Age Calculator',
      linkText: 'pet age calculator',
      contextTemplate: 'Calculate your {keyword} age in human years with our',
      categories: ['calculator', 'age', 'conversion']
    });

    mapping.set('/pet-video', {
      name: 'Pet Video Generator',
      linkText: 'pet video generator',
      contextTemplate: 'Create fun videos of your {keyword} with our',
      categories: ['video', 'entertainment', 'ai']
    });

    mapping.set('/ai-tools', {
      name: 'AI Tools',
      linkText: 'AI tools collection',
      contextTemplate: 'Explore all {keyword} related AI tools in our',
      categories: ['ai', 'tools', 'collection']
    });

    return mapping;
  }

  /**
   * Initializes keyword patterns for automatic link matching
   */
  private initializeKeywordPatterns(): Map<RegExp, string[]> {
    const patterns = new Map<RegExp, string[]>();

    // Age-related patterns (more specific, should be checked first)
    patterns.set(/\b(age|aging|senior|years|months)\b/i, [
      '/pet-age-calculator',
      '/health-guide',
      '/pet-care-guide'
    ]);

    // Health-related patterns
    patterns.set(/\b(health|medical|disease|illness|symptom|treatment|vet|veterinary|sick|injury)\b/i, [
      '/health-center',
      '/health-guide',
      '/pet-care-guide'
    ]);

    // Breeding-related patterns
    patterns.set(/\b(breeding|genetics|offspring|mating|reproduction|pregnancy|litter)\b/i, [
      '/virtual-breeding',
      '/breed-identification',
      '/health-guide'
    ]);

    // Care-related patterns
    patterns.set(/\b(care|feeding|training|grooming|exercise|nutrition|diet|behavior)\b/i, [
      '/pet-care-guide',
      '/pet-diary',
      '/health-guide'
    ]);

    // Breed-related patterns (more general)
    patterns.set(/\b(dog|puppy|canine|breed|poodle|labrador|golden|retriever|bulldog|german|shepherd)\b/i, [
      '/breed-identification',
      '/virtual-breeding',
      '/pet-naming'
    ]);

    patterns.set(/\b(cat|kitten|feline|persian|siamese|maine|coon|ragdoll|bengal)\b/i, [
      '/breed-identification',
      '/pet-naming',
      '/pet-care-guide'
    ]);

    // Entertainment patterns
    patterns.set(/\b(fun|entertainment|video|photo|personality|horoscope|zodiac)\b/i, [
      '/pet-horoscope',
      '/pet-video',
      '/pet-naming'
    ]);

    return patterns;
  }

  /**
   * Validates that generated links meet minimum requirements
   */
  validateLinks(links: InternalLink[], minLinks: number = 2): boolean {
    if (links.length < minLinks) {
      return false;
    }

    // Check that all links have required properties
    return links.every(link => 
      link.text && 
      link.url && 
      link.context &&
      link.url.startsWith('/') &&
      link.text.length > 0 &&
      link.context.length > 0
    );
  }

  /**
   * Gets all available feature URLs for testing purposes
   */
  getAvailableFeatures(): string[] {
    return Array.from(this.featureMapping.keys());
  }
}

/**
 * Interface for feature information used in internal linking
 */
interface FeatureInfo {
  name: string;
  linkText: string;
  contextTemplate: string;
  categories: string[];
}