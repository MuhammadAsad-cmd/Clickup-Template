"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import { SlLockOpen } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";

const Signuppage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
              Already playing with ClickUp?
            </p>
            <Link href="/login">
              <button className="BtnSignup flex h-10 items-center justify-center rounded-[9px] bg-[#7b68ee] px-5 text-sm font-bold text-white">
                Login
              </button>
            </Link>
          </div>
        </div>

        <div className="login-page-new__mainlogin">
          <div className="login-page-new__main-bg"></div>
          <div className="login-page-new__main-container flex items-end gap-5">
            <div className="login-page-new__main-form">
              <div class="login-page-new__main-form-title-brand"></div>
              <h1 className="mb-5 text-center text-[32px] font-bold leading-[46px] text-[#292d34]">
                {" "}
                Seconds to sign up!
              </h1>
              <button className="mx-auto mb-4 flex h-10 w-full max-w-[320px] items-center justify-between rounded border border-[#dadce0] bg-white px-3 text-sm text-[#3c4043] hover:border-[#d2e3fc] md:max-w-[450px]">
                <div>
                  <Image
                    width={32}
                    height={32}
                    unoptimized
                    src="/images/google-removebg-preview (1).png"
                    alt="google"
                  />
                </div>
                <div>
                  <h2>Continue with Google</h2>
                </div>
                <div></div>
              </button>
              <div className="mx-auto mb-4 flex w-[320px] items-center justify-center gap-2 md:w-[380px]">
                <p className="h-[1px] w-[50%] bg-[#d6d9de]"></p>
                <span className="social-login-divider_text">OR</span>
                <p className="h-[1px] w-[50%] bg-[#d6d9de]"></p>
              </div>
              <form>
                <div className="relative mb-[26px] w-full">
                  <label
                    for="Full-Name-input"
                    className="block pb-2 text-[11px] font-normal leading-3 text-[#24223E]"
                  >
                    {" "}
                    Full Name
                  </label>
                  <input
                    id="Full-Name-input"
                    placeholder="John Doe"
                    type="text"
                    className="login-page-new__main-form-row cu-form__input  border-[#adb3bd] outline-none hover:border"
                  />
                  <div className="absolute left-[10px] top-8 h-5 w-5 text-[#b9bec7]">
                    <IoPersonOutline className="text-lg" />
                  </div>
                </div>
                <div className="relative mb-[26px] w-full">
                  <label
                    for="login-email-input"
                    className="block pb-2 text-[11px] font-normal leading-3 text-[#24223E]"
                  >
                    {" "}
                    Work Email{" "}
                  </label>
                  <input
                    id="login-email-input"
                    placeholder="Enter your work email"
                    type="email"
                    className="login-page-new__main-form-row cu-form__input  border-[#adb3bd] outline-none hover:border"
                  />
                  <div className="absolute left-[10px] top-8 h-5 w-5 text-[#b9bec7]">
                    <FiMail className="text-lg" />
                  </div>
                </div>
                <div className="relative mb-[26px] w-full">
                  <label
                    for="login-email-input"
                    className="block pb-2 text-[11px] font-normal leading-3 text-[#24223E]"
                  >
                    {" "}
                    Password
                  </label>
                  <input
                    id="login-password-input"
                    placeholder="Minimum 8 characters"
                    type={showPassword ? "text" : "password"}
                    autocorrect="off"
                    maxlength="256"
                    className="login-page-new__main-form-row cu-form__input  border-[#adb3bd] outline-none hover:border"
                  />
                  <div className="absolute left-[10px] top-8 h-5 w-5 text-[#b9bec7]">
                    <SlLockOpen className="text-lg" />
                  </div>
                  <button
                    className="absolute right-3 top-9 cursor-pointer text-xs font-medium text-[#7b68ee] hover:border-b hover:border-dashed hover:border-[#7b68ee]"
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    {" "}
                    {showPassword ? "Hide" : "Show"} Password
                  </button>
                </div>

                <button className="mb-[22px] flex h-[50px] w-full max-w-[400px] items-center justify-center rounded-[9px] bg-[#7b68ee] text-white hover:bg-[#5f48ea]">
                  Play with ClickUp
                </button>
              </form>
              <p className="cursor-pointer text-center text-xs font-normal leading-6 text-[#7b68ee] hover:underline">
                or login with SSO
              </p>
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
          <div className="z-50 mt-5 flex items-center justify-center">
            <Image
              width={60}
              height={15}
              src="/images/samsung.108728b84db4ae18.svg"
              alt="samsung"
              className="mx-[15px] my-[10px]"
            />
            <Image
              width={72}
              height={15}
              src="/images/booking-com.5fad4063445b4672.svg"
              alt="booking"
              className="mx-[15px] my-[10px]"
            />
            <Image
              width={42}
              height={15}
              src="/images/ibm.a46ba77b5d0c065a.svg"
              alt="ibm"
              className="mx-[15px] my-[10px]"
            />
            <Image
              width={39}
              height={15}
              src="/images/padres.fdacd062f4001223.svg"
              alt="padres"
              className="mx-[15px] my-[10px]"
            />
          </div>
          <p className="mt-[15px] text-xs font-bold leading-5 text-white opacity-60">
            {" "}
            See why 1,000,000+ teams are more productive with ClickUp{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Signuppage;
