'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HtmlRenderer from './HtmlRenderer';
import axiosInstance from '@/helpers/axiosInstance';

const ParaText = () => {
    const [techsense, setTechsense] = useState([]);
    const [paratext, setParaText] = useState();

    useEffect(() => {
        // Fetch both techsense and paragraphs in a single request (if possible)
        const fetchData = async () => {
            try {
                // Using axios to handle requests
                const [techsenseRes, paraTextRes] = await Promise.all([
                    axiosInstance.get('/posts?term_type=techsense'),
                    axiosInstance.get('/frontend/settings?meta_name=paragraphs&meta_type=Textarea')
                ]);

                // Set techsense data
                setTechsense(techsenseRes.data.data);

                // Set paragraph text data
                setParaText(paraTextRes.data.data);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container mx-auto px-3 md:px-0 py-10'>
            {/* ==== text === */}
            <div className='flex flex-col gap-16'>
                <HtmlRenderer html={paratext?.meta_value} />
            </div>
            {/* ==== end text===  */}

            <div className='flex items-center justify-center flex-col gap-10 py-16'>
                {/* ==== title ===  */}
                <div>
                    <h1 className='text-2xl font-bold'>Techsense Bangladesh Ltd</h1>
                    <p className='text-center font-semibold'>Our concern</p>
                </div>

                <div className='flex gap-6 flex-wrap items-center justify-center'>
                    {techsense.map((techList, techIndex) => (
                        <div key={techIndex}>
                            <Image 
                                src={techList.featured_image} 
                                width={300} 
                                height={300} 
                                className='rounded-md' 
                                alt={techList.name} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ParaText;
