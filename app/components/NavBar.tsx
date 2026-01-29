import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-[#F7F7F7] satoshi sticky top-0 z-50 border-[1px] border-white px-5'>
      <div className='flex justify-between items-center h-[100px]'>
        <div className='flex items-center justify-center gap-2'>
          <div className='w-[32px] h-[32px] rounded-full bg-[#003631]'></div>
          <p className='text-[#181818] font-bold text-lg'>Brand Name</p>
        </div>
        <button className="py-3 sm:py-4 px-6 sm:px-8 rounded-full bg-[#003631] text-white text-sm sm:text-base font-medium hover:bg-[#004d45] transition-colors">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default NavBar