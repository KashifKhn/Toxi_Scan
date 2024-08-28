import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AnalysisResponse } from "@/lib/types";

type AnalysisResultProps = {
  analysisResponse: AnalysisResponse;
};

const AnalysisResult = ({ analysisResponse }: AnalysisResultProps) => {
  const { attributeScores } = analysisResponse;

  return (
    <div className="space-y-4 py-8 max-w-screen-md mx-auto">
      {Object.entries(attributeScores).map(([attribute, scores]) => (
        <Card key={attribute}>
          <CardHeader>
            <CardTitle>{attribute}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <strong>Summary Score:</strong>
                <Progress value={scores.summaryScore.value * 100} />
                <span>{(scores.summaryScore.value * 100).toFixed(2)}%</span>
              </div>
              <div className="space-y-2">
                <strong>Span Scores:</strong>
                {scores.spanScores.map((span, index) => (
                  <div key={index}>
                    <p>
                      Text Span: {span.begin} - {span.end}
                    </p>
                    <Progress value={span.score.value * 100} />
                    <span>{(span.score.value * 100).toFixed(2)}%</span>
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
