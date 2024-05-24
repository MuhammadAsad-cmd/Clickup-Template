"use client";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const IntegrationPageHeroSection1 = ({ handleSearchChange, searchTerm }) => {
  return (
    <>
      <div className="container relative mx-auto max-w-[1200px]">
        <div className="px-1 pb-[290px] lg:px-[10px] lg:pb-[400px]">
          <h1 className="mx-auto mt-[50px] flex max-w-[660px] items-center justify-center text-center text-[40px] font-black leading-[50px] text-white lg:text-[50px] lg:leading-[69px]">
            Connect over 1,000+ tools to ClickUp for free.
          </h1>
          <p className="mx-auto mt-2 w-full max-w-[700px] text-center text-lg font-normal leading-8 text-white">
            Welcome to the future of productivity, where useful features and
            integrations are shipped to you weekly.
          </p>
        </div>
        <div className="absolute bottom-[-15px] left-0 right-0 flex items-center justify-center">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search integrations"
              className="InputShadow flex h-[47px] w-[230px] items-center justify-center rounded-3xl bg-white pl-9 outline-none"
            />
            <div className="absolute left-3 top-[14px]">
              <IoMdSearch className="text-xl font-semibold text-[#E0E0E0]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntegrationPageHeroSection1;
