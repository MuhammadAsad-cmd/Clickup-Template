import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1109px]">
        <div className="flex h-full w-full flex-row justify-center gap-6 overflow-x-auto">
          <div className="h-full">
            <Image
              width={124}
              height={16}
              unoptimized
              src="/images/fortnet.svg"
              alt="fortnet"
            />
          </div>
          <div className="h-full ">
            <Image
              width={105}
              height={27}
              unoptimized
              src="/images/logitech.svg"
              alt="logitech"
            />
          </div>
          <div className="h-full ">
            <Image
              width={132}
              height={23}
              unoptimized
              src="/images/booking.svg"
              alt="booking"
            />
          </div>
          <div className="h-full ">
            <Image
              width={64}
              height={26}
              unoptimized
              src="/images/imb.svg"
              alt="fortnet"
            />
          </div>
          <div className="h-full ">
            <Image
              width={80}
              height={22}
              unoptimized
              src="/images/tibco.svg"
              alt="fortnet"
            />
          </div>
          <div className="h-full ">
            <Image
              width={108}
              height={33}
              unoptimized
              src="/images/spotify.svg"
              alt="fortnet"
            />
          </div>
          <div className="h-full ">
            <Image
              width={90}
              height={25}
              unoptimized
              src="/images/netflix.svg"
              alt="fortnet"
            />
          </div>
          <div className="h-full ">
            <Image
              width={137}
              height={33}
              unoptimized
              src="/images/mobile.svg"
              alt="mobile"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
