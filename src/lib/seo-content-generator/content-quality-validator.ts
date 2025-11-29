// Content Quality Validator - Validates generated content against requirements
import { 
  ArticleStructure, 
  ContentValidationResult, 
  GenerationConfig, 
  DEFAULT_CONFIG,
  SelfValidationResult,
  SEOComplianceCheck,
  StructuralIntegrityCheck,
  InternalLinkQualityCheck,
  QualityReport
} from './types';

export class ContentQualityValidator {
  private config: GenerationConfig;

  constructor(config: GenerationConfig = DEFAULT_CONFIG) {
    this.config = config;
  }

  /**
   * Validates article content against all requirements
   */
  validateContent(keyword: string, content: ArticleStructure): ContentValidationResult {
    const errors: string[] = [];
    
    // Get full text for analysis
    const fullText = this.extractFullText(content);
    const wordCount = this.countWords(fullText);
    const keywordDensity = this.countKeywordOccurrences(fullText, keyword);

    // Validate word count
    const wordCountValid = this.validateWordCount(wordCount, errors);
    
    // Validate keyword density
    const keywordDensityValid = this.validateKeywordDensity(keywordDensity, errors);
    
    // Validate required sections
    const sectionsValid = this.validateRequiredSections(content, errors);
    
    // Validate FAQ minimum
    const faqValid = this.validateFAQMinimum(content, errors);
    
    // Validate use cases minimum
    const useCasesValid = this.validateUseCasesMinimum(content, errors);
    
    // Validate internal links (will be populated later)
    const internalLinksValid = this.validateInternalLinks(content, errors);

    // Validate summary length
    const summaryValid = this.validateSummaryLength(content.summary, errors);

    // Validate title contains keyword
    const titleValid = this.validateTitleKeyword(content.title, keyword, errors);

    const isValid = wordCountValid && keywordDensityValid && sectionsValid && 
                   faqValid && useCasesValid && summaryValid && titleValid;

    return {
      isValid,
      wordCount,
      keywordDensity,
      hasRequiredSections: sectionsValid,
      hasMinimumFAQ: faqValid,
      hasMinimumUseCases: useCasesValid,
      hasInternalLinks: internalLinksValid,
      errors
    };
  }

  private extractFullText(content: ArticleStructure): string {
    const sections = content.sections;
    const faqText = sections.faq.map(item => `${item.question} ${item.answer}`).join(' ');
    const useCasesText = sections.useCases.join(' ');
    
    return [
      content.title,
      content.summary,
      sections.introduction,
      sections.coreContent,
      useCasesText,
      faqText,
      sections.conclusion
    ].join(' ');
  }

  private countWords(text: string): number {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  }

  private countKeywordOccurrences(text: string, keyword: string): number {
    // Escape special regex characters
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'gi');
    const matches = text.match(regex) || [];
    
    // Calculate density as percentage
    const wordCount = this.countWords(text);
    const density = (matches.length / wordCount) * 100;
    
    return Math.round(density * 100) / 100;
  }

  private validateWordCount(wordCount: number, errors: string[]): boolean {
    if (wordCount < this.config.minWordCount) {
      errors.push(`Word count ${wordCount} is below minimum ${this.config.minWordCount}`);
      return false;
    }
    if (wordCount > this.config.maxWordCount) {
      errors.push(`Word count ${wordCount} exceeds maximum ${this.config.maxWordCount}`);
      return false;
    }
    return true;
  }

  private validateKeywordDensity(density: number, errors: string[]): boolean {
    if (density < this.config.minKeywordDensity) {
      errors.push(`Keyword density ${density} is below minimum ${this.config.minKeywordDensity}`);
      return false;
    }
    if (density > this.config.maxKeywordDensity) {
      errors.push(`Keyword density ${density} exceeds maximum ${this.config.maxKeywordDensity}`);
      return false;
    }
    return true;
  }

  private validateRequiredSections(content: ArticleStructure, errors: string[]): boolean {
    const requiredSections = ['introduction', 'coreContent', 'useCases', 'faq', 'conclusion'];
    const missingSections: string[] = [];

    if (!content.title) missingSections.push('title');
    if (!content.summary) missingSections.push('summary');

    for (const section of requiredSections) {
      if (!content.sections[section as keyof typeof content.sections]) {
        missingSections.push(section);
      }
    }

    if (missingSections.length > 0) {
      errors.push(`Missing required sections: ${missingSections.join(', ')}`);
      return false;
    }
    return true;
  }

  private validateFAQMinimum(content: ArticleStructure, errors: string[]): boolean {
    const faqCount = content.sections.faq?.length || 0;
    if (faqCount < this.config.minFAQItems) {
      errors.push(`FAQ section has ${faqCount} items, minimum required: ${this.config.minFAQItems}`);
      return false;
    }
    return true;
  }

  private validateUseCasesMinimum(content: ArticleStructure, errors: string[]): boolean {
    const useCasesCount = content.sections.useCases?.length || 0;
    if (useCasesCount < this.config.minUseCases) {
      errors.push(`Use cases section has ${useCasesCount} items, minimum required: ${this.config.minUseCases}`);
      return false;
    }
    return true;
  }

  private validateInternalLinks(content: ArticleStructure, errors: string[]): boolean {
    const linkCount = content.internalLinks?.length || 0;
    if (linkCount < this.config.minInternalLinks) {
      // Note: This will be validated after InternalLinkManager processes the content
      return true; // Don't fail validation yet, links will be added later
    }
    return true;
  }

  private validateSummaryLength(summary: string, errors: string[]): boolean {
    const length = summary.length;
    if (length < this.config.summaryMinLength) {
      errors.push(`Summary length ${length} is below minimum ${this.config.summaryMinLength}`);
      return false;
    }
    if (length > this.config.summaryMaxLength) {
      errors.push(`Summary length ${length} exceeds maximum ${this.config.summaryMaxLength}`);
      return false;
    }
    return true;
  }

  private validateTitleKeyword(title: string, keyword: string, errors: string[]): boolean {
    const titleLower = title.toLowerCase();
    const keywordLower = keyword.toLowerCase();
    
    if (!titleLower.includes(keywordLower)) {
      errors.push(`Title does not contain the target keyword: ${keyword}`);
      return false;
    }
    return true;
  }

  /**
   * Validates multiple articles in batch
   */
  validateBatchContent(keywordContentPairs: Array<{keyword: string, content: ArticleStructure}>): ContentValidationResult[] {
    return keywordContentPairs.map(pair => this.validateContent(pair.keyword, pair.content));
  }

  /**
   * Gets a summary of validation results
   */
  getValidationSummary(results: ContentValidationResult[]): {
    totalArticles: number;
    validArticles: number;
    invalidArticles: number;
    averageWordCount: number;
    averageKeywordDensity: number;
    commonErrors: string[];
  } {
    const totalArticles = results.length;
    const validArticles = results.filter(r => r.isValid).length;
    const invalidArticles = totalArticles - validArticles;
    
    const averageWordCount = results.reduce((sum, r) => sum + r.wordCount, 0) / totalArticles;
    const averageKeywordDensity = results.reduce((sum, r) => sum + r.keywordDensity, 0) / totalArticles;
    
    // Count error frequencies
    const errorCounts: Record<string, number> = {};
    results.forEach(result => {
      result.errors.forEach(error => {
        errorCounts[error] = (errorCounts[error] || 0) + 1;
      });
    });
    
    const commonErrors = Object.entries(errorCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([error]) => error);

    return {
      totalArticles,
      validArticles,
      invalidArticles,
      averageWordCount: Math.round(averageWordCount),
      averageKeywordDensity: Math.round(averageKeywordDensity * 100) / 100,
      commonErrors
    };
  }

  /**
   * Validates content readability (basic implementation)
   */
  validateReadability(content: ArticleStructure): {
    averageSentenceLength: number;
    averageWordLength: number;
    readabilityScore: 'good' | 'fair' | 'poor';
  } {
    const fullText = this.extractFullText(content);
    const sentences = fullText.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const words = fullText.split(/\s+/).filter(w => w.length > 0);
    
    const averageSentenceLength = words.length / sentences.length;
    const averageWordLength = words.reduce((sum, word) => sum + word.length, 0) / words.length;
    
    // Simple readability scoring
    let readabilityScore: 'good' | 'fair' | 'poor' = 'good';
    if (averageSentenceLength > 25 || averageWordLength > 6) {
      readabilityScore = 'fair';
    }
    if (averageSentenceLength > 35 || averageWordLength > 8) {
      readabilityScore = 'poor';
    }

    return {
      averageSentenceLength: Math.round(averageSentenceLength * 100) / 100,
      averageWordLength: Math.round(averageWordLength * 100) / 100,
      readabilityScore
    };
  }

  /**
   * Checks for content uniqueness between articles
   */
  checkContentUniqueness(contents: ArticleStructure[]): {
    duplicateCount: number;
    similarityThreshold: number;
    duplicatePairs: Array<{index1: number, index2: number, similarity: number}>;
  } {
    const duplicatePairs: Array<{index1: number, index2: number, similarity: number}> = [];
    const similarityThreshold = 0.8;

    for (let i = 0; i < contents.length; i++) {
      for (let j = i + 1; j < contents.length; j++) {
        const similarity = this.calculateSimilarity(
          this.extractFullText(contents[i]),
          this.extractFullText(contents[j])
        );
        
        if (similarity > similarityThreshold) {
          duplicatePairs.push({ index1: i, index2: j, similarity });
        }
      }
    }

    return {
      duplicateCount: duplicatePairs.length,
      similarityThreshold,
      duplicatePairs
    };
  }

  private calculateSimilarity(text1: string, text2: string): number {
    const words1 = new Set(text1.toLowerCase().split(/\s+/));
    const words2 = new Set(text2.toLowerCase().split(/\s+/));
    
    const intersection = new Set([...words1].filter(x => words2.has(x)));
    const union = new Set([...words1, ...words2]);
    
    return intersection.size / union.size;
  }

  /**
   * Self-validation logic for generated content
   * Requirements: 5.5
   */
  performSelfValidation(keyword: string, content: ArticleStructure): SelfValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];
    const suggestions: string[] = [];

    // Basic content validation
    const basicValidation = this.validateContent(keyword, content);
    
    // Advanced self-validation checks
    const readabilityCheck = this.validateReadability(content);
    const seoCheck = this.validateSEOCompliance(keyword, content);
    const structuralCheck = this.validateStructuralIntegrity(content);
    const linkCheck = this.validateInternalLinkQuality(content);

    // Compile results
    if (!basicValidation.isValid) {
      errors.push(...basicValidation.errors);
    }

    // Readability warnings
    if (readabilityCheck.readabilityScore === 'poor') {
      warnings.push('Content readability is poor - consider shorter sentences and simpler words');
    } else if (readabilityCheck.readabilityScore === 'fair') {
      warnings.push('Content readability could be improved');
    }

    // SEO compliance warnings
    if (!seoCheck.hasKeywordInTitle) {
      errors.push('Title does not contain the target keyword');
    }
    if (!seoCheck.hasKeywordInFirstParagraph) {
      warnings.push('Target keyword should appear in the first paragraph');
    }
    if (!seoCheck.hasKeywordInConclusion) {
      warnings.push('Target keyword should appear in the conclusion');
    }

    // Structural integrity warnings
    if (!structuralCheck.hasBalancedSections) {
      warnings.push('Content sections are not well-balanced in length');
    }
    if (!structuralCheck.hasLogicalFlow) {
      warnings.push('Content flow could be improved');
    }

    // Link quality suggestions
    if (linkCheck.linkCount < this.config.minInternalLinks) {
      suggestions.push(`Add more internal links (current: ${linkCheck.linkCount}, minimum: ${this.config.minInternalLinks})`);
    }
    if (!linkCheck.hasRelevantLinks) {
      suggestions.push('Ensure internal links are contextually relevant');
    }

    // Content quality suggestions
    if (basicValidation.wordCount < this.config.minWordCount * 0.9) {
      suggestions.push('Consider adding more detailed content to reach optimal word count');
    }
    if (basicValidation.keywordDensity < this.config.minKeywordDensity * 0.8) {
      suggestions.push('Consider naturally incorporating the target keyword more frequently');
    }

    const overallScore = this.calculateSelfValidationScore({
      basicValidation,
      readabilityCheck,
      seoCheck,
      structuralCheck,
      linkCheck
    });

    return {
      isValid: errors.length === 0,
      overallScore,
      errors,
      warnings,
      suggestions,
      checks: {
        basicValidation,
        readabilityCheck,
        seoCheck,
        structuralCheck,
        linkCheck
      }
    };
  }

  /**
   * Validate SEO compliance
   */
  private validateSEOCompliance(keyword: string, content: ArticleStructure): SEOComplianceCheck {
    const keywordLower = keyword.toLowerCase();
    const titleLower = content.title.toLowerCase();
    const introLower = content.sections.introduction.toLowerCase();
    const conclusionLower = content.sections.conclusion.toLowerCase();

    return {
      hasKeywordInTitle: titleLower.includes(keywordLower),
      hasKeywordInFirstParagraph: introLower.includes(keywordLower),
      hasKeywordInConclusion: conclusionLower.includes(keywordLower),
      hasMetaDescription: !!content.metadata.description,
      hasStructuredData: !!content.metadata.structuredData,
      titleLength: content.title.length,
      metaDescriptionLength: content.metadata.description?.length || 0
    };
  }

  /**
   * Validate structural integrity
   */
  private validateStructuralIntegrity(content: ArticleStructure): StructuralIntegrityCheck {
    const sections = content.sections;
    const sectionLengths = [
      sections.introduction.length,
      sections.coreContent.length,
      sections.conclusion.length
    ];

    const avgLength = sectionLengths.reduce((sum, len) => sum + len, 0) / sectionLengths.length;
    const hasBalancedSections = sectionLengths.every(len => 
      len >= avgLength * 0.3 && len <= avgLength * 3
    );

    // Check for logical flow indicators
    const transitionWords = ['however', 'therefore', 'furthermore', 'additionally', 'consequently', 'meanwhile'];
    const fullText = this.extractFullText(content);
    const hasTransitions = transitionWords.some(word => 
      fullText.toLowerCase().includes(word)
    );

    return {
      hasBalancedSections,
      hasLogicalFlow: hasTransitions,
      sectionCount: Object.keys(sections).length,
      averageSectionLength: Math.round(avgLength)
    };
  }

  /**
   * Validate internal link quality
   */
  private validateInternalLinkQuality(content: ArticleStructure): InternalLinkQualityCheck {
    const links = content.internalLinks || [];
    
    // Check for relevant links (basic heuristic)
    const hasRelevantLinks = links.length > 0 && links.every(link => 
      link.text.length > 5 && link.context.length > 10
    );

    // Check for diverse link targets
    const uniqueUrls = new Set(links.map(link => link.url));
    const hasDiverseTargets = uniqueUrls.size === links.length;

    return {
      linkCount: links.length,
      hasRelevantLinks,
      hasDiverseTargets,
      averageLinkTextLength: links.length > 0 
        ? Math.round(links.reduce((sum, link) => sum + link.text.length, 0) / links.length)
        : 0
    };
  }

  /**
   * Calculate overall self-validation score
   */
  private calculateSelfValidationScore(checks: {
    basicValidation: ContentValidationResult;
    readabilityCheck: { readabilityScore: 'good' | 'fair' | 'poor' };
    seoCheck: SEOComplianceCheck;
    structuralCheck: StructuralIntegrityCheck;
    linkCheck: InternalLinkQualityCheck;
  }): number {
    let score = 0;

    // Basic validation (40 points)
    if (checks.basicValidation.isValid) score += 40;
    else score += Math.max(0, 40 - checks.basicValidation.errors.length * 5);

    // Readability (20 points)
    switch (checks.readabilityCheck.readabilityScore) {
      case 'good': score += 20; break;
      case 'fair': score += 15; break;
      case 'poor': score += 10; break;
    }

    // SEO compliance (20 points)
    if (checks.seoCheck.hasKeywordInTitle) score += 5;
    if (checks.seoCheck.hasKeywordInFirstParagraph) score += 3;
    if (checks.seoCheck.hasKeywordInConclusion) score += 3;
    if (checks.seoCheck.hasMetaDescription) score += 3;
    if (checks.seoCheck.hasStructuredData) score += 3;
    if (checks.seoCheck.titleLength >= 30 && checks.seoCheck.titleLength <= 60) score += 3;

    // Structural integrity (10 points)
    if (checks.structuralCheck.hasBalancedSections) score += 5;
    if (checks.structuralCheck.hasLogicalFlow) score += 5;

    // Link quality (10 points)
    if (checks.linkCheck.linkCount >= this.config.minInternalLinks) score += 5;
    if (checks.linkCheck.hasRelevantLinks) score += 3;
    if (checks.linkCheck.hasDiverseTargets) score += 2;

    return Math.min(100, Math.max(0, score));
  }

  /**
   * Batch self-validation for multiple articles
   */
  performBatchSelfValidation(
    keywordContentPairs: Array<{keyword: string, content: ArticleStructure}>
  ): SelfValidationResult[] {
    return keywordContentPairs.map(pair => 
      this.performSelfValidation(pair.keyword, pair.content)
    );
  }

  /**
   * Generate comprehensive quality report
   */
  generateQualityReport(
    keywordContentPairs: Array<{keyword: string, content: ArticleStructure}>
  ): QualityReport {
    const selfValidations = this.performBatchSelfValidation(keywordContentPairs);
    const basicValidations = keywordContentPairs.map(pair => 
      this.validateContent(pair.keyword, pair.content)
    );
    const uniquenessCheck = this.checkContentUniqueness(
      keywordContentPairs.map(pair => pair.content)
    );

    const totalArticles = keywordContentPairs.length;
    const validArticles = selfValidations.filter(v => v.isValid).length;
    const averageScore = selfValidations.reduce((sum, v) => sum + v.overallScore, 0) / totalArticles;

    // Collect all errors, warnings, and suggestions
    const allErrors = selfValidations.flatMap(v => v.errors);
    const allWarnings = selfValidations.flatMap(v => v.warnings);
    const allSuggestions = selfValidations.flatMap(v => v.suggestions);

    // Count frequencies
    const errorFrequency = this.countFrequencies(allErrors);
    const warningFrequency = this.countFrequencies(allWarnings);

    return {
      summary: {
        totalArticles,
        validArticles,
        invalidArticles: totalArticles - validArticles,
        averageScore: Math.round(averageScore * 100) / 100,
        duplicateContent: uniquenessCheck.duplicateCount
      },
      issues: {
        commonErrors: errorFrequency.slice(0, 5),
        commonWarnings: warningFrequency.slice(0, 5),
        totalSuggestions: allSuggestions.length
      },
      recommendations: this.generateRecommendations(selfValidations),
      generatedAt: new Date().toISOString()
    };
  }

  private countFrequencies(items: string[]): Array<{item: string, count: number}> {
    const counts: Record<string, number> = {};
    items.forEach(item => {
      counts[item] = (counts[item] || 0) + 1;
    });
    
    return Object.entries(counts)
      .map(([item, count]) => ({ item, count }))
      .sort((a, b) => b.count - a.count);
  }

  private generateRecommendations(validations: SelfValidationResult[]): string[] {
    const recommendations: string[] = [];
    
    const lowScoreCount = validations.filter(v => v.overallScore < 70).length;
    const readabilityIssues = validations.filter(v => 
      v.checks.readabilityCheck.readabilityScore === 'poor'
    ).length;
    const seoIssues = validations.filter(v => 
      !v.checks.seoCheck.hasKeywordInTitle
    ).length;

    if (lowScoreCount > validations.length * 0.3) {
      recommendations.push('Consider reviewing content generation templates to improve overall quality');
    }
    
    if (readabilityIssues > validations.length * 0.2) {
      recommendations.push('Focus on improving readability with shorter sentences and simpler vocabulary');
    }
    
    if (seoIssues > 0) {
      recommendations.push('Ensure all titles contain the target keyword for better SEO');
    }

    return recommendations;
  }
}

