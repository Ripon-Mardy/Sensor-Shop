import React from 'react'
import Image from 'next/image'

// === image === 
import gallary1 from './../public/image/industries/industri1.png'

const Para_text = () => {
  return (
    <div className='container mx-auto px-3 md:px-0 py-10'>

        {/* ==== text === */}

        <div className='flex flex-col gap-10'>

            <div>
                <h1 className='text-2xl font-semibold'>Best spare parts supplier in Bangladesh</h1>
                <p className=' mt-3 md:text-base'>Our team of experts is highly trained and experienced in a variety of fields, including VFD repair, PCB repair, PLC programming, and more. Explore our services below to learn more about how we can help you optimize you operations and increase efficiency. Our team of experts is highly trained and experienced in a variety of fields, including VFD repair, PCB repair, PLC programming, and more. Explore our services below to learn more about how we can help you optimize your operations and increase efficiency</p>
            </div>


            <div>
                <h1 className='text-2xl font-semibold'>Best Automation solution company in Bangladesh</h1>
                <p className=' mt-3 md:text-base'>Our team of experts is highly trained and experienced in a variety of fields, including VFD repair, PCB repair, PLC programming, and more. Explore our services below to learn more about how we can help you optimize you operations and increase efficiency. Our team of experts is highly trained and experienced in a variety of fields, including VFD repair, PCB repair, PLC programming, and more. Explore our services below to learn more about how we can help you optimize your operations and increase efficiency</p>
            </div>


            <div>
                <h1 className='text-2xl font-semibold'>Industrial parts Importer & supplier in Bangladesh</h1>
                <p className='mt-3 md:text-base'>Our team of experts is highly trained and experienced in a variety of fields, including VFD repair, PCB repair, PLC programming, and more. Explore our services below to learn more about how we can help you optimize you operations and increase efficiency. Our team of experts is highly trained and experienced in a variety of fields, including VFD repair, PCB repair, PLC programming, and more. Explore our services below to learn more about how we can help you optimize your operations and increase efficiency</p>
            </div>

        </div>

        {/* ==== end text===  */}

        <div className='flex items-center justify-center flex-col gap-6 py-16'>
            {/* ==== title ===  */}
            <div>
                <h1 className='text-2xl font-semibold'>Techsense Bangladesh Ltd</h1>
                <p className='text-center font-semibold'>Our concern</p>
            </div>

            <div className='flex gap-6 flex-wrap items-center justify-center'>
                <Image src={gallary1} width={300} height={300} className='rounded-md' alt='gallary1' />
                <Image src={gallary1} width={300} height={300} className='rounded-md' alt='gallary1' />
                <Image src={gallary1} width={300} height={300} className='rounded-md' alt='gallary1' />
            </div>
        </div>
      
    </div>
  )
}

export default Para_text
