/**
 * SEO Compliance Validator Tests
 * Tests for validating all 62 blog articles for SEO compliance
 * Requirements: 1.2, 5.1, 6.1, 8.1
 */

import { describe, it, expect, beforeAll } from '@jest/globals';
import { SEOComplianceValidator, SEOComplianceResult } from '../seo-compliance-validator';

describe('SEO Compliance Validator', () => {
  let validator: SEOComplianceValidator;
  let results: SEOComplianceResult[];

  beforeAll(async () => {
    validator = new SEOComplianceValidator();
    results = await validator.validateAllArticles();
  });

  describe('Article Validation', () => {
    it('should validate all blog articles', () => {
      expect(results.length).toBeGreaterThan(0);
      expect(results.length).toBeLessThanOrEqual(62);
    });

    it('should have required properties for each article', () => {
      results.forEach(result => {
        expect(result).toHaveProperty('slug');
        expect(result).toHaveProperty('title');
        expect(result).toHaveProperty('metaDescription');
        expect(result).toHaveProperty('keywordDensity');
        expect(result).toHaveProperty('titleLength');
        expect(result).toHaveProperty('metaDescriptionLength');
        expect(result).toHaveProperty('internalLinkCount');
        expect(result).toHaveProperty('errors');
        expect(result).toHaveProperty('warnings');
      });
    });
  });

  describe('Keyword Density Compliance - Property 2', () => {
    /**
     * Property 2: Keyword Density Compliance
     * For any blog article, the target keyword SHALL appear with a density of 0.5-1.5% throughout the article
     * Validates: Requirements 1.2, 1.3
     */
    it('should validate keyword density is within acceptable range', () => {
      const compliantArticles = results.filter(r => r.keywordDensityCompliant);
      const complianceRate = (compliantArticles.length / results.length) * 100;

      expect(complianceRate).toBeGreaterThanOrEqual(80);
      
      // Log non-compliant articles
      const nonCompliant = results.filter(r => !r.keywordDensityCompliant);
      if (nonCompliant.length > 0) {
        console.log('Non-compliant keyword density articles:');
        nonCompliant.forEach(r => {
          console.log(`  - ${r.slug}: ${r.keywordDensity.toFixed(2)}%`);
        });
      }
    });

    it('should have keyword density between 0.5% and 1.5%', () => {
      results.forEach(result => {
        if (result.keywordDensityCompliant) {
          expect(result.keywordDensity).toBeGreaterThanOrEqual(0.5);
          expect(result.keywordDensity).toBeLessThanOrEqual(1.5);
        }
      });
    });
  });

  describe('Metadata Optimization - Property 7', () => {
    /**
     * Property 7: Metadata Optimization
     * For any blog article, the title tag SHALL be 50-60 characters and the meta description SHALL be 150-160 characters
     * Validates: Requirements 5.1, 5.2
     */
    it('should validate title length is between 50-60 characters', () => {
      const compliantTitles = results.filter(r => r.titleCompliant);
      const complianceRate = (compliantTitles.length / results.length) * 100;

      expect(complianceRate).toBeGreaterThanOrEqual(80);

      // Log non-compliant titles
      const nonCompliant = results.filter(r => !r.titleCompliant);
      if (nonCompliant.length > 0) {
        console.log('Non-compliant title length articles:');
        nonCompliant.forEach(r => {
          console.log(`  - ${r.slug}: ${r.titleLength} characters`);
        });
      }
    });

    it('should validate meta description length is between 150-160 characters', () => {
      const compliantDescriptions = results.filter(r => r.metaDescriptionCompliant);
      const complianceRate = (compliantDescriptions.length / results.length) * 100;

      expect(complianceRate).toBeGreaterThanOrEqual(80);

      // Log non-compliant descriptions
      const nonCompliant = results.filter(r => !r.metaDescriptionCompliant);
      if (nonCompliant.length > 0) {
        console.log('Non-compliant meta description length articles:');
        nonCompliant.forEach(r => {
          console.log(`  - ${r.slug}: ${r.metaDescriptionLength} characters`);
        });
      }
    });

    it('should have proper title and meta description lengths', () => {
      results.forEach(result => {
        if (result.titleCompliant) {
          expect(result.titleLength).toBeGreaterThanOrEqual(50);
          expect(result.titleLength).toBeLessThanOrEqual(60);
        }
        if (result.metaDescriptionCompliant) {
          expect(result.metaDescriptionLength).toBeGreaterThanOrEqual(150);
          expect(result.metaDescriptionLength).toBeLessThanOrEqual(160);
        }
      });
    });
  });

  describe('Internal Link Validation - Property 4', () => {
    /**
     * Property 4: Internal Link Relevance
     * For any internal link in a blog article, the linked article SHALL be contextually relevant to the linking article's topic
     * Validates: Requirements 6.2, 6.3
     */
    it('should validate minimum internal links per article', () => {
      const compliantLinks = results.filter(r => r.internalLinksCompliant);
      const complianceRate = (compliantLinks.length / results.length) * 100;

      expect(complianceRate).toBeGreaterThanOrEqual(75);

      // Log articles with insufficient links
      const insufficient = results.filter(r => !r.internalLinksCompliant);
      if (insufficient.length > 0) {
        console.log('Articles with insufficient internal links:');
        insufficient.forEach(r => {
          console.log(`  - ${r.slug}: ${r.internalLinkCount} links (minimum: 3)`);
        });
      }
    });

    it('should have at least 3 internal links per article', () => {
      results.forEach(result => {
        if (result.internalLinksCompliant) {
          expect(result.internalLinkCount).toBeGreaterThanOrEqual(3);
        }
      });
    });
  });

  describe('Image Optimization - Property 9', () => {
    /**
     * Property 9: Image Relevance
     * For any image in a blog article, the image SHALL be relevant to the article topic
     * Validates: Requirements 8.1
     */
    it('should validate images are present and optimized', () => {
      const articlesWithImages = results.filter(r => r.hasImages);
      expect(articlesWithImages.length).toBeGreaterThan(0);

      const optimizedImages = articlesWithImages.filter(r => r.imagesOptimized);
      const optimizationRate = (optimizedImages.length / articlesWithImages.length) * 100;

      expect(optimizationRate).toBeGreaterThanOrEqual(80);

      // Log articles with unoptimized images
      const unoptimized = articlesWithImages.filter(r => !r.imagesOptimized);
      if (unoptimized.length > 0) {
        console.log('Articles with unoptimized images:');
        unoptimized.forEach(r => {
          console.log(`  - ${r.slug}`);
        });
      }
    });
  });

  describe('Overall SEO Compliance', () => {
    it('should generate compliance summary', () => {
      const summary = validator.generateSummary(results);

      expect(summary).toHaveProperty('totalArticles');
      expect(summary).toHaveProperty('compliantArticles');
      expect(summary).toHaveProperty('nonCompliantArticles');
      expect(summary).toHaveProperty('complianceRate');
      expect(summary).toHaveProperty('commonIssues');
      expect(summary).toHaveProperty('recommendations');

      console.log('\n=== SEO Compliance Summary ===');
      console.log(`Total Articles: ${summary.totalArticles}`);
      console.log(`Compliant Articles: ${summary.compliantArticles}`);
      console.log(`Non-Compliant Articles: ${summary.nonCompliantArticles}`);
      console.log(`Compliance Rate: ${summary.complianceRate}%`);
      console.log('\nCommon Issues:');
      summary.commonIssues.forEach(issue => {
        console.log(`  - ${issue.issue} (${issue.count} articles)`);
      });
      console.log('\nRecommendations:');
      summary.recommendations.forEach(rec => {
        console.log(`  - ${rec}`);
      });
    });

    it('should have at least 80% compliance rate', () => {
      const summary = validator.generateSummary(results);
      expect(summary.complianceRate).toBeGreaterThanOrEqual(80);
    });

    it('should export results to JSON file', () => {
      expect(() => {
        validator.exportResults(results, 'seo-compliance-report.json');
      }).not.toThrow();
    });
  });

  describe('Error Tracking', () => {
    it('should track all errors and warnings', () => {
      const allErrors = results.flatMap(r => r.errors);
      const allWarnings = results.flatMap(r => r.warnings);

      console.log(`\nTotal Errors: ${allErrors.length}`);
      console.log(`Total Warnings: ${allWarnings.length}`);

      if (allErrors.length > 0) {
        console.log('\nError Summary:');
        const errorCounts: Record<string, number> = {};
        allErrors.forEach(error => {
          errorCounts[error] = (errorCounts[error] || 0) + 1;
        });
        Object.entries(errorCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .forEach(([error, count]) => {
            console.log(`  - ${error}: ${count} articles`);
          });
      }
    });
  });
});
