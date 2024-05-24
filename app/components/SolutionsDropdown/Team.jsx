import React from "react";
import { CgMenuMotion } from "react-icons/cg";
import { FaUsers } from "react-icons/fa6";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";
import { LuSquareDashedBottomCode } from "react-icons/lu";
import { PiCalculatorLight } from "react-icons/pi";
import { TbLayoutCards } from "react-icons/tb";

const Team = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-5 px-5">
        <div className="group cursor-pointer rounded-[9px] border border-[#ceceea] p-5 hover:border hover:border-[#9412FA]">
          <div className="flex items-center gap-2 group-hover:text-[#9412FA]">
            <CgMenuMotion className="text-lg" />
            <h2 className="text-sm font-extrabold"> Project management</h2>
          </div>
          <p className="mt-3 text-xs leading-5 text-[#514B81]">
            Empower teams to achieve goals with efficient, clear project
            planning.
          </p>
        </div>
        <div className="group cursor-pointer rounded-[9px] border border-[#ceceea] p-5 hover:border hover:border-[#9412FA]">
          <div className="flex items-center gap-2 group-hover:text-[#9412FA]">
            <TbLayoutCards className="text-lg" />
            <h2 className="text-sm font-extrabold"> Product development</h2>
          </div>
          <p className="mt-3 text-xs leading-5 text-[#514B81]">
            Accelerate innovation for faster, effective team-led product
            launches.
          </p>
        </div>
        <div className="group cursor-pointer rounded-[9px] border border-[#ceceea] p-5 hover:border hover:border-[#9412FA]">
          <div className="flex items-center gap-2 group-hover:text-[#9412FA]">
            <HiOutlineViewGridAdd className="text-lg" />
            <h2 className="text-sm font-extrabold"> Operations</h2>
          </div>
          <p className="mt-3 text-xs leading-5 text-[#514B81]">
            Optimize workflows for increased team productivity and efficiency.
          </p>
        </div>
        <div className="group cursor-pointer rounded-[9px] border border-[#ceceea] p-5 hover:border hover:border-[#9412FA]">
          <div className="flex items-center gap-2 group-hover:text-[#9412FA]">
            <LuSquareDashedBottomCode className="text-lg" />
            <h2 className="text-sm font-extrabold"> IT</h2>
          </div>
          <p className="mt-3 text-xs leading-5 text-[#514B81]">
            Improve IT operations with solutions fostering teamwork and
            efficiency.
          </p>
        </div>
        <div className="group cursor-pointer rounded-[9px] border border-[#ceceea] p-5 hover:border hover:border-[#9412FA]">
          <div className="flex items-center gap-2 group-hover:text-[#9412FA]">
            <IoIosSend className="text-lg" />
            <h2 className="text-sm font-extrabold">Marketing</h2>
          </div>
          <p className="mt-3 text-xs leading-5 text-[#514B81]">
            Drive marketing outcomes through collaborative strategy and
            teamwork.
          </p>
        </div>
        <div className="groupcursor-pointer rounded-[9px] border border-[#ceceea] p-5 hover:border hover:border-[#9412FA]">
          <div className="flex items-center gap-2 group-hover:text-[#9412FA]">
            <FaUsers className="text-lg" />
            <h2 className="text-sm font-extrabold">Human resources</h2>
          </div>
          <p className="mt-3 text-xs leading-5 text-[#514B81]">
            Enhance team engagement and efficiency with streamlined processes.
          </p>
        </div>
        <div className="group cursor-pointer rounded-[9px] border border-[#ceceea] p-5 hover:border hover:border-[#9412FA]">
          <div className="flex items-center gap-2 group-hover:text-[#9412FA]">
            <PiCalculatorLight className="text-lg" />
            <h2 className="text-sm font-extrabold">Sales</h2>
          </div>
          <p className="mt-3 text-xs leading-5 text-[#514B81]">
            Mazimize sales with tools enhancing team efficiency and insight.
          </p>
        </div>
      </div>
    </>
  );
};

export default Team;
