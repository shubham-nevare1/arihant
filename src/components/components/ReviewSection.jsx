import { useRef, useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);


export default function ReviewSection({ data }) {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const reviews = data?.section_testimonials || [];

  // Center the card in the viewport
  const centerCard = (index) => {
    const container = scrollContainerRef.current;
    const card = container?.children[index];
    if (container && card) {
      const scrollTo =
        card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
      container.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  // Scroll left functions
  const scrollLeft = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
    centerCard(newIndex);
  };

  // Scroll right function
  const scrollRight = () => {
    const newIndex = Math.min(currentIndex + 1, reviews.length + 1);
    setCurrentIndex(newIndex);
    centerCard(newIndex);
  };


  // GSAP for Animation
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
  
    const totalCards = container.children.length;
  
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % totalCards;
      const targetCard = container.children[nextIndex];
      if (!targetCard) return;
  
      const scrollTo =
        targetCard.offsetLeft -
        container.offsetWidth / 2 +
        targetCard.offsetWidth / 2;
  
      gsap.to(container, {
        scrollTo: { x: scrollTo },
        duration: 3,
        ease: "power2.out",
      });
  
      setCurrentIndex(nextIndex);
    }, 3000);
  
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-20 px-4 md:px-20 bg-white max-w-[1440px] mx-auto">
      <div className="relative flex flex-col items-center w-full">
        {/* Cards Container */}
        <div
          ref={scrollContainerRef}
          className="h-[450px] flex items-end justify-start gap-8 w-full overflow-x-auto flex-nowrap no-scrollbar pb-4 "
        >
          {/* Spacer Before */}
          <div className="flex-shrink-0 w-[700px]"></div>

          {reviews.length > 0 && (
          reviews.map((review, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[360px] min-h-[380px] flex flex-col justify-between rounded-2xl border border-[#DADADA] p-6 shadow-md transition-all duration-300 bg-gradient-to-br from-[#F0D4F8] via-[#FAECFF] to-[#D7A3FF] ${
                index + 1 === currentIndex
                  ? " translate-y-[-40px] border-purple-300"
                  : "opacity-60"
              }`}
            >
              <div
                className="text-black font-[400] text-[16px]"
                dangerouslySetInnerHTML={{
                  __html:
                    review.review_description ||
                    "<p>Your financial journey starts here.</p>",
                }}
              />
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={review.reviewer_image || "/Mask_group.png"}
                  alt={review.reviewer_name}
                  className="w-[45px] h-[45px] rounded-full bg-gray-200"
                />
                <div className="text-left">
                  <h4 className="text-black font-[600] text-[20px]">
                    {review.reviewer_name}
                  </h4>
                  <p className="text-gray-400 font-[400] text-[14px]">
                    {review.reviewer_place}
                  </p>
                </div>
              </div>
            </div>
          )))}

          {/* Spacer After */}
          <div className="flex-shrink-0 w-[500px]"></div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={scrollLeft}
            className="bg-black text-white rounded-[10px] p-3 hover:bg-gray-800 disabled:opacity-50 cursor-pointer"
            disabled={currentIndex <= 1}
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            className="bg-black text-white rounded-[10px] p-3 hover:bg-gray-800 disabled:opacity-50 cursor-pointer"
            disabled={currentIndex >= reviews.length}
          >
            <FaArrowRight size={20} />
          </button>
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
}
