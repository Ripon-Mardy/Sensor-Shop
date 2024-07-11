import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


import f1 from './../public/image/Feature Product/f1.jpg'
import f2 from './../public/image/Feature Product/f2.jpg'
import f3 from './../public/image/Feature Product/f3.jpg'
import f4 from './../public/image/Feature Product/f4.jpg'


const Feature_product = () => {

    const feature_products = [
        {
            "product_image" : f1,
            "product_title" : "PIR Sensor/MOTION Sensor WIth alarm",
            "product_description" : "৳ 1220.00"
        },
        {
            "product_image" : f2,
            "product_title" : "PIR Sensor/MOTION Sensor WIth alarm",
            "product_description" : "৳ 1220.00"
        },
        {
            "product_image" : f3,
            "product_title" : "PIR Sensor/MOTION Sensor WIth alarm",
            "product_description" : "৳ 1220.00"
        },
        {
            "product_image" : f4,
            "product_title" : "PIR Sensor/MOTION Sensor WIth alarm",
            "product_description" : "৳ 1220.00"
        }
    ]

  return (
    <div>

        {/* ====== feature product title ====  */}
        <div className='md:flex md:items-center md:justify-between'>
            <h1 className='text-2xl md:text-2xl font-semibold text-center'>Featured products</h1>
            <button className=' font-medium capitalize text-sm bg-navBgColor text-white p-1.5 rounded-sm hidden md:block hover:bg-hoverNavBgColor duration-200 ease-in-out'>view all Featured products</button>
        </div>
        {/* ====== feature product title end =====  */}


        {/* ====== feature products ===  */}
        <div>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-6 mt-8'>
                {
                    feature_products.map((product, index) => (
                        <Link href={'#'} key={index} className=' border border-gray-100 p-2 shadow hover:shadow-md hover:border-gray-200 duration-200 ease-in-out'>

                            <Image src={product.product_image} width={300} height={300} />
                            <div className='text-center'>
                                <h1 className='font-semibold capitalize text-base'> {product.product_title} </h1>
                                <p className='font-medium text-red-500 text-sm mt-1'> {product.product_description} </p>
                            </div>

                        </Link>
                    ))
                }
            </div>
            <button className=' font-medium capitalize text-sm bg-navBgColor text-white p-1.5 rounded-sm hover:bg-hoverNavBgColor duration-200 ease-in-out md:hidden mt-6'>view all Featured products</button>
        </div>


        {/* ==== end Feature products ===  */}
      
    </div>
  )
}

export default Feature_product
