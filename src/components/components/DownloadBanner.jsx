"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DownloadBanner = ({ data, cursorRef }) => {
  const bannerRef = useRef(null);
  const phoneRef = useRef(null);
  const textLinesRef = useRef([]);
  const scrollLogosRef = useRef(null);

    // GSAP for Animation
  useEffect(() => {
    if (bannerRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      // Mobile Phone Animation
      tl.from(phoneRef.current, {
        y: 150,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Text Lines Animation
      tl.from(
        textLinesRef.current,
        {
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5" // Start while mobile is still animating
      );
    }

    // Logos scroll animation
    gsap.to(scrollLogosRef.current, {
      x: "-50%",
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  const awards = data?.section_eight?.awards || [];
  const banner = data?.section_eight || [];
  const bgdesktop = banner?.section_bg_image_desktop?.data?.attributes?.url ;

  return (
    <section
      ref={bannerRef}
      className="flex flex-col items-center bg-white px-4 py-[50px] overflow-hidden relative max-w-[1440px] mx-auto"
    >
      {/* Banner */}
      <div className="w-full lg:max-w-[1161px] rounded-3xl flex flex-col-reverse md:flex-row items-center md:items-stretch overflow-hidden relative px-0" style={{ backgroundImage: `url(${bgdesktop})` }}>
        {/* Phone Image */}
        <div className="flex-shrink-0 lg:pl-[77px] pt-[40px] md:pt-0  lg:pt-[73px] flex md:items-end">
          <img
            ref={phoneRef}
            src={banner?.section_frame_image_desktop?.data?.attributes?.url || "/DownloadBannerMobile.png"}
            alt="App Preview"
            className="h-[500px] md:w-[300px] lg:w-[500px]  object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 px-8  lg:pl-[30px] md:pr-8 flex flex-col justify-between text-white">
          {/* Top Heading and Store Buttons */}
          <div>
            <h2 className="text-[32px] pt-8 lg:pt-[152px] md:text-[42px] font-bold leading-tight">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    banner?.section_title ||
                    "<p>Your financial journey starts here.</p>",
                }}
              />

              
            </h2>

            {/* Store Buttons */}
            <div
              ref={(el) => (textLinesRef.current[2] = el)}
              className="flex items-center gap-6 mt-8"
            >
              {banner?.downloads_cta?.map((cta, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        cta?.image?.data?.attributes?.url || "/placeholder.png"
                      }
                      alt={cta?.image?.title || "Store"}
                      className="w-[30px]"
                    />
                    <div  className="flex flex-col items-start">
                      <span className="text-xs font-medium">
                        {cta?.title || "N/Asdfsdgfsdfg"}
                      </span>
                      <span className="text-md font-medium">
                        {cta?.sub_text || "N/A"}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm mt-1">
                    <span className="text-sm font-medium">
                      {cta?.star_rating_count || "N/A"}
                    </span>
                    {cta?.image?.star_rating_count || "⭐⭐⭐⭐⭐"}
                  </div>
                </div>
              ))}
              {/* <div className="flex flex-col items-center">
                <img
                  src={awards?.downloads_cta?.[0]?.image?.data?.attributes?.url || "/google-play.png"}
                  alt="Google Play"
                  className="w-[120px]"
                />
                <div className="flex items-center gap-1 text-sm mt-1">
                  <span>4.8</span>
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/app-store.png"
                  alt="App Store"
                  className="w-[120px]"
                />
                <div className="flex items-center gap-1 text-sm mt-1">
                  <span>4.6</span>
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Play Video */}
          <div
            ref={(el) => (textLinesRef.current[3] = el)}
            className="text-sm text-white mb-[85px] hidden md:block "
          >
            {banner?.sub_text || "Watch the video"}
            <a
              href="#"
              className="text-[#30BB54] underline underline-offset-4 ml-2"
            >
              Play Video ↗
            </a>
          </div>
        </div>
      </div>

      {/* Scrollable Bottom Logos */}

      <div className="mt-[20px] md:mt-[100px] h-[140px] w-full overflow-hidden relative">
        <div
          ref={scrollLogosRef}
          className="flex items-center gap-[24px] sm:gap-[40px] min-w-[1800px] px-4"
        >
          {[...Array(2)].flatMap((_, i) =>
            awards.map((award, index) => (
              <div
                key={`${award.title}-${i}-${index}`}
                className="shrink-0 w-[260px] h-[140px] flex flex-col items-center justify-center text-center gap-4"
                onMouseEnter={() => {
                  if (cursorRef.current) {
                    cursorRef.current.innerHTML = award.title || "No title";
                    gsap.to(cursorRef.current, {
                      width: "auto",
                      height: "auto",
                      padding: "8px 12px",
                      fontSize: "12px",
                      duration: 0,
                      delay: 0,
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
                <img
                  src={award.award_logo.url || "/placeholder.png"}
                  alt={award.title || "Award"}
                  className="text-gray-300 h-[35px] object-contain mb-1"
                />
                <p className="text-[14px] text-black font-[300] leading-tight px-2">
                  {award.award_description || "No description"}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default DownloadBanner;
