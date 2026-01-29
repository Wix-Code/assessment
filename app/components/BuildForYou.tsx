import React from 'react'

const BuildForYou = () => {
  const build = [
    {
      image: "./images/face.png",
      title: "Small Business Owners",
      description: "Importing items for resale in Nigeria."
    },
    {
      image: "./images/fac.png",
      title: "Everyday Shoppers",
      description: "Buying clothes, gadgets, and accessories from abroad."
    },
  ]

  const vectors = [
    {
      image: "./images/global.png",
      title: "Shop Globally",
      description: "Buy from US and other international stores."
    },
    {
      image: "./images/search.png",
      title: "Overseas Warehouse",
      description: "We receive and process your items securely."
    },
    {
      image: "./images/global.png",
      title: "Shop Globally",
      description: "Buy from US and other international stores."
    },
    {
      image: "./images/search.png",
      title: "Overseas Warehouse",
      description: "We receive and process your items securely."
    },
  ]
  
  
  return (
    <div className='max-w-[1200px] satoshi mx-auto px-4 sm:px-6 py-8 lg:py-12'>
      <div className='flex flex-col gap-2 items-center text-center mb-12'>
        <p className='text-[#003631] px-5 py-3 rounded-[30px] border-[1px] border-[#47FFEE] bg-[#D1FFFB] font-normal text-sm'>
          Built for you
        </p>
        <p className='text-[#181818] font-medium text-3xl sm:text-4xl lg:text-[40px] mt-4'>
          Who Is This For?
        </p>
        <p className='text-[#717171] font-normal text-sm sm:text-base max-w-2xl mt-2 px-4'>
          Designed for Nigerians who shop internationally and want reliable <br className='hidden sm:block' /> delivery back home.
        </p>
      </div>

      <div className='flex flex-col sm:flex-row gap-6 lg:gap-8 items-start'>
        {
          build.map((item, index) => {
            const isReversed = index % 2 !== 0;
            
            return (
              <div 
                key={index}
                className={`flex flex-1 rounded-[20px] overflow-hidden border border-gray-200 bg-white ${isReversed ? 'flex-col-reverse sm:mt-16 lg:mt-20' : 'flex-col'}`}
              >
                
                {/* Text Content */}
                <div className='flex flex-col p-6 gap-3'>
                  <p className='text-[#181818] font-bold text-xl sm:text-2xl'>
                    {item.title}
                  </p>
                  <p className='text-[#717171] font-normal text-sm sm:text-base leading-relaxed'>
                    {item.description}
                  </p>
                </div>

                {/* Image */}
                <div className='w-full'>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className='w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover'
                  />
                </div>

              </div>
            )
          })
        }
      </div>

      <div className='grid mt-20 mb-10 gap-5 grid-cols-4'>
        {vectors.map((vec) => {
          return (
            <div className='rounded-[32px] p-[24px] bg-[#EDEDED] flex flex-col justify-center items-center gap-2'>
              <img src={vec.image} alt="" />
              <p className='text-[#181818] font-bold text-[20px]'>{vec.title}</p>
              <p className='text-[#717171] text-center font-normal text-[16px]'>{vec.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BuildForYou