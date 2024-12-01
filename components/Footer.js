'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import axiosInstance from '@/helpers/axiosInstance';
import { getMetaValueByMetaName } from '@/helpers/metaHelpers';
import Image from 'next/image';
// image
import we_chat from "./../public/image/we_chat.png";


const Footer = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    // Fetch settings from the API
    axiosInstance.get('/frontend/settings')
      .then(response => {
        setSettings(response.data);
      })
      .catch(error => {
        console.error('Error fetching settings:', error);
      });
  }, []);

  // Use helper method to get specific meta values with fallback
  const facebookLink = getMetaValueByMetaName(settings, 'facebook_url') || '#';
  const instagramLink = getMetaValueByMetaName(settings, 'instagram_url') || '#';
  const linkedinLink = getMetaValueByMetaName(settings, 'linkedin_url') || '#';
  const youtubeLink = getMetaValueByMetaName(settings, 'youtube_url') || '#';
  const careersEnabled = getMetaValueByMetaName(settings, 'careers_enabled') || null;

  const support = getMetaValueByMetaName(settings, 'footer_content') || '#';
  const german_address = getMetaValueByMetaName(settings, 'german_address') || '#';

  return (
    <>
      <footer className="bg-footerColor">
        <div className="container mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <h1 className=" text-gray-200">Support</h1>
            <div className='text-gray-400' dangerouslySetInnerHTML={{ __html: support }} />
            <div className="contact-buttons pt-4">
              <a href="https://wa.me/1711261553" className="contact-button whatsapp" target="_blank">
                WhatsApp
              </a>

              {/* <a href="weixin://dl/chat?chatid=YOUR_WECHAT_ID" className="contact-button wechat">
                WeChat
              </a> */}

              <a href="tel:+1711261553" className="contact-button call">
                Call
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className=" text-gray-200">
              German Address
            </h1>
            <div className='text-gray-400' dangerouslySetInnerHTML={{ __html: german_address }} />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className=" text-gray-200">
              Knowledge Base
            </h1>
            <div className="flex flex-col text-sm text-gray-400 gap-2">
              <Link href={"/page/about-us"}>About us</Link>
              <Link href={"/contact-us"}>Contact us</Link>
            </div>
            <div className='flex gap-2 items-center'>
              <Link target='_blank' href={facebookLink} className='text-2xl text-white p-1'><FaFacebook /></Link>
              <Link target='_blank' href={instagramLink} className='text-2xl text-white p-1'><FaInstagram /></Link>
              <Link target='_blank' href={linkedinLink} className='text-2xl text-white p-1'><FaLinkedin /></Link>
              <Link target='_blank' href={youtubeLink} className='text-2xl text-white p-1'><FaYoutube /></Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className=" text-gray-200">
              WeChat Connect
            </h1>
            <Image
              src={we_chat}// Path relative to the `public` folder
              alt="Team Member"
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="w-full h-0.5 bg-gray-600 "></div>
        <div className="container mx-auto pt-2 flex flex-col md:flex-row items-center justify-center text-sm text-gray-400 pb-2">
          <p className="mb-2 md:mb-0">All Rights Reserved © Sensor Shop Bangladesh.</p>
          <p className="flex items-center">
            &nbsp; Developed By
            <Link
              className="text-green-600 ml-1" // Added margin for spacing
              href={"https://mathmozo.com"}
              target="_blank"
            >
              Mathmozo IT
            </Link>
          </p>
        </div>

      </footer>
    </>
  );
};

export default Footer;
