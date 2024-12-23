"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "@/helpers/axiosInstance";
import Loading from "@/components/Loading";
import GetAQuote from "@/components/GetAQuote";
import CategorySection from "@/components/CategorySection";

const Category = ({ params }) => {
    const slugName = params.name;

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectCategory, setSelectCategory] = useState(null);
    const [filterProducts, setFilterProducts] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesRes = await axiosInstance.get("/categories?taxonomy_type=categories&limit=40");
                setCategories(categoriesRes.data.data);

                const productsRes = await axiosInstance.get("/posts?term_type=product&per_page=100");
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

    const toggleCategories = () => {
        setIsOpen(!isOpen);
    };

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="container mx-auto px-3 md:px-0 pt-3 pb-10">
                <div className="md:flex md:justify-between gap-5">
                    <div className="xl:w-1/4">
                        <CategorySection categories={categories} isOpen={isOpen} toggleCategories={toggleCategories} height="500px" />
                    </div>
                    <div className="xl:w-full overflow-hidden">
                    <div className="md:basis-[80%] pt-5 md:pt-0">
                        {selectCategory && filterProducts.length === 0 && (
                            <div className="text-red-500">No related products found</div>
                        )}
                        <div className="md:w-full mx-auto flex flex-col gap-5">
                            {filterProducts.map((product, index) => (
                                <div key={index} className="flex gap-4">
                                    {/* Image Container */}
                                    <div className="w-1/2 md:w-[20%]">
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
                                                className="w-full object-cover"
                                            />
                                        </Link>
                                    </div>

                                    {/* Product Details */}
                                    <div className="w-1/2 md:w-[80%] flex flex-col gap-1 md:gap-3">
                                        <div className="flex flex-col sm:flex-row gap-10 items-start sm:items-center">
                                            {product.categories.filter(category => category.taxonomy_type === "product_brands").map(category => (
                                                <div key={category?.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                                                    <Link href={`/category/${category?.slug}`}>
                                                        <Image
                                                            src={category?.media_url}
                                                            width={100}
                                                            height={100}
                                                            alt={category?.name}
                                                            className="object-cover"
                                                        />
                                                    </Link>
                                                    <Link href={`/category/${category?.slug}`}>
                                                        <h2 className="text-lg">{category?.name}</h2>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                        <h2 className="font-medium text-base">
                                            <Link href={`/products/${product.slug}`}>
                                                {product?.name}
                                            </Link>
                                        </h2>

                                        <p className="text-para_color text-sm md:block hidden">
                                            {typeof product?.extraFields?.find(
                                                (field) => field.meta_name === "product_short_description"
                                            )?.meta_value === "string"
                                                ? product.extraFields.find((field) => field.meta_name === "product_short_description").meta_value.slice(0, 150)
                                                : ""}
                                        </p>
                                        <p>
                                            <button
                                                onClick={openPopUp}
                                                className="capitalize text-sm bg-navBgColor text-white p-2 px-4 rounded-sm hover:bg-hoverNavBgColor duration-200 ease-in-out w-fit text-center font-semibold"
                                            >
                                                Get a quote
                                            </button>
                                            <GetAQuote
                                                visible={isFormVisible}
                                                onClose={handleCloseForm}
                                                productName={product?.name}
                                                productId={product?.id}
                                            />
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Category;
