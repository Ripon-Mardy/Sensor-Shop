'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image';

import { motion } from 'framer-motion';

// ==== imges ==== 
import product1 from '../public/image/Feature Product/f1.jpg'
import product2 from '../public/image/Feature Product/f2.jpg'

const Product_slide = () => {

    const products = [
        { id: 1, name: 'Product 1', image: product1 },
        { id: 2, name: 'Product 2', image: product2 },
      ];


    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 8000); 

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };


  return (
    <>

<div className="relative w-full max-w-xl mx-auto overflow-hidden">
      <motion.div
        className="flex"
        initial={{ x: '-100%' }}
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ duration: 0.5 }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-full flex-shrink-0 flex justify-center items-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              className="object-cover md:w-3/4 w-1/2 h-60"
              width={300}
              height={300}
            />
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={handlePrev}
          className="bg-gray-400 text-white p-1 rounded-full"
        >
          &lt;
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={handleNext}
          className="bg-gray-400 text-white p-1 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
    </>
  )
}

export default Product_slide
