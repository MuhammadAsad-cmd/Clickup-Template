"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import ProductsDropdown from "../IntegrationsNavbarDropdowns/ProductsDropdown";
import SolutionsNavbar from "../IntegrationsNavbarDropdowns/SolutionsNavbar";
import LearnDropdown from "../IntegrationsNavbarDropdowns/LearnDropdown";

const RightSidebar = React.forwardRef(
  (
    {
      handleClose,
      isOpen,
      showProduct,
      toggleProducts,
      toggleSolutions,
      SolutionProduct,
      LearnProduct,
      toggleLearn,
    },
    ref,
  ) => {
    return (
      <>
        <div
          ref={ref}
          className={`right-sidebar fixed right-0 top-0 h-full w-full max-w-[375px] transform overflow-auto bg-white px-6 pt-[35px] shadow-lg ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } z-50 transition-transform duration-300 ease-in-out`}
        >
          <div className="mb-[30px] flex items-center justify-between ">
            <Image
              width={123}
              height={30}
              unoptimized
              src="/images/logo-clickup_color.svg"
              alt="logo"
            />
            <button onClick={handleClose} className="text-2xl">
              <RxCross2 />
            </button>
          </div>

          <div className="space-y-3">
            <ProductsDropdown
              toggleProducts={toggleProducts}
              showProduct={showProduct}
            />
            <SolutionsNavbar
              toggleSolutions={toggleSolutions}
              SolutionProduct={SolutionProduct}
            />
            <LearnDropdown
              LearnProduct={LearnProduct}
              toggleLearn={toggleLearn}
            />

            <div className="flex cursor-pointer items-center justify-between rounded-lg px-[11px] py-2 ">
              <p className="text-lg font-extrabold leading-6 text-[#292D34]">
                Pricing
              </p>
            </div>
            <div className="flex cursor-pointer items-center justify-between rounded-lg px-[11px] py-2 ">
              <p className="text-lg font-extrabold leading-6 text-[#292D34]">
                Enterprise
              </p>
            </div>
            <div className="flex cursor-pointer items-center justify-between rounded-lg px-[11px] py-2 ">
              <p className="text-lg font-extrabold leading-6 text-[#292D34]">
                Contact Sales
              </p>
            </div>

            <Link href="/signup">
              <div className="mb-6 mt-[10px]  flex h-[50px] w-full cursor-pointer items-center justify-center rounded-lg bg-[#7b68ee] font-medium text-white">
                <p>Sign Up</p>
              </div>
            </Link>
            <Link href="/login">
              <div
                className={`flex h-[50px] w-full cursor-pointer items-center justify-center rounded-lg bg-[#e8eaf0] font-medium text-[#292D34]`}
              >
                <p>Log in</p>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  },
);
RightSidebar.displayName = "RightSidebar";

export default RightSidebar;
