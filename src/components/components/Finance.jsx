"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Finance = ({ data }) => {
  const [activeTab, setActiveTab] = useState("traders");
  const [openIndex, setOpenIndex] = useState(0);

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const setRef = useRef(null);

    // GSAP for Animation
  useEffect(() => {
    // Animate h2
    gsap.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    });
    gsap.from(setRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: setRef.current,
        start: "top 80%",
      },
    });
    // Animate bottom section
    gsap.from(contentRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
      },
    });
  }, []);

  const title = data?.section_four || [];

  const tradersFeatures = data?.section_four?.section_tabs[0] || [];

 
  const investorsFeatures = data?.section_four?.section_tabs[1] || [];

  
  const currentTabData = activeTab === "traders" ? tradersFeatures : investorsFeatures;

  const features = currentTabData?.accordions || [];

  // Toggle FAQ open/close
  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-10 px-4 md:px-[60px]">
      {/* Title */}
      <h2
        ref={titleRef}
        className="text-black text-3xl md:text-4xl font-bold text-left md:text-center mb-10"
      >
        {title?.section_title || " Title"}
      </h2>

      {/* Tabs */}
      <div ref={setRef} className="flex justify-center mb-10 space-x-6">
        <button
          onClick={() => setActiveTab("traders")}
          className={`text-lg font-semibold border-b-2 pb-1 transition-all cursor-pointer ${
            activeTab === "traders"
              ? "text-black border-black"
              : "text-gray-400 border-transparent"
          }`}
        >
          {tradersFeatures?.tab_title || "For Traders"}
        </button>
        <button
          onClick={() => setActiveTab("investors")}
          className={`text-lg font-semibold border-b-2 pb-1 transition-all cursor-pointer ${
            activeTab === "investors"
              ? "text-black border-black"
              : "text-gray-400 border-transparent"
          }`}
        >
          {investorsFeatures?.tab_title || "For Investors"}
        </button>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="flex flex-col md:flex-row md:justify-center md:items-start gap-[50px] md:gap-[20px] lg:gap-[20px] xl:gap-[142px]"
      >
        {/* Left Accordion */}
        <div className="w-full md:w-[350px] lg:w-[460px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-b cursor-pointer "
              onClick={() => toggleOpen(index)}
            >
              <div className="flex items-center justify-between py-3">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 py-[2px] md:py-[10px]">
                  <Image
                    src={
                      feature.icon?.data?.attributes?.url || "statistics 1.png"
                    }
                    alt={feature.title}
                    width={24}
                    height={24}
                  />
                  <h4 className="text-black text-[19px] md:text-[20px] font-[600]">
                    {feature.title}
                  </h4>
                </div>

                {/* Arrow */}
                <button
                  className="text-black text-[16px] font-[400] focus:outline-none cursor-pointer w-1.5 h-1.5 justify-center"
                  aria-label={openIndex === index ? "Collapse" : "Expand"}
                >
                  {openIndex === index ? "-" : "+"}
                </button>
              </div>

              {/* Description */}
              {/* {openIndex === index && ( */}
              <div
                className={`overflow-hidden transition-all duration-600 ease-in-out ${
                  openIndex === index ? "max-h-[100px] mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-500 text-[16px] mb-6">
                  {feature.description}
                </p>
              </div>
              {/* )} */}
            </div>
          ))}
        </div>

        {/* Right Chart */}
        <div className="w-full md:w-[300px]  lg:w-[455px] h-[500px]  relative flex justify-center items-center">
          <div className=" p-6 rounded-2xl relative overflow-hidden w-full justify-center">
            {/* Main Chart */}
            {features.map(
              (feature, index) =>
                openIndex === index && (
                  <div
                    key={index}
                    className="w-full md:w-[300px] lg:w-[455px] md:h-[500px] relative flex justify-center items-center"
                  >
                    <div className=" p-6 rounded-2xl relative overflow-hidden w-full justify-center transition-all duration-300 ease-in-out">
                      <Image
                        src={
                          feature?.accordion_media_desktop?.data?.attributes
                            ?.url || "/financemain.png"
                        }
                        alt="Finance chart"
                        width={500}
                        height={500}
                        className="rounded-xl h-[500px] md:h-[400px] lg:h-[500px] md:w-[250px] w-[455px] lg:w-[455px] object-cover"
                      />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
