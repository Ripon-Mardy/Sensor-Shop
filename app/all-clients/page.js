'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Loading from '@/components/Loading';
import axiosInstance from '@/helpers/axiosInstance'; // Import your axios instance

const Page = () => {

    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const brandsList = async () => {
            try {
                const res = await axiosInstance.get('/posts?term_type=clients');
                setClients(res.data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        brandsList();
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
                <div className='container mx-auto px-3'>
                    <h1 className='text-2xl font-bold mb-5'>All Brands</h1>
                    <div className='grid grid-cols-4 md:grid-cols-8 md:grid md:gap-6 gap-6 mt-4 items-center'>
                        {
                            clients.map((proudsClient, proudIndex) => (
                                <div key={proudIndex} className='border border-gray-200'>
                                    <Image src={proudsClient.featured_image} className='w-full' width={200} height={200} alt={proudsClient.name} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
