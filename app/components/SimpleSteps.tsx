import React from "react";

const steps = [
  {
    step: "STEP ONE",
    number: "01",
    title: "Shop Online",
    text: "Buy items from international stores that ship to our overseas warehouse.",
    side: "left",
  },
  {
    step: "STEP TWO",
    number: "02",
    title: "We Receive Your Item",
    text: "Your order arrives at our shared overseas warehouse, where it is checked in and prepared for shipping.",
    side: "right",
  },
  {
    step: "STEP THREE",
    number: "03",
    title: "Choose Shipping & Pay",
    text: "Select your shipping option, view the cost, and complete payment.",
    side: "right",
  },
  {
    step: "STEP FOUR",
    number: "04",
    title: "Delivered to Nigeria",
    text: "Your package is shipped to Nigeria and delivered to your address, with tracking updates along the way.",
    side: "left",
  },
];

const SimpleSteps = () => {
  return (
    <section
      className="
        relative max-w-[1000px] mx-auto py-24 px-4
        bg-[url('/images/bg.png')] bg-cover bg-center
      "
    >
      {/* Header */}
      <div className="text-center mb-20">
        <p className="inline-block text-[#003631] px-5 py-2 rounded-full border border-[#47FFEE] bg-[#D1FFFB] text-sm">
          Simple Steps
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-medium mt-4">
          How it Works
        </h2>
        <p className="text-[#717171] mt-3 text-sm sm:text-base max-w-xl mx-auto">
          Buying from international stores doesn’t have to be complicated.
          Here’s how we make it simple.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative grid grid-cols-1 sm:grid-cols-[1fr_40px_1fr] gap-y-20">
        {/* Vertical line */}
        <div className="hidden sm:block absolute left-1/2 top-0 h-full w-[2px] bg-[#003631]/20 -translate-x-1/2" />

        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Left column */}
            <div
              className={`${
                step.side === "left"
                  ? "sm:flex sm:justify-end"
                  : "hidden sm:block"
              }`}
            >
              {step.side === "left" && <StepCard {...step} />}
            </div>

            {/* Center dot */}
            <div className="relative flex justify-center">
              <span className="w-3 h-3 rounded-full bg-[#003631] mt-6" />
            </div>

            {/* Right column */}
            <div
              className={`${
                step.side === "right"
                  ? "sm:flex sm:justify-start"
                  : "hidden sm:block"
              }`}
            >
              {step.side === "right" && <StepCard {...step} />}
            </div>

            {/* Mobile (stacked) */}
            <div className="sm:hidden">
              <StepCard {...step} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

const StepCard = ({ step, number, title, text }) => (
  <div className="bg-white rounded-[30px] p-6 max-w-[360px] shadow-sm">
    <div className="flex items-center justify-between mb-6">
      <p className="uppercase text-sm text-[#181818]">{step}</p>
      <span className="w-10 h-10 flex items-center justify-center rounded-full border border-dashed border-[#003631] text-sm">
        {number}
      </span>
    </div>

    <h3 className="font-bold text-lg mb-3">{title}</h3>
    <p className="text-[#717171] text-sm leading-relaxed">{text}</p>
  </div>
);

export default SimpleSteps;
