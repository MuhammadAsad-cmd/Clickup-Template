"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiMenu5Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import NavbarProducts from "./NavbarProducts";
import NavbarSolutions from "./NavbarSolutions";
import Integrations from "./Integrations";
import Resources from "./Resources";

const Navbar = () => {
  const [showAddNew, setShowAddNew] = useState(false);
  const [showProduct, setShowProducts] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showIntegration, setshowIntegration] = useState(false);
  const [showResources, setshowResources] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleAddNew = () => {
    setShowAddNew(!showAddNew);
  };

  const toggleProducts = () => {
    setShowProducts(true);
    setShowSolutions(false); // Hide Solutions
  };

  const toggleSolutions = () => {
    setShowProducts(false); // Hide Products
    setShowSolutions(true);
  };

  const toggleIntegrations = () => {
    setshowIntegration(true);
  };

  const toggleResources = () => {
    setshowResources(true);
  };

  const handleClose = () => {
    setShowAddNew(false);
    setShowProducts(false);
    setShowSolutions(false);
    setshowResources(false);
    setshowIntegration(false);
  };

  const handleCloseProducts = () => {
    setShowProducts(false);
  };
  const handleCloseSolutions = () => {
    setShowSolutions(false);
  };
  const handleCloseIntegrations = () => {
    setshowIntegration(false);
  };

  const handleCloseResources = () => {
    setshowResources(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!showAddNew && (
        <div className={`block px-5 pt-5 sm:px-10 lg:hidden`}>
          <div className={`flex items-center justify-between`}>
            <div className="flex h-[46px] w-[124px] cursor-pointer items-center justify-center rounded-[14px] border border-[#CECEEA] bg-[rgba(255,255,255)]">
              <Image
                width={94}
                height={23}
                unoptimized
                src="/images/logo-v3-clickup-light.svg"
                alt="logo"
              />
            </div>
            <div className="flex h-[46px] w-[160px] items-center gap-1 rounded-[14px] border  border-[#CECEEA] bg-[rgba(255,255,255)] px-[5px]">
              <div className="BG-Gradient flex h-9 w-full max-w-[99px] cursor-pointer items-center justify-center rounded-lg px-3 font-medium text-white">
                <p>Sign Up</p>
              </div>
              <div
                onClick={toggleAddNew}
                className="flex h-9 cursor-pointer items-center justify-center rounded-lg px-3  hover:bg-[#F1F1F9]"
              >
                <RiMenu5Line className="text-2xl text-[#24223E]" />
              </div>
            </div>
          </div>
        </div>
      )}

      {showAddNew && (
        <>
          <div
            className={`flex items-center justify-between border-b border-[#CECEEA] pt-5 ${scrolling ? "sticky bg-white" : "bg-white"} px-6 pb-6`}
          >
            <div className="flex h-[46px] w-[215px] items-center gap-1 rounded-[14px] border  border-[#CECEEA] bg-[rgba(255,255,255)] px-[5px]">
              <div className="flex h-9 w-full max-w-[99px] cursor-pointer items-center justify-center rounded-xl px-3 font-medium hover:bg-[#F1F1F9]">
                <p>Log in</p>
              </div>
              <div className="BG-Gradient flex h-9 w-full max-w-[99px] cursor-pointer items-center justify-center rounded-xl px-3 font-medium text-white">
                <p>Sign Up</p>
              </div>
            </div>
            <div
              onClick={handleClose}
              className="flex h-[46px] w-[51px] cursor-pointer items-center justify-center rounded-xl bg-[#F1F1F9]  px-3"
            >
              <RxCross2 className="text-2xl text-[#24223E]" />
            </div>
          </div>
          {!showProduct &&
            !showSolutions &&
            !showIntegration &&
            !showResources && (
              <div className="z-50 mt-[10px] flex h-screen flex-col gap-2 px-6">
                <div
                  onClick={toggleProducts}
                  className="flex cursor-pointer items-center justify-between rounded-lg px-[11px] py-2 hover:bg-[rgba(241,241,249)]"
                >
                  <p className="text-base leading-6 text-[#24223E]">Product</p>
                  <MdOutlineKeyboardArrowRight className="text-xl leading-6" />
                </div>
                <div
                  onClick={toggleSolutions}
                  className="flex cursor-pointer items-center justify-between rounded-lg px-[11px] py-2 hover:bg-[rgba(241,241,249)]"
                >
                  <p className="text-base leading-6 text-[#24223E]">
                    Solutions
                  </p>
                  <MdOutlineKeyboardArrowRight className="text-xl leading-6" />
                </div>
                <div
                  onClick={toggleIntegrations}
                  className="flex cursor-pointer items-center justify-between rounded-lg px-[11px] py-2 hover:bg-[rgba(241,241,249)]"
                >
                  <p className="text-base leading-6 text-[#24223E]">
                    Integrations
                  </p>
                  <MdOutlineKeyboardArrowRight className="text-xl leading-6" />
                </div>
                <div
                  onClick={toggleResources}
                  className="flex cursor-pointer items-center justify-between rounded-lg px-[11px] py-2 hover:bg-[rgba(241,241,249)]"
                >
                  <p className="text-base leading-6 text-[#24223E]">
                    Resources
                  </p>
                  <MdOutlineKeyboardArrowRight className="text-xl leading-6" />
                </div>
                <div className="flex cursor-pointer items-center justify-between rounded-lg px-[11px] py-2 hover:bg-[rgba(241,241,249)]">
                  <p className="text-base leading-6 text-[#24223E]">Procing</p>
                </div>
                <div className="flex cursor-pointer items-center justify-between rounded-lg px-[11px] py-2 hover:bg-[rgba(241,241,249)]">
                  <p className="text-base leading-6 text-[#24223E]">
                    Enterprise
                  </p>
                </div>
                <div className="flex cursor-pointer items-center justify-between rounded-lg px-[11px] py-2 hover:bg-[rgba(241,241,249)]">
                  <p className="text-base leading-6 text-[#24223E]">
                    Contact Sales
                  </p>
                </div>
              </div>
            )}
        </>
      )}

      {showProduct && (
        <NavbarProducts
          handleCloseProducts={handleCloseProducts}
          showProduct={showProduct}
        />
      )}
      {showSolutions && (
        <NavbarSolutions handleCloseSolutions={handleCloseSolutions} />
      )}
      {showIntegration && (
        <Integrations handleCloseIntegrations={handleCloseIntegrations} />
      )}
      {showResources && (
        <Resources handleCloseResources={handleCloseResources} />
      )}
    </>
  );
};

export default Navbar;
