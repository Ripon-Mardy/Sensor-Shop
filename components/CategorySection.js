// components/CategorySection.js
"use client";
import React from "react";
import Link from "next/link";

const CategorySection = ({ categories, isOpen, toggleCategories, height }) => {
    return (
        <div className="basis-[20%]">
            {/* Toggle Button for Categories on mobile */}
            <button
                onClick={toggleCategories}
                className="md:hidden text-navBgColor font-medium p-3 bg-gray-500 w-full text-white"
            >
                {isOpen ? 'Hide Categories' : 'Show Categories'}
            </button>
            
            {/* Category Section */}
            <div className={`border-2 border-navBorder ${isOpen ? 'block' : 'hidden md:block'}`}>
                {/* Title */}
                <h1 className="bg-navBgColor text-white py-2 pl-3 text-xl capitalize font-medium">
                    Categories
                </h1>
                
                {/* Scrollable Category List */}
                <div
                    className={`flex flex-col gap-2 p-3 text-textNavColor font-semibold text-sm capitalize overflow-y-auto`}
                    style={{
                        height: height,
                        scrollbarWidth: 'thin',           // Thinner scrollbars for Firefox
                        scrollbarColor: '#888 #e0e0e0'   // Scrollbar color
                    }}
                >
                    {categories.map((category) => (
                        <div key={category.id}>
                            <Link href={`/category/${category.slug}`}>
                                <span className="hover:text-blue-500 transition-colors duration-200">
                                    {category.name}
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style jsx>{`
                div.overflow-y-auto::-webkit-scrollbar {
                    width: 8px; /* width of the scrollbar */
                }
                div.overflow-y-auto::-webkit-scrollbar-track {
                    background: #f1f1f1; /* background of the scrollbar track */
                }
                div.overflow-y-auto::-webkit-scrollbar-thumb {
                    background-color: #888; /* scrollbar thumb color */
                    border-radius: 10px; /* roundness of the scrollbar */
                }
                div.overflow-y-auto::-webkit-scrollbar-thumb:hover {
                    background: #555; /* darker on hover */
                }
            `}</style>
        </div>
    );
};

export default CategorySection;
