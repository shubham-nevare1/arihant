"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQ = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);

  const faqs = data?.section_faq?.q_and_a || [];
  const title = data?.section_faq || [];

  // Toggle FAQ open/close
  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // GSAP for Animation
  useEffect(() => {
    if (faqRef.current) {
      gsap.from(faqRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <section
      ref={faqRef}
      className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 md:px-[50px] lg:px-[140px] py-16 lg:py-[120px] overflow-hidden max-w-[1440px] mx-auto"
    >
      <div className="flex flex-col md:flex-row items-start md:gap-[40px]">
        {/* Left side */}
        <div className=" w-full md:w-[260px] lg:w-[360px]">
          <h2 className="text-black text-[42px] md:text-[48px] font-bold leading-tight">
            {title?.section_title}
          </h2>
          <div className="flex items-center gap-6 mt-10">
            <a
              href={title?.section_cta[0]?.link}
              className="flex items-center gap-2 text-[#30BB54] text-[16px] underline underline-offset-4"
            >
              {title?.section_cta[0]?.title} ↗
            </a>
            <a
              href={title?.section_cta[1]?.link}
              className="flex items-center gap-2 text-black text-[16px] font-medium border-b border-black"
            >
              {title?.section_cta[1]?.title} ↗
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1 w-full max-w-[760px] mt-10 md:mt-0 space-y-6">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border-b border-black pb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleOpen(index)}
              >
                <h4 className="text-black text-[16px] font-[600]">
                  {faq.title}
                </h4>
                <span className="text-black text-[16px] font-[400]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {/* description */}
              {/* {openIndex === index && ( */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[1000px] mt-3" : "max-h-0"
                }`}
              >
                <div
                  className="text-gray-600 mt-3 text-sm"
                  dangerouslySetInnerHTML={{ __html: faq.description }}
                />
              </div>
              {/* )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
