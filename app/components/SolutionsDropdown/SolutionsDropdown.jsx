"use client";
import React, { useEffect, useRef, useState } from "react";
import { BsBuildings } from "react-icons/bs";
import { CiMobile1, CiPlay1 } from "react-icons/ci";
import { FaAngleRight, FaUsers } from "react-icons/fa6";
import { MdOutlineChat } from "react-icons/md";
import Team from "./Team";
import Company from "./Company";

const SolutionsDropdown = () => {
  const [selectedTeam, setSelectedTeam] = useState("Team");

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
      <div
        id="dropdownHover"
        className={`container fixed inset-x-0 left-5 right-0 top-20 z-40 mx-auto  w-full max-w-[1160px] rounded-2xl border border-[rgba(206,206,234)] bg-white`}
      >
        <div className="flex p-5">
          <div className="min-w-[215px]">
            <ul className="space-y-2">
              <li
                onClick={() => handleTeamClick("Team")}
                className={`flex max-w-[195px] items-center ${
                  selectedTeam === "Team"
                    ? "bg-[rgba(241,241,249)] text-[rgba(36,34,62)]"
                    : "text-[rgba(81,75,129)] hover:bg-[rgba(241,241,249)] hover:text-[rgba(36,34,62)]"
                } cursor-pointer justify-between  rounded-lg px-3 py-2 duration-300 ease-in-out `}
              >
                <div className="flex items-center gap-3">
                  <FaUsers className="text-xl" />
                  <h1 className="text-sm font-extrabold leading-5 ">Team</h1>
                </div>
                <FaAngleRight />
              </li>
              <li
                onClick={() => handleTeamClick("Company")}
                className={`flex max-w-[195px] items-center ${
                  selectedTeam === "Company"
                    ? "bg-[rgba(241,241,249)] text-[rgba(36,34,62)]"
                    : "text-[rgba(81,75,129)] hover:bg-[rgba(241,241,249)] hover:text-[rgba(36,34,62)]"
                } cursor-pointer justify-between rounded-lg  px-3 py-2 duration-300 ease-in-out `}
              >
                <div className="flex items-center gap-3">
                  <BsBuildings className=" text-xl" />
                  <h1 className="text-sm font-extrabold leading-5 ">
                    Company type
                  </h1>
                </div>
                <FaAngleRight />
              </li>
            </ul>
          </div>
          {selectedTeam && selectedTeam === "Team" && <Team />}
          {selectedTeam && selectedTeam === "Company" && <Company />}
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
    </>
  );
};

export default SolutionsDropdown;
