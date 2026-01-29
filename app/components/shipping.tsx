import React from 'react'

const Shipping = () => {
  return (
    <div className='w-full satoshi px-4 sm:px-6 lg:px-8 py-10 lg:py-14'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12'>
          {/* Text Content */}
          <div className='flex flex-col gap-5 w-full lg:w-[48%]'>
            <h1 className='text-[#181818] text-3xl sm:text-4xl lg:text-[48px] font-extrabold leading-tight'>
              Start Shipping From <br className='hidden sm:block' /> Abroad Without Stress
            </h1>
            <p className='text-[#717171] text-base sm:text-lg font-normal leading-relaxed'>
              Shop internationally with confidence and receive your <br className='hidden sm:block' /> items in Nigeria with ease.
            </p>
            <button className='py-3 sm:py-4 px-6 sm:px-8 rounded-[30px] w-fit bg-[#003631] text-[#ffffff] text-sm sm:text-base font-medium hover:bg-[#004d45] transition-colors'>
              Create an Account
            </button>
          </div>

          {/* Image Grid */}
          <div className='flex flex-col gap-4 w-full lg:w-[48%]'>
            <div className='w-full'>
              <img 
                className='w-full h-auto object-cover rounded-lg' 
                src="./images/2.png" 
                alt="Shipping illustration" 
              />
            </div>
            <div className='flex w-full flex-row gap-4'>
              <div className='w-1/2'>
                <img 
                  className='w-full h-auto object-cover rounded-lg' 
                  src="./images/3.png" 
                  alt="Shipping feature 1" 
                />
              </div>
              <div className='w-1/2'>
                <img 
                  className='w-full h-auto object-cover rounded-lg' 
                  src="./images/1.png" 
                  alt="Shipping feature 2" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shipping