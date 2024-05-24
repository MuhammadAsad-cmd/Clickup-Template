import React from "react";
import Image from "next/image";

const IntegationFooter = () => {
  return (
    <>
      <div className="bg-[#f8f8fc]">
        <div className="container mx-auto max-w-[1200px] ">
          <div className="mx-5 grid grid-cols-2 gap-y-8 py-9 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div className="flex flex-col">
              <h1 className="pl-[10px] text-sm font-bold uppercase leading-10 text-[#292d34]">
                ClickUp
              </h1>
              <ul className="space-y-1">
                <li className="w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Download
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  About Us
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Careers
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Customers
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Community
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Affiliate & Referrals
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Reviews
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Press
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Brand
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Product Roadmap
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Status
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="pl-[10px] text-sm font-bold uppercase leading-10 text-[#292d34]">
                Resources
              </h1>
              <ul className="space-y-1">
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Help Docs
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  On-Demand Demo
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  ClickUp University
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Webinars
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Events
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Templates
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Import
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  API
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Consultants
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Partners
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Contact Us
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="pl-[10px] text-sm font-bold uppercase leading-10 text-[#292d34]">
                Features
              </h1>
              <ul className="space-y-1">
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Gantt Chart
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Dashboards
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Native Time Tracking
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Mind Maps
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Automations
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Notepad
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Integrations
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Email
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  To-Do List
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Kanban Board
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Sprints
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="pl-[10px] text-sm font-bold uppercase leading-10 text-[#292d34]">
                Compare
              </h1>
              <ul className="space-y-1">
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  vs Monday
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  vs Asana
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  vs Jira
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  vs Trello
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  vs Airtable
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  vs Notion
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  vs Basecamp
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  vs Wrike
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  vs MS Project
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  vs Todoist
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  vs Smartsheet
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="pl-[10px] text-sm font-bold uppercase leading-10 text-[#292d34]">
                Learn
              </h1>
              <ul className="space-y-1">
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Blog
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Software Team Hub
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Agency Hub
                </li>

                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  PM Software Guide
                </li>
                <li className=" w-full cursor-pointer rounded-lg p-[9px] text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Newsletter
                </li>
                <li className="w-full cursor-pointer rounded-lg p-[9px] pb-10 text-sm leading-5 text-[#292D34] hover:text-[#7b68ee]">
                  Podcast
                </li>
                <div className="max-w-[160px] border-t pt-10">
                  <Image
                    width={150}
                    height={43}
                    unoptimized
                    src="/images/app-store-badge.svg"
                    alt="app store"
                    className="cursor-pointer"
                  />
                  <Image
                    width={150}
                    height={43}
                    unoptimized
                    src="/images/google-play-badge.png"
                    alt="app store"
                    className="mt-4 cursor-pointer"
                  />
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#ceceea] px-9 py-[30px]">
          <div className="container mx-auto max-w-[1160px]">
            <div className="flex flex-col items-center justify-between gap-y-3 md:flex-row">
              <div className="">
                <div className="mb-2">
                  <Image
                    width={155}
                    height={38}
                    unoptimized
                    src="/images/logo-v3-clickup-light.svg"
                    alt="logo"
                  />
                </div>
                <div className="flex items-center justify-center gap-[10px] text-xs text-[#7c828d]">
                  <span className="">© 2024 ClickUp | </span>
                  <p className="cursor-pointer hover:text-[rgba(36,34,62)]">
                    Security |
                  </p>
                  <p className="cursor-pointer hover:text-[rgba(36,34,62)]">
                    Privacy |
                  </p>
                  <p className="cursor-pointer hover:text-[rgba(36,34,62)]">
                    Terms
                  </p>
                </div>
              </div>

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
          </div>
        </div>
      </div>
    </>
  );
};

export default IntegationFooter;
