/**
 * SEO Compliance Validator
 * Validates all blog articles for SEO compliance including:
 * - Keyword density compliance
 * - Metadata optimization
 * - Internal link validation
 * - Image optimization
 * Requirements: 1.2, 5.1, 6.1, 8.1
 */

import fs from 'fs';
import path from 'path';

export interface SEOComplianceResult {
  slug: string;
  title: string;
  metaDescription: string;
  keywordDensity: number;
  keywordDensityCompliant: boolean;
  titleLength: number;
  titleCompliant: boolean;
  metaDescriptionLength: number;
  metaDescriptionCompliant: boolean;
  internalLinkCount: number;
  internalLinksCompliant: boolean;
  hasImages: boolean;
  imagesOptimized: boolean;
  errors: string[];
  warnings: string[];
}

export interface SEOComplianceSummary {
  totalArticles: number;
  compliantArticles: number;
  nonCompliantArticles: number;
  complianceRate: number;
  commonIssues: { issue: string; count: number }[];
  recommendations: string[];
}

export class SEOComplianceValidator {
  private readonly blogDir = path.join(process.cwd(), 'src/app/blog');
  private readonly keywordDensityMin = 0.5;
  private readonly keywordDensityMax = 1.5;
  private readonly titleLengthMin = 50;
  private readonly titleLengthMax = 60;
  private readonly metaDescriptionLengthMin = 150;
  private readonly metaDescriptionLengthMax = 160;
  private readonly minInternalLinks = 3;

  /**
   * Validates all blog articles for SEO compliance
   */
  async validateAllArticles(): Promise<SEOComplianceResult[]> {
    const results: SEOComplianceResult[] = [];

    try {
      const blogDirs = fs.readdirSync(this.blogDir);

      for (const dir of blogDirs) {
        const articlePath = path.join(this.blogDir, dir);
        const stat = fs.statSync(articlePath);

        if (stat.isDirectory()) {
          const result = await this.validateArticle(dir, articlePath);
          if (result) {
            results.push(result);
          }
        }
      }
    } catch (error) {
      console.error('Error validating articles:', error);
    }

    return results;
  }

  /**
   * Validates a single article
   */
  private async validateArticle(slug: string, articlePath: string): Promise<SEOComplianceResult | null> {
    try {
      const pagePath = path.join(articlePath, 'page.tsx');

      if (!fs.existsSync(pagePath)) {
        return null;
      }

      const content = fs.readFileSync(pagePath, 'utf-8');
      const metadata = this.extractMetadata(content);
      const bodyContent = this.extractBodyContent(content);

      if (!metadata.title || !metadata.description) {
        return null;
      }

      const errors: string[] = [];
      const warnings: string[] = [];

      // Extract keyword from title
      const keyword = this.extractKeywordFromTitle(metadata.title);

      // Validate keyword density
      const keywordDensity = this.calculateKeywordDensity(bodyContent, keyword);
      const keywordDensityCompliant = this.isKeywordDensityCompliant(keywordDensity);
      if (!keywordDensityCompliant) {
        errors.push(`Keyword density ${keywordDensity.toFixed(2)}% is outside range ${this.keywordDensityMin}-${this.keywordDensityMax}%`);
      }

      // Validate title
      const titleLength = metadata.title.length;
      const titleCompliant = this.isTitleCompliant(titleLength);
      if (!titleCompliant) {
        errors.push(`Title length ${titleLength} is outside range ${this.titleLengthMin}-${this.titleLengthMax}`);
      }

      // Validate meta description
      const metaDescriptionLength = metadata.description.length;
      const metaDescriptionCompliant = this.isMetaDescriptionCompliant(metaDescriptionLength);
      if (!metaDescriptionCompliant) {
        errors.push(`Meta description length ${metaDescriptionLength} is outside range ${this.metaDescriptionLengthMin}-${this.metaDescriptionLengthMax}`);
      }

      // Validate internal links
      const internalLinkCount = this.countInternalLinks(bodyContent);
      const internalLinksCompliant = internalLinkCount >= this.minInternalLinks;
      if (!internalLinksCompliant) {
        warnings.push(`Only ${internalLinkCount} internal links found, minimum required: ${this.minInternalLinks}`);
      }

      // Check for images
      const hasImages = this.hasImages(content);
      const imagesOptimized = this.areImagesOptimized(content);
      if (hasImages && !imagesOptimized) {
        warnings.push('Images may not be properly optimized');
      }

      // Check for keyword in first paragraph
      const firstParagraph = this.extractFirstParagraph(bodyContent);
      if (!firstParagraph.toLowerCase().includes(keyword.toLowerCase())) {
        warnings.push('Target keyword not found in first paragraph');
      }

      // Check for keyword in conclusion
      const conclusion = this.extractConclusion(bodyContent);
      if (!conclusion.toLowerCase().includes(keyword.toLowerCase())) {
        warnings.push('Target keyword not found in conclusion');
      }

      const isCompliant = errors.length === 0;

      return {
        slug,
        title: metadata.title,
        metaDescription: metadata.description,
        keywordDensity,
        keywordDensityCompliant,
        titleLength,
        titleCompliant,
        metaDescriptionLength,
        metaDescriptionCompliant,
        internalLinkCount,
        internalLinksCompliant,
        hasImages,
        imagesOptimized,
        errors,
        warnings
      };
    } catch (error) {
      console.error(`Error validating article ${slug}:`, error);
      return null;
    }
  }

  /**
   * Extracts metadata from article content
   */
  private extractMetadata(content: string): { title: string; description: string } {
    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
    const descriptionMatch = content.match(/description:\s*["']([^"']+)["']/);

    return {
      title: titleMatch ? titleMatch[1] : '',
      description: descriptionMatch ? descriptionMatch[1] : ''
    };
  }

  /**
   * Extracts body content from article
   */
  private extractBodyContent(content: string): string {
    // Remove import statements
    let bodyContent = content.replace(/import\s+.*?;/g, '');
    
    // Remove export const metadata block
    bodyContent = bodyContent.replace(/export\s+const\s+metadata:?\s*Metadata\s*=\s*\{[\s\S]*?\n\};/g, '');
    
    // Remove JSX/HTML tags but keep text content
    bodyContent = bodyContent.replace(/<[^>]*>/g, ' ');
    
    // Remove string literals that are just JSX attributes
    bodyContent = bodyContent.replace(/\w+:\s*["'][^"']*["']/g, '');
    
    // Remove function declarations and other code
    bodyContent = bodyContent.replace(/function\s+\w+\s*\([^)]*\)\s*\{[\s\S]*?\n\}/g, '');
    bodyContent = bodyContent.replace(/const\s+\w+\s*=\s*\{[\s\S]*?\n\};/g, '');
    
    // Clean up multiple spaces
    bodyContent = bodyContent.replace(/\s+/g, ' ').trim();
    
    return bodyContent;
  }

  /**
   * Extracts keyword from title
   */
  private extractKeywordFromTitle(title: string): string {
    // Remove common words and extract main keyword
    const commonWords = new Set([
      'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'as', 
      'is', 'was', 'are', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 
      'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 
      'complete', 'guide', 'comprehensive', 'ultimate', 'best', 'top', 'how', 'what', 'why', 'when', 'where', 'which', 'who',
      'your', 'you', 'our', 'we', 'they', 'them', 'their', 'this', 'that', 'these', 'those',
      'all', 'each', 'every', 'both', 'either', 'neither', 'some', 'any', 'no', 'not',
      'more', 'most', 'less', 'least', 'very', 'too', 'so', 'such', 'just', 'only', 'also', 'even'
    ]);
    
    const words = title.toLowerCase().split(/[\s\-:,]+/).filter(w => w.length > 0);
    const contentWords = words.filter(word => !commonWords.has(word) && word.length > 2);
    
    // Take first 2-3 content words as keyword
    const keyword = contentWords.slice(0, 3).join(' ');

    return keyword || title.toLowerCase().split(/[\s\-:,]+/)[0];
  }

  /**
   * Calculates keyword density
   */
  private calculateKeywordDensity(content: string, keyword: string): number {
    if (!content || !keyword) return 0;
    
    const words = content.toLowerCase().split(/\s+/).filter(w => w.length > 0);
    const keywordLower = keyword.toLowerCase().trim();
    const keywordWords = keywordLower.split(/\s+/);
    
    if (words.length === 0 || keywordWords.length === 0) return 0;
    
    let count = 0;
    
    // For multi-word keywords, look for the phrase
    if (keywordWords.length > 1) {
      const phrase = keywordWords.join(' ');
      const contentStr = words.join(' ');
      const matches = contentStr.match(new RegExp(`\\b${phrase}\\b`, 'gi')) || [];
      count = matches.length;
    } else {
      // For single-word keywords, count occurrences
      const keywordRegex = new RegExp(`\\b${keywordLower}\\b`, 'gi');
      const contentStr = words.join(' ');
      const matches = contentStr.match(keywordRegex) || [];
      count = matches.length;
    }

    return words.length > 0 ? (count / words.length) * 100 : 0;
  }

  /**
   * Checks if keyword density is compliant
   */
  private isKeywordDensityCompliant(density: number): boolean {
    return density >= this.keywordDensityMin && density <= this.keywordDensityMax;
  }

  /**
   * Checks if title is compliant
   */
  private isTitleCompliant(length: number): boolean {
    return length >= this.titleLengthMin && length <= this.titleLengthMax;
  }

  /**
   * Checks if meta description is compliant
   */
  private isMetaDescriptionCompliant(length: number): boolean {
    return length >= this.metaDescriptionLengthMin && length <= this.metaDescriptionLengthMax;
  }

  /**
   * Counts internal links in content
   */
  private countInternalLinks(content: string): number {
    // Look for Link components with href to internal routes
    const linkMatches = content.match(/href=["']\/[^"']*["']/g) || [];
    const linkComponentMatches = content.match(/<Link[^>]*href=["']\/[^"']*["'][^>]*>/g) || [];
    
    // Also count markdown-style links to internal routes
    const markdownMatches = content.match(/\[([^\]]+)\]\(\/[^)]*\)/g) || [];
    
    // Combine and deduplicate
    const totalLinks = new Set([
      ...linkMatches,
      ...linkComponentMatches,
      ...markdownMatches
    ]);
    
    return totalLinks.size;
  }

  /**
   * Checks if article has images
   */
  private hasImages(content: string): boolean {
    return /Image|img|image/i.test(content);
  }

  /**
   * Checks if images are optimized
   */
  private areImagesOptimized(content: string): boolean {
    // Check for alt text in Image components
    const altMatches = content.match(/alt=["']([^"']+)["']/gi) || [];
    const hasAltText = altMatches.length > 0;
    
    // Check for width/height attributes
    const widthMatches = content.match(/width=\{?\d+\}?/gi) || [];
    const heightMatches = content.match(/height=\{?\d+\}?/gi) || [];
    const hasDimensions = widthMatches.length > 0 || heightMatches.length > 0;

    // Check for Image component usage (Next.js best practice)
    const hasImageComponent = /import\s+Image\s+from\s+["']next\/image["']/i.test(content) ||
                             /<Image[^>]*>/i.test(content);

    return hasAltText && (hasDimensions || hasImageComponent);
  }

  /**
   * Extracts first paragraph
   */
  private extractFirstParagraph(content: string): string {
    const paragraphs = content.split(/\n\n+/);
    return paragraphs[0] || '';
  }

  /**
   * Extracts conclusion
   */
  private extractConclusion(content: string): string {
    const paragraphs = content.split(/\n\n+/);
    return paragraphs[paragraphs.length - 1] || '';
  }

  /**
   * Generates compliance summary
   */
  generateSummary(results: SEOComplianceResult[]): SEOComplianceSummary {
    const compliantArticles = results.filter(r => r.errors.length === 0).length;
    const nonCompliantArticles = results.length - compliantArticles;
    const complianceRate = results.length > 0 ? (compliantArticles / results.length) * 100 : 0;

    // Count common issues
    const issueCounts: Record<string, number> = {};
    results.forEach(result => {
      result.errors.forEach(error => {
        issueCounts[error] = (issueCounts[error] || 0) + 1;
      });
      result.warnings.forEach(warning => {
        issueCounts[warning] = (issueCounts[warning] || 0) + 1;
      });
    });

    const commonIssues = Object.entries(issueCounts)
      .map(([issue, count]) => ({ issue, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Generate recommendations
    const recommendations: string[] = [];
    if (complianceRate < 80) {
      recommendations.push('Review and update article metadata to improve compliance rate');
    }
    if (commonIssues.some(i => i.issue.includes('Keyword density'))) {
      recommendations.push('Adjust keyword density in articles to meet SEO standards');
    }
    if (commonIssues.some(i => i.issue.includes('Title length'))) {
      recommendations.push('Optimize title lengths to be between 50-60 characters');
    }
    if (commonIssues.some(i => i.issue.includes('Meta description'))) {
      recommendations.push('Optimize meta descriptions to be between 150-160 characters');
    }
    if (commonIssues.some(i => i.issue.includes('internal links'))) {
      recommendations.push('Add more internal links to articles (minimum 3 required)');
    }

    return {
      totalArticles: results.length,
      compliantArticles,
      nonCompliantArticles,
      complianceRate: Math.round(complianceRate * 100) / 100,
      commonIssues,
      recommendations
    };
  }

  /**
   * Exports results to JSON file
   */
  exportResults(results: SEOComplianceResult[], filename: string = 'seo-compliance-report.json'): void {
    const summary = this.generateSummary(results);
    const report = {
      timestamp: new Date().toISOString(),
      summary,
      details: results
    };

    const outputPath = path.join(process.cwd(), filename);
    fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
    console.log(`SEO compliance report exported to ${outputPath}`);
  }
}
