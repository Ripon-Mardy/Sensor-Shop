// components/CategorySection.js
"use client";
import React from "react";
import Link from "next/link";

const CategorySection = ({ categories, isOpen, toggleCategories, height }) => {
    return (
        <div className="basis-[20%]">
            <button
                onClick={toggleCategories}
                className="md:hidden text-navBgColor font-medium p-3 bg-gray-500 w-full text-white"
            >
                {isOpen ? 'Hide Categories' : 'Show Categories'}
            </button>
            <div className={`border-2 border-navBorder ${isOpen ? 'block' : 'hidden md:block'}`}>
                <h1 className="bg-navBgColor text-white py-2 pl-3 text-xl capitalize font-medium">Categories</h1>
                <div className={`flex flex-col gap-1 p-3 text-textNavColor font-semibold text-sm capitalize overflow-y-auto`} style={{ height: height }}>
                    {categories.map((category) => (
                        <div key={category.id}>
                            <Link href={`/category/${category.slug}`}>{category.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategorySection;
