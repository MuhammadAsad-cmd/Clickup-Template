"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import RightSidebar from "./RightSidebar";

const IntegrationNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showProduct, setShowProducts] = useState(false);
  const [SolutionProduct, setSolutionProduct] = useState(false);
  const [LearnProduct, setlearnProduct] = useState(false);
  const popupRef = useRef(null);

  const toggleSolutions = () => {
    setSolutionProduct(!SolutionProduct);
    setShowProducts(false);
    setlearnProduct(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setShowProducts(false);
    setSolutionProduct(false);
    setlearnProduct(false);
  };

  const toggleProducts = () => {
    setShowProducts(!showProduct);
    setSolutionProduct(false);
    setlearnProduct(false);
  };

  const toggleLearn = () => {
    setlearnProduct(!LearnProduct);
    setShowProducts(false);
    setSolutionProduct(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Add click outside event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Check initial width
    handleResize();

    // Disable scrolling when the sidebar is open
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  return (
    <>
      <div className={`block px-5 pt-5 lg:hidden`}>
        <div className={`flex items-center justify-between`}>
          <div className="">
            <Link href="/">
              <Image
                width={155}
                height={38}
                unoptimized
                src="/images/ClickUplogo.svg"
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/signup">
              <div className="flex h-10 w-[80px] cursor-pointer items-center justify-center rounded-lg bg-[#7b68ee] font-medium text-white">
                <p>Sign Up</p>
              </div>
            </Link>
            <Link href="/login">
              <div
                className={`flex h-10 w-[71px] cursor-pointer items-center justify-center rounded-lg bg-white  font-medium text-[#292D34]`}
              >
                <p>Log in</p>
              </div>
            </Link>
            <div
              onClick={toggleSidebar}
              className="flex h-9 cursor-pointer items-center justify-center rounded-lg px-3"
            >
              <CgMenuRight className="text-4xl text-[#fff]" />
            </div>
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Right Sidebar */}
      <RightSidebar
        ref={popupRef}
        isOpen={sidebarOpen}
        handleClose={toggleSidebar}
        toggleProducts={toggleProducts}
        showProduct={showProduct}
        toggleSolutions={toggleSolutions}
        SolutionProduct={SolutionProduct}
        LearnProduct={LearnProduct}
        toggleLearn={toggleLearn}
      />
    </>
  );
};

export default IntegrationNavbar;
