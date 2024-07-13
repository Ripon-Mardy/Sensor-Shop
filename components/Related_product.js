'use client'


import React, { useRef, useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

// ==== image === 
import related1 from './../public/image/Feature Product/f3.jpg'

const Related_product = () => {
    return (
        <div>

            <h1 className='text-2xl font-bold'>Related Products</h1>

            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
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
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='border border-gray-300 rounded-md my-10'>
                    <div>
                        <Image width={300} height={300} src={related1} className='w-1/2 mx-auto' />
                        <h1 className='text-xl font-bold text-center'>3RT2916-1LM00 Siemens</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border border-gray-300 rounded-md my-10'>
                    <div>
                        <Image width={300} height={300} src={related1} className='w-1/2 mx-auto' />
                        <h1 className='text-xl font-bold text-center'>3RT2916-1LM00 Siemens</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border border-gray-300 rounded-md my-10'>
                    <div>
                        <Image width={300} height={300} src={related1} className='w-1/2 mx-auto' />
                        <h1 className='text-xl font-bold text-center'>3RT2916-1LM00 Siemens</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border border-gray-300 rounded-md my-10'>
                    <div>
                        <Image width={300} height={300} src={related1} className='w-1/2 mx-auto' />
                        <h1 className='text-xl font-bold text-center'>3RT2916-1LM00 Siemens</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border border-gray-300 rounded-md my-10'>
                    <div>
                        <Image width={300} height={300} src={related1} className='w-1/2 mx-auto' />
                        <h1 className='text-xl font-bold text-center'>3RT2916-1LM00 Siemens</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border border-gray-300 rounded-md my-10'>
                    <div>
                        <Image width={300} height={300} src={related1} className='w-1/2 mx-auto' />
                        <h1 className='text-xl font-bold text-center'>3RT2916-1LM00 Siemens</h1>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Related_product
