import Link from 'next/link'
import React from 'react'
import Banner_slide from './Banner_slide'

const Main_hero = () => {
  return (
    <div className='container mx-auto px-3 md:px-0 py-10'>
      
      <div className='md:flex md:justify-between md:gap-10'>



        {/* ==== left side bar ===  */}
        <div className=' border-2 rounded-md border-navBorder xl:w-1/4'>
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
        {/* === end side bar ===  */}




        {/* ==== right side bar ===  */}
        <div className=' xl:w-full'>
           <div className='mt-10 md:mt-0'>
           <Banner_slide/>
           </div>
        </div>
        {/* === end right side bar ====  */}



      </div>

    </div>
  )
}

export default Main_hero
