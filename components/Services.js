"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import axiosInstance from "@/helpers/axiosInstance";

const Services = () => {
  const [services, setServices] = useState([]);
  const [servicesText, setServicesText] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesResponse, servicesTextResponse] = await Promise.all([
          axiosInstance.get("/posts?term_type=services"),
          axiosInstance.get('/frontend/settings?meta_name=our_services_text&meta_type=Textarea')
        ]);

        setServices(servicesResponse.data.data);
        setServicesText(servicesTextResponse.data.data.meta_value);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-xl font-semibold">Our Services</h2>
        <p className="font-medium mt-3 text-sm md:text-base">{servicesText}</p>
      </div>

      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 4 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="py-2">
              <div className="border border-gray-300 p-2 rounded-sm shadow">
                <Link href={`/services/${service.slug}`}>
                  <Image
                    src={service.featured_image}
                    width={200}
                    height={200}
                    className="object-cover rounded-md w-full h-full"
                    alt={service.name}
                  />
                </Link>

                <h1 className="text-base text-center mt-2">
                  <Link href={`/services/${service.slug}`} className="p-1.5 text-sm capitalize">
                    {service.name}
                  </Link>
                </h1>

                <div className="flex justify-center mt-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="bg-navBgColor text-white text-center p-1.5 text-sm capitalize"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Services;
