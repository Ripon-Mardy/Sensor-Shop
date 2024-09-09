'use client'
import React, {useState, useEffect} from 'react'
import Loading from '@/components/Loading';
import Link from 'next/link';
import Image from 'next/image';

const page = () => {


    const [products, setProuducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const brandsList = async () => {
           try {
            const res = await fetch('http://mathmozocms.test/api/v1/posts?term_type=product');
            if(!res.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await res.json();
            setProuducts(data.data)
            
           } catch (error) {
            setError(error.message)
           } finally {
            setLoading(false)
           }
        }
        brandsList()
    }, [])

    if(loading) {
        return <Loading/>
    }

    if(error) {
        return (
            <div className="flex items-center justify-center">
              <p className="text-red-500">Error: {error}</p>
            </div>
          );
    }
    

  return (
    <>
    <section className='py-10'>
        <div className='container mx-auto px-3'>
            <h1 className='text-2xl capitalize font-medium'>all products</h1>

            <div className='grid grid-cols-2 md:grid-cols-5 gap-6 mt-8'>
                    {
                        products.map((product, index) => (
                            <Link href={`/products/${product.slug}`} key={index} className=' border border-gray-100 p-2 shadow hover:shadow-md hover:border-gray-200 duration-200 ease-in-out'>
                                <Image src={product.featured_image} width={300} height={300} alt='product' />
                                <div className='text-center'>
                                    <h1 className='font-semibold capitalize text-base'> {product.name} </h1>
                                    <p className='font-medium text-red-500 text-sm mt-1'> {product.slug} </p>
                                </div>

                            </Link>
                        ))
                    }
                </div>

        </div>
    </section>
    </>
  )
}

export default page
