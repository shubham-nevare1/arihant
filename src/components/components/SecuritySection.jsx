"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SecuritySection = ({ data }) => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const mobileImageRef = useRef(null);


  // GSAP for Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      tl.from(titleRef.current, { y: 100, opacity: 0, duration: 0.5 })
        .from(
          containerRef.current,
          { y: 100, opacity: 0, duration: 0.5 },
          "+=0.2"
        )
        .from(
          leftTextRef.current,
          { y: 50, opacity: 0, duration: 0.8 },
          "+=0.2"
        )
        .from(
          rightTextRef.current,
          { y: 50, opacity: 0, duration: 0.8 },
          "-=0.7"
        )
        .from(
          mobileImageRef.current,
          { y: 100, opacity: 0, duration: 1 },
          "-=0.8"
        );

      gsap
        .timeline()
        .to(mobileImageRef.current, { y: "-=90", duration: 1 })
        .to(mobileImageRef.current, {
          y: "+=20",
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          duration: 2,
        });
    });

    return () => ctx.revert();
  }, []);

  const cards = data?.section_six?.section_cards || [];
  const img = data?.section_six || [];

  return (
    <section className=" px-4 md:px-[60px] py-[15px]  bg-white overflow-hidden">
      {/* Title */}
      <div ref={titleRef} className="text-center mb-[20px] lg:mb-[70px] px-4">
        <h2 className="text-black text-[28px] md:text-[48px] font-[700]">
          {img?.section_title}
        </h2>
      </div>

      {/* Background Container */}
      <div
        ref={containerRef}
        className="relative mx-auto w-full flex justify-center items-center"
      >
        <div className="relative w-full max-w-[556px] md:max-w-[1240px] h-auto lg:h-[711px] rounded-[20px] overflow-hidden ">
          {/* Background Image */}
          <div className="absolute inset-0 hidden md:block md:flex justify-center items-center">
            <img
              src={
                img?.section_bg_image_desktop?.data?.attributes?.url ||
                "/SecuritySectionBG.png"
              }
              alt="Security Background"
              className="w-[800px] md:w-[400px] lg:w-[800px] h-full md:h-[450px] lg:h-[600px] object-fill rounded-2xl"
            />
          </div>
          <div className="absolute inset-0 block md:hidden">
            <img
              src="/SecuritySectionBGMob.png"
              alt="Security Background"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Foreground Content */}
          <div className=" relative flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-8  pb-[5px]">
            {/* Left Text (Desktop only) */}
            <div
              ref={leftTextRef}
              className="hidden lg:flex flex-col gap-[65px] w-[250px] text-center"
            >
              <div>
                <h3 className="text-black text-[24px] font-[700]">
                  {cards[0]?.title}
                </h3>
                <p className="text-gray-600 text-[16px] font-[400]">
                  {cards[0]?.sub_title}
                </p>
              </div>
              <div>
                <h3 className="text-black text-[24px] font-[700]">
                  {cards[2]?.title}
                </h3>
                <p className="text-gray-600 text-[16px] font-[400]">
                  {cards[2]?.sub_title}
                </p>
              </div>
            </div>

            {/* Center Mobile Image */}
            <div
              ref={mobileImageRef}
              className="relative w-[250px] md:w-[374px] h-auto md:h-[450px] lg:h-[675px] my-8 md:pl-[200px] lg:pl-0 md:my-0 flex justify-center"
            >
              <img
                src="/SecurityMob3.png"
                alt="Mobile Security"
                className="w-full h-auto md:w-[200px] lg:w-full object-contain"
              />
            </div>

            {/* Right Text (Desktop only) */}
            <div
              ref={rightTextRef}
              className="hidden lg:flex flex-col gap-[65px] max-w-[250px] text-center"
            >
              <div>
                <h3 className="text-black text-[24px] font-[700]">
                  {cards[1]?.title}
                </h3>
                <p className="text-gray-600 text-[16px] font-[400]">
                  {cards[1]?.sub_title}
                </p>
              </div>
              <div>
                <h3 className="text-black text-[24px] font-[700]">
                  {cards[3]?.title}
                </h3>
                <p className="text-gray-600 text-[16px] font-[400]">
                  {cards[3]?.sub_title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Text BELOW background */}
      <div className="flex justify-center lg:hidden pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[36px] mt-[42px] w-[90%] max-w-[500px]">
          {cards.length > 0 && (
          cards.map((card, index) => (
            <div key={index} className="text-center">
              <h3 className="text-black text-[18px] font-[600]">
                {card?.title}
              </h3>
              <p className="text-[14px] font-[400] text-[#4D4C4C]">
                {card?.sub_title}
              </p>
            </div>
          )))}
        </div>
      </div>

    </section>
  );
};

export default SecuritySection;
