"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ProductIntegrationDropdwon from "../IntegrationDropdowns/ProductIntegrationDropdwon";
import IntegrationPageHeroSection1 from "../IntegrationPageHeroSection/IntegrationPageHeroSection1";
import IntegrationNavbar from "../IntegrationHeader/IntegrationNavbar";
import SolutionIntegrationDropdown from "../IntegrationDropdowns/SolutionIntegrationDropdown";
import LearnIntegrationDropdown from "../IntegrationDropdowns/LearnIntegrationDropdown";
import ContactSalesPopup from "./ContactSalesPopup";

const IntegrationPage = ({ handleSearchChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isLearnOpen, setIslearnOpen] = useState(false);

  return (
    <>
      <div className="Integrationsbackground">
        <div
          className={`${isDropdownOpen || isSolutionOpen || isLearnOpen ? " border-b bg-white text-black" : ""}`}
        >
          <div className="container mx-auto hidden max-w-[1160px] lg:block">
            <div className="flex h-[100px] items-center justify-between px-5">
              <div className="flex items-center">
                <div className="mr-9">
                  <Link href="/">
                    {isDropdownOpen || isSolutionOpen || isLearnOpen ? (
                      <Image
                        width={155}
                        height={38}
                        unoptimized
                        src="/images/logo-v3-clickup-light.svg"
                        alt="logo"
                      />
                    ) : (
                      <Image
                        width={155}
                        height={38}
                        unoptimized
                        src="/images/ClickUplogo.svg"
                        alt="logo"
                      />
                    )}
                  </Link>
                </div>
                <div
                  className={`flex h-[46px] cursor-pointer items-center justify-center gap-1 px-[5px] ${isDropdownOpen || isSolutionOpen || isLearnOpen ? "text-[#292D34]" : "text-white"}`}
                >
                  <ProductIntegrationDropdwon
                    isOpen={isDropdownOpen}
                    setIsOpen={setIsDropdownOpen}
                    isSolutionOpen={isSolutionOpen}
                    isLearnOpen={isLearnOpen}
                  />
                  <SolutionIntegrationDropdown
                    isOpen={isSolutionOpen}
                    setIsOpen={setIsSolutionOpen}
                    isDropdownOpen={isDropdownOpen}
                    isLearnOpen={isLearnOpen}
                  />
                  <LearnIntegrationDropdown
                    isOpen={isLearnOpen}
                    setIsOpen={setIslearnOpen}
                    isDropdownOpen={isDropdownOpen}
                    isSolutionOpen={isSolutionOpen}
                  />
                  <Link href="/pages/pricing">
                    <div
                      className={`hidden h-[30px] items-center justify-center rounded-lg px-3 font-medium  hover:bg-white hover:bg-opacity-10 xl:flex`}
                    >
                      <p className="text-sm leading-6">Pricing</p>
                    </div>
                  </Link>
                  <Link href="/pages/enterprise">
                    <div
                      className={`hidden h-[30px] items-center justify-center rounded-lg px-3 font-medium  hover:bg-white hover:bg-opacity-10 xl:flex`}
                    >
                      <p className="text-sm leading-6">Enterprise</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-[10px] ">
                <ContactSalesPopup
                  isDropdownOpen={isDropdownOpen}
                  isSolutionOpen={isSolutionOpen}
                  isLearnOpen={isLearnOpen}
                />

                <Link href="/signup">
                  <div className="flex h-10 w-[87px] cursor-pointer items-center justify-center rounded-lg bg-[#7b68ee] font-medium text-white">
                    <p>Sign Up</p>
                  </div>
                </Link>
                <Link href="/login">
                  <div
                    className={`flex h-10 w-[77px] cursor-pointer items-center justify-center rounded-lg ${isDropdownOpen || isSolutionOpen || isLearnOpen ? "bg-[#e9ebf0]" : "bg-white"} font-medium text-[#292D34]`}
                  >
                    <p>Log in</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <IntegrationNavbar />
        </div>

        <IntegrationPageHeroSection1 handleSearchChange={handleSearchChange} />
      </div>
    </>
  );
};

export default IntegrationPage;
