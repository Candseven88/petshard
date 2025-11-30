# SEO Compliance Validation - Usage Guide

## Overview

This guide explains how to use the SEO compliance validation tools to check and improve blog article quality.

## Available Tools

### 1. SEOComplianceValidator
**Location**: `src/lib/seo-content-generator/seo-compliance-validator.ts`

**Purpose**: Validates individual articles and generates detailed compliance reports.

**Key Methods**:
- `validateAllArticles()` - Validates all blog articles
- `validateArticle(slug, path)` - Validates a single article
- `generateSummary(results)` - Creates summary statistics
- `exportResults(results, filename)` - Exports to JSON

**Usage Example**:
```typescript
import { SEOComplianceValidator } from '@/lib/seo-content-generator/seo-compliance-validator';

const validator = new SEOComplianceValidator();
const results = await validator.validateAllArticles();
const summary = validator.generateSummary(results);
validator.exportResults(results, 'compliance-report.json');
```

### 2. SEOComplianceReportGenerator
**Location**: `src/lib/seo-content-generator/seo-compliance-report-generator.ts`

**Purpose**: Generates comprehensive compliance reports with recommendations.

**Key Methods**:
- `generateComplianceReport()` - Generates full report
- `exportReport(report, filename)` - Exports to JSON
- `exportReportAsCSV(articles, filename)` - Exports to CSV

**Usage Example**:
```typescript
import { SEOComplianceReportGenerator } from '@/lib/seo-content-generator/seo-compliance-report-generator';

const generator = new SEOComplianceReportGenerator();
const report = await generator.generateComplianceReport();
generator.exportReport(report, 'seo-report.json');
generator.exportReportAsCSV(report.articles, 'seo-report.csv');
```

## Running Tests

### Run All SEO Compliance Tests
```bash
npm test -- src/lib/seo-content-generator/__tests__/seo-compliance-validator.test.ts --no-coverage
npm test -- src/lib/seo-content-generator/__tests__/seo-compliance-report-generator.test.ts --no-coverage
```

### Run Specific Test Suite
```bash
npm test -- src/lib/seo-content-generator/__tests__/seo-compliance-validator.test.ts --no-coverage -t "Keyword Density"
```

## Compliance Criteria

### Property 2: Keyword Density Compliance
**Requirement**: 0.5-1.5% keyword density

**Check**: Keyword appears naturally throughout article
**Fix**: Adjust keyword frequency in content

### Property 4: Internal Link Validation
**Requirement**: Minimum 3 internal links

**Check**: Links to related articles present
**Fix**: Add contextually relevant internal links

### Property 7: Metadata Optimization
**Requirement**: 
- Title: 50-60 characters
- Meta Description: 150-160 characters

**Check**: Metadata lengths within range
**Fix**: Adjust title and description lengths

### Property 9: Image Optimization
**Requirement**: Images have alt text and dimensions

**Check**: All images properly optimized
**Fix**: Add alt text and width/height attributes

## Interpreting Reports

### JSON Report Structure
```json
{
  "articles": [
    {
      "slug": "article-slug",
      "title": "Article Title",
      "metaDescription": "Meta description...",
      "titleLength": 55,
      "titleCompliant": true,
      "metaDescriptionLength": 155,
      "metaDescriptionCompliant": true,
      "hasInternalLinks": true,
      "hasImages": true,
      "imagesOptimized": true,
      "issues": [],
      "recommendations": []
    }
  ],
  "summary": {
    "totalArticles": 60,
    "compliantArticles": 50,
    "complianceRate": 83.33,
    "criticalIssues": [...],
    "recommendations": [...]
  }
}
```

### CSV Report Structure
```
Slug,Title,Title Length,Title Compliant,Meta Description Length,Meta Description Compliant,Has Internal Links,Has Images,Images Optimized,Issues,Recommendations
article-slug,"Article Title",55,Yes,155,Yes,Yes,Yes,Yes,"","Ensure all images have alt text"
```

## Common Issues and Fixes

### Issue: Title Too Short
**Problem**: Title is less than 50 characters
**Solution**: Add descriptive words or include keyword variations
**Example**: 
- ❌ "Dog Breeds" (11 chars)
- ✅ "Best Dog Breeds for Families: Complete Guide" (50 chars)

### Issue: Meta Description Too Long
**Problem**: Meta description exceeds 160 characters
**Solution**: Remove unnecessary words, be more concise
**Example**:
- ❌ "This comprehensive guide explores the best dog breeds for families, helping you understand what makes a breed family-friendly and how to choose the right one for your household." (180 chars)
- ✅ "Discover the best dog breeds for families. Learn about temperament, exercise needs, and care requirements." (155 chars)

### Issue: Images Not Optimized
**Problem**: Images missing alt text or dimensions
**Solution**: Add alt text and use Next.js Image component
**Example**:
```typescript
// ❌ Bad
<img src="dog.jpg" />

// ✅ Good
<Image 
  src="dog.jpg" 
  alt="Golden Retriever playing with children"
  width={1200}
  height={630}
/>
```

### Issue: No Internal Links
**Problem**: Article has no links to related content
**Solution**: Add 3-5 contextually relevant internal links
**Example**:
```typescript
<Link href="/blog/dog-breed-characteristics">
  Learn more about dog breed characteristics
</Link>
```

## Compliance Improvement Workflow

### Step 1: Generate Report
```bash
npm test -- src/lib/seo-content-generator/__tests__/seo-compliance-report-generator.test.ts --no-coverage
```

### Step 2: Review Issues
- Open `seo-compliance-report.json` or `seo-compliance-report.csv`
- Identify articles with issues
- Prioritize by issue type

### Step 3: Fix Issues
- Update article metadata (title, description)
- Add/optimize images
- Add internal links
- Verify keyword placement

### Step 4: Re-validate
```bash
npm test -- src/lib/seo-content-generator/__tests__/seo-compliance-report-generator.test.ts --no-coverage
```

### Step 5: Verify Improvements
- Check compliance rate increased
- Verify specific issues resolved
- Document changes

## Performance Considerations

### Validation Speed
- Full validation of 60 articles: ~300ms
- Per-article validation: ~5ms
- Report generation: ~50ms

### Memory Usage
- Validator instance: ~1MB
- Full report in memory: ~2-3MB
- Suitable for CI/CD pipelines

## Integration with CI/CD

### GitHub Actions Example
```yaml
- name: Validate SEO Compliance
  run: npm test -- src/lib/seo-content-generator/__tests__/seo-compliance-report-generator.test.ts --no-coverage

- name: Upload Report
  uses: actions/upload-artifact@v2
  with:
    name: seo-compliance-report
    path: seo-compliance-report.json
```

## Troubleshooting

### Issue: Tests Fail with "Cannot find module"
**Solution**: Ensure all files are in correct locations
```
src/lib/seo-content-generator/
├── seo-compliance-validator.ts
├── seo-compliance-report-generator.ts
└── __tests__/
    ├── seo-compliance-validator.test.ts
    └── seo-compliance-report-generator.test.ts
```

### Issue: Report Shows 0% Compliance
**Solution**: Check that articles have proper metadata
- Verify `export const metadata` in page.tsx
- Check title and description are not empty
- Ensure metadata is properly formatted

### Issue: Image Optimization Always Fails
**Solution**: Ensure images use Next.js Image component
```typescript
import Image from 'next/image';

<Image 
  src="..." 
  alt="description"
  width={1200}
  height={630}
/>
```

## Best Practices

1. **Run validation regularly** - Check compliance after each article update
2. **Fix issues promptly** - Address critical issues within 24 hours
3. **Monitor trends** - Track compliance rate over time
4. **Document changes** - Keep record of improvements
5. **Test thoroughly** - Verify fixes with re-validation

## Support

For issues or questions:
1. Check the generated reports for specific error messages
2. Review the compliance criteria in this guide
3. Consult the test files for implementation examples
4. Check the main validation files for detailed logic

## Related Documentation

- [SEO Compliance Validation Report](./SEO_COMPLIANCE_VALIDATION_REPORT.md)
- [Blog Content Improvement Requirements](./kiro/specs/blog-content-improvement/requirements.md)
- [Blog Content Improvement Design](./kiro/specs/blog-content-improvement/design.md)
