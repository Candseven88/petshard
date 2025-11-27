#!/usr/bin/env node

/**
 * Demo script for SEO Content Generator
 * 
 * This script demonstrates the main functionality of the SEO Content Generator
 * including single article generation, batch processing, and quality assurance.
 */

import { SEOContentGenerator } from './seo-content-generator';
import { KeywordInput } from './types';

async function runDemo() {
  console.log('🚀 SEO Content Generator Demo\n');

  const generator = new SEOContentGenerator();

  try {
    // Demo 1: Single Article Generation
    console.log('📝 Demo 1: Single Article Generation');
    console.log('Generating article for keyword: "dog training"...\n');

    const singleResult = await generator.generateSingleArticle('dog training', 'care');
    
    console.log(`✅ Article generated successfully!`);
    console.log(`   - Keyword: ${singleResult.article.keyword}`);
    console.log(`   - Word Count: ${singleResult.article.wordCount}`);
    console.log(`   - Keyword Density: ${singleResult.article.keywordDensity}`);
    console.log(`   - Valid: ${singleResult.validation.isValid}`);
    console.log(`   - File Path: ${singleResult.article.filePath}\n`);

    // Demo 2: Batch Article Generation
    console.log('📚 Demo 2: Batch Article Generation');
    
    const batchInput: KeywordInput = {
      keywords: ['cat care', 'pet health', 'dog grooming', 'bird feeding'],
      contentFocus: 'care'
    };

    console.log(`Generating articles for keywords: ${batchInput.keywords.join(', ')}...\n`);

    const batchResult = await generator.generateBatchArticles(batchInput);
    
    console.log(`✅ Batch generation completed!`);
    console.log(`   - Total Keywords: ${batchResult.summary.totalKeywords}`);
    console.log(`   - Valid Keywords: ${batchResult.summary.validKeywords}`);
    console.log(`   - Successful Articles: ${batchResult.summary.successfulArticles}`);
    console.log(`   - Valid Articles: ${batchResult.summary.validArticles}`);
    console.log(`   - Average Word Count: ${batchResult.summary.averageWordCount}`);
    console.log(`   - Average Keyword Density: ${batchResult.summary.averageKeywordDensity}`);
    console.log(`   - Duplicate Content: ${batchResult.summary.duplicateContent}\n`);

    // Demo 3: Quality Assurance
    console.log('🔍 Demo 3: Quality Assurance & Self-Validation');
    
    const qaResult = await generator.generateWithQualityAssurance(batchInput, true);
    
    console.log(`✅ Quality assurance completed!`);
    console.log(`   - Articles Generated: ${qaResult.articles.length}`);
    console.log(`   - Average Quality Score: ${qaResult.summary.averageQualityScore}/100`);
    console.log(`   - High Quality Articles: ${qaResult.summary.highQualityArticles}`);
    
    if (qaResult.qualityReport) {
      console.log(`   - Quality Report:`);
      console.log(`     * Valid Articles: ${qaResult.qualityReport.summary.validArticles}/${qaResult.qualityReport.summary.totalArticles}`);
      console.log(`     * Common Errors: ${qaResult.qualityReport.issues.commonErrors.length}`);
      console.log(`     * Common Warnings: ${qaResult.qualityReport.issues.commonWarnings.length}`);
      console.log(`     * Recommendations: ${qaResult.qualityReport.recommendations.length}`);
    }
    console.log();

    // Demo 4: Content Uniqueness Validation
    console.log('🔄 Demo 4: Content Uniqueness Validation');
    
    const uniquenessResult = generator.validateContentUniqueness(qaResult.articles);
    
    console.log(`✅ Uniqueness validation completed!`);
    console.log(`   - Is Content Unique: ${uniquenessResult.isUnique}`);
    console.log(`   - Duplicate Pairs: ${uniquenessResult.duplicateCount}`);
    console.log(`   - Similarity Threshold: ${uniquenessResult.similarityThreshold}\n`);

    // Demo 5: Individual Self-Validation
    console.log('🎯 Demo 5: Individual Article Self-Validation');
    
    const firstArticle = qaResult.articles[0];
    const selfValidation = generator.performSelfValidation(firstArticle.keyword, firstArticle.content);
    
    console.log(`✅ Self-validation for "${firstArticle.keyword}" completed!`);
    console.log(`   - Overall Score: ${selfValidation.overallScore}/100`);
    console.log(`   - Is Valid: ${selfValidation.isValid}`);
    console.log(`   - Errors: ${selfValidation.errors.length}`);
    console.log(`   - Warnings: ${selfValidation.warnings.length}`);
    console.log(`   - Suggestions: ${selfValidation.suggestions.length}`);
    
    if (selfValidation.errors.length > 0) {
      console.log(`   - Error Details: ${selfValidation.errors.slice(0, 2).join(', ')}`);
    }
    if (selfValidation.warnings.length > 0) {
      console.log(`   - Warning Details: ${selfValidation.warnings.slice(0, 2).join(', ')}`);
    }
    console.log();

    // Demo 6: Configuration Management
    console.log('⚙️  Demo 6: Configuration Management');
    
    const originalConfig = generator.getConfig();
    console.log(`Original Config - Min Words: ${originalConfig.minWordCount}, Max Words: ${originalConfig.maxWordCount}`);
    
    generator.updateConfig({
      minWordCount: 1000,
      maxWordCount: 1500,
      minKeywordDensity: 8
    });
    
    const updatedConfig = generator.getConfig();
    console.log(`Updated Config - Min Words: ${updatedConfig.minWordCount}, Max Words: ${updatedConfig.maxWordCount}`);
    console.log();

    // Demo 7: Generation Insights
    console.log('📊 Demo 7: Generation Insights');
    
    const insights = generator.getGenerationInsights(qaResult.validations);
    
    console.log(`✅ Generation insights calculated!`);
    console.log(`   - Total Articles: ${insights.totalArticles}`);
    console.log(`   - Validation Rate: ${insights.validationRate}%`);
    console.log(`   - Quality Score: ${insights.qualityScore}/100`);
    console.log(`   - Average Word Count: ${insights.averageWordCount}`);
    console.log(`   - Average Keyword Density: ${insights.averageKeywordDensity}`);
    console.log(`   - Common Issues: ${insights.commonIssues.length}`);
    console.log();

    console.log('🎉 Demo completed successfully!');
    console.log('\nThe SEO Content Generator is ready for production use.');
    console.log('Key features demonstrated:');
    console.log('✓ Single article generation');
    console.log('✓ Batch processing');
    console.log('✓ Quality assurance & self-validation');
    console.log('✓ Content uniqueness validation');
    console.log('✓ Configuration management');
    console.log('✓ Comprehensive reporting');

  } catch (error) {
    console.error('❌ Demo failed:', error);
    process.exit(1);
  }
}

// Run the demo if this file is executed directly
if (require.main === module) {
  runDemo().catch(console.error);
}

export { runDemo };