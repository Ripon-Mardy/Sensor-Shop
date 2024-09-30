"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "@/helpers/axiosInstance";
import Loading from "@/components/Loading";
import GetAQuote from "@/components/GetAQuote";

const Category = ({ params }) => {
  const slugName = params.name;

  const [categorys, setCategorys] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectCategory, setSelectCategory] = useState(null);
  const [filterProducts, setFilterProducts] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesRes = await axiosInstance.get("/categories?taxonomy_type=categories");
        setCategorys(categoriesRes.data.data);

        const productsRes = await axiosInstance.get("/posts?term_type=product");
        const fetchedProducts = productsRes.data.data;
        setProducts(fetchedProducts);

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
  }, [slugName]);

  const handleCategoryClick = (slug) => {
    setSelectCategory(slug);
    const matchedProducts = products.filter((product) =>
      product.categories.some((category) => category.slug === slug)
    );
    setFilterProducts(matchedProducts);
  };

  const openPopUp = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-3 md:px-0 flex flex-col md:flex-row gap-10">

          {/* Categories Section */}
          <div className="md:basis-[20%]">
            <h1 className="bg-navBgColor text-white py-2 pl-3 text-xl capitalize font-medium">Categories</h1>
            <div className="flex flex-col gap-3 items-start p-3 text-textNavColor font-semibold text-sm capitalize overflow-y-auto border border-gray-300 h-[500px] md:h-[600px] rounded-lg shadow-lg">
              {categorys.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.slug)}
                  className={`text-left p-2 rounded-lg hover:bg-gray-200 transition duration-200 ${selectCategory === category.slug ? 'font-bold bg-gray-200' : ''}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products Section */}
          <div className="md:basis-[80%]">
            {selectCategory && filterProducts.length === 0 && (
              <div className="text-red-500">No related products found</div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filterProducts.map((product, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-200 flex flex-col">
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex-shrink-0"
                  >
                    <Image
                      src={product.featured_image}
                      width={300}
                      height={300}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </Link>
                  <div className="p-4 flex-grow">
                    <h1 className="font-semibold text-lg capitalize">
                      <Link href={`/products/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h1>
                    <div className="flex items-center mt-2">
                      {product.categories.filter(category => category.taxonomy_type === "product_brands").map(category => (
                        <Link key={category.id} href={`/category/${category.slug}`} className="flex items-center gap-2">
                          <Image
                            src={category.media_url}
                            width={30}
                            height={30}
                            alt={category.name}
                            className="object-cover rounded-full"
                          />
                          <span className="text-sm">{category.name}</span>
                        </Link>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {typeof product?.extraFields?.find(
                        (field) => field.meta_name === "product_short_description"
                      )?.meta_value === "string"
                        ? product.extraFields.find((field) => field.meta_name === "product_short_description").meta_value.slice(0, 100) + '...'
                        : ""}
                    </p>
                  </div>
                  <div className="p-4 border-t border-gray-200">
                    <button
                      onClick={openPopUp}
                      className="w-full text-sm bg-navBgColor text-white p-2 rounded-md hover:bg-hoverNavBgColor transition duration-200"
                    >
                      Get a quote
                    </button>
                    <GetAQuote
                      visible={isFormVisible}
                      onClose={handleCloseForm}
                      productName={product.name}
                      productId={product.id}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
