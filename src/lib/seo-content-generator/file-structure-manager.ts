import { GeneratedArticle } from './types';
import * as fs from 'fs';
import * as path from 'path';

/**
 * FileStructureManager handles blog directory structure management
 * and file naming/organization for generated content
 */
export class FileStructureManager {
  private readonly blogBasePath: string;
  private readonly projectRoot: string;

  constructor(projectRoot: string = process.cwd()) {
    this.projectRoot = projectRoot;
    this.blogBasePath = path.join(projectRoot, 'src', 'app', 'blog');
  }

  /**
   * Generate URL slug from keyword following established patterns
   */
  generateSlug(keyword: string): string {
    return keyword
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
      .trim();
  }

  /**
   * Generate directory path for a blog article
   */
  generateDirectoryPath(keyword: string): string {
    const slug = this.generateSlug(keyword);
    return path.join(this.blogBasePath, slug);
  }

  /**
   * Generate file path for the main page component
   */
  generatePageFilePath(keyword: string): string {
    const directoryPath = this.generateDirectoryPath(keyword);
    return path.join(directoryPath, 'page.tsx');
  }

  /**
   * Generate file path for types definition
   */
  generateTypesFilePath(keyword: string): string {
    const directoryPath = this.generateDirectoryPath(keyword);
    return path.join(directoryPath, 'types.ts');
  }

  /**
   * Generate file path for data file
   */
  generateDataFilePath(keyword: string): string {
    const directoryPath = this.generateDirectoryPath(keyword);
    return path.join(directoryPath, 'data.ts');
  }

  /**
   * Generate file path for README documentation
   */
  generateReadmeFilePath(keyword: string): string {
    const directoryPath = this.generateDirectoryPath(keyword);
    return path.join(directoryPath, 'README.md');
  }

  /**
   * Generate components directory path
   */
  generateComponentsDirectoryPath(keyword: string): string {
    const directoryPath = this.generateDirectoryPath(keyword);
    return path.join(directoryPath, 'components');
  }

  /**
   * Create directory structure for a blog article
   */
  async createDirectoryStructure(keyword: string): Promise<void> {
    const directoryPath = this.generateDirectoryPath(keyword);
    const componentsPath = this.generateComponentsDirectoryPath(keyword);

    try {
      // Create main directory
      await this.ensureDirectoryExists(directoryPath);
      
      // Create components subdirectory
      await this.ensureDirectoryExists(componentsPath);
    } catch (error) {
      throw new Error(`Failed to create directory structure for ${keyword}: ${error}`);
    }
  }

  /**
   * Write generated article to file system
   */
  async writeArticleFiles(article: GeneratedArticle): Promise<void> {
    const keyword = article.keyword;
    
    try {
      // Create directory structure
      await this.createDirectoryStructure(keyword);

      // Write main page component
      const pageFilePath = this.generatePageFilePath(keyword);
      await this.writeFile(pageFilePath, article.componentCode);

      // Write types file
      const typesFilePath = this.generateTypesFilePath(keyword);
      const typesContent = this.generateTypesFile(keyword);
      await this.writeFile(typesFilePath, typesContent);

      // Write data file
      const dataFilePath = this.generateDataFilePath(keyword);
      const dataContent = this.generateDataFile(keyword, article);
      await this.writeFile(dataFilePath, dataContent);

      // Write README file
      const readmeFilePath = this.generateReadmeFilePath(keyword);
      const readmeContent = this.generateReadmeFile(keyword, article);
      await this.writeFile(readmeFilePath, readmeContent);

    } catch (error) {
      throw new Error(`Failed to write article files for ${keyword}: ${error}`);
    }
  }

  /**
   * Write multiple articles in batch
   */
  async writeBatchArticles(articles: GeneratedArticle[]): Promise<void> {
    const writePromises = articles.map(article => this.writeArticleFiles(article));
    
    try {
      await Promise.all(writePromises);
    } catch (error) {
      throw new Error(`Failed to write batch articles: ${error}`);
    }
  }

  /**
   * Check if article directory already exists
   */
  async articleExists(keyword: string): Promise<boolean> {
    const directoryPath = this.generateDirectoryPath(keyword);
    
    try {
      const stats = await fs.promises.stat(directoryPath);
      return stats.isDirectory();
    } catch {
      return false;
    }
  }

  /**
   * Get list of existing article directories
   */
  async getExistingArticles(): Promise<string[]> {
    try {
      const entries = await fs.promises.readdir(this.blogBasePath, { withFileTypes: true });
      return entries
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name);
    } catch {
      return [];
    }
  }

  /**
   * Validate directory structure compliance
   */
  async validateDirectoryStructure(keyword: string): Promise<boolean> {
    const directoryPath = this.generateDirectoryPath(keyword);
    const pageFilePath = this.generatePageFilePath(keyword);
    const componentsPath = this.generateComponentsDirectoryPath(keyword);

    try {
      // Check main directory exists
      const dirStats = await fs.promises.stat(directoryPath);
      if (!dirStats.isDirectory()) return false;

      // Check page.tsx exists
      const pageStats = await fs.promises.stat(pageFilePath);
      if (!pageStats.isFile()) return false;

      // Check components directory exists
      const compStats = await fs.promises.stat(componentsPath);
      if (!compStats.isDirectory()) return false;

      return true;
    } catch {
      return false;
    }
  }

  /**
   * Generate relative path from project root
   */
  getRelativePath(keyword: string): string {
    const fullPath = this.generateDirectoryPath(keyword);
    return path.relative(this.projectRoot, fullPath);
  }

  /**
   * Generate URL path for the article
   */
  generateUrlPath(keyword: string): string {
    const slug = this.generateSlug(keyword);
    return `/blog/${slug}`;
  }

  /**
   * Private helper methods
   */

  private async ensureDirectoryExists(dirPath: string): Promise<void> {
    try {
      await fs.promises.mkdir(dirPath, { recursive: true });
    } catch (error) {
      throw new Error(`Failed to create directory ${dirPath}: ${error}`);
    }
  }

  private async writeFile(filePath: string, content: string): Promise<void> {
    try {
      await fs.promises.writeFile(filePath, content, 'utf8');
    } catch (error) {
      throw new Error(`Failed to write file ${filePath}: ${error}`);
    }
  }

  private generateTypesFile(keyword: string): string {
    const componentName = this.generateComponentName(keyword);
    
    return `// TypeScript interfaces for ${componentName}

export interface ${componentName}Data {
  title: string;
  description: string;
  content: string;
  metadata: {
    keywords: string[];
    category: string;
    readTime: string;
  };
}

export interface RelatedTool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface UseCaseItem {
  title: string;
  description: string;
  example?: string;
}
`;
  }

  private generateDataFile(keyword: string, article: GeneratedArticle): string {
    const componentName = this.generateComponentName(keyword);
    
    return `// Data for ${componentName}

import { ${componentName}Data, RelatedTool, FAQItem, UseCaseItem } from './types';

export const articleData: ${componentName}Data = {
  title: "${this.escapeString(article.content.title)}",
  description: "${this.escapeString(article.content.metadata.description)}",
  content: "${this.escapeString(article.content.sections.coreContent)}",
  metadata: {
    keywords: [${article.content.metadata.keywords.map(k => `"${this.escapeString(k)}"`).join(', ')}],
    category: "Pet Care",
    readTime: "12 min read"
  }
};

export const relatedTools: RelatedTool[] = [
  {
    id: "breed-identification",
    name: "Breed Identification",
    description: "Upload a photo to identify your pet's breed with AI-powered analysis.",
    url: "/breed-identification",
    icon: "🔍"
  },
  {
    id: "health-center",
    name: "Health Center",
    description: "Get personalized health advice and symptom checking for your pet.",
    url: "/health-center",
    icon: "🏥"
  },
  {
    id: "pet-care-guide",
    name: "Pet Care Guide",
    description: "Comprehensive care instructions tailored to your pet's needs.",
    url: "/pet-care-guide",
    icon: "📋"
  }
];

export const faqItems: FAQItem[] = [
  ${article.content.sections.faq.map(faq => `{
    question: "${this.escapeString(faq.question)}",
    answer: "${this.escapeString(faq.answer)}"
  }`).join(',\n  ')}
];

export const useCaseItems: UseCaseItem[] = [
  ${article.content.sections.useCases.map((useCase, index) => `{
    title: "Use Case ${index + 1}",
    description: "${this.escapeString(useCase)}"
  }`).join(',\n  ')}
];
`;
  }

  private generateReadmeFile(keyword: string, article: GeneratedArticle): string {
    const componentName = this.generateComponentName(keyword);
    const slug = this.generateSlug(keyword);
    
    return `# ${componentName}

## Overview

This blog article covers ${keyword} and provides comprehensive information for pet owners.

## Article Details

- **Title**: ${article.content.title}
- **Keyword**: ${keyword}
- **Word Count**: ${article.wordCount} words
- **Keyword Density**: ${article.keywordDensity} occurrences
- **URL**: /blog/${slug}

## File Structure

\`\`\`
${slug}/
├── page.tsx          # Main React component
├── types.ts          # TypeScript interfaces
├── data.ts           # Article data and content
├── README.md         # This documentation
└── components/       # Reusable components (if needed)
\`\`\`

## Content Sections

- Introduction
- Core Content
- Use Cases (${article.content.sections.useCases.length} items)
- FAQ (${article.content.sections.faq.length} items)
- Conclusion
- Related Tools

## SEO Features

- Structured data markup
- Open Graph metadata
- Twitter Card metadata
- Canonical URL
- Keyword optimization
- Internal linking

## Generated

This article was automatically generated by the SEO Content Generator system.
Generated on: ${new Date().toISOString()}
`;
  }

  private generateComponentName(keyword: string): string {
    return keyword
      .split(/[\s-_]+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('') + 'Guide';
  }

  private escapeString(str: string): string {
    return str
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/'/g, "\\'")
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\t/g, '\\t');
  }
}