"use client";
import React, { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const ContactSalesModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div
        onClick={togglePopup}
        className="flex h-[46px] cursor-pointer items-center justify-center rounded-[14px] border border-[#CECEEA] bg-[rgba(255,255,255)] px-[5px]"
      >
        <div className="flex h-9 items-center justify-center rounded-lg px-3 hover:bg-[#F1F1F9]">
          <p>Contact Sales</p>
        </div>
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-30 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50">
          <div
            ref={popupRef}
            className="w-full max-w-[44rem] rounded-md bg-white p-[30px] text-[#24223E] shadow-lg"
          >
            <div className="mb-5 flex items-center justify-between">
              <div></div>
              <div>
                <h2 className="text-[32px] font-extrabold text-[#24223E]">
                  Contact Sales
                </h2>
              </div>
              <div
                onClick={togglePopup}
                className="CUcontactModalbtn flex h-[50px] w-[50px] cursor-pointer items-center justify-center duration-300 ease-in-out"
              >
                <RxCross1 className="text-3xl opacity-40" />
              </div>
            </div>

            <div className="w-full max-w-[600px] px-10 pt-10">
              <div className="mb-8 grid grid-cols-2 items-center">
                <label
                  for="FirstName"
                  id="LblFirstName"
                  className="flex items-start gap-1 text-base font-medium leading-6 text-black "
                >
                  First Name{" "}
                  <span className="text-lg font-bold text-[#d41b69]">*</span>
                </label>

                <input
                  id="FirstName"
                  name="FirstName"
                  type="text"
                  className="rounded-[.625rem] border border-[#b9bec7] bg-white px-4 py-2 text-sm leading-6 outline-none"
                />
              </div>
              <div className="mb-8 grid grid-cols-2 items-center">
                <label
                  for="LastName"
                  id="LblLastName"
                  className="flex items-start gap-1 text-base font-medium leading-6 text-black "
                >
                  Last Name{" "}
                  <span className="text-lg font-bold text-[#d41b69]">*</span>
                </label>

                <input
                  id="LastName"
                  name="LastName"
                  type="text"
                  className="rounded-[.625rem] border border-[#b9bec7] bg-white px-4 py-2 text-sm leading-6 outline-none"
                />
              </div>
              <div className="mb-8 grid grid-cols-2 items-center">
                <label
                  for="Email"
                  id="LblEmail"
                  className="flex items-start gap-1 text-base font-medium leading-6 text-black "
                >
                  Work Email{" "}
                  <span className="text-lg font-bold text-[#d41b69]">*</span>
                </label>

                <input
                  id="Email"
                  name="Email"
                  type="email"
                  className="rounded-[.625rem] border border-[#b9bec7] bg-white px-4 py-2 text-sm leading-6 outline-none"
                />
              </div>
              <div className="mb-8 grid grid-cols-2 items-center">
                <label
                  for="Phone"
                  id="LblPhone"
                  className="flex items-start gap-1 text-base font-medium leading-6 text-black "
                >
                  Phone{" "}
                  <span className="text-lg font-bold text-[#d41b69]">*</span>
                </label>

                <input
                  id="Phone"
                  name="Phone"
                  type="tel"
                  className="rounded-[.625rem] border border-[#b9bec7] bg-white px-4 py-2 text-sm leading-6 outline-none"
                />
              </div>
              <div className="mb-8 grid grid-cols-2 items-center">
                <label
                  for="Company"
                  id="LblCompany"
                  className="flex items-start gap-1 text-base font-medium leading-6 text-black "
                >
                  Company{" "}
                  <span className="text-lg font-bold text-[#d41b69]">*</span>
                </label>

                <input
                  id="Company"
                  name="Company"
                  type="text"
                  className="rounded-[.625rem] border border-[#b9bec7] bg-white px-4 py-2 text-sm leading-6 outline-none"
                />
              </div>
              <div className="mb-8 grid grid-cols-2 items-center">
                <label
                  for="Company"
                  id="LblCompany"
                  className="flex items-start gap-1 text-base font-medium leading-6 text-black "
                >
                  Number of Employees
                  <span className="text-lg font-bold text-[#d41b69]">*</span>
                </label>

                <select
                  id="countries"
                  className="cursor-pointer rounded-[.625rem] border border-[#b9bec7] bg-white px-4 py-2 text-base leading-6 outline-none"
                >
                  <option selected>Select...</option>
                  <option value="10">1-10</option>
                  <option value="25">11-25</option>
                  <option value="250">26-250</option>
                  <option value="500">251-500</option>
                  <option value="2,000">501-2,000</option>
                  <option value="2,001+">2,001+</option>
                </select>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="pr-7 text-[11px] leading-5 text-[#7c828d]">
                  By submitting my information, I confirm that I have read and
                  understood the ClickUp{" "}
                  <span className="cursor-pointer text-[#7b68ee] underline">
                    Privacy Policy.
                  </span>
                </div>
                <button className="flex h-[58px] items-center justify-center rounded-lg border border-[#7b68ee] bg-[#7b68ee] px-9 text-base font-medium leading-6 text-white">
                  Sumbit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactSalesModal;
