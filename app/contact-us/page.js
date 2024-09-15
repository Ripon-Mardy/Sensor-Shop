"use client";
import React, { useState } from "react";
import Link from "next/link";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  }); // contact state
  const [loading, setLoading] = useState(false); //loading state
  const [error, setError] = useState('') // error state
  const [success, setSucess]  = useState('') // success message 
  

  const handleForm = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name] :value
    })
  }

  const handleSubmitForm = async  (e) => {
    e.preventDefault();
    setLoading(true)
    setError('')
    setSucess('')
    try {
      const response = await fetch('api value', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify(formData)
      })
      const data = await response.json();
      if(response.ok) {
        setSucess('message send sucessfully')
        setFormData({name : '', email : '', number : '', subject : '', message : ''})
      } else {
        setError(data.message || 'Something went wrong, please try again.')
      }
    } catch (error) {
      setError('Failed to send message. Please try again later.')
    } finally {
      setLoading(false)
    }

  }

  return (
    <>
      <section>
        <div className="container mx-auto px-3 py-10">
          {/* <div className="border border-gray-300 rounded-md w-fit p-2 text-sm">
            <Link href={"/"}>Home /</Link>
            <span> Contact Us</span>
          </div> */}

          <div className="flex flex-col md:flex-row items-center justify-center md:gap-20 gap-10">
            {/* ===contact ===  */}
            <div className="basis-1/2 border border-gray-300 md:p-10 rounded-md w-full p-5">
              <form onSubmit={handleSubmitForm} action="#" className="flex flex-col gap-5">
                <input
                onChange={handleForm}
                  value={formData.name}
                  name="name"
                  type="text"
                  className="border w-full border-gray-300 rounded-md outline-none  p-2 text-sm font-medium text-para_color "
                  placeholder="Name"
                  required
                />
                <input
                onChange={handleForm}
                  value={formData.email}
                  name="email"
                  type="email"
                  className="border w-full border-gray-300 rounded-md outline-none  p-2 text-sm font-medium text-para_color "
                  placeholder="Email"
                  required
                />
                <input
                  value={formData.number}
                  onChange={handleForm}
                  name="number"
                  type="number"
                  className="border w-full border-gray-300 rounded-md outline-none  p-2 text-sm font-medium text-para_color "
                  placeholder="Mobile Number"
                  required
                />
                <input
                  value={formData.subject}
                  onChange={handleForm}
                  name="subject"
                  type="text"
                  className="border w-full border-gray-300 rounded-md outline-none  p-2 text-sm font-medium text-para_color "
                  placeholder="Subject"
                />
                <textarea
                  value={formData.message}
                  name="message"
                  onChange={handleForm}
                  id=""
                  rows={6}
                  className="border w-full border-gray-300 outline-none p-2 rounded-md text-sm text-header_text"
                  placeholder="Message"
                ></textarea>
                <button
                  type="submit"
                  className=" py-1 px-6 rounded-md bg-navBgColor text-lg text-white w-fit "
                >
                  send
                </button>
              </form>
            </div>

            {/* === location ===  */}
            <div className="basis-1/2 ">
              <iframe
                className="px-4 rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5009.004988651476!2d90.36677776376587!3d23.80947532883005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b85270d125%3A0xd5b318c235754351!2sTechsense%20Bangladesh%20Ltd.!5e1!3m2!1sen!2sbd!4v1725086295448!5m2!1sen!2sbd"
                width="500"
                height="300"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="flex flex-col md:flex-row gap-5 md:gap-8 mt-8 px-4">
                <div className="flex flex-col gap-1 text-sm">
                  <h1 className="text-lg text-header_text font-semibold">
                    OUR LOCATION
                  </h1>
                  <p>House#3, Block#A, Road#5</p>
                  <p>Section-6, Mirpur, Dhaka-1216</p>
                  <p>Beside of Aalok Hospital Mirpur 10</p>
                  <p>Call: 01711-261553</p>
                  <p>Email: info@sensor-shopbd.com</p>
                </div>
                <div className="flex flex-col gap-1 text-sm">
                  <h1 className="text-lg text-header_text font-semibold">
                    PAYMENT METHOD
                  </h1>
                  <p>BKash: 01711-261553 (personal)</p>
                  <p>Bank Account No:- 1555204780015001</p>
                  <p>Account Name: Techsense Bangladesh Ltd.</p>
                  <p>Bank Name: BRAC Bank Limited</p>
                  <p>Branch of Bank: Banani 11, Dhaka, </p>
                  <p>Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
