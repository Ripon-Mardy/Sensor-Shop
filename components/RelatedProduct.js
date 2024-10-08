"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Loading from "./Loading";
import axiosInstance from "@/helpers/axiosInstance"; // Assuming axiosInstance is set up

const RelatedProduct = () => {
  const [products, setProuducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const brandsList = async () => {
      try {
        const res = await axiosInstance.get("/posts?term_type=product");
        setProuducts(res.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    brandsList();
  }, []);

  if (loading) {
    return <div><Loading /></div>;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-header_text text-center">Related Products</h2>

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="border border-gray-300 rounded-md my-2">
            <Link
              href={`/products/${product?.slug}`}
              className="p-2 w-auto h-auto inline-block">
              <Image
                src={product?.featured_image}
                width={300}
                height={300}
                priority={false}
                className="w-56 h-40 object-cover"
                alt={product?.name}
              />
              <div className="text-center">
                <h2 className="xfont-semibold xcapitalize text-base">
                  {product?.name}
                </h2>
                {/* <p className="">
                  {typeof product?.extraFields?.find(
                    (field) => field.meta_name === "product_short_description"
                  )?.meta_value === "string"
                    ? product?.extraFields
                      .find((field) => field.meta_name === "product_short_description")
                      .meta_value.slice(0, 10) // Just slice the string, no split or join
                    : ""}
                </p> */}
              </div>

            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProduct;