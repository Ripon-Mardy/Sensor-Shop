'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Loading from './Loading';
import axiosInstance from '@/helpers/axiosInstance';

const Brands = () => {
    const [brandsList, setBrandsList] = useState([]);
    const [trustedBrandsText, setTrustedBrandsText] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBrandsList = async (retryCount = 0) => {
            try {
                const [brandsResponse, trustedBrandsRes] = await Promise.all([
                    axiosInstance.get('/categories?taxonomy_type=product_brands&limit=24'),
                    axiosInstance.get('/frontend/settings?meta_name=our_trusted_brands_text&meta_type=Textarea')
                ]);

                console.log(brandsResponse);
                
                // Filter the brands to include only those that are featured
                const featuredBrands = brandsResponse.data.data.filter(brand => brand.is_featured === 'Yes');
                setBrandsList(featuredBrands);
                setTrustedBrandsText(trustedBrandsRes.data.data.meta_value);
            } catch (error) {
                if (error.response?.status === 429 && retryCount < 3) {
                    // Wait and retry if rate limit exceeded
                    setTimeout(() => fetchBrandsList(retryCount + 1), 1000 * (retryCount + 1)); // Exponential backoff
                } else {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchBrandsList();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <div className='md:pt-0 md:pb-2'>
            <div className='md:flex md:items-center md:justify-between'>
                <div className='text-center md:text-start'>
                    <h2 className="text-xl md:text-xl font-semibold">Our Trusted Brands</h2>
                    <p className='mt-2 text-sm md:text-base font-medium'>
                        {trustedBrandsText}                        
                    </p>
                </div>
                <Link href={'/all-brands'} className='font-medium text-sm bg-navBgColor text-white p-1.5 rounded-sm hidden md:block hover:bg-hoverNavBgColor duration-200 ease-in-out mt-4'>
                    View all brands
                </Link>
            </div>
            <div>
                <div className='grid grid-cols-4 md:grid-cols-8 gap-3 mt-4'>                    
                    {
                        brandsList.map((brand, index) => (
                            <div key={index} className='border border-gray-100 hover:shadow-md hover:border-gray-200 duration-200 ease-in-out flex justify-center items-center'>
                                <Link href={`/category/${brand?.slug}`}>
                                    <Image src={brand?.image} width={240} height={100} alt={brand?.name} priority={false} />
                                </Link>
                            </div>                            
                        ))
                    }
                </div>
                <Link href={'/all-brands'} className='font-medium text-base bg-navBgColor text-white p-1.5 rounded-sm hover:bg-hoverNavBgColor duration-200 ease-in-out md:hidden mt-6 inline-block'>
                    View all brands
                </Link>
            </div>
        </div>
    );
}

export default Brands;
