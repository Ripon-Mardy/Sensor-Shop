import React from 'react'
import Image from 'next/image';

// ===== images ==== 
import brand1 from './../public/image/Brands/brand1.png'

const Brands = () => {


    const brands = [brand1, brand1, brand1, brand1, brand1, brand1, brand1, brand1, brand1, brand1, brand1, brand1];

    return (
        <div>

            {/* ====banner title ===  */}
            <div className='md:flex md:items-center md:justify-between'>
                <div className='text-center md:text-start'>
                    <h1 className='text-2xl md:text-2xl font-semibold'>Our Trusted Brands </h1>
                    <p className='mt-2 text-sm md:text-base'>Explore our range of trusted brands and discover high-quality solutions for your automation needs.</p>
                </div>
                <button className=' font-medium capitalize text-base bg-navBgColor text-white p-1.5 rounded-sm hidden md:block hover:bg-hoverNavBgColor duration-200 ease-in-out'>View all Brands</button>
            </div>
            {/* === end Banner title ====  */}


            {/* ====== brands =====  */}
            <div>
                <div className='grid grid-cols-3 md:grid-cols-6 gap-6'>

                    {
                        brands.map((brand, index) => (
                            <div key={index}>
                                <Image src={brand} width={400} height={400} />
                            </div>
                        ))
                    }
                </div>
                <button className=' font-medium capitalize text-base bg-navBgColor text-white p-1.5 rounded-sm hover:bg-hoverNavBgColor duration-200 ease-in-out md:hidden'>View all Brands</button>
            </div>


        </div>
    )
}

export default Brands
