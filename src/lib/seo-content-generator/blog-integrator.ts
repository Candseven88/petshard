import { GeneratedArticle } from './types';
import { FileStructureManager } from './file-structure-manager';
import { SEOUpdater } from './seo-updater';
import * as fs from 'fs/promises';
import * as path from 'path';

/**
 * BlogIntegrator handles integration with the existing Next.js blog system
 * Automatically updates blog listings and manages article organization
 * Requirements: 4.5
 */
export class BlogIntegrator {
  private fileManager: FileStructureManager;
  private seoUpdater: SEOUpdater;
  private blogPagePath: string;
  private projectRoot: string;

  constructor(projectRoot: string = process.cwd()) {
    this.projectRoot = projectRoot;
    this.fileManager = new FileStructureManager(projectRoot);
    this.seoUpdater = new SEOUpdater(projectRoot);
    this.blogPagePath = path.join(projectRoot, 'src', 'app', 'blog', 'page.tsx');
  }

  /**
   * Integrate generated articles into the existing blog system
   * @param articles - Array of generated articles to integrate
   * @returns Integration results with success/failure information
   */
  async integrateArticles(articles: GeneratedArticle[]): Promise<BlogIntegrationResult> {
    const results: BlogIntegrationResult = {
      totalArticles: articles.length,
      successfulIntegrations: 0,
      failedIntegrations: 0,
      updatedBlogPage: false,
      createdFiles: [],
      errors: []
    };

    try {
      // Step 1: Write article files to the blog directory
      for (const article of articles) {
        try {
          await this.fileManager.writeArticleFiles(article);
          results.successfulIntegrations++;
          
          // Track created files
          const slug = this.fileManager.generateSlug(article.keyword);
          results.createdFiles.push({
            keyword: article.keyword,
            slug,
            path: this.fileManager.getRelativePath(article.keyword),
            url: this.fileManager.generateUrlPath(article.keyword)
          });
        } catch (error) {
          results.failedIntegrations++;
          results.errors.push(`Failed to write files for "${article.keyword}": ${error}`);
        }
      }

      // Step 2: Update the blog main page with new articles
      if (results.successfulIntegrations > 0) {
        try {
          await this.updateBlogMainPage(articles);
          results.updatedBlogPage = true;
        } catch (error) {
          results.errors.push(`Failed to update blog main page: ${error}`);
        }
      }

      // Step 3: Update SEO-related files
      if (results.successfulIntegrations > 0) {
        try {
          const slugs = results.createdFiles.map(file => file.slug);
          const seoResults = await this.seoUpdater.updateSEOFiles(slugs);
          
          if (seoResults.errors.length > 0) {
            results.errors.push(...seoResults.errors);
          }
        } catch (error) {
          results.errors.push(`SEO update failed: ${error}`);
        }
      }

      return results;

    } catch (error) {
      results.errors.push(`Integration failed: ${error}`);
      return results;
    }
  }

  /**
   * Update the main blog page to include new articles
   * @param newArticles - Articles to add to the blog listing
   */
  async updateBlogMainPage(newArticles: GeneratedArticle[]): Promise<void> {
    try {
      // Read current blog page content
      const currentContent = await fs.readFile(this.blogPagePath, 'utf-8');
      
      // Extract existing blog posts array
      const blogPostsMatch = currentContent.match(/const blogPosts = \[([\s\S]*?)\];/);
      if (!blogPostsMatch) {
        throw new Error('Could not find blogPosts array in blog page');
      }

      // Generate new blog post entries
      const newBlogEntries = newArticles.map(article => this.generateBlogPostEntry(article));
      
      // Parse existing entries (simplified approach)
      const existingEntries = this.parseExistingBlogPosts(blogPostsMatch[1]);
      
      // Combine and deduplicate entries
      const allEntries = [...newBlogEntries, ...existingEntries];
      const uniqueEntries = this.deduplicateBlogPosts(allEntries);
      
      // Sort by date (newest first)
      uniqueEntries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

      // Generate new blog posts array content
      const newBlogPostsContent = uniqueEntries.map(entry => this.formatBlogPostEntry(entry)).join(',\n  ');
      
      // Replace the blog posts array in the file
      const updatedContent = currentContent.replace(
        /const blogPosts = \[[\s\S]*?\];/,
        `const blogPosts = [\n  ${newBlogPostsContent}\n];`
      );

      // Write updated content back to file
      await fs.writeFile(this.blogPagePath, updatedContent, 'utf-8');

    } catch (error) {
      throw new Error(`Failed to update blog main page: ${error}`);
    }
  }

  /**
   * Generate a blog post entry object for the main blog page
   */
  private generateBlogPostEntry(article: GeneratedArticle): BlogPostEntry {
    const slug = this.fileManager.generateSlug(article.keyword);
    const today = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    return {
      id: slug,
      title: article.content.title,
      description: article.content.metadata.description,
      image: this.selectAppropriateImage(article.keyword),
      date: today,
      tags: this.generateTags(article.keyword, article.content.metadata.keywords),
      featured: true
    };
  }

  // Track used images to avoid duplicates
  private usedImages: Set<string> = new Set();
  
  /**
   * Available pet images pool
   */
  private readonly availableImages = [
    '/pet/1.jpg',
    '/pet/2.jpg', 
    '/pet/3.jpg',
    '/pet/4.jpg',
    '/pet/5.jpg',
    '/pet/6.jpg',
    '/pet/7.jpg',
    '/pet/8.jpg',
    '/pet/9.jpg',
    'https://cdn2.thecatapi.com/images/e35.jpg',
    'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg',
    'https://cdn2.thecatapi.com/images/ag4.jpg',
    'https://cdn2.thecatapi.com/images/bpc.jpg',
    'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg',
    'https://www.thesprucepets.com/thmb/DWmPXX3FB2nkHBvvqo-asPo5BWQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Aquarium-digital-thermometer-59000ef63df78ca1591de6b0.jpg',
    'https://cdn.shopify.com/s/files/1/0311/3149/files/shutterstock_601059413_97867db7-ccf6-45e3-b082-d4af94f1777f.jpg?v=1573605721',
    'https://www.hygger-online.com/wp-content/uploads/2023/03/Top-10-Bottom-Feeder-Fish-For-Freshwater-Community-Tank-2.jpg'
  ];

  /**
   * Select appropriate image based on keyword content with rotation to avoid duplicates
   */
  private selectAppropriateImage(keyword: string): string {
    const keywordLower = keyword.toLowerCase();
    
    // Category-specific images
    if (keywordLower.includes('cat')) {
      const catImages = [
        'https://cdn2.thecatapi.com/images/e35.jpg',
        'https://cdn2.thecatapi.com/images/ag4.jpg', 
        'https://cdn2.thecatapi.com/images/bpc.jpg',
        'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg',
        '/pet/1.jpg',
        '/pet/2.jpg'
      ];
      return this.getUnusedImage(catImages);
    } else if (keywordLower.includes('dog')) {
      const dogImages = [
        'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg',
        '/pet/3.jpg',
        '/pet/4.jpg',
        '/pet/5.jpg'
      ];
      return this.getUnusedImage(dogImages);
    } else if (keywordLower.includes('aquarium') || keywordLower.includes('fish')) {
      const aquariumImages = [
        'https://www.thesprucepets.com/thmb/DWmPXX3FB2nkHBvvqo-asPo5BWQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Aquarium-digital-thermometer-59000ef63df78ca1591de6b0.jpg',
        'https://www.hygger-online.com/wp-content/uploads/2023/03/Top-10-Bottom-Feeder-Fish-For-Freshwater-Community-Tank-2.jpg',
        '/pet/6.jpg'
      ];
      return this.getUnusedImage(aquariumImages);
    } else if (keywordLower.includes('bird')) {
      return 'https://cdn.shopify.com/s/files/1/0311/3149/files/shutterstock_601059413_97867db7-ccf6-45e3-b082-d4af94f1777f.jpg?v=1573605721';
    }
    
    // For general pet topics, get unused image from available pool
    return this.getUnusedImage(this.availableImages);
  }

  /**
   * Get an unused image from the provided array
   */
  private getUnusedImage(imageArray: string[]): string {
    // Find first unused image
    for (const image of imageArray) {
      if (!this.usedImages.has(image)) {
        this.usedImages.add(image);
        return image;
      }
    }
    
    // If all images are used, reset and use first one
    this.usedImages.clear();
    const image = imageArray[0];
    this.usedImages.add(image);
    return image;
  }

  /**
   * Generate appropriate tags for the article
   */
  private generateTags(keyword: string, metadataKeywords: string[]): string[] {
    const keywordLower = keyword.toLowerCase();
    const baseTags: string[] = [];

    // Add category-based tags
    if (keywordLower.includes('health') || keywordLower.includes('disease') || keywordLower.includes('symptom')) {
      baseTags.push('pet health', 'health guide');
    }
    if (keywordLower.includes('care') || keywordLower.includes('training') || keywordLower.includes('grooming')) {
      baseTags.push('pet care', 'care guide');
    }
    if (keywordLower.includes('breed') || keywordLower.includes('breeding')) {
      baseTags.push('breed guide', 'pet breeding');
    }
    if (keywordLower.includes('aquarium') || keywordLower.includes('fish')) {
      baseTags.push('aquarium care', 'fish care');
    }

    // Add metadata keywords (limit to 3-5 most relevant)
    const relevantKeywords = metadataKeywords.slice(0, 3);
    
    // Combine and deduplicate
    const allTags = [...baseTags, ...relevantKeywords];
    return [...new Set(allTags)].slice(0, 5); // Limit to 5 tags maximum
  }

  /**
   * Parse existing blog posts from the current blog page
   * This is a simplified parser - in production, you might want a more robust solution
   */
  private parseExistingBlogPosts(blogPostsContent: string): BlogPostEntry[] {
    // This is a simplified implementation
    // In a real scenario, you might want to use a proper AST parser
    const entries: BlogPostEntry[] = [];
    
    try {
      // Extract individual blog post objects using regex
      const objectMatches = blogPostsContent.match(/\{[\s\S]*?\}/g);
      
      if (objectMatches) {
        for (const match of objectMatches) {
          try {
            // Extract key properties using regex
            const id = this.extractProperty(match, 'id');
            const title = this.extractProperty(match, 'title');
            const description = this.extractProperty(match, 'description');
            const image = this.extractProperty(match, 'image');
            const date = this.extractProperty(match, 'date');
            const tags = this.extractArrayProperty(match, 'tags');
            const featured = this.extractBooleanProperty(match, 'featured');

            if (id && title && description) {
              entries.push({
                id,
                title,
                description,
                image: image || '/pet/3.jpg',
                date: date || new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                }),
                tags: tags || [],
                featured: featured !== undefined ? featured : true
              });
            }
          } catch (error) {
            console.warn('Failed to parse blog post entry:', error);
          }
        }
      }
    } catch (error) {
      console.warn('Failed to parse existing blog posts:', error);
    }

    return entries;
  }

  /**
   * Extract string property from object string
   */
  private extractProperty(objectString: string, propertyName: string): string | null {
    const regex = new RegExp(`${propertyName}:\\s*["']([^"']*?)["']`);
    const match = objectString.match(regex);
    return match ? match[1] : null;
  }

  /**
   * Extract array property from object string
   */
  private extractArrayProperty(objectString: string, propertyName: string): string[] {
    const regex = new RegExp(`${propertyName}:\\s*\\[([^\\]]*?)\\]`);
    const match = objectString.match(regex);
    
    if (match) {
      const arrayContent = match[1];
      const items = arrayContent.match(/["']([^"']*?)["']/g);
      return items ? items.map(item => item.replace(/["']/g, '')) : [];
    }
    
    return [];
  }

  /**
   * Extract boolean property from object string
   */
  private extractBooleanProperty(objectString: string, propertyName: string): boolean | undefined {
    const regex = new RegExp(`${propertyName}:\\s*(true|false)`);
    const match = objectString.match(regex);
    return match ? match[1] === 'true' : undefined;
  }

  /**
   * Remove duplicate blog posts based on ID
   */
  private deduplicateBlogPosts(entries: BlogPostEntry[]): BlogPostEntry[] {
    const seen = new Set<string>();
    return entries.filter(entry => {
      if (seen.has(entry.id)) {
        return false;
      }
      seen.add(entry.id);
      return true;
    });
  }

  /**
   * Format blog post entry as string for insertion into the blog page
   */
  private formatBlogPostEntry(entry: BlogPostEntry): string {
    const tagsString = entry.tags.map(tag => `"${tag}"`).join(', ');
    
    return `{
    id: "${entry.id}",
    title: "${this.escapeString(entry.title)}",
    description: "${this.escapeString(entry.description)}",
    image: "${entry.image}",
    date: "${entry.date}",
    tags: [${tagsString}],
    featured: ${entry.featured}
  }`;
  }

  /**
   * Escape string for safe insertion into JavaScript code
   */
  private escapeString(str: string): string {
    return str
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/'/g, "\\'")
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\t/g, '\\t');
  }

  /**
   * Create a backup of the current blog page before making changes
   */
  async createBlogPageBackup(): Promise<string> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = path.join(
      path.dirname(this.blogPagePath), 
      `page.backup.${timestamp}.tsx`
    );
    
    try {
      const currentContent = await fs.readFile(this.blogPagePath, 'utf-8');
      await fs.writeFile(backupPath, currentContent, 'utf-8');
      return backupPath;
    } catch (error) {
      throw new Error(`Failed to create backup: ${error}`);
    }
  }

  /**
   * Validate that the blog integration was successful
   */
  async validateIntegration(articles: GeneratedArticle[]): Promise<ValidationResult> {
    const results: ValidationResult = {
      isValid: true,
      validatedArticles: 0,
      missingFiles: [],
      invalidStructures: [],
      errors: []
    };

    for (const article of articles) {
      try {
        // Check if article directory exists
        const exists = await this.fileManager.articleExists(article.keyword);
        if (!exists) {
          results.missingFiles.push(article.keyword);
          results.isValid = false;
          continue;
        }

        // Check directory structure compliance
        const structureValid = await this.fileManager.validateDirectoryStructure(article.keyword);
        if (!structureValid) {
          results.invalidStructures.push(article.keyword);
          results.isValid = false;
          continue;
        }

        results.validatedArticles++;
      } catch (error) {
        results.errors.push(`Validation error for "${article.keyword}": ${error}`);
        results.isValid = false;
      }
    }

    return results;
  }

  /**
   * Get integration status for existing articles
   */
  async getIntegrationStatus(): Promise<IntegrationStatus> {
    try {
      const existingArticles = await this.fileManager.getExistingArticles();
      const blogPageExists = await this.blogPageExists();
      
      return {
        totalArticles: existingArticles.length,
        blogPageExists,
        lastUpdated: await this.getBlogPageLastModified(),
        articleSlugs: existingArticles
      };
    } catch (error) {
      throw new Error(`Failed to get integration status: ${error}`);
    }
  }

  /**
   * Check if blog page exists
   */
  private async blogPageExists(): Promise<boolean> {
    try {
      const stats = await fs.stat(this.blogPagePath);
      return stats.isFile();
    } catch {
      return false;
    }
  }

  /**
   * Get last modified date of blog page
   */
  private async getBlogPageLastModified(): Promise<string> {
    try {
      const stats = await fs.stat(this.blogPagePath);
      return stats.mtime.toISOString();
    } catch {
      return 'Unknown';
    }
  }
}

/**
 * Interface for blog post entries
 */
export interface BlogPostEntry {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
  featured: boolean;
}

/**
 * Interface for blog integration results
 */
export interface BlogIntegrationResult {
  totalArticles: number;
  successfulIntegrations: number;
  failedIntegrations: number;
  updatedBlogPage: boolean;
  createdFiles: Array<{
    keyword: string;
    slug: string;
    path: string;
    url: string;
  }>;
  errors: string[];
}

/**
 * Interface for validation results
 */
export interface ValidationResult {
  isValid: boolean;
  validatedArticles: number;
  missingFiles: string[];
  invalidStructures: string[];
  errors: string[];
}

/**
 * Interface for integration status
 */
export interface IntegrationStatus {
  totalArticles: number;
  blogPageExists: boolean;
  lastUpdated: string;
  articleSlugs: string[];
}