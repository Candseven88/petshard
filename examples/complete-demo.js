#!/usr/bin/env node

/**
 * Complete Demo of SEO Content Generator with Blog Integration
 * This demonstrates the full workflow from keyword input to blog integration
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 SEO Content Generator - Complete Demo\n');

// Demo configuration
const demoKeywords = [
  'pet grooming tips',
  'cat health symptoms',
  'dog training basics'
];

const keywordFile = 'keywords/demo-keywords.txt';

async function runCompleteDemo() {
  try {
    console.log('📝 Step 1: Creating demo keyword file...');
    
    // Create demo keyword file
    const keywordContent = [
      '# Demo Keywords for SEO Content Generator',
      '# This file demonstrates the CLI functionality',
      '',
      ...demoKeywords
    ].join('\n');
    
    fs.writeFileSync(keywordFile, keywordContent);
    console.log(`✅ Created keyword file: ${keywordFile}`);

    console.log('\n📊 Step 2: Checking blog integration status...');
    execSync('node bin/seo-cli blog --status', { stdio: 'inherit' });

    console.log('\n🔍 Step 3: Performing dry run generation...');
    execSync(`node bin/seo-cli generate -f ${keywordFile} --dry-run`, { stdio: 'inherit' });

    console.log('\n📄 Step 4: Creating blog page backup...');
    execSync('node bin/seo-cli blog --backup', { stdio: 'inherit' });

    console.log('\n🎯 Step 5: Generating articles with blog integration...');
    console.log('⚠️  This will modify the blog page. Backup has been created.');
    
    // Uncomment the next line to actually generate and integrate articles
    // execSync(`node bin/seo-cli generate -f ${keywordFile} --write-files --integrate-blog`, { stdio: 'inherit' });
    
    console.log('🔒 Skipping actual generation to preserve blog state.');
    console.log('To run actual generation, uncomment the line in the demo script.');

    console.log('\n📋 Step 6: Showing configuration...');
    execSync('node bin/seo-cli config --show', { stdio: 'inherit' });

    console.log('\n🔍 Step 7: Validating existing articles...');
    execSync('node bin/seo-cli validate -k "pet care,dog training"', { stdio: 'inherit' });

    console.log('\n✅ Demo completed successfully!');
    console.log('\n📚 Available CLI Commands:');
    console.log('  • npm run seo:generate -- -k "keyword" --write-files');
    console.log('  • npm run seo:batch -- -d ./keywords --integrate-blog');
    console.log('  • npm run seo:validate -- -f keywords/file.txt');
    console.log('  • npm run seo:blog -- --status');
    console.log('  • npm run seo:config -- --show');

    console.log('\n🔗 Integration Features:');
    console.log('  • Automatic blog page updates');
    console.log('  • Smart image selection');
    console.log('  • Tag generation');
    console.log('  • Backup creation');
    console.log('  • Validation and error handling');

  } catch (error) {
    console.error('❌ Demo failed:', error.message);
    process.exit(1);
  }
}

// Run the demo
runCompleteDemo();