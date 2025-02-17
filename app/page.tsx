import HeroImage from "@/components/display/hero-image-slider";
import ImageGenerate from "../components/forms/generate-image-input";

export default function Home() {
  return (
    <div className="flex items-center justify-center m-5 ">
      <div className="grid max-w-4xl">
        <div className="my-10">
          <h1 className="text-7xl lg:text-9xl font-bold mb-2">
            <span className="text-8xl bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text animate-pulse">
              AI{" "}
            </span>
            <br />
            image Genarator
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero culpa
            odit a, animi saepe magnam reiciendis ipsa quas debitis atque
            consequuntur excepturi. Dignissimos reiciendis minus modi ea sunt,
            quo accusantium!
          </p>
        </div>
        <ImageGenerate />
        <div className="relative">
          <HeroImage />
        </div>
      </div>
    </div>
  );
}
