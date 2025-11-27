import { demonstrateOutputFormatting, sampleArticle } from '../demo-output-formatting';

describe('Output Formatting Demo', () => {
  it('should demonstrate the complete output formatting system', () => {
    // Capture console output
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    const result = demonstrateOutputFormatting();

    expect(result).toBeDefined();
    expect(result.generatedArticle).toBeDefined();
    expect(result.fileManager).toBeDefined();
    expect(result.componentGenerator).toBeDefined();

    // Verify the generated article
    expect(result.generatedArticle.keyword).toBe('golden retriever care');
    expect(result.generatedArticle.wordCount).toBeGreaterThan(0);
    expect(result.generatedArticle.keywordDensity).toBeGreaterThan(0);
    expect(result.generatedArticle.componentCode).toContain('function GoldenRetrieverCareGuideContent()');
    expect(result.generatedArticle.filePath).toBe('src/app/blog/golden-retriever-care/page.tsx');

    // Verify console output was called
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });

  it('should have valid sample article structure', () => {
    expect(sampleArticle.title).toContain('Golden Retriever');
    expect(sampleArticle.sections.faq).toHaveLength(5);
    expect(sampleArticle.sections.useCases).toHaveLength(4);
    expect(sampleArticle.internalLinks).toHaveLength(3);
    expect(sampleArticle.metadata.keywords).toContain('golden retriever care');
  });
});