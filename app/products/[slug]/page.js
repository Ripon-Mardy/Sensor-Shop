'use client'
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
  const slug = params.slug;

  

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const res = await fetch('http://mathmozocms.test/api/v1/posts?term_type=products');
      if (!res.ok) {
        throw new Error('Network response was no ok');
      }
      const data = await res.json();
      setProductData(data.data)
    }
    fetchProductData()
  }, [])

  const product = productData.find(p => p.slug === slug);


  return (
    <>
      <div>
        <h1>{}</h1>
      </div>
    </>
  )
}

export default page
