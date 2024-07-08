'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// image ==== 
import sensor_logo from './../public/image/logo4.png'


// === icons ==== 
import { IoIosSearch } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false);

    const handleBarOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className=' shadow'>

            <div className=' container mx-auto px-3 md:px-0 md:flex md:items-center md:justify-between relative'>
                {/* === logo == */}
                <div className='flexitems-center justify-between w-fit'>
                    <div className=' flex items-center justify-between '>
                        <div>
                            <Image src={sensor_logo} width={200} height={200} className='md:w-72'></Image>
                        </div>
                        {/* ===== mobile bar ===  */}
                        <div onClick={handleBarOpen} className='xl:hidden border border-navBorder p-1 absolute right-5 top-4 px-2 text-center rounded-sm'>
                            <span className='text-lg'><FaBarsStaggered /></span>
                        </div>
                        {/* === end mobile bar =====  */}
                    </div>
                </div>
                {/* === end logo ===  */}
                {/* === navigation menu ===  */}
                <div className='xl:flex items-center justify-center gap-10 border border-navBorder rounded-sm p-2 px-4 hidden'>
                    <Link href={'#'} className='uppercase text-sm font-medium'>menu 1</Link>
                    <Link href={'#'} className='uppercase text-sm font-medium'>menu 2</Link>
                    <Link href={'#'} className='uppercase text-sm font-medium'>menu 3</Link>
                    <Link href={'#'} className='uppercase text-sm font-medium'>menu 4</Link>
                    <Link href={'#'} className='uppercase text-sm font-medium'>menu 5</Link>
                    <Link href={'#'} className='uppercase text-sm font-medium'>menu 6</Link>
                </div>
                {/* === end navigation menu ===  */}
                {/* ==== search bar ====  */}
                <div className='xl:flex md:items-center md:justify-center border border-navBorder rounded-sm hidden'>
                    <input type='search' className='outline-none p-1 px-3 font-medium text-base' placeholder='Search a product' />
                    <span className='px-3 bg-navBgColor overflow-hidden py-1.5 cursor-pointer font-semibold text-white text-xl'><IoIosSearch /></span>
                </div>
                {/* === end search bar ====  */}
            </div>






            {/* ==== mobile menu ===  */}
           <AnimatePresence>
           {
                isOpen && (
                    <div className='fixed inset-0 bg-black bg-opacity-75 z-50'>
                            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ duration: 0.3 }} exit={{ x: '-100%' }} className='absolute left-0 top-0 h-screen bg-navBgColor w-[70%] p-4 '>

                                {/* ====close menu ====  */}
                                <div onClick={handleBarOpen} className='absolute right-4 top-3 text-white text-xl border border-white p-1 cursor-pointer w-fit'>
                                    <IoCloseSharp />
                                </div>

                                <div className='mt-16 rounded-sm w-full flex bg-white px-2 items-center'>
                                    <input type="search" className='p-2 outline-none w-full' placeholder='Search' />
                                    <IoIosSearch className='text-xl' />
                                </div>

                                <div className='flex flex-col gap-6 text-white mt-16'>
                                    <Link href={'#'} className='uppercase text-sm font-medium  border-b border-gray-400 pb-2'>menu 1</Link>
                                    <Link href={'#'} className='uppercase text-sm font-medium  border-b border-gray-400 pb-2'>menu 2</Link>
                                    <Link href={'#'} className='uppercase text-sm font-medium  border-b border-gray-400 pb-2'>menu 3</Link>
                                    <Link href={'#'} className='uppercase text-sm font-medium  border-b border-gray-400 pb-2'>menu 4</Link>
                                    <Link href={'#'} className='uppercase text-sm font-medium  border-b border-gray-400 pb-2'>menu 5</Link>
                                    <Link href={'#'} className='uppercase text-sm font-medium  border-b border-gray-400 pb-2'>menu 6</Link>
                                </div>

                                {/* ==== social ====  */}
                                <div className=' flex items-center justify-center gap-8 mt-16 flex-wrap'>
                                    <Link href={'#'} className='text-xl bg-white p-1 rounded-sm '> <FaFacebook /> </Link>
                                    <Link href={'#'} className='text-xl bg-white p-1 rounded-sm '> <FaInstagram /> </Link>
                                    <Link href={'#'} className='text-xl bg-white p-1 rounded-sm '> <FaLinkedin /> </Link>
                                    <Link href={'#'} className='text-xl bg-white p-1 rounded-sm '> <FaYoutube /> </Link>
                                </div>
                                {/* === social end ====  */}

                            </motion.div>

                    </div>
                )
            }
           </AnimatePresence>
            {/* === end mobile menu ==== */}

        </div>
    )
}

export default Navbar
