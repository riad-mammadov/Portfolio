import { aiPrompt } from "@/utils/ai";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { question } = await req.json();

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://riadmammadov.co.uk",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: aiPrompt(question),
            },
          ],
        },
      ],
    }),
  };

  try {
    const apiResponse = await fetch(process.env.GEMINI_API_URL, requestOptions);
    const data = await apiResponse.json();

    if (!apiResponse.ok) throw new Error("Failed to fetch API");

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
