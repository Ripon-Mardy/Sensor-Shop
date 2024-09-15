import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axiosInstance from '@/helpers/axiosInstance';

const ProudClients = () => {
    const [proudClients, setProudClients] = useState([]);

    useEffect(() => {
        const proudClientlist = async () => {
            try {
                const response = await axiosInstance.get('/posts?term_type=clients');
                setProudClients(response.data.data);
            } catch (error) {
                console.log('Failed to fetch data', error);
            }
        };

        proudClientlist();
    }, []);

    return (
        <div>
            {/* ==== proud title === */}
            <div className='md:flex md:items-center md:justify-between mb-2'>
                <div className='text-center md:text-start'>
                    <h1 className='text-2xl md:text-2xl font-semibold'>Our Proud Clients </h1>
                </div>
                <Link href={'/all-clients'} className='font-medium capitalize text-sm bg-navBgColor text-white p-1.5 rounded-sm hidden md:block hover:bg-hoverNavBgColor duration-200 ease-in-out'>
                    View all clients
                </Link>
            </div>
            {/* === end proud title ==== */}

            {/* ==== proud clients image === */}
            <div>
                <div className='grid grid-cols-3 md:grid-cols-6 md:grid md:gap-6 gap-6 mt-8'>
                    {proudClients.map((proudClient, proudIndex) => (
                        <div key={proudIndex} className='border border-gray-100 shadow hover:shadow-md hover:border-gray-200 duration-200 ease-in-out'>
                            <Image src={proudClient.featured_image} width={300} height={300} alt={proudClient.name} />
                        </div>
                    ))}
                </div>
            </div>
            {/* ==== end proud clients==== */}
        </div>
    );
};

export default ProudClients;