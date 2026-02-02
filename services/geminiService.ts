
import { GoogleGenAI } from "@google/genai";
import { APP_LIST } from "../constants";
import { Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAppRecommendation = async (query: string, lang: Language = 'en') => {
  try {
    const appsText = APP_LIST.map(a => {
      const trans = a.translations[lang] || a.translations.en;
      return `${trans.name}: ${trans.description}`;
    }).join('; ');

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `The user is looking for an app in the Turi Apps catalogue. 
      Available apps: ${appsText}.
      User Query: "${query}"
      
      Recommend the most relevant app(s) from the list. If none are truly relevant, say so politely.
      IMPORTANT: Respond ONLY in the following language: ${lang}.`,
      config: {
        systemInstruction: `You are an expert concierge for Turi Apps. Keep responses brief, encouraging, and highly specific to the provided catalogue. Always reply in ${lang}.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
