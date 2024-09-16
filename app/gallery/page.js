'use client'
import React, {useState} from 'react'
import Image from 'next/image';

// images
import img2 from './../../public/image/Feature Product/f1.jpg'
import img3 from './../../public/image/Feature Product/f2.jpg'
import img4 from './../../public/image/Feature Product/f4.jpg'
import img5 from '../../public/image/services/service1.jpg'

const page = () => {
    const images = [img2,img3,img4,img5]

    const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  return (
    <>
    <section className='py-10'>
        <div className='container mx-auto px-3'>
            <h1 className='text-xl text-gray-800 md:text-3xl font-semibold'>Our Gallery </h1>
            <div>
      {/* Gallery Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 p-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => handleClick(image)}
          >
            <Image
              src={image}
              width={100}
              height={100}
              layout='responsive'
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-52 object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Fullscreen Image"
              className="w-auto max-h-screen object-contain"
            />
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
        </div>
    </section>
    </>
  )
}

export default page
