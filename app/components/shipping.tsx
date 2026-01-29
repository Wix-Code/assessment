import React from 'react'

const Shipping = () => {
  return (
    <div className="w-full satoshi px-4 sm:px-6 py-10 lg:py-14">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-12">

          <div className="
            flex flex-col gap-5 
            w-full lg:w-[48%]
            text-center lg:text-left
            items-center lg:items-start
          ">
            <h1 className="text-[#181818] text-3xl sm:text-4xl lg:text-[48px] font-extrabold leading-tight">
              Start Shipping From <br className="hidden sm:block" /> Abroad Without Stress
            </h1>

            <p className="text-[#717171] text-base sm:text-lg font-normal leading-relaxed">
              Shop internationally with confidence and receive your <br className="hidden sm:block" />
              items in Nigeria with ease.
            </p>

            <button className="
              py-3 sm:py-4 px-6 sm:px-8 
              rounded-[30px] 
              bg-[#003631] text-white 
              text-sm sm:text-base font-medium
              hover:bg-[#004d45] transition-colors
            ">
              Create an Account
            </button>
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-[48%]">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src="./images/2.png"
              alt="Shipping illustration"
            />

            <div className="flex gap-4">
              <img
                className="w-1/2 h-auto object-cover rounded-lg"
                src="./images/3.png"
                alt="Shipping feature 1"
              />
              <img
                className="w-1/2 h-auto object-cover rounded-lg"
                src="./images/1.png"
                alt="Shipping feature 2"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Shipping