import { gsap } from "gsap";
import React, { useRef, useEffect } from "react";
export default function QrBox() {

  const sectionRef = useRef(null);
    // GSAP for Animation
    useEffect(() => {
      gsap.from(sectionRef.current, {
        x: 200,
        opacity: 0,
        duration: 2,
        delay: 2,
        ease: "power4.out",
      });
    }, []);

  return (
    <div ref={sectionRef} className="fixed bottom-[23px] right-[23px] bg-black rounded-xl p-3 flex items-center gap-3 shadow-lg z-50 w-[177px] h-[95px] ">
      {/* Text */}
      <div className="text-white text-sm font-semibold leading-5">
        <span className="font-light">Download</span>
        <br />
        Arihant
        <br />
        Plus App
        <br />
        <span className="font-light">4.8 ⭐</span>
      </div>
      {/* QR Code Image */}
      <img
        src="/Qr.png"
        alt="Download QR"
        className="w-[67px] h-[67px]  object-contain"
      />
    </div>
  );
}
