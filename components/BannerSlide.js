'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axiosInstance from '@/helpers/axiosInstance'; // Ensure axiosInstance is correctly imported

const BannerSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slider, setSlider] = useState([]);
  const [mobileSlider, setMobileSlider] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? (slider.length > 0 ? slider.length - 1 : 0) : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (slider.length > 0 ? slider.length : 1));
  };

  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const response = await axiosInstance.get('/posts?term_type=slider&category_slug=homepage-slider&per_page=5');
        setSlider(response.data.data);
      } catch (error) {
        console.error('Failed to fetch data from homepage slider', error);
      }
    };

    const fetchMobileSlider = async () => {
      try {
        const response = await axiosInstance.get('/posts?term_type=slider&category_slug=mobile-home-slider&per_page=5');
        setMobileSlider(response.data.data);
      } catch (error) {
        console.error('Failed to fetch data from mobile slider', error);
      }
    };

    fetchSlider();
    fetchMobileSlider();

    // Set the current screen size (mobile or not) once the component has mounted
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Detect screen size change and adjust
    window.addEventListener('resize', handleResize);
    handleResize(); // Check initially

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (slider.length > 0 ? slider.length : 1));
    }, 10000); // Change image every 10 seconds

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [slider.length, mobileSlider.length]);

  const currentBanners = isMobile && mobileSlider.length > 0 ? mobileSlider : slider;

  return (  
    <div>
      {/* Desktop Slider */}
      <div className="relative w-full md:h-40 h-40 overflow-hidden hidden md:block">
        {currentBanners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={banner.featured_image}
              alt={`Banner ${index + 1}`}
              width={1024}
              height={180}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <div className='flex items-center justify-center'>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform  -translate-y-full bg-black bg-opacity-50 text-white p-2 text-sm h-fit"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2  right-0 transform -translate-y-full bg-black bg-opacity-50 text-white p-2 text-sm h-fit flex items-center justify-center"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="relative w-full h-52 overflow-hidden block md:hidden">
        {currentBanners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={banner.featured_image}
              alt={`Banner ${index + 1}`}
              width={400}
              height={215}
              className="w-full md:h-full object-cover rounded-sm"
            />
          </div>
        ))}

        <div className='flex items-center justify-center'>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerSlide;
