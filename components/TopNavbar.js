import React from 'react'
import Link from 'next/link'


// ==== icons ===== 
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { GoMail } from "react-icons/go";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaLink } from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className=' bg-navBgColor md:p-1 py-2 hidden md:block'>

      <div className='container mx-auto px-3 md:px-0 flex md:gap-10 items-center md:justify-end justify-center'>

        {/* ====== navigation menu ====  */}
        <div className='flex text-white items-center justify-center gap-6'>

          <Link href={'/about-us'} className='flex items-center justify-center gap-1 md:text-sm text-xs uppercase'> <FaLink /> about us</Link>
          <Link href={'/careers'} className='flex items-center justify-center gap-1 md:text-sm text-xs uppercase'> <MdOutlineContentPasteSearch /> career</Link>
          <Link href={'/contact-us'} className='flex items-center justify-center gap-1 md:text-sm text-xs uppercase'> <GoMail /> contact us</Link>
        </div>
        {/* ===== end navigation menu ==== */}

        {/* === social icons ====  */}
        <div className='md:flex md:gap-6 md:items-center md:justify-center hidden'>
          <Link href={'#'} className='text-base bg-white p-1 rounded-sm '> <FaFacebook /> </Link>
          <Link href={'#'} className='text-base bg-white p-1 rounded-sm '> <FaInstagram /> </Link>
          <Link href={'#'} className='text-base bg-white p-1 rounded-sm '> <FaLinkedin /> </Link>
          <Link href={'#'} className='text-base bg-white p-1 rounded-sm '> <FaYoutube /> </Link>
        </div>
        {/* ==== end social icons ====  */}

      </div>

    </div>
  )
}

export default TopNavbar
