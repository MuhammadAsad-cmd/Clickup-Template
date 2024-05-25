import Image from "next/image";
import React from "react";
import { NativeData } from "./NativeData";

const NativeIntegration = ({ searchTerm }) => {
  // Filter the data based on the search term
  const filteredData = NativeData.filter(
    (data) =>
      data.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <div className="container mx-auto mt-[70px] max-w-[1080px] text-[#292d34] xl:max-w-[1600px]">
        <h2 className="text-center text-[40px] font-extrabold leading-[50px]">
          Native integrations
        </h2>
        <p className="NativeText my-4 text-center text-[19px] font-medium leading-8">
          Built by ClickUp, loved by everyone.
        </p>

        <div className="mx-5 grid grid-cols-1 items-center justify-center gap-[30px] md:grid-cols-2">
          {filteredData.map((data) => (
            <div
              key={data.id}
              className="group flex h-full flex-col items-center justify-between rounded-[5px] border border-[#e3e3e3] sm:flex-row lg:h-[208px]"
            >
              <div className="w-[50%] cursor-pointer pt-5">
                <Image
                  width={264}
                  height={189}
                  unoptimized
                  src={data.image}
                  alt={data.heading.toLowerCase()}
                  className="mx-auto object-contain duration-500 ease-in-out group-hover:scale-110 md:w-[70%]"
                />
              </div>
              <div className="px-5 py-5 pr-10 sm:w-[50%] md:px-0">
                <p className="mb-[18px] mt-[5px] text-base font-medium text-black">
                  {data.heading}
                </p>
                <p className="text-[13px] font-normal leading-5">
                  {data.description}
                </p>
                <p className="mt-4 max-w-20 cursor-pointer border-b border-dashed border-[#7b68ee] text-[13px] font-normal leading-5 text-[#7b68ee]">
                  Read more
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NativeIntegration;
