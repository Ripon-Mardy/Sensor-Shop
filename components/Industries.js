"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axiosInstance from "@/helpers/axiosInstance";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Industries = () => {
  const [industrics, setIndustrices] = useState([]);

  useEffect(() => {
    const industricsList = async () => {
      try {
        const response = await axiosInstance.get(
          "/posts?term_type=industries"
        );
        setIndustrices(response.data.data);
      } catch (error) {
        console.error("Error fetching industries:", error);
      }
    };

    industricsList();
  }, []); // Add dependency array to avoid multiple calls

  return (
    <div className="py-6">
      <div className="container mx-auto px-3 md:px-0">
        {/* ==== industriys title ===  */}
        <div>
          <h1 className="text-2xl font-semibold">Industries we are into :</h1>
        </div>
        {/* ===== end industriys title ===  */}

        {/* ====== industries slide ===  */}
        <div>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 4,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {industrics.map((product, index) => (
              <SwiperSlide key={index} className="py-10">
                <div className="border border-gray-300 p-2 rounded-sm shadow w-full">
                  <Image
                    src={product.featured_image}
                    width={200}
                    height={200}
                    className="object-cover rounded-md w-full"
                    alt={product.name}
                  />
                  <h1 className="text-base font-semibold my-2 capitalize">
                    {product.name}
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* === industries slide ===  */}
      </div>
    </div>
  );
};

export default Industries;
