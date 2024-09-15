"use client";
import React, { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "@/helpers/axiosInstance";
import { AxiosError } from "axios";

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
          <h1 className="text-2xl capitalize font-medium">All Products</h1>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
            {products.map((product, index) => (
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
        </div>
      </section>
    </>
  );
};

export default Products;
