"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = ({ data, cursorRef }) => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  // GSAP for Animation
  useEffect(() => {
    // Animate h2
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
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
    });
  }, []);

  const cards = data?.section_five?.section_cards || [];
  const title = data?.section_five || [];


  return (
    <section className="py-10 bg-gradient-to-b from-white via-[#E1FA7A] via-33% via-[#E9FFA0] via-70% to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-black text-[30px] md:text-[48px] font-[700] text-left md:text-center mb-[70px]"
        >
          {title?.section_title || "Build your portfolio under one roof"}
        </h2>

        {/* Cards */}
        <div
          ref={contentRef}
          className="flex lg:grid lg:grid-cols-3 gap-6 mx-auto max-w-[860px] overflow-x-auto lg::overflow-visible scrollbar-hide"
        >

          {/* mapping on cards for api */}
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex-shrink-0 lg:flex-shrink bg-white rounded-[20px] p-6 flex flex-col justify-between w-[260px] h-[296px] border-1 border-[#E1FA7A] hover:shadow-lg`}
              onMouseMove={() => {
                if (cursorRef.current) {
                  cursorRef.current.innerHTML = card.card_title;
                  gsap.to(cursorRef.current, {
                    width: "auto",
                    height: "auto",
                    padding: "8px 12px",
                    fontSize: "12px",
                    duration: 0,
                    delay: 0,
                    opacity: 1,
                    ease: "power2.out",
                  });
                }
              }}
              onMouseLeave={() => {
                if (cursorRef.current) {
                  cursorRef.current.innerHTML = "";
                  gsap.to(cursorRef.current, {
                    width: 40,
                    height: 40,
                    padding: 0,
                    fontSize: "10px",
                    duration: 0.3,
                    ease: "power2.out",
                  });
                }
              }}
              
            >
              <div>
                <h3 className="text-[#0F0F0F] text-[24px] font-[700] mb-2">
                  {card.card_title}
                </h3>
                <p className="text-[#606060] text-[16px] font-[400]">
                  {card.card_sub_text}
                </p>
              </div>
              
                <button className="mt-6 bg-black text-white p-2 rounded-[8px] w-10 h-10 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md transition duration-200 ease-in-out transform hover:scale-105">
                  <span className="hover:-rotate-40 duration-100">➔</span>
                </button>
              
            </div>
          ))}

        </div>
      </div>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
    
  );
};

export default PortfolioSection;
