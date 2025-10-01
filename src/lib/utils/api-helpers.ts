/**
 * Helper functions for API interactions
 */

/**
 * Process the response from Bigmodel API for breed identification
 * This function extracts breed information from the API response text
 * 
 * @param apiResponse - The raw API response from Bigmodel
 * @returns An object containing an array of breeds with confidence scores
 */
export function processBreedIdentificationResponse(apiResponse: any): { breeds: { breed: string, confidence: number }[] } {
  try {
    console.log('Processing API response structure:', {
      hasResponse: !!apiResponse,
      hasChoices: !!(apiResponse && apiResponse.choices),
      choicesLength: apiResponse?.choices?.length,
      hasMessage: !!(apiResponse?.choices?.[0]?.message)
    });
    
    // Check if the API response has the expected structure
    if (!apiResponse || !apiResponse.choices || !apiResponse.choices[0] || !apiResponse.choices[0].message) {
      console.error('Invalid API response structure:', apiResponse);
      return {
        breeds: [
          { breed: "Unknown", confidence: 1.0 }
        ]
      };
    }

    // Extract the content from the API response
    const responseText = apiResponse.choices[0].message.content;
    
    if (!responseText || typeof responseText !== 'string') {
      console.error('Invalid response content:', responseText);
      return {
        breeds: [
          { breed: "Unknown", confidence: 1.0 }
        ]
      };
    }
    
    console.log('Extracted text from API response:', responseText);
    
    // Parse the response text to extract breed information
    const breeds = parseBreedInformation(responseText);
    
    // Ensure we have at least one breed
    if (breeds.length === 0) {
      console.warn('No breeds found in the response, returning Unknown');
      return {
        breeds: [
          { breed: "Unknown", confidence: 1.0 }
        ]
      };
    }
    
    console.log(`Found ${breeds.length} breeds:`, breeds);
    return {
      breeds: breeds
    };
  } catch (error) {
    console.error('Error processing API response:', error);
    // Return a default response if parsing fails
    return {
      breeds: [
        { breed: "Unknown", confidence: 1.0 }
      ]
    };
  }
}

/**
 * Parse breed information from the API response text
 * This function handles various formats that the model might return
 * 
 * @param text - The text content from the API response
 * @returns An array of breeds with confidence scores
 */
function parseBreedInformation(text: string): { breed: string, confidence: number }[] {
  try {
    console.log('Parsing breed information from text:', text);
    
    // 尝试多种正则表达式匹配模式，以适应不同的输出格式
    
    // 1. 尝试匹配格式: "1. [物种名称] (XX%)" 或 "1. 物种名称 (XX%)"
    const numberedListRegex = /\d+\.\s+(?:\[([^\]]+)\]|\s*([^(]+))\s*\((\d+(?:\.\d+)?)%\)/g;
    const breeds: { breed: string, confidence: number }[] = [];
    
    let match;
    while ((match = numberedListRegex.exec(text)) !== null) {
      const breed = (match[1] || match[2]).trim();
      const confidence = parseFloat(match[3]) / 100;
      
      breeds.push({ breed, confidence });
      console.log(`Found breed with numbered list regex: ${breed} (${confidence})`);
    }
    
    // 2. 如果没有找到匹配，尝试匹配格式: "物种名称: XX%" 或 "物种名称 - XX%"
    if (breeds.length === 0) {
      console.log('No breeds found with primary regex, trying alternative methods');
      
      const colonDashRegex = /([^:]+)[:|-]\s*(\d+(?:\.\d+)?)%/g;
      while ((match = colonDashRegex.exec(text)) !== null) {
        const breed = match[1].trim();
        const confidence = parseFloat(match[2]) / 100;
        breeds.push({ breed, confidence });
        console.log(`Found breed with colon/dash regex: ${breed} with confidence ${confidence}`);
      }
    }
    
    // 3. 如果还是没有找到匹配，尝试匹配格式: "物种名称 (XX%)"
    if (breeds.length === 0) {
      const parenthesisRegex = /([^(]+)\s*\((\d+(?:\.\d+)?)%\)/g;
      while ((match = parenthesisRegex.exec(text)) !== null) {
        const breed = match[1].trim();
        const confidence = parseFloat(match[2]) / 100;
        breeds.push({ breed, confidence });
        console.log(`Found breed with parenthesis regex: ${breed} with confidence ${confidence}`);
      }
    }
    
    // 4. 尝试从文本中提取物种名称和数字
    if (breeds.length === 0) {
      console.log('Trying line-by-line extraction');
      const lines = text.split('\n');
      
      for (const line of lines) {
        // 尝试找到包含物种名称和百分比的行
        if (line.includes('%')) {
          // 尝试提取物种名称（通常是首字母大写的词组）和百分比
          const speciesMatch = line.match(/([A-Z][a-z]+(?:\s+[a-z]+)*(?:\s+[A-Z][a-z]+)*)/);
          const percentMatch = line.match(/(\d+(?:\.\d+)?)%/);
          
          if (speciesMatch && percentMatch) {
            const breed = speciesMatch[1].trim();
            const confidence = parseFloat(percentMatch[1]) / 100;
            breeds.push({ breed, confidence });
            console.log(`Found breed by extracting species and percentage: ${breed} with confidence ${confidence}`);
          }
        }
      }
    }
    
    // 如果仍然没有找到任何品种，尝试从文本中提取关键信息
    if (breeds.length === 0) {
      console.warn('No breed patterns found in text, attempting to extract key information');
      
      // 尝试提取可能的物种名称（首字母大写的词组）
      const speciesMatches = text.match(/([A-Z][a-z]+(?:\s+[a-z]+)*(?:\s+[A-Z][a-z]+)*)/g);
      if (speciesMatches && speciesMatches.length > 0) {
        // 使用第一个匹配作为物种名称
        breeds.push({ 
          breed: speciesMatches[0].trim(), 
          confidence: 1.0 
        });
        console.log(`Extracted possible species name: ${speciesMatches[0].trim()}`);
      } else {
        // 如果无法提取物种名称，返回未知
        return [{ breed: "Unknown", confidence: 1.0 }];
      }
    }
    
    // 按置信度排序（从高到低）
    return breeds.sort((a, b) => b.confidence - a.confidence);
  } catch (error) {
    console.error('Error parsing breed information:', error);
    return [{ breed: "Unknown", confidence: 1.0 }];
  }
} 