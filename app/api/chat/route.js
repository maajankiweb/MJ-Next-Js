import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    let systemInstruction = body.systemInstruction || null;
    let contents = body.contents || [];

    // If messages array provided (OpenAI style format)
    if (body.messages && Array.isArray(body.messages) && body.messages.length > 0) {
      contents = [];
      for (const msg of body.messages) {
        if (msg.role === "system") {
          systemInstruction = { parts: [{ text: msg.content || msg.text }] };
        } else {
          contents.push({
            role: msg.role === "assistant" || msg.role === "model" ? "model" : "user",
            parts: [{ text: msg.content || msg.text }]
          });
        }
      }
    }

    const requestBody = { contents };
    if (systemInstruction) {
      requestBody.systemInstruction = systemInstruction;
    }

    const apiUrl = process.env.GEMINI_API_URL || process.env.NEXT_PUBLIC_API_URL || "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: { message: "Gemini API key is not configured." } },
        { status: 500 }
      );
    }

    const url = `${apiUrl}?key=${apiKey}`;
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini error response:", data);
      return NextResponse.json(
        { error: data.error || { message: data.message || "Failed to fetch response from Gemini API" } },
        { status: response.status }
      );
    }

    const textResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Thank you for reaching out! Please leave your contact details or call us directly.";

    return NextResponse.json({
      text: textResponse,
      choices: [
        {
          message: {
            content: textResponse
          }
        }
      ]
    });
  } catch (error) {
    console.error("Error in chat proxy route:", error);
    return NextResponse.json(
      { error: { message: error.message || "Internal Server Error" } },
      { status: 500 }
    );
  }
}

