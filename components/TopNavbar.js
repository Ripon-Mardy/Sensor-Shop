'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import axiosInstance from '@/helpers/axiosInstance';
import { getMetaValueByMetaName } from '@/helpers/metaHelpers';

const TopNavbar = () => {
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

  return (
    <div className='bg-navBgColor md:p-1 py-2 hidden md:block'>
      <div className='container mx-auto px-3 md:px-0 flex md:gap-10 items-center md:justify-end justify-center'>
        <div className='flex text-white items-center justify-center gap-6'>
          {/* Conditional rendering based on fetched settings */}
          {careersEnabled && (
            <Link href={'/careers'} className='flex items-center justify-center gap-1 md:text-sm text-xs uppercase'>
              <MdOutlineContentPasteSearch />
              Career
            </Link>
          )}
        </div>
        <div className='md:flex md:gap-6 md:items-center md:justify-center hidden'>
          <div className='flex gap-1 items-center justify-center'>
            <span className='text-white'>Hotline: </span>
            <Link href="tel:+8801711261553" className='text-base text-white'>+8801711261553</Link>
          </div>
           
          <Link target='_blank' href={facebookLink} className='text-base text-white p-1'><FaFacebook /></Link>
          <Link target='_blank' href={instagramLink} className='text-base text-white p-1'><FaInstagram /></Link>
          <Link target='_blank' href={linkedinLink} className='text-base text-white p-1'><FaLinkedin /></Link>
          <Link target='_blank' href={youtubeLink} className='text-base text-white p-1'><FaYoutube /></Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
