/**
 * SEO Compliance Report Generator
 * Generates detailed SEO compliance reports for all blog articles
 * Requirements: 1.2, 5.1, 6.1, 8.1
 */

import fs from 'fs';
import path from 'path';

export interface ArticleComplianceReport {
  slug: string;
  title: string;
  metaDescription: string;
  titleLength: number;
  titleCompliant: boolean;
  metaDescriptionLength: number;
  metaDescriptionCompliant: boolean;
  hasInternalLinks: boolean;
  hasImages: boolean;
  imagesOptimized: boolean;
  issues: string[];
  recommendations: string[];
}

export interface ComplianceSummaryReport {
  totalArticles: number;
  compliantArticles: number;
  complianceRate: number;
  criticalIssues: { issue: string; count: number }[];
  recommendations: string[];
  generatedAt: string;
}

export class SEOComplianceReportGenerator {
  private readonly blogDir = path.join(process.cwd(), 'src/app/blog');
  private readonly titleLengthMin = 50;
  private readonly titleLengthMax = 60;
  private readonly metaDescriptionLengthMin = 150;
  private readonly metaDescriptionLengthMax = 160;

  /**
   * Generates compliance report for all articles
   */
  async generateComplianceReport(): Promise<{
    articles: ArticleComplianceReport[];
    summary: ComplianceSummaryReport;
  }> {
    const articles: ArticleComplianceReport[] = [];

    try {
      const blogDirs = fs.readdirSync(this.blogDir);

      for (const dir of blogDirs) {
        const articlePath = path.join(this.blogDir, dir);
        const stat = fs.statSync(articlePath);

        if (stat.isDirectory()) {
          const report = await this.analyzeArticle(dir, articlePath);
          if (report) {
            articles.push(report);
          }
        }
      }
    } catch (error) {
      console.error('Error generating compliance report:', error);
    }

    const summary = this.generateSummary(articles);

    return { articles, summary };
  }

  /**
   * Analyzes a single article
   */
  private async analyzeArticle(slug: string, articlePath: string): Promise<ArticleComplianceReport | null> {
    try {
      const pagePath = path.join(articlePath, 'page.tsx');

      if (!fs.existsSync(pagePath)) {
        return null;
      }

      const content = fs.readFileSync(pagePath, 'utf-8');
      const metadata = this.extractMetadata(content);

      if (!metadata.title || !metadata.description) {
        return null;
      }

      const issues: string[] = [];
      const recommendations: string[] = [];

      // Check title length
      const titleLength = metadata.title.length;
      const titleCompliant = titleLength >= this.titleLengthMin && titleLength <= this.titleLengthMax;
      if (!titleCompliant) {
        issues.push(`Title length ${titleLength} (should be ${this.titleLengthMin}-${this.titleLengthMax})`);
        recommendations.push(`Adjust title to ${this.titleLengthMin}-${this.titleLengthMax} characters`);
      }

      // Check meta description length
      const metaDescriptionLength = metadata.description.length;
      const metaDescriptionCompliant = metaDescriptionLength >= this.metaDescriptionLengthMin && 
                                       metaDescriptionLength <= this.metaDescriptionLengthMax;
      if (!metaDescriptionCompliant) {
        issues.push(`Meta description length ${metaDescriptionLength} (should be ${this.metaDescriptionLengthMin}-${this.metaDescriptionLengthMax})`);
        recommendations.push(`Adjust meta description to ${this.metaDescriptionLengthMin}-${this.metaDescriptionLengthMax} characters`);
      }

      // Check for internal links
      const hasInternalLinks = this.hasInternalLinks(content);
      if (!hasInternalLinks) {
        issues.push('No internal links found');
        recommendations.push('Add 3-5 internal links to related articles');
      }

      // Check for images
      const hasImages = this.hasImages(content);
      const imagesOptimized = hasImages && this.areImagesOptimized(content);
      if (hasImages && !imagesOptimized) {
        issues.push('Images may not be properly optimized');
        recommendations.push('Ensure all images have alt text and proper dimensions');
      }

      // Check for keyword in title
      const keyword = this.extractKeywordFromTitle(metadata.title);
      if (!metadata.title.toLowerCase().includes(keyword.toLowerCase())) {
        issues.push('Keyword not found in title');
      }

      // Check for keyword in description
      if (!metadata.description.toLowerCase().includes(keyword.toLowerCase())) {
        issues.push('Keyword not found in meta description');
        recommendations.push('Include target keyword in meta description');
      }

      return {
        slug,
        title: metadata.title,
        metaDescription: metadata.description,
        titleLength,
        titleCompliant,
        metaDescriptionLength,
        metaDescriptionCompliant,
        hasInternalLinks,
        hasImages,
        imagesOptimized,
        issues,
        recommendations
      };
    } catch (error) {
      console.error(`Error analyzing article ${slug}:`, error);
      return null;
    }
  }

  /**
   * Extracts metadata from article
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
   * Checks if article has internal links
   */
  private hasInternalLinks(content: string): boolean {
    // Check for Link components with internal routes
    const linkPattern = /href=["']\/[^"']*["']/;
    return linkPattern.test(content);
  }

  /**
   * Checks if article has images
   */
  private hasImages(content: string): boolean {
    return /Image|<img/i.test(content);
  }

  /**
   * Checks if images are optimized
   */
  private areImagesOptimized(content: string): boolean {
    // Check for alt text
    const hasAltText = /alt=["'][^"']*["']/i.test(content);
    // Check for dimensions
    const hasDimensions = /width=|height=/i.test(content);
    return hasAltText && hasDimensions;
  }

  /**
   * Extracts keyword from title
   */
  private extractKeywordFromTitle(title: string): string {
    const commonWords = new Set([
      'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from',
      'is', 'was', 'are', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
      'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can',
      'guide', 'complete', 'comprehensive', 'ultimate', 'best', 'top'
    ]);

    const words = title.toLowerCase().split(/[\s\-:,]+/).filter(w => w.length > 0);
    const keyword = words.find(w => !commonWords.has(w) && w.length > 3) || words[0];

    return keyword || title.toLowerCase();
  }

  /**
   * Generates summary report
   */
  private generateSummary(articles: ArticleComplianceReport[]): ComplianceSummaryReport {
    const compliantArticles = articles.filter(a => a.issues.length === 0).length;
    const complianceRate = articles.length > 0 ? (compliantArticles / articles.length) * 100 : 0;

    // Count critical issues
    const issueCounts: Record<string, number> = {};
    articles.forEach(article => {
      article.issues.forEach(issue => {
        issueCounts[issue] = (issueCounts[issue] || 0) + 1;
      });
    });

    const criticalIssues = Object.entries(issueCounts)
      .map(([issue, count]) => ({ issue, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Generate recommendations
    const recommendations: string[] = [];
    if (complianceRate < 80) {
      recommendations.push('Review and update article metadata to improve compliance');
    }
    if (criticalIssues.some(i => i.issue.includes('Title length'))) {
      recommendations.push('Optimize all title lengths to 50-60 characters');
    }
    if (criticalIssues.some(i => i.issue.includes('Meta description'))) {
      recommendations.push('Optimize all meta descriptions to 150-160 characters');
    }
    if (criticalIssues.some(i => i.issue.includes('internal links'))) {
      recommendations.push('Add internal links to all articles');
    }
    if (criticalIssues.some(i => i.issue.includes('Images'))) {
      recommendations.push('Optimize all images with alt text and dimensions');
    }

    return {
      totalArticles: articles.length,
      compliantArticles,
      complianceRate: Math.round(complianceRate * 100) / 100,
      criticalIssues,
      recommendations,
      generatedAt: new Date().toISOString()
    };
  }

  /**
   * Exports report to JSON file
   */
  exportReport(report: { articles: ArticleComplianceReport[]; summary: ComplianceSummaryReport }, 
               filename: string = 'seo-compliance-report.json'): void {
    const outputPath = path.join(process.cwd(), filename);
    fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
    console.log(`SEO compliance report exported to ${outputPath}`);
  }

  /**
   * Exports report to CSV file
   */
  exportReportAsCSV(articles: ArticleComplianceReport[], 
                    filename: string = 'seo-compliance-report.csv'): void {
    const headers = ['Slug', 'Title', 'Title Length', 'Title Compliant', 'Meta Description Length', 'Meta Description Compliant', 'Has Internal Links', 'Has Images', 'Images Optimized', 'Issues', 'Recommendations'];
    
    const rows = articles.map(a => [
      a.slug,
      `"${a.title.replace(/"/g, '""')}"`,
      a.titleLength,
      a.titleCompliant ? 'Yes' : 'No',
      a.metaDescriptionLength,
      a.metaDescriptionCompliant ? 'Yes' : 'No',
      a.hasInternalLinks ? 'Yes' : 'No',
      a.hasImages ? 'Yes' : 'No',
      a.imagesOptimized ? 'Yes' : 'No',
      `"${a.issues.join('; ').replace(/"/g, '""')}"`,
      `"${a.recommendations.join('; ').replace(/"/g, '""')}"`
    ]);

    const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
    const outputPath = path.join(process.cwd(), filename);
    fs.writeFileSync(outputPath, csv);
    console.log(`SEO compliance report exported to ${outputPath}`);
  }
}
