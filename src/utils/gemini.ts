import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Get the generative model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function generateResponse(prompt: string): Promise<string> {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    throw error;
  }
}

export async function generateMarketingStrategy(prompt: string): Promise<string> {
  const enhancedPrompt = `As a marketing expert, provide a detailed marketing strategy for the following request: ${prompt}. 
    Include specific recommendations, target audience analysis, and implementation steps.`;
  
  return generateResponse(enhancedPrompt);
} 