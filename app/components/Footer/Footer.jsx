import React from "react";
import { LuCalendarClock } from "react-icons/lu";
import { TfiBolt } from "react-icons/tfi";
import { CiLock } from "react-icons/ci";
import { AiOutlineDashboard } from "react-icons/ai";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="mt-14 border-y  border-[#ceceea]  lg:mt-[120px]">
        <div className="container mx-auto flex  max-w-[1160px] flex-wrap items-center  sm:justify-center ">
          <div className="flex items-center gap-[10px] py-[17px] pl-5">
            <a className="" href="/">
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
                    <stop stopColor="#8930FD"></stop>
                    <stop offset="1" stopColor="#49CCF9"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_4543_90712"
                    x1="0.906738"
                    y1="9.43201"
                    x2="23.1342"
                    y2="9.43201"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF02F0"></stop>
                    <stop offset="1" stopColor="#FFC800"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <p className="text-sm font-extrabold leading-5 text-[#0c1947]">
              One app to replace them all
            </p>
          </div>
          <div className="Support hidden cursor-pointer items-center justify-center gap-2 px-[38px] py-[17px] text-sm font-medium leading-5 text-[#292D34] sm:flex">
            <LuCalendarClock className="text-base" />
            <p className="hover:underline"> 24/7 support</p>
          </div>
          <div className="Support hidden cursor-pointer items-center justify-center gap-2 px-[38px]  py-[17px] text-sm font-medium leading-5 text-[#292D34] sm:flex">
            <TfiBolt className="text-base" />
            <p className="hover:underline"> Weekly updates</p>
          </div>
          <div className="Support hidden cursor-pointer items-center justify-center gap-2 px-[38px] py-[17px] text-sm font-medium leading-5 text-[#292D34] sm:flex">
            <CiLock className="text-base" />
            <p className="hover:underline"> Secure and compliant</p>
          </div>
          <div className="Support hidden cursor-pointer items-center justify-center gap-2 px-[38px] py-[17px] text-sm font-medium leading-5 text-[#292D34] sm:flex">
            <AiOutlineDashboard className="text-base" />
            <p className="hover:underline"> 99.9% uptime</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8f8fc]">
        <div className="container mx-auto max-w-[1160px] ">
          <div className="grid grid-cols-2 gap-y-8 px-5 py-9 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:px-14">
            <div className="flex flex-col">
              <h1 className="pl-[10px] text-[13px] font-black text-[#0c1947]">
                ClickUp
              </h1>
              <ul className="space-y-1">
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Download
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  About Us
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Careers
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Customers
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Community
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Affiliate & Referrals
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Reviews
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Press
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Brand
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Product Roadmap
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Status
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="pl-[10px] text-[13px] font-black text-[#0c1947]">
                Resources
              </h1>
              <ul className="space-y-1">
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Help Docs
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  On-Demand Demo
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  ClickUp University
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Webinars
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Events
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Templates
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Import
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  API
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Consultants
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Partners
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Contact Us
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="pl-[10px] text-[13px] font-black text-[#0c1947]">
                Features
              </h1>
              <ul className="space-y-1">
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Gantt Chart
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Dashboards
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Native Time Tracking
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Mind Maps
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Automations
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Notepad
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Integrations
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Email
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  To-Do List
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Kanban Board
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Sprints
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="pl-[10px] text-[13px] font-black text-[#0c1947]">
                Compare
              </h1>
              <ul className="space-y-1">
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  vs Monday
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  vs Asana
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  vs Jira
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  vs Trello
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  vs Airtable
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  vs Notion
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  vs Basecamp
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  vs Wrike
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  vs MS Project
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  vs Todoist
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  vs Smartsheet
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="pl-[10px] text-[13px] font-black text-[#0c1947]">
                Learn
              </h1>
              <ul className="space-y-1">
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Blog
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Software Team Hub
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  Agency Hub
                </li>

                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-[13px] font-medium text-[rgb(81,75,129)] hover:bg-[rgb(255,255,255)] hover:text-[#292D34]">
                  vs Smartsheet
                </li>
                <div className="mt-9">
                  <h2 className="pl-[10px] text-[13px] font-black text-[#0c1947]">
                    Connect
                  </h2>
                  <div className="mt-3 flex items-center gap-2 pl-[10px]">
                    <a
                      data-testid="cu-link"
                      rel="noopener noreferrer"
                      target="_blank"
                      data-segment-button-clicked="LinkedIn"
                      href="https://www.linkedin.com/company/12949663"
                    >
                      <svg
                        width="26"
                        height="26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Follow ClickUp on LinkedIn"
                      >
                        <rect
                          x="0.2"
                          y="0.061"
                          width="25"
                          height="25"
                          rx="5.714"
                          fill="var(--color-icon, #0D1530)"
                        ></rect>
                        <path
                          d="M8.699 9.88H5.68a.242.242 0 0 0-.243.242v9.696c0 .133.109.242.243.242h3.018a.242.242 0 0 0 .242-.242v-9.696a.242.242 0 0 0-.24-.242zM7.192 5.06A1.993 1.993 0 0 0 5.2 7.05c0 1.097.893 1.99 1.992 1.99 1.097 0 1.99-.893 1.99-1.99s-.893-1.99-1.99-1.99zm9.184 4.58c-1.212 0-2.108.52-2.652 1.113v-.63a.242.242 0 0 0-.242-.242h-2.89a.242.242 0 0 0-.243.242v9.695c0 .134.108.243.242.243h3.012a.242.242 0 0 0 .242-.243v-4.797c0-1.616.44-2.246 1.566-2.246 1.227 0 1.325 1.01 1.325 2.33v4.713c0 .134.108.243.242.243h3.013a.242.242 0 0 0 .242-.243V14.5c0-2.403-.458-4.86-3.857-4.86z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/clickupprojectmanagement/">
                      <svg
                        width="26"
                        height="26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Follow ClickUp on Facebook"
                      >
                        <rect
                          x="0.2"
                          y="0.061"
                          width="25"
                          height="25"
                          rx="5.714"
                          fill="var(--color-icon, #0D1530)"
                        ></rect>
                        <path
                          d="M10.854 13.527H8.939c-.309 0-.406-.112-.406-.394v-2.271c0-.3.116-.395.406-.395h1.915V8.815c0-.75.135-1.464.522-2.121.406-.676.986-1.127 1.72-1.39a4.418 4.418 0 0 1 1.49-.243h1.894c.27 0 .387.112.387.375v2.14c0 .263-.116.376-.387.376-.522 0-1.044 0-1.566.018-.522 0-.793.244-.793.77-.02.563 0 1.108 0 1.69h2.243c.31 0 .425.112.425.413v2.271c0 .3-.096.395-.425.395h-2.243v6.12c0 .319-.096.431-.444.431H11.26c-.29 0-.406-.112-.406-.394v-6.139z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </a>
                    <a
                      data-testid="cu-link"
                      rel="noopener noreferrer"
                      target="_blank"
                      data-segment-button-clicked="Instagram"
                      href="https://www.instagram.com/clickup/"
                    >
                      <svg
                        width="26"
                        height="26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Follow ClickUp on Instagram"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.854.14c-2.3-.108-7.997-.103-10.299 0C5.533.233 3.748.721 2.31 2.16.158 4.313.178 7.134.206 11.107c.003.467.007.95.007 1.45 0 .467-.003.919-.005 1.356C.185 18.019.17 20.81 2.31 22.95c2.155 2.155 5.006 2.133 8.935 2.104.47-.003.957-.007 1.46-.007h.067c4.764 0 6.42 0 8.114-.656 2.316-.9 4.064-2.969 4.235-6.687.108-2.3.102-7.996 0-10.298-.206-4.389-2.562-7.05-7.267-7.267zm3.774 5.873a1.786 1.786 0 1 1-3.571 0 1.786 1.786 0 0 1 3.571 0zM12.7 17.322a4.762 4.762 0 1 0 0-9.524 4.762 4.762 0 0 0 0 9.524z"
                          fill="var(--color-icon, #0D1530)"
                        ></path>
                      </svg>
                    </a>
                    <a
                      data-testid="cu-link"
                      rel="noopener noreferrer"
                      target="_blank"
                      data-segment-button-clicked="Twitter"
                      href="https://twitter.com/clickup"
                    >
                      <svg
                        width="26"
                        height="26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Follow ClickUp on Twitter"
                      >
                        <rect
                          x="0.2"
                          y="0.06"
                          width="25"
                          height="25"
                          rx="5.714"
                          fill="var(--color-icon, #0D1530)"
                        ></rect>
                        <path
                          d="m14.132 11.411 5.587-6.351h-1.324l-4.852 5.515L9.67 5.06H5.2l5.86 8.34-5.86 6.66h1.325l5.123-5.824 4.092 5.824h4.469l-6.079-8.65zm-1.814 2.062-.594-.83-4.723-6.609h2.033l3.812 5.333.594.83 4.955 6.932h-2.033l-4.044-5.656z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#ceceea] px-9 py-[30px]">
          <div className="container mx-auto max-w-[1160px]">
            <div className="flex flex-col items-center justify-between gap-y-3 md:flex-row">
              <div className="grid grid-cols-2 items-center gap-2 lg:grid-cols-4 ">
                <Image
                  width={124}
                  height={43}
                  unoptimized
                  src="/images/app-store-badge-black.svg"
                  alt="app store"
                />
                <Image
                  width={124}
                  height={43}
                  unoptimized
                  src="/images/google-play-badge-black.svg"
                  alt="app store"
                />
                <Image
                  width={124}
                  height={43}
                  unoptimized
                  src="/images/app-store-mac-badge-black.svg"
                  alt="app store"
                  className="hidden md:block"
                />
                <Image
                  width={124}
                  height={43}
                  unoptimized
                  src="/images/app-store-microsoft-badge-black.svg"
                  alt="app store"
                  className="hidden md:block"
                />
              </div>
              <div className="flex items-center justify-center gap-[10px] text-xs text-[rgba(81,75,129)]">
                <span className="">© 2024 ClickUp</span>
                <p className="cursor-pointer hover:text-[rgba(36,34,62)]">
                  Security
                </p>
                <p className="cursor-pointer hover:text-[rgba(36,34,62)]">
                  Privacy
                </p>
                <p className="cursor-pointer hover:text-[rgba(36,34,62)]">
                  Terms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
