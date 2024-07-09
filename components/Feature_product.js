import React from 'react'
import Image from 'next/image'


import f1 from './../public/image/Feature Product/f1.jpg'

const Feature_product = () => {

    const feature_products = [f1,f1,f1,f1,f1,f1,f1,f1,f1,f1,f1,f1,f1,f1,f1,f1,f1,f1]

  return (
    <div>

        {/* ====== feature product title ====  */}
        <div className='md:flex md:items-center md:justify-between py-6'>
            <h1 className='text-2xl md:text-2xl font-semibold'>Featured products</h1>
            <button className=' font-medium capitalize text-sm bg-navBgColor text-white p-1.5 rounded-sm hidden md:block hover:bg-hoverNavBgColor duration-200 ease-in-out'>view all Featured products</button>
        </div>
        {/* ====== feature product title end =====  */}


        {/* ====== feature products ===  */}
        <div>
            <div className='grid grid-cols-3 md:grid-cols-6 gap-6'>
                {
                    feature_products.map((product, index) => (
                        <div key={index}>

                            <Image src={product} width={300} height={300} />

                        </div>
                    ))
                }
            </div>
            <button className=' font-medium capitalize text-sm bg-navBgColor text-white p-1.5 rounded-sm hover:bg-hoverNavBgColor duration-200 ease-in-out md:hidden'>view all Featured products</button>
        </div>


        {/* ==== end Feature products ===  */}
      
    </div>
  )
}

export default Feature_product
