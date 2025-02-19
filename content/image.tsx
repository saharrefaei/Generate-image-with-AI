"use client";

import React, { Children } from "react";
import toast, { Toast } from "react-hot-toast";
import { generateImageai } from "../actions/image";

interface Imagetype {
  imageUrl: string;
}

interface ImageContextType {
  ImagePrompt: string;
  setImagePrompt: (query: string) => void;
  Loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  generateImage: () => void;
}

const ImageContex = React.createContext<ImageContextType | undefined>(
  undefined
);

export const ImageProvider = ({ children }: { children: React.ReactNode }) => {
  const [ImagePrompt, setImagePrompt] = React.useState("");
  const [Loading, setLoading] = React.useState(false);
  const generateImage = async () => {
    try{
            await generateImageai();

    }catch(err){
        toast.error('failed to generate image')
    }
  };
  return (
    <ImageContex.Provider
      value={{
        Loading,
        setLoading,
        generateImage,
        ImagePrompt,
        setImagePrompt,
      }}
    >
      {children}
    </ImageContex.Provider>
  );
};

export const useImage = (): ImageContextType => {
  const context = React.useContext(ImageContex);
  if (context == undefined) {
    throw new Error("useImage must be used within a ImageProvider ");
  }
  return context;
};
// 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