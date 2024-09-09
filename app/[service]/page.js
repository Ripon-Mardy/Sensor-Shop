"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const page = ({ params }) => {
  const service = params.service;

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(
          `http://mathmozocms.test/api/v1/post?slug=${service}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setServices(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [service]);

  return (
    <>
      <section>
        <div className="container mx-auto px-3 py-10">
          <div className="border border-gray-300 rounded-md w-fit p-2 text-sm">
            <Link href={"/"}>Home /</Link>
            <span> services /</span>
            <span className="text-gray-600"> {services.name} </span>
          </div>

          {/* ==== services ===  */}
          <div className="mt-10">
            <div>
             <Image src={services.featured_image} className="w-2/3 mx-auto md:w-1/4 rounded-md" width={200} height={200} alt="servics" />
             <p className="md:w-2/3 mt-3 text-para_color"> {services.meta_description} </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
