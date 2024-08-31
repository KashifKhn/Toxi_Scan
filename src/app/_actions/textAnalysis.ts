"use server";
import { attributeNames } from "@/constant/attributes";
import { saveToRedis } from "@/lib/redis";
import axios from "axios";
import { redirect } from "next/navigation";
import { z } from "zod";

type ValidAttribute = (typeof attributeNames)[number];

type RequestedAttributes = Record<ValidAttribute, { scoreThreshold: number }>;

const API_KEY = process.env.GOOGLE_API_KEY as string;
const PERSPECTIVE_API_URL =
  "https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze";

const attrSchema = z.array(z.enum(attributeNames));

const analyzeSchema = z.object({
  text: z.string().min(1, "Text is required"),
  attr: attrSchema,
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

  const analysisKey = `analysis:${new Date().getTime()}`;

  const requestedAttributes: RequestedAttributes =
    attr.reduce<RequestedAttributes>(
      (acc: RequestedAttributes, attribute: ValidAttribute) => {
        acc[attribute] = { scoreThreshold: threshold / 100 };
        return acc;
      },
      {} as RequestedAttributes,
    );

  try {
    const response = await axios.post(`${PERSPECTIVE_API_URL}?key=${API_KEY}`, {
      comment: { text: text },
      languages: ["en"],
      requestedAttributes: requestedAttributes,
    });
    await saveToRedis(analysisKey, response.data);
  } catch (error) {
    console.error("error" + error);
  } finally {
    redirect(`/results?key=${analysisKey}`);
  }
};
