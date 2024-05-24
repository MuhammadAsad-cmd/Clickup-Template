"use client";
import React, { useState } from "react";
import TabContent from "./TabContent";
import { Tabs } from "./Data";

const FeatureOrganize = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="Contextboxfour container mx-auto mt-[50px] max-w-[1300px] rounded-3xl md:rounded-[60px]">
        <div className="flex flex-col-reverse items-center justify-center px-5 text-center sm:flex-col md:p-10 lg:p-20">
          <div>
            <p className="mb-5 text-xs font-bold uppercase leading-6 tracking-wider text-[#00B884]">
              FEATURES
            </p>
            <h2 className="text-4xl font-extrabold leading-[68px] text-[#333333] lg:text-[50px]">
              Organize work your way.
            </h2>
            <p className="mt-7 text-sm leading-6 text-[#292D34] md:mt-[50px]">
              Choose from over 35+ ClickApps to customize your task management
              for any work need.
            </p>
          </div>
          <div className="mb-8 mt-[50px] flex w-full flex-wrap justify-center gap-10">
            {Tabs.map((tab, index) => (
              <button
                key={index}
                type="button"
                className={`inline-block text-center text-base font-bold leading-6 ${activeTab === index ? "border-b-[3px] border-[#7b68ee]" : "border-hover border-transparent"}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-5">
          {" "}
          <TabContent {...Tabs[activeTab]} />
        </div>
      </div>
    </>
  );
};

export default FeatureOrganize;
