"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";

function HeroSection({ data }) {
  const mobileRef = useRef(null);
  const leftTextRef = useRef(null);
  

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Handle phone number input
  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhoneNumber(value);

    const phoneRegex = /^\d{10}$/;
    setIsValid(phoneRegex.test(value));

    
  };

  // GSAP for Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mobile up to down
      gsap.fromTo(
        mobileRef.current,
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1, ease: "power3.out", duration: 1 }
      );

      // Mobile slight up down movement
      gsap.to(mobileRef.current, {
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
        delay: 1.5,
      });

      // Coins animation
      gsap.fromTo(
        ".coin",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 0.6,
          stagger: 0.2,
          duration: 1,
          ease: "back.out(1.7)",
          delay: 1,
        }
      );

      // Left Text animation
      gsap.fromTo(
        leftTextRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 2 }
      );
    });

    return () => ctx.revert();
  }, []);

  // const scrollRef = useRef(null);
  // useEffect(() => {
  //   const isMobile = window.innerWidth < 768;
  //   const container = scrollRef.current;

  //   if (isMobile && container) {
  //     const duplicate = container.innerHTML;
  //     container.innerHTML += duplicate;

  //     const totalWidth = container.scrollWidth / 2;

  //     gsap.to(container, {
  //       x: `-=${totalWidth}`,
  //       duration: 30,
  //       ease: "linear",
  //       repeat: -1,
  //     });
  //   }
  // }, []);

  const merits_field = data?.section_one?.merits_field || [];

  const hero = data?.section_one || [];

  const coins = [
    {
      src: "/coin1.png",
      alt: "Coin 1",
      width: 120,
      height: 120,
      className: " absolute top-19 left-2 opacity-60 ",
    },
    {
      src: "/coin1.png",
      alt: "Coin 11",
      width: 200,
      height: 200,
      className: " absolute top-1/3 right-110 ",
    },
    {
      src: "/coin2.png",
      alt: "Coin 2",
      width: 200,
      height: 200,
      className: " absolute bottom-45 right-55 ",
    },
    {
      src: "/coin3.png",
      alt: "Coin 3",
      width: 80,
      height: 80,
      className:
        " absolute bottom-30 right-160 blur-sm opacity-60",
    },
  ];

  return (
    <div className="bg-white z-0 relative w-full min-h-screen overflow-hidden flex flex-col lg:flex-row lg:mt-[70px]">
      {/* Mobile BG Image */}
      <div className="block lg:hidden absolute left-0 md:left-[190px] right-0 bottom-0 -z-20 ">
        <Image
          src={hero?.section_container_bg_image_mobile?.data?.attributes?.url}
          alt="Mobile Background"
          width={800}
          height={1400}
          className="w-full h-auto md:h-[450px] md:w-[350px]"
          priority
          quality={100}
        />
      </div>

      {/* Desktop BG */}
      <div className="hidden lg:block absolute inset-0 -z-20">
        <Image
          src="/mainBanner1.png"
          alt="Desktop Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      {/* COINS */}
      <div>
        {coins.map((coin, index) => (
          <Image
            key={index}
            src={coin.src}
            alt={coin.alt}
            width={coin.width}
            height={coin.height}
            className={`coin hidden lg:block z-0 ${coin.className}`}
          />
        ))}
      </div>

      {/* LEFT SECTION */}
      <div
        className="flex-1 flex flex-col items-center lg:items-start justify-center px-6 lg:ml-[100px] pt-20 md:pt-[100px] lg:pt-[40px] z-10 md:w-[600px] mx-auto"
        ref={leftTextRef}
      >
        <h1 className="text-[40px] lg:text-[64px] lg:w-[500px] font-[700] text-black leading-tight text-left">
          {hero?.section_title}
        </h1>
        <p className="text-gray-700 mt-4 lg:mt-6 text-[16px] lg:text-[18px] font-[400] text-left lg:text-left">
          {hero?.sub_text}
        </p>

        {/* Form */}
        <form className="mt-6 lg:mt-8 flex flex-col sm:flex-row items-center gap-4 w-full lg:w-[410px] xl:w-[500px]">
          <div className="flex items-center border border-gray-400 rounded-[10px] bg-white overflow-hidden w-full h-[48px] lg:w-[650px] lg:h-[68px] relative z-20">
            <span className="px-4 text-black text-lg">
              {hero?.start_up_form?.country_code}
            </span>
            <input
              type="tel"
              placeholder={
                hero?.start_up_form?.input_label || "Enter your mobile number"
              }
              value={phoneNumber}
              onChange={handleChange}
              required
              className="flex-1 h-full px-2 md:px-4 text-base outline-none text-black "
            />
            <Link
              href={hero?.start_up_form?.start_up_form_btn?.link || "#"}
              passHref
            >
              {/* submit btn for mobile */}
              <button
                type="submit"
                disabled={!isValid}
                className={`block md:hidden h-[36px] md:h-[48px] w-[36px] lg:w-[146px] mr-2 rounded-[10px] transition ${
                  isValid
                    ? "bg-black hover:bg-gray-800 text-white cursor-pointer"
                    : "bg-gray-400 text-white cursor-not-allowed"
                }`}
              >
                →
              </button>

              {/* submit btn for Desktop */}
              <button
                type="button"
                disabled={!isValid}
                className={`hidden md:block h-[38px] md:h-[40px] lg:h-[48px] w-[120px] lg:w-[126px] mr-2 rounded-[10px] transition ${
                  isValid
                    ? "bg-black hover:bg-gray-800 text-white cursor-pointer"
                    : "bg-gray-400 text-white cursor-not-allowed"
                }`}
              >
                {hero?.start_up_form?.start_up_form_btn?.title || "Get Started"}
              </button>
            </Link>
          </div>
        </form>

        {/* Small Note */}
        <div
          className="text-[10px] font-[400] text-gray-600 mt-3 lg:mt-4 max-w-sm text-left"
          dangerouslySetInnerHTML={{
            __html: hero?.start_up_form?.start_up_disclaimer || "",
          }}
        />

        {/* Download Links */}
        <div className="mt-4 lg:mt-6 text-left flex flex-wrap gap-2 items-center ">
          <img
            src={
              hero?.download_btn?.btn_icon?.data?.attributes?.url ||
              "/placeholder.png"
            }
            alt="Download Icon"
            className="w-3 h-3"
          />
          <div
            className="text-black text-sm"
            dangerouslySetInnerHTML={{
              __html: hero?.download_btn?.btn_text || "",
            }}
          />

          {/* <a href="#" className="underline text-black hover:text-gray-800 mr-2">
            {hero?.download_btn?.btn_text}
          </a>
          <a href="#" className="underline text-black hover:text-gray-800">
            Android
          </a> */}
        </div>
      </div>

      {/* RIGHT - Mobile Image */}
      <div
        className="flex-1 flex items-center justify-center relative z-10 mt-2 md:mt-10 lg:mt-2 lg:mr-35 md:mb-[20px]"
        ref={mobileRef}
      >
        <Image
          src={
            hero?.conatiner_floating_image_desktop?.data?.attributes?.url ||
            "/mobile.png"
          }
          alt="Mobile Display"
          width={200}
          height={200}
          className="drop-shadow-2xl w-[250px] xl:h-[600px] xl:w-[400px]"
        />
      </div>

      {/* BOTTOM - Info Bar */}
      <div
        // ref={scrollRef}
        className="text-black absolute bottom-0 w-full h-[50px] lg:h-[56px] bg-[#CFE66F] flex md:justify-evenly items-center overflow-x-auto whitespace-nowrap z-20 px-4 text-[16px] font-[700] uppercase"
      >
        {merits_field.map((item, index) => (
          <React.Fragment key={index}>
            <span className="mr-4">{item.merits_text}</span>
            {index !== merits_field.length - 1 && (
              <span className="mx-2">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
