export type Score = {
  value: number;
  type: "PROBABILITY";
};

export type SpanScore = {
  begin: number;
  end: number;
  score: Score;
};

export type AttributeScore = {
  spanScores: SpanScore[];
  summaryScore: Score;
};

export type AttributeScores = {
  THREAT?: AttributeScore;
  TOXICITY?: AttributeScore;
  IDENTITY_ATTACK?: AttributeScore;
  SEVERE_TOXICITY?: AttributeScore;
  INSULT?: AttributeScore;
  PROFANITY?: AttributeScore;
};

export type AnalysisResponse = {
  attributeScores: AttributeScores;
  languages: string[];
  detectedLanguages: string[];
};
