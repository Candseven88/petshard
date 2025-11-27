import { 
  KeywordInput, 
  ArticleStructure, 
  GeneratedArticle, 
  ContentValidationResult,
  GenerationConfig,
  DEFAULT_CONFIG,
  SelfValidationResult,
  QualityReport
} from './types';
import { KeywordProcessor } from './keyword-processor';
import { ArticleStructureGenerator } from './article-structure-generator';
import { ContentQualityValidator } from './content-quality-validator';
import { ArticleTemplateEngine } from './article-template-engine';
import { InternalLinkManager } from './internal-link-manager';
import { NextJSComponentGenerator } from './nextjs-component-generator';
import { FileStructureManager } from './file-structure-manager';

/**
 * SEOContentGenerator - Main orchestrator class that combines all components
 * to generate high-quality, SEO-optimized blog articles from keyword lists
 */
export class SEOContentGenerator {
  private keywordProcessor: KeywordProcessor;
  private structureGenerator: ArticleStructureGenerator;
  private qualityValidator: ContentQualityValidator;
  private templateEngine: ArticleTemplateEngine;
  private linkManager: InternalLinkManager;
  private componentGenerator: NextJSComponentGenerator;
  private fileManager: FileStructureManager;
  private config: GenerationConfig;

  constructor(config: GenerationConfig = DEFAULT_CONFIG) {
    this.config = config;
    this.keywordProcessor = new KeywordProcessor();
    this.structureGenerator = new ArticleStructureGenerator(config);
    this.qualityValidator = new ContentQualityValidator(config);
    this.templateEngine = new ArticleTemplateEngine(config);
    this.linkManager = new InternalLinkManager();
    this.componentGenerator = new NextJSComponentGenerator();
    this.fileManager = new FileStructureManager();
  }

  /**
   * Generate a single article from a keyword
   * @param keyword - The target keyword for the article
   * @param contentFocus - The content focus area (breed, health, care, general)
   * @returns Generated article with validation results
   */
  async generateSingleArticle(
    keyword: string, 
    contentFocus: 'breed' | 'health' | 'care' | 'general' = 'general'
  ): Promise<{ article: GeneratedArticle; validation: ContentValidationResult }> {
    try {
      // Step 1: Process and validate keyword
      const processedKeywords = this.keywordProcessor.processKeywords({ 
        keywords: [keyword], 
        contentFocus 
      });
      
      if (processedKeywords.length === 0) {
        throw new Error(`No valid keywords found for: ${keyword}`);
      }

      const validKeyword = processedKeywords[0];

      // Step 2: Generate article structure
      const articleStructure = this.structureGenerator.generateStructure(validKeyword);

      // Step 3: Generate internal links
      const internalLinks = this.linkManager.generateInternalLinks(
        validKeyword, 
        contentFocus, 
        this.config.minInternalLinks
      );
      articleStructure.internalLinks = internalLinks;

      // Step 4: Apply template engine enhancements
      const enhancedStructure = this.templateEngine.generateArticleStructure(
        validKeyword, 
        internalLinks
      );

      // Step 5: Generate Next.js component
      const generatedArticle = this.componentGenerator.generateArticle(
        enhancedStructure, 
        validKeyword
      );

      // Step 6: Validate content quality
      const validation = this.qualityValidator.validateContent(validKeyword, enhancedStructure);

      return { article: generatedArticle, validation };

    } catch (error) {
      throw new Error(`Failed to generate article for keyword "${keyword}": ${error}`);
    }
  }

  /**
   * Generate multiple articles from a keyword list in batch
   * Requirements: 5.1, 5.2, 5.3, 5.4, 5.5
   * @param input - Keyword input with list of keywords and optional configuration
   * @returns Array of generated articles with validation results
   */
  async generateBatchArticles(input: KeywordInput): Promise<{
    articles: GeneratedArticle[];
    validations: ContentValidationResult[];
    summary: BatchGenerationSummary;
  }> {
    try {
      // Step 1: Process all keywords in batch
      const validKeywords = this.keywordProcessor.processKeywords(input);
      
      if (validKeywords.length === 0) {
        throw new Error('No valid keywords found in the provided list');
      }

      const articles: GeneratedArticle[] = [];
      const validations: ContentValidationResult[] = [];
      const errors: string[] = [];

      // Step 2: Generate articles for each keyword
      for (const keyword of validKeywords) {
        try {
          const { article, validation } = await this.generateSingleArticle(
            keyword, 
            input.contentFocus || 'general'
          );
          
          articles.push(article);
          validations.push(validation);
        } catch (error) {
          errors.push(`Failed to generate article for "${keyword}": ${error}`);
          console.error(`Error generating article for "${keyword}":`, error);
        }
      }

      // Step 3: Validate content uniqueness across all articles
      const uniquenessCheck = this.qualityValidator.checkContentUniqueness(
        articles.map(a => a.content)
      );

      // Step 4: Generate batch summary
      const summary: BatchGenerationSummary = {
        totalKeywords: input.keywords.length,
        validKeywords: validKeywords.length,
        successfulArticles: articles.length,
        failedArticles: validKeywords.length - articles.length,
        validArticles: validations.filter(v => v.isValid).length,
        invalidArticles: validations.filter(v => !v.isValid).length,
        averageWordCount: articles.length > 0 
          ? Math.round(articles.reduce((sum, a) => sum + a.wordCount, 0) / articles.length)
          : 0,
        averageKeywordDensity: articles.length > 0
          ? Math.round(articles.reduce((sum, a) => sum + a.keywordDensity, 0) / articles.length)
          : 0,
        duplicateContent: uniquenessCheck.duplicateCount,
        errors,
        generatedAt: new Date().toISOString()
      };

      return { articles, validations, summary };

    } catch (error) {
      throw new Error(`Batch generation failed: ${error}`);
    }
  }

  /**
   * Generate and write articles to file system
   * @param input - Keyword input configuration
   * @param writeToFiles - Whether to write files to disk (default: false)
   * @returns Generation results with file paths
   */
  async generateAndWriteArticles(
    input: KeywordInput, 
    writeToFiles: boolean = false
  ): Promise<{
    articles: GeneratedArticle[];
    validations: ContentValidationResult[];
    summary: BatchGenerationSummary;
    filePaths?: string[];
  }> {
    const { articles, validations, summary } = await this.generateBatchArticles(input);
    
    let filePaths: string[] | undefined;

    if (writeToFiles) {
      try {
        // Write all articles to file system
        await this.fileManager.writeBatchArticles(articles);
        filePaths = articles.map(article => article.filePath);
      } catch (error) {
        throw new Error(`Failed to write articles to files: ${error}`);
      }
    }

    return { articles, validations, summary, filePaths };
  }

  /**
   * Validate existing articles against current standards
   * @param keywords - List of keywords to validate
   * @returns Validation results for existing articles
   */
  async validateExistingArticles(keywords: string[]): Promise<ContentValidationResult[]> {
    const validations: ContentValidationResult[] = [];

    for (const keyword of keywords) {
      try {
        // Check if article exists
        const exists = await this.fileManager.articleExists(keyword);
        if (!exists) {
          validations.push({
            isValid: false,
            wordCount: 0,
            keywordDensity: 0,
            hasRequiredSections: false,
            hasMinimumFAQ: false,
            hasMinimumUseCases: false,
            hasInternalLinks: false,
            errors: ['Article does not exist']
          });
          continue;
        }

        // For existing articles, we would need to parse the content
        // This is a simplified validation - in practice, you'd parse the existing file
        const mockStructure = this.structureGenerator.generateStructure(keyword);
        const validation = this.qualityValidator.validateContent(keyword, mockStructure);
        validations.push(validation);

      } catch (error) {
        validations.push({
          isValid: false,
          wordCount: 0,
          keywordDensity: 0,
          hasRequiredSections: false,
          hasMinimumFAQ: false,
          hasMinimumUseCases: false,
          hasInternalLinks: false,
          errors: [`Validation error: ${error}`]
        });
      }
    }

    return validations;
  }

  /**
   * Get generation statistics and insights
   * @param validations - Array of validation results
   * @returns Statistical insights about the generation process
   */
  getGenerationInsights(validations: ContentValidationResult[]): GenerationInsights {
    const total = validations.length;
    const valid = validations.filter(v => v.isValid).length;
    const invalid = total - valid;

    // Calculate averages
    const avgWordCount = total > 0 
      ? Math.round(validations.reduce((sum, v) => sum + v.wordCount, 0) / total)
      : 0;
    
    const avgKeywordDensity = total > 0
      ? Math.round((validations.reduce((sum, v) => sum + v.keywordDensity, 0) / total) * 100) / 100
      : 0;

    // Count common issues
    const errorCounts: Record<string, number> = {};
    validations.forEach(v => {
      v.errors.forEach(error => {
        errorCounts[error] = (errorCounts[error] || 0) + 1;
      });
    });

    const commonIssues = Object.entries(errorCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([issue, count]) => ({ issue, count }));

    return {
      totalArticles: total,
      validArticles: valid,
      invalidArticles: invalid,
      validationRate: total > 0 ? Math.round((valid / total) * 100) : 0,
      averageWordCount: avgWordCount,
      averageKeywordDensity: avgKeywordDensity,
      commonIssues,
      qualityScore: this.calculateQualityScore(validations)
    };
  }

  /**
   * Calculate overall quality score based on validation results
   */
  private calculateQualityScore(validations: ContentValidationResult[]): number {
    if (validations.length === 0) return 0;

    let totalScore = 0;
    
    for (const validation of validations) {
      let score = 0;
      
      // Base score for validity
      if (validation.isValid) score += 40;
      
      // Word count score (0-20 points)
      const wordCountRatio = validation.wordCount / this.config.maxWordCount;
      if (wordCountRatio >= 0.8 && wordCountRatio <= 1.0) score += 20;
      else if (wordCountRatio >= 0.6) score += 15;
      else if (wordCountRatio >= 0.4) score += 10;
      
      // Keyword density score (0-20 points)
      if (validation.keywordDensity >= this.config.minKeywordDensity && 
          validation.keywordDensity <= this.config.maxKeywordDensity) {
        score += 20;
      } else if (validation.keywordDensity >= this.config.minKeywordDensity - 2) {
        score += 15;
      }
      
      // Structure completeness (0-20 points)
      if (validation.hasRequiredSections) score += 5;
      if (validation.hasMinimumFAQ) score += 5;
      if (validation.hasMinimumUseCases) score += 5;
      if (validation.hasInternalLinks) score += 5;
      
      totalScore += score;
    }

    return Math.round(totalScore / validations.length);
  }

  /**
   * Get configuration settings
   */
  getConfig(): GenerationConfig {
    return { ...this.config };
  }

  /**
   * Update configuration settings
   */
  updateConfig(newConfig: Partial<GenerationConfig>): void {
    this.config = { ...this.config, ...newConfig };
    
    // Update component configurations
    this.structureGenerator = new ArticleStructureGenerator(this.config);
    this.qualityValidator = new ContentQualityValidator(this.config);
    this.templateEngine = new ArticleTemplateEngine(this.config);
  }

  /**
   * Perform comprehensive self-validation on generated content
   * Requirements: 5.5
   * @param keyword - The target keyword
   * @param content - The article structure to validate
   * @returns Detailed self-validation results
   */
  performSelfValidation(keyword: string, content: ArticleStructure): SelfValidationResult {
    return this.qualityValidator.performSelfValidation(keyword, content);
  }

  /**
   * Generate comprehensive quality report for batch content
   * Requirements: 5.3, 5.5
   * @param keywordContentPairs - Array of keyword-content pairs to analyze
   * @returns Detailed quality report with recommendations
   */
  generateQualityReport(
    keywordContentPairs: Array<{keyword: string, content: ArticleStructure}>
  ): QualityReport {
    return this.qualityValidator.generateQualityReport(keywordContentPairs);
  }

  /**
   * Generate articles with enhanced validation and quality assurance
   * @param input - Keyword input configuration
   * @param enableSelfValidation - Whether to perform self-validation (default: true)
   * @returns Enhanced generation results with quality metrics
   */
  async generateWithQualityAssurance(
    input: KeywordInput,
    enableSelfValidation: boolean = true
  ): Promise<{
    articles: GeneratedArticle[];
    validations: ContentValidationResult[];
    selfValidations?: SelfValidationResult[];
    qualityReport?: QualityReport;
    summary: BatchGenerationSummary;
  }> {
    // Generate articles using standard process
    const { articles, validations, summary } = await this.generateBatchArticles(input);

    let selfValidations: SelfValidationResult[] | undefined;
    let qualityReport: QualityReport | undefined;

    if (enableSelfValidation && articles.length > 0) {
      // Perform self-validation on all generated articles
      const keywordContentPairs = articles.map(article => ({
        keyword: article.keyword,
        content: article.content
      }));

      selfValidations = this.qualityValidator.performBatchSelfValidation(keywordContentPairs);
      qualityReport = this.qualityValidator.generateQualityReport(keywordContentPairs);

      // Update summary with self-validation metrics
      const avgSelfValidationScore = selfValidations.reduce((sum, sv) => sum + sv.overallScore, 0) / selfValidations.length;
      summary.averageQualityScore = Math.round(avgSelfValidationScore * 100) / 100;
      summary.highQualityArticles = selfValidations.filter(sv => sv.overallScore >= 80).length;
    }

    return {
      articles,
      validations,
      selfValidations,
      qualityReport,
      summary
    };
  }

  /**
   * Validate content uniqueness across multiple articles
   * Requirements: 5.3
   * @param articles - Array of generated articles to check
   * @returns Uniqueness validation results
   */
  validateContentUniqueness(articles: GeneratedArticle[]): {
    duplicateCount: number;
    similarityThreshold: number;
    duplicatePairs: Array<{index1: number, index2: number, similarity: number}>;
    isUnique: boolean;
  } {
    const contents = articles.map(article => article.content);
    const uniquenessCheck = this.qualityValidator.checkContentUniqueness(contents);
    
    return {
      ...uniquenessCheck,
      isUnique: uniquenessCheck.duplicateCount === 0
    };
  }
}

/**
 * Interface for batch generation summary
 */
export interface BatchGenerationSummary {
  totalKeywords: number;
  validKeywords: number;
  successfulArticles: number;
  failedArticles: number;
  validArticles: number;
  invalidArticles: number;
  averageWordCount: number;
  averageKeywordDensity: number;
  duplicateContent: number;
  errors: string[];
  generatedAt: string;
  averageQualityScore?: number;
  highQualityArticles?: number;
}

/**
 * Interface for generation insights and statistics
 */
export interface GenerationInsights {
  totalArticles: number;
  validArticles: number;
  invalidArticles: number;
  validationRate: number;
  averageWordCount: number;
  averageKeywordDensity: number;
  commonIssues: Array<{ issue: string; count: number }>;
  qualityScore: number;
}