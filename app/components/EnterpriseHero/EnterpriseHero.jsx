import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ProcingHeroReviewsLogo from "../ProcingHeroSection/ProcingHeroReviewsLogo";
import Team from "../Collaboration/Team";

const EnterpriseHero = () => {
  return (
    <div className="CuHeroV3 pt-[100px]">
      <div className="container mx-auto max-w-[800px]">
        <p className="mx-auto mb-5 flex h-[27px] w-full max-w-[129px] items-center justify-center rounded-full bg-[#F1F1F9] px-[10px] py-[6px] text-xs font-medium leading-5 text-[#514b81]">
          ClickUp Enterprise
        </p>
        <h1 className="px-5 text-center text-[50px] leading-[54px] text-[#24223E] md:leading-[60px]">
          Connecting teams, tools, and tasks across your enterprise
        </h1>
        <p className="mx-auto mt-2 max-w-[650px] text-center text-[19px] font-medium leading-6 text-[#24223E]">
          Break down silos, align teams, and accelerate growth with ClickUp.
          Designed for ultimate performance, scalability, and reliability.
        </p>
        <div className="mt-[30px] flex flex-col flex-wrap items-center justify-center gap-3 px-5 sm:flex-row">
          <button className="bgEnterBtn flex h-[45px] w-full items-center justify-center gap-[9px] rounded-[14px] px-[18px] py-3 text-base font-bold leading-5 text-white sm:max-w-[200px]">
            Contact sales
            <FaArrowRightLong />
          </button>
          <button className="flex h-[45px] w-full items-center justify-center gap-[9px] rounded-[14px] bg-[#f1f1f9] px-[18px] py-3 text-[15px] font-medium leading-5 text-[#514B81] sm:max-w-[156px]">
            Get started free
          </button>
        </div>
        <div className="mt-[30px] flex flex-col items-center justify-center gap-3 sm:flex-row">
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

        <p className="mb-6 mt-10 text-center text-[17px] font-medium leading-6 text-[#24223E] md:mt-[450px]">
          <strong>Trusted by 2 million+ teams</strong> to redefine the way they
          work and communicate.
        </p>
      </div>
      <Team />
    </div>
  );
};

export default EnterpriseHero;
