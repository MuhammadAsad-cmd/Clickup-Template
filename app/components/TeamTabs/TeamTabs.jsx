import Image from "next/image";
import React from "react";
import TickSvg from "./TickSvg";
import PMOIcon from "../SvgsIcons/PMOIcon";
import MarketingIcon from "../SvgsIcons/MarketingIcon";
import EngineeringIcon from "../SvgsIcons/EngineeringIcon";
import AgenciesIcon from "../SvgsIcons/AgenciesIcon";
import ProductIcons from "../SvgsIcons/ProductIcons";

const TeamTabs = () => {
  return (
    <>
      <div className="flex w-full flex-row gap-5 overflow-x-auto lg:hidden">
        <div className="CUHomeTeamTabs mb-[35px] h-full min-w-[280px] rounded-xl border border-[#ceceea] px-6 py-8">
          <div className="mb-5 flex items-center gap-[13px]">
            <PMOIcon />
            <p className="text-[23px] font-extrabold leading-8 text-[#24223e]">
              PMO
            </p>
          </div>
          <p className="text-sm font-bold leading-5 text-[#24223e]">
            Deliver projects on time, every time
          </p>

          <ul className="mt-5">
            <li className="flex flex-shrink-0 items-center gap-2">
              <TickSvg />
              Reduce delivery time with custom templates
            </li>
            <li className="mt-2 flex flex-shrink-0 items-center gap-2">
              <TickSvg />
              Track effort to impact with OKR planning
            </li>
            <li className="mt-2 flex flex-shrink-0 items-center gap-2">
              <TickSvg />
              Manage complex projects at scale
            </li>
          </ul>

          <button className="Solutions mt-9">
            Use this Solution
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
            >
              <path
                d="M14 5.5L0.999999 5.5M14 5.5L9.16279 1M14 5.5L9.16279 10"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <Image
              width={72}
              height={80}
              unoptimized
              src="/images/download (1).svg"
              alt="free"
              className="absolute -top-7 right-4"
            />
          </button>
        </div>
        <div className="CUHomeTeamTabs mb-[35px] min-w-[280px] rounded-xl border border-[#ceceea] px-6 py-8">
          <div className="mb-5 flex items-center gap-[13px]">
            <MarketingIcon />
            <p className="text-[23px] font-extrabold leading-8 text-[#24223e]">
              Marketing
            </p>
          </div>
          <p className="text-sm font-bold leading-5 text-[#24223e]">
            Deliver projects on time, every time
          </p>

          <ul className="mt-5">
            <li className="flex flex-shrink-0 items-center gap-2">
              <TickSvg />
              Reduce delivery time with custom templates
            </li>
            <li className="mt-2 flex flex-shrink-0 items-center gap-2">
              <TickSvg />
              Track effort to impact with OKR planning
            </li>
            <li className="mt-2 flex flex-shrink-0 items-center gap-2">
              <TickSvg />
              Manage complex projects at scale
            </li>
          </ul>

          <button className="Solutions mt-9">
            Use this Solution
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
            >
              <path
                d="M14 5.5L0.999999 5.5M14 5.5L9.16279 1M14 5.5L9.16279 10"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <Image
              width={72}
              height={80}
              unoptimized
              src="/images/download (1).svg"
              alt="free"
              className="absolute -top-7 right-4"
            />
          </button>
        </div>
        <div className="CUHomeTeamTabs mb-[35px] min-w-[280px] rounded-xl border border-[#ceceea] px-6 py-8">
          <div className="mb-5 flex items-center gap-[13px]">
            <ProductIcons />
            <p className="text-[23px] font-extrabold leading-8 text-[#24223e]">
              Product
            </p>
          </div>
          <p className="text-sm font-bold leading-5 text-[#24223e]">
            Deliver projects on time, every time
          </p>

          <ul className="mt-5">
            <li className="flex flex-shrink-0 items-center gap-2">
              <TickSvg />
              Reduce delivery time with custom templates
            </li>
            <li className="mt-2 flex flex-shrink-0 items-center gap-2">
              <TickSvg />
              Track effort to impact with OKR planning
            </li>
            <li className="mt-2 flex flex-shrink-0 items-center gap-2">
              <TickSvg />
              Manage complex projects at scale
            </li>
          </ul>

          <button className="Solutions mt-9">
            Use this Solution
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
            >
              <path
                d="M14 5.5L0.999999 5.5M14 5.5L9.16279 1M14 5.5L9.16279 10"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <Image
              width={72}
              height={80}
              unoptimized
              src="/images/download (1).svg"
              alt="free"
              className="absolute -top-7 right-4"
            />
          </button>
        </div>
        <div className="CUHomeTeamTabs mb-[35px] min-w-[280px] rounded-xl border border-[#ceceea] px-6 py-8">
          <div className="mb-5 flex items-center gap-[13px]">
            <EngineeringIcon />
            <p className="text-[23px] font-extrabold leading-8 text-[#24223e]">
              Engineering
            </p>
          </div>
          <p className="text-sm font-bold leading-5 text-[#24223e]">
            Deliver projects on time, every time
          </p>

          <ul className="mt-5">
            <li className="flex flex-shrink-0 items-center gap-2">
              <TickSvg />
              Reduce delivery time with custom templates
            </li>
            <li className="mt-2 flex flex-shrink-0 items-center gap-2">
              <TickSvg />
              Track effort to impact with OKR planning
            </li>
            <li className="mt-2 flex flex-shrink-0 items-center gap-2">
              <TickSvg />
              Manage complex projects at scale
            </li>
          </ul>

          <button className="Solutions mt-9">
            Use this Solution
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
            >
              <path
                d="M14 5.5L0.999999 5.5M14 5.5L9.16279 1M14 5.5L9.16279 10"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <Image
              width={72}
              height={80}
              unoptimized
              src="/images/download (1).svg"
              alt="free"
              className="absolute -top-7 right-4"
            />
          </button>
        </div>
        <div className="CUHomeTeamTabs mb-[35px] min-w-[280px] rounded-xl border border-[#ceceea] px-6 py-8">
          <div className="mb-5 flex items-center gap-[13px]">
            <AgenciesIcon />
            <p className="text-[23px] font-extrabold leading-8 text-[#24223e]">
              Agencies
            </p>
          </div>
          <p className="text-sm font-bold leading-5 text-[#24223e]">
            Deliver projects on time, every time
          </p>

          <ul className="mt-5">
            <li className="flex flex-shrink-0 items-center gap-2">
              <TickSvg />
              Reduce delivery time with custom templates
            </li>
            <li className="mt-2 flex flex-shrink-0 items-center gap-2">
              <TickSvg />
              Track effort to impact with OKR planning
            </li>
            <li className="mt-2 flex flex-shrink-0 items-center gap-2">
              <TickSvg />
              Manage complex projects at scale
            </li>
          </ul>

          <button className="Solutions mt-9">
            Use this Solution
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
            >
              <path
                d="M14 5.5L0.999999 5.5M14 5.5L9.16279 1M14 5.5L9.16279 10"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <Image
              width={72}
              height={80}
              unoptimized
              src="/images/download (1).svg"
              alt="free"
              className="absolute -top-7 right-4"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default TeamTabs;
