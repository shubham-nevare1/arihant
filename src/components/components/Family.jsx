"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function Family({ data }) {
  const family = data?.section_three || [];

  const [openIndex, setOpenIndex] = useState(null);

  //  manage the open accordion index
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const familyRef = useRef(null);

    // GSAP for Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: familyRef.current,
          start: "top 50%", 
          toggleActions: "play none none none", 
        },
      });
  
      timeline
        .from("h2", {
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
        })
        .from(
          ".card-item-1",
          {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
            stagger: 0.2,
          },
          "-=0.5"
        )
        .from(
          ".card-item-3",
          {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
            stagger: 1,
          },
          "-=0.5"
        )
        .from(
          ".card-item-2",
          {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
            stagger: 1,
          },
          "-=0.5"
        )
        .from(
          ".card-item-4",
          {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
            stagger: 0.2,
          },
          "-=0.5"
        );
    }, familyRef);
  
    return () => ctx.revert();
  }, []);
  

  return (
    <div
      ref={familyRef}
      className="w-full bg-white py-8 px-4 md:px-[20px] xl:px-[140px] max-w-[1440px]  mx-auto"
    >
      <h2 className="text-black text-3xl md:text-[48px] font-[700] text-left md:text-center mb-12">
        {family?.section_title}
      </h2>

      {/* Mobile Accordion */}
      <div className="block md:hidden space-y-4">
        {/* Accordion Item 1 */}
        <div
          className={`rounded-2xl overflow-hidden transition-all duration-300 bg-[#f4ebff]`}
        >
          <button
            onClick={() => toggleAccordion(0)}
            className="w-full p-4 flex justify-between items-center font-semibold text-left"
          >
            <span className="text-black text-[18px] font-[600] p-[14px] w-[230px]">
              Expert advice. Backed by research.
            </span>
            <span className="text-black text-[18px]">
              {openIndex === 0 ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </button>
          {openIndex === 0 && (
            <div className="p-4 pt-0">
              <p className="text-[14px] font-[400] text-[#4D4C4C] px-[20px] mb-4">
                Boost your investing power and get more bang for your buck.
              </p>
              <div className="flex flex-wrap gap-4">
                <Image
                  src="/1D5A8595 1.png"
                  alt="img1"
                  width={100}
                  height={100}
                  className="rounded-xl"
                />
                <Image
                  src="/DSC_7949 1.png"
                  alt="img2"
                  width={100}
                  height={100}
                  className="rounded-xl"
                />
                <Image
                  src="/DSC_0248 1.png"
                  alt="img3"
                  width={100}
                  height={100}
                  className="rounded-xl"
                />
              </div>
            </div>
          )}
        </div>

        {/* Accordion Item 2 */}
        <div className="rounded-2xl overflow-hidden transition-all duration-300 bg-[#e9f9c8]">
          <button
            onClick={() => toggleAccordion(1)}
            className="w-full p-4 flex justify-between items-center font-semibold text-left"
          >
            <span className="text-black text-[18px] font-[600] p-[14px] w-[230px]">
              Margin trades. To amplify your gains.
            </span>
            <span className="text-black text-[18px]">
              {openIndex === 1 ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </button>

          {openIndex === 1 && (
            <div className="relative pt-0 min-h-[300px]">
              {" "}
              {/* Make this relative and set min height */}
              <p className="text-[14px] font-[400] text-[#4D4C4C] px-[25px] mb-4">
                Boost your investing power and get more bang for your buck.
              </p>
              {/* Image Positioned Absolute */}
              <Image
                src="/stock quote - financials.png"
                alt="img4"
                width={200}
                height={200}
                className="absolute bottom-0 right-0 rounded-xl"
              />
            </div>
          )}
        </div>

        {/* Accordion Item 3 */}
        <div className="rounded-2xl overflow-hidden transition-all duration-300 bg-[#f4f6f8]">
          <button
            onClick={() => toggleAccordion(2)}
            className="w-full p-4 flex justify-between items-center font-semibold text-left"
          >
            <span className="text-black text-[18px] font-[600] p-[14px] w-[230px]">
              Expert Solutions. Seamless Support.
            </span>
            <span className="text-black text-[18px]">
              {openIndex === 2 ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </button>

          {openIndex === 2 && (
            <div className="relative pt-0 min-h-[170px] px-[25px] pb-[25px]">
              {/* Make div relative, padding bottom added */}
              <p className="text-[14px] font-[400] text-[#4D4C4C] mb-4 ">
                Navigate your journey confidently, with our team of experts just
                a call away.
              </p>

              {/* Image absolutely positioned */}
              <Image
                src="/Trades 1.png"
                alt="img5"
                width={200}
                height={200}
                className="absolute bottom-0 right-0 rounded-xl"
              />
            </div>
          )}
        </div>

        {/* Accordion Item 4 */}
        <div className="rounded-2xl overflow-hidden transition-all duration-300 bg-[#dff8e6]">
          <button
            onClick={() => toggleAccordion(3)}
            className="w-full p-4 flex justify-between items-center font-semibold text-left"
          >
            <span className="text-black text-[18px] font-[600] p-[14px] w-[230px]">
              Finance made smarter
            </span>
            <span className="text-black text-[18px]">
              {openIndex === 3 ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </button>

          {openIndex === 3 && (
            <div className="relative pt-0 min-h-[200px] px-[25px] pb-[25px]">
              {/* relative + padding for spacing */}
              <p className="text-[14px] font-[400] text-[#4D4C4C] mb-4 ">
                Elevate your trading with ArihantPlus: lightning-fast trades,
                intuitive UI, and smart tools.
              </p>

              {/* Image absolutely positioned */}
              <Image
                src="/Pie 2.png"
                alt="img6"
                width={200}
                height={200}
                className="absolute bottom-0 right-0 rounded-xl"
              />
            </div>
          )}
        </div>

        {/* More About Button */}
        <div className="bg-[#e9f9c8] hover:bg-[#d5efb1] rounded-2xl p-6 flex items-center justify-between cursor-pointer group transition-all min-h-[100px]">
          <span className="text-[18px] font-[600] text-black">
            More about Arihant Plus
          </span>
          <span className="text-black text-[18px] transform group-hover:translate-x-1 transition">
            →
          </span>
        </div>
      </div>

      {/* Main flex layout Desktop*/}
      <div className="w-full bg-white py-[5px] px-4 md:px-[60px] lg:px-[40px]  hidden md:block">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6 flex-1">
            {/* Card 1 */}
            <div className="card-item-1 bg-[#f4ebff] rounded-2xl p-6 flex flex-col justify-between min-h-[436px] ">
              <div className=" flex flex-col md:flex-row justify-between h-full">
                {/* Text Side */}
                <div className="flex-1">
                  <h3
                    className="text-[32px] font-[600] text-black mb-4"
                    dangerouslySetInnerHTML={{
                      __html: family?.section_cards?.[0]?.title,
                    }}
                  />

                  <p className="text-[#4D4C4C] text-[16px] font-[400]">
                    {family?.section_cards?.[0]?.sub_title}
                  </p>
                </div>

                {/* Images Side */}
                <div className="flex flex-col items-center justify-center gap-4 mt-6 md:mt-0">
                  {[
                    {
                      src: family?.section_cards?.[0]?.card_images?.data?.[0]
                        ?.attributes?.url,
                      alt: "Person 1",
                    },
                    {
                      src: family?.section_cards?.[0]?.card_images?.data?.[1]
                        ?.attributes?.url,
                      alt: "Person 2",
                    },
                    {
                      src: family?.section_cards?.[0]?.card_images?.data?.[2]
                        ?.attributes?.url,
                      alt: "Person 3",
                    },
                  ].map((person, index) => (
                    <Image
                      key={index}
                      src={person.src}
                      alt={person.alt}
                      width={100}
                      height={100}
                      className="rounded-xl"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card-item-2 bg-[#dff8e6] rounded-2xl flex flex-col justify-between min-h-[397px] relative overflow-hidden ">
              {/* Text */}
              <div className=" pt-6 pl-6 pr-6">
                <h3 className="text-[32px] font-[600] text-black mb-4 leading-tight">
                  {family?.section_cards?.[2]?.title}
                </h3>
                <p className="text-[#4D4C4C] text-[16px] font-[400]">
                  {family?.section_cards?.[2]?.sub_title}
                </p>
              </div>

              {/* Image */}
              <div className="absolute bottom-0 right-0">
                <Image
                  src={
                    family?.section_cards?.[2]?.card_images?.data?.[0]
                      ?.attributes?.url
                  }
                  alt="Chart"
                  width={298}
                  height={329}
                />
              </div>
            </div>

            {/* Bottom Button */}
            <div className="bg-[#e9f9c8] hover:bg-[#d5efb1] rounded-2xl p-6 flex items-center justify-between cursor-pointer group transition-all min-h-[120px]">
              <span className="text-[32px] font-[600] text-black ">
                {family?.plus_cta_btn?.title}
              </span>
              <Link
                href={family?.plus_cta_btn?.link}
                className="text-[32px] group transition-transform transform group-hover:translate-x-1"
              >
                <span className="inline-block transition-transform duration-200 ease-in-out group-hover:-rotate-45">
                  ➔
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 flex-1">
            {/* Card 2 */}
            <div className="card-item-3 bg-[#e9f9c8] rounded-2xl flex flex-col justify-between min-h-[600px] relative overflow-hidden ">
              {/* Text */}
              <div className="p-6 pr-6">
                <h3
                  className="text-[32px] font-[600] text-black mb-4"
                  dangerouslySetInnerHTML={{
                    __html: family?.section_cards?.[1]?.title,
                  }}
                />

                <p className="text-[#4D4C4C] text-[16px] font-[400]">
                  {family?.section_cards?.[1]?.sub_title}
                </p>
              </div>

              {/* Image */}
              <div className="absolute bottom-0 right-0">
                <Image
                  src={
                    family?.section_cards?.[1]?.card_images?.data?.[0]
                      ?.attributes?.url
                  }
                  alt="Mobile Display"
                  width={311}
                  height={392}
                />
              </div>
            </div>

            {/* Card 4 */}
            <div className="card-item-4 bg-[#f4f6f8] rounded-2xl flex flex-col justify-between min-h-[382px] relative overflow-hidden ">
              <div className="pt-6 pl-6 pr-3">
                <h3
                  className="text-[32px] font-[600] text-black mb-4"
                  dangerouslySetInnerHTML={{
                    __html: family?.section_cards?.[3]?.title,
                  }}
                />

                <p className="text-[#4D4C4C] text-[16px] font-[400]">
                  {family?.section_cards?.[3]?.sub_title}
                </p>
              </div>

              {/* Image */}
              <div className="absolute bottom-0 right-0">
                <Image
                  src={
                    family?.section_cards?.[3]?.card_images?.data?.[0]
                      ?.attributes?.url
                  }
                  alt="Graph"
                  width={392}
                  height={290}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Family;
