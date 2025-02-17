import React from "react";
import Image from "next/image";
export default function HeroImage() {
  return (
    <div className="relative w-full h-[40vh] p-8 max-w-4xl mx-auto">
      <Image
        src="/images/mountain1.jpg"
        alt="ai image generator"
        layout="fill"
        objectFit="cover"
        className="rounded-[20px]"
      />

      <ThumbnailRow/>
    </div>
  );
}

const ThumbnailRow = () => {
  const thumbnails = [
    "/images/mountain1.jpg",
    "/images/mountain2.jpg",
    "/images/mountain3.jpg",
  ];
  return (
    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex bg-slate-100 bg-opacity-50 p-4 rounded-[20px] shadow-lg w-auto max-w-full space-x-5 overflow-x-auto">
        {thumbnails.map((src,index)=>(
            <div key={index} className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-[20px] overflow-hidden shadow-md transition-transform transform hover:scale-105 flex-shrink-0 cursor-pointer ">
                <Image src={src} alt={`thumbnails ${index + 1}`} layout="fill" objectFit="cover"/>
            </div>

        )
        )}
    </div>
  );
};
