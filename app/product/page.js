import React from 'react'
import Link from 'next/link'
import Image from 'next/image';


// ==== image === 
import product1 from './../../public/image/Feature Product/f4.jpg'


// === icons === 
import { FaAnglesRight } from "react-icons/fa6";
import Related_product from '@/components/Related_product';

const page = () => {
  return (
    <div className='container mx-auto px-3 md:px-0 py-10'>

        <div className='flex items-center gap-2'>
            <Link href={'/'} className='flex items-center gap-1' >Home <FaAnglesRight className='text-sm' /> </Link>
            <span>Product</span>
        </div>

        <div className='flex flex-col md:flex-row md:items-center md:justify-center md:gap-10'>

            <div>
                <Image src={product1} width={300} height={300 } className='w-2/3 md:w-full' />
            </div>

            <div>
                <h1 className='text-xl font-bold'>3RH2911-1FA40 Siemens</h1> 
                <div className='mt-3'>
                    <div className='flex items-center gap-20 border-b border-gray-300 py-2'>
                        <span>Condition</span>
                        <span>New Factory Sealed</span>
                    </div>
                    <div className='flex items-center gap-20 border-b border-gray-300 py-2'>
                        <span>Shipping</span>
                        <span>Weight: 0.20 kg</span>
                    </div>
                    <div className='flex items-center gap-20 border-b border-gray-300 py-2'>
                        <span>From</span>
                        <span>
                        United Arab Emirates</span>
                    </div>
                    <div className='flex items-center gap-20 border-b border-gray-300 py-2'>
                        <span>Warranty</span>
                        <span>1 Year Against the Manufacturer Defect</span>
                    </div>
                </div>
            </div>

        </div>


        {/* ==== related product ===  */}
        <div className='py-14'>

            <Related_product/>

        </div>
      
    </div>
  )
}

export default page
