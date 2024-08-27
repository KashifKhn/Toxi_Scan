"use server";
import axios from "axios";

const API_KEY = process.env.PERSPECTIVE_API_KEY as string;
const PERSPECTIVE_API_URL =
  "https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze";

export const analyze = async (_prevState: unknown, formData: FormData) => {
  const selectedAttr = formData.getAll("attr");
  const data = Object.fromEntries(formData.entries());

  const requestedAttributes = selectedAttr.reduce((acc, attr) => {
    acc[attr] = {};
    return acc;
  }, {});

  try {
    const response = await axios.post(`${PERSPECTIVE_API_URL}?key=${API_KEY}`, {
      comment: { text: data.text },
      languages: ["en"],
      requestedAttributes: requestedAttributes,
      theshold: data.threshold,
    });
    console.log("hello", response.data);
  } catch (error) {
    console.error("error" + error);
  }
};
