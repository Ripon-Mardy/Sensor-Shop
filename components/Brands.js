'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Loading from './Loading';
import axiosInstance from '@/helpers/axiosInstance';


const Brands = () => {

    const [brandsList, setBrandsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const brandsList = async () => {
            try {
                const response = await axiosInstance.get('/posts?term_type=brands')
                setBrandsList(response.data.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        } // end brand list

        brandsList();
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <div className=' md:py-0'>

            {/* ====banner title ===  */}
            <div className='md:flex md:items-center md:justify-between'>
                <div className='text-center md:text-start'>
                    <h1 className='text-2xl md:text-2xl font-semibold'>Our Trusted Brands </h1>
                    <p className='mt-2 text-sm md:text-base font-medium'>Explore our range of trusted brands and discover high-quality solutions for your automation needs.</p>
                </div>

                <Link href={'/all-brands'} className=' font-medium capitalize text-sm bg-navBgColor text-white p-1.5 rounded-sm hidden md:block hover:bg-hoverNavBgColor duration-200 ease-in-out mt-4'>View all Brands</Link>

            </div>
            {/* === end Banner title ====  */}


            {/* ====== brands =====  */}
            <div>
                <div className='grid grid-cols-3 md:grid-cols-6 gap-6 mt-8'>

                    {
                        brandsList.map((brand, index) => (
                            <div key={index} className='border border-gray-100 shadow hover:shadow-md hover:border-gray-200 duration-200 ease-in-out'>
                                <Image src={brand.featured_image} width={400} height={400} alt={brand.name} priority={false} />
                            </div>
                        ))
                    }
                </div>
                <Link href={'/all-brands'} className=' font-medium capitalize text-base bg-navBgColor text-white p-1.5 rounded-sm hover:bg-hoverNavBgColor duration-200 ease-in-out md:hidden mt-6 inline-block'>View all Brands</Link>
            </div>


        </div>
    )
}

export default Brands
