import { IoMdAlarm } from "react-icons/io";
import { TiClipboard } from "react-icons/ti";
import {
  FaFolderOpen,
  FaRegClipboard,
  FaRegFolderOpen,
  FaUsersViewfinder,
} from "react-icons/fa6";
import {
  RiCheckboxMultipleLine,
  RiDropdownList,
  RiRoadMapLine,
} from "react-icons/ri";
import {
  MdAutoFixHigh,
  MdOutlineChat,
  MdOutlineTimeline,
} from "react-icons/md";
import { TfiFlagAlt } from "react-icons/tfi";
import { VscDashboard } from "react-icons/vsc";
import { HiOutlineInbox, HiOutlineRefresh } from "react-icons/hi";
import { BiPieChartAlt2 } from "react-icons/bi";
import { TbInputCheck, TbLayoutCards } from "react-icons/tb";
import { SlDocs } from "react-icons/sl";
import { PiLinkSimple } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <>
      <div className="ml-2 flex w-full justify-between">
        <div className="w-full max-w-[646px]">
          <div className="flex justify-between">
            <div className="w-full py-5">
              <div className="">
                <p className="text-sm font-extrabold leading-6 text-[#24223E]">
                  Project Management
                </p>
                <ul className="mt-3">
                  <Link href="/features/tasks">
                    <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                      <RiCheckboxMultipleLine className="text-lg" />

                      <span>Tasks</span>
                    </li>
                  </Link>
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
              </div>
              <div className="mt-[30px]">
                <p className="text-sm font-extrabold leading-6 text-[#24223E]">
                  Resource Management
                </p>
                <ul className="mt-3">
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
              </div>
            </div>
            <div className="w-full py-5">
              <div>
                <p className="text-sm font-extrabold leading-6 text-[#24223E]">
                  Product Development
                </p>
                <ul className="mt-3">
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
              </div>
              <div className="mt-[30px]">
                <p className="text-sm font-extrabold leading-6 text-[#24223E]">
                  Collaboration
                </p>
                <ul className="mt-3">
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
              </div>
            </div>
            <div className="w-full py-5">
              <div>
                <p className="text-sm font-extrabold leading-6 text-[#24223E]">
                  Knowledge Management
                </p>
                <ul className="mt-3">
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
              </div>
              <div className="mt-[30px]">
                <p className="text-sm font-extrabold leading-6 text-[#24223E]">
                  Workflows
                </p>
                <ul className="mt-3">
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
          </div>
        </div>
        <div className="CliclUp w-full max-w-[215px] border-l border-dashed border-[#ceceea] p-5">
          <div className="flex flex-col">
            <p className="font-extrabold leading-5 text-[#24223E]">
              Powered by
            </p>
            <Image
              width={131}
              height={40}
              unoptimized
              src="/images/logo-v3-clickup-brain-light.svg"
              alt="click"
            />
          </div>
          <div className="flex flex-col justify-between">
            <ul className="mt-5 space-y-2">
              <li className="flex items-center gap-1">
                <Image
                  width={17}
                  height={17}
                  unoptimized
                  src="/images/download (2).svg"
                />
                <p>Generate standup</p>
              </li>
              <li className="flex items-center gap-1">
                <Image
                  width={17}
                  height={17}
                  unoptimized
                  src="/images/download (2).svg"
                />
                <p>Summarise tasks </p>
              </li>
              <li className="flex items-center gap-1">
                <Image
                  width={17}
                  height={17}
                  unoptimized
                  src="/images/download (2).svg"
                />
                <p>Generate plans</p>
              </li>
              <li className="flex items-center gap-1">
                <Image
                  width={17}
                  height={17}
                  unoptimized
                  src="/images/download (2).svg"
                />
                <p>Enhance writing</p>
              </li>
              <li className="flex items-center gap-1">
                <Image
                  width={17}
                  height={17}
                  unoptimized
                  src="/images/download (2).svg"
                />
                <p> Create reports</p>
              </li>
            </ul>
            <button className="mt-7 flex h-[42px] w-full max-w-[174px] items-center justify-center rounded-xl bg-[#F8F8FC]  text-center hover:text-[#24223E]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
