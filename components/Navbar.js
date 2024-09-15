"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import axiosInstance from "@/helpers/axiosInstance";

// image ====
import sensor_logo from "./../public/image/logo.png";

// === icons ====
import { IoIosSearch } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isMobileMenuIndex, setIsMobileMenuIndex] = useState(null);
  const [menuitems, setMenuItems] = useState([]);
  const inputRef = useRef(null);
  const router = useRouter();

  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleBarOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileMenuClick = (tabname) => {
    setIsMobileMenu(!isMobileMenu);
    setIsMobileMenuIndex(tabname);
  };


  useEffect(() => {
    // menu api
    const fetchMenu = async () => {
      try {
        const response = await axiosInstance.get('/menus')
        // setMenuItems(data.data[0].items);
        setMenuItems(response.data.data[0].items)
      } catch (error) {
        console.log("fail to fetch menu");
      } // end try
    }; // end fetchMenu
    fetchMenu();

    // search term 
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


    if (searchTerm) {
      const productFilter = product.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterProducts(productFilter);
    } else {
      setFilterProducts([]);
    }


    const handleClickOutside = () => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [searchTerm, product, menuitems]);


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
    <div className="shadow z-10 bg-white w-full">
      <div className=" container mx-auto px-3 md:px-0 md:flex md:items-center md:justify-between relative">
        {/* === logo == */}
        <div className="flexitems-center justify-between w-fit">
          <div className=" flex items-center justify-between py-1 md:py-0 ">
            <div>
              <Link href={"/"}>
                <Image
                  src={sensor_logo}
                  width={150}
                  height={150}
                  className="md:w-52"
                  alt='sensor shop'
                  priority={false}
                ></Image>
              </Link>
            </div>
            {/* ===== mobile bar ===  */}
            <div
              onClick={handleBarOpen}
              className="xl:hidden border border-navBorder p-1 absolute right-5 top-4 px-2 text-center rounded-sm"
            >
              <span className="text-lg">
                <FaBarsStaggered />
              </span>
            </div>
            {/* === end mobile bar =====  */}
          </div>
        </div>
        {/* === end logo ===  */}

        {/* ===dynamic menu ===  */}
        <div className="xl:flex items-center justify-center gap-10 border border-gray-300 rounded-sm py-1 px-4 hidden z-30">
          {menuitems.map((item, index) => (
            <div key={index}>
              <Link
                href={item.link}
                className="uppercase py-2 text-sm font-medium"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
        {/* ===== end dynamic menu ==-  */}

        {/* ==== search bar ====  */}
        <form
          onSubmit={handleSearchSubmit}
          className=" xl:flex md:items-center md:justify-between border border-navBorder rounded-sm hidden md:w-[30%] relative"
        >
          <input
            type="text"
            className=" w-full outline-none p-1 px-3 text-sm flex"
            placeholder="Search a product"
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => setIsFocused(true)}
          />

          <button
            type="submit"
            className="px-3 bg-navBgColor overflow-hidden py-1.5 cursor-pointer text-white text-xl"
          >
            <IoIosSearch />
          </button>
          {isFocused && filterProducts.length > 0 && (
            <ul className="absolute bg-white border rounded left-0 top-full w-full z-10">
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

        {/* === end search bar ====  */}
      </div>

      {/* ==== mobile menu ===  */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ x: "-100%" }}
              className="absolute left-0 top-0 h-screen bg-navBgColor w-[70%] p-4 "
            >
              {/* ====close menu ====  */}
              <div
                onClick={handleBarOpen}
                className="absolute right-4 top-3 text-white text-xl border border-white p-1 cursor-pointer w-fit"
              >
                <IoCloseSharp />
              </div>

              <div className="flex flex-col gap-6 text-white mt-16">
                {menuitems.map((menuList, menuIndex) => (
                  <Link
                    key={menuIndex}
                    href={"#"}
                    className="uppercase text-sm font-medium  border-b border-gray-400 pb-2"
                  >
                    {menuList.label}
                  </Link>
                ))}
              </div>

              {/* ==== social ====  */}
              <div className=" flex items-center justify-center gap-8 mt-16 flex-wrap">
                <Link href={"#"} className="text-xl bg-white p-1 rounded-sm ">
                  <FaFacebook />
                </Link>
                <Link href={"#"} className="text-xl bg-white p-1 rounded-sm ">
                  <FaInstagram />
                </Link>
                <Link href={"#"} className="text-xl bg-white p-1 rounded-sm ">
                  <FaLinkedin />
                </Link>
                <Link href={"#"} className="text-xl bg-white p-1 rounded-sm ">
                  <FaYoutube />
                </Link>
              </div>
              {/* === social end ====  */}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* === end mobile menu ==== */}
    </div>
  );
};

export default Navbar;
