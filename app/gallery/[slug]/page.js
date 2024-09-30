'use client'
import React, { useEffect, useState } from "react";
import { albums } from "../page";
import Image from "next/image";


import industriImage from '../../../public/image/industries/industri1.png'

const page = ({ params }) => {

    const image = [industriImage, industriImage, industriImage, industriImage, industriImage]

    const [isFullScreen, setIsFullScreen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
  
    // Open full-screen mode with the selected image
    const openFullScreen = (image) => {
      setCurrentImage(image);
      setIsFullScreen(true);
    };
  
    // Close full-screen mode
    const closeFullScreen = () => {
      setIsFullScreen(false);
      setCurrentImage(null);
    };

  return (
    <>
    <section className="py-8">
        <div className="container mx-auto px-3">
        <div>
      {/* Image Gallery */}
      <div className="grid md:grid-cols-4 gap-8">
        {image.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="cursor-pointer rounded-lg shadow-lg"
            onClick={() => openFullScreen(image)}
          />
        ))}
      </div>

      {/* Full-Screen Mode */}
      {isFullScreen && currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={closeFullScreen}>
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-4xl max-h-4xl relative z-10"
          />
          <button
            className="absolute top-5 right-5 text-white text-5xl font-bold z-20"
            onClick={closeFullScreen}
          >
            &times;
          </button>
        </div>
      )}
    </div>
        </div>
    </section>
    </>
  );
};

export default page;


