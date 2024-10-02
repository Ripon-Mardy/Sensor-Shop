"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "./Loading";
import axiosInstance from "@/helpers/axiosInstance"; // Import your axios instance

const FeatureProduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosInstance.get("/posts?term_type=product&per_page=8");
        const featuredProducts = res.data.data.filter(product => product.is_featured === "Yes"); // Filter for featured products
        setProduct(featuredProducts); // Set the filtered products
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>; // Handle error state
  }

  return (
    <div>
      {/* ====== feature product title ====  */}
      <div className="md:flex md:items-center md:justify-between">        
        <h2 className="text-xl md:text-xl font-semibold">
          Featured products
        </h2>
        <Link
          href={"/products"}
          className="font-medium text-sm bg-navBgColor text-white p-1.5 rounded-sm hidden md:block hover:bg-hoverNavBgColor duration-200 ease-in-out"
        >
          View all featured products
        </Link>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {product.map((product, index) => (
            <Link
              href={`/products/${product.slug}`}
              key={index}
              className="border border-gray-100 p-2 shadow hover:shadow-md hover:border-gray-200 duration-200 ease-in-out"
            >
              <Image
                src={product.featured_image}
                width={300}
                height={300}
                alt={product.name}
                priority={false}
              />
              <div className="text-center">
                <h2 className="font-medium text-base">
                  {product.name}
                </h2>
                {/* Uncomment and modify as needed for short description */}
                {/* <p className="text-para_color text-sm">
                  {typeof product?.extraFields?.find(
                    (field) => field.meta_name === "product_short_description"
                  )?.meta_value === "string"
                    ? product.extraFields
                      .find((field) => field.meta_name === "product_short_description")
                      .meta_value.slice(0, 10) // Just slice the string, no split or join
                    : ""}
                </p> */}
              </div>
            </Link>
          ))}
        </div>
        <Link
          href={"/products"}
          className="font-medium capitalize text-sm bg-navBgColor text-white p-1.5 rounded-sm hover:bg-hoverNavBgColor duration-200 ease-in-out md:hidden mt-6 inline-block"
        >
          View all Featured products
        </Link>
      </div>

      {/* ==== end Feature products ===  */}
    </div>
  );
};

export default FeatureProduct;
