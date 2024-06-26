import React from "react";

const TeamTabgradient = () => {
  return (
    <>
      <svg
        className={`absolute -z-20 `}
        xmlns="http://www.w3.org/2000/svg"
        width="284"
        height="191"
        viewBox="0 0 284 191"
        fill="none"
      >
        <g opacity="0.3" filter="url(#filter0_f_296_44525)">
          <rect
            x="50"
            y="50"
            width="184"
            height="91"
            fill="url(#paint0_linear_296_44525)"
            fill-opacity="0.8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_296_44525"
            x="0"
            y="0"
            width="284"
            height="191"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="25"
              result="effect1_foregroundBlur_296_44525"
            />
          </filter>
          <linearGradient
            id="paint0_linear_296_44525"
            x1="50"
            y1="63.0549"
            x2="152.088"
            y2="-28.188"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#45A3F9" />
            <stop offset="0.375" stop-color="#8920FE" stop-opacity="0.81" />
            <stop offset="0.619792" stop-color="#FF0BE5" />
            <stop offset="1" stop-color="#FFC800" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default TeamTabgradient;
