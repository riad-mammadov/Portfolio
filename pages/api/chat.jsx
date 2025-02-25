import { aiPrompt } from "@/utils/ai";

export default async function aiHandler(req, res) {
  if (req.method === "POST") {
    const { question } = req.body;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      const apiResponse = await fetch(
        process.env.GEMINI_API_URL,
        requestOptions
      );
      const data = await apiResponse.json();
      if (!apiResponse.ok) {
        throw new Error(data.message || "Failed to fetch API");
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405);
  }
}
