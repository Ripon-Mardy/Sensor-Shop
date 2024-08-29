"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// === icons ===
import { FaAnglesRight } from "react-icons/fa6";
import Related_product from "@/components/Related_product";

import { motion } from "framer-motion";

// ==== imges ====
import product1 from "../../../public/image/Feature Product/f1.jpg";
import product2 from "../../../public/image/Feature Product/f2.jpg";

const page = ({ params }) => {
  const slug = params.slug;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://mathmozocms.test/api/v1/post/${slug}`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setProduct(data.data);
    };
    fetchProduct();
  }, [slug]);

  // ===== product slide ===

  const products = [
      { id: 1, name: 'Product 1', image: product1 },
      { id: 2, name: 'Product 2', image: product2 },
    ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevbutton = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNextbutton = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <>
      <section>
        <div className="container mx-auto px-3 md:px-0 py-10">
          <div className="flex items-center gap-2">
            <Link href={"/"} className="flex items-center gap-1">
              Home <FaAnglesRight className="text-sm" />
            </Link>
            <span>Product</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-20 md:w-3/4 mx-auto">
            <div className="flex items-center justify-center py-5 mt-5">
              <div className="relative w-full max-w-xl mx-auto overflow-hidden">
                <motion.div
                  className="flex"
                  initial={{ x: "-100%" }}
                  animate={{ x: `-${currentIndex * 100}%` }}
                  transition={{ duration: 0.5 }}
                >
                  {products.map((product) => (
                  <div
                    key={product.id}
                    className="min-w-full flex-shrink-0 flex justify-center items-center"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="object-cover md:w-1/2 w-1/2 h-60"
                      width={300}
                      height={300}
                    />
                  </div>
                   ))}
                </motion.div>

                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    onClick={handlePrevbutton}
                    className="bg-gray-400 text-white p-1 rounded-full"
                  >
                    &lt;
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    onClick={handleNextbutton}
                    className="bg-gray-400 text-white p-1 rounded-full"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-xl font-bold"> {product.name} </h1>
              <div className="mt-3">
                <div className=" flex items-center justify-between gap-5 border-b border-gray-300 py-2">
                  <div>Condition</div>
                  <div>New Factory Sealed</div>
                </div>
                <div className="flex items-center justify-between gap-5 border-b border-gray-300 py-2">
                  <span>Shipping</span>
                  <span>Weight: 0.20 kg</span>
                </div>
                <div className="flex items-center justify-between gap-5 border-b border-gray-300 py-2">
                  <span>From</span>
                  <span>United Arab Emirates</span>
                </div>
                <div className="flex items-center justify-between gap-5 border-b border-gray-300 py-2">
                  <span>Warranty</span>
                  <span>1 Year Against the Manufacturer Defect</span>
                </div>
              </div>
            </div>
          </div>

          {/* ==== related product ===  */}
          <div className="py-14">
            <Related_product />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
