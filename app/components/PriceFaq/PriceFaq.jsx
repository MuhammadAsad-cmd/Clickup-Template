import React from "react";

const PriceFaq = () => {
  return (
    <>
      <div className="mt-[160px] flex flex-col items-center justify-center text-center text-[#24223E]">
        <h2 className="text-[47px] font-black leading-[60px]">
          Frequently asked questions
        </h2>
        <p className="mb-[60px] mt-2 max-w-[575px] items-center text-lg leading-6">
          Find answers to your questions right here, and don't hesitate to{" "}
          <span className="text-[#7713fb]">contact us </span>
          if you couldn't find what you're looking for.
        </p>
      </div>
      <div className="container mx-auto max-w-[1109px] px-4 md:px-0">
        <div className="mb-[18px] grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          <div className="flex w-full flex-col gap-[18px] lg:max-w-[357px]">
            <div className="Pricingfaq rounded-[14px] border border-[#ceceea] p-[30px] text-[#24223E]">
              <h2 className="mb-2 text-lg font-black leading-6">
                Can I upgrade myself or do I have to upgrade my entire
                Workspace?
              </h2>
              <p className="text-sm leading-5">
                To upgrade ClickUp, you'll need to upgrade your entire
                Workspace, which means all members in your Workspace.
              </p>
            </div>

            <div className="Pricingfaq rounded-[14px] border border-[#ceceea] p-[30px] text-[#24223E]">
              <h2 className="mb-2 text-lg font-black leading-6">
                How am I billed when I add paid users to a Workspace?
              </h2>
              <p className="text-sm leading-5">
                ClickUp automatically bills you at a prorated price based on the
                time left in your cycle for any paid users added to your
                Workspace. Paid users include members and internal guests.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-[18px] lg:max-w-[357px]">
            <div className="Pricingfaq rounded-[14px] border border-[#ceceea] p-[30px] text-[#24223E]">
              <h2 className="mb-2 text-lg font-black leading-6">
                What payment methods do you accept?
              </h2>
              <p className="text-sm leading-5">
                We accept all major credit cards! For Enterprise orders meeting
                a minimum we also accept bank transfers.
              </p>
            </div>
            <div className="Pricingfaq rounded-[14px] border border-[#ceceea] p-[30px] text-[#24223E]">
              <h2 className="mb-2 text-lg font-black leading-6">
                What if I have multiple Workspaces?
              </h2>
              <p className="text-sm leading-5">
                Payment is per Workspace, meaning each Workspace requires an
                individual upgrade.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-[18px] lg:max-w-[357px]">
            <div className="Pricingfaq rounded-[14px] border border-[#ceceea] p-[30px] text-[#24223E]">
              <h2 className="mb-2 text-lg font-black leading-6">
                What is your refund policy?
              </h2>
              <p className="text-sm leading-5">
                We have a 100% satisfaction guarantee. If for any reason, you're
                not satisfied with your purchase, simply let us know within 30
                days and we'll be happy to issue you a full refund.
              </p>
            </div>
            <div className="Pricingfaq rounded-[14px] border border-[#ceceea] p-[30px] text-[#24223E]">
              <h2 className="mb-2 text-lg font-black leading-6">
                What happens if I cancel?
              </h2>
              <p className="text-sm leading-5">
                You're free to cancel at anytime! When you do, your current plan
                will last until the end of your billing cycle, unless you choose
                to downgrade immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceFaq;
