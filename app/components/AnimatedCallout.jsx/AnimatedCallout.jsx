import React from "react";

const AnimatedCallout = () => {
  return (
    <>
      <div className="CuHomeAnimatedCallout relative my-[134px] hidden lg:block">
        <div className="CuHomeAnimatedCallout_content">
          <div className="z-30 flex max-w-[1032px] flex-col items-center justify-center text-center">
            <h2 className="CuHomeAnimatedCallout_contentTitle mb-7 max-w-[550px] text-[41px]">
              Ready to unleash your team's full potential?
            </h2>
            <div className="mb-5 flex items-center justify-center gap-4">
              <button className="h-[63px] w-[276px] rounded-[14px] bg-white px-4 py-4 text-[23px] font-extrabold leading-4 text-[#3a27a9]">
                YES, lets do this
              </button>
              <button className="BtnCallout h-[63px] w-full max-w-[228px] border border-white px-8 py-4 text-[23px] font-extrabold leading-4 text-[#fff]">
                Show me more
              </button>
            </div>

            <div className="max-w-[584px] text-xl font-medium leading-6 text-[#8c5cc8]">
              <p>Free forever. No credit card required.</p>
              <p>Join 2+ million teams today!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedCallout;
