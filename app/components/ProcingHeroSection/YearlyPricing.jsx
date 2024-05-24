import Image from "next/image";
import React from "react";

const YearlyPricing = () => {
  return (
    <>
      <div className="Pricing_pricingCard relative mt-3 hidden items-end justify-center lg:flex">
        <div className="Pricing_pricingCard1 h-[700px] w-[278px] bg-white px-[30px] py-[25px]">
          <p className="pricingCard1H1 text-xl font-black capitalize leading-7">
            free forever
          </p>
          <p className="mb-6 text-base leading-6 text-[#24223e]">
            Best for personal use
          </p>
          <button className="pricingCard1H1 text-[57px] font-extrabold leading-[42px]">
            FREE
          </button>
          <button className="pricingCard1button mb-6 mt-4 flex h-[43px] w-[218px] items-center justify-center px-8 text-base font-bold text-white">
            Free forever
          </button>

          <p className="mb-1 text-xs font-extrabold leading-4 text-[#24223e]">
            Key Features:
          </p>

          <div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                100MB Storage
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Unlimited Tasks
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Unlimited Free Plan Members
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Two-Factor Authentication
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Collaborative Docs
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Whiteboards
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Everything View
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Real-Time Chat
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Kanban Boards
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Sprint Management
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Calendar View
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Custom Field Manager Basic
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                In-App Video Recording
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                24/7 Support
              </button>
            </div>
          </div>
        </div>
        <div className="Pricing_pricingCard2 h-[700px] w-[278px] bg-white px-[30px] py-[25px]">
          <p className="pricingCardh2 text-xl font-black capitalize leading-7">
            Unlimited
          </p>
          <p className="mb-6 text-base leading-6 text-[#24223e]">
            Best for small teams
          </p>
          <div className="flex">
            <p className="pricingCardh2 text-[22px]"> $</p>
            <button className="pricingCardh2 text-[57px] font-extrabold leading-[42px]">
              7
            </button>
          </div>
          <div className="mb-6 mt-4">
            <button className="pricingCard2button flex h-[43px] w-[218px] items-center justify-center px-8 text-base font-bold text-white">
              Get Started
            </button>
            <p className="mt-2 text-center text-xs leading-4 text-[#7f76b3]">
              billed per user per month
            </p>
          </div>

          <p className="mb-1 text-xs font-extrabold leading-4 text-[#24223e]">
            Everything in Free Forever plus:
          </p>

          <div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Unlimited Storage
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Unlimited Integrations
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Unlimited Dashboards
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Guests with Permissions
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Unlimited Gantt Charts
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Unlimited Custom Fields
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Column Calculations
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Email in ClickUp
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Teams (User Groups)
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Native Time Tracking
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Goals & Portfolios
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Form View
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Resource Management
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Agile Reporting
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                AI Compatible
              </button>
            </div>
          </div>
        </div>
        <div className="Pricing_pricingCard3 w-[278px] rounded-t-[12px]  bg-white">
          <div className="PricingV3TierCard mx-auto mt-1 flex h-[31px] w-full max-w-[270px] items-center justify-center gap-1 rounded-t-[9px] text-xs uppercase text-white">
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.0183 2.5533C7.0183 2.5533 4.79367 0.10024 2.6647 0.861282C-2.04048 2.54324 4.46038 11.9817 7.0183 11.9817C9.57623 11.9817 15.9661 2.48112 11.2631 0.861282C9.16704 0.139358 7.0183 2.5533 7.0183 2.5533Z"
                fill="white"
                fill-opacity="0.2"
                stroke="white"
                stroke-width="0.866683"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p>Most Popular</p>
          </div>
          <div className="h-[700px] bg-white px-[30px] py-[25px]">
            <p className="pricingCardh3 text-xl font-black capitalize leading-7">
              Business
            </p>
            <p className="mb-6 text-base leading-6 text-[#24223e]">
              Best for mid-sized teams
            </p>
            <div className="flex">
              <p className="pricingCardh3 text-[22px]"> $</p>
              <button className="pricingCardh3 text-[57px] font-extrabold leading-[42px]">
                12
              </button>
            </div>
            <div className="mb-6 mt-4">
              <button className="pricingCard3button flex h-[43px] w-[218px] items-center justify-center px-8 text-base font-bold text-white">
                Get Started
              </button>
              <p className="mt-2 text-center text-xs leading-4 text-[#7f76b3]">
                billed per user per month
              </p>
            </div>

            <p className="mb-1 text-xs font-extrabold leading-4 text-[#24223e]">
              Everything in Unlimited, plus:
            </p>

            <div>
              <div className="flex items-center gap-[5px]">
                <Image
                  width={12}
                  height={12}
                  unoptimized
                  src="/images/Tick.svg"
                  alt="tick"
                />
                <button className="text-xs leading-6 text-[#24223e]">
                  Google SSO
                </button>
              </div>
              <div className="flex items-center gap-[5px]">
                <Image
                  width={12}
                  height={12}
                  unoptimized
                  src="/images/Tick.svg"
                  alt="tick"
                />
                <button className="text-xs leading-6 text-[#24223e]">
                  Unlimited Teams
                </button>
              </div>
              <div className="flex items-center gap-[5px]">
                <Image
                  width={12}
                  height={12}
                  unoptimized
                  src="/images/Tick.svg"
                  alt="tick"
                />
                <button className="text-xs leading-6 text-[#24223e]">
                  Custom Exporting
                </button>
              </div>
              <div className="flex items-center gap-[5px]">
                <Image
                  width={12}
                  height={12}
                  unoptimized
                  src="/images/Tick.svg"
                  alt="tick"
                />
                <button className="text-xs leading-6 text-[#24223e]">
                  Advanced Public Sharing
                </button>
              </div>
              <div className="flex items-center gap-[5px]">
                <Image
                  width={12}
                  height={12}
                  unoptimized
                  src="/images/Tick.svg"
                  alt="tick"
                />
                <button className="text-xs leading-6 text-[#24223e]">
                  Advanced Automations
                </button>
              </div>
              <div className="flex items-center gap-[5px]">
                <Image
                  width={12}
                  height={12}
                  unoptimized
                  src="/images/Tick.svg"
                  alt="tick"
                />
                <button className="text-xs leading-6 text-[#24223e]">
                  Advanced Dashboard Features
                </button>
              </div>
              <div className="flex items-center gap-[5px]">
                <Image
                  width={12}
                  height={12}
                  unoptimized
                  src="/images/Tick.svg"
                  alt="tick"
                />
                <button className="text-xs leading-6 text-[#24223e]">
                  Advanced Time Tracking
                </button>
              </div>
              <div className="flex items-center gap-[5px]">
                <Image
                  width={12}
                  height={12}
                  unoptimized
                  src="/images/Tick.svg"
                  alt="tick"
                />
                <button className="text-xs leading-6 text-[#24223e]">
                  Granular Time Estimates
                </button>
              </div>
              <div className="flex items-center gap-[5px]">
                <Image
                  width={12}
                  height={12}
                  unoptimized
                  src="/images/Tick.svg"
                  alt="tick"
                />
                <button className="text-xs leading-6 text-[#24223e]">
                  Timesheets
                </button>
              </div>
              <div className="flex items-center gap-[5px]">
                <Image
                  width={12}
                  height={12}
                  unoptimized
                  src="/images/Tick.svg"
                  alt="tick"
                />
                <button className="text-xs leading-6 text-[#24223e]">
                  Workload Management
                </button>
              </div>
              <div className="flex items-center gap-[5px]">
                <Image
                  width={12}
                  height={12}
                  unoptimized
                  src="/images/Tick.svg"
                  alt="tick"
                />
                <button className="text-xs leading-6 text-[#24223e]">
                  Timelines & Mind Maps
                </button>
              </div>
              <div className="flex items-center gap-[5px]">
                <Image
                  width={12}
                  height={12}
                  unoptimized
                  src="/images/Tick.svg"
                  alt="tick"
                />
                <button className="text-xs leading-6 text-[#24223e]">
                  Goal Folders
                </button>
              </div>
              <div className="flex items-center gap-[5px]">
                <Image
                  width={12}
                  height={12}
                  unoptimized
                  src="/images/Tick.svg"
                  alt="tick"
                />
                <button className="text-xs leading-6 text-[#24223e]">
                  AI Compatible
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Pricing_pricingCard4 h-[700px]  w-[278px] bg-white  px-[30px] py-[25px]">
          <p className="pricingCardh4 text-xl font-black capitalize leading-7">
            Enterprise
          </p>
          <p className="mb-6 text-base leading-6 text-[#24223e]">
            Best for many large teams
          </p>
          <p className="mb-7 text-xs leading-4 text-[#7f76b3]">
            Get a custom demo and see how ClickUp aligns with your goals
          </p>
          <button className="mb-6 mt-4 flex h-[43px] w-[218px] items-center justify-center rounded-[9px] bg-[#2c2a41] px-8 text-base font-bold text-white">
            Contact sales
          </button>

          <p className="mb-1 text-xs font-extrabold leading-4 text-[#24223e]">
            Everything in Business, plus:
          </p>

          <div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                White Labeling
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Advanced Permissions
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Conditional Logic in Forms
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Enterprise API
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Unlimited Custom Roles
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Team Sharing for Spaces
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Universal Search
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Default Personal Views
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                MSA & HIPAA Available
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Single Sign-On (SSO)
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                SCIM provisioning
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Custom Capacity in Workload
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Live Onboarding Training
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Customer Success Manager
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                Access to Managed Services
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                US, EU & APAC Data Residency
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                unoptimized
                src="/images/Tick.svg"
                alt="tick"
              />
              <button className="text-xs leading-6 text-[#24223e]">
                AI Compatible
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YearlyPricing;
