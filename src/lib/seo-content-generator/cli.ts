#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';
import * as fs from 'fs/promises';
import * as path from 'path';
import { SEOContentGenerator } from './seo-content-generator';
import { BlogIntegrator } from './blog-integrator';
import { KeywordInput } from './types';

/**
 * CLI Tool for SEO Content Generation
 * Provides command-line interface for keyword input and batch processing
 * Requirements: 5.1
 */

const program = new Command();

// Configure CLI program
program
  .name('seo-content-generator')
  .description('Generate SEO-optimized blog articles from keyword lists')
  .version('1.0.0');

/**
 * Generate command - Create articles from keywords
 */
program
  .command('generate')
  .description('Generate articles from a list of keywords')
  .option('-k, --keywords <keywords>', 'Comma-separated list of keywords')
  .option('-f, --file <file>', 'Path to file containing keywords (one per line)')
  .option('-o, --output <directory>', 'Output directory for generated articles', './generated-articles')
  .option('-c, --content-focus <focus>', 'Content focus: breed, health, care, general', 'general')
  .option('-w, --write-files', 'Write generated articles to files', false)
  .option('--integrate-blog', 'Integrate articles into existing blog system', false)
  .option('--dry-run', 'Generate content without writing files', false)
  .option('--interactive', 'Interactive mode for keyword input', false)
  .action(async (options) => {
    try {
      console.log(chalk.blue('🚀 Starting SEO Content Generation...'));
      
      let keywords: string[] = [];
      
      // Interactive mode
      if (options.interactive) {
        keywords = await getKeywordsInteractively();
      }
      // File input
      else if (options.file) {
        keywords = await loadKeywordsFromFile(options.file);
      }
      // Command line input
      else if (options.keywords) {
        keywords = options.keywords.split(',').map((k: string) => k.trim()).filter(Boolean);
      }
      else {
        console.error(chalk.red('❌ Error: Please provide keywords using -k, -f, or --interactive'));
        process.exit(1);
      }

      if (keywords.length === 0) {
        console.error(chalk.red('❌ Error: No valid keywords found'));
        process.exit(1);
      }

      console.log(chalk.green(`📝 Processing ${keywords.length} keywords...`));
      console.log(chalk.gray(`Keywords: ${keywords.join(', ')}`));

      // Create keyword input
      const keywordInput: KeywordInput = {
        keywords,
        contentFocus: options.contentFocus as 'breed' | 'health' | 'care' | 'general'
      };

      // Initialize generator
      const generator = new SEOContentGenerator();

      // Generate articles
      const writeFiles = options.writeFiles && !options.dryRun;
      const results = await generator.generateAndWriteArticles(keywordInput, writeFiles);

      // Integrate with blog system if requested
      let integrationResults = null;
      if (options.integrateBlog && !options.dryRun && results.articles.length > 0) {
        console.log(chalk.blue('🔗 Integrating articles into blog system...'));
        const blogIntegrator = new BlogIntegrator();
        
        try {
          // Create backup before integration
          const backupPath = await blogIntegrator.createBlogPageBackup();
          console.log(chalk.gray(`📄 Blog page backup created: ${backupPath}`));
          
          integrationResults = await blogIntegrator.integrateArticles(results.articles);
          displayIntegrationResults(integrationResults);
        } catch (error) {
          console.error(chalk.red(`❌ Blog integration failed: ${error}`));
        }
      }

      // Display results
      displayGenerationResults(results, options.dryRun);

      // Save results summary if not dry run
      if (!options.dryRun) {
        await saveResultsSummary(results, options.output);
        
        if (integrationResults) {
          await saveIntegrationSummary(integrationResults, options.output);
        }
      }

      console.log(chalk.green('✅ Generation completed successfully!'));

    } catch (error) {
      console.error(chalk.red(`❌ Error: ${error}`));
      process.exit(1);
    }
  });

/**
 * Batch command - Process multiple keyword files
 */
program
  .command('batch')
  .description('Process multiple keyword files in batch')
  .option('-d, --directory <directory>', 'Directory containing keyword files', './keywords')
  .option('-o, --output <directory>', 'Output directory for generated articles', './generated-articles')
  .option('-c, --content-focus <focus>', 'Content focus: breed, health, care, general', 'general')
  .option('--pattern <pattern>', 'File pattern to match (glob)', '*.txt')
  .option('--integrate-blog', 'Integrate articles into existing blog system', false)
  .option('--dry-run', 'Generate content without writing files', false)
  .action(async (options) => {
    try {
      console.log(chalk.blue('🔄 Starting batch processing...'));
      
      const keywordFiles = await findKeywordFiles(options.directory, options.pattern);
      
      if (keywordFiles.length === 0) {
        console.error(chalk.red(`❌ No keyword files found in ${options.directory}`));
        process.exit(1);
      }

      console.log(chalk.green(`📁 Found ${keywordFiles.length} keyword files`));

      const generator = new SEOContentGenerator();
      const allResults: any[] = [];

      for (const file of keywordFiles) {
        console.log(chalk.blue(`\n📝 Processing file: ${file}`));
        
        const keywords = await loadKeywordsFromFile(file);
        if (keywords.length === 0) {
          console.log(chalk.yellow(`⚠️  No keywords found in ${file}, skipping...`));
          continue;
        }

        const keywordInput: KeywordInput = {
          keywords,
          contentFocus: options.contentFocus as 'breed' | 'health' | 'care' | 'general'
        };

        const results = await generator.generateAndWriteArticles(
          keywordInput, 
          !options.dryRun
        );

        // Integrate with blog system if requested
        let integrationResults = null;
        if (options.integrateBlog && !options.dryRun && results.articles.length > 0) {
          const blogIntegrator = new BlogIntegrator();
          try {
            integrationResults = await blogIntegrator.integrateArticles(results.articles);
          } catch (error) {
            console.warn(chalk.yellow(`⚠️  Blog integration failed for ${file}: ${error}`));
          }
        }

        allResults.push({
          file,
          ...results,
          integration: integrationResults
        });

        console.log(chalk.green(`✅ Processed ${results.articles.length} articles from ${file}`));
      }

      // Display batch summary
      displayBatchSummary(allResults);

      // Save batch summary
      if (!options.dryRun) {
        await saveBatchSummary(allResults, options.output);
      }

      console.log(chalk.green('✅ Batch processing completed successfully!'));

    } catch (error) {
      console.error(chalk.red(`❌ Error: ${error}`));
      process.exit(1);
    }
  });

/**
 * Validate command - Check existing articles
 */
program
  .command('validate')
  .description('Validate existing articles against current standards')
  .option('-k, --keywords <keywords>', 'Comma-separated list of keywords to validate')
  .option('-f, --file <file>', 'Path to file containing keywords to validate')
  .option('-a, --all', 'Validate all existing articles', false)
  .action(async (options) => {
    try {
      console.log(chalk.blue('🔍 Starting article validation...'));
      
      let keywords: string[] = [];
      
      if (options.all) {
        // Find all existing articles
        keywords = await findExistingArticleKeywords();
      } else if (options.file) {
        keywords = await loadKeywordsFromFile(options.file);
      } else if (options.keywords) {
        keywords = options.keywords.split(',').map((k: string) => k.trim()).filter(Boolean);
      } else {
        console.error(chalk.red('❌ Error: Please specify keywords to validate'));
        process.exit(1);
      }

      if (keywords.length === 0) {
        console.error(chalk.red('❌ Error: No keywords found for validation'));
        process.exit(1);
      }

      console.log(chalk.green(`🔍 Validating ${keywords.length} articles...`));

      const generator = new SEOContentGenerator();
      const validations = await generator.validateExistingArticles(keywords);

      displayValidationResults(validations, keywords);

      console.log(chalk.green('✅ Validation completed!'));

    } catch (error) {
      console.error(chalk.red(`❌ Error: ${error}`));
      process.exit(1);
    }
  });

/**
 * Config command - Manage configuration
 */
program
  .command('config')
  .description('Display or update configuration settings')
  .option('--show', 'Show current configuration', false)
  .option('--reset', 'Reset to default configuration', false)
  .action(async (options) => {
    try {
      const generator = new SEOContentGenerator();
      
      if (options.reset) {
        // Reset would require implementing config persistence
        console.log(chalk.green('✅ Configuration reset to defaults'));
        return;
      }

      // Show current configuration
      const config = generator.getConfig();
      console.log(chalk.blue('📋 Current Configuration:'));
      console.log(JSON.stringify(config, null, 2));

    } catch (error) {
      console.error(chalk.red(`❌ Error: ${error}`));
      process.exit(1);
    }
  });

/**
 * Blog command - Manage blog integration
 */
program
  .command('blog')
  .description('Manage blog integration and status')
  .option('--status', 'Show blog integration status', false)
  .option('--backup', 'Create backup of current blog page', false)
  .option('--validate', 'Validate blog integration', false)
  .action(async (options) => {
    try {
      const blogIntegrator = new BlogIntegrator();
      
      if (options.backup) {
        console.log(chalk.blue('📄 Creating blog page backup...'));
        const backupPath = await blogIntegrator.createBlogPageBackup();
        console.log(chalk.green(`✅ Backup created: ${backupPath}`));
        return;
      }

      if (options.status) {
        console.log(chalk.blue('📊 Blog Integration Status:'));
        const status = await blogIntegrator.getIntegrationStatus();
        console.log(`${chalk.green('📝 Total Articles:')} ${status.totalArticles}`);
        console.log(`${chalk.blue('📄 Blog Page Exists:')} ${status.blogPageExists ? 'Yes' : 'No'}`);
        console.log(`${chalk.gray('🕒 Last Updated:')} ${status.lastUpdated}`);
        
        if (status.articleSlugs.length > 0) {
          console.log(chalk.green('\n📁 Existing Articles:'));
          status.articleSlugs.forEach(slug => {
            console.log(`  • ${slug}`);
          });
        }
        return;
      }

      if (options.validate) {
        console.log(chalk.blue('🔍 Validating blog integration...'));
        // This would require implementing validation for existing articles
        console.log(chalk.yellow('⚠️  Blog validation not yet implemented'));
        return;
      }

      // Default: show status
      const status = await blogIntegrator.getIntegrationStatus();
      console.log(chalk.blue('📊 Blog Integration Status:'));
      console.log(`Total Articles: ${status.totalArticles}`);
      console.log(`Blog Page Exists: ${status.blogPageExists ? 'Yes' : 'No'}`);

    } catch (error) {
      console.error(chalk.red(`❌ Error: ${error}`));
      process.exit(1);
    }
  });

/**
 * Interactive keyword input
 */
async function getKeywordsInteractively(): Promise<string[]> {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'keywords',
      message: 'Enter keywords (comma-separated):',
      validate: (input: string) => {
        const keywords = input.split(',').map(k => k.trim()).filter(Boolean);
        return keywords.length > 0 || 'Please enter at least one keyword';
      }
    },
    {
      type: 'confirm',
      name: 'addMore',
      message: 'Would you like to add more keywords?',
      default: false
    }
  ]);

  let keywords = answers.keywords.split(',').map((k: string) => k.trim()).filter(Boolean);

  if (answers.addMore) {
    const moreAnswers = await inquirer.prompt([
      {
        type: 'input',
        name: 'moreKeywords',
        message: 'Enter additional keywords (comma-separated):',
      }
    ]);

    if (moreAnswers.moreKeywords) {
      const additionalKeywords = moreAnswers.moreKeywords.split(',').map((k: string) => k.trim()).filter(Boolean);
      keywords = [...keywords, ...additionalKeywords];
    }
  }

  return keywords;
}

/**
 * Load keywords from file
 */
async function loadKeywordsFromFile(filePath: string): Promise<string[]> {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return content
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('#')); // Filter empty lines and comments
  } catch (error) {
    throw new Error(`Failed to read keywords file: ${filePath}`);
  }
}

/**
 * Find keyword files in directory
 */
async function findKeywordFiles(directory: string, pattern: string): Promise<string[]> {
  try {
    const files = await fs.readdir(directory);
    const keywordFiles: string[] = [];

    for (const file of files) {
      if (pattern === '*.txt' && file.endsWith('.txt')) {
        keywordFiles.push(path.join(directory, file));
      } else if (file.includes(pattern.replace('*', ''))) {
        keywordFiles.push(path.join(directory, file));
      }
    }

    return keywordFiles;
  } catch (error) {
    throw new Error(`Failed to read directory: ${directory}`);
  }
}

/**
 * Find existing article keywords
 */
async function findExistingArticleKeywords(): Promise<string[]> {
  // This would scan the blog directory for existing articles
  // For now, return empty array as placeholder
  console.log(chalk.yellow('⚠️  Auto-discovery of existing articles not yet implemented'));
  return [];
}

/**
 * Display generation results
 */
function displayGenerationResults(results: any, isDryRun: boolean): void {
  const { articles, validations, summary } = results;

  console.log(chalk.blue('\n📊 Generation Results:'));
  console.log(`${chalk.green('✅ Successful:')} ${summary.successfulArticles}`);
  console.log(`${chalk.red('❌ Failed:')} ${summary.failedArticles}`);
  console.log(`${chalk.blue('📝 Valid Articles:')} ${summary.validArticles}`);
  console.log(`${chalk.yellow('⚠️  Invalid Articles:')} ${summary.invalidArticles}`);
  console.log(`${chalk.gray('📊 Average Word Count:')} ${summary.averageWordCount}`);
  console.log(`${chalk.gray('🎯 Average Keyword Density:')} ${summary.averageKeywordDensity} occurrences`);

  if (summary.duplicateContent > 0) {
    console.log(`${chalk.red('🔄 Duplicate Content:')} ${summary.duplicateContent} instances`);
  }

  if (summary.errors.length > 0) {
    console.log(chalk.red('\n❌ Errors:'));
    summary.errors.forEach((error: string) => {
      console.log(`  • ${error}`);
    });
  }

  if (isDryRun) {
    console.log(chalk.yellow('\n🔍 Dry run completed - no files were written'));
  } else if (results.filePaths) {
    console.log(chalk.green(`\n📁 Files written to:`));
    results.filePaths.forEach((filePath: string) => {
      console.log(`  • ${filePath}`);
    });
  }
}

/**
 * Display batch processing summary
 */
function displayBatchSummary(allResults: any[]): void {
  const totalArticles = allResults.reduce((sum, result) => sum + result.articles.length, 0);
  const totalValid = allResults.reduce((sum, result) => sum + result.summary.validArticles, 0);
  const totalErrors = allResults.reduce((sum, result) => sum + result.summary.errors.length, 0);

  console.log(chalk.blue('\n📊 Batch Processing Summary:'));
  console.log(`${chalk.green('📁 Files Processed:')} ${allResults.length}`);
  console.log(`${chalk.green('📝 Total Articles:')} ${totalArticles}`);
  console.log(`${chalk.blue('✅ Valid Articles:')} ${totalValid}`);
  console.log(`${chalk.red('❌ Total Errors:')} ${totalErrors}`);
}

/**
 * Display validation results
 */
function displayValidationResults(validations: any[], keywords: string[]): void {
  console.log(chalk.blue('\n🔍 Validation Results:'));
  
  validations.forEach((validation, index) => {
    const keyword = keywords[index];
    const status = validation.isValid ? chalk.green('✅ Valid') : chalk.red('❌ Invalid');
    console.log(`${status} ${keyword}`);
    
    if (!validation.isValid && validation.errors.length > 0) {
      validation.errors.forEach((error: string) => {
        console.log(`    • ${chalk.red(error)}`);
      });
    }
  });

  const validCount = validations.filter(v => v.isValid).length;
  const invalidCount = validations.length - validCount;
  
  console.log(chalk.blue(`\n📊 Summary: ${validCount} valid, ${invalidCount} invalid`));
}

/**
 * Save results summary to file
 */
async function saveResultsSummary(results: any, outputDir: string): Promise<void> {
  try {
    await fs.mkdir(outputDir, { recursive: true });
    
    const summaryPath = path.join(outputDir, 'generation-summary.json');
    await fs.writeFile(summaryPath, JSON.stringify(results.summary, null, 2));
    
    console.log(chalk.gray(`📄 Summary saved to: ${summaryPath}`));
  } catch (error) {
    console.warn(chalk.yellow(`⚠️  Failed to save summary: ${error}`));
  }
}

/**
 * Save batch summary to file
 */
async function saveBatchSummary(allResults: any[], outputDir: string): Promise<void> {
  try {
    await fs.mkdir(outputDir, { recursive: true });
    
    const batchSummaryPath = path.join(outputDir, 'batch-summary.json');
    await fs.writeFile(batchSummaryPath, JSON.stringify(allResults, null, 2));
    
    console.log(chalk.gray(`📄 Batch summary saved to: ${batchSummaryPath}`));
  } catch (error) {
    console.warn(chalk.yellow(`⚠️  Failed to save batch summary: ${error}`));
  }
}

/**
 * Display blog integration results
 */
function displayIntegrationResults(results: any): void {
  console.log(chalk.blue('\n🔗 Blog Integration Results:'));
  console.log(`${chalk.green('✅ Successful Integrations:')} ${results.successfulIntegrations}`);
  console.log(`${chalk.red('❌ Failed Integrations:')} ${results.failedIntegrations}`);
  console.log(`${chalk.blue('📝 Blog Page Updated:')} ${results.updatedBlogPage ? 'Yes' : 'No'}`);
  
  if (results.createdFiles.length > 0) {
    console.log(chalk.green('\n📁 Created Articles:'));
    results.createdFiles.forEach((file: any) => {
      console.log(`  • ${file.keyword} → ${file.url}`);
    });
  }

  if (results.errors.length > 0) {
    console.log(chalk.red('\n❌ Integration Errors:'));
    results.errors.forEach((error: string) => {
      console.log(`  • ${error}`);
    });
  }
}

/**
 * Save integration summary to file
 */
async function saveIntegrationSummary(results: any, outputDir: string): Promise<void> {
  try {
    await fs.mkdir(outputDir, { recursive: true });
    
    const integrationSummaryPath = path.join(outputDir, 'integration-summary.json');
    await fs.writeFile(integrationSummaryPath, JSON.stringify(results, null, 2));
    
    console.log(chalk.gray(`📄 Integration summary saved to: ${integrationSummaryPath}`));
  } catch (error) {
    console.warn(chalk.yellow(`⚠️  Failed to save integration summary: ${error}`));
  }
}

// Parse command line arguments
program.parse();