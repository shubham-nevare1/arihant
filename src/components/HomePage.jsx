"use client";
import React, { useEffect, useRef, useState } from "react";
import QrBox from "./components/QrBox";
import HeroSection from "./components/HeroSection";
import Family from "./components/Family";
import Finance from "./components/Finance";
import PortfolioSection from "./components/PortfolioSection";
import SecuritySection from "./components/SecuritySection";
import LearnExpert from "./components/LearnExpert";
import DownloadBanner from "./components/DownloadBanner";
import FAQ from "./components/FAQ";
import ReviewSection from "./components/ReviewSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage({ data }) {

  const sectionRef = useRef(null);
  const cursorRef = useRef(null);

  // GSAP for Animation
  useEffect(() => {
    gsap.from(sectionRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    // Cursor tracking animation
    const handleMouseMove = (event) => {
      gsap.to(cursorRef.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const card = data?.section_two?.section_cards || [];
  const secTwo = data?.section_two || [];

  return (
    <>
      <div
        ref={cursorRef}
        className="h-[40px] w-[40px] bg-[#CFE66F] rounded-full fixed z-[9999] pointer-events-none text-center text-[15px] flex items-center justify-center  font-bold text-black whitespace-nowrap"
      ></div>

      <div>
        <QrBox />
        <HeroSection data={data} />
        <div
          ref={sectionRef}
          className="w-full bg-white py-20 px-8 flex flex-col lg:flex-row items-center justify-center gap-16 relative overflow-hidden"
        >
          {/* Left Content */}
          <div className="max-w-md text-left">
            <h2
              className="text-[28px] md:text-[48px] font-[700] text-black leading-snug"
              dangerouslySetInnerHTML={{ __html: secTwo?.section_title || "" }}
            />
            <p className="text-[16px] md:text-[18px] font-[400] text-[#4D4C4C] mt-4">
              {secTwo?.sub_text}
            </p>
            <a
              href={secTwo?.section_cta_link}
              className="inline-block mt-6 text-[16px] font-[500] underline underline-offset-4 text-black transition"
            >
              {secTwo?.section_cta_title} ↗
            </a>
          </div>

          {/* Right Card */}
          <div className="bg-[#ab64e23e] rounded-[20px] p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-around gap-8 w-full md:w-[760px] md:h-[293px] text-black">
            {card.map((card, index) => (
              <div key={index} className="text-center min-w-[120px]">
                <div className="text-black font-bold">
                  <span className="text-[32px] font-[400] align-top">₹</span>
                  <span className="text-[64px] font-[700] leading-none">
                    {card.title}
                  </span>
                </div>
                <div className="text-[18px] font-[400] mt-1">
                  {card.sub_text}
                </div>
              </div>
            ))}

            {/* First Item */}
            {/* <div className="text-center min-w-[120px]">
              <div className="text-black font-bold">
                <span className="text-[32px] font-[400] align-top">₹</span>
                <span className="text-[64px] font-[700] leading-none">0</span>
              </div>

              <div className="text-[18px] font-[400]  mt-1">
                Account opening charges
              </div>
            </div> */}

            {/* Second Item */}
            {/* <div className="text-center min-w-[120px]">
              <div className="text-black font-bold">
                <span className="text-[32px] font-[400] align-top">₹</span>
                <span className="text-[64px] font-[700] leading-none">0</span>
              </div>{" "}
              <div className="text-[18px] font-[400]  mt-1">
                Account maintenance
              </div>
            </div> */}

            {/* Third Item */}
            {/* <div className="text-center min-w-[120px]">
              <div className="text-black font-bold">
                <span className="text-[32px] font-[400] align-top">₹</span>
                <span className="text-[64px] font-[700] leading-none">0</span>
              </div>{" "}
              <div className="text-[18px] font-[400]  mt-1">
                Account maintenance
              </div>
            </div> */}

            {/* Fourth Item */}
            {/* <div className="text-center min-w-[120px]">
              <div className="text-black font-bold">
                <span className="text-[32px] font-[400] align-top">₹</span>
                <span className="text-[64px] font-[700] leading-none">20</span>
              </div>{" "}
              <div className="text-[18px] font-[400]  mt-1">
                Brokerage charge
              </div>
            </div> */}
          </div>

          {/* Background Coins */}
          <img
            src="/coin3.png"
            alt="coin"
            className="absolute top-20 left-30 opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[220px] h-[223px]"
          />
          <img
            src="/coin2.png"
            alt="coin"
            className="absolute -bottom-4 right-40 w-[214px] h-[219px] opacity-50  pointer-events-none"
          />
        </div>

        <Family data={data} />
        <Finance data={data} />
        <PortfolioSection data={data} cursorRef={cursorRef} />
        <SecuritySection data={data} />
        <LearnExpert data={data} />
        <DownloadBanner data={data} cursorRef={cursorRef} />
        <FAQ data={data} />
        <ReviewSection data={data} />
      </div>
    </>
  );
}

