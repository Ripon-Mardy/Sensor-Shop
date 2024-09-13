"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import Related_product from "@/components/Related_product";
import Loading from "@/components/Loading";
import Get_a_quote from "@/components/Get_a_quote";

const page = ({ params }) => {
  const slug = params.slug;

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productExtraFieldIndex1, setProductExtraField1] = useState([]);
  const [productExtraFieldIndex2, setProductExtraField2] = useState([]);

  const [productImages, setProudctImages] = useState([]);

  const [mainImage, setMainImage] = useState(product);

  // const [mainImage, setMainImage] = useState(images[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: "50%", y: "50%" });
  const imageContainerRef = useRef(null);

  const [isFormVisible, setIsFormVisible] = useState(false);

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
        setProductExtraField1(data.data.extra_fields[0]);
        setProductExtraField2(data.data.extra_fields[1]);
        setProudctImages(data.data.extra_fields[0].meta_value);
        setMainImage(data.data.extra_fields[0].meta_value[0]);
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

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      imageContainerRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomPosition({ x: `${x}%`, y: `${y}%` });
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };
  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleImageClick = (image) => {
    setMainImage(image);
  };

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
            <div className="md:basis-1/2 border border-gray-200 rounded-md">
              <Image
                src={product.featured_image}
                className=" mx-auto w-3/4 md:w-2/3"
                width={200}
                height={200}
              />

              {/* ==== product slider ====  */}
              {/* <div className="flex flex-col items-center">
                  <div
                    className="w-3/4 h-full mb-3 overflow-hidden relative"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    ref={imageContainerRef}
                  >
                    <Image
                      src={mainImage}
                      width={200}
                      height={200}
                      alt="Main Product"
                      className={`w-full h-full object-cover transition-transform duration-300 ${
                        isZoomed ? "md:scale-150" : ""
                      } `}
                    />
                  </div>

                  <div className="flex space-x-4">
                    { productImages.length === 0 && productImages.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        width={100}
                        height={100}
                        alt={`Product ${index + 1}`}
                        onClick={() => handleImageClick(image)}
                        className={`w-16 h-16 object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105 ${
                          image === mainImage
                            ? "border-2 border-blue-500"
                            : "border border-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div> */}
              {/* === end product slider ===  */}


            </div>
            {/* ===right ==  */}
            <div className="md:basis-1/2 flex flex-col gap-5 md:gap-5">
              <h1 className="text-2xl md:text-3xl text-header_text font-bold">
                {product.name}
              </h1>
              <p className="text-para_color">
                {productExtraFieldIndex1.meta_value}
              </p>
              <h2 className="text-xl text-header_text font-semibold">
                Regular Price : {productExtraFieldIndex2.meta_value} tk
              </h2>
              <div>
                <div className="text-para_color font-medium mt-1 md:mt-0 flex flex-col gap-2 text-sm text-left">
                  <h1 className="flex gap-5">
                    Product Code : <span> {product.meta_title} </span>
                  </h1>
                  <h1 className="flex gap-5">
                    Delivery Area : <span> {product.meta_description} </span>
                  </h1>
                  <h1 className="flex gap-5">
                    Condition : <span> New Factory Sealed</span>
                  </h1>
                  <h1 className="flex gap-5">
                    From : <span> {product.meta_keyword} </span>
                  </h1>
                  <h1 className="flex gap-5">
                    Warranty :<span> {product.meta_author} </span>
                  </h1>
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
