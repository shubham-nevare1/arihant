"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LearnExpert = ({ data }) => {
  const titleRef = useRef(null);
  const leftCardsRef = useRef([]);
  const rightBlogsRef = useRef([]);

    // GSAP for Animation
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    });

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
    })
      .from(
        leftCardsRef.current,
        {
          y: 80,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
        },
        "-=0.5"
      )
      .from(
        rightBlogsRef.current,
        {
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 0.6,
        },
        "-=0.6"
      );
  }, []);

  const blogs = data?.section_seven_blogs?.featuredBlogs || [];

  const title = data?.section_seven_blogs || [];

  return (
    <section className="px-4 md:px-[60px] lg:px-[100px] xl:px-[140px] py-15 max-w-[1440px] mx-auto">
      {/* Header */}
      <div ref={titleRef} className="flex justify-between items-center mb-6">
        <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold">
          {title?.section_title}
        </h2>
        <a
          href={title?.section_cta?.link}
          className="hidden md:flex text-[16px] md:text-[18px] lg:text-[20px] font-semibold items-center gap-1 hover:underline hover:text-[#007aff]"
        >
          {title?.section_cta?.title} ↗
        </a>
      </div>

      {/* Content */}
      <div className="flex flex-wrap lg:gap-[5%]  justify-between">
        {/* Left Side - Courses */}
        <div className="flex flex-wrap gap-6  lg:gap-8 w-full md:w-[65%]">
          {/* Card 1 */}
          <div
            ref={(el) => (leftCardsRef.current[0] = el)}
            className="bg-gradient-to-br from-[#F0D4F8] via-[#FAECFF] to-[#D7A3FF] rounded-2xl flex flex-col justify-between p-6 md:p-3 lg:p-6
            w-full md:w-[55%]  xl:w-[62%] h-[220px] md:h-[300px] lg:h-[300px]
            hover:shadow-lg shadow-[#D7A3FF]  transition-shadow duration-300 ease-in-out"
          >
            <div>
              <h3 className="text-black text-[24px] font-[600] mb-2">
                Quality Financial Education
              </h3>
              <p className="text-[16px] font-[400] text-gray-600">
                Discover expert-led share market courses, scholarships, and
                real-world placement opportunities
              </p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <img
                src="/youtube.png"
                alt="YouTube"
                className="w-[87px] md:w-[120px] lg:w-[140px] opacity-50"
              />
              <button className="bg-black text-white rounded-[8px] p-2 group cursor-pointer shadow-sm hover:shadow-md transition duration-200 ease-in-out transform hover:scale-105">
                <span className="transform transition-transform duration-200 ease-in-out group-hover:-rotate-45 inline-block">
                  ➔
                </span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => (leftCardsRef.current[1] = el)}
            className="bg-gradient-to-br from-[#CFE66F] via-[#f7ffc2] to-[#CFE66F]  rounded-2xl flex flex-col justify-between p-6 md:p-3 lg:p-6
            w-full md:w-[38%] lg:w-[37%] xl:w-[32%] h-[220px] md:h-[300px] lg:h-[300px]
            hover:shadow-lg shadow-[#CFE66F] transition-shadow duration-300 ease-in-out"
          >
            <div>
              <h3 className="text-black text-[24px] font-[600] mb-2">
                Knowledge Seeker
              </h3>
              <p className="text-[16px] font-[400] text-gray-600">
                Discover courses on business, industry sectors, and India's
                economy
              </p>
            </div>
            <div className="flex justify-end mt-1">
              <button className="bg-black text-white rounded-[8px] p-2 group cursor-pointer shadow-sm hover:shadow-md transition duration-200 ease-in-out transform hover:scale-105">
                <span className="transform transition-transform duration-200 ease-in-out group-hover:-rotate-45 inline-block">
                  ➔
                </span>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => (leftCardsRef.current[2] = el)}
            className="bg-gradient-to-br from-[#CFE66F] via-[#f7ffc2] to-[#CFE66F] rounded-2xl flex flex-col justify-between  p-6 md:p-3 lg:p-6
            w-full md:w-[38%] lg:w-[37%] xl:w-[32%] h-[220px] md:h-[300px] lg:h-[300px]
            hover:shadow-lg shadow-[#CFE66F] transition-shadow duration-300 ease-in-out "
          >
            <div>
              <h3 className="text-black text-[24px] font-[600] mb-2">
                Stock Market Beginner
              </h3>
              <p className="text-[16px] font-[400] text-gray-600">
                Unlock the art of stock investing with fun and simple courses
              </p>
            </div>
            <div className="flex justify-end mt-3">
              <button className="bg-black text-white rounded-[8px] p-2 group cursor-pointer shadow-sm hover:shadow-md transition duration-200 ease-in-out transform hover:scale-105">
                <span className="transform transition-transform duration-200 ease-in-out group-hover:-rotate-45 inline-block">
                  ➔
                </span>
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div
            ref={(el) => (leftCardsRef.current[3] = el)}
            className="bg-gradient-to-br from-[#F0D4F8] via-[#FAECFF] to-[#D7A3FF] rounded-2xl flex flex-col justify-between p-6 md:p-3 lg:p-6
            w-full md:w-[55%]  xl:w-[62%] h-[220px] md:h-[300px] lg:h-[300px]
            hover:shadow-lg shadow-[#D7A3FF] transition-shadow duration-300 ease-in-out"
          >
            <div>
              <h3 className="text-black text-[24px] font-[600] mb-2">
                Stock Market Investor
              </h3>
              <p className="text-[16px] font-[400] text-gray-600">
                Practical courses on building long-term wealth through strong
                stocks
              </p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <img
                src="/aife.png"
                alt="AIFE"
                className="w-[86px] md:w-[120px] lg:w-[140px] opacity-50"
              />

              <button className="bg-black text-white rounded-[8px] p-2 group cursor-pointer shadow-sm hover:shadow-md transition duration-200 ease-in-out transform hover:scale-105">
                <span className="transform transition-transform duration-200 ease-in-out group-hover:-rotate-45 inline-block">
                  ➔
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Blogs */}
        <div
          ref={rightBlogsRef}
          className="flex flex-col gap-8 w-full md:w-[25%] lg:w-[30%] mt-10 md:mt-0"
        >
          {/* Mobile header */}
          <div className="block md:hidden">
            <h2 className="text-[24px] font-bold mb-4">
              Learn from the experts
            </h2>
            <a
              href="#"
              className="text-[16px] font-semibold flex items-center gap-1 hover:underline hover:text-[#007aff]"
            >
              All Blogs ↗
            </a>
          </div>

          {/* blog list */}
          {blogs.length > 0 && (
          blogs.slice(0, 4).map((blog) => (
            <div
              key={blog.id}
              ref={(el) => (rightBlogsRef.current[blog] = el)}
              className="border-b pb-6 "
            >
              <div className="text-[12px] font-[400] text-gray-400 mb-2">
                {blog.time_to_read}
              </div>
              <h4 className="text-[18px] font-[500]  mb-2 hover:text-purple-500">
                {blog.title}
              </h4>
              <span className="text-[12px] border border-purple-400 text-purple-500 px-2 py-0.5 rounded-full hover:text-white hover:bg-purple-500 cursor-pointer">
                Investment
              </span>
            </div>
          ))
        )}
        </div>
      </div>
    </section>
  );
};

export default LearnExpert;
