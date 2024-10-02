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
import CategorySection from './CategorySection';
import HtmlRenderer from './HtmlRenderer';
import { IoSearch } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import { BASE_URL } from '@/helpers/baseUrl';

const MainHero = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [product, setProduct] = useState([]);
  const [main_speech, setMainSpeech] = useState();
  const [leftBannerOne, setLeftBannerOne] = useState('');
  const [leftBannerTwo, setLeftBannerTwo] = useState('');
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Manage category section visibility
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          categoriesRes,
          productsRes,
          speechRes,
          leftBannerOneRes,
          leftBannerTwoRes,
        ] = await Promise.all([
          axiosInstance.get('/categories?taxonomy_type=categories'),
          axiosInstance.get('/posts?term_type=product'),
          axiosInstance.get('/frontend/settings?meta_name=main_speech&meta_type=Text'),
          axiosInstance.get('/frontend/settings?meta_name=homepage_left_banner_one&meta_type=Media'),
          axiosInstance.get('/frontend/settings?meta_name=homepage_left_banner_two&meta_type=Media'),
        ]);

        setCategoryData(categoriesRes.data.data);
        setProduct(productsRes.data.data);
        setMainSpeech(speechRes.data.data);

        const leftBannerOneId = leftBannerOneRes.data.data.meta_value; // Assuming this is the ID
        const leftBannerTwoId = leftBannerTwoRes.data.data.meta_value; // Assuming this is the ID

        const [banner1Res, banner2Res] = await Promise.all([
          axiosInstance.get(`/media/${leftBannerOneId}`),
          axiosInstance.get(`/media/${leftBannerTwoId}`),
        ]);

        setLeftBannerOne(`${BASE_URL}${banner1Res.data.data.file_directory}${banner1Res.data.data.filename}`);
        setLeftBannerTwo(`${BASE_URL}${banner2Res.data.data.file_directory}${banner2Res.data.data.filename}`);

        // Filtering products
        if (searchTerm) {
          const productFilter = productsRes.data.data.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFilterProducts(productFilter);
        } else {
          setFilterProducts([]);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [searchTerm]); // Add searchTerm as a dependency

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

  const toggleCategories = () => {
    setIsOpen(!isOpen); // Toggle the category visibility
  };

  return (
    <div className="container mx-auto px-3 md:px-0 pt-3">
      <div className="md:flex md:justify-between gap-5">
        {/* ==== categories ==== */}
        <div className="xl:w-1/4">
          <div className="flex flex-col gap-3">
            <CategorySection categories={categoryData} isOpen={isOpen} toggleCategories={toggleCategories} height="500px" />
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
            {leftBannerOne && (
              <Image
                src={leftBannerOne}
                className='w-full mt-8'
                width={1000}  // Set a reasonable width for your image
                height={500}  // Set a reasonable height for your image
                alt='Left Banner One'
                style={{ objectFit: 'cover' }} // Optional, to control the image scaling
              />
            )}
            {leftBannerTwo && (
              <Image
                src={leftBannerTwo}
                className='w-full mt-8'
                width={1000}  // Set a reasonable width for your image
                height={500}  // Set a reasonable height for your image
                alt='Left Banner Two'
                style={{ objectFit: 'cover' }} // Optional
              />
            )}
          </div>

        </div>
        <div>
        </div>
        <div className="xl:w-full overflow-hidden">
          <div className="mt-3 md:mt-0 md:h-fit">
            <BannerSlide />
          </div>

          <div className="md:py-10 py-5">
            <h2 className="text-xl md:text-3xl text-center font-semibold">
              <HtmlRenderer html={main_speech?.meta_value} />
            </h2>
          </div>

          <div className="md:py-2 py-0 pt-2 text-center md:text-left">
            <Brands />
          </div>

          <div className="md:py-2 py-0 pt-2 text-center md:text-left">
            <FeatureProduct />
          </div>

          <div className="md:py-2 py-0 pt-2 text-center md:text-left">
            <ProudClients />
          </div>

          <div className="md:py-2 py-0 pt-2 text-center md:text-left">
            <Services />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
