import FeatureOrganize from "@/app/components/FeatureOrganize/FeatureOrganize";
import TaskContextbox from "@/app/components/TaskContextbox/TaskContextbox";
import React from "react";
import TaskFeatureTwo from "@/app/components/TaskFeatureTwo/TaskFeatureTwo";
import Featuretask from "@/app/components/Featuretask/Featuretask";

const page = () => {
  return (
    <>
      <Featuretask />
      <TaskContextbox />
      <FeatureOrganize />
      <TaskFeatureTwo />
    </>
  );
};

export default page;
