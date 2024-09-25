import Image from "next/image";
import InfoBoxes2 from "@/components/InfoBoxes2";
import { libreBaskerville } from "@/assets/fonts/fonts";

import heroImage from "@/assets/images/PRsM_01.jpg";

const HeroImage = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="78 Charles Street"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
        <h1
          className={`${libreBaskerville.className} text-white text-4xl md:text-6xl lg:text-8xl font-normal text-center mt-2 mb-24`}
        >
          78 Charles Street
        </h1>
        <div className="w-full max-w-6xl mb-8">
          <InfoBoxes2 />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
