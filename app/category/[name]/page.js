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
        <div className="container mx-auto px-3 md:px-0 py-8">

          <div className="mt-10 flex flex-col md:flex-row gap-2 xl:gap-3">
            {/* ==== category menus === */}
            <div className="md:basis-[20%]">
              <h1 className="bg-navBgColor text-white py-2 pl-3 text-xl capitalize font-medium">
                Categories
              </h1>

              <div className="flex flex-col gap-3 items-start p-3 text-textNavColor font-semibold text-sm capitalize overflow-y-auto border border-gray-300 h-52 md:h-screen">
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
              <div className="grid grid-cols-1 gap-10">
                {filterProducts.map((product, index) => (
                  <div key={index} className="flex gap-4">
                    {/* {JSON.stringify(product)} */}
                    <Link
                      href={`/products/${product.slug}`}
                      className="border border-gray-100 shadow hover:shadow-md hover:border-gray-200 duration-200 ease-in-out flex items-center justify-start p-2 gap-3 md:gap-6"
                    >
                      <Image
                        src={product.featured_image}
                        width={300}
                        height={300}
                        alt={product.name}
                        priority={false}
                        className="h-48 object-cover"
                      />
                    </Link>

                    <div className="flex flex-col gap-3">
                      <div className="flex gap-10 items-center">

                        {(() => {
                          const filteredCategories = product?.categories.filter(category => category.taxonomy_type === "product_brands");
                          return (
                            <div>
                              {filteredCategories.map(category => (
                                <div key={category?.id} className="flex items-center gap-2">
                                  <Link href={`/category/${category?.slug}`}>
                                    <Image
                                      src={category?.media_url} // Use the correct image URL
                                      width={100}
                                      height={100}
                                      alt={category?.name}
                                    />
                                  </Link>
                                  <Link href={`/category/${category?.slug}`}>
                                    <h1 className="text-lg">{category?.name}</h1>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          );
                        })()}

                      </div>
                      <h1 className="font-semibold capitalize text-lg md:text-xl">
                        <Link href={`/products/${product.slug}`}>
                          {product.name}
                        </Link>
                      </h1>
                      <p className="">
                        <Link
                          href={`/products/${product.slug}`}>
                          {typeof product?.extraFields?.find(
                            (field) => field.meta_name === "product_short_description"
                          )?.meta_value === "string"
                            ? product.extraFields.find((field) => field.meta_name === "product_short_description").meta_value.slice(0, 10)
                            : ""}
                        </Link>
                      </p>
                    </div>
                  </div>
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