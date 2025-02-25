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

      if (apiResponse.ok) {
        const data = await apiResponse.json();
        res.status(200).json(data);
      } else {
        const errorData = await apiResponse.json();
        const errorMessage =
          errorData.message ||
          "Failed to fetch API with no specific error message";
        res.status(apiResponse.status).json({ message: errorMessage });
      }
    } catch (error) {
      if (error.name === "FetchError") {
        res
          .status(502)
          .json({ message: "Network error when attempting to fetch API" });
      } else if (error.name === "SyntaxError") {
        res
          .status(500)
          .json({ message: "Error parsing JSON response from API" });
      } else {
        res
          .status(500)
          .json({ message: error.message || "Unexpected error occurred" });
      }
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
