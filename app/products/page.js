"use client";
import React, { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "@/helpers/axiosInstance";
import { AxiosError } from "axios";

import seimens from '../../public/image/siemens.png'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async (retries = 3) => {
      try {
        const res = await axiosInstance.get("/posts?term_type=product");
        setProducts(res.data.data);
      } catch (error) {
        if (error.response?.status === 429 && retries > 0) {
          // Retry after a delay if rate limited
          setTimeout(() => fetchProducts(retries - 1), 1000);
        } else {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
          {/* <h1 className="text-2xl capitalize font-medium">All Products</h1> */}

          <div className="md:w-2/3 mx-auto flex flex-col gap-8">
            {products.map((product, index) => (
              <Link
                href={`/products/${product.slug}`}
                key={index}
                className=" border border-gray-100 shadow hover:shadow-md hover:border-gray-200 duration-200 ease-in-out flex items-center justify-start p-2 gap-3 md:gap-6"
              >
                <Image
                  src={product.featured_image}
                  width={300}
                  height={300}
                  alt={product.name}
                  priority={false}
                  className="w-2/5 md:w-1/5 h-48 object-cover"
                />
                <div className="flex flex-col gap-3">
                  <div className="flex gap-10 items-center">
                    <Image src={seimens} width={100} height={100} alt={product.name} />
                    <h1>Brands</h1>
                  </div>
                  <h1 className="font-semibold capitalize text-lg md:text-xl">
                    {product.name}
                  </h1>
                  <p className="text-sm md:text-base"> {product.meta_description} </p>
                  <p className="text-xs"> Estimated lead time: {product?.extraFields?.[0].created_at} </p>
                  <p className="font-medium text-red-500 text-sm mt-1">
                    {/* {product?.extraFields?.find(field => field.meta_name === "product_short_description")?.meta_value?.split("").slice(0, 10).join(" ")} */}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
