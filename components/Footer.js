import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


// ==== image ==== 


import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaLink   } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gray-700 py-6'>
           <div className='md:flex md:gap-6 md:items-center md:justify-center flex items-center justify-center gap-6'>
            <Link href={'#'} className='text-base bg-white p-1 rounded-sm '> <FaFacebook/> </Link>
            <Link href={'#'} className='text-base bg-white p-1 rounded-sm '> <FaInstagram/> </Link>
            <Link href={'#'} className='text-base bg-white p-1 rounded-sm '> <FaLinkedin/> </Link>
            <Link href={'#'} className='text-base bg-white p-1 rounded-sm '> <FaYoutube/> </Link>
           </div>
    </div>
  )
}

export default Footer
