# SEO Content Generator

A comprehensive system that transforms keyword lists into high-quality, search engine optimized blog articles for the PetShard platform.

## Features

- **Single Article Generation**: Generate individual articles from keywords
- **Batch Processing**: Process multiple keywords simultaneously
- **Quality Assurance**: Self-validation and comprehensive quality checking
- **Content Uniqueness**: Automatic duplicate content detection
- **SEO Optimization**: Built-in SEO best practices and metadata generation
- **Next.js Integration**: Generate ready-to-use React components
- **Configurable**: Customizable generation parameters

## Quick Start

```typescript
import { SEOContentGenerator } from './seo-content-generator';

const generator = new SEOContentGenerator();

// Generate a single article
const result = await generator.generateSingleArticle('dog training', 'care');
console.log(`Generated article: ${result.article.title}`);

// Generate multiple articles
const batchResult = await generator.generateBatchArticles({
  keywords: ['cat care', 'pet health', 'dog grooming'],
  contentFocus: 'care'
});
console.log(`Generated ${batchResult.articles.length} articles`);
```

## Main Classes

### SEOContentGenerator

The main orchestrator class that combines all components:

```typescript
const generator = new SEOContentGenerator(config);

// Single article generation
const { article, validation } = await generator.generateSingleArticle(keyword, contentFocus);

// Batch generation
const { articles, validations, summary } = await generator.generateBatchArticles(input);

// Quality assurance
const result = await generator.generateWithQualityAssurance(input, true);

// Self-validation
const selfValidation = generator.performSelfValidation(keyword, content);

// Content uniqueness
const uniqueness = generator.validateContentUniqueness(articles);
```

## Configuration

```typescript
const config = {
  minWordCount: 800,
  maxWordCount: 1200,
  minKeywordDensity: 6,
  maxKeywordDensity: 10,
  minFAQItems: 5,
  minUseCases: 3,
  minInternalLinks: 2,
  summaryMinLength: 40,
  summaryMaxLength: 60
};

const generator = new SEOContentGenerator(config);
```

## Generated Article Structure

Each generated article includes:

- **Title**: SEO-optimized with target keyword
- **Summary**: 40-60 character description
- **Introduction**: Engaging opening section
- **Core Content**: Detailed information with keyword integration
- **Use Cases**: Practical application scenarios
- **FAQ**: Frequently asked questions (minimum 5)
- **Conclusion**: Summarizing wrap-up
- **Internal Links**: Strategic links to platform features
- **SEO Metadata**: Complete metadata and structured data

## Quality Assurance

The system includes comprehensive quality checking:

### Basic Validation
- Word count compliance (800-1200 words)
- Keyword density (6-10 occurrences)
- Required sections presence
- Minimum FAQ and use cases

### Self-Validation
- SEO compliance checking
- Readability analysis
- Structural integrity
- Internal link quality
- Overall quality scoring (0-100)

### Content Uniqueness
- Automatic duplicate detection
- Similarity threshold checking
- Batch uniqueness validation

## Output Formats

### Next.js Components
Generated articles are formatted as complete Next.js page components with:
- TypeScript React components
- Tailwind CSS styling
- SEO metadata
- Structured data
- Responsive design

### File Structure
```
blog/
└── keyword-slug/
    ├── page.tsx          # Main component
    ├── types.ts          # TypeScript interfaces
    ├── data.ts           # Article data
    ├── README.md         # Documentation
    └── components/       # Additional components
```

## API Reference

### SEOContentGenerator Methods

#### `generateSingleArticle(keyword, contentFocus?)`
Generate a single article from a keyword.

#### `generateBatchArticles(input)`
Generate multiple articles from a keyword list.

#### `generateWithQualityAssurance(input, enableSelfValidation?)`
Generate articles with enhanced quality checking.

#### `performSelfValidation(keyword, content)`
Perform comprehensive self-validation on content.

#### `validateContentUniqueness(articles)`
Check for duplicate content across articles.

#### `generateQualityReport(keywordContentPairs)`
Generate comprehensive quality report.

#### `getConfig()` / `updateConfig(newConfig)`
Manage configuration settings.

## Testing

Run the test suite:

```bash
npm test -- src/lib/seo-content-generator/__tests__/
```

Run specific tests:

```bash
npm test -- --testNamePattern="SEOContentGenerator"
```

## Demo

Run the demo script to see all features in action:

```bash
npx ts-node src/lib/seo-content-generator/demo.ts
```

## Requirements Compliance

This implementation satisfies all requirements:

- **5.1**: Batch processing for multiple keywords
- **5.2**: Quality consistency across all content
- **5.3**: Content uniqueness verification
- **5.4**: Organized output with clear separators
- **5.5**: Self-validation compliance checking

## Architecture

The system follows a modular architecture:

```
SEOContentGenerator (Main Orchestrator)
├── KeywordProcessor (Validation & Processing)
├── ArticleStructureGenerator (Content Structure)
├── ContentQualityValidator (Quality Assurance)
├── ArticleTemplateEngine (Template Management)
├── InternalLinkManager (Link Generation)
├── NextJSComponentGenerator (Output Formatting)
└── FileStructureManager (File Organization)
```

## Contributing

When extending the system:

1. Follow the existing modular architecture
2. Add comprehensive tests for new features
3. Update type definitions in `types.ts`
4. Maintain backward compatibility
5. Document new configuration options

## License

This code is part of the PetShard platform and follows the project's licensing terms.