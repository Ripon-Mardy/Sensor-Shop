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
        const res = await axiosInstance.get("/posts?term_type=product&per_page=100");
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
        const response = await axiosInstance.get('/categories?taxonomy_type=categories&limit=40');
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
      <div className="container mx-auto px-3 md:px-0 pt-3 pb-10">
        <div className="md:flex md:justify-between gap-5">
          <div className="xl:w-1/4 md:w-1/3">
            <CategorySection categories={categoryData} isOpen={isOpen} toggleCategories={toggleCategories} height="500px" />
          </div>
          <div className="xl:w-full overflow-hidden">
            <div className="md:basis-[80%] md:w-full md:pt-0 pt-5 mx-auto flex flex-col gap-5">
              {products.map((product, index) => (
                <div key={index} className="flex gap-4">
                  {/* Image Container */}
                  <div className="w-1/2 md:w-[25%] 2xl:w-[20%]">
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
                  <div className="w-1/2 md:w-[75%] 2xl:w-[80%] flex flex-col gap-0 md:gap-3">
                    <div className="flex flex-col sm:flex-row gap-10 items-start sm:items-center">
                      {product?.categories.filter(category => category.taxonomy_type === "product_brands").map(category => (
                        <div key={category?.id} className="flex items-center flex-col sm:flex-row items-start sm:items-center gap-2">
                          <Link
                            href={`/category/${category?.slug}`}
                          >
                            <Image
                              src={category?.media_url}
                              width={100}
                              height={100}
                              alt={category?.name}
                              className="object-cover"
                            />
                          </Link>
                          <Link className="md:block hidden" href={`/category/${category?.slug}`}>
                            <h2 className="text-lg">{category?.name}</h2>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <h2 className="font-medium text-base sm:max-w-[70ch] sm:truncate md:overflow-hidden sm:break-words sm:one-line-clamp">
                      <Link href={`/products/${product.slug}`}>
                        {product?.name}
                      </Link>
                    </h2>
                    {product?.extraFields.find(field => field.meta_name === "product_model")?.meta_value && (
                      <div className="flex md:hidden">
                        <h5 className="w-24 text-sm text-gray-500">Model</h5>
                        <p className="w-full text-sm">{product?.extraFields.find(field => field.meta_name === "product_model")?.meta_value}</p>
                      </div>
                    )}
                    <p className="text-para_color text-sm lg:block hidden">
                      {typeof product?.extraFields?.find(
                        (field) => field.meta_name === "product_short_description"
                      )?.meta_value === "string"
                        ? product.extraFields
                          .find((field) => field.meta_name === "product_short_description")
                          .meta_value.slice(0, 150)
                        : ""}
                    </p>
                    <p className="pt-2 md:pt-0">
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
        </div>
      </div>
    </>
  );
};

export default Products;
