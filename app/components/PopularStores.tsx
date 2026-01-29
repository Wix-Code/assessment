import React from 'react'

const PopularStores = () => {

  const icons = [
    "./images/ic.png",
    "./images/ic1.png",
    "./images/ic2.png",
    "./images/ic3.png",
    "./images/ic4.png",
    "./images/ic4.png",
    "./images/ic4.png",
    "./images/ic4.png",
  ]
  
  return (
    <div className='max-w-[1200px] satoshi mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12'>
      <div className='flex flex-col gap-2 items-center text-center mb-8'>
        <p className='text-[#003631] px-5 py-3 rounded-[30px] border-[1px] border-[#47FFEE] bg-[#D1FFFB] font-normal text-sm'>
          Popular Stores
        </p>
        <p className='text-[#181818] font-medium text-3xl sm:text-4xl lg:text-[40px] mt-4'>
          Top Stores Nigerians Shop From
        </p>
        <p className='text-[#717171] font-normal text-sm sm:text-base max-w-2xl px-4 mt-2'>
          Shop from trusted international brands across fashion, electronics, home, and more. We <br className='hidden sm:block' />handle the delivery from abroad and bring your items safely to Nigeria.
        </p>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 w-full mt-8'>
          {
            icons.map((icon, index) => (
              <div key={index} className='bg-[#EDEDED] w-full rounded-[20px] p-6 sm:p-8 flex items-center justify-center'>
                <img 
                  src={icon} 
                  alt={`Store ${index + 1}`}
                  className='w-full h-auto object-contain max-h-16'
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PopularStores