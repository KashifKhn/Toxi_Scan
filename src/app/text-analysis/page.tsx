"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { attributes, Attribute } from "@/constant/attributes";
import { analyze } from "../_actions/textAnalysis";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButton";

const TextAnalysisPage = () => {
  const [error, actions] = useFormState(analyze, {});

  return (
    <Card className="w-full max-w-2xl mx-auto my-8 border-0">
      <CardHeader>
        <CardTitle>Text Analysis</CardTitle>
        <CardDescription>
          Paste or write text and select analysis options
        </CardDescription>
      </CardHeader>
      <form action={actions}>
        <div className="space-y-4">
          <Textarea
            required
            name="text"
            placeholder="Your Text Here..."
            className="w-full p-4 border rounded-lg"
            rows={15}
          />
          {error?.text && <div className="text-destructive">{error?.text}</div>}
        </div>
        <div className="space-y-4">
          <Label className="text-lg font-bold">Select Attributes</Label>
          <div className="grid grid-cols-2 gap-4">
            {attributes.map((attribute: Attribute) => (
              <div
                key={attribute.attrName}
                className="flex items-start space-x-2"
              >
                <Checkbox
                  id={attribute.attrName}
                  name="attr"
                  value={attribute.attrName}
                />
                <div>
                  <Label htmlFor={attribute.attrName}>
                    {attribute.attrName}
                  </Label>
                  <p className="text-sm text-gray-500">
                    {attribute.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {error?.attr && <div className="text-destructive">{error.attr}</div>}
        </div>
        <div className="grid gap-4 my-4 items-center">
          <Label className="text-lg font-bold">Threshold</Label>
          <Slider
            name="threshold"
            min={0}
            max={100}
            step={1}
            defaultValue={[50]}
          />
          {error?.threshold && (
            <div className="text-destructive">{error.threshold}</div>
          )}
        </div>
        <SubmitButton />
      </form>
    </Card>
  );
};

export default TextAnalysisPage;
