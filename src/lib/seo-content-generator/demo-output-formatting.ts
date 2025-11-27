/**
 * Demo script showing how NextJSComponentGenerator and FileStructureManager work together
 * This demonstrates the output formatting system capabilities
 */

import { NextJSComponentGenerator } from './nextjs-component-generator';
import { FileStructureManager } from './file-structure-manager';
import { ArticleStructure, SEOMetadata, InternalLink } from './types';

// Create sample article structure
const sampleArticle: ArticleStructure = {
  title: 'Golden Retriever Care Guide: Complete Health and Training Tips',
  summary: 'Comprehensive guide covering Golden Retriever care, health, training, and nutrition for optimal pet wellness.',
  sections: {
    introduction: 'Golden Retrievers are beloved family dogs known for their friendly temperament and intelligence. This guide provides essential care information for Golden Retriever owners.',
    coreContent: 'Golden Retrievers require regular exercise, proper nutrition, and consistent training. They are prone to certain health conditions like hip dysplasia and heart issues that owners should monitor.',
    useCases: [
      'Daily exercise routines for Golden Retrievers',
      'Proper grooming techniques for their double coat',
      'Training methods for obedience and socialization',
      'Health monitoring and preventive care schedules'
    ],
    faq: [
      {
        question: 'How much exercise does a Golden Retriever need daily?',
        answer: 'Golden Retrievers need at least 60-90 minutes of exercise daily, including walks, fetch, and mental stimulation activities.'
      },
      {
        question: 'What are common health issues in Golden Retrievers?',
        answer: 'Common health concerns include hip dysplasia, elbow dysplasia, heart conditions, eye problems, and certain cancers.'
      },
      {
        question: 'How often should I groom my Golden Retriever?',
        answer: 'Golden Retrievers should be brushed 2-3 times per week, with daily brushing during shedding seasons.'
      },
      {
        question: 'What is the best diet for a Golden Retriever?',
        answer: 'High-quality dog food with appropriate protein levels, avoiding overfeeding to prevent obesity and joint stress.'
      },
      {
        question: 'At what age should I start training my Golden Retriever?',
        answer: 'Training should begin as early as 8 weeks old with basic commands and socialization.'
      }
    ],
    conclusion: 'Golden Retrievers make wonderful companions when provided with proper care, exercise, and training. Regular veterinary checkups and attention to their specific needs will ensure a happy, healthy life.'
  },
  metadata: {
    title: 'Golden Retriever Care Guide: Complete Health and Training Tips | PetShard',
    description: 'Expert Golden Retriever care guide covering health, training, nutrition, and grooming. Essential tips for Golden Retriever owners.',
    keywords: ['golden retriever care', 'golden retriever health', 'golden retriever training', 'dog care', 'pet health'],
    canonicalUrl: 'https://petshard.com/blog/golden-retriever-care-guide'
  } as SEOMetadata,
  internalLinks: [
    {
      text: 'Breed Identification Tool',
      url: '/breed-identification',
      context: 'Identify your dog\'s breed mix'
    },
    {
      text: 'Pet Health Center',
      url: '/health-center',
      context: 'Get health advice for your Golden Retriever'
    },
    {
      text: 'Pet Care Guide',
      url: '/pet-care-guide',
      context: 'Personalized care recommendations'
    }
  ] as InternalLink[]
};

/**
 * Demonstrate the output formatting system
 */
export function demonstrateOutputFormatting() {
  console.log('🚀 SEO Content Generator - Output Formatting System Demo\n');

  // Initialize components
  const componentGenerator = new NextJSComponentGenerator('https://petshard.com', 'PetShard');
  const fileManager = new FileStructureManager();

  const keyword = 'golden retriever care';

  console.log('📝 Generating Next.js Component...');
  
  // Generate the complete article
  const generatedArticle = componentGenerator.generateArticle(sampleArticle, keyword);
  
  console.log(`✅ Generated article for keyword: "${generatedArticle.keyword}"`);
  console.log(`📊 Word count: ${generatedArticle.wordCount} words`);
  console.log(`🎯 Keyword density: ${generatedArticle.keywordDensity} occurrences`);
  console.log(`📁 File path: ${generatedArticle.filePath}\n`);

  console.log('🗂️  File Structure Management...');
  
  // Generate file paths
  const slug = fileManager.generateSlug(keyword);
  const directoryPath = fileManager.generateDirectoryPath(keyword);
  const urlPath = fileManager.generateUrlPath(keyword);
  
  console.log(`🔗 URL slug: ${slug}`);
  console.log(`📂 Directory: ${directoryPath}`);
  console.log(`🌐 URL path: ${urlPath}`);
  console.log(`📄 Page file: ${fileManager.generatePageFilePath(keyword)}`);
  console.log(`🔧 Types file: ${fileManager.generateTypesFilePath(keyword)}`);
  console.log(`📋 Data file: ${fileManager.generateDataFilePath(keyword)}`);
  console.log(`📖 README file: ${fileManager.generateReadmeFilePath(keyword)}\n`);

  console.log('🎨 Component Features:');
  console.log('✅ TypeScript React component with proper imports');
  console.log('✅ SEO metadata with Open Graph and Twitter Cards');
  console.log('✅ Structured data markup for search engines');
  console.log('✅ Responsive Tailwind CSS styling');
  console.log('✅ Internal linking to platform features');
  console.log('✅ FAQ section with expandable content');
  console.log('✅ Use cases grid layout');
  console.log('✅ Related tools section\n');

  console.log('📁 File Structure Features:');
  console.log('✅ Automatic directory creation');
  console.log('✅ Multiple file generation (page.tsx, types.ts, data.ts, README.md)');
  console.log('✅ Batch processing support');
  console.log('✅ Directory structure validation');
  console.log('✅ Existing article detection');
  console.log('✅ URL slug generation with special character handling\n');

  console.log('🔍 Sample Component Code Preview:');
  console.log('─'.repeat(60));
  console.log(generatedArticle.componentCode.substring(0, 500) + '...\n');

  console.log('✨ Output formatting system is ready for production use!');
  
  return {
    generatedArticle,
    fileManager,
    componentGenerator
  };
}

// Export for testing and integration
export { sampleArticle };