'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Loading from '@/components/Loading';
import axiosInstance from '@/helpers/axiosInstance';

const page = () => {

    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const brandsList = async () => {
    //        try {
    //         const res = await fetch('http://mathmozocms.test/api/v1/posts?term_type=brands');
    //         if(!res.ok) {
    //             throw new Error('Network response was not ok')
    //         }
    //         const data = await res.json();
    //         setBrands(data.data)
            
    //        } catch (error) {
    //         setError(error.message)
    //        } finally {
    //         setLoading(false)
    //        }
    //     }
    //     brandsList()
    // }, [])

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await axiosInstance.get('/posts?term_type=brands')
                setBrands(response.data.data)
            } catch (error) {
                setError('Error fetching product data.')
            } finally {
                setLoading(false)
            }
        }
        fetchBrands()
    }, [])

    if(loading) {
        return <Loading/>
    }

    // if(error) {
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
                            <Image src={item.featured_image} className='w-full' width={120} height={120} alt='brands' priority={false} />
                        </div>
                    ))}
                    
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
