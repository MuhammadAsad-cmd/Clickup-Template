import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="container mx-auto mb-20 mt-10 max-w-[1080px] xl:mt-28">
        <div className="flex flex-col items-center justify-center px-10">
          <div className="mb-5 flex max-w-[226px] items-center justify-center rounded-full bg-[rgb(36,34,62)] px-[10px] py-[5px] text-xs font-medium text-[rgb(255,255,255)]">
            Discover the all-new ClickUp 3.0 →
          </div>
          <h1 className="GradientText LineHeight mb-5 text-center text-[50px] font-black">
            One app to <br /> replace them all
          </h1>
          <div className="mb-6 text-center text-[rgba(36,34,62)]">
            <p className="text-[19px] leading-6">
              <strong>Get everyone working in a single platform</strong>
            </p>
            <p className="font-medium"> designed to manage any type of work.</p>
          </div>

          <button className="Bordered mb-4 flex h-[50px] w-full max-w-[262px] items-center justify-center gap-2 px-8 text-sm font-bold duration-200 ease-in-out lg:min-h-[66px] lg:max-w-[421px] lg:text-[23px]">
            Get Started. It's FREE
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 6L1.5 6M14.5 6L9.66279 1.5M14.5 6L9.66279 10.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>

          <div className="flex items-center justify-center gap-[10px] text-xs font-semibold leading-normal text-[rgb(36,34,62)]">
            <span>
              <svg
                width="22"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M.15 0h21.7v16.78c0 .412-.218.793-.573 1.002l-9.688 5.698a1.162 1.162 0 01-1.178 0L.723 17.782A1.163 1.163 0 01.15 16.78V0z"
                  fill="#FF492C"
                ></path>
                <path
                  d="M16.524 7.126H14.37c.058-.33.266-.513.69-.724l.398-.196c.71-.355 1.087-.754 1.087-1.407a1.13 1.13 0 00-.49-.97c-.318-.235-.709-.349-1.158-.349-.358 0-.683.09-.983.272a1.64 1.64 0 00-.651.691l.624.608c.242-.476.593-.71 1.055-.71.392 0 .631.197.631.469 0 .229-.116.418-.566.64l-.254.12c-.553.272-.938.584-1.16.938-.22.349-.332.799-.332 1.338v.146h3.262v-.87l.001.004zm-.288 1.871h-3.57l-1.783 3.008h3.569l1.784 3.01 1.785-3.01-1.785-3.008z"
                  fill="#fff"
                ></path>
                <path
                  d="M11.191 14.013c-2.272 0-4.12-1.8-4.12-4.012 0-2.213 1.848-4.013 4.12-4.013l1.412-2.874a7.478 7.478 0 00-1.412-.135c-3.982 0-7.21 3.143-7.21 7.02s3.228 7.02 7.21 7.02c1.588 0 3.055-.5 4.247-1.346l-1.563-2.635a4.167 4.167 0 01-2.684.972v.003z"
                  fill="#fff"
                ></path>
              </svg>
            </span>
            <span>
              Rated #1&nbsp;<b>Collaboration and Productivity</b>&nbsp;product
              2024
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
