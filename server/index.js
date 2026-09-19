import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("PinkMart server is working!");
});

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const response = await ai.models.generateContent({
     model: "gemini-3.6-flash",
      contents: userMessage,
    });

    res.json({
      reply: response.text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong with Gemini.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`PinkMart server running on http://localhost:${PORT}`);
});