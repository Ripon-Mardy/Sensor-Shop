'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Loading from '@/components/Loading';
import axiosInstance from '@/helpers/axiosInstance'; // Import your axios instance
import Link from 'next/link';

const Page = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const brandsList = async () => {
            try {
                const res = await axiosInstance.get('/categories?taxonomy_type=product_brands');
                setBrands(res.data.data); // Use axios to get data
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        brandsList();
    }, []);

    if (loading) {
        return <Loading />;
    }

    // Uncomment if you want to show an error message
    // if (error) {
    //     return (
    //         <div className="flex items-center justify-center">
    //           <p className="text-red-500">Error: {error}</p>
    //         </div>
    //       );
    // }

    return (
        <>
            <section className='py-10'>
                <div className='container mx-auto px-3'>
                    <h1 className='text-2xl font-bold mb-5'>All Brands</h1>
                    <div className='grid grid-cols-4 md:grid-cols-8 md:grid md:gap-6 gap-6 mt-4'>
                        {brands.map((item, index) => (
                            <div key={index} className='border border-gray-200'>
                                <Link href={`/category/${item?.slug}`}>
                                    <Image src={item.image} className='w-full' width={120} height={120} alt={item?.name} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
