"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const CalloutCircle = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const wrapper = wrapperRef.current;

      if (wrapper) {
        wrapper.style.backgroundPositionX = `${scrollPosition}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`CuHomeCallout_wrapper scrollBackground mt-24`}
        ref={wrapperRef}
      >
        <div className="relative flex flex-col items-center justify-center">
          <Image
            width={1100}
            height={1100}
            unoptimized
            src="/images/Circle.svg"
            className="h-full max-h-[1100px] w-full max-w-[1100px]"
          />
          <div className="CircleOut absolute flex flex-col items-center justify-center py-[70px] text-center">
            <h2 className="CuTitle_gradientTitle mb-5 max-w-[360px] text-center text-[41px] font-black leading-relaxed">
              Bring teams and work together
            </h2>
            <p className="mb-[26px] text-xl leading-7 text-[#24223E]">
              <strong>
                Eliminate app chaos. Consolidate tools and cut costs.
              </strong>
            </p>
            <button className="CuHomeCallout_contentButton mb-3 flex items-center justify-center text-center text-xl font-bold text-white">
              Get Started
            </button>

            <div className="text-center text-sm font-medium leading-6 text-[#7f76b3]">
              <p>Free forever. No credit card required.</p>
              <p>Join 2+ million teams today!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalloutCircle;
