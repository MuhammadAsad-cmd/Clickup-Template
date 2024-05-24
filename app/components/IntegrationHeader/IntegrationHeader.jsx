"use client";
import React, { useState } from "react";
import IntegrationPage from "../IntegrationPage/IntegrationPage";
import NativeIntegration from "../NativeIntegration/NativeIntegration";
import ZapierIntegration from "../ZapierIntegration/ZapierIntegration";

const IntegrationHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <IntegrationPage
        handleSearchChange={handleSearchChange}
        searchTerm={searchTerm}
      />
      <NativeIntegration searchTerm={searchTerm} />
      <ZapierIntegration />
    </>
  );
};

export default IntegrationHeader;
