import React from "react";

const HeroPage = () => {
  const images = [
    "./images/a.jpg",
    "./images/a1.jpg",
    "./images/a2.jpg",
    "./images/a3.jpg",
    "./images/a4.jpg",
    "./images/a5.jpg",
    "./images/a6.jpg",
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20">

      <div className="flex flex-col gap-3 items-center text-center mb-10 sm:mb-14">
        <p className="text-[#003631] px-5 py-3 rounded-full border border-[#47FFEE] bg-[#D1FFFB] text-sm">
          Global Shopping, Made Simple
        </p>

        <h1 className="text-[#181818] font-extrabold text-3xl sm:text-4xl lg:text-[52px] leading-tight">
          Buy from International Stores.
          <br className="hidden sm:block" />
          We Deliver to Nigeria.
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-12 sm:hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className="aspect-square rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="relative w-full max-w-[1000px] mx-auto h-[260px] sm:h-[300px] mb-12 hidden sm:block">
        {images.map((img, index) => {
          const middle = Math.floor(images.length / 2);
          const offset = index - middle;
          const absOffset = Math.abs(offset);

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `
                  translate(-50%, -50%)
                  translateX(${offset * 120}px)
                  translateY(${absOffset === 0 ? -60 : absOffset === 1 ? -25 : 30}px)
                  rotate(${offset * 6}deg)
                `,
                zIndex: images.length - absOffset,
              }}
            >
              <div className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] rounded-[28px] overflow-hidden shadow-xl bg-white">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-[#717171] text-center max-w-[760px] mx-auto mb-10 text-sm sm:text-base leading-relaxed">
        We help{" "}
        <span className="text-[#181818] font-medium">
          Nigerians shop from abroad,
        </span>{" "}
        receive items at our overseas warehouse, and{" "}
        <span className="text-[#181818] font-medium">
          ship them safely to Nigeria,
        </span>{" "}
        with clear pricing and full tracking.
      </p>

      <div className="flex justify-center gap-3 flex-wrap">
        <button className="py-3 sm:py-4 px-6 sm:px-8 cursor-pointer rounded-full bg-[#003631] text-white text-sm sm:text-base font-medium hover:bg-[#004d45] transition">
          Get Started
        </button>

        <button className="border border-[#003631] text-[#003631] font-medium text-sm sm:text-base px-6 py-3 sm:py-4 rounded-full hover:bg-[#003631] cursor-pointer hover:text-white transition">
          How it Works
        </button>
      </div>
    </section>
  );
};

export default HeroPage;
