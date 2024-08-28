import AnalysisResult from "@/components/AnalysisResult"; // Your path
import { getFromRedis } from "@/lib/redis";

const response = {
  attributeScores: {
    PROFANITY: {
      spanScores: [
        {
          begin: 0,
          end: 30,
          score: {
            value: 0.240511,
            type: "PROBABILITY",
          },
        },
      ],
      summaryScore: {
        value: 0.240511,
        type: "PROBABILITY",
      },
    },
    THREAT: {
      spanScores: [
        {
          begin: 0,
          end: 30,
          score: {
            value: 0.010265815,
            type: "PROBABILITY",
          },
        },
      ],
      summaryScore: {
        value: 0.010265815,
        type: "PROBABILITY",
      },
    },
    IDENTITY_ATTACK: {
      spanScores: [
        {
          begin: 0,
          end: 30,
          score: {
            value: 0.030433474,
            type: "PROBABILITY",
          },
        },
      ],
      summaryScore: {
        value: 0.030433474,
        type: "PROBABILITY",
      },
    },
    INSULT: {
      spanScores: [
        {
          begin: 0,
          end: 30,
          score: {
            value: 0.5130944,
            type: "PROBABILITY",
          },
        },
      ],
      summaryScore: {
        value: 0.5130944,
        type: "PROBABILITY",
      },
    },
    TOXICITY: {
      spanScores: [
        {
          begin: 0,
          end: 30,
          score: {
            value: 0.50789946,
            type: "PROBABILITY",
          },
        },
      ],
      summaryScore: {
        value: 0.50789946,
        type: "PROBABILITY",
      },
    },
    SEVERE_TOXICITY: {
      spanScores: [
        {
          begin: 0,
          end: 30,
          score: {
            value: 0.023076924,
            type: "PROBABILITY",
          },
        },
      ],
      summaryScore: {
        value: 0.023076924,
        type: "PROBABILITY",
      },
    },
  },
  languages: ["en"],
  detectedLanguages: ["en"],
};

const ResultPage = async ({
  searchParams,
}: {
  searchParams: { key: string };
}) => {
  const analysisKey = searchParams.key;

  const analysisResponse = await getFromRedis(analysisKey);

  if (!analysisResponse) {
    return <div>No response found</div>;
  }

  return <AnalysisResult analysisResponse={analysisResponse} />;
};

export default ResultPage;
