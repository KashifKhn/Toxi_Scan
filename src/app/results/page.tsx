import AnalysisResult from "@/components/AnalysisResult";
import { getFromRedis } from "@/lib/redis";
import { AnalysisResponse } from "@/lib/types";

const ResultPage = async ({
  searchParams,
}: {
  searchParams: { key: string };
}) => {
  const analysisKey = searchParams.key;

  const analysisResponse: AnalysisResponse = await getFromRedis(analysisKey);

  if (!analysisResponse) {
    return <div>No response found</div>;
  }
  return <AnalysisResult analysisResponse={analysisResponse} />;
};

export default ResultPage;
