"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, FreeMode } from "swiper/modules";

const CompanySwiper = () => {
  const slides = [
    {
      imageSrc: "/images/human-resources.png",
      title: "HR",
    },
    {
      imageSrc: "/images/finance.png",
      title: "Finance",
    },
    {
      imageSrc: "/images/remote-work.png",
      title: "Remote Work",
    },
    {
      imageSrc: "/images/website.png",
      title: "Website",
    },
    {
      imageSrc: "/images/real-estate.png",
      title: "Real Estate",
    },
    {
      imageSrc: "/images/podcasts.png",
      title: "Podcasts",
    },
    {
      imageSrc: "/images/project-management.png",
      title: "Project Management",
    },
    {
      imageSrc: "/images/engineering.png",
      title: "Engineering",
    },
    {
      imageSrc: "/images/sales.png",
      title: "Sales",
    },
    {
      imageSrc: "/images/marketing.png",
      title: "Marketing",
    },
    {
      imageSrc: "/images/design.png",
      title: "Design",
    },
  ];

  return (
    <>
      <div className="mt-[150px] flex flex-col items-center justify-center px-10">
        <div className="mb-[60px] text-center">
          <h2 className="whitespace-pre-wrap text-[41px] font-black leading-[51px]">
            Looking for a template?
          </h2>
          <p className="mt-2 text-[17px] font-medium leading-6">
            Select from hundreds of templates for any use case or easily create
            your own in ClickUp.
          </p>
        </div>
      </div>
      <div className="relative px-5 xl:px-10">
        <Swiper
          modules={[Navigation]}
          loop={true}
          freeMode={true}
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides
          navigation={{
            nextEl: ".Next",
            prevEl: ".Prev",
          }}
          allowTouchMove={false}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex w-full cursor-pointer flex-col justify-between rounded-[14px] border border-[#ceceea] bg-white lg:max-w-[345px]">
                <div className="image-container relative overflow-hidden rounded-t-[14px]">
                  <Image
                    width={300}
                    height={300}
                    unoptimized
                    src={slide.imageSrc}
                    className="h-full w-full rounded-t-[14px]"
                  />
                  <div className="overlay CuContentCard_linkOverlay___z5LW absolute inset-0  opacity-0 transition-opacity duration-300"></div>
                </div>
                <div className="p-[30px]">
                  <h2 className="z-20 mb-2 text-xl font-black leading-7">
                    {slide.title}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="Prev absolute left-14 top-36 z-50 flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[rgb(206,206,234)] bg-white">
          <FaArrowLeftLong />
        </button>
        <button className="Next absolute right-14 top-36 z-40 flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[rgb(206,206,234)] bg-white">
          <FaArrowRightLong />
        </button>
      </div>
    </>
  );
};

export default CompanySwiper;
