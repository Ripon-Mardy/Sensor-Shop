'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import axiosInstance from '@/helpers/axiosInstance';
import BannerSlide from './BannerSlide';
import Brands from './Brands';
import FeatureProduct from './FeatureProduct';
import ProudClients from './ProudClients';
import Services from './Services';
import HtmlRenderer from './HtmlRenderer';
import { IoSearch } from 'react-icons/io5';
import productBanner from './../public/image/3830.jpg';
import choose1 from './../public/image/why choose us/images.jpg';
import { useRouter } from 'next/navigation';

const MainHero = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [product, setProduct] = useState([]);
  const [main_speech, setMainSpeech] = useState();
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch all necessary data
    const fetchData = async () => {
      try {
        const [categoriesRes, productsRes, speechRes] = await Promise.all([
          axiosInstance.get('/categories?taxonomy_type=categories'),
          axiosInstance.get('/posts?term_type=product'),
          axiosInstance.get('/frontend/settings?meta_name=main_speech&meta_type=Text'),
        ]);

        setCategoryData(categoriesRes.data.data);
        setProduct(productsRes.data.data);
        setMainSpeech(speechRes.data.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const productFilter = product.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterProducts(productFilter);
    } else {
      setFilterProducts([]);
    }
  }, [searchTerm, product]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsFocused(true);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const selectedProduct = filterProducts.find(
      product => product.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (selectedProduct) {
      setSearchTerm('');
      setFilterProducts([]);
      setIsFocused(false);
      router.push(`/products/${selectedProduct.slug}`);
    }
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="container mx-auto px-3 md:px-0 py-10">
      <div className="md:flex md:justify-between gap-5">
        {/* ==== categories ==== */}
        <div className="xl:w-1/4">
          <div className="flex flex-col gap-16">
            <div className="border-2 border-navBorder hidden md:block rounded-md">
              <h1 className="bg-navBgColor text-white py-2 pl-3 text-xl capitalize font-medium">Categories</h1>
              <div className="flex flex-col h-96 gap-3 p-3 text-textNavColor font-semibold text-sm capitalize overflow-y-auto">
                {categoryData.map((categoryItem, categoryIndex) => (
                  <div key={categoryIndex}>
                    <Link href={`/category/${categoryItem.slug}`}>{categoryItem.name}</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* === mobile search bar === */}
            <form onSubmit={handleSearchSubmit} className="md:hidden w-full flex items-center justify-between border border-navBorder relative">
              <input
                type="text"
                className="w-full py-1.5 outline-none text-base pl-2"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => setIsFocused(true)}
              />
              <button type="submit" className="bg-navBgColor py-2.5 px-2.5">
                <IoSearch className="text-base text-white" />
              </button>
              {isFocused && filterProducts.length > 0 && (
                <ul className="absolute left-0 top-full bg-white border w-full z-30">
                  {filterProducts.map(product => (
                    <li key={product.id} className="p-2 cursor-pointer hover:bg-gray-200">
                      <Link href={`/products/${product.slug}`} onClick={() => setSearchTerm('')}>
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </form>
          </div>
          <div className='hidden md:block'>
            <Image src={productBanner} className='w-full mt-8' width={100} height={100} alt='product banner' />
            <Image src={choose1} className='w-full mt-8' width={100} height={100} alt='product banner' />
            <Image src={productBanner} className='w-full mt-8' width={100} height={100} alt='product banner' />
          </div>
        </div>
        <div>
        </div>
        {/* ==== right side bar ==== */}
        <div className="xl:w-full overflow-hidden">
          <div className="mt-6 md:mt-0 md:h-fit">
            <BannerSlide />
          </div>

          {/* ====== Banner bottom text ====== */}
          <div className="md:py-10 py-5">
            <h1 className="text-2xl md:text-3xl text-center font-semibold">
              <HtmlRenderer html={main_speech?.meta_value} />
            </h1>
          </div>

          {/* ==== Brands ==== */}
          <div className="md:py-0 py-14">
            <Brands />
          </div>

          {/* ==== Feature product ==== */}
          <div className="py-14">
            <FeatureProduct />
          </div>

          {/* ==== Proud clients ==== */}
          <div className="md:py-12 py-14">
            <ProudClients />
          </div>

          {/* ==== Services ==== */}
          <div className="py-14">
            <Services />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
