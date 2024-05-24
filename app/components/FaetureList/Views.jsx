import Image from "next/image";
import React from "react";

const Views = () => {
  return (
    <>
      <thead className="bg-white text-[#24223e]">
        <tr>
          <th scope="col" className="w-[373px] border-r border-[#cfcfeb]">
            <div className="m-[14px] rounded-[9px] bg-[#f8f8fc] py-[49px] text-center text-base font-black leading-6">
              Views
            </div>
          </th>
          <th scope="col" className="border-r border-[#cfcfeb] p-[14px]">
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
          <th scope="col" className="border-r border-[#cfcfeb] p-[14px]">
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
          <th scope="col" className="border-r border-[#cfcfeb] p-[14px]">
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
            List
          </th>
          <td className="border-r border-[#cfcfeb] p-[14px]">
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
            Board
          </th>
          <td className="border-r border-[#cfcfeb] p-[14px] ">
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
          <td className="border-r border-[#cfcfeb] p-[14px] ">
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
          <td className="border-r border-[#cfcfeb] p-[14px] ">
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
          <td className="border-r border-[#cfcfeb] p-[14px] ">
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
            className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px]  text-start text-sm font-medium leading-5 text-[#24223e]"
          >
            Calendar
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
            Team
          </th>
          <td className="border-r border-[#cfcfeb] p-[14px] text-sm font-medium leading-5 text-[#24223e]"></td>
          <td className="border-r border-[#cfcfeb] p-[14px]">
            <div className="flex items-center justify-center">100 uses</div>
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
        <tr className="border-b bg-white">
          <th
            scope="row"
            className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px] text-start text-sm font-medium leading-5 text-[#24223e]"
          >
            Gantt
          </th>
          <td className="border-r border-[#cfcfeb] p-[14px]">60 uses</td>
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
            Activity
          </th>
          <td className="border-r border-[#cfcfeb] p-[14px]">1 day</td>
          <td className="border-r border-[#cfcfeb] p-[14px]">7 days</td>
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
            Timeline
          </th>
          <td className="border-r border-[#cfcfeb] p-[14px]">
            <div className="flex items-center justify-center">60 uses</div>
          </td>
          <td className="border-r border-[#cfcfeb] p-[14px]">
            <div className="flex items-center justify-center">100 uses</div>
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
            Workload
          </th>
          <td className="border-r border-[#cfcfeb] p-[14px]">60 uses</td>
          <td className="border-r border-[#cfcfeb] p-[14px]">100 uses</td>

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
            Custom capacity & additional groups
          </td>
        </tr>
        <tr className="border-b bg-white">
          <th
            scope="row"
            className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px] text-start text-sm font-medium leading-5 text-[#24223e]"
          >
            Table (Spreadsheets)
          </th>
          <td className="border-r border-[#cfcfeb] p-[14px]">
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
          <td className="border-r border-[#cfcfeb] p-[14px]">
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
        <tr className="border-b bg-white">
          <th
            scope="row"
            className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px] text-start text-sm font-medium leading-5 text-[#24223e]"
          >
            Map
          </th>
          <td className="border-r border-[#cfcfeb] p-[14px]"> </td>
          <td className="border-r border-[#cfcfeb] p-[14px]"> 100 uses</td>

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
        <tr className="border-b bg-white">
          <th
            scope="row"
            className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px] text-start text-sm font-medium leading-5 text-[#24223e]"
          >
            Mind Map
          </th>
          <td className="border-r border-[#cfcfeb] p-[14px]">60 uses </td>
          <td className="border-r border-[#cfcfeb] p-[14px]"> 100 uses</td>

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
        <tr className="border-b bg-white">
          <th
            scope="row"
            className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px] text-start text-sm font-medium leading-5 text-[#24223e]"
          >
            Whiteboards
          </th>
          <td className="border-r border-[#cfcfeb] p-[14px]">3 Whiteboards</td>
          <td className="border-r border-[#cfcfeb] p-[14px]">10 Whiteboards</td>

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
        <tr className="border-b bg-white">
          <th
            scope="row"
            className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px] text-start text-sm font-medium leading-5 text-[#24223e]"
          >
            Doc
          </th>
          <td className="border-r border-[#cfcfeb] p-[14px]">
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
          <td className="border-r border-[#cfcfeb] p-[14px]">
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
        <tr className="border-b bg-white">
          <th
            scope="row"
            className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px] text-start text-sm font-medium leading-5 text-[#24223e]"
          >
            Chat
          </th>
          <td className="border-r border-[#cfcfeb] p-[14px]">
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
          <td className="border-r border-[#cfcfeb] p-[14px]">
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
        <tr className="border-b bg-white">
          <th
            scope="row"
            className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px] text-start text-sm font-medium leading-5 text-[#24223e]"
          >
            Form
          </th>
          <td className="border-r border-[#cfcfeb] p-[14px]"></td>
          <td className="border-r border-[#cfcfeb] p-[14px]">
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
            Branding & Customization
          </td>
        </tr>
        <tr className="border-b bg-white">
          <th
            scope="row"
            className="whitespace-nowrap border-r border-[#cfcfeb] p-[14px] text-start text-sm font-medium leading-5 text-[#24223e]"
          >
            Embed
          </th>
          <td className="border-r border-[#cfcfeb] p-[14px]">60 uses</td>
          <td className="border-r border-[#cfcfeb] p-[14px]">
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
      </tbody>
    </>
  );
};

export default Views;
