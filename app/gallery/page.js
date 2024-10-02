"use client";
import React, { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "@/helpers/axiosInstance";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    // Fetch category 
    const fetchCategory = async () => {
      try {
        const response = await axiosInstance.get('/categories?taxonomy_type=albums');
        setCategoryData(response.data.data);
      } catch (error) {
        setError('Failed to fetch category');
      } finally {
        setLoading(false); // Set loading to false after the fetch attempt
      }
    };
    fetchCategory();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <section className='py-10'>
        <div className='container mx-auto px-3 grid grid-cols-2 md:grid-cols-3 gap-10'>
          {categoryData.map((categoryItem, categoryIndex) => (            
            <div key={categoryIndex} className='border border-gray-300 rounded-md overflow-hidden'>
                <div>
                  <Link href={`/gallery/${categoryItem?.slug}`}>
                    <Image 
                      src={categoryItem?.image} 
                      className='w-full h-60 object-cover' 
                      width={200} 
                      height={200} 
                      alt={categoryItem?.name} 
                    />
                  </Link>
                </div>
                <h1 className='text-xl font-semibold text-gray-800 text-center py-1'>
                  <Link href={`/gallery/${categoryItem?.slug}`}>
                    {categoryItem?.name}
                  </Link>
                </h1>
              
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Page;
