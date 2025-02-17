import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function ImageGenerate() {
  return (
    <div className="mb-5 flex scale-x-2">
   <Input placeholder="mountain loocout" className="p-6"/>
   <Button className="p-6 ml-3">generate Image </Button>
       </div>
  );
}
