'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image';


// ===== images ===== 
import banner1 from './../public/image/Banner/banner1.png';
import banner2 from './../public/image/Banner/banner2.jpg';
import banner3 from './../public/image/Banner/banner3.jpg';

const Banner_slide = () => {

    const banners = [ banner1, banner2, banner3 ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 12000); // Change image every 3 seconds
        return () => clearInterval(interval);
      }, [banners.length]);
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
      };
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      };


  return (
    <div>


<div className="relative w-full h-64 overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={banner}
            alt={`Banner ${index + 1}`}
            layout='responsive'
            className="w-full object-cover rounded-sm"
          />
        </div>
      ))}


      <div className='flex items-center justify-center'>
      <button
        onClick={prevSlide}
        className="absolute md:top-1/2 top-[17%] left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute md:top-1/2 top-[17%] right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
      >
        &gt;
      </button>
      </div>


    </div>
      
    </div>
  )
}

export default Banner_slide
