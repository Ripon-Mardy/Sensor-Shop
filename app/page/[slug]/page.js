"use client";
import React, { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import axiosInstance from "@/helpers/axiosInstance";
import HtmlRenderer from "@/components/HtmlRenderer"; // Import the HtmlRenderer component

const Page = ({ params }) => {
    const { slug } = params;

    const [page, setPage] = useState(null); // Initialize as null to handle loading state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const res = await axiosInstance.get(`post?slug=${slug}`);
                setPage(res.data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPage();
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
                <h2 className="text-2xl font-bold mb-5">{page?.name}</h2>
                {page?.featured_image && (
                    <img
                        src={page.featured_image}
                        alt={page.name}
                        className="w-full max-h-[400px] object-cover mb-5"
                    />
                )}
                {page?.description && <HtmlRenderer html={page.description} />}
                {/* You can render additional information here if needed */}
            </div>
        </section>
    );
};

export default Page;
