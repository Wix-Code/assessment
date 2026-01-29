import React from "react";

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
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 lg:py-14 satoshi">
      <div className="flex flex-col items-center text-center mb-10">
        <p className="text-[#003631] px-5 py-3 rounded-full border border-[#47FFEE] bg-[#D1FFFB] text-sm">
          Platform Highlights
        </p>

        <h2 className="text-[#181818] font-medium text-3xl sm:text-4xl lg:text-[40px] mt-4">
          Everything You Need, In One Place
        </h2>

        <p className="text-[#717171] text-sm sm:text-base mt-2 max-w-xl">
          All your global shopping and shipping tools, together.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-2xl border border-[#D7D7D7] bg-[#F9F9F9] overflow-hidden hover:shadow-md transition"
          >
            
            <div className="w-full aspect-[4/3] bg-white">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-4 sm:p-5 bg-white">
              <h3 className="text-[#181818] mb-2 font-bold text-lg lg:text-xl">
                {feature.title}
              </h3>

              <p className="text-[#717171] text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EveryThingYouNeed;