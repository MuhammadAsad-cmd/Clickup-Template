"use client";
import React, { useState, useEffect } from "react";

function ScrollingBackground({ children, imageUrl }) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bounding = wrapperRef.current.getBoundingClientRect();
      if (
        bounding.top >= 0 &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        // Element is within viewport
        setIsInView(true);
      } else {
        // Element is out of viewport
        setIsInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const wrapperRef = React.createRef();

  return (
    <div
      ref={wrapperRef}
      className={`CuHomeCallout_wrapper ${isInView ? "scrolling" : ""}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </div>
  );
}

export default ScrollingBackground;
