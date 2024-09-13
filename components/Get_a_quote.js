"use client";
import React, { useState } from "react";

// === icons ===
import { FaUser, FaPhone, FaHome } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Get_a_quote = ({ visible, onClose, productName }) => {
  if(!visible) return null


  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission, e.g., send data to an API


  };

  return (
    <>
      <section>
        <div className="h-screen w-full bg-gray-800  left-0 top-0 z-40 bg-opacity-10 bg-fixed py-5 fixed overflow-auto">
          <form
            className="bg-white shadow-md rounded p-4 w-[90%] md:w-1/2 mx-auto relative"
            onSubmit={handleSubmit}
          >
            <span
              onClick={onClose}
              className="text-2xl absolute left-3 top-2 cursor-pointer"
            >
              <IoCloseSharp />
            </span>
            <div className="mb-6">
            <h2 className="text-2xl font-bold text-center">Get a quote</h2>
            <span className=" flex items-start justify-center text-xs font-normal"> Prduct Name : {productName} </span>
            </div>

            {/* First Name */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Name
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sm">
                    <FaUser />
                  </span>
                  <input
                    name="first_name"
                    type="text"
                    placeholder="First Name"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                E-Mail
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sm">
                    <IoMdMail />
                  </span>
                  <input
                    name="email"
                    type="email"
                    placeholder="E-Mail Address"
                    className="pl-10 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Phone #
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sm">
                    <FaPhone />
                  </span>
                  <input
                    name="phone"
                    type="text"
                    placeholder="Number"
                    className="pl-10 p-2 text-sm w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Address
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sm">
                    <FaHome />
                  </span>
                  <input
                    name="address"
                    type="text"
                    placeholder="Address"
                    className="pl-10 p-2 text-sm w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* City */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                City
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sm">
                    <FaHome />
                  </span>
                  <input
                    name="city"
                    type="text"
                    placeholder="City"
                    className="pl-10 p-2 text-sm w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Comment */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Comments or questions
              </label>
              <textarea
                name="comment"
                placeholder="Enter your comments or questions here..."
                className="p-2 text-sm w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                rows="4"
                value={formData.comment}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-indigo-600 text-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Get_a_quote;
