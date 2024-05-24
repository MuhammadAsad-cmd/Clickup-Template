import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import CompanySwiper from "./CompanySwiper";

const CompanyType = () => {
  return (
    <>
      <div className="mt-20 border-t border-[ceceea] bg-[#fbfbfd]">
        <div className="container mx-auto max-w-[1160px] pt-20 text-[#24223E]">
          <div className="flex flex-col items-center justify-center px-10">
            <h2 className="mb-[60px] whitespace-pre-wrap text-[41px] font-black leading-[51px]">
              Company Type
            </h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-[14px] border border-[#ceceea] bg-white">
                <div>
                  <Image
                    width={300}
                    height={300}
                    unoptimized
                    src="/images/enterprise.png"
                    className="h-full w-full"
                  />
                </div>
                <div className="p-[30px]">
                  <h2 className="mb-2 text-xl font-black leading-7">
                    Enterprise
                  </h2>
                  <p className="text-base font-normal leading-5">
                    Align your teams, simplify collaboration, and get more done
                    with ClickUp's flexible all-in-one solution for Enterprises.
                  </p>
                  <button className="mt-5 flex h-[42px] w-full items-center justify-center gap-3 rounded-[14px] bg-[#F1F1F9] text-[13px] font-medium leading-7 text-[#514B81]">
                    Get Started
                    <FaArrowRightLong className="text-lg" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-[14px] border border-[#ceceea] bg-white">
                <div>
                  <Image
                    width={300}
                    height={300}
                    unoptimized
                    src="/images/calendar.png"
                    className="h-full w-full"
                  />
                </div>
                <div className="p-[30px]">
                  <h2 className="mb-2 text-xl font-black leading-7">Startup</h2>
                  <p className="text-base font-normal leading-5">
                    Build your business for long-term success by organizing all
                    of your ideas, workflows, and teamwork in a single, shared
                    place.
                  </p>
                  <button className="mt-5 flex h-[42px] w-full items-center justify-center gap-3 rounded-[14px] bg-[#F1F1F9] text-[13px] font-medium leading-7 text-[#514B81]">
                    Get Started
                    <FaArrowRightLong className="text-lg" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-[14px] border border-[#ceceea] bg-white">
                <div>
                  <Image
                    width={300}
                    height={300}
                    unoptimized
                    src="/images/list.png"
                    className="h-full w-full"
                  />
                </div>
                <div className="p-[30px]">
                  <h2 className="mb-2 text-xl font-black leading-7">
                    Non-Profit
                  </h2>
                  <p className="text-base font-normal leading-5">
                    Organize your non-profit's operations, funding, volunteer
                    scheduling, and more.
                  </p>
                  <button className="mt-5 flex h-[42px] w-full items-center justify-center gap-3 rounded-[14px] bg-[#F1F1F9] text-[13px] font-medium leading-7 text-[#514B81]">
                    Get Started
                    <FaArrowRightLong className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[150px] flex flex-col items-center justify-center px-10">
            <h2 className="mb-[60px] whitespace-pre-wrap text-[41px] font-black leading-[51px]">
              Department
            </h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-[14px] border border-[#ceceea] bg-white">
                <div>
                  <Image
                    width={300}
                    height={300}
                    unoptimized
                    src="/images/dashboards (1).png"
                    className="h-full w-full"
                  />
                </div>
                <div className="p-[30px]">
                  <h2 className="mb-2 text-xl font-black leading-7">
                    Development
                  </h2>
                  <p className="text-base font-normal leading-5">
                    Manage roadmaps, product development, bug tracking, Agile
                    projects, Git integrations, and more.
                  </p>
                  <button className="mt-5 flex h-[42px] w-full items-center justify-center gap-3 rounded-[14px] bg-[#F1F1F9] text-[13px] font-medium leading-7 text-[#514B81]">
                    Get Started
                    <FaArrowRightLong className="text-lg" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-[14px] border border-[#ceceea] bg-white">
                <div>
                  <Image
                    width={300}
                    height={300}
                    unoptimized
                    src="/images/gantt.png"
                    className="h-full w-full"
                  />
                </div>
                <div className="p-[30px]">
                  <h2 className="mb-2 text-xl font-black leading-7">
                    Marketing
                  </h2>
                  <p className="text-base font-normal leading-5">
                    Manage marketing projects, campaigns, clients, and more all
                    in one place.
                  </p>
                  <button className="mt-5 flex h-[42px] w-full items-center justify-center gap-3 rounded-[14px] bg-[#F1F1F9] text-[13px] font-medium leading-7 text-[#514B81]">
                    Get Started
                    <FaArrowRightLong className="text-lg" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-[14px] border border-[#ceceea] bg-white">
                <div>
                  <Image
                    width={300}
                    height={300}
                    unoptimized
                    src="/images/sales.png"
                    className="h-full w-full"
                  />
                </div>
                <div className="p-[30px]">
                  <h2 className="mb-2 text-xl font-black leading-7">Sales</h2>
                  <p className="text-base font-normal leading-5">
                    Manage everything from lead tracking, deals, and customer
                    onboarding in one place.
                  </p>
                  <button className="mt-5 flex h-[42px] w-full items-center justify-center gap-3 rounded-[14px] bg-[#F1F1F9] text-[13px] font-medium leading-7 text-[#514B81]">
                    Get Started
                    <FaArrowRightLong className="text-lg" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-[14px] border border-[#ceceea] bg-white">
                <div>
                  <Image
                    width={300}
                    height={300}
                    unoptimized
                    src="/images/design.png"
                    className="h-full w-full"
                  />
                </div>
                <div className="p-[30px]">
                  <h2 className="mb-2 text-xl font-black leading-7">Design</h2>
                  <p className="text-base font-normal leading-5">
                    Streamline your design process, share feedback, and maximize
                    your team's resources.
                  </p>
                  <button className="mt-5 flex h-[42px] w-full items-center justify-center gap-3 rounded-[14px] bg-[#F1F1F9] text-[13px] font-medium leading-7 text-[#514B81]">
                    Get Started
                    <FaArrowRightLong className="text-lg" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-[14px] border border-[#ceceea] bg-white">
                <div>
                  <Image
                    width={300}
                    height={300}
                    unoptimized
                    src="/images/product-management.png"
                    className="h-full w-full"
                  />
                </div>
                <div className="p-[30px]">
                  <h2 className="mb-2 text-xl font-black leading-7">
                    Product Management
                  </h2>
                  <p className="text-base font-normal leading-5">
                    Manage product roadmaps, development priorities, and your
                    team — all in one place.
                  </p>
                  <button className="mt-5 flex h-[42px] w-full items-center justify-center gap-3 rounded-[14px] bg-[#F1F1F9] text-[13px] font-medium leading-7 text-[#514B81]">
                    Get Started
                    <FaArrowRightLong className="text-lg" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-[14px] border border-[#ceceea] bg-white">
                <div>
                  <Image
                    width={300}
                    height={300}
                    unoptimized
                    src="/images/education.png"
                    className="h-full w-full"
                  />
                </div>
                <div className="p-[30px]">
                  <h2 className="mb-2 text-xl font-black leading-7">
                    Education
                  </h2>
                  <p className="text-base font-normal leading-5">
                    Organize lesson plans, track student performance, and stay
                    ahead of your class schedule.
                  </p>
                  <button className="mt-5 flex h-[42px] w-full items-center justify-center gap-3 rounded-[14px] bg-[#F1F1F9] text-[13px] font-medium leading-7 text-[#514B81]">
                    Get Started
                    <FaArrowRightLong className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[150px] flex flex-col items-center justify-center px-10">
            <h2 className="mb-[60px] whitespace-pre-wrap text-[41px] font-black leading-[51px]">
              Use Case
            </h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-[14px] border border-[#ceceea] bg-white">
                <div>
                  <Image
                    width={300}
                    height={300}
                    unoptimized
                    src="/images/project-management.png"
                    className="h-full w-full"
                  />
                </div>
                <div className="p-[30px]">
                  <h2 className="mb-2 text-xl font-black leading-7">
                    Project Management
                  </h2>
                  <p className="text-base font-normal leading-5">
                    Plan, track, and collaborate on any type of project with
                    your team.
                  </p>
                  <button className="mt-5 flex h-[42px] w-full items-center justify-center gap-3 rounded-[14px] bg-[#F1F1F9] text-[13px] font-medium leading-7 text-[#514B81]">
                    Get Started
                    <FaArrowRightLong className="text-lg" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-[14px] border border-[#ceceea] bg-white">
                <div>
                  <Image
                    width={300}
                    height={300}
                    unoptimized
                    src="/images/personal.png"
                    className="h-full w-full"
                  />
                </div>
                <div className="p-[30px]">
                  <h2 className="mb-2 text-xl font-black leading-7">
                    Personal
                  </h2>
                  <p className="text-base font-normal leading-5">
                    Save time and get more done by managing all of your daily
                    tasks and personal projects in one place.
                  </p>
                  <button className="mt-5 flex h-[42px] w-full items-center justify-center gap-3 rounded-[14px] bg-[#F1F1F9] text-[13px] font-medium leading-7 text-[#514B81]">
                    Get Started
                    <FaArrowRightLong className="text-lg" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-[14px] border border-[#ceceea] bg-white">
                <div>
                  <Image
                    width={300}
                    height={300}
                    unoptimized
                    src="/images/remote-work.png"
                    className="h-full w-full"
                  />
                </div>
                <div className="p-[30px]">
                  <h2 className="mb-2 text-xl font-black leading-7">
                    Remote Work
                  </h2>
                  <p className="text-base font-normal leading-5">
                    Coordinate with your remote team on any project type.
                  </p>
                  <button className="mt-5 flex h-[42px] w-full items-center justify-center gap-3 rounded-[14px] bg-[#F1F1F9] text-[13px] font-medium leading-7 text-[#514B81]">
                    Get Started
                    <FaArrowRightLong className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <CompanySwiper />
        </div>
      </div>
    </>
  );
};

export default CompanyType;
