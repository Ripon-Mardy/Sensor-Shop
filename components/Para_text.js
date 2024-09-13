'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Para_text = () => {

    

    const [techsense, setTechsense] = useState([]);

    useEffect(() => {
        const techsenseList = async () => {
            try {
                const response = await fetch('http://mathmozocms.test/api/v1/posts?term_type=techsense');
                if(!response.ok) {
                    throw new Error('Faild to fetch techsense')
                }
                const data = await response.json();
                setTechsense(data.data);
            } catch (error) {
                
            }
        }
        techsenseList()
    }, [])

  return (
    <div className='container mx-auto px-3 md:px-0 py-10'>

        {/* ==== text === */}

        <div className='flex flex-col gap-16'>

            <div>
                <h1 className='text-2xl font-bold'>Best spare parts supplier in Bangladesh</h1>
                <p className=' mt-3 md:text-base'>Our team of experts is highly trained and experienced in a variety of fields, including VFD repair, PCB repair, PLC programming, and more. Explore our services below to learn more about how we can help you optimize you operations and increase efficiency. Our team of experts is highly trained and experienced in a variety of fields, including VFD repair, PCB repair, PLC programming, and more. Explore our services below to learn more about how we can help you optimize your operations and increase efficiency</p>
            </div>


            <div>
                <h1 className='text-2xl font-bold'>Best Automation solution company in Bangladesh</h1>
                <p className=' mt-3 md:text-base'>Our team of experts is highly trained and experienced in a variety of fields, including VFD repair, PCB repair, PLC programming, and more. Explore our services below to learn more about how we can help you optimize you operations and increase efficiency. Our team of experts is highly trained and experienced in a variety of fields, including VFD repair, PCB repair, PLC programming, and more. Explore our services below to learn more about how we can help you optimize your operations and increase efficiency</p>
            </div>


            <div>
                <h1 className='text-2xl font-bold'>Industrial parts Importer & supplier in Bangladesh</h1>
                <p className='mt-3 md:text-base'>Our team of experts is highly trained and experienced in a variety of fields, including VFD repair, PCB repair, PLC programming, and more. Explore our services below to learn more about how we can help you optimize you operations and increase efficiency. Our team of experts is highly trained and experienced in a variety of fields, including VFD repair, PCB repair, PLC programming, and more. Explore our services below to learn more about how we can help you optimize your operations and increase efficiency</p>
            </div>

        </div>

        {/* ==== end text===  */}

        <div className='flex items-center justify-center flex-col gap-10 py-16'>
            {/* ==== title ===  */}
            <div>
                <h1 className='text-2xl font-bold'>Techsense Bangladesh Ltd</h1>
                <p className='text-center font-semibold'>Our concern</p>
            </div>

            <div className='flex gap-6 flex-wrap items-center justify-center'>
                {techsense.map((techList, techIndex) => (
                    <div key={techIndex}>
                        <Image src={techList.featured_image} width={300} height={300} className='rounded-md' alt={techList.name} />
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Para_text
