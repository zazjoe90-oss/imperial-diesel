import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an expert automotive and diesel mechanic assistant for "Imperial Diesel".
Your goal is to help users diagnose potential car and truck issues based on the symptoms they describe.
1. Be concise, professional, and reassuring. Adopt a knowledgeable, expert tone suitable for "Imperial Diesel".
2. Ask clarifying questions if the description is vague.
3. Offer a potential diagnosis but ALWAYS add a disclaimer that this is an AI estimate and they should see a professional.
4. Encourage them to book an appointment with Imperial Diesel or call our emergency line if it sounds dangerous (brakes, engine overheating, etc.).
5. Keep responses under 100 words unless detailed explanation is requested.
`;

export const getDiagnosticResponse = async (userMessage: string, history: string[]): Promise<string> => {
  try {
    // Construct a simple history context for the model
    // In a real production app, we would use the Chat session properly with history,
    // but for this stateless service call example, we append context manually or use chat if needed.
    // Here we use a fresh chat or generateContent for simplicity with system instruction.
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: `History: ${history.join('\n')}\n\nCurrent User Query: ${userMessage}` }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm having trouble analyzing that right now. Please call Imperial Diesel directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to get a response from the diagnostic tool.");
  }
};