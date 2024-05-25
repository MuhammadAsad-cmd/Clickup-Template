import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiMail } from "react-icons/fi";

const page = () => {
  return (
    <>
      <div className="login-page-new">
        <div className="fixed inset-0 z-30 flex h-[100px] items-center justify-between px-5 lg:px-10">
          <div>
            <Link href="/">
              <Image
                width={124}
                height={30}
                unoptimized
                src="/images/clickone.svg"
                alt="logo"
                className="h-full"
              />
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <p className="hidden cursor-default text-sm font-normal leading-4 text-[#292d34] lg:block">
              {" "}
              Don't have an account?{" "}
            </p>
            <Link href="/signup">
              <button className="BtnSignup flex h-10 items-center justify-center rounded-[9px] bg-[#7b68ee] px-5 text-sm font-bold text-white">
                Sign up
              </button>
            </Link>
          </div>
        </div>

        <div className="login-page-new__mainlogin">
          <div className="login-page-new__main-bg"></div>
          <div className="login-page-new__main-container mt-10 flex items-end gap-5">
            <div className="login-page-new__main-form">
              <h1 className="mb-5 text-center text-3xl font-bold leading-[46px] text-[#292d34]">
                {" "}
                Forgot your password?
              </h1>

              <form>
                <div className="relative mb-[26px] w-full">
                  <label
                    for="login-email-input"
                    className="block pb-2 text-[11px] font-normal leading-3 text-[#24223E]"
                  >
                    {" "}
                    Email{" "}
                  </label>
                  <input
                    id="login-email-input"
                    placeholder="Enter your email"
                    type="email"
                    className="login-page-new__main-form-row cu-form__input  border-[#adb3bd] outline-none hover:border"
                  />
                  <div className="absolute left-[10px] top-8 h-5 w-5 text-[#b9bec7]">
                    <FiMail className="text-lg" />
                  </div>
                </div>
                <button className="mb-[22px] flex h-[50px] w-full  items-center justify-center rounded-[9px] bg-[#7b68ee] text-white hover:bg-[#5f48ea]">
                  Send me the link
                </button>
              </form>
              <Link href="/login">
                <p className="cursor-pointer text-center text-xs font-normal leading-6 text-[#7b68ee] hover:underline">
                  or sign in
                </p>
              </Link>
            </div>

            <div className="login-page-new__main-form-help z-50 hidden h-[50px] w-[50px] flex-shrink-0 cursor-pointer flex-col items-center justify-center rounded-md bg-[#ffffff29] text-[11px] font-bold leading-5 text-white hover:bg-[#ffffff4d] lg:flex">
              <svg
                width={16}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 6a6 6 0 016-6h4a6 6 0 016 6v4a6 6 0 01-6 6H6a6 6 0 01-6-6V6zm2 0a4 4 0 014-4h4a4 4 0 014 4v4a4 4 0 01-4 4H6a4 4 0 01-4-4V6zm5.117-.483c-.12.25-.34.483-.617.483H6c-.552 0-1.016-.46-.836-.982A3.001 3.001 0 0111 6c0 1.126-.62 1.863-1.538 2.308C9.192 8.44 9 8.7 9 9a1 1 0 01-2 0v-.5c0-.828.724-1.313 1.482-1.647C8.787 6.72 9 6.467 9 6a1 1 0 00-1-1c-.512 0-.761.262-.883.517zM8 13a1 1 0 100-2 1 1 0 000 2z"
                  fill="#fff"
                ></path>
              </svg>
              <p> Help </p>
            </div>
          </div>
          <p className="z-20 mt-7 text-sm leading-6 text-white">
            Don't have an account?{" "}
            <span className="underline">
              {" "}
              <Link href="/signup">Sign up </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
