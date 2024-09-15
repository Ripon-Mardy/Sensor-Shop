'use client'
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
        const res = await axiosInstance.get("/posts?term_type=product"); // Use axiosInstance
        setProduct(res.data.data); // Set the products from the response
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

  // Uncomment if you want to display an error message
  // if (error) {
  //     return <h1>Error: {error}</h1>
  // }

  return (
    <div>
      {/* ====== feature product title ====  */}
      <div className="md:flex md:items-center md:justify-between">
        <h1 className="text-2xl md:text-2xl font-semibold text-center">
          Featured products
        </h1>
        <Link
          href={"/products"}
          className=" font-medium capitalize text-sm bg-navBgColor text-white p-1.5 rounded-sm hidden md:block hover:bg-hoverNavBgColor duration-200 ease-in-out"
        >
          view all Featured products
        </Link>
      </div>
      {/* ====== feature product title end =====  */}

      {/* ====== feature products ===  */}
      <div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
          {product.map((product, index) => (
            <Link
              href={`/products/${product.slug}`}
              key={index}
              className=" border border-gray-100 p-2 shadow hover:shadow-md hover:border-gray-200 duration-200 ease-in-out"
            >
              <Image
                src={product.featured_image}
                width={300}
                height={300}
                alt={product.name}
              />
              <div className="text-center">
                <h1 className="font-semibold capitalize text-base">
                  {product.name}
                </h1>
                <p className="font-medium text-red-500 text-sm mt-1">
                  {product?.extraFields?.find(field => field.meta_name === "product_short_description")?.meta_value?.split("").slice(0, 10).join(" ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href={"/products"}
          className=" font-medium capitalize text-sm bg-navBgColor text-white p-1.5 rounded-sm hover:bg-hoverNavBgColor duration-200 ease-in-out md:hidden mt-6 inline-block"
        >
          View all Featured products
        </Link>
      </div>

      {/* ==== end Feature products ===  */}
    </div>
  );
};

export default FeatureProduct;
