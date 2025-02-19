"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import toast from "react-hot-toast";
import { useImage } from "@/content/image";

export default function ImageGenerate() {
  const{generateImage}=useImage()
  return (
    <div className="mb-5 flex scale-x-2">
   <Input placeholder="mountain loocout" className="p-6"/>
   <Button onClick={generateImage} className="p-6 ml-3">generate Image </Button>
       </div>
  );
}
