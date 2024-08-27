"use server";
import axios from "axios";
import { z } from "zod";

const API_KEY = process.env.PERSPECTIVE_API_KEY as string;
const PERSPECTIVE_API_URL =
  "https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze";

const analyzeSchema = z.object({
  text: z.string().min(1, "Text is required"),
  attr: z.array(z.string()).nonempty("At least one attribute must be selected"),
  threshold: z.preprocess(
    (value) => parseFloat(value as string),
    z.number().min(0).max(100),
  ),
});

export const analyze = async (_prevState: unknown, formData: FormData) => {
  const selectedAttr = formData.getAll("attr");
  const data = Object.fromEntries(formData.entries());

  const result = analyzeSchema.safeParse({
    ...data,
    attr: selectedAttr.length > 0 ? selectedAttr : undefined,
  });

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const { attr, text, threshold } = result.data;

  const requestedAttributes = attr.reduce((acc, attr) => {
    acc[attr] = { scoreThreshold: threshold / 100 };
    return acc;
  }, {});

  console.log("text", text);
  console.log("requestedAttributes", requestedAttributes);

  try {
    const response = await axios.post(`${PERSPECTIVE_API_URL}?key=${API_KEY}`, {
      comment: { text: text },
      languages: ["en"],
      requestedAttributes: requestedAttributes,
    });
    console.log("response ", response.data);
  } catch (error) {
    console.error("error" + error);
  }
};
