import Image from "next/image";
import React from "react";

const AI = () => {
  return (
    <>
      <div className="relative px-5">
        <Image
          width={500}
          height={500}
          unoptimized
          src="/images/ai.png"
          className="mx-auto h-full w-full max-w-[1078px]"
        />
        <div className="absolute -bottom-12 -right-12 hidden xl:block">
          <Image
            width={500}
            height={500}
            unoptimized
            src="/images/ai-sm.png"
            className="h-full max-h-[502px] w-full max-w-[650px]"
          />
        </div>
      </div>
    </>
  );
};

export default AI;
