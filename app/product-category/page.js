import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// images ===
import category1 from './../../public/image/Feature Product/f2.jpg'

const page = () => {
    const products = [
        {
            "product_image": category1,
            "product_title": '3RH1140-1AP00 Siemens',
            "product_description": "3RH1140-1AP00, Contactor relay, 4 NO 230 V AC 50 / 60 Hz Screw terminal size S00 !!!"
        },
        {
            "product_image": category1,
            "product_title": '3RH1140-1AP00 Siemens',
            "product_description": "3RH1140-1AP00, Contactor relay, 4 NO 230 V AC 50 / 60 Hz Screw terminal size S00 !!!"
        },
        {
            "product_image": category1,
            "product_title": '3RH1140-1AP00 Siemens',
            "product_description": "3RH1140-1AP00, Contactor relay, 4 NO 230 V AC 50 / 60 Hz Screw terminal size S00 !!!"
        },
        {
            "product_image": category1,
            "product_title": '3RH1140-1AP00 Siemens',
            "product_description": "3RH1140-1AP00, Contactor relay, 4 NO 230 V AC 50 / 60 Hz Screw terminal size S00 !!!"
        },
        {
            "product_image": category1,
            "product_title": '3RH1140-1AP00 Siemens',
            "product_description": "3RH1140-1AP00, Contactor relay, 4 NO 230 V AC 50 / 60 Hz Screw terminal size S00 !!!"
        }
    ]
    return (
        <div className=' container mx-auto py-10 md:py-10 px-3 md:px-0 md:w-3/4'>

            {
                products.map((product, product_index) => (
                    <Link href={'#'} key={product_index} className='flex items-center py-4 md:py-0 gap-2 border-b border-gray-400'>
                        <div className='w-2/6'>
                        <Image src={product.product_image} width={400} height={400}  className='w-72'/>
                        </div>
                        <div className='w-full md:flex md:items-center md:justify-between md:w-[90%]'>
                            <div className='flex flex-col gap-2 md:w-[90%]'>
                                <h1 className='text-xl font-bold'> {product.product_title} </h1>
                                <p className='text-sm'> {product.product_description} </p>
                            </div>
                            <button className='bg-navBgColor text-white p-1.5 md:p-2 rounded-md text-sm font-semibold mt-3 hover:bg-hoverNavBgColor duration-200 ease-in-out w-40'> Request a Quote </button>
                        </div>
                    </Link>
                ))
            }

            <div className='py-10 text-center flex items-center justify-center'>
                <Link href={'#'} className='border border-gray-300 p-0.5 px-3 bg-gray-500 text-white hover:bg-navBgColor duration-150 ease-in-out'>1</Link>
                <Link href={'#'} className='border border-gray-300 p-0.5 px-3 hover:bg-navBgColor duration-150 ease-in-out'>2</Link>
                <Link href={'#'} className='border border-gray-300 p-0.5 px-3 hover:bg-navBgColor duration-150 ease-in-out'>3</Link>
                <Link href={'#'} className='border border-gray-300 p-0.5 px-3 hover:bg-navBgColor duration-150 ease-in-out'>4</Link>
                <Link href={'#'} className='border border-gray-300 p-0.5 px-3 hover:bg-navBgColor duration-150 ease-in-out'>Next Page</Link>
            </div>

        </div>
    )
}

export default page
