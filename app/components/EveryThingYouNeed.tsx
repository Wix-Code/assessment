import React from 'react'

const EveryThingYouNeed = () => {
  const features = [
    {
      image: "./images/im.png",
      title: "Package Receiving",
      description: "We receive your international orders at our overseas warehouse."
    },
    {
      image: "./images/im1.png",
      title: "Package Consolidation",
      description: "Combine multiple purchases into one shipment to save on shipping costs."
    },
    {
      image: "./images/im3.png",
      title: "Shipping Cost Calculator",
      description: "See your shipping cost before paying. No surprises."
    },
    {
      image: "./images/im4.png",
      title: "Real-Time Tracking",
      description: "Track your package from warehouse to delivery in Nigeria."
    },
    {
      image: "./images/im5.png",
      title: "Assisted Purchase",
      description: "If a store doesn’t accept your card, share the product link and we’ll help you buy it."
    },
    {
      image: "./images/im2.png",
      title: "Order Notifications",
      description: "Get updates when your package arrives, ships, and is delivered."
    }
  ]

  return (
    <div className='max-w-[1200px] satoshi mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12'>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-[#003631] px-5 py-3 rounded-[30px] border-[1px] border-[#47FFEE] bg-[#D1FFFB] font-normal text-sm'>Platform Highlights</p>
        <p className='text-[#181818] font-medium text-3xl sm:text-4xl lg:text-[40px] mt-4'>Everything You Need, In One Place</p>
        <p className='text-[#717171] font-normal text-center text-base mt-2 mb-8 sm:mb-12'>All your global shopping and shipping tools, together.</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
          {features.map((feature, index) => (
            <div key={index} className='rounded-[20px] border-[#D7D7D7] border-[0.5px] bg-[#F9F9F9] overflow-hidden'>
              <div className='w-full h-[280px] aspect-video'>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-5 bg-white'>
                <p className='text-[#181818] mb-2 font-bold text-xl lg:text-[24px]'>{feature.title}</p>
                <p className='text-[#717171] font-normal text-sm lg:text-base'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EveryThingYouNeed