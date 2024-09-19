'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Loading from '@/components/Loading';
import axiosInstance from '@/helpers/axiosInstance'; // Import your axios instance

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
                    <h1 className='text-2xl capitalize font-medium'>All brands</h1>
                    <div className='flex items-center gap-4 flex-wrap py-5'>
                        {brands.map((item, index) => (
                            <div key={index} className='border border-gray-200 rounded-md'>
                                <Image src={item.image} className='w-full' width={120} height={120} alt={item?.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
