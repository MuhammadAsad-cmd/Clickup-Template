import Image from "next/image";
import React from "react";

const Whiteboards = () => {
  return (
    <>
      <div className="relative px-5">
        <Image
          width={500}
          height={500}
          unoptimized
          src="/images/whiteboard.png"
          className="mx-auto h-full w-full max-w-[1078px]"
        />
        <div className="absolute -bottom-12 -right-12 hidden xl:block">
          <Image
            width={500}
            height={500}
            unoptimized
            src="/images/whiteboard-sm.png"
            className="h-full max-h-[360px] w-full max-w-[525px]"
          />
        </div>
      </div>
    </>
  );
};

export default Whiteboards;
