import React from 'react'
import Image from 'next/image';

// ===== images ==== 
import brand1 from './../public/image/Brands/brand1.png'

const Brands = () => {


    const brands = [brand1, brand1, brand1, brand1, brand1, brand1, brand1, brand1, brand1, brand1, brand1, brand1];

    return (
        <div className='py-16 md:py-0'>

            {/* ====banner title ===  */}
            <div className='md:flex md:items-center md:justify-between'>
                <div className='text-center md:text-start'>
                    <h1 className='text-2xl md:text-2xl font-semibold'>Our Trusted Brands </h1>
                    <p className='mt-2 text-sm md:text-base font-medium'>Explore our range of trusted brands and discover high-quality solutions for your automation needs.</p>
                </div>

                <button className=' font-medium capitalize text-sm bg-navBgColor text-white p-1.5 rounded-sm hidden md:block hover:bg-hoverNavBgColor duration-200 ease-in-out mt-4'>View all Brands</button>

            </div>
            {/* === end Banner title ====  */}


            {/* ====== brands =====  */}
            <div>
                <div className='grid grid-cols-3 md:grid-cols-6 gap-6 mt-5'>

                    {
                        brands.map((brand, index) => (
                            <div key={index} className='border border-gray-100 shadow hover:shadow-md hover:border-gray-200 duration-200 ease-in-out'>
                                <Image src={brand} width={400} height={400} />
                            </div>
                        ))
                    }
                </div>
                <button className=' font-medium capitalize text-base bg-navBgColor text-white p-1.5 rounded-sm hover:bg-hoverNavBgColor duration-200 ease-in-out md:hidden mt-6'>View all Brands</button>
            </div>


        </div>
    )
}

export default Brands
