"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CategorySection from "@/components/CategorySection";

import RelatedProduct from "@/components/RelatedProduct";
import Loading from "@/components/Loading";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoIosClose } from "react-icons/io";
// ==== image ==== 
import seimens from '../../../public/image/siemens.png';
import axiosInstance from "@/helpers/axiosInstance"; // Import axiosInstance
import GetAQuote from "@/components/GetAQuote";

const Page = ({ params }) => {
  const slug = params.slug;

  const [product, setProduct] = useState([]); // set product data

  const [loading, setLoading] = useState(true); // set loading 
  const [error, setError] = useState(false); // set error
  const [productExtraFieldIndex1, setProductExtraField1] = useState([]);
  const [productExtraFieldIndex2, setProductExtraField2] = useState([]);
  const [productImage, setProductImage] = useState(); // product images add
  const [isFullScreen, setIsFullScreen] = useState(false); // Fullscreen state
  const [isFormVisible, setIsFormVisible] = useState(false); // form visible
  const [categoryData, setCategoryData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openPopUp = () => {
    setIsFormVisible(!isFormVisible);
  };

  const toggleCategories = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  useEffect(() => {

    // fetch category 
    const fetchCategory = async () => {
      try {
        const response = await axiosInstance.get('/categories?taxonomy_type=categories');
        setCategoryData(response.data.data)
      } catch (error) {
        
      }
    }
    fetchCategory()

    const fetchSingleProduct = async () => {
      try {
        const res = await axiosInstance.get(`/post?slug=${slug}`); // Use axiosInstance
        setProduct(res.data.data);
        setProductImage(res.data.data.featured_image);
      } catch (error) {
        setError("Error", error.message);
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

  return (
    <>
      <section className="py-5">
        <div className="container mx-auto px-3 md:py-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:basis-[25%] max-w-full">
              {/* Categories Section */}
              <CategorySection categories={categoryData} isOpen={isOpen} toggleCategories={toggleCategories} />
            </div>
            <div className="basis-full">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="basis-1/2 flex flex-col md:gap-5 md:pl-5 pb-5 pr-0">
                  <div className="md:h-1/2 mx-auto w-full">
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
                {/* )} */}
                
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
                          className="cursor-pointer rounded-md w-28 h-28 object-cover"
                        />
                      </div>
                    ))}
                </div>
                {/* === end product slider ===  */}
              </div>
            </div>
            {/* ===right ==  */}
            <div className=" md:w-1/2 flex flex-col gap-6 p-5">
              <div className="flex gap-8 items-center justify-start">
                <Image src={seimens} width={100} height={100} alt="seimens" />
                <h1 className="text-2xl md:text-2xl text-header_text font-bold border-b border-gray-100 pb-1">
                  {product.name}
                </h1>
              </div>
              <p className="text-lg border-b border-gray-100 pb-1 font-medium">
                {product.meta_description}
              </p>
              {/* {JSON.stringify(product)} */}

              <div className="flex flex-col justify-start gap-5 flex-wrap">

                <div className="flex">
                  <h5 className="w-40"> Brand </h5>
                  <p className="w-full">SIEMENS</p>
                </div>
                <div className="flex">
                  <h5 className="w-40"> Origin </h5>
                  <p className="w-full">Germany</p>
                </div>
                <div className="flex">
                  <h5 className="w-40"> Condition </h5>
                  <p className="w-full">Brand New</p>
                </div>
                <div className="flex">
                  <h5 className="w-40"> Warranty </h5>
                  <p className="w-full">10 months from the daily delivery date. 10 months from the daily delivery date. 10 months from the daily delivery date.</p>
                </div>

                <div className="flex">
                  <h5 className="w-40"> Price </h5>
                  <p className="w-full"> <span className="text-xl font-bold">BDT, 1000</span> <span className="text-sm font-medium ml-3"> 2 pcs in stock </span> </p>
                </div>

                <div className="">
                  <p>TBL is not an authorized BrandNAME distributor,
                  but we have independent supplier, so we can provide competitive pricing.</p>
                </div>
              </div>

              <button
                onClick={() => openPopUp(product.name)}
                href={"/get-a-quote"}
                className="capitalize text-sm bg-navBgColor text-white p-2 px-4 rounded-sm hover:bg-hoverNavBgColor duration-200 ease-in-out w-1/2 text-center font-semibold"
              >
                Get a quote
              </button>
              {/* === get a quote form ==  */}
              <GetAQuote
                visible={isFormVisible}
                onClose={handleCloseForm}
                productName={product?.name}
                productId={product?.id}
              />
              {/* ==== end get a quote form ===  */}
            </div>
           </div>
          </div>
          {/* ==== end  */}
         </div>

          <div className="py-10">
            <RelatedProduct />
          </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Page;
