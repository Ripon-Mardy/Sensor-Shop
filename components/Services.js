"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import axiosInstance from "@/helpers/axiosInstance"; // Import your axios instance

const Services = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const servicesList = async () => {
      try {
        const response = await axiosInstance.get("/posts?term_type=services"); // Use axiosInstance for the request
        setServices(response.data.data); // Set the data from the response
      } catch (error) {
        setError(error.message); // Handle any errors
      }
    };

    servicesList();
  }, []);

  return (
    <div>
      {/* ==== services title ===  */}
      <div className="text-center md:text-left">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-xl md:text-2xl font-semibold">Our Services</h1>
          {/* <Link href={'/all-services'} className=' font-medium capitalize text-sm bg-navBgColor text-white p-1.5 rounded-sm hidden md:block hover:bg-hoverNavBgColor duration-200 ease-in-out'>View all services</Link> */}
        </div>
        <p className="font-medium mt-3 text-sm text-para_color">
          Our team of experts is highly trained and experienced in a variety of
          fields, including VFD repair, PCB repair, PLC programming, and more.
          Explore our services below to learn more about how we can help you
          optimize your operations and increase efficiency.
        </p>
      </div>
      {/* ==== end services title ====  */}

      {/* ==== service slide ===  */}
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
          {services.map((product, index) => (
            <SwiperSlide key={index} className="py-10">
              <div className="border border-gray-300 p-2 rounded-sm shadow">
                <Image
                  src={product.featured_image}
                  width={200}
                  height={200}
                  className="object-cover rounded-md w-full h-full"
                  alt={product.name}
                />
                <h1 className="text-sm font-semibold my-2 capitalize">
                  {product.name}
                </h1>
                <Link
                  href={`/${product.slug}`}
                  className="bg-buttonBgColor text-white text-center p-1.5 text-sm capitalize"
                >
                  Read more
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* ====end service slide ===  */}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Services;
