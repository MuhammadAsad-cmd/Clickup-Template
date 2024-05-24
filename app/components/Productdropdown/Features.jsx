import { IoMdAlarm } from "react-icons/io";
import { FaFolderOpen, FaMobileRetro, FaRegEye } from "react-icons/fa6";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { MdAutoFixHigh, MdOutlineEmail } from "react-icons/md";
import { TfiFlagAlt } from "react-icons/tfi";
import { VscDashboard } from "react-icons/vsc";
import { HiOutlineRefresh } from "react-icons/hi";
import { TbInputCheck, TbLayoutCards } from "react-icons/tb";
import { SlCalender, SlDocs } from "react-icons/sl";
import { BsStars } from "react-icons/bs";
import { CgMenuMotion } from "react-icons/cg";
import { GiNotebook } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { GoMilestone } from "react-icons/go";

const Features = () => {
  return (
    <>
      <div className="ml-2 flex w-full justify-between">
        <div className="w-full max-w-[646px]">
          <div className="flex justify-between">
            <div className="w-full pt-2">
              <ul className="mt-3">
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <RiCheckboxMultipleLine className="text-lg" />

                  <span>Tasks</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <SlDocs className="text-lg" />
                  <span>Docs</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <CgMenuMotion className="text-lg" />
                  <span>Ganttt</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <BsStars className="text-lg" />
                  <span>Ai</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <FaRegEye className="text-lg" />
                  <span>Mind Maps</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <TbInputCheck className="text-lg" />
                  <span>Custom feilds</span>
                </li>
              </ul>
            </div>
            <div className="w-full pt-2">
              <ul className="mt-3">
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <FaFolderOpen className="text-lg" />
                  <span>Whiteboards</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <VscDashboard className="text-lg" />
                  <span>Dashboards</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <TfiFlagAlt className="text-lg" />
                  <span>goals</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <GiNotebook className="text-lg" />
                  <span>Proofing</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <MdOutlineEmail className="text-lg" />
                  <span>Email</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <CiHeart className="text-lg" />
                  <span>Pulse</span>
                </li>
              </ul>
            </div>
            <div className="w-full pt-2">
              <ul className="mt-3">
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <MdAutoFixHigh className="text-lg" />
                  <span>Automations</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <SlCalender className="text-lg" />
                  <span>Calender view</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <HiOutlineRefresh className="text-lg" />
                  <span>Sprints</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <GoMilestone className="text-lg" />
                  <span>Milestones</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <IoMdAlarm className="text-lg" />
                  <span>Time tracking</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <FaMobileRetro className="text-lg" />
                  <span>Time estimates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="AllFeatures w-full max-w-[215px] border-l border-dashed border-[#ceceea] p-5">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="font-extrabold leading-5 text-[#24223E]">
                Just released
              </p>
              <ul className="mt-5 space-y-2">
                <li className="flex items-center gap-1">
                  <div className="flex h-[22px] max-w-9 items-center justify-center rounded-md bg-[rgba(33,200,40)] px-[5px] text-xs leading-4 text-white">
                    New
                  </div>
                  <p className="text-sm leading-5 text-[#514B81]">Clips</p>
                </li>
                <li className="flex items-center gap-1">
                  <div className="flex h-[22px] max-w-9 items-center justify-center rounded-md bg-[rgba(33,200,40)] px-[5px] text-xs leading-4 text-white">
                    New
                  </div>
                  <p className="text-sm leading-5 text-[#514B81]">
                    Universal search
                  </p>
                </li>
                <li className="flex items-center gap-1">
                  <div className="flex h-[22px] max-w-9 items-center justify-center rounded-md bg-[rgba(33,200,40)] px-[5px] text-xs leading-4 text-white">
                    New
                  </div>
                  <p className="text-sm leading-5 text-[#514B81]">Mobile 3.0</p>
                </li>
              </ul>
            </div>
            <div className="mt-7 flex h-[42px] w-full max-w-[174px] items-center justify-center rounded-xl bg-[#F8F8FC] text-center hover:text-[#24223E]">
              See changelog
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
