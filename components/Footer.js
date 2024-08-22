'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ==== image ====
import logo from './../public/image/logo.png'

// === icons ===

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaLink
} from 'react-icons/fa'



const Footer = () => {

  const [footerMenu, setFooterMenu] = useState([]);

  useEffect(() => {
    const footerMenuList = async () => {
      try {
        const response = await fetch('http://mathmozocms.test/api/v1/menus');
        if(!response.ok) {
          throw new Error('Faild to fetch Menu')
        }

        const data = await response.json();
        setFooterMenu(data.data[0].items);
      } catch (error) {
        console.log(error);
        
      }
    }
    footerMenuList()
  }, [])

  return (
    <div className=' py-10 px-3 md:px-0 bg-zinc-200'>
      <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-7'>


        <div className=''>
          <h1 className='text-xl font-semibold'>Products</h1>
          <div className='flex flex-col gap-3 mt-4'>
            {footerMenu.map((footerItem, footerIndex) => (
              <div key={footerIndex}>
                <Link href={'#'}> {footerItem.label} </Link>
              </div>
            ))}
          </div>
        </div>


        <div className=''>
          <h1 className='text-xl font-semibold'>Support</h1>
          <div className='flex flex-col gap-3 mt-3'>
          {footerMenu.map((footerItem, footerIndex) => (
              <div key={footerIndex}>
                <Link href={'#'}> {footerItem.label} </Link>
              </div>
            ))}
          </div>
        </div>

        <div className=''>
          <h1 className='text-xl font-semibold'>Compnay</h1>
          <div className='flex flex-col gap-3 mt-3'>
          {footerMenu.map((footerItem, footerIndex) => (
              <div key={footerIndex}>
                <Link href={'#'}> {footerItem.label} </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className='flex flex-col gap-3'>
            <div>
              <Image  src={logo} width={200} height={200} alt='logo'/>
            </div>
            <div className='md:flex md:gap-6 md:items-center md:justify-start flex items-center justify-center gap-6 mt-3'>
              <Link href={'#'} className='text-base bg-white p-1 rounded-sm '>
                <FaFacebook />
              </Link>
              <Link href={'#'} className='text-base bg-white p-1 rounded-sm '>
                <FaInstagram />
              </Link>
              <Link href={'#'} className='text-base bg-white p-1 rounded-sm '>
                <FaLinkedin />
              </Link>
              <Link href={'#'} className='text-base bg-white p-1 rounded-sm '>
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
