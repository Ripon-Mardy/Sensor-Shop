'use client'
import { useState } from 'react';

// === icons === 
import { FaUser, FaPhone, FaHome   } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";


export default function page() {

  
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    comment: '',
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
    <div className="container mx-auto py-12">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-1/2 mx-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Get a quote</h2>

        {/* First Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Name
          </label>
          <div className="flex">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser/>
              </span>
              <input
                name="first_name"
                type="text"
                placeholder="First Name"
                className="pl-10 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <IoMdMail/>
              </span>
              <input
                name="email"
                type="email"
                placeholder="E-Mail Address"
                className="pl-10 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaPhone />
              </span>
              <input
                name="phone"
                type="text"
                placeholder="(845)555-1212"
                className="pl-10 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaHome />
              </span>
              <input
                name="address"
                type="text"
                placeholder="Address"
                className="pl-10 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaHome />
              </span>
              <input
                name="city"
                type="text"
                placeholder="City"
                className="pl-10 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
            className="p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
            className="bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
