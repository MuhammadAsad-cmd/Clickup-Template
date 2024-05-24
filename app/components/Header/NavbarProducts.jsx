"use client";
import React, { useEffect, useState } from "react";
import { BiPieChartAlt2 } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import {
  FaFolderOpen,
  FaRegClipboard,
  FaRegFolderOpen,
  FaUsersViewfinder,
} from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { HiOutlineInbox, HiOutlineRefresh } from "react-icons/hi";
import { IoMdAlarm } from "react-icons/io";
import {
  MdAutoFixHigh,
  MdChevronLeft,
  MdOutlineChat,
  MdOutlineTimeline,
} from "react-icons/md";
import { PiLinkSimple } from "react-icons/pi";
import {
  RiCheckboxMultipleLine,
  RiDropdownList,
  RiRoadMapLine,
} from "react-icons/ri";
import { SlDocs } from "react-icons/sl";
import { TbInputCheck, TbLayoutCards } from "react-icons/tb";
import { TfiFlagAlt } from "react-icons/tfi";
import { TiClipboard } from "react-icons/ti";
import { VscDashboard } from "react-icons/vsc";

const NavbarProducts = ({ handleCloseProducts, showProduct }) => {
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
      <div className="z-30">
        <button
          onClick={handleCloseProducts}
          className={`${scrolling ? "sticky bg-white" : "bg-white"}
            top-0 z-50 flex min-h-12 w-full cursor-pointer items-center gap-[10px]
          border-b border-[#CECEEA] py-2 pl-6 pr-3`}
        >
          <MdChevronLeft className="text-xl" />
          <p>Back</p>
        </button>
        <div
          className={`flex max-h-full flex-col gap-5 overflow-auto px-6 pb-7 pt-5`}
        >
          <ul className="space-y-3">
            <h2 className="text-sm font-extrabold leading-6 text-[#24223E]">
              Project Management
            </h2>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <RiCheckboxMultipleLine className="text-lg" />
              <span>Tasks</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <FaRegFolderOpen className="text-lg" />
              <span>Portfolios</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <TiClipboard className="text-lg" />
              <span>Board views</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <MdOutlineTimeline className="text-lg" />
              <span>Gantt charts</span>
            </li>
          </ul>
          <ul className="space-y-3">
            <h2 className="text-sm font-extrabold leading-6 text-[#24223E]">
              Product Development
            </h2>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <HiOutlineRefresh className="text-lg" />
              <span>Sprints</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <BiPieChartAlt2 className="text-lg" />
              <span>Sprint Reports</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <TbLayoutCards className="text-lg" />
              <span>Kanban</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <RiRoadMapLine className="text-lg" />
              <span>Roadmap & Backlog</span>
            </li>
          </ul>
          <ul className="space-y-3">
            <h2 className="text-sm font-extrabold leading-6 text-[#24223E]">
              Knowledge Management
            </h2>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <SlDocs className="text-lg" />
              <span>Docs</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <PiLinkSimple className="text-lg" />
              <span>Wikis</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <BsStars className="text-lg" />
              <span>Ask AI</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <FiSearch className="text-lg" />
              <span>Universal search</span>
            </li>
          </ul>
          <ul className="space-y-3">
            <h2 className="text-sm font-extrabold leading-6 text-[#24223E]">
              Resource Management
            </h2>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <IoMdAlarm className="text-lg" />
              <span>Time tracking</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <FaUsersViewfinder className="text-lg" />
              <span>Workload views</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <TfiFlagAlt className="text-lg" />
              <span>Goals</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <VscDashboard className="text-lg" />
              <span> Dashboards</span>
            </li>
          </ul>
          <ul className="space-y-3">
            <h2 className="text-sm font-extrabold leading-6 text-[#24223E]">
              Collaboration
            </h2>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <SlDocs className="text-lg" />
              <span>Docs</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <FaFolderOpen className="text-lg" />
              <span>Whiteboards</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <MdOutlineChat className="text-lg" />
              <span>Chat</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <HiOutlineInbox className="text-lg" />
              <span>Inbox</span>
            </li>
          </ul>
          <ul className="space-y-3">
            <h2 className="text-sm font-extrabold leading-6 text-[#24223E]">
              Workflows
            </h2>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <MdAutoFixHigh className="text-lg" />
              <span>Automations</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <FaRegClipboard className="text-lg" />
              <span>Forms</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <TbInputCheck className="text-lg" />
              <span>Custom fields</span>
            </li>
            <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
              <RiDropdownList className="text-lg" />
              <span> Custom statuses</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarProducts;
