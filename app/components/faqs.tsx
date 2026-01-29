import React from 'react'

const Faqs = () => {
  const faqs = [
    {
      question: "Do I get a personal warehouse address?",
      answer: "No. All packages are received at our shared overseas warehouse and processed securely."
    },
    {
      question: "Do you handle customs fees?",
      answer: "Customs duties are determined by Nigerian customs and are not controlled by us."
    },
    {
      question: "Can I shop from any international store?",
      answer: "Yes, as long as the store can ship to our warehouse location."
    },
    {
      question: "Can I track my package?",
      answer: "Yes. You'll receive tracking updates from warehouse to delivery."
    },
    {
      question: "What if my item is damaged?",
      answer: "Optional insurance is available for eligible shipments."
    }
  ]

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10 satoshi">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">

        <div className="flex flex-col gap-3 items-center text-center mb-10">
          <p className="text-[#003631] px-5 py-3 rounded-full border border-[#47FFEE] bg-[#D1FFFB] text-sm">
            Built for you
          </p>

          <h2 className="text-[#181818] font-medium text-3xl sm:text-4xl lg:text-[40px]">
            FAQs
          </h2>

          <p className="text-[#717171] text-sm sm:text-base max-w-2xl">
            Focused on your needs, our team delivers solutions to ensure adequate and secure buy and ship to Nigeria.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-[798px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#EDEDED] rounded-[24px] px-5 py-6 flex flex-col gap-2 sm:flex-row sm:gap-6"
            >
              <p className="text-[#181818] font-bold text-sm sm:text-base sm:w-1/2">
                {faq.question}
              </p>

              <p className="text-[#717171] text-sm sm:text-base sm:w-1/2">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 items-center mt-10 text-center">
          <p className="text-[#181818] font-bold text-base">
            Still have a question?
          </p>

          <p className="text-[#717171] text-sm sm:text-base">
            Reach out to our support team.
          </p>

          <button className="border border-[#003631] text-[#003631] font-bold px-6 py-3 rounded-full hover:bg-[#003631] hover:text-white transition">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  )
}

export default Faqs
