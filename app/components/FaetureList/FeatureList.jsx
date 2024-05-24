"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Views from "./Views";
import Customization from "./Customization";

const FeatureList = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center">
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="z-30 flex h-[51px] w-full max-w-[272px] items-center justify-center gap-[9px] rounded-[14px] bg-[#F8F3FF] px-[18px] py-3 text-lg font-bold leading-7 text-[#7612FA]"
        >
          <p className="pr-[10px]">Complete feature list</p>
          {menuOpen ? (
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <FaAngleUp />
            </button>
          ) : (
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <FaAngleDown />
            </button>
          )}
        </div>
      </div>

      {menuOpen && (
        <>
          <div className="container mx-auto mb-[50px] mt-[60px] max-w-[1160px] p-[30px]">
            <div className="relative overflow-x-auto rounded-lg border border-[#cfcfeb] ">
              <table className="w-full text-center">
                <thead className="bg-white text-[#24223e]">
                  <tr>
                    <th
                      scope="col"
                      className="w-[373px] border-r border-[#cfcfeb]"
                    >
                      <div className="m-[14px] rounded-[9px] bg-[#f8f8fc] py-[49px] text-center text-base font-black leading-6">
                        Usage
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="w-[186px] border-r  border-[#cfcfeb] p-[14px]"
                    >
                      <div className="flex flex-col gap-[7px] rounded-[9px] bg-[#f2fbf9] p-3">
                        <h4 className="text-base font-black leading-6 text-[#00b884]">
                          Free Foreover
                        </h4>
                        <p className="text-[19px] font-extrabold leading-6 text-[#00b884]">
                          Free
                        </p>
                        <button className="flex h-[34px] w-full max-w-[133px] items-center justify-center rounded-[7px] bg-[#00b884] p-[9px] text-white">
                          Free Foreover
                        </button>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="w-[186px] border-r border-[#cfcfeb] p-[14px]"
                    >
                      <div className="flex flex-col gap-[7px] rounded-[9px] bg-[#fff3fe] p-3">
                        <h4 className="text-base font-black leading-6 text-[#fa14e3]">
                          Unlimited
                        </h4>
                        <p className="flex items-center gap-[6px] text-[19px] font-extrabold leading-6 text-[#fa14e3]">
                          <span className="text-xs">$</span> 7{" "}
                          <span className="text-xs font-medium leading-4 text-[#7f76b3]">
                            {" "}
                            User/Month
                          </span>
                        </p>
                        <button className="flex h-[34px] max-w-[133px] items-center justify-center rounded-[7px] bg-[#fa14e3] p-[9px] text-white">
                          Get Started
                        </button>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="w-[186px] border-r border-[#cfcfeb] p-[14px]"
                    >
                      <div className="flex flex-col gap-[7px] rounded-[9px] bg-[#f4f8ff] p-3">
                        <h4 className="text-base font-black leading-6 text-[#1f7cff]">
                          Business
                        </h4>
                        <p className="flex items-center gap-[6px] text-[19px] font-extrabold leading-6 text-[#1f7cff]">
                          <span className="text-xs">$</span> 12{" "}
                          <span className="text-xs font-medium leading-4 text-[#7f76b3]">
                            {" "}
                            User/Month
                          </span>
                        </p>
                        <button className="flex h-[34px] max-w-[133px] items-center justify-center rounded-[7px] bg-[#1f7cff] p-[9px] text-white">
                          Get Started
                        </button>
                      </div>
                    </th>
                    <th scope="col" className="w-[186px] p-[14px]">
                      <div className="flex flex-col gap-[7px] rounded-[9px] bg-[#f6f5ff] p-3">
                        <h4 className="pb-8 text-base font-black leading-6 text-[#2c2a41]">
                          Enterprise
                        </h4>
                        <button className="flex h-[34px] w-full max-w-[133px] items-center justify-center rounded-[7px] bg-[#2c2a41] p-[9px] text-white">
                          Contact Sales
                        </button>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-white ">
                    <th
                      scope="row"
                      className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px] text-start text-sm font-medium leading-5 text-[#24223e]"
                    >
                      Tasks
                    </th>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      Unlimited
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      Unlimited
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      Unlimited
                    </td>
                    <td className="p-[14px]">Unlimited</td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <th
                      scope="row"
                      className="whitespace-nowrap border-r border-[#cfcfeb]  p-[14px]  text-start text-sm font-medium leading-5 text-[#24223e]"
                    >
                      Spaces
                    </th>
                    <td className="border-r border-[#cfcfeb] p-[14px] ">
                      5 Spaces
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px] ">
                      Unlimited
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px] ">
                      Unlimited
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px] ">
                      Unlimited
                    </td>
                  </tr>
                  <tr className="border-b bg-white">
                    <th
                      scope="row"
                      className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px]  text-start text-sm font-medium leading-5 text-[#24223e]"
                    >
                      Lists/Space
                    </th>
                    <td className="border-r border-[#cfcfeb] p-[14px] ">100</td>
                    <td className="border-r border-[#cfcfeb] p-[14px] ">200</td>
                    <td className="border-r border-[#cfcfeb] p-[14px] ">400</td>
                    <td className="p-[14px] ">Unlimited</td>
                  </tr>
                  <tr className="border-b bg-white">
                    <th
                      scope="row"
                      className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px]  text-start text-sm font-medium leading-5 text-[#24223e]"
                    >
                      Folders/Space
                    </th>
                    <td className="border-r border-[#cfcfeb] p-[14px]">100</td>
                    <td className="border-r border-[#cfcfeb] p-[14px]">200</td>
                    <td className="border-r border-[#cfcfeb] p-[14px]">400</td>
                    <td className="p-[14px]">Unlimited</td>
                  </tr>
                  <tr className="border-b bg-white">
                    <th
                      scope="row"
                      className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px] text-start text-sm font-medium leading-5 text-[#24223e]"
                    >
                      Custom Views
                    </th>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      Unlimited
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      Unlimited
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      Unlimited
                    </td>
                    <td className="p-[14px] ">Unlimited</td>
                  </tr>
                </tbody>
                <thead className="bg-white text-[#24223e]">
                  <tr>
                    <th
                      scope="col"
                      className="w-[373px] border-r border-[#cfcfeb]"
                    >
                      <div className="m-[14px] rounded-[9px] bg-[#f8f8fc] py-[49px] text-center text-base font-black leading-6">
                        Essentials
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="border-r border-[#cfcfeb] p-[14px]"
                    >
                      <div className="flex flex-col gap-[7px] rounded-[9px] bg-[#f2fbf9] p-3">
                        <h4 className="text-base font-black leading-6 text-[#00b884]">
                          Free Foreover
                        </h4>
                        <p className="text-[19px] font-extrabold leading-6 text-[#00b884]">
                          Free
                        </p>
                        <button className="flex h-[34px] w-full max-w-[133px] items-center justify-center rounded-[7px] bg-[#00b884] p-[9px] text-white">
                          Free Foreover
                        </button>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="border-r border-[#cfcfeb] p-[14px]"
                    >
                      <div className="flex flex-col gap-[7px] rounded-[9px] bg-[#fff3fe] p-3">
                        <h4 className="text-base font-black leading-6 text-[#fa14e3]">
                          Unlimited
                        </h4>
                        <p className="flex items-center gap-[6px] text-[19px] font-extrabold leading-6 text-[#fa14e3]">
                          <span className="text-xs">$</span> 7{" "}
                          <span className="text-xs font-medium leading-4 text-[#7f76b3]">
                            {" "}
                            User/Month
                          </span>
                        </p>
                        <button className="flex h-[34px] max-w-[133px] items-center justify-center rounded-[7px] bg-[#fa14e3] p-[9px] text-white">
                          Get Started
                        </button>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="border-r border-[#cfcfeb] p-[14px]"
                    >
                      <div className="flex flex-col gap-[7px] rounded-[9px] bg-[#f4f8ff] p-3">
                        <h4 className="text-base font-black leading-6 text-[#1f7cff]">
                          Business
                        </h4>
                        <p className="flex items-center gap-[6px] text-[19px] font-extrabold leading-6 text-[#1f7cff]">
                          <span className="text-xs">$</span> 12{" "}
                          <span className="text-xs font-medium leading-4 text-[#7f76b3]">
                            {" "}
                            User/Month
                          </span>
                        </p>
                        <button className="flex h-[34px] max-w-[133px] items-center justify-center rounded-[7px] bg-[#1f7cff] p-[9px] text-white">
                          Get Started
                        </button>
                      </div>
                    </th>
                    <th scope="col" className="p-[14px]">
                      <div className="flex flex-col gap-[7px] rounded-[9px] bg-[#f6f5ff] p-3">
                        <h4 className="pb-8 text-base font-black leading-6 text-[#2c2a41]">
                          Enterprise
                        </h4>
                        <button className="flex h-[34px] w-full max-w-[133px] items-center justify-center rounded-[7px] bg-[#2c2a41] p-[9px] text-white">
                          Contact Sales
                        </button>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="max-w-[186px] border-b bg-white ">
                    <th
                      scope="row"
                      className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px] text-start text-sm font-medium leading-5 text-[#24223e]"
                    >
                      AI Compatible
                    </th>
                    <td className="border-r border-[#cfcfeb] p-[14px]"></td>

                    <td className="border-r border-[#cfcfeb] p-[14px] text-center">
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <th
                      scope="row"
                      className="whitespace-nowrap border-r border-[#cfcfeb]  p-[14px]  text-start text-sm font-medium leading-5 text-[#24223e]"
                    >
                      File Storage
                    </th>
                    <td className="border-r border-[#cfcfeb] p-[14px] ">
                      100MB
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px] ">
                      Unlimited
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px] ">
                      Unlimited
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px] ">
                      Unlimited
                    </td>
                  </tr>
                  <tr className="border-b bg-white">
                    <th
                      scope="row"
                      className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px]  text-start text-sm font-medium leading-5 text-[#24223e]"
                    >
                      Privacy and Sharing
                    </th>
                    <td className=" border-r border-[#cfcfeb] p-[14px]">
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                  </tr>

                  <tr className="max-w-[186px] border-b bg-white">
                    <th
                      scope="row"
                      className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px] text-start text-sm font-medium leading-5 text-[#24223e]"
                    >
                      Guests
                    </th>
                    <td className="border-r border-[#cfcfeb] p-[14px] text-sm font-medium leading-5 text-[#24223e]">
                      Guests must be given full access (no permissions)
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                    <td className="p-[14px]">
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b bg-white">
                    <th
                      scope="row"
                      className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px] text-start text-sm font-medium leading-5 text-[#24223e]"
                    >
                      Custom Fields
                    </th>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      60 uses
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                    <td className="p-[14px] ">
                      {" "}
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b bg-white">
                    <th
                      scope="row"
                      className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px] text-start text-sm font-medium leading-5 text-[#24223e]"
                    >
                      Pinning Custom Fields
                    </th>
                    <td className="border-r border-[#cfcfeb] p-[14px]"></td>
                    <td className="border-r border-[#cfcfeb] p-[14px]"></td>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                    <td className="p-[14px] ">
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b bg-white">
                    <th
                      scope="row"
                      className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px] text-start text-sm font-medium leading-5 text-[#24223e]"
                    >
                      Template Everything
                    </th>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                    <td className="border-r border-[#cfcfeb] p-[14px]">
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                    <td className="p-[14px] ">
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b bg-white">
                    <th
                      scope="row"
                      className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px] text-start text-sm font-medium leading-5 text-[#24223e]"
                    >
                      Universal Search
                    </th>
                    <td className="border-r border-[#cfcfeb] p-[14px]"></td>
                    <td className="border-r border-[#cfcfeb] p-[14px]"></td>
                    <td className="border-r border-[#cfcfeb] p-[14px]"></td>
                    <td className="p-[14px] ">
                      <div className="flex items-center justify-center">
                        <Image
                          width={14}
                          height={14}
                          unoptimized
                          src="/images/Tick.svg"
                          alt="tick"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
                <Views />
                <Customization />
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FeatureList;
