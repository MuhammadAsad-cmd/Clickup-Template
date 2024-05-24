import Team from "@/app/components/Collaboration/Team";
import PriceFaq from "@/app/components/PriceFaq/PriceFaq";
import PricingHero2 from "@/app/components/PricingHero2/PricingHero2";
import ProcingHeroSection from "@/app/components/ProcingHeroSection/ProcingHeroSection";
import React from "react";

const page = () => {
  return (
    <>
      <ProcingHeroSection />
      <PricingHero2 />
      <PriceFaq />
    </>
  );
};

export default page;
