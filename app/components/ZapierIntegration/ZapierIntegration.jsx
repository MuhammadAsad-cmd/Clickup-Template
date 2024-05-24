import Image from "next/image";
import React from "react";
import { AutomaticData, ZapierData, integrationsData } from "./ZapierData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const ZapierIntegration = () => {
  return (
    <>
      <div className="container mx-auto mt-[50px] max-w-[1600px] text-[#292d34]">
        <div className="w-full">
          <div className="mx-5 flex flex-col items-center justify-center rounded-[5px] border border-[#e3e3e3] p-5">
            <div>
              <Image
                width={190}
                height={86}
                unoptimized
                src="/images/zapier3.png"
                alt="zapier"
                className="mb-5 cursor-pointer"
              />
            </div>
            <p className="flex flex-wrap items-center gap-1 text-wrap text-[13px] font-normal leading-5 text-[#000]">
              Love integrations? Hate technical API docs? Zapier gives you
              access to 1000+ apps with pre-existing and customizable
              integrations to help your team automate exactly what they need.
              <span className="flex cursor-pointer items-center gap-1 border-b border-[#7b68ee] text-[#7b68ee]">
                Read more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="11"
                  viewBox="0 0 11 11"
                  width="11"
                >
                  <path
                    clip-rule="evenodd"
                    d="m5 0-.875.875 3.5 3.5h-7.625v1.25h7.625l-3.5 3.5.875.875 5-5z"
                    fill="#806ef0"
                    fill-rule="evenodd"
                    transform="translate(.5 .5)"
                  />
                </svg>
              </span>
            </p>
            <div className="mx-auto mt-5 flex max-w-[900px] flex-wrap items-center justify-center gap-7 text-center">
              {ZapierData.map((item) => (
                <div className="mt-[10px] flex flex-col ">
                  <Image
                    width={74}
                    height={54}
                    unoptimized
                    src={item.image}
                    className="mx-auto mb-[10px]"
                    alt={item.alt}
                  />
                  <p className="text-[13px] font-normal">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 text-[#292d34]">
            <h3 className="mb-[10px] mt-[70px] text-center text-[40px] font-extrabold leading-[50px]">
              Automatic Import
            </h3>
            <p className="NativeText my-[15px] text-wrap px-6 text-center text-[19px] font-medium leading-[31px]">
              Bring everything from your previous project management app into
              ClickUp with just a few clicks!
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-center">
              {AutomaticData.map((auto) => (
                <div className="mx-5 flex cursor-pointer flex-col items-center justify-between rounded-[5px] border border-[#e3e3e3] px-5 pb-[30px] pt-5 lg:mx-0 lg:max-w-[374px]">
                  <h2 className="flex h-20 items-center justify-center text-[30px] font-bold leading-8">
                    {auto.label}
                  </h2>
                  <p className="my-[18px] text-base font-medium">
                    {auto.heading}
                  </p>
                  <p className="mb-6 text-[13px] leading-5 text-black text-opacity-80">
                    {auto.description}
                  </p>
                  <span className="flex cursor-pointer items-center gap-1 border-b border-dashed border-[#7b68ee] text-[13px] leading-5 text-[#7b68ee]">
                    Read more{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="11"
                      viewBox="0 0 11 11"
                      width="11"
                    >
                      <path
                        clip-rule="evenodd"
                        d="m5 0-.875.875 3.5 3.5h-7.625v1.25h7.625l-3.5 3.5.875.875 5-5z"
                        fill="#806ef0"
                        fill-rule="evenodd"
                        transform="translate(.5 .5)"
                      />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[#292d34]">
            <h3 className="mb-[10px] mt-[70px] text-center text-[40px] font-extrabold leading-[50px]">
              More Integrations
            </h3>
            <p className="NativeText my-[15px] text-wrap px-5 text-center text-[19px] font-medium leading-[31px]">
              The following companies have created integrations that connect
              with ClickUp's versatile features.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-center">
              {integrationsData.map((auto) => (
                <div className="group mx-5 flex h-[269px] cursor-pointer flex-col items-center justify-around rounded-[5px] border border-[#e3e3e3] px-5 pb-[30px] pt-5 lg:mx-0 lg:max-w-[374px]">
                  <Image
                    width={240}
                    height={100}
                    unoptimized
                    src={auto.pictureSrc}
                    alt={auto.pictureSrc}
                    className="object-contain duration-500 ease-in-out group-hover:scale-110"
                  />

                  <p className="my-[18px] text-base font-medium">
                    {auto.headerText}
                  </p>
                  <p className="mb-6 text-[13px] leading-5 text-black text-opacity-80">
                    {auto.contentText}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section_help-contacts_v2 container mx-auto my-[70px] max-w-[1220px]">
        <div className="relative flex flex-col justify-between md:px-10 lg:flex-row lg:items-center">
          <div className="p-7 md:p-11">
            <h2 className="mb-[30px] mt-[10px] text-[45px] font-extrabold leading-[69px] text-white">
              Got questions?
            </h2>
            <div className="h-[5px] w-[100px] rounded-[5px] bg-[#ffc800]"></div>
            <p className="my-[15px] text-sm font-normal leading-6 text-white text-opacity-50 lg:max-w-[366px]">
              Customer support is our highest priority. We're here to answer all
              your questions via our Support Docs, Video Demos, and 24/7 Live
              Chat.
            </p>
          </div>
          <div className="section_help-contacts_v3">
            <div className="hidden flex-wrap items-center gap-8 lg:flex">
              <div className="section_help-contacts_v4 p-4">
                <div>
                  <Image
                    width={190}
                    height={142}
                    src="/images/demo.png"
                    alt="Watch a Demo"
                  />
                </div>
                <button className="flex h-[50px] w-full cursor-pointer items-center justify-center rounded bg-[#7b68ee] text-center text-sm font-extrabold leading-4 text-white duration-300 ease-in-out hover:bg-[#533ae9]">
                  Watch a Demo
                </button>
              </div>
              <div className="section_help-contacts_v4 p-4">
                <div>
                  <Image
                    width={190}
                    height={142}
                    src="/images/call.png"
                    alt="call"
                  />
                </div>
                <button className="flex h-[50px] w-full cursor-pointer items-center justify-center rounded bg-[#fd71af] text-center text-sm font-extrabold leading-4 text-white duration-300 ease-in-out hover:bg-[#fc3f93]">
                  Get in Touch
                </button>
              </div>
              <div className="section_help-contacts_v4 p-4">
                <div>
                  <Image
                    width={190}
                    height={142}
                    src="/images/live-chat.png"
                    alt="caht"
                  />
                </div>
                <button className="flex h-[50px] w-full cursor-pointer items-center justify-center rounded bg-[#ffc800] text-center text-sm font-extrabold leading-4 text-white duration-300 ease-in-out hover:bg-[#ffb100]">
                  Connect in Support
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center pb-9 lg:hidden">
            <Swiper
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div className="section_help-contacts_v4 p-4">
                  <div>
                    <Image
                      width={190}
                      height={142}
                      src="/images/demo.png"
                      alt="Watch a Demo"
                    />
                  </div>
                  <button className="flex h-[50px] w-full cursor-pointer items-center justify-center rounded bg-[#7b68ee] text-center text-sm font-extrabold leading-4 text-white duration-300 ease-in-out hover:bg-[#533ae9]">
                    Watch a Demo
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="section_help-contacts_v4 p-4">
                  <div>
                    <Image
                      width={190}
                      height={142}
                      src="/images/call.png"
                      alt="call"
                    />
                  </div>
                  <button className="flex h-[50px] w-full cursor-pointer items-center justify-center rounded bg-[#fd71af] text-center text-sm font-extrabold leading-4 text-white duration-300 ease-in-out hover:bg-[#fc3f93]">
                    Get in Touch
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="section_help-contacts_v4 p-4">
                  <div>
                    <Image
                      width={190}
                      height={142}
                      src="/images/live-chat.png"
                      alt="caht"
                    />
                  </div>
                  <button className="flex h-[50px] w-full cursor-pointer items-center justify-center rounded bg-[#ffc800] text-center text-sm font-extrabold leading-4 text-white duration-300 ease-in-out hover:bg-[#ffb100]">
                    Connect in Support
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-[30px] bg-[#171f2d] p-[25px] md:flex-row">
        <p className="text-lg font-light text-[#fff]">
          Free forever with 100MB storage
        </p>
        <button className="flex h-[50px] w-[136px] items-center justify-center rounded bg-[#7b68ee] text-sm font-extrabold text-white hover:bg-[#5c4dbc]">
          Get Started
        </button>
      </div>

      <div className="border-b border-[#dedfe1] bg-[#fafbfc] px-6">
        <div className="container mx-auto  max-w-[1200px] py-[35px]">
          <div className="flex flex-wrap items-center gap-10 sm:justify-center lg:justify-between lg:gap-0">
            <div className="flex items-center justify-center gap-3">
              <div>
                <Image
                  width={45}
                  height={45}
                  unoptimized
                  src="/images/free-training.svg"
                  alt="free"
                />
              </div>
              <div>
                <p className="text-base leading-6 text-[#292d34]">
                  <b className="cursor-pointer hover:underline">
                    Free training
                  </b>
                  <span> & 24-hour support</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div>
                <Image
                  width={45}
                  height={45}
                  unoptimized
                  src="/images/security.svg"
                  alt="free"
                />
              </div>
              <div>
                <p className="text-base leading-6 text-[#292d34]">
                  <span> Serious about </span>
                  <b className="cursor-pointer hover:underline">
                    security & privacy
                  </b>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div>
                <Image
                  width={45}
                  height={45}
                  unoptimized
                  src="/images/uptime.svg"
                  alt="free"
                />
              </div>
              <div>
                <p className="text-base leading-6 text-[#292d34]">
                  <b className="cursor-pointer hover:underline">
                    Highest levels of uptime
                  </b>
                  <span> the last 12 months</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZapierIntegration;
