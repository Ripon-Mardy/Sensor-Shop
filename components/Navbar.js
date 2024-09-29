"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import axiosInstance from "@/helpers/axiosInstance";
import { IoIosSearch } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { debounce } from "lodash";

// image
import sensor_logo from "./../public/image/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isMobileMenuIndex, setIsMobileMenuIndex] = useState(null);
  const [menuitems, setMenuItems] = useState([]);
  const inputRef = useRef(null);
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isMenuFetched, setIsMenuFetched] = useState(false);

  const handleBarOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileMenuClick = (tabname) => {
    setIsMobileMenu(!isMobileMenu);
    setIsMobileMenuIndex(tabname);
  };

  const debouncedSearch = useCallback(debounce(async (searchTerm) => {
    try {
      const res = await axiosInstance.get("/posts?term_type=product");
      const products = res.data.data;
      const productFilter = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterProducts(productFilter);
    } catch (error) {
      console.log("Error fetching products:", error.message);
    }
  }, 300), []);

  const debouncedFetchMenu = useCallback(debounce(async () => {
    if (isMenuFetched) return;

    try {
      const response = await axiosInstance.get("/menus");
      setMenuItems(response.data.data[0].items);
      setIsMenuFetched(true);
    } catch (error) {
      console.log("Failed to fetch menu:", error.message);
    }
  }, 300), [isMenuFetched]);

  useEffect(() => {
    const fetchMenuAndSearch = async () => {
      // Fetch menu if not already fetched
      if (!isMenuFetched) {
        try {
          const response = await axiosInstance.get("/menus");
          setMenuItems(response.data.data[0].items);
          setIsMenuFetched(true);
        } catch (error) {
          console.log("Failed to fetch menu:", error.message);
        }
      }

      // Fetch products if search term is present
      if (searchTerm) {
        await debouncedSearch(searchTerm);
      } else {
        setFilterProducts([]);
      }
    };

    fetchMenuAndSearch();

    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, debouncedSearch, isMenuFetched]);


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

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsFocused(false);
    }
  };

  const handleNavClick = (path) => {
    router.push(path)
    setIsOpen(false)
  }

  return (
    <div className="shadow z-10 bg-white w-full">
      <div className="container mx-auto px-3 md:px-0 md:flex md:items-center md:justify-between relative">
        <div className="flexitems-center justify-between w-fit">
          <div className="flex items-center justify-between py-1 md:py-0">
            <div>
              <Link href={"/"}>
                <Image
                  src={sensor_logo}
                  width={150}
                  height={150}
                  className="md:w-52"
                  alt="sensor shop"
                />
              </Link>
            </div>
            <div
              onClick={handleBarOpen}
              className="xl:hidden border border-navBorder p-1 absolute right-5 top-4 px-2 text-center rounded-sm"
            >
              <span className="text-lg">
                <FaBarsStaggered />
              </span>
            </div>
          </div>
        </div>
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
        <form
          onSubmit={handleSearchSubmit}
          className="xl:flex md:items-center md:justify-between border border-navBorder rounded-sm hidden md:w-[25%] relative"
        >
          <input
            type="text"
            className="w-full outline-none p-1 px-3 text-sm flex"
            placeholder="Search a product"
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => setIsFocused(true)}
            ref={inputRef}
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
                      console.log(`Navigating to /products/${product.slug}`); // Debugging log
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
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ x: "-100%" }}
              className="absolute left-0 top-0 h-screen bg-navBgColor w-[70%] p-4"
            >
              <div
                onClick={handleBarOpen}
                className="absolute right-4 top-3 text-white text-xl border border-white p-1 cursor-pointer w-fit"
              >
                <IoCloseSharp />
              </div>

              <div className="flex flex-col gap-6 text-white mt-16">
                {menuitems.map((menuList, menuIndex) => (
                  <Link
                    onClick={() => handleNavClick(menuList.link)}
                    key={menuIndex}
                    href={menuList.link}
                    className="uppercase text-sm font-medium border-b border-gray-400 pb-2">
                    {menuList.label}
                  </Link>
                ))}
              </div>
              <div className="flex items-center justify-center gap-8 mt-16 flex-wrap">
                <Link href={"#"} className="text-xl bg-white p-1 rounded-sm">
                  <FaFacebook />
                </Link>
                <Link href={"#"} className="text-xl bg-white p-1 rounded-sm">
                  <FaInstagram />
                </Link>
                <Link href={"#"} className="text-xl bg-white p-1 rounded-sm">
                  <FaLinkedin />
                </Link>
                <Link href={"#"} className="text-xl bg-white p-1 rounded-sm">
                  <FaYoutube />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
