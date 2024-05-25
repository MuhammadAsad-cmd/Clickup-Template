"use client";
import React, { useState } from "react";
import PMO from "./PMO";
import Marketing from "./Marketing";
import Product from "./Product";
import Engineering from "./Engineering";
import Agency from "./Agency";
import TeamTabs from "../TeamTabs/TeamTabs";
import PMOIcon from "../SvgsIcons/PMOIcon";
import MarketingIcon from "../SvgsIcons/MarketingIcon";
import ProductIcons from "../SvgsIcons/ProductIcons";
import EngineeringIcon from "../SvgsIcons/EngineeringIcon";
import AgenciesIcon from "../SvgsIcons/AgenciesIcon";
import TeamTabgradient from "../SvgsIcons/TeamTabgradient";
import Link from "next/link";

const PerfectTeam = () => {
  const [selectedTeam, setSelectedTeam] = useState("PMO");

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
  };
  return (
    <>
      <div className="container mx-auto mt-14 w-full max-w-[1080px] lg:mt-[100px] ">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="FitTeam mb-5 text-[41px] font-black">
            Perfect fit for every team
          </h2>
          <div className="mb-10 max-w-[550px] text-center text-[19px] font-medium leading-6 text-[rgba(36,34,62)]">
            <p>
              <strong>Get started fast with out-of-the-box solutions.</strong>{" "}
            </p>
            <p> Easily customize ClickUp as team needs grow!</p>
          </div>
        </div>

        <div className="hidden grid-cols-6 gap-5  py-6 lg:grid lg:px-10">
          <div className="relative flex flex-col items-center justify-center">
            <button
              onClick={() => handleTeamClick("PMO")}
              className={`relative border leading-6 ${
                selectedTeam === "PMO"
                  ? "border border-[#cfcfeb] font-bold"
                  : "border-[#ececfc] font-medium "
              } bg-ransparent flex h-[120px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl bg-[rgb(255,255,255)] text-[#514b81]`}
            >
              <div>
                <PMOIcon />
              </div>
              <div>
                {" "}
                <p>PMO</p>
              </div>
            </button>
            {selectedTeam === "PMO" && <TeamTabgradient />}
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <button
              onClick={() => handleTeamClick("Marketing")}
              className={`relative border leading-6 ${
                selectedTeam === "Marketing"
                  ? "border border-[#cfcfeb] font-bold"
                  : "border-[#ececfc] font-medium"
              } flex h-[120px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl bg-[rgb(255,255,255)] text-[#514b81]`}
            >
              <div>
                <MarketingIcon />
              </div>
              <div>
                {" "}
                <p>Marketing</p>
              </div>
            </button>
            {selectedTeam === "Marketing" && <TeamTabgradient />}
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <button
              onClick={() => handleTeamClick("Product")}
              className={`border leading-6 ${
                selectedTeam === "Product"
                  ? "border border-[#cfcfeb] font-bold"
                  : "border-[#ececfc] font-medium "
              } flex  h-[120px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl bg-[rgb(255,255,255)] text-[#514b81]`}
            >
              <div>
                <ProductIcons />
              </div>
              <div>
                {" "}
                <p>Product</p>
              </div>
            </button>
            {selectedTeam === "Product" && <TeamTabgradient />}
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <button
              onClick={() => handleTeamClick("Engineering")}
              className={`border leading-6 ${
                selectedTeam === "Engineering"
                  ? "border border-[#cfcfeb] font-bold"
                  : "border-[#ececfc] font-medium "
              } flex h-[120px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl bg-[rgb(255,255,255)] text-[#514b81]`}
            >
              <div>
                <EngineeringIcon />
              </div>
              <div>
                {" "}
                <p>Engineering</p>
              </div>
            </button>
            {selectedTeam === "Engineering" && <TeamTabgradient />}
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <button
              onClick={() => handleTeamClick("Agencies")}
              className={`border leading-6 ${
                selectedTeam === "Agencies"
                  ? "border border-[#cfcfeb] font-bold"
                  : "border-[#ececfc] font-medium "
              } flex h-[120px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl bg-[rgb(255,255,255)] text-[#514b81]`}
            >
              <div>
                <AgenciesIcon />
              </div>
              <div>
                {" "}
                <p>Agencies</p>
              </div>
            </button>
            {selectedTeam === "Agencies" && <TeamTabgradient />}
          </div>
          <Link href="/teams">
            <button className="flex h-[120px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-[#ececfc] bg-transparent font-medium leading-6 text-[#514b81]">
              <p>
                See all <br /> teams
              </p>
            </button>
          </Link>
        </div>

        {selectedTeam && (
          <div className="container relative mx-auto mt-5 hidden max-w-[1160px] lg:block">
            {selectedTeam === "PMO" && <PMO />}
            {selectedTeam === "Marketing" && <Marketing />}
            {selectedTeam === "Product" && <Product />}
            {selectedTeam === "Engineering" && <Engineering />}
            {selectedTeam === "Agencies" && <Agency />}
            <svg
              className="absolute -top-[90px] right-5 -z-10"
              xmlns="http://www.w3.org/2000/svg"
              width="1116"
              height="503"
              viewBox="0 0 1116 503"
              fill="none"
            >
              <g opacity="0.3" filter="url(#filter0_f_314_8976)">
                <path
                  d="M100 200C100 144.772 144.772 100 200 100H916C971.228 100 1016 144.772 1016 200V303C1016 358.228 971.228 403 916 403H200C144.772 403 100 358.228 100 303V200Z"
                  fill="url(#paint0_linear_314_8976)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_314_8976"
                  x="0"
                  y="0"
                  width="1116"
                  height="503"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="50"
                    result="effect1_foregroundBlur_314_8976"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_314_8976"
                  x1="111"
                  y1="260.5"
                  x2="433.956"
                  y2="-334.617"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#45C4F9" />
                  <stop offset="0.548601" stop-color="#8920FE" />
                  <stop offset="1" stop-color="#FF0BE5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}

        <TeamTabs />
      </div>
    </>
  );
};

export default PerfectTeam;
