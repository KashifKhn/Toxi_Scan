import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AnalysisResponse } from "@/lib/types";
import { AlertCircle } from "lucide-react";

type AnalysisResultProps = {
  analysisResponse: AnalysisResponse;
};

const getProgressColor = (value: number): string => {
  if (value < 0.3) return "bg-green-500";
  if (value < 0.6) return "bg-yellow-500";
  return "bg-red-500";
};

const AnalysisResult = ({ analysisResponse }: AnalysisResultProps) => {
  const { attributeScores } = analysisResponse;

  if (!attributeScores || Object.keys(attributeScores).length === 0) {
    return (
      <Card className="max-w-screen-md mx-auto my-8">
        <CardContent className="flex items-center justify-center p-6">
          <AlertCircle className="w-6 h-6 mr-2 text-yellow-500" />
          <p className="text-lg font-medium">No analysis results available.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6 py-8 max-w-screen-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Analysis Results</h1>
      {Object.entries(attributeScores).map(([attribute, scores]) => (
        <Card key={attribute} className="shadow-lg">
          <CardHeader className="bg-muted">
            <CardTitle className="text-xl">{attribute}</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <strong className="text-lg">Summary Score:</strong>
                  <span className="text-sm font-medium">
                    {(scores.summaryScore.value * 100).toFixed(2)}%
                  </span>
                </div>
                <Progress
                  value={scores.summaryScore.value * 100}
                  indicatorColor={`${getProgressColor(scores.summaryScore.value)}`}
                />
              </div>
              <div className="space-y-4">
                <strong className="text-lg">Span Scores:</strong>
                {scores.spanScores.map((span, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    <p className="mb-2 text-sm">
                      Text Span: {span.begin} - {span.end}
                    </p>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Score:</span>
                      <span className="text-sm font-medium">
                        {(span.score.value * 100).toFixed(2)}%
                      </span>
                    </div>
                    <Progress
                      value={span.score.value * 100}
                      indicatorColor={`${getProgressColor(span.score.value)}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AnalysisResult;
