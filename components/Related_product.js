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

// ==== image ===
// import Loading from "./Loading";

const Related_product = () => {
  const [products, setProuducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const brandsList = async () => {
      try {
        const res = await fetch(
          "http://mathmozocms.test/api/v1/posts?term_type=product"
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setProuducts(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    brandsList();
  }, []);

  if (loading) {
    return <div> <Loading /></div>
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
      <h1 className="text-2xl font-bold text-header_text">Related Products</h1>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
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
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide className="border border-gray-300 rounded-md my-10">
            <Link
              href={`/products/${product.slug}`}
              key={index}
              className=" p-4 w-auto h-auto inline-block"
            >
              <Image
                src={product.featured_image}
                width={300}
                height={300}
                className="w-56 h-40 object-cover"
                alt={product.name}
              />
              <div className="text-center">
                <h1 className="font-semibold capitalize text-base">
                  {product.name}
                </h1>
                <p className="font-medium text-red-500 text-sm mt-1">
                  {product.slug}
                </p>
              </div>
              {/* <div className="text-center my-2">

              <button className="bg-navBgColor p-1.5 px-4 text-sm rounded-md inline-block text-center text-white"> Request a Quote </button>
              </div> */}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Related_product;
