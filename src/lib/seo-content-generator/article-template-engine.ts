import { ArticleStructure, FAQItem, InternalLink, SEOMetadata, GenerationConfig, DEFAULT_CONFIG } from './types';

/**
 * ArticleTemplateEngine - Generates standardized article templates
 * 
 * This class creates consistent article structures with proper keyword integration,
 * following SEO best practices and maintaining content quality standards.
 */
export class ArticleTemplateEngine {
  private config: GenerationConfig;

  constructor(config: GenerationConfig = DEFAULT_CONFIG) {
    this.config = config;
  }

  /**
   * Generate a complete article structure for a given keyword
   * @param keyword - The target keyword for the article
   * @param internalLinks - Relevant internal links to include
   * @returns Complete article structure with all sections
   */
  generateArticleStructure(keyword: string, internalLinks: InternalLink[] = []): ArticleStructure {
    const title = this.generateTitle(keyword);
    const summary = this.generateSummary(keyword);
    const introduction = this.generateIntroduction(keyword);
    const coreContent = this.generateCoreContent(keyword);
    const useCases = this.generateUseCases(keyword);
    const faq = this.generateFAQ(keyword);
    const conclusion = this.generateConclusion(keyword);
    
    const metadata: SEOMetadata = {
      title,
      description: summary,
      keywords: [keyword, ...this.generateRelatedKeywords(keyword)],
      structuredData: this.generateStructuredData(keyword, title, summary)
    };

    return {
      title,
      summary,
      sections: {
        introduction,
        coreContent,
        useCases,
        faq,
        conclusion
      },
      metadata,
      internalLinks
    };
  }

  /**
   * Generate a compelling title containing the target keyword
   * Requirements: 3.1
   */
  private generateTitle(keyword: string): string {
    const titleTemplates = [
      `Complete Guide to ${this.capitalizeKeyword(keyword)} for Pet Owners`,
      `Everything You Need to Know About ${this.capitalizeKeyword(keyword)}`,
      `${this.capitalizeKeyword(keyword)}: Expert Tips and Professional Advice`,
      `Understanding ${this.capitalizeKeyword(keyword)} - A Comprehensive Guide`,
      `The Ultimate ${this.capitalizeKeyword(keyword)} Guide for Pet Parents`
    ];

    // Select template based on keyword characteristics
    const templateIndex = keyword.length % titleTemplates.length;
    return titleTemplates[templateIndex];
  }

  /**
   * Generate a 40-60 character summary
   * Requirements: 3.2
   */
  private generateSummary(keyword: string): string {
    const summaryTemplates = [
      `Expert guide on ${keyword} for pet owners`,
      `Professional ${keyword} advice and tips`,
      `Complete ${keyword} information for pets`,
      `Essential ${keyword} guide for pet care`
    ];

    let summary = summaryTemplates[keyword.length % summaryTemplates.length];
    
    // Ensure summary is within character limits
    if (summary.length < this.config.summaryMinLength) {
      summary += ` with practical solutions`;
    }
    if (summary.length > this.config.summaryMaxLength) {
      summary = summary.substring(0, this.config.summaryMaxLength - 3) + '...';
    }

    return summary;
  }

  /**
   * Generate introduction section with keyword integration
   */
  private generateIntroduction(keyword: string): string {
    return `When it comes to ${keyword}, pet owners often face numerous questions and challenges. Understanding ${keyword} is crucial for providing the best care for your beloved companion. This comprehensive guide will explore everything you need to know about ${keyword}, offering expert insights and practical solutions.

Whether you're a new pet owner or have years of experience, mastering ${keyword} can significantly improve your pet's quality of life. From basic concepts to advanced techniques, we'll cover all aspects of ${keyword} to help you make informed decisions for your pet's wellbeing.`;
  }

  /**
   * Generate core content section with detailed information
   */
  private generateCoreContent(keyword: string): string {
    return `${this.capitalizeKeyword(keyword)} encompasses several important aspects that every pet owner should understand. The fundamentals of ${keyword} involve recognizing key indicators, understanding proper techniques, and implementing best practices consistently.

Professional veterinarians emphasize that effective ${keyword} requires patience, consistency, and proper knowledge. When dealing with ${keyword}, it's essential to consider your pet's individual needs, breed characteristics, and health status.

Key factors to consider with ${keyword} include:
- Proper timing and frequency
- Environmental considerations
- Individual pet requirements
- Safety precautions and guidelines
- Long-term maintenance strategies

Research shows that proper ${keyword} management can prevent common issues and promote overall pet health. By following established protocols and staying informed about ${keyword}, you can ensure your pet receives the best possible care.`;
  }

  /**
   * Generate at least 3 practical use cases
   * Requirements: 3.5
   */
  private generateUseCases(keyword: string): string[] {
    const useCaseTemplates = [
      `Daily ${keyword} routine for busy pet owners`,
      `Emergency ${keyword} situations and quick solutions`,
      `Seasonal ${keyword} considerations and adjustments`,
      `${this.capitalizeKeyword(keyword)} for senior pets with special needs`,
      `Multi-pet household ${keyword} management strategies`,
      `Travel and ${keyword}: maintaining consistency away from home`
    ];

    // Return at least the minimum required use cases
    const numUseCases = Math.max(this.config.minUseCases, 3);
    return useCaseTemplates.slice(0, numUseCases);
  }

  /**
   * Generate at least 5 FAQ items
   * Requirements: 3.4
   */
  private generateFAQ(keyword: string): FAQItem[] {
    const faqTemplates = [
      {
        question: `What is the best approach to ${keyword}?`,
        answer: `The best approach to ${keyword} involves understanding your pet's individual needs and following established best practices. Consistency and patience are key factors for success.`
      },
      {
        question: `How often should I address ${keyword}?`,
        answer: `The frequency of ${keyword} depends on various factors including your pet's age, breed, and health status. Most experts recommend regular monitoring and adjustment as needed.`
      },
      {
        question: `What are common mistakes with ${keyword}?`,
        answer: `Common mistakes include inconsistency, ignoring individual pet needs, and not seeking professional advice when needed. Proper education and preparation can prevent most issues.`
      },
      {
        question: `When should I consult a professional about ${keyword}?`,
        answer: `Consult a veterinarian or pet care professional if you notice unusual behaviors, persistent issues, or if you're unsure about proper ${keyword} techniques.`
      },
      {
        question: `Can ${keyword} vary between different pet breeds?`,
        answer: `Yes, ${keyword} can vary significantly between breeds due to genetic factors, size differences, and breed-specific characteristics. Always consider your pet's breed when planning ${keyword} strategies.`
      },
      {
        question: `What tools or supplies do I need for ${keyword}?`,
        answer: `Essential supplies for ${keyword} may include specialized equipment, quality products, and monitoring tools. Invest in reliable, pet-safe options for best results.`
      }
    ];

    // Return at least the minimum required FAQ items
    const numFAQ = Math.max(this.config.minFAQItems, 5);
    return faqTemplates.slice(0, numFAQ);
  }

  /**
   * Generate conclusion section
   */
  private generateConclusion(keyword: string): string {
    return `Mastering ${keyword} is an essential skill for every pet owner. By understanding the principles, implementing best practices, and staying consistent with your approach, you can ensure your pet receives optimal care.

Remember that ${keyword} is not a one-size-fits-all solution. Each pet is unique, and what works for one may need adjustment for another. Stay observant, be patient, and don't hesitate to seek professional guidance when needed.

With proper knowledge and dedication, ${keyword} can become a natural part of your pet care routine, contributing to your pet's health, happiness, and overall quality of life.`;
  }

  /**
   * Generate related keywords for SEO metadata
   */
  private generateRelatedKeywords(keyword: string): string[] {
    const relatedTerms = [
      `${keyword} tips`,
      `${keyword} guide`,
      `pet ${keyword}`,
      `${keyword} advice`,
      `${keyword} care`
    ];

    return relatedTerms;
  }

  /**
   * Generate structured data for search engines
   */
  private generateStructuredData(keyword: string, title: string, description: string): Record<string, any> {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "author": {
        "@type": "Organization",
        "name": "PetShard"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PetShard",
        "logo": {
          "@type": "ImageObject",
          "url": "https://petshard.com/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://petshard.com/blog/${this.generateSlug(keyword)}`
      },
      "keywords": [keyword, `${keyword} guide`, `pet ${keyword}`, `${keyword} tips`]
    };
  }

  /**
   * Generate URL slug from keyword
   */
  private generateSlug(keyword: string): string {
    return keyword
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  /**
   * Capitalize keyword for titles
   */
  private capitalizeKeyword(keyword: string): string {
    return keyword
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
}