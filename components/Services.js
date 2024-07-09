'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';

// === image ==
import service1 from './../public/image/services/service1.jpg'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';





const Services = () => {

    const products = [service1, service1, service1, service1, service1, service1, service1, service1, service1, service1, service1];

    return (
        <div>

            {/* ==== services title ===  */}
            <div>
                <h1 className='text-2xl font-semibold'>Our Services</h1>
                <p className='font-medium mt-3 text-sm md:text-base'>Our team of experts is highly trained and experienced in a variety of fields, including VFD repair, PCB repair, PLC programming, and more. Explore our services below to learn more about how we can help you optimize you operations and increase efficiency.</p>
            </div>
            {/* ==== end services title ====  */}

            {/* ==== service slide ===  */}
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
                        products.map((product, index) => (
                            <SwiperSlide key={index} className='py-10'>
                                <div className='border border-gray-300 p-2 rounded-sm shadow'>
                                    <Image src={product} width={200} height={200} className='object-cover rounded-md' />
                                    <h1 className='text-base font-semibold my-2 capitalize'>live panel cleanning</h1>
                                    <button className='bg-buttonBgColor text-white text-center p-1.5 text-sm capitalize' >Read more</button>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>


            </div>
            {/* ====end serive slide ===  */}

        </div>
    )
}

export default Services
