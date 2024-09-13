"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Loading from "@/components/Loading";

const page = ({ params }) => {
  const slugName = params.name;

  const [categorys, setCategorys] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectCategory, setSelectCategory] = useState(null);
  const [filterProducuts, setFilterProducts] = useState([]);

  // ==== fetch category ==
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch(
          "http://mathmozocms.test/api/v1/categories?taxonomy_type=categories"
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setCategorys(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, []);

  // ==== fetch product ===
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(
        "http://mathmozocms.test/api/v1/posts?term_type=product"
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setProducts(data.data);
    };
    fetchProduct();
  }, []);

  // ==== filtered ===

  useEffect(() => {
    const metchToslug = products.filter((product) =>
      product.categories.some((category) => category.slug === slugName)
    );
    setFilterProducts(metchToslug)
  }, [products]);

  const handleCategoryClick = (slug) => {
    setSelectCategory(slug);
    const matchedProduct = products.filter((product) =>
      product.categories.some((category) => category.slug === slug)
    );
    setFilterProducts(matchedProduct);
  };

  // if (loading) {
  //   return (
  //     <>
  //       <Loading />
  //     </>
  //   );
  // }
  if (error) {
    return <div>Error {error} </div>;
  }

  return (
    <>
      <section>
        <div className="container mx-auto px-3 md:px-0 py-10">
          {/* === home link ==  */}
          <div className="border border-gray-300 rounded-md w-fit p-2 text-sm">
            <Link href={"/"}>Home /</Link>
            <span> Category / {slugName} </span>
          </div>

          <div className="mt-10 flex flex-col md:flex-row md:flex gap-10">
            {/* ==== category menus === */}
            <div className="md:basis-[20%]">
              <h1 className="bg-navBgColor text-white py-2 pl-3 text-xl capitalize font-medium rounded-tl-md rounded-tr-md">
                categories
              </h1>

              <div className="flex flex-col gap-3 p-3 text-textNavColor font-semibold text-sm capitalize overflow-y-auto border border-gray-300 h-52 md:h-screen rounded-md ">
                {categorys.map((category) => (
                  <div key={category.id}>
                    <button
                      onClick={() => handleCategoryClick(category.slug)}
                      // href={`/category/${category.name}`}
                    >
                      {category.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* ==== category list ===  */}
            <div className="md:basis-[80%]">
              <div>
                {selectCategory && filterProducuts.length === 0 && (
                  <div className="text-red-500">Not find related product</div>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filterProducuts.map((product, index) => (
                  <Link
                    href={`/products/${product.slug}`}
                    key={index}
                    className=" border border-gray-100 p-2 shadow hover:shadow-md hover:border-gray-200 duration-200 ease-in-out"
                  >
                    <Image
                      src={product.featured_image}
                      width={300}
                      height={300}
                      alt="product"
                    />
                    <div className="text-center">
                      <h1 className="font-semibold capitalize text-base">
                        {product.name}
                      </h1>
                      <p className="font-medium text-red-500 text-sm mt-1">
                        {product.slug}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
