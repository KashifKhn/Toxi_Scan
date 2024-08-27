"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { attributes, Attribute } from "@/constant/attributes";
import { analyze } from "../_actions/textAnalysis";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useFormState } from "react-dom";

const TextAnalysisPage = () => {
  const [error, actions] = useFormState(analyze, {});

  return (
    <form
      action={actions}
      className="space-y-8 max-w-screen-md w-full mx-auto px-4 mb-8"
    >
      <div className="space-y-4">
        <Label className="text-lg font-bold">Paste Your Text</Label>
        <Textarea
          required
          name="text"
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
              <Checkbox id={attribute.attrName} name="attr" value={attribute.attrName} />
              <div>
                <Label htmlFor={attribute.attrName}>{attribute.attrName}</Label>
                <p className="text-sm text-gray-500">{attribute.description}</p>
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
      <Button type="submit" className="w-full">
        Analyze Text
      </Button>
    </form>
  );
};

export default TextAnalysisPage;
