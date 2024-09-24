"use client";
import React, { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import axiosInstance from "@/helpers/axiosInstance";

const page = ({ params }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch category 
    const fetchPhotos = async () => {
      try {
        const response = await axiosInstance.get('/posts?category_slug=album-1');
        setPhotos(response.data.data);
      } catch (error) {
        setError('Failed to fetch photo');
      } finally {
        setLoading(false); // Set loading to false after the fetch attempt
      }
    };
    fetchPhotos();
  }, []);

  // Open full-screen mode with the selected image
  const openFullScreen = (index) => {
    setCurrentImageIndex(index);
    setIsFullScreen(true);
  };

  // Close full-screen mode
  const closeFullScreen = () => {
    setIsFullScreen(false);
    setCurrentImageIndex(null);
  };

  // Navigate to the next image
  const nextImage = (event) => {
    event.stopPropagation(); // Prevent closing the popup
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  // Navigate to the previous image
  const prevImage = (event) => {
    event.stopPropagation(); // Prevent closing the popup
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-3">
          <div>
            {/* Image Gallery */}
            <div className="grid mwd:grid-cols-4 gap-8">
              {photos.map((image, index) => (
                <img
                  key={index}
                  src={image?.featured_image}
                  alt={image?.name}
                  className="cursor-pointer rounded-lg shadow-lg w-full h-60 object-cover"
                  onClick={() => openFullScreen(index)} // Pass the index
                />              
              ))}
            </div>

            {/* Full-Screen Mode */}
            {isFullScreen && currentImageIndex !== null && (
              <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={closeFullScreen}>
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <img
                  src={photos[currentImageIndex]?.featured_image} // Use the current image
                  alt={photos[currentImageIndex]?.name}
                  className="max-w-4xl max-h-4xl relative z-10"
                />
                <button
                  className="absolute top-5 right-5 text-white text-5xl font-bold z-20"
                  onClick={closeFullScreen}
                >
                  &times;
                </button>
                <button
                  className="absolute left-5 text-white text-3xl"
                  onClick={prevImage}
                >
                  &#10094; {/* Left arrow */}
                </button>
                <button
                  className="absolute right-5 text-white text-3xl"
                  onClick={nextImage}
                >
                  &#10095; {/* Right arrow */}
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
