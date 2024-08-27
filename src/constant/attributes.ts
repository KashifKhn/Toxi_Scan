export type Attribute = {
  attrName: string;
  description: string;
};

export const attributeNames = [
  "TOXICITY",
  "SEVERE_TOXICITY",
  "IDENTITY_ATTACK",
  "INSULT",
  "PROFANITY",
  "THREAT",
] as const;

export const attributes: Attribute[] = [
  {
    attrName: "TOXICITY",
    description:
      "A rude, disrespectful, or unreasonable comment that is likely to make people leave a discussion.",
  },
  {
    attrName: "SEVERE_TOXICITY",
    description:
      "A very hateful, aggressive, disrespectful comment or otherwise very likely to make people leave a discussion.",
  },
  {
    attrName: "IDENTITY_ATTACK",
    description:
      "A personal attack on someone, including explicit or implicit threats.",
  },
  {
    attrName: "INSULT",
    description:
      "A rude or disrespectful comment that is likely to make people leave a discussion.",
  },
  {
    attrName: "PROFANITY",
    description: "Obscene language, including swearing.",
  },
  {
    attrName: "THREAT",
    description: "A threat to someone's safety or well-being.",
  },
] as const;
