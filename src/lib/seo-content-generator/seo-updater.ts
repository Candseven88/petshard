import * as fs from 'fs/promises';
import * as path from 'path';

/**
 * SEOUpdater handles updating SEO-related files when new articles are generated
 * Updates sitemap, triggers IndexNow notifications, and updates llms.txt
 */
export class SEOUpdater {
  private projectRoot: string;
  private siteUrl: string;

  constructor(projectRoot: string = process.cwd(), siteUrl: string = 'https://www.petshard.online') {
    this.projectRoot = projectRoot;
    this.siteUrl = siteUrl;
  }

  /**
   * Update all SEO-related files for new articles
   */
  async updateSEOFiles(newArticleSlugs: string[]): Promise<{
    sitemapUpdated: boolean;
    indexNowNotified: boolean;
    llmsUpdated: boolean;
    errors: string[];
  }> {
    const results: {
      sitemapUpdated: boolean;
      indexNowNotified: boolean;
      llmsUpdated: boolean;
      errors: string[];
    } = {
      sitemapUpdated: false,
      indexNowNotified: false,
      llmsUpdated: false,
      errors: []
    };

    try {
      // Update sitemap
      await this.updateSitemap(newArticleSlugs);
      results.sitemapUpdated = true;
    } catch (error) {
      results.errors.push(`Sitemap update failed: ${error instanceof Error ? error.message : String(error)}`);
    }

    try {
      // Notify IndexNow
      await this.notifyIndexNow(newArticleSlugs);
      results.indexNowNotified = true;
    } catch (error) {
      results.errors.push(`IndexNow notification failed: ${error instanceof Error ? error.message : String(error)}`);
    }

    try {
      // Update llms.txt if needed
      await this.updateLlmsTxt();
      results.llmsUpdated = true;
    } catch (error) {
      results.errors.push(`llms.txt update failed: ${error instanceof Error ? error.message : String(error)}`);
    }

    return results;
  }

  /**
   * Update sitemap.ts with new articles
   */
  private async updateSitemap(newSlugs: string[]): Promise<void> {
    const sitemapPath = path.join(this.projectRoot, 'src', 'app', 'sitemap.ts');
    
    try {
      let content = await fs.readFile(sitemapPath, 'utf-8');
      
      // Find the insertion point (before the closing bracket of blogPosts array)
      const insertionPoint = content.lastIndexOf('  ]');
      
      if (insertionPoint === -1) {
        throw new Error('Could not find insertion point in sitemap.ts');
      }

      // Generate new entries
      const newEntries = newSlugs.map(slug => `    {
      url: \`\${baseUrl}/blog/${slug}\`,
      lastModified: new Date('${new Date().toISOString().split('T')[0]}'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },`).join('\n');

      // Insert new entries
      const updatedContent = content.slice(0, insertionPoint) + 
        newEntries + '\n' + 
        content.slice(insertionPoint);

      await fs.writeFile(sitemapPath, updatedContent);
    } catch (error) {
      throw new Error(`Failed to update sitemap: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Notify search engines via IndexNow API
   */
  private async notifyIndexNow(newSlugs: string[]): Promise<void> {
    const urls = newSlugs.map(slug => `/blog/${slug}`);
    
    try {
      const response = await fetch(`${this.siteUrl}/api/indexnow`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urls })
      });

      if (!response.ok) {
        throw new Error(`IndexNow API returned ${response.status}`);
      }
    } catch (error) {
      throw new Error(`IndexNow notification failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Update llms.txt with current blog content summary
   */
  private async updateLlmsTxt(): Promise<void> {
    const llmsPath = path.join(this.projectRoot, 'public', 'llms.txt');
    
    try {
      let content = await fs.readFile(llmsPath, 'utf-8');
      
      // Update the last modified timestamp
      const timestamp = new Date().toISOString().split('T')[0];
      
      // Add or update a timestamp comment at the end
      if (content.includes('# Last updated:')) {
        content = content.replace(/# Last updated: .+/, `# Last updated: ${timestamp}`);
      } else {
        content += `\n\n# Last updated: ${timestamp}`;
      }

      await fs.writeFile(llmsPath, content);
    } catch (error) {
      throw new Error(`Failed to update llms.txt: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Get current blog article count for reporting
   */
  async getBlogStats(): Promise<{
    totalArticles: number;
    recentArticles: number;
    lastUpdated: string;
  }> {
    try {
      const blogDir = path.join(this.projectRoot, 'src', 'app', 'blog');
      const entries = await fs.readdir(blogDir, { withFileTypes: true });
      
      const articleDirs = entries.filter(entry => 
        entry.isDirectory() && 
        !entry.name.startsWith('.') &&
        entry.name !== 'page.tsx'
      );

      const totalArticles = articleDirs.length;
      
      // Count articles from the last 30 days (simplified)
      const recentArticles = articleDirs.length; // Simplified for now
      
      return {
        totalArticles,
        recentArticles,
        lastUpdated: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to get blog stats: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
}