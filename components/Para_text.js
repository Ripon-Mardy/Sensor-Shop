'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import HtmlContent from './Html_render'

const Para_text = () => {
    const [techsense, setTechsense] = useState([]);
    const [paratext, setParaText] = useState();    

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

        const para_text = async() => {
            try {
                const response = await fetch('http://mathmozocms.test/api/v1/frontend/settings?meta_name=paragraphs&meta_type=Textarea');
                if(!response.ok) {
                    throw new Error('Faild to fetch techsense')
                }
                const data = await response.json();
                setParaText(data.data);
            } catch (error) {
                
            }
        }

        para_text()

    }, [])

  return (
    <div className='container mx-auto px-3 md:px-0 py-10'>

        {/* ==== text === */}

        <div className='flex flex-col gap-16'>
            {/* {JSON.stringify(paratext?.meta_value)} */}
            {/* {paratext?.meta_value} */}
            <HtmlContent html={paratext?.meta_value} />
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
