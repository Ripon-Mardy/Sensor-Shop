'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axiosInstance from '@/helpers/axiosInstance'; // Ensure axiosInstance is correctly imported

const BannerSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slider, setSlider] = useState([]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slider.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
  };

  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const response = await axiosInstance.get('/posts?term_type=sensor_slider');
        setSlider(response.data.data);
      } catch (error) {
        console.error('Failed to fetch data from sensor slider', error);
      }
    };

    fetchSlider();

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [slider.length]);

  return (
    <div>
      <div className="relative w-full md:h-40 h-40 overflow-hidden">
        {slider.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={banner.featured_image}
              alt={`Banner ${index + 1}`}
              width={300}
              height={300}
              layout='responsive'
              className="w-full h-32 md:h-full object-cover rounded-sm"
              priority={false}
            />
          </div>
        ))}

        <div className='flex items-center justify-center'>
          <button
            onClick={prevSlide}
            className="absolute md:top-1/2 top-[40%] left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute md:top-1/2 top-[40%] right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerSlide;
