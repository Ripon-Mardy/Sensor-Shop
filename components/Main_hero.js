"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axiosInstance from "@/helpers/axiosInstance";

// ===== components ====
import Banner_slide from "./Banner_slide";
import Brands from "./Brands";
import Feature_product from "./Feature_product";
import Proud_clients from "./Proud_clients";
import Services from "./Services";
import HtmlRenderer from "./HtmlRenderer";

// === icnos ===
import { IoSearch } from "react-icons/io5";

//  ==== image===
import productBanner from "./../public/image/3830.jpg";
import choose1 from "./../public/image/why choose us/images.jpg";
import { useRouter } from "next/navigation";

const Main_hero = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [error, setError] = useState(true);

  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const router = useRouter();
  const [main_speech, setMainSpeech] = useState();

  const [selectCategory, setSelectCategory] = useState([]);

  useEffect(() => {
    // fetch category
    const fetchCategory = async () => {
      try {
        const res = await axiosInstance.get('/categories?taxonomy_type=categories')
        // setCategoryData(data.data);
        setCategoryData(res.data.data)
      } catch (error) {
        setError("Error", error.message);
      }
    };
    fetchCategory();

    // Fetch Product
    const fetchProduct = async () => {
      try {
        const res = await axiosInstance.get('/posts?term_type=product')
        // setProduct(data.data);
        setProduct(res.data.data)
      } catch (error) {
        console.log("error", error.message);
      }
    };
    fetchProduct();

    // Fetch Main Speech
    const main_speech = async () => {
      try {
        const response = await axiosInstance.get('/frontend/settings?meta_name=main_speech&meta_type=Text')
        // setMainSpeech(data.data);
        setMainSpeech(response.data.data)
      } catch (error) {}
    };
    main_speech();

    // Search Term
    if (searchTerm) {
      const productFilter = product.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterProducts(productFilter);
    } else {
      setFilterProducts([]);
    }

    // Handle Click outside

    const handleClickOutside = () => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchTerm, product]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsFocused(true);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const product = filterProducts.find(
      (product) => product.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (product) {
      setSearchTerm("");
      setFilterProducts([]);
      setIsFocused(false);
      router.push(`/products/${product.slug}`);
    }
  };

  return (
    <div className="container mx-auto px-3 md:px-0 py-10">
      <div className="md:flex md:justify-between md:gap-10">
        {/* ==== categories ===  */}
        <div className=" xl:w-1/4">
          <div className="flex flex-col gap-16">
            <div className="border-2 border-navBorder rounded-md hidden md:block">
              <h1 className="bg-navBgColor text-white py-2 pl-3 text-xl capitalize font-medium">
                Categories
              </h1>
              <div className="flex flex-col h-96 gap-3 p-3 text-textNavColor font-semibold text-sm capitalize overflow-y-auto">
                {categoryData.map((categoryItem, categoryIndex) => (
                  <div key={categoryIndex}>
                    <Link href={`/category/${categoryItem.slug}`}>
                      {categoryItem.name}{" "}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* === mobile search Bar === */}
            <form
              onSubmit={handleSearchSubmit}
              className="md:hidden w-full flex items-center justify-between border border-navBorder rounded-md relative"
            >
              <input
                type="text"
                className=" w-full py-1.5 outline-none text-base pl-2"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => setIsFocused(true)}
              />
              <button type="submit" className="bg-navBgColor py-2.5 px-2.5">
                <IoSearch className="text-base text-white" />
              </button>
              {isFocused && filterProducts.length > 0 && (
                <ul className="absolute left-0 top-full bg-white border rounded w-full z-30">
                  {filterProducts.map((product) => (
                    <li
                      key={product.id}
                      className="p-2 cursor-pointer hover:bg-gray-200"
                    >
                      <Link
                        href={`/products/${product.slug}`}
                        onClick={() => {
                          setSearchTerm("");
                          setFilterProducts([]);
                          setIsFocused(false);
                        }}
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </form>
            {/* ===== end mobile search bar ====  */}

            {/* ==== left side bannar ====  */}
            <div className="hidden md:block">
              <Image src={productBanner} className="rounded-md" alt="image" priority={false} />
            </div>
            {/* ==== end left side banner ====  */}

            {/* ====why choose us ===  */}
            <div className="hidden md:block">
              <h1 className="text-xl font-semibold text-center mb-2">
                Why Choose us?
              </h1>
              <Image src={choose1} className="rounded-md" alt="choose" priority={false} />
            </div>
            {/* ===== end why choose us ====  */}

            {/* ==== left side bannar ====  */}
            <div className="hidden md:block">
              <Image src={productBanner} className="rounded-md" alt="choose" priority={false} />
            </div>
            {/* ==== end left side banner ====  */}
          </div>
        </div>
        {/* === end categories ===  */}

        {/* ==== right side bar ===  */}
        <div className=" xl:w-full overflow-hidden">
          <div className=" mt-6 md:mt-0 md:h-fit">
            <Banner_slide />
          </div>

          {/* ======  Banner botton text ===  */}
          <div className="md:py-10 py-5">
            <h1 className="text-2xl md:text-3xl text-center font-semibold">
              <HtmlRenderer html={main_speech?.meta_value} />
            </h1>
          </div>
          {/* === end banner bottom text ===  */}

          {/* ====  Brands ====  */}
          <div className="md:py-7 py-14">
            <Brands />
          </div>
          {/* ==== end Brands ===  */}

          {/* ==== feature product ===  */}
          <div className="py-14">
            <Feature_product />
          </div>
          {/* ==== end feature product ====  */}

          {/* ==== proud clients ====  */}
          <div className="md:py-12 py-14">
            <Proud_clients />
          </div>
          {/* ====end proud clients ====  */}

          {/* ==== servcies ===  */}
          <div className="py-14">
            <Services />
          </div>
          {/* ==== end services ===  */}
        </div>
        {/* === end right side bar ====  */}
      </div>
    </div>
  );
};

export default Main_hero;
