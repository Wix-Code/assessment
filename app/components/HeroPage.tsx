import React from "react";

const HeroPage = () => {
  const images = [
    "./images/h.png",
    "./images/h1.png",
    "https://img-1.kwcdn.com/product/fancy/51853756-f30b-4977-a7bd-91defa2cf1ff.jpg?imageView2/2/w/1300/q/80/format/avif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFj3lfgDpctVTi7od2keWwO-8Uqpcav0uoQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkx5pQYf0rb_73vZNdTA5E22IHld6b6u2dlw&s",
    "https://png.pngtree.com/thumb_back/fh260/background/20240622/pngtree-running-and-sports-shoes-image_15805712.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s",
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
      {/* Heading */}
      <div className="flex flex-col gap-3 items-center text-center mb-14">
        <p className="text-[#003631] px-5 py-3 rounded-full border border-[#47FFEE] bg-[#D1FFFB] text-sm">
          Global Shopping, Made Simple
        </p>

        <h1 className="text-[#181818] font-extrabold text-3xl sm:text-4xl lg:text-[52px] leading-tight">
          Buy from International Stores.
          <br className="hidden sm:block" />
          We Deliver to Nigeria.
        </h1>
      </div>

      {/* Images */}
      {/* Mobile / Tablet */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-14 lg:hidden">
        {images.slice(0, 6).map((image, index) => (
          <div
            key={index}
            className="aspect-[3/4] rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={image}
              alt="Product"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Desktop Overlapping Stack */}
      <div className="relative hidden lg:flex justify-center items-center mb-14">
        {images.map((image, index) => {
          const middle = Math.floor(images.length / 2);
          const offset = index - middle;

          return (
            <div
              key={index}
              className="absolute"
              style={{
                transform: `translateX(${offset * 90}px) rotate(${offset * 6}deg) translateY(${Math.abs(offset) * 8}px)`,
                zIndex: images.length - Math.abs(offset),
              }}
            >
              <div className="w-[200px] h-[260px] rounded-2xl overflow-hidden shadow-xl bg-white">
                <img
                  src={image}
                  alt="Product"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Description */}
      <p className="text-[#717171] text-center max-w-[760px] mx-auto mb-10 text-sm sm:text-base leading-relaxed">
        We help <span className="text-[#181818] font-medium">Nigerians shop from abroad,</span>{" "}
        receive items at our overseas warehouse, and{" "}
        <span className="text-[#181818] font-medium">ship them safely to Nigeria,</span>{" "}
        with clear pricing and full tracking.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-3 flex-wrap">
        <button className="py-3 sm:py-4 px-6 sm:px-8 rounded-full bg-[#003631] text-white text-sm sm:text-base font-medium hover:bg-[#004d45] transition">
          Get Started
        </button>

        <button className="border border-[#003631] text-[#003631] font-medium text-sm sm:text-base px-6 py-3 sm:py-4 rounded-full hover:bg-[#003631] hover:text-white transition">
          How it Works
        </button>
      </div>
    </section>
  );
};

export default HeroPage;
