"use server";

import axios from "axios";

const API_KEY = process.env.PERSPECTIVE_API_KEY as string;
const PERSPECTIVE_API_URL =
  "https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze";

export const analyze = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  console.log("data", data);

  try {
    const response = await axios.post(`${PERSPECTIVE_API_URL}?key=${API_KEY}`, {
      comment: { text: data.text },
      languages: ["en"],
      requestedAttributes: {
        TOXICITY: {},
        SEVERE_TOXICITY: {},
        IDENTITY_ATTACK: {},
        INSULT: {},
        PROFANITY: {},
        THREAT: {},
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error("error" + error);
  }
};
