"use client";
import React, { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import axiosInstance from "@/helpers/axiosInstance";
import HtmlRenderer from "@/components/HtmlRenderer"; // Import the HtmlRenderer component

const Page = ({ params }) => {
    const { slug } = params; // This will capture the slug from the URL

    const [service, setService] = useState(null); // Initialize as null to handle loading state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const res = await axiosInstance.get(`posts?term_type=services&slug=${slug}`);
                // Find the specific service that matches the slug
                const foundService = res.data.data.find(item => item.slug === slug);
                setService(foundService);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchService();
    }, [slug]); // Make sure to include slug in the dependency array

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    return (
        <section>
            <div className="container mx-auto px-3 py-10">                
                <h2 className="text-2xl font-bold mb-5">{service?.name}</h2>
                {service?.featured_image && (
                    <img
                        src={service.featured_image}
                        alt={service.name}
                        className="w-full max-h-[400px] object-cover mb-5"
                    />
                )}
                {service?.description && <HtmlRenderer html={service.description} />}
                {/* You can render additional information here if needed */}
            </div>
        </section>
    );
};

export default Page;
