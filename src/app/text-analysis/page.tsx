import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { attributes } from "@/constant/attributes";
import { analyze } from "../_actions/textAnalysis";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
//

const TextAnalysisPage = () => {
  return (
    <form action={analyze} className="grid w-full gap-2 p-8">
      <Textarea
        required
        name="text"
        className="w-full focus-visible:ring-0"
        rows={25}
        placeholder="Paste Your text Here to analysis"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Attributes</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {attributes.map((attribute) => {
            return (
              <DropdownMenuCheckboxItem key={attribute.attrName}>
                {attribute.attrName}
              </DropdownMenuCheckboxItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="grid gap-4 my-2 items-start justify-items-start">
        <Slider name="threshold" min={0} max={100} step={1} />
        <Label className="text-lg font-bold">Threshold</Label>
      </div>
      <Button type="submit" className="my-8">
        Send message
      </Button>
    </form>
  );
};

export default TextAnalysisPage;
