import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "sensai", // Unique app ID
  name: "sensai ",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});