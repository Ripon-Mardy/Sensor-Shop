"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "@/helpers/axiosInstance";
import Loading from "@/components/Loading";

const Category = ({ params }) => {
  const slugName = params.name;

  const [categorys, setCategorys] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectCategory, setSelectCategory] = useState(null);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoriesRes = await axiosInstance.get("/categories?taxonomy_type=categories");
        setCategorys(categoriesRes.data.data);

        // Fetch products
        const productsRes = await axiosInstance.get("/posts?term_type=product");
        const fetchedProducts = productsRes.data.data;
        setProducts(fetchedProducts);

        // Filter products based on slugName
        const matchedProducts = fetchedProducts.filter((product) =>
          product.categories.some((category) => category.slug === slugName)
        );
        setFilterProducts(matchedProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slugName]); // Add `slugName` as a dependency to trigger re-fetching if it changes

  const handleCategoryClick = (slug) => {
    setSelectCategory(slug);
    const matchedProducts = products.filter((product) =>
      product.categories.some((category) => category.slug === slug)
    );
    setFilterProducts(matchedProducts);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <section>
        <div className="container mx-auto px-3 md:px-0 py-10">

          <div className="mt-10 flex flex-col md:flex-row gap-10">
            {/* ==== category menus === */}
            <div className="md:basis-[20%]">
              <h1 className="bg-navBgColor text-white py-2 pl-3 text-xl capitalize font-medium rounded-tl-md rounded-tr-md">
                Categories
              </h1>

              <div className="flex flex-col gap-3 items-start p-3 text-textNavColor font-semibold text-sm capitalize overflow-y-auto border border-gray-300 h-52 md:h-screen rounded-md">
                {categorys.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.slug)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            {/* ==== category list === */}
            <div className="md:basis-[80%]">
              <div>
                {selectCategory && filterProducts.length === 0 && (
                  <div className="text-red-500">No related products found</div>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filterProducts.map((product, index) => (
                  <Link
                    href={`/products/${product.slug}`}
                    key={index}
                    className="border border-gray-100 p-2 shadow hover:shadow-md hover:border-gray-200 duration-200 ease-in-out"
                  >
                    <Image
                      src={product.featured_image}
                      width={300}
                      height={300}
                      alt={product.name}
                    />
                    <div className="text-center">
                      <h1 className="font-semibold capitalize text-base">
                        {product.name}
                      </h1>
                      <p className="font-medium text-black-400 text-sm mt-1">
                        {typeof product?.extraFields?.find(
                          (field) => field.meta_name === "product_short_description"
                        )?.meta_value === "string"
                          ? product.extraFields
                            .find((field) => field.meta_name === "product_short_description")
                            .meta_value.slice(0, 10) // Just slice the string, no split or join
                          : ""}
                        {/* You can add product short description here */}
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

export default Category;