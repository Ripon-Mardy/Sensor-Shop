"use client";
import React, { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "@/helpers/axiosInstance";
import GetAQuote from "@/components/GetAQuote";
import CategorySection from "@/components/CategorySection";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openPopUp = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const toggleCategories = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchProducts = async (retries = 3) => {
      try {
        const res = await axiosInstance.get("/posts?term_type=product");
        setProducts(res.data.data);
      } catch (error) {
        if (error.response?.status === 429 && retries > 0) {
          setTimeout(() => fetchProducts(retries - 1), 1000);
        } else {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // Fetch categories
    const fetchCategory = async () => {
      try {
        const response = await axiosInstance.get('/categories?taxonomy_type=categories');
        setCategoryData(response.data.data);
      } catch (error) {
        setError('Failed to fetch categories');
      }
    };
    fetchCategory();
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
      <section className="py-5">
        <div className="container mx-auto px-3 flex flex-col md:flex-row justify-between gap-5 md:gap-10">

          {/* Categories Section */}
          <CategorySection categories={categoryData} isOpen={isOpen} toggleCategories={toggleCategories} />

          {/* Products Section */}
          <div className="md:basis-[80%] md:w-full mx-auto flex flex-col gap-8">          
            {products.map((product, index) => (
              <div key={index} className="flex gap-4">
                {/* Image Container */}
                <div className="w-1/2 md:w-[20%]">
                  <Link
                    href={`/products/${product.slug}`}
                    className="border border-gray-100 shadow hover:shadow-md hover:border-gray-200 duration-200 ease-in-out flex items-center justify-start p-2 gap-3 md:gap-6"
                  >
                    <Image
                      src={product.featured_image}
                      width={300}
                      height={300}
                      alt={product.name}
                      priority={false}
                      className="w-full object-cover"
                    />
                  </Link>
                </div>

                {/* Product Details */}
                <div className="w-1/2 md:w-[80%] flex flex-col gap-3">
                  <div className="flex gap-10 items-center">
                    {product?.categories.filter(category => category.taxonomy_type === "product_brands").map(category => (
                      <div key={category?.id} className="flex items-center gap-2">
                        <Link href={`/category/${category?.slug}`}>
                          <Image
                            src={category?.media_url}
                            width={100}
                            height={100}
                            alt={category?.name}
                            className="object-cover"
                          />
                        </Link>
                        <Link href={`/category/${category?.slug}`}>
                          <h2 className="text-lg">{category?.name}</h2>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <h2 className="font-medium text-base">
                    <Link href={`/products/${product.slug}`}>
                      {product?.name}
                    </Link>
                  </h2>

                  <p className="text-para_color text-sm md:block hidden">
                    {typeof product?.extraFields?.find(
                      (field) => field.meta_name === "product_short_description"
                    )?.meta_value === "string"
                      ? product.extraFields
                        .find((field) => field.meta_name === "product_short_description")
                        .meta_value.slice(0, 150)
                      : ""}
                  </p>
                  <p>
                    <button
                      onClick={openPopUp}
                      className="capitalize text-sm bg-navBgColor text-white p-2 px-4 rounded-sm hover:bg-hoverNavBgColor duration-200 ease-in-out w-fit text-center font-semibold"
                    >
                      Get a quote
                    </button>
                    <GetAQuote
                      visible={isFormVisible}
                      onClose={handleCloseForm}
                      productName={product?.name}
                      productId={product?.id}
                    />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
