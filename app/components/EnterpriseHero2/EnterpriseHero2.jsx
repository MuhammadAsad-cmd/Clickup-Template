import Image from "next/image";
import React from "react";

const EnterpriseHero2 = () => {
  return (
    <>
      <div className="CuGridWrapper relative">
        <div className="container mx-auto max-w-[1160px] px-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-between rounded-[14px] border border-[#ceceea] bg-white p-[30px]">
              <div>
                <Image
                  width={69}
                  height={42}
                  unoptimized
                  alt="logo"
                  src="/images/Cn.svg"
                />
              </div>
              <p className="mt-5 text-base font-medium leading-5 text-[#24223E]">
                <strong>Increased output by 2x</strong> in half the time.
              </p>
              <button className="mt-5 flex h-[42px] w-full items-center justify-center rounded-[14px] bg-[#F1F1F9] px-[18px] text-[13px] font-medium leading-5 md:max-w-[284px]">
                Read story
              </button>
            </div>
            <div className="flex flex-col justify-between rounded-[14px] border border-[#ceceea] bg-white p-[30px]">
              <div>
                <Image
                  width={180}
                  height={42}
                  unoptimized
                  alt="logo"
                  src="/images/logo_container.svg"
                />
              </div>
              <p className="mt-5 text-base font-medium leading-5 text-[#24223E]">
                <strong>8x faster projects</strong> and task setup.
              </p>
              <button className="mt-5 flex h-[42px] w-full items-center justify-center rounded-[14px] bg-[#F1F1F9] px-[18px] text-[13px] font-medium leading-5 md:max-w-[284px]">
                Read story
              </button>
            </div>
            <div className="flex flex-col justify-between rounded-[14px] border border-[#ceceea] bg-white p-[30px]">
              <div>
                <Image
                  width={34}
                  height={42}
                  unoptimized
                  alt="logo"
                  src="/images/mayo.svg"
                />
              </div>
              <p className="mt-5 text-base font-medium leading-5 text-[#24223E]">
                <strong>Saved 6h a week </strong> with automated workflows.
              </p>
              <button className="mt-5 flex h-[42px] w-full items-center justify-center rounded-[14px] bg-[#F1F1F9] px-[18px] text-[13px] font-medium leading-5 md:max-w-[284px]">
                Read story
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-[1160px] px-5 pt-[150px] text-[#24223E] md:px-10">
          <h2 className="mx-auto mb-10 max-w-[800px] text-center text-[34px] font-black leading-10 text-[#24223E] md:text-[41px] md:leading-[51px]">
            Built for unmatched enterprise scalability, security, and
            reliability.
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="CuBentoCard h-full w-full rounded-[14px]">
              <div>
                <Image
                  width={530}
                  height={260}
                  unoptimized
                  src="/images/uptime.png"
                  alt="img"
                  className="rounded-[14px]"
                />
              </div>
              <div className="p-[30px]">
                <h4 className="mb-2 text-xl font-black leading-7 ">
                  99.9% uptime guarantee
                </h4>
                <p className="text-base font-medium leading-5">
                  Ensure your operations never skip a beat with our 99.9% uptime
                  guarantee, keeping your workflow smooth and uninterrupted.
                </p>
              </div>
            </div>
            <div className="CuBentoCard h-full w-full rounded-[14px]">
              <div>
                <Image
                  width={530}
                  height={260}
                  unoptimized
                  src="/images/speed-scalability.avif"
                  alt="img"
                  className="rounded-[14px]"
                />
              </div>
              <div className="p-[30px]">
                <h4 className="mb-2 text-xl font-black leading-7">
                  Unmatched speed and scalability
                </h4>
                <p className="text-base font-medium leading-5">
                  Leverage our exclusive RapidViews DB™ technology for ultimate
                  scalability and performance unmatched by any other solution
                </p>
              </div>
            </div>
          </div>
          <div className="CuBentoCard mt-5 grid grid-cols-1 rounded-[14px]">
            <div className="flex items-center">
              <div>
                <Image
                  width={540}
                  height={321}
                  unoptimized
                  src="/images/advanced-admin-tools.avif"
                  alt="img"
                  className="h-full max-h-[321px] w-full max-w-[540px] rounded-[14px]"
                />
              </div>
              <div className="p-[30px]">
                <h3 className="mb-2 text-xl font-black leading-7 ">
                  Advanced admin tools
                </h3>
                <p className="max-w-[480px] text-base font-medium leading-5">
                  Everything you need to protect your data, manage access,
                  configure permissions and keep a compressive activities log is
                  built-in.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="CuBentoCard h-full w-full rounded-[14px]">
              <div>
                <Image
                  width={530}
                  height={260}
                  unoptimized
                  src="/images/ai-powered-workflows.avif"
                  alt="img"
                  className="rounded-[14px]"
                />
              </div>
              <div className="p-[30px]">
                <h4 className="mb-2 text-xl font-black leading-7 ">
                  AI-powered workflows
                </h4>
                <p className="text-base font-medium leading-5">
                  The world's first neural network connecting tasks, docs,
                  people, and all of your company’s knowledge with AI.
                </p>
              </div>
            </div>
            <div className="CuBentoCard h-full w-full rounded-[14px]">
              <div>
                <Image
                  width={530}
                  height={260}
                  unoptimized
                  src="/images/internationally-compliant.avif"
                  alt="img"
                  className="rounded-[14px]"
                />
              </div>
              <div className="p-[30px]">
                <h4 className="mb-2 text-xl font-black leading-7">
                  Internationally compliant
                </h4>
                <p className="text-base font-medium leading-5">
                  Our unwavering commitment to international standards
                  guarantees your data is managed with exceptional care.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="CuBentoCard h-full w-full rounded-[14px]">
              <div>
                <Image
                  width={530}
                  height={260}
                  unoptimized
                  src="/images/loved-by-teams.avif"
                  alt="img"
                  className="rounded-[14px]"
                />
              </div>
              <div className="p-[30px]">
                <h4 className="mb-2 text-xl font-black leading-7 ">
                  Loved by all teams
                </h4>
                <p className="text-base font-medium leading-5">
                  Unmatched flexibility, standards, and scale to support any
                  team - no matter the size or complexity.
                </p>
              </div>
            </div>
            <div className="CuBentoCard h-full w-full rounded-[14px]">
              <div>
                <Image
                  width={530}
                  height={260}
                  unoptimized
                  src="/images/trusted-by-leadership.avif"
                  alt="img"
                  className="rounded-[14px]"
                />
              </div>
              <div className="p-[30px]">
                <h4 className="mb-2 text-xl font-black leading-7">
                  Trusted by leadership
                </h4>
                <p className="text-base font-medium leading-5">
                  Clear visibility from strategic plans to daily execution, for
                  a single source for updates, risks, and progress.
                </p>
              </div>
            </div>
            <div className="CuBentoCard h-full w-full rounded-[14px]">
              <div>
                <Image
                  width={530}
                  height={260}
                  unoptimized
                  src="/images/endorsed-by-it.png"
                  alt="img"
                  className="rounded-[14px]"
                />
              </div>
              <div className="p-[30px]">
                <h4 className="mb-2 text-xl font-black leading-7">
                  Internationally compliant
                </h4>
                <p className="text-base font-medium leading-5">
                  Our unwavering commitment to international standards
                  guarantees your data is managed with exceptional care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterpriseHero2;
