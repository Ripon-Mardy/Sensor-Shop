"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import RelatedProduct from "@/components/RelatedProduct";
import Loading from "@/components/Loading";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoIosClose } from "react-icons/io";
import axiosInstance from "@/helpers/axiosInstance"; // Import axiosInstance
import GetAQuote from "@/components/GetAQuote";
import CategorySection from "@/components/CategorySection"; // Import CategorySection

const ProductSingle = ({ params }) => {
  const slug = params.slug;

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productImage, setProductImage] = useState();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // State to manage the collapse

  const openPopUp = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axiosInstance.get('/categories?taxonomy_type=categories');
        setCategoryData(response.data.data);
      } catch (error) {
        // handle error
      }
    };
    fetchCategory();

    const fetchSingleProduct = async () => {
      try {
        const res = await axiosInstance.get(`/post?slug=${slug}`);
        setProduct(res.data.data);
        setProductImage(res.data.data.featured_image);
      } catch (error) {
        setError("Error: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleProduct();
  }, [slug]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  const openFullScreen = () => setIsFullScreen(true);
  const closeFullScreen = () => setIsFullScreen(false);

  const handleNextImage = () => {
    if (product.extra_fields[2]?.meta_value) {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % product.extra_fields[2]?.meta_value.length;
        setProductImage(product.extra_fields[2]?.meta_value[nextIndex]);
        return nextIndex;
      });
    }
  };

  const handlePrevImage = () => {
    if (product.extra_fields[2]?.meta_value) {
      setCurrentImageIndex((prevIndex) => {
        const previousIndex = (prevIndex - 1 + product.extra_fields[2]?.meta_value.length) % product.extra_fields[2]?.meta_value.length;
        setProductImage(product.extra_fields[2]?.meta_value[previousIndex]);
        return previousIndex;
      });
    }
  };

  const toggleCategories = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container mx-auto px-3 md:px-0 pt-3">
        <div className="md:flex md:justify-between gap-5">          
          <div className="xl:w-1/4">
            <div className="flex flex-col gap-3">
              <CategorySection categories={categoryData} isOpen={isOpen} toggleCategories={toggleCategories} height="500px" />
            </div>
          </div>
          <div className="xl:w-full overflow-hidden">
          <div className="flex flex-col md:flex-row gap-5">
              <div className="basis-1/2 flex flex-col md:gap-5 pb-5 pr-0">
                <div className="md:h-1/2 mx-auto w-full">
                  <div className="relative">
                    <Image
                      src={productImage || product?.featured_image}
                      width={200}
                      height={200}
                      alt={product?.name || 'Product Image'}
                      className="w-full object-cover mx-auto"
                      layout="responsive"
                      priority={false}
                    />
                    <span
                      onClick={openFullScreen}
                      className="absolute right-3 bottom-3 text-xl border border-gray-300 p-1 cursor-pointer rounded-md text-white bg-gray-600"
                    >
                      <SlSizeFullscreen />
                    </span>
                  </div>

                  {/* Fullscreen view */}
                  {isFullScreen && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
                      <div className="relative max-w-full max-h-full">
                        <img
                          src={productImage || product?.featured_image}
                          alt="Full Screen"
                          className="w-full h-auto max-h-[90vh] object-cover"
                        />
                        <button
                          className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full"
                          onClick={closeFullScreen}
                        >
                          <IoIosClose />
                        </button>

                        <button
                          className="absolute left-4 top-1/2 bg-gray-800 text-white p-2 rounded-full"
                          onClick={handlePrevImage}
                        >
                          Prev
                        </button>
                        <button
                          className="absolute right-4 top-1/2 bg-gray-800 text-white p-2 rounded-full"
                          onClick={handleNextImage}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-center pt-5 gap-4">
                    <div className="">
                      <Image
                        onClick={() => setProductImage(product.featured_image)}
                        src={product.featured_image}
                        width={100}
                        height={100}
                        className="cursor-pointer w-full object-cover"
                        alt="Featured Image"
                      />
                    </div>

                    {product?.extra_fields
                      .filter(field => field.meta_name === "product_extra_images")
                      .map(field =>
                        Array.isArray(field.meta_value) ? (
                          field.meta_value.map((img, index) => (
                            <div key={index} className="">
                              <Image
                                onClick={() => setProductImage(img)}
                                src={img}
                                width={100}
                                height={100}
                                className="cursor-pointer w-full object-cover"
                                alt={`Product Image ${index + 1}`}
                              />
                            </div>
                          ))
                        ) : null
                      )}
                  </div>

                </div>
              </div>
              <div className="md:w-1/2 flex flex-col gap-4">
                <div className="flex gap-8 items-center justify-start">
                  {(() => {
                    const filteredCategories = product?.categories.filter(category => category.taxonomy_type === "product_brands");
                    return (
                      <div>
                        {filteredCategories.map(category => (
                          <div key={category?.id} className="flex items-center gap-5">
                            <Link href={`/category/${category?.slug}`}>
                              <Image
                                src={category?.media_url}
                                width={100}
                                height={100}
                                alt={category?.name}
                              />
                            </Link>
                            <Link href={`/category/${category?.slug}`}>
                              <h1 className="text-lg">{category?.name}</h1>
                            </Link>
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                </div>

                <h1 className="text-xl md:text-xl text-header_text font-bold pb-1">
                  {product?.name}
                </h1>

                <p className="text-base border-b border-gray-100 pb-1 font-medium">
                  {typeof product?.extra_fields?.find(
                    (field) => field.meta_name === "product_short_description"
                  )?.meta_value === "string"
                    ? product.extra_fields.find((field) => field.meta_name === "product_short_description").meta_value.slice(0, 310)
                    : ""}
                </p>

                <div className="flex flex-col justify-start gap-5 flex-wrap">
                  {product?.extra_fields.find(field => field.meta_name === "origin")?.meta_value && (
                    <div className="flex">
                      <h5 className="w-40 text-gray-500">Origin</h5>
                      <p className="w-full">{product?.extra_fields.find(field => field.meta_name === "origin")?.meta_value}</p>
                    </div>
                  )}

                  {product?.extra_fields.find(field => field.meta_name === "condition")?.meta_value && (
                    <div className="flex">
                      <h5 className="w-40 text-gray-500">Condition</h5>
                      <p className="w-full">{product?.extra_fields.find(field => field.meta_name === "condition")?.meta_value}</p>
                    </div>
                  )}

                  {product?.extra_fields.find(field => field.meta_name === "warranty")?.meta_value && (
                    <div className="flex">
                      <h5 className="w-40 text-gray-500">Warranty</h5>
                      <p className="w-full">{product?.extra_fields.find(field => field.meta_name === "warranty")?.meta_value}</p>
                    </div>
                  )}

                  {product?.extra_fields.find(field => field.meta_name === "price")?.meta_value && (
                    <div className="flex">
                      <h5 className="w-40 text-gray-500">Price</h5>
                      <p className="w-full">
                        <span className="text-xl font-bold">BDT {product?.extra_fields.find(field => field.meta_name === "price")?.meta_value}</span>
                      </p>
                    </div>
                  )}

                  {product?.extra_fields.find(field => field.meta_name === "purchase_notes")?.meta_value && (
                    <div>
                      <p>
                        {product?.extra_fields.find(field => field.meta_name === "purchase_notes")?.meta_value}
                      </p>
                    </div>
                  )}
                  <div className="p-4 bg-yellow-50 text-sm text-gray-600">
                    <p>
                      TBL is not an authorized
                      {(() => {
                        const filteredCategories = product?.categories.filter(category => category.taxonomy_type === "product_brands");
                        return (
                          <>
                            {filteredCategories.map(category => (
                              <Link href={`/category/${category?.slug}`} key={category?.id}>
                                <span className="font-semibold"> {category?.name} </span>
                              </Link>
                            ))}
                          </>
                        );
                      })()}
                      distributor, but we have independent supplier, so we can provide competitive pricing.
                    </p>
                  </div>
                </div>

                <button
                  onClick={openPopUp}
                  className="capitalize text-sm bg-navBgColor text-white p-2 px-4 rounded-sm hover:bg-hoverNavBgColor duration-200 ease-in-out w-1/2 text-center font-semibold"
                >
                  Get a quote
                </button>

                <GetAQuote
                  visible={isFormVisible}
                  onClose={handleCloseForm}
                  productName={product?.name}
                  productId={product?.id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>      
      <div className="container mx-auto px-3">
        <div className="py-10">
          <RelatedProduct />
        </div>
      </div>
    </>
  );
};

export default ProductSingle;