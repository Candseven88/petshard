import { SEOMetadata, ArticleStructure } from './types';

/**
 * SEOMetadataGenerator - Generates comprehensive SEO metadata and structured data
 * 
 * This class creates optimized meta descriptions, structured data markup,
 * and other SEO elements to improve search engine visibility and rankings.
 */
export class SEOMetadataGenerator {
  private readonly baseUrl: string;
  private readonly siteName: string;
  private readonly organizationName: string;

  constructor(
    baseUrl: string = 'https://petshard.com',
    siteName: string = 'PetShard',
    organizationName: string = 'PetShard'
  ) {
    this.baseUrl = baseUrl;
    this.siteName = siteName;
    this.organizationName = organizationName;
  }

  /**
   * Generate complete SEO metadata for an article
   * Requirements: 4.2
   */
  generateMetadata(keyword: string, articleStructure: ArticleStructure): SEOMetadata {
    const title = this.optimizeTitle(articleStructure.title, keyword);
    const description = this.generateMetaDescription(keyword, articleStructure);
    const keywords = this.generateKeywords(keyword, articleStructure);
    const canonicalUrl = this.generateCanonicalUrl(keyword);
    const structuredData = this.generateStructuredData(keyword, articleStructure, canonicalUrl);

    return {
      title,
      description,
      keywords,
      canonicalUrl,
      structuredData
    };
  }

  /**
   * Generate optimized meta description (150-160 characters)
   * Requirements: 4.2
   */
  private generateMetaDescription(keyword: string, articleStructure: ArticleStructure): string {
    // Start with the article summary as base
    let description = articleStructure.summary;

    // If summary is too short, enhance it
    if (description.length < 120) {
      description = `${description}. Comprehensive guide covering ${keyword} with expert tips, practical advice, and professional insights for pet owners.`;
    }

    // Ensure keyword is included
    if (!description.toLowerCase().includes(keyword.toLowerCase())) {
      // Try to fit keyword naturally
      const keywordPhrase = ` Learn about ${keyword}`;
      if (description.length + keywordPhrase.length <= 160) {
        description += keywordPhrase;
      } else {
        // Replace part of description to include keyword
        description = `${keyword} guide: ${description.substring(keyword.length + 8)}`;
      }
    }

    // Ensure optimal length (150-160 characters)
    if (description.length < 150) {
      // Pad with additional content
      const padding = ' Discover expert tips, practical advice, and comprehensive guidance.';
      description = description + padding;
    }

    if (description.length > 160) {
      // Trim to exactly 160 characters
      description = description.substring(0, 160);
    }

    return description;
  }

  /**
   * Optimize title for SEO (50-70 characters)
   * Note: Extended to 70 chars to accommodate longer keywords while maintaining
   * keyword inclusion, actionable words, and no duplicates
   */
  private optimizeTitle(originalTitle: string, keyword: string): string {
    // Actionable words for titles
    const actionableWords = ['Best', 'Guide', 'Tips', 'How', 'Complete', 'Ultimate', 'Expert', 'Top'];
    
    const keywordLower = keyword.toLowerCase();
    const originalLower = originalTitle.toLowerCase();
    
    // Start with original title if it contains keyword, otherwise use keyword
    let title = originalLower.includes(keywordLower) ? originalTitle : keyword;

    // Remove duplicate words from the base title
    const words = title.split(/\s+/);
    const uniqueWords: string[] = [];
    const seenWords = new Set<string>();
    
    for (const word of words) {
      const lowerWord = word.toLowerCase();
      if (!seenWords.has(lowerWord)) {
        uniqueWords.push(word);
        seenWords.add(lowerWord);
      }
    }
    
    title = uniqueWords.join(' ');

    // Ensure title contains actionable words
    const titleLower = title.toLowerCase();
    const hasActionableWord = actionableWords.some(word => titleLower.includes(word.toLowerCase()));
    
    if (!hasActionableWord) {
      // Add actionable word if missing
      title = 'Best ' + title;
    }

    // Ensure title is between 50-70 characters
    // First, trim if too long
    if (title.length > 70) {
      title = title.substring(0, 70).trim();
    }

    // Then, pad if too short
    if (title.length < 50) {
      const paddingOptions = [
        ' - Complete Guide for Pet Owners',
        ' - Expert Guide and Tips',
        ' - Ultimate Resource Guide',
        ' - Professional Care Guide',
        ' - Comprehensive Pet Guide',
        ' - Complete Guide',
        ' - Expert Guide',
        ' - Ultimate Guide',
        ' - Professional Guide',
        ' - Comprehensive Guide',
        ' - Complete Tips',
        ' - Expert Tips',
        ' - Guide',
        ' - Tips'
      ];
      
      for (const padding of paddingOptions) {
        const candidate = title + padding;
        if (candidate.length >= 50 && candidate.length <= 70) {
          title = candidate;
          break;
        }
      }
      
      // If still too short after trying all options, use the longest that fits
      if (title.length < 50) {
        for (let i = paddingOptions.length - 1; i >= 0; i--) {
          const candidate = title + paddingOptions[i];
          if (candidate.length <= 70) {
            title = candidate;
            break;
          }
        }
      }
    }

    // Final trim to ensure 50-70 characters
    if (title.length > 70) {
      title = title.substring(0, 70).trim();
    }

    // Ensure keyword is still in title after all transformations
    if (!title.toLowerCase().includes(keywordLower)) {
      // Rebuild with keyword
      title = 'Best ' + keyword;
      if (title.length > 70) {
        title = title.substring(0, 70).trim();
      }
      if (title.length < 50) {
        title = title + ' - Complete Guide';
      }
    }

    // Ensure title doesn't end with ellipsis
    if (title.endsWith('...')) {
      title = title.substring(0, title.length - 3).trim();
    }

    // Ensure title starts with capital letter
    if (title.length > 0) {
      title = title.charAt(0).toUpperCase() + title.slice(1);
    }

    return title;
  }

  /**
   * Generate comprehensive keyword list for SEO
   */
  private generateKeywords(keyword: string, articleStructure: ArticleStructure): string[] {
    const keywords = new Set<string>();
    
    // Primary keyword
    keywords.add(keyword);
    
    // Keyword variations
    keywords.add(`${keyword} guide`);
    keywords.add(`${keyword} tips`);
    keywords.add(`pet ${keyword}`);
    keywords.add(`${keyword} advice`);
    keywords.add(`${keyword} care`);
    
    // Extract keywords from FAQ questions
    articleStructure.sections.faq.forEach(faq => {
      const questionWords = faq.question.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(' ')
        .filter(word => word.length > 3 && !this.isStopWord(word));
      
      questionWords.forEach(word => keywords.add(word));
    });

    // Add pet-related terms
    const petTerms = ['pet care', 'pet health', 'pet owner', 'pet guide', 'animal care'];
    petTerms.forEach(term => keywords.add(term));

    return Array.from(keywords).slice(0, 15); // Limit to 15 keywords
  }

  /**
   * Generate canonical URL for the article
   */
  private generateCanonicalUrl(keyword: string): string {
    const slug = this.generateSlug(keyword);
    return `${this.baseUrl}/blog/${slug}`;
  }

  /**
   * Generate comprehensive structured data markup
   * Requirements: 4.4
   */
  generateStructuredData(keyword: string, articleStructure: ArticleStructure, canonicalUrl: string): Record<string, any> {
    const publishDate = new Date().toISOString();
    const modifiedDate = publishDate;

    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": articleStructure.title,
      "description": articleStructure.summary,
      "image": {
        "@type": "ImageObject",
        "url": `${this.baseUrl}/images/blog/${this.generateSlug(keyword)}-hero.jpg`,
        "width": 1200,
        "height": 630
      },
      "author": {
        "@type": "Organization",
        "name": this.organizationName,
        "url": this.baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${this.baseUrl}/logo.png`,
          "width": 200,
          "height": 60
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": this.organizationName,
        "url": this.baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${this.baseUrl}/logo.png`,
          "width": 200,
          "height": 60
        }
      },
      "datePublished": publishDate,
      "dateModified": modifiedDate,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      "keywords": articleStructure.metadata.keywords.join(', '),
      "articleSection": "Pet Care",
      "wordCount": this.estimateWordCount(articleStructure),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "hasPart": this.generateFAQStructuredData(articleStructure.sections.faq),
      "about": {
        "@type": "Thing",
        "name": keyword,
        "description": `Information and guidance about ${keyword} for pet owners`
      }
    };
  }

  /**
   * Generate FAQ structured data
   */
  private generateFAQStructuredData(faqItems: any[]): Record<string, any> {
    return {
      "@type": "FAQPage",
      "mainEntity": faqItems.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  /**
   * Generate breadcrumb structured data
   */
  generateBreadcrumbStructuredData(keyword: string): Record<string, any> {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": this.baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": `${this.baseUrl}/blog`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": this.capitalizeKeyword(keyword),
          "item": this.generateCanonicalUrl(keyword)
        }
      ]
    };
  }

  /**
   * Generate Open Graph metadata
   */
  generateOpenGraphMetadata(keyword: string, articleStructure: ArticleStructure): Record<string, string> {
    const canonicalUrl = this.generateCanonicalUrl(keyword);
    const imageUrl = `${this.baseUrl}/images/blog/${this.generateSlug(keyword)}-og.jpg`;

    return {
      'og:type': 'article',
      'og:title': articleStructure.title,
      'og:description': articleStructure.summary,
      'og:url': canonicalUrl,
      'og:site_name': this.siteName,
      'og:image': imageUrl,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:alt': `${articleStructure.title} - ${this.siteName}`,
      'article:author': this.organizationName,
      'article:section': 'Pet Care',
      'article:tag': articleStructure.metadata.keywords.join(',')
    };
  }

  /**
   * Generate Twitter Card metadata
   */
  generateTwitterCardMetadata(keyword: string, articleStructure: ArticleStructure): Record<string, string> {
    const imageUrl = `${this.baseUrl}/images/blog/${this.generateSlug(keyword)}-twitter.jpg`;

    return {
      'twitter:card': 'summary_large_image',
      'twitter:title': articleStructure.title,
      'twitter:description': articleStructure.summary,
      'twitter:image': imageUrl,
      'twitter:image:alt': `${articleStructure.title} - ${this.siteName}`,
      'twitter:site': '@PetShard',
      'twitter:creator': '@PetShard'
    };
  }

  /**
   * Estimate word count from article structure
   */
  private estimateWordCount(articleStructure: ArticleStructure): number {
    let wordCount = 0;
    
    wordCount += this.countWords(articleStructure.title);
    wordCount += this.countWords(articleStructure.summary);
    wordCount += this.countWords(articleStructure.sections.introduction);
    wordCount += this.countWords(articleStructure.sections.coreContent);
    wordCount += this.countWords(articleStructure.sections.conclusion);
    
    // Count use cases
    articleStructure.sections.useCases.forEach(useCase => {
      wordCount += this.countWords(useCase);
    });
    
    // Count FAQ items
    articleStructure.sections.faq.forEach(faq => {
      wordCount += this.countWords(faq.question);
      wordCount += this.countWords(faq.answer);
    });

    return wordCount;
  }

  /**
   * Count words in a text string
   */
  private countWords(text: string): number {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  }

  /**
   * Check if a word is a stop word
   */
  private isStopWord(word: string): boolean {
    const stopWords = new Set([
      'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
      'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
      'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those'
    ]);
    return stopWords.has(word.toLowerCase());
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