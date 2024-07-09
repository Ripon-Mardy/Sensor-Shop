import React from 'react'
import Image from 'next/image'


// ===== images ==== 
import prooud1 from './../public/image/Brands/brand1.png'

const Proud_clients = () => {

    const proudsClients = [prooud1,prooud1,prooud1,prooud1,prooud1,prooud1,prooud1,prooud1,prooud1];

    return (
        <div>

            {/* ====proud title ===  */}
            <div className='md:flex md:items-center md:justify-between mb-10'>
                <div className='text-center md:text-start'>
                    <h1 className='text-2xl md:text-2xl font-semibold'>Our Proud Clients </h1>
                </div>
                <button className=' font-medium capitalize text-sm bg-navBgColor text-white p-1.5 rounded-sm hidden md:block hover:bg-hoverNavBgColor duration-200 ease-in-out'>View all clients</button>
            </div>
            {/* === end proud title ====  */}


            {/* ==== proud clients image ===  */}
            <div className='grid grid-cols-3 md:grid-cols-6 md:grid md:gap-10'>

                {
                    proudsClients.map((proudsClient, proudIndex) => (
                        <div key={proudIndex} >
                            <Image src={proudsClient} width={300} height={300} />
                        </div>
                    ))
                }

            </div>
            {/* ==== end prooud clients====  */}


        </div>
    )
}

export default Proud_clients
