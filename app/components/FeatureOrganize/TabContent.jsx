import Image from "next/image";
import React from "react";

const TabContent = ({ heading, description, image }) => {
  return (
    <>
      <div className="flex flex-col-reverse gap-8 px-5 lg:flex-row lg:px-20">
        <div className="">
          <h2 className="text-start text-3xl font-extrabold leading-[54px] text-[#333333] lg:text-4xl">
            {heading}
          </h2>
          <p className="my-10 hidden h-[5px] w-[100px] rounded-md bg-[#7b68ee] lg:block"></p>
          <p className="mt-10 w-[440px] text-start text-base leading-6 text-[#292D34] lg:mt-0">
            {description}
          </p>
        </div>
        <div className="">
          <Image
            width={600}
            height={500}
            unoptimized
            src={image}
            alt="task"
            className="h-full w-full"
          />
        </div>
      </div>
    </>
  );
};

export default TabContent;
