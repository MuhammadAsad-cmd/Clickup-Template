"use client";
import React, { useEffect, useState } from "react";
import { FaRegFolderOpen } from "react-icons/fa6";
import { MdChevronLeft, MdOutlineTimeline } from "react-icons/md";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { TiClipboard } from "react-icons/ti";

const Resources = ({ handleCloseResources }) => {
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
        onClick={handleCloseResources}
        className={`${scrolling ? "sticky bg-white" : "bg-white"}
            top-0 z-50 flex min-h-12 w-full cursor-pointer items-center gap-[10px]
          border-b border-[#CECEEA] py-2 pl-6 pr-3`}
      >
        <MdChevronLeft className="text-xl" />
        <p>Back</p>
      </button>
      <div className="flex h-full max-h-fit flex-col  overflow-y-auto bg-white px-6 pb-7 pt-5">
        <div className="mb-3">
          <div className="flex gap-1 px-3">
            <p className="text-sm font-extrabold leading-6 text-[#24223E]">
              Learn
            </p>
            <button className="h-[22px] w-9 rounded-md bg-[#21C828] px-[5px] py-1 text-xs font-medium leading-4 text-white">
              Free
            </button>
          </div>
          <ul className="mt-3 space-y-1">
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <RiCheckboxMultipleLine className="text-lg" />
              <span>University</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <FaRegFolderOpen className="text-lg" />
              <span>Demos</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <TiClipboard className="text-lg" />
              <span>Video tutorials</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <MdOutlineTimeline className="text-lg" />
              <span>Webinars</span>
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <div className="flex items-center gap-1 px-3">
            <p className="text-sm font-extrabold leading-6 text-[#24223E]">
              Discover
            </p>
          </div>
          <ul className="mt-3 space-y-1">
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md px-3 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <RiCheckboxMultipleLine className="text-lg" />
              <span>Blog </span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md px-3 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <FaRegFolderOpen className="text-lg" />
              <span>Customer stories</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md px-3 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <TiClipboard className="text-lg" />
              <span>Virtual Summits</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md px-3 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <MdOutlineTimeline className="text-lg" />
              <span>Productivity quiz</span>
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <div className="flex items-center gap-1 px-3">
            <p className="text-sm font-extrabold leading-6 text-[#24223E]">
              Services
            </p>
          </div>
          <ul className="mt-3 space-y-1">
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md px-3 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <RiCheckboxMultipleLine className="text-lg" />
              <span>Partner services</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md px-3 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <FaRegFolderOpen className="text-lg" />
              <span>Professional services</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resources;
