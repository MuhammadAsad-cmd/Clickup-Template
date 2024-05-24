import Image from "next/image";
import React from "react";

const Docs = () => {
  return (
    <>
      <div className="relative px-5">
        <Image
          width={500}
          height={500}
          unoptimized
          src="/images/docs.png"
          className="mx-auto h-full w-full max-w-[1078px]"
        />
        <div className="absolute -bottom-12 -left-12 hidden xl:block">
          <Image
            width={500}
            height={500}
            unoptimized
            src="/images/docs-sm.png"
            className="h-full max-h-[459px] w-full max-w-[525px]"
          />
        </div>
      </div>
    </>
  );
};

export default Docs;
