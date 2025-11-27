import { FileStructureManager } from '../file-structure-manager';
import { GeneratedArticle, ArticleStructure, SEOMetadata } from '../types';
import * as fs from 'fs';
import * as path from 'path';

// Mock fs module
jest.mock('fs', () => ({
  promises: {
    mkdir: jest.fn(),
    writeFile: jest.fn(),
    stat: jest.fn(),
    readdir: jest.fn()
  }
}));

describe('FileStructureManager', () => {
  let manager: FileStructureManager;
  let mockArticle: GeneratedArticle;
  const mockProjectRoot = '/test/project';

  beforeEach(() => {
    manager = new FileStructureManager(mockProjectRoot);
    
    mockArticle = {
      keyword: 'dog training',
      content: {
        title: 'Dog Training Guide',
        summary: 'Complete guide to dog training',
        sections: {
          introduction: 'Introduction to dog training',
          coreContent: 'Core training techniques',
          useCases: ['Basic commands', 'House training'],
          faq: [
            { question: 'How long does training take?', answer: 'It varies by dog.' }
          ],
          conclusion: 'Training requires patience'
        },
        metadata: {
          title: 'Dog Training Guide',
          description: 'Learn dog training techniques',
          keywords: ['dog training', 'pet training']
        } as SEOMetadata,
        internalLinks: []
      } as ArticleStructure,
      componentCode: 'mock component code',
      filePath: 'src/app/blog/dog-training/page.tsx',
      wordCount: 150,
      keywordDensity: 8
    };

    // Reset mocks
    jest.clearAllMocks();
  });

  describe('generateSlug', () => {
    it('should generate proper URL slugs', () => {
      expect(manager.generateSlug('Dog Training Tips')).toBe('dog-training-tips');
      expect(manager.generateSlug('Cat Care & Health')).toBe('cat-care-health');
      expect(manager.generateSlug('Pet-Friendly Home')).toBe('pet-friendly-home');
    });

    it('should handle special characters', () => {
      expect(manager.generateSlug('Pet Care (Advanced)')).toBe('pet-care-advanced');
      expect(manager.generateSlug('Dog/Cat Nutrition')).toBe('dogcat-nutrition');
    });

    it('should handle multiple spaces and hyphens', () => {
      expect(manager.generateSlug('Pet   Care   Guide')).toBe('pet-care-guide');
      expect(manager.generateSlug('Pet---Care---Guide')).toBe('pet-care-guide');
    });

    it('should trim leading and trailing hyphens', () => {
      expect(manager.generateSlug('-pet care-')).toBe('pet-care');
    });
  });

  describe('path generation', () => {
    it('should generate correct directory path', () => {
      const result = manager.generateDirectoryPath('dog training');
      expect(result).toBe(path.join(mockProjectRoot, 'src', 'app', 'blog', 'dog-training'));
    });

    it('should generate correct page file path', () => {
      const result = manager.generatePageFilePath('dog training');
      expect(result).toBe(path.join(mockProjectRoot, 'src', 'app', 'blog', 'dog-training', 'page.tsx'));
    });

    it('should generate correct types file path', () => {
      const result = manager.generateTypesFilePath('dog training');
      expect(result).toBe(path.join(mockProjectRoot, 'src', 'app', 'blog', 'dog-training', 'types.ts'));
    });

    it('should generate correct data file path', () => {
      const result = manager.generateDataFilePath('dog training');
      expect(result).toBe(path.join(mockProjectRoot, 'src', 'app', 'blog', 'dog-training', 'data.ts'));
    });

    it('should generate correct README file path', () => {
      const result = manager.generateReadmeFilePath('dog training');
      expect(result).toBe(path.join(mockProjectRoot, 'src', 'app', 'blog', 'dog-training', 'README.md'));
    });

    it('should generate correct components directory path', () => {
      const result = manager.generateComponentsDirectoryPath('dog training');
      expect(result).toBe(path.join(mockProjectRoot, 'src', 'app', 'blog', 'dog-training', 'components'));
    });
  });

  describe('createDirectoryStructure', () => {
    it('should create main and components directories', async () => {
      const mockMkdir = fs.promises.mkdir as jest.Mock;
      mockMkdir.mockResolvedValue(undefined);

      await manager.createDirectoryStructure('dog training');

      expect(mockMkdir).toHaveBeenCalledTimes(2);
      expect(mockMkdir).toHaveBeenCalledWith(
        path.join(mockProjectRoot, 'src', 'app', 'blog', 'dog-training'),
        { recursive: true }
      );
      expect(mockMkdir).toHaveBeenCalledWith(
        path.join(mockProjectRoot, 'src', 'app', 'blog', 'dog-training', 'components'),
        { recursive: true }
      );
    });

    it('should handle directory creation errors', async () => {
      const mockMkdir = fs.promises.mkdir as jest.Mock;
      mockMkdir.mockRejectedValue(new Error('Permission denied'));

      await expect(manager.createDirectoryStructure('dog training'))
        .rejects.toThrow('Failed to create directory structure for dog training');
    });
  });

  describe('writeArticleFiles', () => {
    it('should write all required files', async () => {
      const mockMkdir = fs.promises.mkdir as jest.Mock;
      const mockWriteFile = fs.promises.writeFile as jest.Mock;
      
      mockMkdir.mockResolvedValue(undefined);
      mockWriteFile.mockResolvedValue(undefined);

      await manager.writeArticleFiles(mockArticle);

      expect(mockWriteFile).toHaveBeenCalledTimes(4);
      
      // Check that page.tsx is written
      expect(mockWriteFile).toHaveBeenCalledWith(
        expect.stringContaining('page.tsx'),
        'mock component code',
        'utf8'
      );

      // Check that types.ts is written
      expect(mockWriteFile).toHaveBeenCalledWith(
        expect.stringContaining('types.ts'),
        expect.stringContaining('export interface'),
        'utf8'
      );

      // Check that data.ts is written
      expect(mockWriteFile).toHaveBeenCalledWith(
        expect.stringContaining('data.ts'),
        expect.stringContaining('export const articleData'),
        'utf8'
      );

      // Check that README.md is written
      expect(mockWriteFile).toHaveBeenCalledWith(
        expect.stringContaining('README.md'),
        expect.stringContaining('# DogTrainingGuide'),
        'utf8'
      );
    });

    it('should handle file write errors', async () => {
      const mockMkdir = fs.promises.mkdir as jest.Mock;
      const mockWriteFile = fs.promises.writeFile as jest.Mock;
      
      mockMkdir.mockResolvedValue(undefined);
      mockWriteFile.mockRejectedValue(new Error('Disk full'));

      await expect(manager.writeArticleFiles(mockArticle))
        .rejects.toThrow('Failed to write article files for dog training');
    });
  });

  describe('writeBatchArticles', () => {
    it('should write multiple articles', async () => {
      const mockMkdir = fs.promises.mkdir as jest.Mock;
      const mockWriteFile = fs.promises.writeFile as jest.Mock;
      
      mockMkdir.mockResolvedValue(undefined);
      mockWriteFile.mockResolvedValue(undefined);

      const articles = [mockArticle, { ...mockArticle, keyword: 'cat care' }];
      await manager.writeBatchArticles(articles);

      // Should create directories for both articles
      expect(mockMkdir).toHaveBeenCalledTimes(4); // 2 articles × 2 directories each
      
      // Should write files for both articles
      expect(mockWriteFile).toHaveBeenCalledTimes(8); // 2 articles × 4 files each
    });
  });

  describe('articleExists', () => {
    it('should return true when article directory exists', async () => {
      const mockStat = fs.promises.stat as jest.Mock;
      mockStat.mockResolvedValue({ isDirectory: () => true });

      const result = await manager.articleExists('dog training');
      expect(result).toBe(true);
    });

    it('should return false when article directory does not exist', async () => {
      const mockStat = fs.promises.stat as jest.Mock;
      mockStat.mockRejectedValue(new Error('ENOENT'));

      const result = await manager.articleExists('dog training');
      expect(result).toBe(false);
    });

    it('should return false when path exists but is not a directory', async () => {
      const mockStat = fs.promises.stat as jest.Mock;
      mockStat.mockResolvedValue({ isDirectory: () => false });

      const result = await manager.articleExists('dog training');
      expect(result).toBe(false);
    });
  });

  describe('getExistingArticles', () => {
    it('should return list of existing article directories', async () => {
      const mockReaddir = fs.promises.readdir as jest.Mock;
      mockReaddir.mockResolvedValue([
        { name: 'dog-training', isDirectory: () => true },
        { name: 'cat-care', isDirectory: () => true },
        { name: 'page.tsx', isDirectory: () => false }
      ]);

      const result = await manager.getExistingArticles();
      expect(result).toEqual(['dog-training', 'cat-care']);
    });

    it('should return empty array when blog directory does not exist', async () => {
      const mockReaddir = fs.promises.readdir as jest.Mock;
      mockReaddir.mockRejectedValue(new Error('ENOENT'));

      const result = await manager.getExistingArticles();
      expect(result).toEqual([]);
    });
  });

  describe('validateDirectoryStructure', () => {
    it('should return true for valid directory structure', async () => {
      const mockStat = fs.promises.stat as jest.Mock;
      mockStat.mockResolvedValue({ isDirectory: () => true, isFile: () => true });

      const result = await manager.validateDirectoryStructure('dog training');
      expect(result).toBe(true);
    });

    it('should return false for invalid directory structure', async () => {
      const mockStat = fs.promises.stat as jest.Mock;
      mockStat.mockRejectedValue(new Error('ENOENT'));

      const result = await manager.validateDirectoryStructure('dog training');
      expect(result).toBe(false);
    });
  });

  describe('utility methods', () => {
    it('should generate correct relative path', () => {
      const result = manager.getRelativePath('dog training');
      expect(result).toBe('src/app/blog/dog-training');
    });

    it('should generate correct URL path', () => {
      const result = manager.generateUrlPath('dog training');
      expect(result).toBe('/blog/dog-training');
    });
  });

  describe('file content generation', () => {
    it('should generate types file with proper interfaces', async () => {
      const mockMkdir = fs.promises.mkdir as jest.Mock;
      const mockWriteFile = fs.promises.writeFile as jest.Mock;
      
      mockMkdir.mockResolvedValue(undefined);
      mockWriteFile.mockResolvedValue(undefined);

      await manager.writeArticleFiles(mockArticle);

      const typesCall = mockWriteFile.mock.calls.find(call => 
        call[0].includes('types.ts')
      );
      
      expect(typesCall[1]).toContain('export interface DogTrainingGuideData');
      expect(typesCall[1]).toContain('export interface RelatedTool');
      expect(typesCall[1]).toContain('export interface FAQItem');
    });

    it('should generate data file with article content', async () => {
      const mockMkdir = fs.promises.mkdir as jest.Mock;
      const mockWriteFile = fs.promises.writeFile as jest.Mock;
      
      mockMkdir.mockResolvedValue(undefined);
      mockWriteFile.mockResolvedValue(undefined);

      await manager.writeArticleFiles(mockArticle);

      const dataCall = mockWriteFile.mock.calls.find(call => 
        call[0].includes('data.ts')
      );
      
      expect(dataCall[1]).toContain('export const articleData');
      expect(dataCall[1]).toContain('Dog Training Guide');
      expect(dataCall[1]).toContain('export const faqItems');
    });

    it('should generate README with article information', async () => {
      const mockMkdir = fs.promises.mkdir as jest.Mock;
      const mockWriteFile = fs.promises.writeFile as jest.Mock;
      
      mockMkdir.mockResolvedValue(undefined);
      mockWriteFile.mockResolvedValue(undefined);

      await manager.writeArticleFiles(mockArticle);

      const readmeCall = mockWriteFile.mock.calls.find(call => 
        call[0].includes('README.md')
      );
      
      expect(readmeCall[1]).toContain('# DogTrainingGuide');
      expect(readmeCall[1]).toContain('Word Count**: 150 words');
      expect(readmeCall[1]).toContain('Keyword Density**: 8 occurrences');
    });
  });
});