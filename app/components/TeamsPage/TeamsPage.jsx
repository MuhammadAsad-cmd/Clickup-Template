import Image from "next/image";
import React from "react";
import ProcingHeroReviewsLogo from "../ProcingHeroSection/ProcingHeroReviewsLogo";
import Team from "../Collaboration/Team";

const TeamsPage = () => {
  return (
    <>
      <div className="Cu-Hero-Team CuHeroV3_wrapper">
        <div className="container mx-auto max-w-[1160px] pt-20 text-[#24223E]">
          <div className="flex flex-col items-center justify-center px-5">
            <div className="max-w-[700px] text-center">
              <h1 className="text-[50px] font-black leading-[60px] text-[#24223E]">
                Say hello to your perfect work solution.
              </h1>
            </div>
            <div className="mt-[9px] max-w-[650px] text-center">
              <p className="text-[19px] font-medium leading-7">
                ClickUp can be customized to manage any type of work, from
                personal tasks and team collaboration to company-wide
                organization.
              </p>
            </div>
            <button className="Bordered mt-[30px] h-[45px] w-full text-lg font-bold leading-7 text-white sm:max-w-[200px]">
              Get Started
            </button>

            <div className="mt-3 flex items-center justify-center gap-[7px]">
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
            <div className="mt-[130px] hidden lg:block">
              <p className="mb-[25px] text-center text-[17px] font-medium leading-6">
                Trusted by 2 million+ teams
              </p>
              <Team />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamsPage;
