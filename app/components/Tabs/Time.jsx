import Image from "next/image";
import React from "react";

const Time = () => {
  return (
    <>
      <div className="relative px-5">
        <Image
          width={500}
          height={500}
          unoptimized
          src="/images/timetracking.png"
          className="h-full w-full max-w-[1078px] rounded-2xl border border-[black]"
        />
        <div className="absolute -bottom-12 -right-12 hidden xl:block">
          <Image
            width={500}
            height={500}
            unoptimized
            src="/images/timetracking-sm.png"
            className="h-full max-h-[573px] w-full max-w-[425px]"
          />
        </div>
      </div>
    </>
  );
};

export default Time;
