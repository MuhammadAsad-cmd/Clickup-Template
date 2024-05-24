"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiGrid41, CiMobile1, CiPlay1 } from "react-icons/ci";
import { LuPuzzle } from "react-icons/lu";
import { MdOutlineChat } from "react-icons/md";
import Features from "./Features";
import Products from "./Products";
import Integration from "./Integration";

const Productdropdown = () => {
  const [selectedTeam, setSelectedTeam] = useState("Capabilities");

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
  };

  useEffect(() => {
    // Disable scrolling when the dropdown is open
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling when the dropdown is closed
      document.body.style.overflow = "auto";
    };
  }, [selectedTeam]);

  return (
    <>
      {/* Dropdown menu */}
      <div className="container mx-auto">
        <div
          id="dropdownHover"
          className={`container fixed inset-x-0 left-5 right-0 top-20 z-40 mx-auto  w-full max-w-[1160px] rounded-2xl border border-[rgba(206,206,234)] bg-white`}
        >
          <div className="flex w-full">
            <div className="flex w-full max-w-[215px] flex-col gap-3 pl-5 pt-5">
              <ul className="space-y-2">
                <li
                  onClick={() => handleTeamClick("Capabilities")}
                  className={`flex max-w-[195px] items-center ${
                    selectedTeam === "Capabilities"
                      ? "bg-[rgba(241,241,249)] text-[rgba(36,34,62)]"
                      : "text-[rgba(81,75,129)] hover:bg-[rgba(241,241,249)] hover:text-[rgba(36,34,62)]"
                  } cursor-pointer justify-between rounded-lg px-3 py-2 duration-300 ease-in-out`}
                >
                  <div className="flex items-center gap-3">
                    <AiOutlineThunderbolt className="text-xl" />
                    <h1 className="text-sm font-extrabold leading-5 ">
                      Capabilities
                    </h1>
                  </div>
                  <FaAngleRight />
                </li>
                <li
                  onClick={() => handleTeamClick("All features")}
                  className={`flex max-w-[195px] items-center ${
                    selectedTeam === "All features"
                      ? "bg-[rgba(241,241,249)] text-[rgba(36,34,62)]"
                      : "text-[rgba(81,75,129)] hover:bg-[rgba(241,241,249)] hover:text-[rgba(36,34,62)]"
                  } cursor-pointer justify-between rounded-lg px-3 py-2 duration-300 ease-in-out `}
                >
                  <div className="flex items-center gap-3">
                    <CiGrid41 className=" text-xl" />
                    <h1 className="text-sm font-extrabold leading-5 ">
                      All features
                    </h1>
                  </div>
                  <FaAngleRight />
                </li>
                <li
                  onClick={() => handleTeamClick("Integrations")}
                  className={`flex max-w-[195px] items-center ${
                    selectedTeam === "Integrations"
                      ? "bg-[rgba(241,241,249)] text-[rgba(36,34,62)]"
                      : "text-[rgba(81,75,129)] hover:bg-[rgba(241,241,249)] hover:text-[rgba(36,34,62)]"
                  } cursor-pointer justify-between rounded-lg px-3 py-2 duration-300 ease-in-out`}
                >
                  <div className="flex items-center gap-3">
                    <LuPuzzle className="text-lg" />
                    <h1 className="text-sm font-extrabold leading-5 ">
                      Integrations
                    </h1>
                  </div>
                  <FaAngleRight />
                </li>
              </ul>
            </div>
            {selectedTeam && selectedTeam === "Capabilities" && <Products />}
            {selectedTeam && selectedTeam === "All features" && <Features />}
            {selectedTeam && selectedTeam === "Integrations" && <Integration />}
          </div>
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
    </>
  );
};

export default Productdropdown;
