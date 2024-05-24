"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Productdropdown from "../Productdropdown/Productdropdown";
import SolutionsDropdown from "../SolutionsDropdown/SolutionsDropdown";
import Resources from "../Resources/Resources";
import Link from "next/link";
import ContactSalesModal from "../ContactSalesModal/ContactSalesModal";

const Header = () => {
  const [selectedTeam, setSelectedTeam] = useState("");

  const handleTeamClick = (team) => {
    if (selectedTeam === team) {
      // If the selected team is already the one clicked, close it
      setSelectedTeam("");
    } else {
      setSelectedTeam(team);
    }
  };

  return (
    <>
      <div className={`container mx-auto hidden max-w-[1160px] pt-5 lg:block`}>
        <div className={`flex items-center  justify-between px-5 xl:px-10`}>
          <div className="flex items-center gap-[10px]">
            <Link href="/">
              <div className="flex h-[46px] w-[124px] cursor-pointer items-center justify-center rounded-[14px] border border-[#CECEEA] bg-[rgba(255,255,255)] ">
                <Image
                  width={94}
                  height={23}
                  unoptimized
                  src="/images/logo-v3-clickup-light.svg"
                  alt="logo"
                  className=" rounded-[14px] px-2"
                />
              </div>
            </Link>
            <div className="flex h-[46px] cursor-pointer items-center justify-center gap-1 rounded-[14px] border border-[#CECEEA] bg-[rgba(255,255,255)] px-[5px]">
              <div
                onClick={() => handleTeamClick("Product")}
                className={`flex h-9 items-center justify-center gap-1 ${
                  selectedTeam === "Product"
                    ? "bg-[#F1F1F9] text-[rgba(36,34,62)]"
                    : "hover:bg-[#F1F1F9] hover:text-[rgba(36,34,62)]"
                }  rounded-lg px-3 `}
              >
                <p className="text-sm leading-6">Product</p>
                <IoIosArrowDown />
              </div>
              <div
                onClick={() => handleTeamClick("Solutions")}
                className={`flex h-9 items-center justify-center gap-1 ${
                  selectedTeam === "Solutions"
                    ? "bg-[#F1F1F9] text-[rgba(36,34,62)]"
                    : "hover:bg-[#F1F1F9] hover:text-[rgba(36,34,62)]"
                }  rounded-lg px-3 `}
              >
                <p className="text-sm leading-6">Solutions</p>
                <IoIosArrowDown />
              </div>
              <div
                onClick={() => handleTeamClick("Resources")}
                className={`flex h-9 items-center justify-center gap-1 ${
                  selectedTeam === "Resources"
                    ? "bg-[#F1F1F9] text-[rgba(36,34,62)]"
                    : "hover:bg-[#F1F1F9] hover:text-[rgba(36,34,62)]"
                }  rounded-lg px-3 `}
              >
                <p className="text-sm leading-6">Resources</p>
                <IoIosArrowDown />
              </div>
              <Link href="/pages/pricing">
                <div className="flex h-9 items-center justify-center rounded-lg px-3 hover:bg-[#F1F1F9]">
                  <p className="text-sm leading-6">Pricing</p>
                </div>
              </Link>
              <Link href="/pages/enterprise">
                <div className="hidden h-9 items-center justify-center rounded-lg px-3 hover:bg-[#F1F1F9] xl:flex">
                  <p className="text-sm leading-6">Enterprise</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <ContactSalesModal />
            <div className="flex min-h-[46px] w-[170px] items-center justify-center gap-1 rounded-[14px] border border-[#CECEEA] bg-[rgba(255,255,255)]">
              <Link href="/login">
                <div className="flex min-h-9 cursor-pointer items-center justify-center rounded-lg px-3 hover:bg-[#F1F1F9]">
                  <p>Log in</p>
                </div>
              </Link>
              <Link href="/signup">
                <div className="BG-Gradient flex min-h-9 cursor-pointer items-center justify-center rounded-lg px-3 font-medium text-white">
                  <p>Sign Up</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {selectedTeam && selectedTeam === "Solutions" && <SolutionsDropdown />}
      {selectedTeam && selectedTeam === "Product" && <Productdropdown />}
      {selectedTeam && selectedTeam === "Resources" && <Resources />}
    </>
  );
};

export default Header;
