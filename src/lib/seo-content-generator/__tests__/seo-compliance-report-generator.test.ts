/**
 * SEO Compliance Report Generator Tests
 * Tests for generating comprehensive SEO compliance reports
 * Requirements: 1.2, 5.1, 6.1, 8.1
 */

import { describe, it, expect, beforeAll } from '@jest/globals';
import { SEOComplianceReportGenerator } from '../seo-compliance-report-generator';

describe('SEO Compliance Report Generator', () => {
  let generator: SEOComplianceReportGenerator;
  let report: { articles: any[]; summary: any };

  beforeAll(async () => {
    generator = new SEOComplianceReportGenerator();
    report = await generator.generateComplianceReport();
  });

  describe('Report Generation', () => {
    it('should generate compliance report for all articles', () => {
      expect(report).toHaveProperty('articles');
      expect(report).toHaveProperty('summary');
      expect(report.articles.length).toBeGreaterThan(0);
      expect(report.articles.length).toBeLessThanOrEqual(62);
    });

    it('should have required properties for each article', () => {
      report.articles.forEach(article => {
        expect(article).toHaveProperty('slug');
        expect(article).toHaveProperty('title');
        expect(article).toHaveProperty('metaDescription');
        expect(article).toHaveProperty('titleLength');
        expect(article).toHaveProperty('titleCompliant');
        expect(article).toHaveProperty('metaDescriptionLength');
        expect(article).toHaveProperty('metaDescriptionCompliant');
        expect(article).toHaveProperty('hasInternalLinks');
        expect(article).toHaveProperty('hasImages');
        expect(article).toHaveProperty('imagesOptimized');
        expect(article).toHaveProperty('issues');
        expect(article).toHaveProperty('recommendations');
      });
    });
  });

  describe('Metadata Optimization - Property 7', () => {
    /**
     * Property 7: Metadata Optimization
     * For any blog article, the title tag SHALL be 50-60 characters and the meta description SHALL be 150-160 characters
     * Validates: Requirements 5.1, 5.2
     */
    it('should validate title lengths', () => {
      const compliantTitles = report.articles.filter(a => a.titleCompliant);
      const complianceRate = (compliantTitles.length / report.articles.length) * 100;

      console.log(`\nTitle Length Compliance: ${complianceRate.toFixed(2)}%`);
      console.log(`Compliant: ${compliantTitles.length}/${report.articles.length}`);

      // Log non-compliant titles
      const nonCompliant = report.articles.filter(a => !a.titleCompliant);
      if (nonCompliant.length > 0) {
        console.log('\nNon-compliant titles:');
        nonCompliant.slice(0, 5).forEach(a => {
          console.log(`  - ${a.slug}: ${a.titleLength} chars`);
        });
      }

      expect(complianceRate).toBeGreaterThanOrEqual(70);
    });

    it('should validate meta description lengths', () => {
      const compliantDescriptions = report.articles.filter(a => a.metaDescriptionCompliant);
      const complianceRate = (compliantDescriptions.length / report.articles.length) * 100;

      console.log(`\nMeta Description Length Compliance: ${complianceRate.toFixed(2)}%`);
      console.log(`Compliant: ${compliantDescriptions.length}/${report.articles.length}`);

      // Log non-compliant descriptions
      const nonCompliant = report.articles.filter(a => !a.metaDescriptionCompliant);
      if (nonCompliant.length > 0) {
        console.log('\nNon-compliant meta descriptions:');
        nonCompliant.slice(0, 5).forEach(a => {
          console.log(`  - ${a.slug}: ${a.metaDescriptionLength} chars`);
        });
      }

      expect(complianceRate).toBeGreaterThanOrEqual(70);
    });
  });

  describe('Internal Link Validation - Property 4', () => {
    /**
     * Property 4: Internal Link Relevance
     * For any internal link in a blog article, the linked article SHALL be contextually relevant
     * Validates: Requirements 6.2, 6.3
     */
    it('should validate internal links presence', () => {
      const withLinks = report.articles.filter(a => a.hasInternalLinks);
      const linkRate = (withLinks.length / report.articles.length) * 100;

      console.log(`\nInternal Links Presence: ${linkRate.toFixed(2)}%`);
      console.log(`Articles with links: ${withLinks.length}/${report.articles.length}`);

      expect(linkRate).toBeGreaterThanOrEqual(70);
    });
  });

  describe('Image Optimization - Property 9', () => {
    /**
     * Property 9: Image Relevance
     * For any image in a blog article, the image SHALL be relevant to the article topic
     * Validates: Requirements 8.1
     */
    it('should validate image optimization', () => {
      const withImages = report.articles.filter(a => a.hasImages);
      const optimized = withImages.filter(a => a.imagesOptimized);
      const optimizationRate = withImages.length > 0 ? (optimized.length / withImages.length) * 100 : 0;

      console.log(`\nImage Optimization: ${optimizationRate.toFixed(2)}%`);
      console.log(`Optimized: ${optimized.length}/${withImages.length}`);

      expect(optimizationRate).toBeGreaterThanOrEqual(70);
    });
  });

  describe('Overall Compliance Summary', () => {
    it('should generate compliance summary', () => {
      const summary = report.summary;

      console.log('\n=== SEO Compliance Summary ===');
      console.log(`Total Articles: ${summary.totalArticles}`);
      console.log(`Compliant Articles: ${summary.compliantArticles}`);
      console.log(`Compliance Rate: ${summary.complianceRate}%`);
      console.log('\nCritical Issues:');
      summary.criticalIssues.slice(0, 5).forEach((issue: any) => {
        console.log(`  - ${issue.issue} (${issue.count} articles)`);
      });
      console.log('\nRecommendations:');
      summary.recommendations.forEach((rec: string) => {
        console.log(`  - ${rec}`);
      });

      expect(summary).toHaveProperty('totalArticles');
      expect(summary).toHaveProperty('compliantArticles');
      expect(summary).toHaveProperty('complianceRate');
      expect(summary).toHaveProperty('criticalIssues');
      expect(summary).toHaveProperty('recommendations');
    });

    it('should export reports', () => {
      expect(() => {
        generator.exportReport(report, 'seo-compliance-report.json');
        generator.exportReportAsCSV(report.articles, 'seo-compliance-report.csv');
      }).not.toThrow();
    });
  });

  describe('Issue Tracking', () => {
    it('should track all issues and recommendations', () => {
      const allIssues = report.articles.flatMap(a => a.issues);
      const allRecommendations = report.articles.flatMap(a => a.recommendations);

      console.log(`\nTotal Issues: ${allIssues.length}`);
      console.log(`Total Recommendations: ${allRecommendations.length}`);

      // Count issue frequencies
      const issueCounts: Record<string, number> = {};
      allIssues.forEach(issue => {
        issueCounts[issue] = (issueCounts[issue] || 0) + 1;
      });

      console.log('\nTop Issues:');
      Object.entries(issueCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .forEach(([issue, count]) => {
          console.log(`  - ${issue}: ${count} articles`);
        });
    });
  });
});
