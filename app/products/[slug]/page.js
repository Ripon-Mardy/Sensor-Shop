"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import Related_product from "@/components/Related_product";
import Loading from "@/components/Loading";
import Get_a_quote from "@/components/Get_a_quote";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoIosClose } from "react-icons/io";

const page = ({ params }) => {
  const slug = params.slug;

  const [product, setProduct] = useState([]); // set product data
  console.log('product', product);

  const [loading, setLoading] = useState(true); // set loading 
  const [error, setError] = useState(false); // set error
  const [productExtraFieldIndex1, setProductExtraField1] = useState([]);
  const [productExtraFieldIndex2, setProductExtraField2] = useState([]);
  const [productImage, setProductImage] = useState(); // product images add
  const [isFullScreen, setIsFullScreen] = useState(false); // Fullscreen state
  const [isFormVisible, setIsFormVisible] = useState(false); // form visible

  const openPopUp = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  useEffect(() => {
    const fetchsingleProduct = async () => {
      try {
        const res = await fetch(
          `http://mathmozocms.test/api/v1/post?slug=${slug}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await res.json();
        setProduct(data.data);
        setProductImage(data.data.featured_image);
      } catch (error) {
        setError("Error", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchsingleProduct();
  }, [slug]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div> {error} </div>;
  }

  const openFullScreen = () => setIsFullScreen(true);
  const closeFullScreen = () => setIsFullScreen(false);

  return (
    <>
      <section>
        <div className="container mx-auto px-3 py-10">
          {/* === home link ==  */}
          {/* <div className="border border-gray-300 rounded-md w-fit p-2 text-sm">
            <Link href={"/"}>Home /</Link>
            <span> Product /</span>
            <span className="text-gray-600"> {product.name} </span>
          </div> */}
          {/* ===== product details ====  */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 py-10">
            <div className="md:basis-1/2 border border-gray-200 rounded-md flex flex-col gap-5 p-5">
              {/* <Image
                src={product.featured_image}
                className=" mx-auto w-3/4 md:w-2/3"
                width={200}
                height={200}
              /> */}

              <div className="md:w-3/4 md:h-1/2 mx-auto">
                {/* ==== product slider ====  */}
                <div className="relative border border-gray-200">
                  <Image
                    src={productImage}
                    width={200}
                    height={200}
                    alt={product.name}
                    className="w-full object-cover mx-auto rounded-lg"
                    layout="responsive"
                  />
                  <span onClick={openFullScreen} className="absolute right-3 bottom-3 text-xl border border-gray-300 p-1 cursor-pointer rounded-md text-white bg-gray-600">
                    <SlSizeFullscreen />
                  </span>
                </div>
                {/* ==== full screen image ====  */}
                {/* Full Screen Modal */}
                {isFullScreen && (
                  <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="relative">
                      <img
                        src={productImage}
                        alt="Full Screen"
                        className="w-full h-full object-cover"
                      />
                      <button
                        className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full"
                        onClick={closeFullScreen}
                      >
                        <IoIosClose />
                      </button>
                    </div>
                  </div>
                )}
                {/* ==== end full screen images ====  */}
                <div className="flex items-center justify-center gap-4 mt-5">
                  {Array.isArray(product.extra_fields[0]?.meta_value) &&
                    product.extra_fields[0]?.meta_value.map((img, index) => (
                      <div key={index} className="border border-gray-200">
                        <Image
                          onClick={() => setProductImage(img)}
                          src={img}
                          width={100}
                          height={100}
                          className="cursor-pointer rounded-md"
                        />
                      </div>
                    ))
                  }
                </div>
                {/* === end product slider ===  */}
              </div>
            </div>
            {/* ===right ==  */}
            <div className="md:basis-1/2 flex flex-col gap-5 md:gap-5">
              <h1 className="text-2xl md:text-3xl text-header_text font-bold">
                {product.name}
              </h1>
              <p> {product.meta_description} </p>

              <div className="flex flex-col gap-3">
                {/* <div className="flex items-start gap-7">
                  <h1 className="font-medium w-20">Brand</h1>
                  <span> {product.extra_fields[1].term_type} </span>
                </div> */}
                <div className="flex items-start gap-4 text-lg">
                  <h1 className="font-medium">Origin</h1>
                  <span> {product.term_type} </span>
                </div>
                <div className="flex items-start gap-4">
                  <h1 className="font-medium">Condition</h1>
                  <span> {product.meta_title} </span>
                </div>
                <div className="flex items-start gap-4">
                  <h1 className="font-medium">warranty</h1>
                  <span> {product.term_type} </span>
                </div>
                <div className="flex items-start gap-4">
                  <h1 className="font-medium">Price</h1>
                  <span className="text-lg font-semibold"> {product.extra_fields[1].meta_value} tk </span>
                </div>
              </div>
              <button
                onClick={() => openPopUp(product.name)}
                href={"/get-a-quote"}
                className=" capitalize text-sm bg-navBgColor text-white p-2 px-4 rounded-sm hover:bg-hoverNavBgColor duration-200 ease-in-out w-1/2 text-center font-semibold"
              >
                Get a quote
              </button>
              {/* === get a quote form ==  */}
              <Get_a_quote
                visible={isFormVisible}
                onClose={handleCloseForm}
                productName={product.name}
              />
              {/* ==== end get a quote form ===  */}
            </div>
          </div>
          {/* ==== end  */}

          <div className="py-10">
            <Related_product />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
