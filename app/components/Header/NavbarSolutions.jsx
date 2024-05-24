"use client";
import React, { useEffect, useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { FaUsers } from "react-icons/fa6";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";
import { LuSquareDashedBottomCode } from "react-icons/lu";
import { MdChevronLeft } from "react-icons/md";
import { PiCalculatorLight } from "react-icons/pi";
import { TbLayoutCards } from "react-icons/tb";

const NavbarSolutions = ({ handleCloseSolutions }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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
      <button
        onClick={handleCloseSolutions}
        className={`${scrolling ? "sticky bg-white" : "bg-white"}
            top-0 z-50 flex min-h-12 w-full cursor-pointer items-center gap-[10px]
          border-b border-[#CECEEA] py-2 pl-6 pr-3`}
      >
        <MdChevronLeft className="text-xl" />
        <p>Back</p>
      </button>
      <div className="flex h-full max-h-fit flex-col gap-5 overflow-y-auto bg-white px-6 pb-7 pt-5">
        <div className="CuMobileNavigation h-[83px] w-full cursor-pointer rounded-[9px] p-5 ">
          <div className="flex items-center gap-2">
            <CgMenuMotion className="text-lg" />
            <h2 className="text-sm font-extrabold text-[#24223E]">
              {" "}
              Project management
            </h2>
          </div>
          <p className="mt-3 text-sm leading-5 text-[#514B81]">
            Empower teams to achieve goals with efficient, clear project
            planning.
          </p>
        </div>
        <div className="CuMobileNavigation h-[83px] w-full cursor-pointer rounded-[9px] p-5 ">
          <div className="flex items-center gap-2">
            <TbLayoutCards className="text-lg" />
            <h2 className="text-sm font-extrabold text-[#24223E]">
              {" "}
              Product development
            </h2>
          </div>
          <p className="mt-3 text-sm leading-5 text-[#514B81]">
            Accelerate innovation for faster, effective team-led product
            launches.
          </p>
        </div>
        <div className="CuMobileNavigation h-[83px] w-full cursor-pointer rounded-[9px] p-5 ">
          <div className="flex items-center gap-2">
            <HiOutlineViewGridAdd className="text-lg" />
            <h2 className="text-sm font-extrabold text-[#24223E]">
              {" "}
              Operations
            </h2>
          </div>
          <p className="mt-3 text-sm leading-5 text-[#514B81]">
            Optimize workflows for increased team productivity and efficiency.
          </p>
        </div>
        <div className="CuMobileNavigation h-[83px] w-full cursor-pointer rounded-[9px] p-5 ">
          <div className="flex items-center gap-2">
            <LuSquareDashedBottomCode className="text-lg" />
            <h2 className="text-sm font-extrabold text-[#24223E]"> IT</h2>
          </div>
          <p className="mt-3 text-sm leading-5 text-[#514B81]">
            Improve IT operations with solutions fostering teamwork and
            efficiency.
          </p>
        </div>
        <div className="CuMobileNavigation h-[83px] w-full cursor-pointer rounded-[9px] p-5 ">
          <div className="flex items-center gap-2">
            <IoIosSend className="text-lg" />
            <h2 className="text-sm font-extrabold text-[#24223E]">Marketing</h2>
          </div>
          <p className="mt-3 text-sm leading-5 text-[#514B81]">
            Drive marketing outcomes through collaborative strategy and
            teamwork.
          </p>
        </div>
        <div className="CuMobileNavigation h-[83px] w-full cursor-pointer rounded-[9px] p-5 ">
          <div className="flex items-center gap-2">
            <FaUsers className="text-lg" />
            <h2 className="text-sm font-extrabold text-[#24223E]">
              Human resources
            </h2>
          </div>
          <p className="mt-3 text-sm leading-5 text-[#514B81]">
            Enhance team engagement and efficiency with streamlined processes.
          </p>
        </div>
        <div className="CuMobileNavigation h-[83px] w-full cursor-pointer rounded-[9px] p-5 ">
          <div className="flex items-center gap-2">
            <PiCalculatorLight className="text-lg" />
            <h2 className="text-sm font-extrabold text-[#24223E]">Sales</h2>
          </div>
          <p className="mt-3 text-sm leading-5 text-[#514B81]">
            Mazimize sales with tools enhancing team efficiency and insight.
          </p>
        </div>

        <button className="mt-6 flex items-center justify-center rounded-xl bg-[#F8F8FC] p-3 text-[#24223E]">
          See all solutions
        </button>
      </div>
    </>
  );
};

export default NavbarSolutions;
