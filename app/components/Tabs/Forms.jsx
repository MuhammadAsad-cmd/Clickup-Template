import Image from "next/image";
import React from "react";

const Forms = () => {
  return (
    <>
      <div className="relative px-5">
        <Image
          width={500}
          height={500}
          unoptimized
          src="/images/forms.png"
          className="mx-auto h-full w-full max-w-[1078px]"
        />
        <div className="absolute -bottom-12 -right-12 hidden xl:block">
          <Image
            width={500}
            height={500}
            unoptimized
            src="/images/forms-sm.png"
            className="h-full max-h-[340px] w-full max-w-[600px]"
          />
        </div>
      </div>
    </>
  );
};

export default Forms;
