import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <section>
        <div className='container mx-auto px-3 py-10'>
        {/* <div className="border border-gray-300 rounded-md w-fit p-2 text-sm">
            <Link href={"/"}>Home /</Link>
            <span> careers</span>
          </div> */}

          {/* === jobs ===  */}
          <div className='flex items-center justify-center flex-col gap-2 py-10'>
            <h1 className='text-7xl capitalize text-header_text'>Join the team</h1>
            <p className='text-center text-para_color'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Perspiciatis praesentium cum illo hic nihil dolore eveniet sapiente officiis in!</p>
          </div>
          {/* ==== job post ===  */}
          <div>
            <h1 className='capitalize text-2xl text-header_text font-semibold text-center border border-gray-300 p-2 w-fit mx-auto rounded-md'>Available jobs</h1>
            <div className='text-para_color mt-4 w-3/4 mx-auto' >
                <h1>There are no job postings yet</h1>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default page
