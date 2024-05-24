import Image from "next/image";
import React from "react";

const Featuretask = () => {
  return (
    <>
      <div data-testid="cu-header" class="default">
        <div
          class="CuHeaderBlob_wrapper__KLBAh default"
          data-testid="cu-header-blob"
        >
          <div class="CuHeaderBlob_blob__RmLwX CuHeaderBlob_default__IoIWy"></div>
        </div>
      </div>

      <main>
        <div className="container relative mx-auto max-w-[1160px] pt-[60px] text-[#24223E]">
          <div className="mb-[100px] flex flex-col justify-between px-3 sm:flex-col-reverse lg:flex-row xl:px-10">
            <div className="lg:max-w-[440px]">
              <h1 className="text-4xl font-extrabold leading-[50px] max-md:text-center lg:text-[50px] lg:leading-[70px]">
                Get more done with ClickUp tasks.
              </h1>
              <p className="mb-[60px] mt-4 font-normal leading-6 max-md:text-center">
                Plan, organize, and collaborate on any project with task
                management that can be customized for every need.
              </p>

              <input
                type="email"
                placeholder="Enter your work email"
                className="h-14 w-full rounded-[9px] border border-[rgb(185,190,199)] text-sm font-normal leading-6 outline-none sm:max-w-[360px] sm:px-5"
              />

              <div className="mb-14 mt-6 flex items-center gap-5">
                <button className="FormBtn h-14 w-full rounded-[9px] bg-[#7B68Bb] text-base font-bold text-white sm:w-[148px]">
                  Get Started
                </button>
                <div className="hidden sm:block">
                  <p className="text-sm font-bold uppercase leading-5 tracking-wider text-[#B9BEc7]">
                    Free forever.
                  </p>
                  <p className="text-sm font-bold uppercase leading-5 tracking-wider text-[#B9BEc7]">
                    No credit card.
                  </p>
                </div>
              </div>

              <div className="mb-4 flex items-center">
                <div>
                  <Image
                    width={100}
                    height={15}
                    unoptimized
                    src="/images/stars.png"
                    alt="stars"
                  />
                </div>
                <p className="text-xs leading-5 text-[#7C828C]">
                  Based on 10,000+ reviews on
                </p>
              </div>
              <div className="flex items-center gap-[18px]">
                <Image
                  width={63}
                  height={17}
                  unoptimized
                  src="/images/g2crowd.png"
                  alt="crowd"
                />
                <Image
                  width={70}
                  height={17}
                  unoptimized
                  src="/images/capterra.png"
                  alt="crowd"
                />
                <Image
                  width={77}
                  height={17}
                  unoptimized
                  src="/images/getapp.svg"
                  alt="crowd"
                />
                <Image
                  width={89}
                  height={17}
                  unoptimized
                  src="/images/trustradius.png"
                  alt="crowd"
                />
              </div>
            </div>
            <div className="CuAnimation_wrapper__yn5y3">
              <video
                width="604"
                height="401"
                autoPlay
                muted
                loop
                className="h-full w-full rounded-[20px] object-cover lg:max-h-[401px] lg:max-w-[604px]"
              >
                <source src="/images/projects_tasks.mp4" type="video/mp4" />
                <track src="/path/to/captions.vtt" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="">
            <h3 className="mb-5 text-center text-xs font-bold leading-5 tracking-wide text-[#7C828C]">
              Join 2 Million Highly Productive Teams
            </h3>
          </div>
        </div>
        <div className="flex h-full w-full flex-row flex-wrap items-center justify-center">
          <div className="flex h-20 w-[156px] items-center justify-center">
            <Image
              width={124}
              height={16}
              unoptimized
              src="/images/booking_com.svg"
              alt="fortnet"
            />
          </div>
          <div className="flex h-20 w-[156px] items-center justify-center ">
            <Image
              width={105}
              height={27}
              unoptimized
              src="/images/logitech2.svg"
              alt="logitech"
            />
          </div>
          <div className="flex h-20 w-[156px] items-center justify-center ">
            <Image
              width={132}
              height={23}
              unoptimized
              src="/images/tibco2.svg"
              alt="booking"
            />
          </div>
          <div className="flex h-20 w-[156px] items-center justify-center ">
            <Image
              width={64}
              height={26}
              unoptimized
              src="/images/ibm.svg"
              alt="fortnet"
            />
          </div>
          <div className="flex h-20 w-[156px] items-center justify-center ">
            <Image
              width={80}
              height={22}
              unoptimized
              src="/images/fortinet.svg"
              alt="fortnet"
            />
          </div>
          <div className="flex h-20 w-[156px] items-center justify-center ">
            <Image
              width={108}
              height={33}
              unoptimized
              src="/images/spotify_logo_with_text.svg"
              alt="fortnet"
            />
          </div>
          <div className="flex h-20 w-[156px] items-center justify-center ">
            <Image
              width={90}
              height={25}
              unoptimized
              src="/images/netflix.svg"
              alt="fortnet"
            />
          </div>
          <div className="flex h-20 w-[156px] items-center justify-center ">
            <Image
              width={137}
              height={33}
              unoptimized
              src="/images/t-mobile_logo.svg"
              alt="mobile"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Featuretask;
