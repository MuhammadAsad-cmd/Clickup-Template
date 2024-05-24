import React from "react";
import EnterpriseHero from "@/app/components/EnterpriseHero/EnterpriseHero";
import EnterpriseHero2 from "@/app/components/EnterpriseHero2/EnterpriseHero2";
import EnterpriseSideabar from "@/app/components/EnterpriseSideabar/EnterpriseSideabar";
import EnterpriseSupporting from "@/app/components/EnterpriseSupporting/EnterpriseSupporting";

const page = () => {
  return (
    <>
      <EnterpriseHero />
      <EnterpriseHero2 />
      <EnterpriseSideabar />
      <EnterpriseSupporting />
    </>
  );
};

export default page;
