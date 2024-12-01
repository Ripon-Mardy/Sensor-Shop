"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/components/Loading";
import axiosInstance from "@/helpers/axiosInstance";

const Page = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axiosInstance.get(`/posts?term_type=services`);
        setServices(res.data.data);
      } catch (error) {
        setError("Error: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section>
      <div className="container mx-auto px-3 md:py-10 py-5">
        <h1 className="text-2xl font-bold mb-5">Our Services</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            // Extract short description from extraFields
            const shortDescription = service.extraFields.find(field => field.meta_name === "service_short_description")?.meta_value || "No description available.";
            return (
              <div key={service.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <Link href={`/services/${service.slug}`}>
                  <Image
                    src={service.featured_image || '/placeholder.jpg'} // Use a placeholder if no image
                    alt={service.name}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-md font-semibold mb-2">{service.name}</h2>
                    <p className="text-gray-600 mb-2 hidden md:block">
                      {shortDescription.length > 100 
                        ? `${shortDescription.slice(0, 100)}...` 
                        : shortDescription}
                    </p>
                    <span className="text-blue-600 font-medium">Learn More</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Page;
