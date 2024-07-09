import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


// ===== components ==== 
import Banner_slide from './Banner_slide'
import Brands from './Brands'
import Feature_product from './Feature_product'
import Proud_clients from './Proud_clients'
import Services from './Services'


//  ==== image=== 
import productBanner from './../public/image/3830.jpg'
import choose1 from './../public/image/why choose us/images.jpg'


const Main_hero = () => {
    return (
        <div className='container mx-auto px-3 md:px-0 py-10'>

            <div className='md:flex md:justify-between md:gap-10'>



                {/* ==== left side bar ===  */}
                <div className=' xl:w-1/4'>
                   <div className='flex flex-col gap-8'>
                   <div className='border-2 border-navBorder rounded-md'>
                        <h1 className='bg-navBgColor text-white py-4 pl-3 text-xl capitalize font-medium'>categories</h1>

                        <div className='flex flex-col gap-4 p-3 text-textNavColor font-semibold text-sm capitalize'>
                            <Link href={'#'}>adhesives & Sealants</Link>
                            <Link href={'#'}>ATEX</Link>
                            <Link href={'#'}>Automation & Control Components</Link>
                            <Link href={'#'}>Batteries</Link>
                            <Link href={'#'}>Cable Accessories</Link>
                            <Link href={'#'}>Circuit protection</Link>
                            <Link href={'#'}>clean room</Link>
                            <Link href={'#'}>Computing & Peripherals</Link>
                            <Link href={'#'}>Displays, Lighting & Optoelectronics</Link>
                            <Link href={'#'}>Electrical Cables & Wires</Link>
                            <Link href={'#'}>Electrical Conectors & Cables</Link>
                            <Link href={'#'}>Electrical Test & Measurement Equipment</Link>
                            <Link href={'#'}>Enclosures, Storage & Material Handling</Link>
                            <Link href={'#'}>HVAC, Fans & Thermal Management</Link>
                            <Link href={'#'}>Network, Power & signal Connectors</Link>
                            <Link href={'#'}>Panel Meters & Accessories</Link>
                            <Link href={'#'}>Passive Components, Crystals & Oscillators</Link>
                            <Link href={'#'}>Pneumatics, Hydraulics & Power Transmission</Link>
                            <Link href={'#'}>Power Supplies</Link>
                            <Link href={'#'}>Fire Alarms, Safety Control & Security</Link>
                            <Link href={'#'}>Semiconductor Devices</Link>
                            <Link href={'#'}>Sensors, Encoders & Transducers</Link>
                            <Link href={'#'}>Hand Tools & Supplies Computer Engineering Software & Licences</Link>
                            <Link href={'#'}>Power Quality & Control</Link>
                            <Link href={'#'}>PPE - Personal Protective Equipment</Link>
                        </div>
                    </div>

                    {/* ==== left side bannar ====  */}
                    <div className='hidden md:block'>
                        <Image src={productBanner} className='rounded-md' />
                    </div>
                    {/* ==== end left side banner ====  */}


                    {/* ====why choose us ===  */}
                    <div className='hidden md:block'>
                        <h1 className='text-xl font-semibold text-center mb-2'>Why Choose us?</h1>
                        <Image src={choose1} className='rounded-md' />
                    </div>
                    {/* ===== end why choose us ====  */}


                     {/* ==== left side bannar ====  */}
                     <div className='hidden md:block'>
                        <Image src={productBanner} className='rounded-md' />
                    </div>
                    {/* ==== end left side banner ====  */}




                   </div>


                </div>
                {/* === end side bar ===  */}




                {/* ==== right side bar ===  */}
                <div className=' xl:w-full overflow-hidden'>
                    <div className='mt-10 md:mt-0 md:h-fit'>
                        <Banner_slide />
                    </div>

                    {/* ======  Banner botton text ===  */}
                    <div className='md:py-16'>
                        <h1 className='text-2xl md:text-2xl text-center font-semibold'> We are one of the leading Industrial machine, Spare parts, Sensor <br /> <span className='text-textNavColor font-bold'>Importer and Supplier in Bangladesh </span> </h1>
                    </div>
                    {/* === end banner bottom text ===  */}



                    {/* ====  Brands ====  */}
                    <div className='py-16'>
                        <Brands />
                    </div>
                    {/* ==== end Brands ===  */}


                    {/* ==== feature product ===  */}
                    <div className='py-16'>
                        <Feature_product />
                    </div>
                    {/* ==== end feature product ====  */}

                    {/* ==== proud clients ====  */}
                    <div>
                        <Proud_clients/>
                    </div>
                    {/* ====end proud clients ====  */}


                    {/* ==== servcies ===  */}
                    <div className='my-10'>
                        <Services/>
                    </div>
                    {/* ==== end services ===  */}



                </div>
                {/* === end right side bar ====  */}



            </div>

        </div>
    )
}

export default Main_hero
