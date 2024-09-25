import React from "react";
import Image from "next/image";

import heroImage from "@/assets/images/PRSM_01.jpg";

const HeroImage = () => {
  return (
    <div className="relative w-full" style={{ paddingTop: "72.92%" }}>
      {" "}
      {/* 840/1152 * 100 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={heroImage}
          alt="78 Charles Street"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Luxury Living at 78 Charles
        </h1>
      </div>
    </div>
  );
};

export default HeroImage;
