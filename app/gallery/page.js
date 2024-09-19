import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// === images ==== 
import industris from '../../public/image/industries/industri1.png'

export  const albums = [
  {
    id : 1,
    title : "Album 1", 
    mainImage : industris,
    images : [industris, industris, industris, industris]
  },
  {
    id : 2,
    title : "Album 2", 
    mainImage : industris,
    images : [industris, industris, industris, industris]
  }
]


const page = () => {
 
  return (
    <>
    <section className='py-10'>
      <div className='container mx-auto px-3 grid grid-cols-2 md:grid-cols-3 gap-10'>
        {
          albums.map((img, index) => (
            <Link key={index} href={`/gallery/${img.id}`} className='border border-gray-300 rounded-md overflow-hidden'>
              <Image src={img.mainImage} className='w-full' width={200} height={200} alt={img.title} />
              <h1 className='text-xl font-semibold text-gray-800 text-center py-1'> {img.title} </h1>
            </Link>
          ))
        }

      </div>
    </section>
    </>
  )
}

export default page
