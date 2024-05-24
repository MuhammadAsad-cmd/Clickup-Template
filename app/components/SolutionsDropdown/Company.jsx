import React from "react";
import { CgMenuMotion } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { PiBuildingsDuotone } from "react-icons/pi";
import { RiDraftLine, RiShoppingBagLine } from "react-icons/ri";

const Company = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-5 px-5">
        <div className="group cursor-pointer rounded-[9px] border border-[#ceceea] p-5 hover:border hover:border-[#9412FA]">
          <div className="flex items-center gap-2 group-hover:text-[#9412FA]">
            <PiBuildingsDuotone className="text-lg" />
            <h2 className="text-sm font-extrabold">Enterprise</h2>
          </div>
          <p className="mt-3 text-xs leading-5 text-[#514B81]">
            Strategic project planning for enterprise success.
          </p>
        </div>
        <div className="group cursor-pointer rounded-[9px] border border-[#ceceea] p-5 hover:border hover:border-[#9412FA]">
          <div className="flex items-center gap-2 group-hover:text-[#9412FA]">
            <FiUsers className="text-lg" />
            <h2 className="text-sm font-extrabold">Startup</h2>
          </div>
          <p className="mt-3 text-xs leading-5 text-[#514B81]">
            Innovative tools for fast-paced startup growth.
          </p>
        </div>
        <div className="group cursor-pointer rounded-[9px] border border-[#ceceea] p-5 hover:border hover:border-[#9412FA]">
          <div className="flex items-center gap-2 group-hover:text-[#9412FA]">
            <FaRegHeart className="text-lg" />
            <h2 className="text-sm font-extrabold">Non-profit</h2>
          </div>
          <p className="mt-3 text-xs leading-5 text-[#514B81]">
            Tools for impactful non-profit management.
          </p>
        </div>
        <div className="group cursor-pointer rounded-[9px] border border-[#ceceea] p-5 hover:border hover:border-[#9412FA]">
          <div className="flex items-center gap-2 group-hover:text-[#9412FA]">
            <RiDraftLine className="text-lg" />
            <h2 className="text-sm font-extrabold">Education</h2>
          </div>
          <p className="mt-3 text-xs leading-5 text-[#514B81]">
            Streamlined workflows for educational productivity.
          </p>
        </div>
        <div className="group cursor-pointer rounded-[9px] border border-[#ceceea] p-5 hover:border hover:border-[#9412FA]">
          <div className="flex items-center gap-2 group-hover:text-[#9412FA]">
            <RiShoppingBagLine className="text-lg" />
            <h2 className="text-sm font-extrabold">Agency</h2>
          </div>
          <p className="mt-3 text-xs leading-5 text-[#514B81]">
            Collaborative solutions for agency efficiency.
          </p>
        </div>
      </div>
    </>
  );
};

export default Company;
