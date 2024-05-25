import Image from "next/image";
import React from "react";
import Team from "./Team";
import CollabCard from "./CollabCard";

const Collaboration = () => {
  return (
    <>
      <div className="container mx-auto mt-14 max-w-[1080px] lg:mt-[200px]">
        <div className="flex flex-col items-center  justify-center px-10 text-center">
          <h2 className=" LeadHeight mb-[18px] max-w-[450px] text-[41px] font-black">
            Save time and get more done
          </h2>
          <p className="mb-8 max-w-[450px] text-[19px] font-medium leading-6 text-[rgb(36,34,62)]">
            Supercharge productivity. Streamline work by doing it, and seeing
            it, in one place.
          </p>
        </div>
      </div>

      <div className="container mx-auto mb-[100px] hidden max-w-[1160px] lg:block">
        <div className="mt-10 flex justify-between gap-12 pl-5 xl:gap-32">
          <div className="pt-10">
            <h3 className="Collab text-[34px] font-black leading-10">
              Improve collaboration
            </h3>
            <div>
              <div className="mt-3 max-w-[460px] text-[rgb(41,45,52)]">
                <div className="text-justify text-base leading-6">
                  <b className="">
                    Get your teams working together more closely, even if
                    they’re far apart.
                  </b>{" "}
                  Centralize project-related communications in one place,
                  brainstorm ideas with Whiteboards, and draft plans together
                  with collaborative Docs.
                </div>
              </div>
              <ul className="my-5 flex items-center gap-[6px]">
                <li className="bg-[rgb(255 255 255 / 20%)] rounded-lg border border-[#ceceea] px-[11px] py-1">
                  Comments
                </li>
                <li className="bg-[rgb(255 255 255 / 20%)] rounded-lg border border-[#ceceea] px-[11px] py-1">
                  Docs
                </li>
                <li className="bg-[rgb(255 255 255 / 20%)] rounded-lg border border-[#ceceea] px-[11px] py-1">
                  Whiteboards
                </li>
                <li className="bg-[rgb(255 255 255 / 20%)] rounded-lg border border-[#ceceea] px-[11px] py-1">
                  Clips
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="Heading3 text-[34px] font-black leading-normal">
                Enhance visibility
              </h3>
              <h3 className="Heading3 text-[34px] font-black leading-normal">
                Automate work
              </h3>
            </div>
          </div>
          <div className="SS relative h-auto max-w-[840px]">
            <div className="">
              <Image
                width={900}
                height={700}
                unoptimized
                src="/images/collaborate.png"
                alt="collborate"
                className="h-full max-h-[700px] w-full max-w-[900px] pt-8 xl:pl-8"
              />
            </div>
            <div className="absolute bottom-11 left-5 hidden xl:-left-32 xl:block">
              <Image
                width={352}
                height={379}
                unoptimized
                src="/images/collaborate-callout.png"
                alt="collborate"
              />
            </div>
          </div>
        </div>
      </div>
      <CollabCard />

      <div className="mt-12 flex flex-col-reverse items-center justify-center bg-[#fafaff] md:mt-0 lg:mt-[35px] lg:flex-col">
        <div className="my-8 flex flex-col items-center gap-2 px-16 text-center text-base font-extrabold leading-6 text-[#24223e] lg:flex-row">
          <p>
            Over 2+ million teams rely on ClickUp to collaborate and get work
            done.
          </p>
          <button className="flex h-[33px] items-center justify-center rounded-lg bg-[#f1f1f9] px-[10px] py-2">
            Join them
          </button>
        </div>
        <Team />
      </div>
    </>
  );
};

export default Collaboration;
