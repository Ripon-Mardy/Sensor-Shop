'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'


//  ==== image === 
// import industri1 from './../public/image/industries/industri1.png'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


const Industries = () => {


    // const industrics = [industri1, industri1, industri1, industri1, industri1, industri1, industri1]

    const [industrics, setIndustrices] = useState([]);

    useEffect(() => {
        const industricsList = async () => {
            try {
                const response = await fetch('http://mathmozocms.test/api/v1/posts?term_type=industries');

                if(!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json();
                setIndustrices(data.data);
            } catch (error) {
                console.error(error);
                
            }
        }
        industricsList();
    })

    return (
        <div className=' py-6'>

            <div className='container mx-auto px-3 md:px-0'>
                {/* ==== industriys title ===  */}
                <div>
                    <h1 className='text-2xl font-semibold'>Industries we are into :</h1>
                </div>
                {/* ===== end industriys title ===  */}


                {/* ====== industries slide ===  */}
                <div>

                    <Swiper

                        slidesPerView={2}
                        // slidesPerView={}
                        spaceBetween={10}

                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 4,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}

                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {
                            industrics.map((product, index) => (
                                <SwiperSlide key={index} className='py-10'>
                                    <div className='border border-gray-300 p-2 rounded-sm shadow w-full'>
                                        <Image src={product.featured_image} width={200} height={200} className='object-cover rounded-md w-full' alt={product.name} />
                                        <h1 className='text-base font-semibold my-2 capitalize'> {product.name} </h1>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>



                </div>
                {/* === industries slide ===  */}


            </div>

        </div>
    )
}

export default Industries
