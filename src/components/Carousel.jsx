"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

// import charlesSt from "@/assets/images/charles-st.png";
import bistro from "@/assets/images/bistro.png";
import bleeckerSt from "@/assets/images/bleeckerSt.png";
import bleeckerSt2 from "@/assets/images/bleeckerSt2.png";
import charlesSt2 from "@/assets/images/charlesSt2.png";
import cherrySt from "@/assets/images/cherrySt.png";
import fourthSt from "@/assets/images/fourthSt.png";
import groveSt from "@/assets/images/groveSt.png";
import tartine from "@/assets/images/tartine.png";
import tenthSt from "@/assets/images/tenthSt.png";
import waverlySt from "@/assets/images/waverlySt.png";
import one from "@/assets/images/PRSM_01.jpg";
import two from "@/assets/images/PRSM_02.jpg";
import three from "@/assets/images/PRSM_03.jpg";
import four from "@/assets/images/PRSM_04.jpg";

const Carousel = () => {
  const images = [
    // charlesSt,
    bleeckerSt2,
    one,
    two,
    three,
    four,
    cherrySt,
    groveSt,
    fourthSt,
    bistro,
    waverlySt,
  ];

  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const carouselWidth = carouselRef.current.offsetWidth;
        const imageWidth = carouselWidth / 3; // Adjust this value to control how many images are visible
        setTranslateX(0); // Start with the first image
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = () => {
    const carouselWidth = carouselRef.current.offsetWidth;
    const imageWidth = carouselWidth / 3; // Adjust this value to control how many images are visible
    setTranslateX((prevTranslateX) =>
      prevTranslateX + imageWidth > 0 ? 0 : prevTranslateX + imageWidth
    );
  };

  const handleNext = () => {
    const carouselWidth = carouselRef.current.offsetWidth;
    const imageWidth = carouselWidth / 3; // Adjust this value to control how many images are visible
    const maxTranslateX = -(images.length - 3) * imageWidth; // Adjust based on how many images are visible
    setTranslateX((prevTranslateX) =>
      prevTranslateX - imageWidth < maxTranslateX
        ? maxTranslateX
        : prevTranslateX - imageWidth
    );
  };

  return (
    <div className="relative">
      <div
        className="relative flex overflow-hidden"
        style={{ height: "calc(50vh)" }}
        ref={carouselRef}
      >
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              className="object-contain w-full h-full"
              src={image}
              alt={`Carousel Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
        <button
          className="bg-neutral-200 hover:bg-neutral-100 text-neutral-600 font-bold py-2 px-4 rounded-full"
          onClick={handlePrevious}
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
