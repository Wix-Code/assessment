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
      image: "./images/house.png",
      title: "Overseas Warehouse",
      description: "We receive and process your items securely."
    },
    {
      image: "./images/group.png",
      title: "Delivered to Nigeria",
      description: "Your package arrives at your chosen Nigerian address."
    },
    {
      image: "./images/search.png",
      title: "Transparent & Secure",
      description: "Clear costs, real tracking, safe payments."
    },
  ]

  return (
    <div className="max-w-[1200px] satoshi mx-auto px-4 sm:px-6 py-10 lg:py-14">

      <div className="flex flex-col gap-2 items-center text-center mb-12">
        <p className="text-[#003631] px-5 py-3 rounded-[30px] border border-[#47FFEE] bg-[#D1FFFB] text-sm">
          Built for you
        </p>

        <h2 className="text-[#181818] font-medium text-3xl sm:text-4xl lg:text-[40px] mt-4">
          Who Is This For?
        </h2>

        <p className="text-[#717171] text-sm sm:text-base max-w-2xl mt-2 px-4">
          Designed for Nigerians who shop internationally and want reliable
          <br className="hidden sm:block" /> delivery back home.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
      {build.map((item, index) => {
        const isFirst = index === 0

        return (
          <div
            key={index}
            className={`
              flex w-full rounded-[24px] overflow-hidden
              bg-white border border-gray-200 h-fit
              flex-col
              ${isFirst ? 'sm:flex-col-reverse' : 'md:mt-24'}
            `}
          >
           
            <img
              src={item.image}
              alt={item.title}
              className="
                w-full
                h-[220px] sm:h-[300px] lg:h-[380px]
                object-cover
              "
            />

            <div className="p-6 flex flex-col gap-2 text-left">
              <p className="text-[#181818] font-semibold text-lg sm:text-xl">
                {item.title}
              </p>
              <p className="text-[#717171] text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>

      <div className="
        grid mt-16 mb-10 gap-5
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
      ">
        {vectors.map((vec, index) => (
          <div
            key={index}
            className="
              rounded-[32px] p-6 bg-[#EDEDED]
              flex flex-col items-center text-center gap-3
            "
          >
            <img src={vec.image} alt={vec.title} className="w-10 h-10" />
            <p className="text-[#181818] font-bold text-lg">
              {vec.title}
            </p>
            <p className="text-[#717171] text-sm leading-relaxed">
              {vec.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default BuildForYou
