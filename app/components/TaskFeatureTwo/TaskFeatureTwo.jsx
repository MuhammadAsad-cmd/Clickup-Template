"use client";
import React, { useState } from "react";
import { Feature } from "../FeatureOrganize/Data";
import Image from "next/image";

const TaskFeatureTwo = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="Contextboxfive container mx-auto mt-[50px] max-w-[1300px] rounded-3xl lg:rounded-[60px]">
        <div className="flex flex-col items-center gap-10 px-10 sm:flex-col-reverse lg:flex-row lg:p-20">
          <div className="flex flex-col-reverse sm:flex-col lg:max-w-[400px]">
            <div>
              <div className="mb-[60px] hidden h-[66px] w-[66px] items-center justify-center rounded-[15px] bg-[#FD71AF] text-4xl font-black text-white lg:flex">
                {Feature[activeTab].icon}
              </div>
              <p className="mb-5 pt-5 text-xs font-bold uppercase leading-6 tracking-wider text-[#FD71AF] lg:pt-0">
                {Feature[activeTab].label}
              </p>
              <h2 className="text-4xl font-extrabold leading-[45px] text-[#333333] lg:text-[50px] lg:leading-[68px]">
                {Feature[activeTab].heading}
              </h2>
              <p className="mt-[30px] text-sm leading-6 text-[#292D34]">
                {Feature[activeTab].description}
              </p>
            </div>
            <ol className="mb-5 mt-10 grid w-full grid-cols-3 overflow-x-auto pb-2 sm:grid-cols-2">
              {Feature.map((tab, index) => (
                <li
                  key={index}
                  className="mb-4 flex cursor-pointer items-center gap-2"
                  onClick={() => setActiveTab(index)}
                >
                  <p
                    className={`hidden   h-[25px] w-[25px] items-center justify-center md:flex ${activeTab === index ? "bg-[#FD71AF] text-[#ffffff]" : "bg-white text-[#292D34]"} rounded-full text-[10px] font-bold`}
                  >
                    {tab.no}
                  </p>
                  <p
                    className={`font-bold leading-6 ${activeTab === index ? "text-sm text-[#292D34] max-sm:border-b-[3px] max-sm:border-[#FD71AF]" : "max-sm:Feature-task text-sm text-[#292D34] sm:text-[#B9BEC7]"} `}
                  >
                    {tab.label}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className="">
            <video
              width="604"
              height="401"
              autoPlay
              muted
              loop
              src={Feature[activeTab].video}
              className="h-full w-full rounded-[20px] object-cover "
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-[100px]">
        <div className="flex flex-col items-center justify-center px-5 text-center">
          <p className="mb-5 text-xs font-bold uppercase leading-5 tracking-wide text-[#7b68BB]">
            integrations
          </p>
          <h2 className="text-4xl font-extrabold leading-[65px] text-[#333333] lg:text-[48px]">
            Connect your favorite tools with ClickUp.
          </h2>
        </div>
      </div>
      <div className="Imagecontainer cursor-pointer">
        <div className="marquee">
          <Image
            width={1000}
            height={307}
            unoptimized
            src="/images/integrations_slider.png"
            alt="marquee"
            className="image w-full"
          />
          <Image
            width={1000}
            height={307}
            unoptimized
            src="/images/integrations_slider.png"
            alt="marquee"
            className="image w-full"
          />
        </div>
      </div>
    </>
  );
};

export default TaskFeatureTwo;
