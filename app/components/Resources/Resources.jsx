"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { CiMobile1, CiPlay1 } from "react-icons/ci";
import { FaRegFolderOpen } from "react-icons/fa6";
import { MdOutlineChat, MdOutlineTimeline } from "react-icons/md";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { TiClipboard } from "react-icons/ti";

const Resources = () => {
  useEffect(() => {
    // Disable scrolling when the dropdown is open
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling when the dropdown is closed
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {/* Dropdown menu */}

      <div className="container mx-auto">
        <div
          id="dropdownHover"
          className={`container fixed inset-x-0 left-5 right-0 top-20 z-40 mx-auto  w-full max-w-[1160px] rounded-2xl border border-[rgba(206,206,234)] bg-white`}
        >
          <div className="flex justify-between ">
            <div className="p-5">
              <div className="flex gap-1 pl-3">
                <p className="text-sm font-extrabold leading-6 text-[#24223E]">
                  Learn
                </p>
                <button className="h-[22px] w-9 rounded-md bg-[#21C828] px-[5px] py-1 text-xs font-medium leading-4 text-white">
                  Free
                </button>
              </div>
              <ul className="mt-3">
                <li className="flex h-8 cursor-pointer gap-3 rounded-md py-2 pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <RiCheckboxMultipleLine className="text-lg" />
                  <span>University</span>
                </li>
                <li className="flex h-8 cursor-pointer gap-3 rounded-md py-2 pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <FaRegFolderOpen className="text-lg" />
                  <span>Demos</span>
                </li>
                <li className="flex h-8 cursor-pointer gap-3 rounded-md py-2 pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <TiClipboard className="text-lg" />
                  <span>Video tutorials</span>
                </li>
                <li className="flex h-8 cursor-pointer gap-3 rounded-md py-2 pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <MdOutlineTimeline className="text-lg" />
                  <span>Webinars</span>
                </li>
              </ul>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-1">
                <p className="text-sm font-extrabold leading-6 text-[#24223E]">
                  Discover
                </p>
              </div>
              <ul className="mt-3">
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <RiCheckboxMultipleLine className="text-lg" />
                  <span>Blog </span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <FaRegFolderOpen className="text-lg" />
                  <span>Customer stories</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <TiClipboard className="text-lg" />
                  <span>Virtual Summits</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <MdOutlineTimeline className="text-lg" />
                  <span>Productivity quiz</span>
                </li>
              </ul>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-1">
                <p className="text-sm font-extrabold leading-6 text-[#24223E]">
                  Services
                </p>
              </div>
              <ul className="mt-3">
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <RiCheckboxMultipleLine className="text-lg" />
                  <span>Partner services</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <FaRegFolderOpen className="text-lg" />
                  <span>Professional services</span>
                </li>
              </ul>
            </div>
            <div className="LearnDropdown min-w-[348px] border-l border-dashed border-[#ceceea] p-5">
              <div className="flex items-center gap-1">
                <p className="pl-2 text-sm font-extrabold leading-6 text-[#24223E]">
                  Customer Stories
                </p>
              </div>
              <div>
                <div className="mt-5 flex items-start gap-5">
                  <Image
                    width={49}
                    height={49}
                    unoptimized
                    src="/images/cartoon-network.png"
                    alt="cartoon"
                    className="rounded-lg border border-[#ceceea]"
                  />
                  <div>
                    <Image
                      width={56}
                      height={36}
                      unoptimized
                      src="/images/Cartoon.webp"
                      alt="cartoon"
                    />
                    <div className="mt-[9px]">
                      <p className="max-w-[238px] text-sm font-normal italic leading-5 text-[#514b81]">
                        “ClickUp is our one source of truth for all the details
                        we need – It helps us work faster”
                      </p>
                    </div>
                  </div>
                </div>
                <button className="mt-6 flex w-full items-center justify-center rounded-xl bg-[#F8F8FC] p-3 hover:text-[#24223E]">
                  see more
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" grid grid-cols-5 gap-5"></div>
            <div className="flex items-center justify-end border-t border-[#ceceea] p-[10px]">
              <ul className="flex items-center gap-3">
                <li className="flex h-9 items-center gap-3 rounded-xl px-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <MdOutlineChat className="text-lg" />
                  <span>Contact Sales</span>
                </li>
                <li className="flex h-9 items-center gap-3 rounded-xl px-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <CiPlay1 className="text-lg" />
                  <span>Watch Demo</span>
                </li>
                <li className="flex h-9 items-center gap-3 rounded-xl px-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <CiMobile1 className="text-lg" />
                  <span>Download Apps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
