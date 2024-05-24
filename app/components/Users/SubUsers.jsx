import Image from "next/image";
import React from "react";

const SubUsers = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-[30px] md:hidden">
        <div className="Card1">
          <div className="px-8 py-7">
            <h2 className="text-xl font-extrabold leading-7 text-white">
              AI-powered productivity
            </h2>
            <p className="mt-[9px] text-base font-medium leading-6 text-white">
              Get work done faster with the only AI-powered assistant tailored
              to your role.
            </p>
          </div>
          <div>
            <Image
              width={300}
              height={300}
              unoptimized
              src="/images/AI-powered-productivity.png"
              alt="Ai"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="Card2">
          <div className="px-8 py-7">
            <h2 className="text-xl font-extrabold leading-7 text-white">
              View work your way
            </h2>
            <p className="mt-[9px] text-base font-medium leading-6 text-white">
              Instantly switch between 15 views including list, board, gantt,
              and more.
            </p>
          </div>
          <div className="flex items-center justify-end">
            <Image
              width={340}
              height={318}
              unoptimized
              src="/images/view-work-your-way.png"
              className="h-full max-h-[236px] w-full max-w-[379px]"
              alt="card1"
            />
          </div>
        </div>
        <div className="Card3">
          <div className="px-8 py-7">
            <h3 className="text-xl font-extrabold leading-7 text-[rgb(255,255,255)]">
              Customize in a click
            </h3>
            <p className="mt-[9px] text-base font-medium leading-6 text-[rgb(255,255,255)]">
              Configuring ClickUp for different types of work is as easy as
              flipping a switch.
            </p>
          </div>
          <div className="">
            <ul>
              <li className="flex items-center justify-between py-5 pl-[43px] pr-[33px]">
                <div className="flex items-center">
                  <div className="mr-4">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7654 3.78787L13.7654 18.3985L23.6558 26.7861C23.6558 26.7861 30.8731 19.5126 26.5962 11.3638C22.052 2.7056 13.7654 3.78787 13.7654 3.78787Z"
                        fill="white"
                        fillOpacity="0.09"
                      ></path>
                      <path
                        d="M1.46997 16.886C1.46997 9.65208 7.3342 3.78784 14.5681 3.78784C21.802 3.78784 27.6662 9.65207 27.6662 16.886V17.2053C27.6662 24.4392 21.802 30.3035 14.5681 30.3035C7.3342 30.3035 1.46997 24.4392 1.46997 17.2053V16.886Z"
                        fill="white"
                        fillOpacity="0.09"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M13.7654 18.3984L17.5077 21.6453"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M13.7654 18.3984V10.2814"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M22.3207 2.16455C22.3207 2.16455 26.2221 1.78438 27.9342 3.51738C29.6464 5.25038 29.2709 9.19931 29.2709 9.19931"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <p className=" text-base font-medium leading-6 text-[rgb(255,255,255)]">
                    Time Tracking
                  </p>
                </div>
                <div>
                  <svg
                    width="59"
                    height="28"
                    viewBox="0 0 59 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.229004"
                      width="57.9749"
                      height="27.5627"
                      rx="13.7814"
                      fill="#020202"
                      fillOpacity="0.2"
                    ></rect>
                    <ellipse
                      cx="13.8444"
                      cy="13.7796"
                      rx="10.1017"
                      ry="10.2249"
                      fill="white"
                    ></ellipse>
                  </svg>
                </div>
              </li>
              <li className="flex items-center justify-between bg-[rgb(255,255,255)] py-5 pl-[43px] pr-[33px]">
                <div className="flex items-center">
                  <div className="mr-4">
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.8251 26.0653C28.4496 24.3615 29.2701 21.1502 29.2701 16.0373C29.2701 14.4988 29.0028 10.7402 29.0028 10.7402C29.0028 10.7402 24.1912 9.65796 15.37 9.65796C6.54884 9.65796 1.46999 10.7402 1.46999 10.7402L1.46997 16.0373C1.46997 21.251 2.32313 24.4577 2.95169 26.1127C3.31547 27.0706 4.06578 27.791 5.0489 28.0796C6.64554 28.5483 9.76856 29.1388 15.37 29.1388C20.8221 29.1388 23.9261 28.6051 25.5601 28.1642C26.6278 27.8762 27.4445 27.1036 27.8251 26.0653Z"
                        fill="#4AB9FD"
                        fillOpacity="0.1"
                      ></path>
                      <path
                        d="M29.2701 16.4467C29.2701 19.6188 29.1018 22.1179 28.8988 23.9787C28.6126 26.6016 26.6296 28.5367 24.0029 28.7854C21.9776 28.9771 19.1494 29.1388 15.37 29.1388C11.5906 29.1388 8.76247 28.9771 6.7372 28.7854C4.11045 28.5367 2.12743 26.6016 1.84125 23.9787C1.63823 22.1179 1.46997 19.6188 1.46997 16.4467C1.46997 14.2662 1.54948 12.3598 1.66513 10.7402C1.71832 9.99531 1.77916 9.31108 1.84342 8.68873C2.13403 5.87446 4.27775 3.76311 7.09526 3.50569C9.13588 3.31925 11.8813 3.16431 15.37 3.16431C18.8588 3.16431 21.6042 3.31925 23.6448 3.50569C26.4623 3.76311 28.606 5.87446 28.8966 8.68873C28.9609 9.31108 29.0217 9.99531 29.0749 10.7402C29.1906 12.3598 29.2701 14.2662 29.2701 16.4467Z"
                        fill="#4AB9FD"
                        fillOpacity="0.1"
                      ></path>
                      <path
                        d="M29.0749 10.7402C29.0217 9.99531 28.9609 9.31108 28.8966 8.68873C28.606 5.87446 26.4623 3.76311 23.6448 3.50569C21.6042 3.31925 18.8588 3.16431 15.37 3.16431C11.8813 3.16431 9.13588 3.31925 7.09526 3.50569C4.27775 3.76311 2.13403 5.87446 1.84342 8.68873C1.77916 9.31108 1.71832 9.99531 1.66513 10.7402M29.0749 10.7402C29.1906 12.3598 29.2701 14.2662 29.2701 16.4467C29.2701 19.6188 29.1018 22.1179 28.8988 23.9787C28.6126 26.6016 26.6296 28.5367 24.0029 28.7854C21.9776 28.9771 19.1494 29.1388 15.37 29.1388C11.5906 29.1388 8.76247 28.9771 6.7372 28.7854C4.11045 28.5367 2.12743 26.6016 1.84125 23.9787C1.63823 22.1179 1.46997 19.6188 1.46997 16.4467C1.46997 14.2662 1.54948 12.3598 1.66513 10.7402M29.0749 10.7402C29.0749 10.7402 23.9298 9.65793 15.37 9.65793C6.81023 9.65793 1.66513 10.7402 1.66513 10.7402"
                        stroke="#4AB9FD"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M7.92687 1C7.92687 1 7.88574 1.85679 7.88574 5.87022M22.8139 1C22.8139 1 22.855 1.85679 22.855 5.87022"
                        stroke="#4AB9FD"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M20.7158 18.8574L10.0235 18.8574M20.7158 18.8574L16.3691 23.1865M20.7158 18.8574L16.3691 14.5283"
                        stroke="#4AB9FD"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <p className=" text-base font-medium leading-6 text-[#4ab9fd]">
                    Sprints
                  </p>
                </div>
                <div>
                  <svg
                    width="60"
                    height="28"
                    viewBox="0 0 60 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.270996"
                      width="59.7292"
                      height="27.5627"
                      rx="13.7814"
                      fill="#4AB9FD"
                    ></rect>
                    <ellipse
                      cx="45.9789"
                      cy="13.7796"
                      rx="10.4074"
                      ry="10.2249"
                      fill="white"
                    ></ellipse>
                  </svg>
                </div>
              </li>
              <li className="flex items-center justify-between py-5 pl-[43px] pr-[33px]">
                <div className="flex items-center">
                  <div className="mr-4">
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.9778 5.89893L17.1578 2.03236C16.3176 1.18194 14.9554 1.18194 14.1153 2.03236L10.3449 5.8487C10.3449 5.8487 16.5961 8.55528 12.7763 12.4564C8.93989 16.3745 6.24813 9.99539 6.24813 9.99539L2.4778 13.8117C1.63763 14.6621 1.63763 16.0409 2.4778 16.8913L6.29781 20.7579C6.29781 20.7579 0.020418 23.423 3.92725 27.3429C7.81724 31.2459 10.433 24.9435 10.433 24.9435L14.253 28.8101C15.0932 29.6605 16.4553 29.6605 17.2955 28.81L21.0659 24.9937C21.0659 24.9937 14.8146 22.2871 18.6345 18.386C22.4709 14.4679 25.1626 20.847 25.1626 20.847L28.933 17.0307C29.7731 16.1803 29.7731 14.8015 28.933 13.9511L25.113 10.0845C25.113 10.0845 31.3903 7.41939 27.4835 3.49948C23.5935 -0.403535 20.9778 5.89893 20.9778 5.89893Z"
                        fill="white"
                        fillOpacity="0.09"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <p className=" text-base font-medium leading-6 text-[rgb(255,255,255)]">
                    Custom Fields
                  </p>
                </div>
                <div>
                  <svg
                    width="59"
                    height="28"
                    viewBox="0 0 59 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.229004"
                      width="57.9749"
                      height="27.5627"
                      rx="13.7814"
                      fill="#020202"
                      fillOpacity="0.2"
                    ></rect>
                    <ellipse
                      cx="13.8444"
                      cy="13.7796"
                      rx="10.1017"
                      ry="10.2249"
                      fill="white"
                    ></ellipse>
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="Card5">
          <div className="px-8 py-7">
            <h2 className="text-xl font-extrabold leading-7 text-white">
              Search everything
            </h2>
            <p className="mt-[9px] text-base font-medium leading-6 text-white">
              Find any file in ClickUp, a connected app, or your local drive,
              from one place.
            </p>
          </div>
          <div className="flex items-center justify-end">
            <Image
              width={340}
              height={318}
              unoptimized
              src="/images/search-everything.png"
              className="h-full max-h-[236px] w-full max-w-[379px]"
              alt="card1"
            />
          </div>
        </div>
        <div className="Card6">
          <div className="px-8 py-7">
            <h2 className="text-xl font-extrabold leading-7 text-white">
              Stay ahead of what’s next
            </h2>
            <p className="mt-[9px] text-base font-medium leading-6 text-white">
              Organize your work, reminders, and calendar events all from your
              personalized Home.
            </p>
          </div>
          <div className="flex items-center justify-end">
            <Image
              width={340}
              height={318}
              unoptimized
              src="/images/stay-ahead.png"
              className="h-full max-h-[236px] w-full max-w-[379px]"
              alt="card1"
            />
          </div>
        </div>
        <div className="Card7 relative hidden sm:block">
          <div className="Stars"></div>
          <div className="bgEarth"></div>
          <div>
            <p className="text-xl font-bold leading-7 text-white">
              Trusted by over 2,000,000 teams
            </p>{" "}
            <ul className="my-[30px] grid max-w-[360px] grid-cols-2 gap-5">
              <li>
                <h4 className="text-xl font-bold leading-[30px] text-white">
                  305M+
                </h4>
                <span className="text-base font-medium leading-8 text-[#5e6fac]">
                  Tasks completed
                </span>
              </li>
              <li>
                <h4 className="text-xl font-bold leading-[30px] text-white">
                  55M+
                </h4>
                <span className="text-base font-medium leading-8 text-[#5e6fac]">
                  Docs created
                </span>
              </li>
              <li>
                <h4 className="text-xl font-bold leading-[30px] text-white">
                  615M+
                </h4>
                <span className="text-base font-medium leading-8 text-[#5e6fac]">
                  Messages sent
                </span>
              </li>
              <li>
                <h4 className="text-xl font-bold leading-[30px] text-white">
                  11M+
                </h4>
                <span className="text-base font-medium leading-8 text-[#5e6fac]">
                  Automations created
                </span>
              </li>
            </ul>
            <button className="BtnMoon flex h-[50px] w-[341px] max-w-[341px] cursor-pointer items-center justify-center gap-[14px] py-3 text-sm font-medium text-white hover:bg-[#34406a]">
              <p>Join today for free</p>
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0957 6L1.0957 6M14.0957 6L9.25849 1.5M14.0957 6L9.25849 10.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubUsers;
