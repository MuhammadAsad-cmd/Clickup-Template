import Image from "next/image";
import React from "react";

const Chat = () => {
  return (
    <>
      <div className="relative px-5">
        <Image
          width={500}
          height={500}
          unoptimized
          src="/images/chat.png"
          className="mx-auto h-full w-full max-w-[1078px]"
        />
        <div className="absolute -right-12 bottom-10 hidden xl:block">
          <Image
            width={500}
            height={500}
            unoptimized
            src="/images/chat-sm.png"
            className="h-full max-h-[369px] w-full max-w-[375px]"
          />
        </div>
      </div>
    </>
  );
};

export default Chat;
