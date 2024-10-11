'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Loading from '@/components/Loading';
import axiosInstance from '@/helpers/axiosInstance'; // Import your axios instance

const Page = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await axiosInstance.get('/posts?term_type=clients');
                setClients(res.data.data); // Use axios to get data
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchClients();
    }, []);

    if (loading) {
        return <Loading />;
    }

    // Uncomment to show an error message
    // if (error) {
    //     return (
    //         <div className="flex items-center justify-center">
    //             <p className="text-red-500">Error: {error}</p>
    //         </div>
    //     );
    // }

    return (
        <>
            <section className='py-8'>
                <div className='container mx-auto px-3'>
                    <h1 className='text-2xl font-bold mb-5'>All Clients</h1>
                    <div className='grid grid-cols-4 md:grid-cols-8 md:gap-6 gap-6 mt-4'>
                        {clients.map((client, index) => (
                            <div key={index} className='border border-gray-200'>
                                <Image
                                    src={client.featured_image}
                                    className='w-full'
                                    width={120} // Set consistent width for images
                                    height={120} // Set consistent height for images
                                    alt={client.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;