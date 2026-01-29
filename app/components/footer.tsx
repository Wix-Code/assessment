import React from 'react';

const Footer = () => {
  const options = [
    "How it works", "Features", "FAQs", "Contact Us", "Track Order", "Terms of Service"
  ]

  return (
    <div className="bg-[#003631] satoshi pt-12 sm:pt-16">
      <div className='flex flex-col max-w-[1100px] mx-auto px-4 sm:px-6'>
        {/* Logo and Brand */}
        <div className='flex items-center justify-center gap-2'>
          <div className='w-[32px] h-[32px] rounded-full bg-[#ffffff]'></div>
          <p className='text-[#ffffff] font-bold text-lg'>Brand Name</p>
        </div>

        {/* Description */}
        <p className='text-[#008F82] mt-4 font-normal text-base sm:text-lg text-center px-4'>
          Shop internationally, receive your items in Nigeria. Simply, <br className='hidden sm:block' /> safely,
          and transparently.
        </p>

        {/* Navigation Links */}
        <div className='flex flex-wrap justify-center py-8 sm:py-12 items-center gap-3 sm:gap-4'>
          {
            options.map((option, index) => (
              <div key={index} className='flex justify-center items-center'>
                <p className='text-[#008F82] text-sm sm:text-base border-[#008F82] border-[0.5px] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full whitespace-nowrap hover:bg-[#008F82] hover:text-[#003631] transition-colors cursor-pointer'>
                  {option}
                </p>
              </div>
            ))
          }
        </div>
      </div>

      {/* Copyright */}
      <div className='pt-4 pb-4 sm:pt-6 sm:pb-6 border-t-[1px] border-[#008F82]'>
        <p className='text-[#FFFFFF] text-sm sm:text-base font-normal text-center px-4'>
          © 2025 YourPlatformName. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;