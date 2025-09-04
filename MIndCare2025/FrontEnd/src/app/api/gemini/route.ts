import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return NextResponse.json({ error: "Prompt não fornecido" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "GEMINI_API_KEY não fornecida" }, { status: 500 });
    }

    // Dynamically import GoogleGenerativeAI to avoid Edge Runtime issues
    const { GoogleGenerativeAI } = await import("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const result = await model.generateContent([prompt]);
    const text = await result.response.text();

    return NextResponse.json({ text });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Erro ao gerar resposta" }, { status: 500 });
  }
}