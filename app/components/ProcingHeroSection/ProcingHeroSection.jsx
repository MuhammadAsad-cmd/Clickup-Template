"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProcingHeroReviewsLogo from "./ProcingHeroReviewsLogo";
import YearlyPricing from "./YearlyPricing";
import YearlyPricingsm from "./YearlyPricingsm";
import MonthlyPricing from "./MonthlyPricing";

const ProcingHeroSection = () => {
  const [activeTab, setActiveTab] = useState("Yearly");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="container mx-auto flex max-w-[790px] items-center justify-center gap-6 pt-[150px]">
        <h2 className="whitespace-pre-wrap text-center text-[50px] font-black leading-[60px] tracking-tight text-[#24223E]">
          The best work solution, for the best price.
        </h2>
      </div>

      <div className="container mx-auto mt-20 w-full max-w-[1080px] overflow-x-auto">
        <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
          <div className="flex items-center justify-center gap-[7px]">
            <Image
              width={97}
              height={20}
              unoptimized
              src="/images/stars.png"
              alt="star"
            />
            <button className="text-xs font-medium text-[#7f76b3]">
              25,000+ reviews from
            </button>
            <ProcingHeroReviewsLogo />
          </div>
          <div className="BorderRounded flex h-[40px] w-[143px] items-center justify-center gap-1 rounded-2xl border border-[#CECEEA] bg-[rgba(255,255,255)] px-1">
            {["Yearly", "Monthly"].map((tab) => (
              <div
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={` ${activeTab === tab ? "bg-[#f1f1f9] text-[#24223e]" : "text-[#7f76b3]"} flex h-[30px] w-full cursor-pointer items-center justify-center rounded-lg text-sm font-medium`}
              >
                <p>{tab}</p>
              </div>
            ))}
          </div>
        </div>

        {activeTab === "Yearly" && (
          <>
            <YearlyPricing />
            <YearlyPricingsm />
          </>
        )}
        {activeTab === "Monthly" && <MonthlyPricing />}
      </div>
    </>
  );
};

export default ProcingHeroSection;
