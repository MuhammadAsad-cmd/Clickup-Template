import Image from "next/image";
import React from "react";

const EnterpriseSupporting = () => {
  return (
    <>
      <div className="container mx-auto mt-[150px] max-w-[1080px] text-[#24223E] xl:max-w-[1160px]">
        <div className="mb-[60px] flex flex-col items-center justify-center">
          <h2 className="max-w-[740px] px-5 text-4xl font-black leading-[51px] md:text-[41px]">
            Supporting your team around the clock and across all fronts
          </h2>
          <p className="mt-2 max-w-[700px] text-center text-[17px] font-medium leading-6">
            Dedicated onboarding, world-class support, and incredibly responsive
            success managers make getting started and migrating to ClickUp a
            breeze.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-[1080px] text-[#24223E]  xl:max-w-[1160px]">
        <div className="grid h-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 md:px-10 lg:grid-cols-3">
          <div className="h-[436px] rounded-[14px] border border-[#ceceea] bg-white sm:h-full">
            <Image
              width={344}
              height={154}
              unoptimized
              src="/images/self-serve-onboarding.png"
              alt="onboard"
              className="h-full max-h-[304px] w-full rounded-t-[14px] sm:max-h-[154px]"
            />
            <div className="p-[30px]">
              <h2 className="mb-2 text-xl font-black leading-7">
                Self-serve onboarding
              </h2>
              <p className="text-base font-normal leading-5">
                Access complimentary resources, checklists, and templates to
                customize ClickUp at your pace, creating a workspace uniquely
                yours.
              </p>
            </div>
          </div>
          <div className="h-[436px] rounded-[14px] border border-[#ceceea] bg-white sm:h-full">
            <Image
              width={344}
              height={154}
              unoptimized
              src="/images/guided-onboarding.png"
              alt="onboard"
              className="h-full max-h-[304px] w-full rounded-t-[14px] sm:max-h-[154px]"
            />
            <div className="p-[30px]">
              <h2 className="mb-2 text-xl font-black leading-7">
                Guided onboarding
              </h2>
              <p className="text-base font-normal leading-5">
                Our incredible customer success team provides personalized
                guidance and best practices for you to fully leverage ClickUp's
                potential.
              </p>
            </div>
          </div>
          <div className="h-[436px] rounded-[14px] border border-[#ceceea] bg-white sm:h-full">
            <Image
              width={344}
              height={154}
              unoptimized
              src="/images/dedicated-professional-services.png"
              alt="onboard"
              className="h-full max-h-[304px] w-full rounded-t-[14px] sm:max-h-[154px]"
            />
            <div className="p-[30px]">
              <h2 className="mb-2 text-xl font-black leading-7">
                Dedicated professional services
              </h2>
              <p className="text-base font-normal leading-5">
                Our specialists assess your needs and tailor a workspace to your
                business objectives for a streamlined setup and onboarding.
              </p>
            </div>
          </div>
          <div className="h-[436px] rounded-[14px] border border-[#ceceea] bg-white sm:h-full">
            <Image
              width={344}
              height={154}
              unoptimized
              src="/images/dedicated-support.png"
              alt="onboard"
              className="h-full max-h-[304px] w-full rounded-t-[14px] sm:max-h-[154px]"
            />
            <div className="p-[30px]">
              <h2 className="mb-2 text-xl font-black leading-7">
                Dedicated support
              </h2>
              <p className="text-base font-normal leading-5">
                Our award-winning support team, responsive and available 24/7 to
                support your team no matter the scale or timezone.
              </p>
            </div>
          </div>
          <div className="h-[436px] rounded-[14px] border border-[#ceceea] bg-white sm:h-full">
            <Image
              width={344}
              height={154}
              unoptimized
              src="/images/clickup-university.png"
              alt="onboard"
              className="h-full max-h-[304px] w-full rounded-t-[14px] sm:max-h-[154px]"
            />
            <div className="p-[30px]">
              <h2 className="mb-2 text-xl font-black leading-7">
                ClickUp University
              </h2>
              <p className="text-base font-normal leading-5">
                Enroll in many of our comprehensive courses to deepen your
                understanding of ClickUp, ensuring it works exactly how you need
                it to.
              </p>
            </div>
          </div>
          <div className="h-[436px] rounded-[14px] border border-[#ceceea] bg-white sm:h-full">
            <Image
              width={344}
              height={154}
              unoptimized
              src="/images/vetted-consultants.png"
              alt="onboard"
              className="h-full max-h-[304px] w-full rounded-t-[14px] sm:max-h-[154px]"
            />
            <div className="p-[30px]">
              <h2 className="mb-2 text-xl font-black leading-7">
                Vetted consultants
              </h2>
              <p className="text-base font-normal leading-5">
                Work with our carefully vetted ClickUp consultants for support
                ranging from compliance advice to strategic platform
                utilization.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[150px]">
          <p className="mx-auto mb-5 flex h-[27px] w-full max-w-[101px] items-center justify-center rounded-full bg-[#F1F1F9] px-[10px] py-[6px] text-xs font-medium leading-5 text-[#514b81]">
            Why ClickUp?
          </p>
          <div className="mb-[60px] flex flex-col items-center justify-center">
            <h2 className="max-w-[740px] text-center text-[34px] font-black leading-[51px] md:text-[41px]">
              Unmatched insight and efficiency
            </h2>
            <p className="mt-2 max-w-[650px] text-center text-[17px] font-normal leading-6">
              ClickUp is the only platform that empowers you to visualize and
              report on all your data from a single, comprehensive view.
            </p>
          </div>
        </div>

        <div className="rounded-[10px] border border-[#CECEEA]">
          <div className="relative overflow-x-auto">
            <table className="w-full text-center">
              <thead className="border-b border-[#CECEEA]">
                <tr>
                  <th scope="col" className="px-[18px] py-[25px]"></th>
                  <th scope="col" className="min-w-[119px] bg-[#f8f2ff] p-1">
                    <Image
                      width={71}
                      height={17}
                      unoptimized
                      src="/images/cu-logo-removebg-preview.png"
                      alt="logo"
                      className="mx-auto"
                    />
                  </th>
                  <th
                    scope="col"
                    className="min-w-[119px] p-1 text-base font-normal leading-5"
                  >
                    Monday
                  </th>
                  <th
                    scope="col"
                    className="min-w-[119px] p-1 text-base font-normal leading-5"
                  >
                    Asana
                  </th>
                  <th
                    scope="col"
                    className="min-w-[119px] p-1 text-base font-normal leading-5"
                  >
                    Jira
                  </th>
                  <th
                    scope="col"
                    className="min-w-[119px] p-1 text-base font-normal leading-5"
                  >
                    Notion
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#CECEEA]">
                  <td className="px-5 py-[17px]">
                    <p className="text-start">
                      Visualize tasks across the entire enterprise in one place,
                      with more than 13 different views for unmatched visibility
                      and seamless workspace management.
                    </p>
                  </td>
                  <td className="bg-[#f8f2ff] px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/correct.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/CircleTick.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/Cut.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/Cut.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/Cut.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                </tr>
                <tr className="border-b border-[#CECEEA]">
                  <td className="px-5 py-[17px]">
                    <p className="text-start">
                      Search across your workspace, third-party apps, and with
                      our AI Knowledge Manager™. Ask any question to get
                      answers from your docs, tasks, and projects.
                    </p>
                  </td>
                  <td className="bg-[#f8f2ff] px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/correct.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/CircleTick.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/Cut.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/Cut.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/Cut.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                </tr>
                <tr className="border-b border-[#CECEEA]">
                  <td className="px-5 py-[17px]">
                    <p className="text-start">
                      Drive informed decisions with precision through
                      comprehensive reporting and dashboards, connecting data
                      from every task across unlimited projects.
                    </p>
                  </td>
                  <td className="bg-[#f8f2ff] px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/correct.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/Cut.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/Cut.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/Cut.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/Cut.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="px-5 py-[17px]">
                    <p className="text-start">
                      Boost efficiency by adding tasks to multiple lists
                      simultaneously, cutting down on duplicate efforts and
                      keeping your workspace organized and agile.
                    </p>
                  </td>
                  <td className="bg-[#f8f2ff] px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/correct.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/Cut.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/Cut.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/Cut.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      width={23}
                      height={23}
                      unoptimized
                      src="/images/Cut.svg"
                      alt="tick"
                      className="mx-auto"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-[60px] hidden items-center justify-center px-[10px] lg:flex">
          <Image
            width={1000}
            height={137}
            unoptimized
            src="/images/users-love-us.png"
            alt="users"
          />
        </div>
      </div>
    </>
  );
};

export default EnterpriseSupporting;
