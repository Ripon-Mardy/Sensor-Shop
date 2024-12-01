"use client"; // Ensure this component runs on the client side
import React, { useState, useEffect, useCallback } from "react";
import Loading from "@/components/Loading";
import Image from "next/image";
import axiosInstance from "@/helpers/axiosInstance";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons for navigation
import { usePathname, useSearchParams } from "next/navigation";

const GallerySingle = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const albumId = pathname.split('/').pop();
  // console.log(searchParams);


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [albumName, setAlbumName] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    // Ensure the slug is defined before making API call
    if (!albumId) return; // Wait for the slug to be available

    // Fetch category using the category_slug
    const fetchCategory = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axiosInstance.get(`/posts?term_type=gallery&category_slug=${albumId}`);
        setCategoryData(response.data.data);
        setAlbumName(response.data.data[0]?.categories[0]?.name); // Set album name
      } catch (error) {
        setError('Failed to fetch category');
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchCategory(); // Call the fetch function
  }, [albumId]); // Run effect when slug changes

  const openPopup = (index) => {
    setSelectedImageIndex(index);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "popup-overlay") {
      closePopup();
    }
  };

  const handleKeyPress = useCallback((e) => {
    if (e.key === "Escape") {
      closePopup();
    }
  }, []);

  const navigatePrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : categoryData.length - 1));
  };

  const navigateNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex < categoryData.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    if (isPopupVisible) {
      window.addEventListener("keydown", handleKeyPress);
    } else {
      window.removeEventListener("keydown", handleKeyPress);
    }

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isPopupVisible, handleKeyPress]);

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
    <section>
      <div className="container mx-auto px-3 py-10">
        <h2 className="text-2xl font-bold mb-5">{albumName}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-10 gap-5">
          {/* {JSON.stringify(categoryData)} */}
          {categoryData.map((categoryItem, categoryIndex) => (
            <div
              key={categoryIndex}
              className="border border-gray-300 rounded-md overflow-hidden shadow-lg cursor-pointer"
              onClick={() => openPopup(categoryIndex)} // Trigger popup on click
            >
              <Image
                src={categoryItem?.featured_image}
                className="w-full h-48 object-cover"
                width={200}
                height={200}
                alt={categoryItem?.name}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div
          id="popup-overlay"
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={handleOutsideClick} // Close on click outside
        >
          <div className="relative">
            {/* Debugging: Log the selected image URL */}
            {/* {console.log("Selected Image URL:", categoryData[selectedImageIndex]?.featured_image)} */}

            {/* Image */}
            <Image
              src={categoryData[selectedImageIndex]?.featured_image} // Updated to use featured_image
              width={1000}
              height={1000}
              className="object-contain"
              alt="Selected Album Image"
            />

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-700 bg-white p-2 rounded-full shadow-lg"
              onClick={closePopup} // Close popup on button click
            >
              <FaTimes size={24} />
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 bg-white p-2 rounded-full shadow-lg"
              onClick={navigatePrev} // Navigate to previous image
            >
              <FaChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 bg-white p-2 rounded-full shadow-lg"
              onClick={navigateNext} // Navigate to next image
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySingle;
