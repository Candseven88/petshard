#!/usr/bin/env node

/**
 * Example script demonstrating blog integration functionality
 * This shows how to use the SEO Content Generator with blog integration
 */

const { SEOContentGenerator } = require('../dist/lib/seo-content-generator/seo-content-generator');
const { BlogIntegrator } = require('../dist/lib/seo-content-generator/blog-integrator');

async function runIntegrationExample() {
  console.log('🚀 SEO Content Generator - Blog Integration Example\n');

  try {
    // Step 1: Initialize components
    console.log('1. Initializing SEO Content Generator...');
    const generator = new SEOContentGenerator();
    const blogIntegrator = new BlogIntegrator();

    // Step 2: Define sample keywords
    const sampleKeywords = [
      'dog training basics',
      'cat health symptoms',
      'pet nutrition guide'
    ];

    console.log(`2. Generating articles for keywords: ${sampleKeywords.join(', ')}`);

    // Step 3: Generate articles
    const keywordInput = {
      keywords: sampleKeywords,
      contentFocus: 'care'
    };

    const results = await generator.generateBatchArticles(keywordInput);
    
    console.log(`✅ Generated ${results.articles.length} articles`);
    console.log(`📊 Summary: ${results.summary.validArticles} valid, ${results.summary.invalidArticles} invalid`);

    // Step 4: Create blog page backup
    console.log('\n3. Creating blog page backup...');
    const backupPath = await blogIntegrator.createBlogPageBackup();
    console.log(`📄 Backup created: ${backupPath}`);

    // Step 5: Integrate articles into blog system
    console.log('\n4. Integrating articles into blog system...');
    const integrationResults = await blogIntegrator.integrateArticles(results.articles);
    
    console.log(`✅ Integration completed:`);
    console.log(`   - Successful: ${integrationResults.successfulIntegrations}`);
    console.log(`   - Failed: ${integrationResults.failedIntegrations}`);
    console.log(`   - Blog page updated: ${integrationResults.updatedBlogPage ? 'Yes' : 'No'}`);

    // Step 6: Validate integration
    console.log('\n5. Validating integration...');
    const validationResults = await blogIntegrator.validateIntegration(results.articles);
    
    console.log(`🔍 Validation results:`);
    console.log(`   - Valid articles: ${validationResults.validatedArticles}`);
    console.log(`   - Missing files: ${validationResults.missingFiles.length}`);
    console.log(`   - Invalid structures: ${validationResults.invalidStructures.length}`);

    // Step 7: Show integration status
    console.log('\n6. Current integration status:');
    const status = await blogIntegrator.getIntegrationStatus();
    console.log(`   - Total articles: ${status.totalArticles}`);
    console.log(`   - Blog page exists: ${status.blogPageExists ? 'Yes' : 'No'}`);
    console.log(`   - Last updated: ${status.lastUpdated}`);

    console.log('\n✅ Integration example completed successfully!');
    console.log('\n📝 Generated files:');
    integrationResults.createdFiles.forEach(file => {
      console.log(`   • ${file.keyword} → ${file.url}`);
    });

  } catch (error) {
    console.error('❌ Integration example failed:', error);
    process.exit(1);
  }
}

// Run the example if this script is executed directly
if (require.main === module) {
  runIntegrationExample();
}

module.exports = { runIntegrationExample };