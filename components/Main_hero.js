'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'


// ===== components ==== 
import Banner_slide from './Banner_slide'
import Brands from './Brands'
import Feature_product from './Feature_product'
import Proud_clients from './Proud_clients'
import Services from './Services'


// === icnos === 
import { IoSearch } from "react-icons/io5";


//  ==== image=== 
import productBanner from './../public/image/3830.jpg'
import choose1 from './../public/image/why choose us/images.jpg'


const Main_hero = () => {

    const [categoryData, setCategoryData] = useState([])
    const [error, setError] = useState(true);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await fetch('http://mathmozocms.test/api/v1/posts?term_type=categories');
                if(!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setCategoryData(data.data)
            } catch (error) {
                setError('Error', error.message)
            }
        }
        fetchCategory();
    })

    return (
        <div className='container mx-auto px-3 md:px-0 py-5'>

            <div className='md:flex md:justify-between md:gap-10'>


                {/* ==== categories ===  */}
                <div className=' xl:w-1/4'>
                    <div className='flex flex-col gap-16'>
                        <div className='border-2 border-navBorder rounded-md hidden md:block'>
                            <h1 className='bg-navBgColor text-white py-2 pl-3 text-xl capitalize font-medium'>categories</h1>
                            <div className='flex flex-col h-96 gap-3 p-3 text-textNavColor font-semibold text-sm capitalize overflow-y-auto'>
                                {/* {
                                    categories.map((linkText, linkIndex) => (
                                        <div key={linkIndex}>
                                            <Link href={linkText.slug} >{linkText.name} </Link>
                                        </div>
                                    ))
                                } */}

                                {categoryData.map((categoryItem, categoryIndex) => (
                                    <div key={categoryIndex}>
                                        <Link href={categoryItem.slug} >{categoryItem.name} </Link> 
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* === mobile search Bar === */}
                        <div className='md:hidden w-full flex items-center justify-between border border-navBorder rounded-md overflow-hidden'>
                            <input type="search" className=' w-full py-1.5 outline-none text-base pl-2' placeholder='Search...' />
                            <span className='bg-navBgColor py-2.5 px-2.5'><IoSearch className='text-base text-white' /></span>
                        </div>
                        {/* ===== end mobile search bar ====  */}
                        {/* ==== left side bannar ====  */}
                        <div className='hidden md:block'>
                            <Image src={productBanner} className='rounded-md' />
                        </div>
                        {/* ==== end left side banner ====  */}


                        {/* ====why choose us ===  */}
                        <div className='hidden md:block'>
                            <h1 className='text-xl font-semibold text-center mb-2'>Why Choose us?</h1>
                            <Image src={choose1} className='rounded-md' />
                        </div>
                        {/* ===== end why choose us ====  */}


                        {/* ==== left side bannar ====  */}
                        <div className='hidden md:block'>
                            <Image src={productBanner} className='rounded-md' />
                        </div>
                        {/* ==== end left side banner ====  */}



                    </div>


                </div>
                {/* === end categories ===  */}





                {/* ==== right side bar ===  */}
                <div className=' xl:w-full overflow-hidden'>
                    <div className=' mt-6 md:mt-0 md:h-fit'>
                        <Banner_slide />
                    </div>

                    {/* ======  Banner botton text ===  */}
                    <div className='md:py-10 py-5'>
                        <h1 className='text-2xl md:text-3xl text-center font-semibold'> We are one of the leading Industrial machine, Spare parts, Sensor <span className='text-textNavColor font-bold'>Importer and Supplier in Bangladesh </span> </h1>
                    </div>
                    {/* === end banner bottom text ===  */}



                    {/* ====  Brands ====  */}
                    <div className='md:py-7 py-14'>
                        <Brands />
                    </div>
                    {/* ==== end Brands ===  */}


                    {/* ==== feature product ===  */}
                    <div className='py-14'>
                        <Feature_product />
                    </div>
                    {/* ==== end feature product ====  */}

                    {/* ==== proud clients ====  */}
                    <div className='md:py-12 py-14'>
                        <Proud_clients />
                    </div>
                    {/* ====end proud clients ====  */}


                    {/* ==== servcies ===  */}
                    <div className='py-14'>
                        <Services />
                    </div>
                    {/* ==== end services ===  */}



                </div>
                {/* === end right side bar ====  */}



            </div>

        </div>
    )
}

export default Main_hero
