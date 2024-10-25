"use client";
import React, { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "@/helpers/axiosInstance";

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    // Fetch category 
    const fetchCategory = async () => {
      try {
        const response = await axiosInstance.get('/categories?taxonomy_type=albums&order_by=id&order_direction=desc&limit=40');
        setCategoryData(response.data.data);
      } catch (error) {
        setError('Failed to fetch category');
      } finally {
        setLoading(false);
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
    <section>
      <div className="container mx-auto px-3 py-10">
        <h2 className="text-2xl font-bold mb-5">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-10 gap-5">
          {categoryData.map((categoryItem, categoryIndex) => (
            <div key={categoryIndex} className="border border-gray-300 rounded-md overflow-hidden shadow-lg">
              <Link href={`/gallery/${categoryItem?.slug}`}>
                <Image 
                  src={categoryItem?.image} 
                  className="w-full h-48 object-cover" 
                  width={500} 
                  height={500} 
                  alt={categoryItem?.name} 
                />
                <h1 className="text-xl font-semibold text-gray-800 text-center py-2">
                  {categoryItem?.name}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
