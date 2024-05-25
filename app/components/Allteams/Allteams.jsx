import React from "react";
import ClickUp from "./ClickUp";

const Allteams = () => {
  return (
    <>
      <div className="TeamContainer container mx-auto mt-14 w-full max-w-[1180px] overflow-x-auto lg:mt-[134px]">
        <div className="flex flex-col items-center justify-center text-ellipsis">
          <h2 className="Teams mb-5 text-center text-[41px] font-black ">
            All teams love ClickUp
          </h2>
          <div className="text-center font-medium leading-7 text-[rgba(36,34,62)]">
            <p>
              <strong>
                Teams love how ClickUp helps them get things done efficiently.
              </strong>{" "}
            </p>

            <p> But don’t take our word for it, hear it directly from them.</p>
          </div>
        </div>
      </div>
      <ClickUp />
    </>
  );
};

export default Allteams;
