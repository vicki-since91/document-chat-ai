import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 items-center justify-center">
      <div className="max-w-sm">
        <Label htmlFor="doc">Document</Label>
        <Input id="doc" type="file" />
      </div>
      <Textarea id="question" placeholder="Type your question here." />
      <Button>Get Answer</Button>
    </div>
  );
}
