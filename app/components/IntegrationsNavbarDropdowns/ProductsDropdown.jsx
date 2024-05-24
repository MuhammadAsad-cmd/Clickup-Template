"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ProductsDropdown = ({ showProduct, toggleProducts }) => {
  return (
    <>
      <div
        onClick={toggleProducts}
        className="flex cursor-pointer items-center justify-between rounded-lg px-[11px] py-2 "
      >
        <p className="text-lg font-extrabold leading-6 text-[#292D34]">
          Product
        </p>
        <MdOutlineKeyboardArrowRight className="text-xl font-extrabold leading-6" />
      </div>
      {showProduct && (
        <div className="">
          <fieldset className="mb-7 flex w-full items-center justify-between rounded-[9px] border border-[#F248FF] py-5">
            <legend className="newText ml-1 flex h-[18px] w-[42px] items-center justify-center rounded-[10px] text-[10px] font-semibold uppercase">
              new
            </legend>
            <div className="px-3">
              <svg
                width="115"
                height="26"
                viewBox="0 0 115 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M9.31611 4.65343C4.318 6.81097 1.37045 11.843 3.43581 16.6175C5.50117 21.392 11.3838 23.1445 16.3819 20.9869C21.38 18.8294 25.0878 14.6509 22.0685 8.57433C20.0031 3.79981 14.3142 2.49589 9.31611 4.65343ZM14.8456 17.4355C12.5261 18.4368 8.09767 18.371 6.90644 15.6172C5.71521 12.8634 8.33907 8.75768 10.6586 7.75638C12.9782 6.75509 15.4328 8.52254 16.6241 11.2763C17.8153 14.0301 17.1652 16.4342 14.8456 17.4355Z"
                    fill="#78ffff"
                  ></path>
                </g>
                <g opacity="0.8">
                  <path
                    d="M3.97587 16.0622C5.73784 21.3773 11.291 24.6439 16.6126 22.8941C21.9343 21.1443 24.4429 15.2268 22.6809 9.91165C20.9189 4.59655 15.3657 1.3299 10.0441 3.07974C4.7225 4.82958 2.21389 10.7471 3.97587 16.0622ZM18.7225 11.2132C19.5402 13.6799 17.4132 19.7871 14.3439 20.7964C11.2746 21.8056 7.0108 18.9896 7.0038 15.3606C6.99681 11.7316 9.04757 10.4097 11.9485 9.44384C14.8493 8.47801 17.9048 8.74656 18.7225 11.2132Z"
                    fill="#FF02F0"
                  ></path>
                </g>
                <g opacity="0.5">
                  <path
                    d="M21.1287 17.0835C23.656 12.7061 22.527 7.00103 18.1539 4.46206C13.7808 1.92308 8.2848 3.78186 5.75751 8.15926C3.23021 12.5367 4.35917 18.2418 8.7323 20.7807C13.1054 23.3197 18.6014 21.4609 21.1287 17.0835ZM9.01041 10.0478C10.1833 8.01634 15.5782 5.78637 18.1005 7.25076C20.6227 8.71515 21.282 13.2803 18.8387 15.4624C16.3955 17.6446 14.2735 17.0548 11.8816 15.6779C9.4897 14.3011 7.83752 12.0794 9.01041 10.0478Z"
                    fill="#FF02F0"
                  ></path>
                </g>

                {/* ClickUp Text */}
                <path
                  d="M44.1181 6.11035H40.7573V19.5535H44.1181V6.11035Z"
                  fill="#292D34"
                ></path>
                <path
                  fillrule="evenodd"
                  cliprule="evenodd"
                  d="M34.3619 19.859C32.4457 19.859 30.8489 19.2284 29.5536 17.967C28.2584 16.6876 27.6196 15.0479 27.6196 13.0477C27.6196 11.0296 28.2761 9.37182 29.5714 8.07446C30.8843 6.75903 32.4812 6.11035 34.3797 6.11035C36.7217 6.11035 38.7977 7.13743 40.0041 8.74116L37.8927 10.9936C36.8813 9.89439 35.7814 9.3358 34.5926 9.3358C33.5812 9.3358 32.7473 9.67815 32.0554 10.3809C31.3811 11.0837 31.044 11.9666 31.044 13.0297C31.044 14.0568 31.3811 14.9218 32.0554 15.6245C32.7473 16.3092 33.5812 16.6516 34.5749 16.6516C35.8701 16.6516 37.0056 16.075 37.9459 14.9398L40.1462 17.0841C39.543 17.8949 38.7266 18.5616 37.7152 19.0842C36.7041 19.6068 35.5862 19.859 34.3619 19.859Z"
                  fill="#292D34"
                ></path>
                <path
                  fillrule="evenodd"
                  cliprule="evenodd"
                  d="M49.0064 7.23954C49.0064 8.20057 48.1859 8.97961 47.1734 8.97961C46.1609 8.97961 45.3401 8.20057 45.3401 7.23954C45.3401 6.27855 46.1609 5.49951 47.1734 5.49951C48.1859 5.49951 49.0064 6.27855 49.0064 7.23954ZM48.8654 9.78268H45.4811V19.5537H48.8654V9.78268Z"
                  fill="#292D34"
                ></path>
                <path
                  fillrule="evenodd"
                  cliprule="evenodd"
                  d="M55.0477 19.8588C53.5262 19.8588 52.3018 19.3736 51.34 18.4031C50.3955 17.4326 49.9231 16.1925 49.9231 14.6649C49.9231 13.1373 50.3955 11.8972 51.3573 10.9267C52.3194 9.9562 53.5611 9.47095 55.1002 9.47095C57.1117 9.47095 58.8779 10.4774 59.6999 12.3645L57.2339 13.6944C56.7442 12.8497 56.0623 12.4184 55.1702 12.4184C54.5232 12.4184 53.9983 12.634 53.5786 13.0653C53.1763 13.4967 52.9665 14.0358 52.9665 14.6649C52.9665 15.9768 53.8934 16.9473 55.1354 16.9473C56.0271 16.9473 56.8491 16.4441 57.199 15.6713L59.6651 17.181C58.8255 18.8344 57.0941 19.8588 55.0477 19.8588Z"
                  fill="#292D34"
                ></path>
                <path
                  fillrule="evenodd"
                  cliprule="evenodd"
                  d="M63.7725 6.11035H60.6165V19.5535H63.7725V16.1312L64.1422 15.7787L67.0273 19.5535H70.6988L66.2662 13.754L70.477 9.73997H66.6204L63.7725 12.455V6.11035Z"
                  fill="#292D34"
                ></path>
                <path
                  fillrule="evenodd"
                  cliprule="evenodd"
                  d="M71.3098 14.5363V6.11035H74.7048V14.3476C74.7048 15.8202 75.5651 16.5299 76.8094 16.5299C78.0356 16.5299 78.9141 15.7847 78.9141 14.3476V6.11035H82.3087V14.5363C82.3087 18.4041 79.5862 19.859 76.8094 19.859C74.0505 19.859 71.3098 18.4041 71.3098 14.5363Z"
                  fill="#292D34"
                ></path>
                <path
                  fillrule="evenodd"
                  cliprule="evenodd"
                  d="M89.4865 20.047C92.1029 20.047 94.2242 17.7479 94.2242 14.9118C94.2242 12.0757 92.1029 9.77661 89.4865 9.77661C88.42 9.77661 87.436 10.1586 86.644 10.8032V9.91176H83.5308V23.8308H86.644V19.0204C87.436 19.665 88.42 20.047 89.4865 20.047ZM86.644 14.9171V14.9065C86.6468 13.6401 87.6455 12.6145 88.8773 12.6145C90.111 12.6145 91.111 13.643 91.111 14.9118C91.111 16.1805 90.111 17.2091 88.8773 17.2091C87.6455 17.2091 86.6468 16.1834 86.644 14.9171Z"
                  fill="#292D34"
                ></path>
                <path
                  d="M106.503 20.1645H110.169L105.147 6.11035H101.824L96.6685 20.1645H100.354L101.194 17.5971H105.682L106.503 20.1645ZM104.822 14.5162H102.092L103.486 10.3513L104.822 14.5162Z"
                  fill="#292D34"
                ></path>
                <path
                  d="M111.41 6.11035V20.1645H115V6.11035H111.41Z"
                  fill="#292D34"
                ></path>

                <defs>
                  <linearGradient
                    id="paint0_linear_6094_84004"
                    x1="-17.6018"
                    y1="10.6195"
                    x2="9.33118"
                    y2="25.5626"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopcolor="#6F00FF"></stop>
                    <stop offset="1" stopcolor="#49CCF9"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_6094_84004"
                    x1="25.99"
                    y1="4.59746"
                    x2="2.73128"
                    y2="12.3078"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopcolor="#FF02F0"></stop>
                    <stop offset="1" stopcolor="#E922C5"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_6094_84004"
                    x1="0.188137"
                    y1="9.1162"
                    x2="19.3435"
                    y2="20.1756"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopcolor="#FF02F0"></stop>
                    <stop offset="1" stopcolor="#EDE4C3"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex items-center justify-center gap-2 px-4">
              <p className="text-sm font-semibold text-[#2a2e34]">
                AI Built For You
              </p>
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.999907 3.9979H12.5892L10.3005 1.70918C9.90997 1.31866 9.90997 0.685492 10.3005 0.294968C10.691 -0.0955561 11.3242 -0.0955554 11.7147 0.294969L15.7071 4.28737C15.9028 4.48307 16.0004 4.73971 16 4.9962C16.0004 5.25269 15.9028 5.50931 15.7071 5.705L11.7071 9.70497C11.3166 10.0955 10.6834 10.0955 10.2929 9.70497C9.9024 9.31445 9.9024 8.68128 10.2929 8.29076L12.5858 5.9979H0.999907C0.447622 5.9979 -9.34601e-05 5.55018 -9.34601e-05 4.9979C-9.34601e-05 4.44561 0.447622 3.9979 0.999907 3.9979Z"
                  fill="#FD71AF"
                ></path>
              </svg>
            </div>
          </fieldset>
          <div className="">
            <div className="flex items-center gap-[14px] rounded-[14px] border-b px-[18px] py-5 duration-500 ease-in-out hover:bg-[#00b884] hover:bg-opacity-20">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="24"
                  viewBox="0 0 27 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.4243 5H19.0724C20.2486 5 21.2021 5.89543 21.2021 7V17C21.2021 18.1046 20.2486 19 19.0724 19H8.4243C7.24814 19 6.29467 18.1046 6.29467 17V7C6.29467 5.89543 7.24814 5 8.4243 5ZM4.16504 7C4.16504 4.79086 6.07197 3 8.4243 3H19.0724C21.4248 3 23.3317 4.79086 23.3317 7V17C23.3317 19.2091 21.4248 21 19.0724 21H8.4243C6.07197 21 4.16504 19.2091 4.16504 17V7ZM18.7606 10.2071C19.1764 9.81658 19.1764 9.18342 18.7606 8.79289C18.3447 8.40237 17.6705 8.40237 17.2547 8.79289L12.6836 13.0858L10.2421 10.7929C9.82621 10.4024 9.15201 10.4024 8.73618 10.7929C8.32034 11.1834 8.32034 11.8166 8.73618 12.2071L11.9306 15.2071C12.3465 15.5976 13.0207 15.5976 13.4365 15.2071L18.7606 10.2071Z"
                    fill="#00B884"
                  ></path>
                </svg>
              </div>
              <div>
                <strong>Tasks</strong>
              </div>
            </div>
            <div className="flex cursor-pointer items-center gap-[14px] rounded-[14px] border-b px-[18px] py-5 duration-500 ease-in-out hover:bg-[#49CCF9] hover:bg-opacity-20">
              <div>
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.89206 3.41699C2.89206 2.81868 3.40852 2.33366 4.04561 2.33366H11.1648C11.4708 2.33366 11.7642 2.4478 11.9805 2.65096L16.3968 6.79842C16.6131 7.00159 16.7347 7.27714 16.7347 7.56446V18.5837C16.7347 19.182 16.2182 19.667 15.5811 19.667H4.04561C3.40852 19.667 2.89206 19.182 2.89206 18.5837V3.41699ZM4.04561 0.166992C2.13435 0.166992 0.584961 1.62207 0.584961 3.41699V18.5837C0.584961 20.3786 2.13435 21.8337 4.04561 21.8337H15.5811C17.4924 21.8337 19.0418 20.3786 19.0418 18.5837V7.56446C19.0418 6.7025 18.6772 5.87585 18.0282 5.26636L13.6119 1.11889C12.9629 0.509401 12.0826 0.166992 11.1648 0.166992H4.04561ZM6.35271 6.66699C5.71562 6.66699 5.19916 7.15202 5.19916 7.75033C5.19916 8.34863 5.71562 8.83366 6.35271 8.83366H9.81336C10.4504 8.83366 10.9669 8.34863 10.9669 7.75033C10.9669 7.15202 10.4504 6.66699 9.81336 6.66699H6.35271ZM6.35271 11.0003C5.71562 11.0003 5.19916 11.4854 5.19916 12.0837C5.19916 12.682 5.71562 13.167 6.35271 13.167H13.274C13.9111 13.167 14.4276 12.682 14.4276 12.0837C14.4276 11.4854 13.9111 11.0003 13.274 11.0003H6.35271ZM5.19916 16.417C5.19916 15.8187 5.71562 15.3337 6.35271 15.3337H13.274C13.9111 15.3337 14.4276 15.8187 14.4276 16.417C14.4276 17.0153 13.9111 17.5003 13.274 17.5003H6.35271C5.71562 17.5003 5.19916 17.0153 5.19916 16.417Z"
                    fill="#49CCF9"
                  ></path>
                </svg>
              </div>
              <div>
                <strong>Docs</strong>
              </div>
            </div>
            <div className="flex cursor-pointer items-center gap-[14px] rounded-[14px] border-b px-[18px] py-5 duration-500 ease-in-out hover:bg-[#FD71AF] hover:bg-opacity-20">
              <div className="items-start">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.69586 2.87085C3.45085 1.35934 4.7159 0 6.36757 0H15.3877C17.0394 0 18.3044 1.35934 18.0594 2.87085L17.9163 3.75358C20.3575 3.85431 22.0749 6.06129 21.3638 8.2545C20.5501 10.7646 18.2646 12.628 15.4712 13.0588L15.4599 13.0605C14.6272 13.9511 13.4996 14.591 12.2284 14.8596V17.5H14.93C15.6761 17.5 16.2808 18.0596 16.2808 18.75C16.2808 19.4404 15.6761 20 14.93 20H12.2284H9.52684H6.82524C6.07921 20 5.47444 19.4404 5.47444 18.75C5.47444 18.0596 6.07921 17.5 6.82524 17.5H9.52684V14.8596C8.25566 14.591 7.12805 13.9511 6.29536 13.0605L6.2841 13.0588C3.4907 12.628 1.20519 10.7646 0.391439 8.2545C-0.319581 6.06129 1.39778 3.85431 3.83895 3.75358L3.69586 2.87085ZM4.24361 6.25H4.01319C3.29 6.25 2.7713 6.89512 2.9791 7.53613C3.29497 8.51043 3.95935 9.33159 4.833 9.88607L4.24361 6.25ZM16.9223 9.88607L17.5117 6.25H17.7421C18.4653 6.25 18.984 6.89512 18.7762 7.53613C18.4603 8.51043 17.7959 9.33159 16.9223 9.88607ZM15.3877 2.5L6.36757 2.5L7.55996 9.85606C7.8063 11.3758 9.21703 12.5 10.8776 12.5C12.5383 12.5 13.949 11.3758 14.1953 9.85606L15.3877 2.5Z"
                    fill="#FD71AF"
                  ></path>
                </svg>
              </div>
              <div>
                <strong>Goals</strong>
              </div>
            </div>
            <div className="flex cursor-pointer items-center gap-[14px] rounded-[14px] border-b px-[18px] py-5 duration-500 ease-in-out hover:bg-[#5577FF] hover:bg-opacity-20">
              <div className="items-start">
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.2896 1.29079C19.5371 0.119217 21.5597 0.119215 22.8072 1.29079C24.0547 2.46236 24.0547 4.36186 22.8072 5.53343L18.0635 9.98843C17.7306 10.301 17.2969 10.5012 16.83 10.5578L15.1011 10.7672C13.7169 10.9349 12.538 9.82774 12.7166 8.52779L12.9396 6.90414C12.9998 6.46572 13.213 6.05838 13.5458 5.74579L18.2896 1.29079ZM21.3013 2.705C20.8855 2.31448 20.2113 2.31448 19.7955 2.705L15.0517 7.16001L14.8287 8.78365L16.5576 8.57422L21.3013 4.11922C21.7172 3.72869 21.7172 3.09553 21.3013 2.705ZM3.83761 2.58367C3.10251 2.58367 2.50659 3.14331 2.50659 3.83367V6.35682L4.1945 4.94778C5.34486 3.98748 7.04959 3.90224 8.30203 4.74239C10.0245 5.89782 10.1582 8.25641 8.57615 9.57709L7.61393 10.3803C7.12901 10.7851 7.10696 11.4898 7.56573 11.9206C8.00609 12.3342 8.72006 12.3342 9.16042 11.9206L10.2722 10.8766C10.688 10.486 11.3622 10.486 11.778 10.8766C12.1939 11.2671 12.1939 11.9002 11.778 12.2908L10.6663 13.3349C9.39426 14.5295 7.33189 14.5295 6.05985 13.3349C4.73464 12.0903 4.79833 10.0548 6.19908 8.88551L7.1613 8.08227C7.72165 7.61449 7.67429 6.7791 7.06421 6.36985C6.6206 6.07228 6.0168 6.10247 5.60935 6.4426L2.50659 9.03273V14.3337C2.50659 15.024 3.10251 15.5837 3.83761 15.5837H18.2126C18.9477 15.5837 19.5436 15.024 19.5436 14.3337V11.2087C19.5436 10.6564 20.0204 10.2087 20.6084 10.2087C21.1965 10.2087 21.6733 10.6564 21.6733 11.2087V14.3337C21.6733 16.1286 20.1239 17.5837 18.2126 17.5837H3.83761C1.92635 17.5837 0.376965 16.1286 0.376965 14.3337V8.58867C0.376949 8.58558 0.376949 8.58248 0.376965 8.57938V3.83367C0.376965 2.03874 1.92635 0.583667 3.83761 0.583667H13.4451C14.0332 0.583667 14.51 1.03138 14.51 1.58367C14.51 2.13595 14.0332 2.58367 13.4451 2.58367H3.83761Z"
                    fill="#5577FF"
                  ></path>
                </svg>
              </div>
              <div>
                <strong>Whiteboards</strong>
              </div>
            </div>
            <div className="flex cursor-pointer items-center gap-[14px] rounded-[14px] border-b px-[18px] py-5 duration-500 ease-in-out hover:bg-[#7B68EE] hover:bg-opacity-20">
              <div>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.23047"
                    y="1"
                    width="7.5207"
                    height="9.17647"
                    rx="1"
                    stroke="#7B68EE"
                    stroke-width="2"
                  ></rect>
                  <rect
                    x="11.9414"
                    y="9.94141"
                    width="7.5207"
                    height="9.17647"
                    rx="1"
                    stroke="#7B68EE"
                    stroke-width="2"
                  ></rect>
                  <rect
                    x="11.9414"
                    y="1"
                    width="7.5207"
                    height="5.82353"
                    rx="1"
                    stroke="#7B68EE"
                    stroke-width="2"
                  ></rect>
                  <rect
                    x="1.23047"
                    y="13.2939"
                    width="7.5207"
                    height="5.82353"
                    rx="1"
                    stroke="#7B68EE"
                    stroke-width="2"
                  ></rect>
                </svg>
              </div>
              <div>
                <strong>Dashboards</strong>
              </div>
            </div>
            <div className="flex cursor-pointer items-center gap-[14px] rounded-[14px] border-b px-[18px] py-5 duration-500 ease-in-out hover:bg-[#FFC800] hover:bg-opacity-20">
              <div className="items-start">
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.3633 0.282602C10.9813 0.427713 11.3571 1.01589 11.2026 1.59634L10.2632 5.12526H15.9599L17.0392 1.07084C17.1937 0.490398 17.82 0.137491 18.4381 0.282602C19.0562 0.427713 19.432 1.01589 19.2774 1.59634L18.338 5.12526H22.1958C22.8328 5.12526 23.3493 5.61028 23.3493 6.20859C23.3493 6.8069 22.8328 7.29192 22.1958 7.29192H17.7613L16.3193 12.7086H19.8887C20.5257 12.7086 21.0422 13.1936 21.0422 13.7919C21.0422 14.3902 20.5257 14.8753 19.8887 14.8753H15.7425L14.6632 18.9297C14.5087 19.5101 13.8824 19.863 13.2644 19.7179C12.6463 19.5728 12.2705 18.9846 12.425 18.4042L13.3644 14.8753H7.6677L6.5884 18.9297C6.43388 19.5101 5.80758 19.863 5.18952 19.7179C4.57145 19.5728 4.19567 18.9846 4.35019 18.4042L5.2896 14.8753H1.43187C0.794782 14.8753 0.27832 14.3902 0.27832 13.7919C0.27832 13.1936 0.794782 12.7086 1.43187 12.7086H5.86637L7.30831 7.29192H3.73905C3.10196 7.29192 2.5855 6.8069 2.5855 6.20859C2.5855 5.61028 3.10196 5.12526 3.73905 5.12526H7.88508L8.96438 1.07084C9.1189 0.490398 9.7452 0.137491 10.3633 0.282602ZM9.68641 7.29192L8.24447 12.7086H13.9412L15.3832 7.29192H9.68641Z"
                    fill="#FFC800"
                  ></path>
                </svg>
              </div>
              <div>
                <strong>Chat</strong>
              </div>
            </div>
          </div>
          <button className="mt-5 flex h-11 w-full items-center justify-center gap-5 rounded-xl bg-[#7B68EE] bg-opacity-10 text-sm font-medium leading-6">
            <strong>See All Features</strong>{" "}
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.999907 3.99582H12.5892L10.3005 1.70711C9.90997 1.31658 9.90997 0.683417 10.3005 0.292893C10.691 -0.0976314 11.3242 -0.0976307 11.7147 0.292894L15.7071 4.2853C15.9028 4.481 16.0004 4.73763 16 4.99413C16.0004 5.25061 15.9028 5.50723 15.7071 5.70293L11.7071 9.7029C11.3166 10.0934 10.6834 10.0934 10.2929 9.7029C9.9024 9.31237 9.9024 8.67921 10.2929 8.28868L12.5858 5.99582H0.999907C0.447622 5.99582 -9.34601e-05 5.5481 -9.34601e-05 4.99582C-9.34601e-05 4.44354 0.447622 3.99582 0.999907 3.99582Z"
                fill="#7B68EE"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default ProductsDropdown;
