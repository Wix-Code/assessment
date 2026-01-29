import React from 'react';

const HeroPage = () => {
  const images = [
    "./images/h.png",
    "./images/h1.png",
    "./images/h2.png",
    "./images/h3.png",
    "./images/h4.png",
    "./images/h5.png",
    "./images/h5.png",
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      {/* Heading */}
      <div className="flex flex-col gap-3 items-center text-center mb-14">
        <p className="text-[#003631] px-5 py-3 rounded-full border border-[#47FFEE] bg-[#D1FFFB] text-sm">
          Global Shopping, Made Simple
        </p>

        <p className="text-[#181818] font-extrabold text-3xl sm:text-4xl lg:text-[52px] leading-[1.15]">
          Buy from International Stores. <br />
          We Deliver to Nigeria.
        </p>
      </div>

      {/* Images */}
      <div className="relative flex justify-center items-center mb-14">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative"
            style={{
              transform: `rotate(${(index - 3) * 6}deg) translateY(${Math.abs(index - 3) * 6}px)`,
              marginLeft: index === 0 ? "0px" : "-48px",
              zIndex: images.length - index,
            }}
          >
            <img
              src={image}
              alt=""
              className="w-[100%] h-[100%] object-cover rounded-2xl shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-[#717171] text-center max-w-[760px] mx-auto mb-10 text-sm sm:text-base leading-[28px]">
        We help <span className="text-[#181818]">Nigerians shop from abroad,</span> receive items at our overseas warehouse, and{" "}
        <span className="text-[#181818]">ship them safely to Nigeria,</span> with clear pricing and full tracking.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-3">
        <button className="py-3 sm:py-4 px-6 sm:px-8 rounded-full bg-[#003631] text-white text-sm sm:text-base font-medium hover:bg-[#004d45] transition-colors">
          Get Started
        </button>

        <button className="border border-[#003631] text-[#003631] font-medium text-sm sm:text-base px-6 py-3 sm:py-4 rounded-full hover:bg-[#003631] hover:text-white transition-colors">
          How it Works
        </button>
      </div>
    </section>
  );
};

export default HeroPage;