"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdChevronLeft } from "react-icons/md";

const Integrations = ({ handleCloseIntegrations }) => {
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
        onClick={handleCloseIntegrations}
        className={`${scrolling ? "sticky bg-white" : "bg-white"}
            top-0 z-50 flex min-h-12 w-full cursor-pointer items-center gap-[10px]
          border-b border-[#CECEEA] py-2 pl-6 pr-3`}
      >
        <MdChevronLeft className="text-xl" />
        <p>Back</p>
      </button>
      <div className="flex h-full max-h-fit flex-col gap-5 overflow-y-auto bg-white px-6 pb-7 pt-5">
        <ul className="mt-3 space-y-2">
          <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md px-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
            <svg
              width="13"
              height="16"
              viewBox="0 0 24 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.400879 21.5702L4.68168 18.2715C6.95602 21.2574 9.3724 22.6336 12.0621 22.6336C14.7373 22.6336 17.0854 21.2736 19.2573 18.3113L23.5992 21.5304C20.4654 25.8022 16.5712 28.0592 12.0621 28.0592C7.56731 28.0592 3.6353 25.8167 0.400879 21.5702Z"
                fill="url(#paint0_linear_4543_90712)"
              ></path>
              <path
                d="M12.0483 7.2358L4.42882 13.8405L0.906738 9.73157L12.0645 0.0595703L23.1342 9.7388L19.5959 13.8333L12.0483 7.2358Z"
                fill="url(#paint1_linear_4543_90712)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_4543_90712"
                  x1="0.400879"
                  y1="24.9281"
                  x2="23.5992"
                  y2="24.9281"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#8930FD"></stop>
                  <stop offset="1" stop-color="#49CCF9"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_4543_90712"
                  x1="0.906738"
                  y1="9.43201"
                  x2="23.1342"
                  y2="9.43201"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF02F0"></stop>
                  <stop offset="1" stop-color="#FFC800"></stop>
                </linearGradient>
              </defs>
            </svg>

            <span className="text-sm leading-5 text-[#24223E]">
              ClickUp API
            </span>
          </li>
          <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md px-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
            <Image
              width={32}
              height={32}
              unoptimized
              src="/images/slack-removebg-preview.png"
              alt="sales"
            />
            <span className="text-sm leading-5 text-[#24223E]">Slack</span>
          </li>
          <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md px-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
            <Image
              width={17}
              height={17}
              unoptimized
              src="/images/jira.png"
              alt="sales"
            />
            <span>Jira</span>
          </li>
          <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md px-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
            <Image
              width={20}
              height={20}
              unoptimized
              src="/images/salesforce.png"
              alt="sales"
            />
            <span className="text-sm leading-5 text-[#24223E]">Salesforce</span>
          </li>
          <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md px-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
            <Image
              width={20}
              height={20}
              unoptimized
              src="/images/google.png"
              alt="sales"
            />
            <span className="text-sm leading-5 text-[#24223E]">Gsuite</span>
          </li>
          <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
            <Image
              width={20}
              height={20}
              unoptimized
              src="/images/figma.png"
              alt="sales"
            />
            <span>Figma</span>
          </li>
          <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md px-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
            <Image
              width={17}
              height={17}
              unoptimized
              src="/images/dropbox.png"
              alt="sales"
            />
            <span className="text-sm leading-5 text-[#24223E]">Dropbox</span>
          </li>
          <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
            <Image
              width={17}
              height={17}
              unoptimized
              src="/images/GitHub_.png"
              alt="sales"
            />
            <span>Github</span>
          </li>
          <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md px-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
            <Image
              width={17}
              height={17}
              unoptimized
              src="/images/hubspot.webp"
              alt="sales"
            />
            <span className="text-sm leading-5 text-[#24223E]">hubsport</span>
          </li>
          <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md px-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
            <Image
              width={17}
              height={17}
              unoptimized
              src="/images/zendesk.webp"
              alt="sales"
            />
            <span className="text-sm leading-5 text-[#24223E]">Zendesk</span>
          </li>
        </ul>
        <button className="mt-6 flex items-center justify-center rounded-xl bg-[#F8F8FC] p-3 text-[#24223E]">
          See all integrations
        </button>
      </div>
    </>
  );
};

export default Integrations;
