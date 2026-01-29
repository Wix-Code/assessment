import React from 'react'

const SimpleSteps = () => {
  return (
    <div className="
      flex satoshi max-w-[924px] m-auto flex-col items-center justify-center
      bg-[url('/images/bg.png')]
      bg-no-repeat
      bg-cover
      bg-center
      py-24
    ">
      <div className='flex flex-col gap-2 items-center text-center mb-12'>
        <p className='text-[#003631] px-5 py-3 rounded-[30px] border-[1px] border-[#47FFEE] bg-[#D1FFFB] font-normal text-sm'>
          Simple Steps
        </p>
        <p className='text-[#181818] font-medium text-3xl sm:text-4xl lg:text-[40px] mt-4'>
          How it Works
        </p>
        <p className='text-[#717171] font-normal text-sm sm:text-base max-w-2xl mt-2 px-4'>
         Buying from international stores doesn’t have to be complicated.<br /> Here’s how we make it simple.
        </p>
      </div>

      {/* First Two Steps */}
      <div className='flex flex-col md:flex-row relative px-5 w-full justify-between'>
        <div className='flex w-full md:w-[320px] flex-col gap-5 mb-8 md:mb-0'>
          <div className='flex flex-row items-center justify-between bg-white p-5 rounded-[30px]'>
            <p className='text-[#181818] text-[24] font-normal uppercase'>Step one</p>
            <button className='w-[45px] text-[18px] font-normal  h-[45px] rounded-full border-dashed border-[1px] border-[#003631]'>01</button>
          </div>
          <div className='p-[20px] bg-white rounded-[30px]'>
            <p className='text-[#181818] mb-4 text-[24] mt-20 font-bold'>Shop Online</p>
            <p className='text-[#717171] text-[16px] font-normal'>Buy items from international stores that <br />ship to our overseas warehouse.</p>
          </div>
        </div>
        <img
          src="./images/v.png"
          alt=""
          className="hidden md:block absolute top-50 left-1/2 -translate-x-1/2"
        />
        <div className='flex w-full md:w-[320px] flex-col md:mt-[190px] gap-5'>
          <div className='flex flex-row items-center justify-between bg-white p-5 rounded-[30px]'>
            <p className='text-[#181818] text-[24] font-normal uppercase'>Step two</p>
            <button className='w-[45px] text-[18px] font-normal  h-[45px] rounded-full border-dashed border-[1px] border-[#003631]'>02</button>
          </div>
          <div className='p-[20px] bg-white rounded-[30px]'>
            <p className='text-[#181818] mb-4 text-[24] mt-20 font-bold'>We Receive Your Item</p>
            <p className='text-[#717171] text-[16px] font-normal'>Your order arrives at our shared overseas warehouse, where it is checked in and prepared for shipping.</p>
          </div>
        </div>
      </div>

      <div className=" flex w-full md:flex hidden pr-36 justify-end items-end ">
        <img src="/images/vec.png" alt="" />
      </div>

      {/* Last Two Steps */}
      <div className='flex flex-col md:mt-0 mt-8 px-5 md:flex-row relative w-full justify-between'>

        {/* Step four (desktop) → move to last on small screens */}
        <div className='flex w-full md:w-[320px] flex-col md:mt-[200px] gap-5 mb-8 md:mb-0 order-2 md:order-1'>
          <div className='flex flex-row items-center justify-between bg-white p-5 rounded-[30px]'>
            <p className='text-[#181818] text-[24px] font-normal uppercase'>Step four</p>
            <button className='w-[45px] text-[18px] font-normal  h-[45px] rounded-full border-dashed border-[1px] border-[#003631]'>04</button>
          </div>
          <div className='p-[20px] bg-white rounded-[30px]'>
            <p className='text-[#181818] mb-4 text-[24px] mt-20 font-bold'>Delivered to Nigeria</p>
            <p className='text-[#717171] text-[16px] font-normal'>Your package is shipped to Nigeria and<br /> delivered to your address, with tracking<br /> updates along the way.</p>
          </div>
        </div>

        <img
          src="./images/ve.png"
          alt=""
          className="hidden md:block absolute top-54 left-1/2 -translate-x-1/2"
        />

        {/* Step three → move first on small screens */}
        <div className='flex w-full md:w-[320px] md:mb-0 mb-8 flex-col gap-5 order-1 md:order-2'>
          <div className='flex flex-row items-center justify-between bg-white p-5 rounded-[30px]'>
            <p className='text-[#181818] text-[24px] font-normal uppercase'>Step three</p>
            <button className='w-[45px] text-[18px] font-normal  h-[45px] rounded-full border-dashed border-[1px] border-[#003631]'>03</button>
          </div>
          <div className='p-[20px] bg-white rounded-[30px]'>
            <p className='text-[#181818] mb-4 text-[24px] mt-20 font-bold'>Choose Shipping & Pay</p>
            <p className='text-[#717171] text-[16px] font-normal'>Select your shipping option, view the cost, and complete payment.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SimpleSteps