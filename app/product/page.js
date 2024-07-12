import React from 'react'
import Link from 'next/link'
import Image from 'next/image';


// ==== image === 
import product1 from './../../public/image/Feature Product/f4.jpg'


// === icons === 
import { FaAnglesRight } from "react-icons/fa6";

const page = () => {
  return (
    <div className='container mx-auto px-3 md:px-0 py-10'>

        <div className='flex items-center gap-2'>
            <Link href={'/'} className='flex items-center gap-1' >Home <FaAnglesRight className='text-sm' /> </Link>
            <span>Product</span>
        </div>

        <div className='flex flex-col'>

            <div>
                <Image src={product1} width={300} height={300 } />
            </div>

            <div>
                <h1 className='text-xl font-bold'>3RH2911-1FA40 Siemens</h1>
            </div>

        </div>
      
    </div>
  )
}

export default page
