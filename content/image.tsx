"use client";

import React, { createContext, useState, useContext, FormEvent } from "react";
import toast from "react-hot-toast";
import { generateImageai } from "../actions/image";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

// Image context type
interface ImageContextType {
  ImagePrompt: string;
  setImagePrompt: (query: string) => void;
  Loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  generateImage: (e: FormEvent) => void; // <-- Updated the type of generateImage
}

// Context default value (undefined)
const ImageContex = createContext<ImageContextType | undefined>(undefined);

// ImageProvider component that provides the context value
export const ImageProvider = ({ children }: { children: React.ReactNode }) => {
  const [ImagePrompt, setImagePrompt] = useState<string>("");
  const [Loading, setLoading] = useState<boolean>(false);
  const { isSignedIn } = useUser();  // Get user authentication status
  const router = useRouter();  // Next.js router

  // generateImage function that handles form submission and image generation
  const generateImage = async (e: FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading to true
    if (!isSignedIn) {
      toast.loading("Please sign in to generate image", { position: "top-right" });
      return;
    }
    try {
      const { _id } = await generateImageai(ImagePrompt);  // Call the image generation API
      router.push("/dashboard/images");  // Redirect to dashboard after image generation
    } catch (err) {
      toast.error("Failed to generate image", { position: "top-right" });
    } finally {
      setLoading(false);  // Set loading to false after the operation is done
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
      {children}  {/* Render child components that are wrapped by the provider */}
    </ImageContex.Provider>
  );
};

// Custom hook to use the image context
export const useImage = (): ImageContextType => {
  const context = useContext(ImageContex);
  if (context == undefined) {
    throw new Error("useImage must be used within an ImageProvider ");
  }
  return context;
};
