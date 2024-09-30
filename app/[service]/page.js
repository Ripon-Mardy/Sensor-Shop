"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axiosInstance from "@/helpers/axiosInstance"; // Import the axios instance

const Page = ({ params }) => {
  const service = params.service;

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axiosInstance.get(`/post?slug=${service}`); // Use axiosInstance to fetch data
        setServices(res.data.data); // Set the service data
      } catch (error) {
        setError(error.message); // Catch and handle errors
      } finally {
        setLoading(false); // Stop loading after the fetch is done
      }
    };
    fetchService();
  }, [service]);

  return (
    <>
      <section>
        <div className="container mx-auto px-3 py-8">
          {/* ==== services ===  */}
          <div className="mt-10">
            <div>
              <Image
                src={services.featured_image}
                className="w-2/3 mx-auto md:w-1/3 rounded-md"
                width={200}
                height={200}
                alt={services.name}
              />
              <p className="md:w-2/3 mt-3 text-para_color">
                {services.meta_description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
