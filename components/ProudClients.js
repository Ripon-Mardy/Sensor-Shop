import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axiosInstance from '@/helpers/axiosInstance';

const ProudClients = () => {
    const [proudClients, setProudClients] = useState([]);

    useEffect(() => {
        const proudClientlist = async () => {
            try {
                const response = await axiosInstance.get('/posts?term_type=clients&per_page=24');
                // Filter the clients to include only those that are featured
                const featuredClients = response.data.data.filter(client => client.is_featured === 'Yes');
                setProudClients(featuredClients);
            } catch (error) {
                console.log('Failed to fetch data', error);
            }
        };

        proudClientlist();
    }, []);

    return (
        <div>            
            <div className='md:flex md:items-center md:justify-between mb-2'>
                <div className='text-center md:text-start'>                    
                    <h2 className="text-xl md:text-xl font-semibold">
                        Our Proud Clients
                    </h2>
                </div>
                <Link href={'/all-clients'} className='font-medium text-sm bg-navBgColor text-white p-1.5 rounded-sm hidden md:block hover:bg-hoverNavBgColor duration-200 ease-in-out'>
                    View all clients
                </Link>
            </div>
            <div>
                <div className='grid grid-cols-4 md:grid-cols-8 gap-3 mt-4'>                    
                    {proudClients.length > 0 ? (
                        proudClients.map((proudClient, proudIndex) => (
                            <div key={proudIndex} className='border border-gray-100 hover:shadow-md hover:border-gray-200 duration-200 ease-in-out flex justify-center items-center'>
                                <Image src={proudClient.featured_image} width={240} height={100} alt={proudClient.name} />
                            </div>
                        ))
                    ) : (
                        <div className='col-span-full text-center'>No featured clients available.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProudClients;
