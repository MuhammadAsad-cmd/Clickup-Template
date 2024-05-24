"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { FaUsersViewfinder } from "react-icons/fa6";
import { MdOutlinePieChart } from "react-icons/md";
import { RiApps2AddFill } from "react-icons/ri";
import { SiTicktick } from "react-icons/si";
import { TfiLock } from "react-icons/tfi";
import { VscSparkleFilled } from "react-icons/vsc";

const EnterpriseSideabar = () => {
  const [activeSection, setActiveSection] = useState("solution");

  const solutionRef = useRef(null);
  const flexibleRef = useRef(null);
  const advancedRef = useRef(null);
  const reliableRef = useRef(null);
  const visibilityRef = useRef(null);
  const integrationsRef = useRef(null);
  const poweredRef = useRef(null);

  const handleNavigation = (sectionRef, sectionId) => {
    setActiveSection(sectionId);
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="container relative mx-auto mt-[150px] max-w-[1170px] px-5 text-[#24223E] lg:px-0">
        <div className="mt-[150px] flex">
          <div>
            <div id="solution" ref={solutionRef}>
              <div className="mb-[60px] flex flex-col">
                <p className="mb-3 flex h-[27px] w-full max-w-[129px] items-center justify-center rounded-full bg-[#F1F1F9] px-[10px] py-[6px] text-xs font-medium leading-5 text-[#514b81]">
                  Complete solution
                </p>
                <h2 className="text-4xl font-black leading-[51px] md:text-[41px]">
                  The everything app for work
                </h2>
                <p className="mt-2 text-[17px] font-medium leading-6">
                  All the tools you need in one platform, boosting efficiency,
                  enhancing visibility, and empowering everyone with data-driven
                  decisions.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/layout-item-block__graphic__24_.png"
                      alt="onboard"
                      className="h-full max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      Projects and Tasks
                    </h2>
                    <p className="text-base font-normal leading-5">
                      Simplify project and task management, freeing up time to
                      focus on what matters most.
                    </p>
                  </div>
                </div>
                <div className="h-full rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/layout-item-block__graphic__27_.png"
                      alt="onboard"
                      className="h-full max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      Views and Dashboards
                    </h2>
                    <p className="text-base font-normal leading-5">
                      Visualize work in 15+ views including list, board, gantt,
                      with productivity analytics at your fingertips.
                    </p>
                  </div>
                </div>
                <div className="h-full rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/layout-item-block__graphic__26_.png"
                      alt="onboard"
                      cl
                      className="h-full max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      Docs and Whiteboards
                    </h2>
                    <p className="text-base font-normal leading-5">
                      Create, share, and visualize plans with collaborative docs
                      and fully-featured whiteboards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="flexible" ref={flexibleRef} className="mt-[150px]">
              <div className="mb-[60px] flex flex-col">
                <p className="mb-3 flex h-[27px] w-full max-w-[129px] items-center justify-center rounded-full bg-[#F1F1F9] px-[10px] py-[6px] text-xs font-medium leading-5 text-[#514b81]">
                  Fully flexible
                </p>
                <h2 className="text-4xl font-black leading-[51px] md:text-[41px]">
                  Perfectly fits all workflows
                </h2>
                <p className="mt-2 text-[17px] font-medium leading-6">
                  ClickUp offers incredible flexibility that empowers teams to
                  work in their own style, while seamlessly collaborating
                  towards shared goals, all from a single platform.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/custom-workflows.png"
                      alt="onboard"
                      className="max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      Custom workflows
                    </h2>
                    <p className="text-base font-normal leading-5">
                      Designed for how teams want to work. No more workarounds
                      or tradeoffs.
                    </p>
                  </div>
                </div>
                <div className="h-full rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/custom-task-types.png"
                      alt="onboard"
                      className="max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      Custom Task types
                    </h2>
                    <p className="text-base font-normal leading-5">
                      Turn tasks into leads, tickets, and more, fitting the
                      needs of any team.
                    </p>
                  </div>
                </div>
                <div className="h-full rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/reusable-templates.png"
                      alt="onboard"
                      cl
                      className="max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      Reusable templates
                    </h2>
                    <p className="text-base font-normal leading-5">
                      Start with 100s of prebuilt templates, or build your own
                      for repeated success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="advanced" ref={advancedRef} className="mt-[150px]">
              <div className="mb-[60px] flex flex-col">
                <p className="mb-3 flex h-[27px] w-full max-w-[129px] items-center justify-center rounded-full bg-[#F1F1F9] px-[10px] py-[6px] text-xs font-medium leading-5 text-[#514b81]">
                  Advanced controls
                </p>
                <h2 className="text-4xl font-black leading-[51px] md:text-[41px]">
                  Manage controls and permissions
                </h2>
                <p className="mt-2 text-[17px] font-medium leading-6">
                  Change permissions and security settings for guests, members,
                  and admins. You control what users can and can't see or do for
                  each level of your Workspace.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/secure-access.png"
                      alt="onboard"
                      className="max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      Secure access
                    </h2>
                    <p className="text-base font-normal leading-5">
                      Ensure authorized access with SSO, SAML, 2FA, all alines
                      with enterprise security standards.
                    </p>
                  </div>
                </div>
                <div className="h-full rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/custom-permissions.png"
                      alt="onboard"
                      className="max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      Custom permissions
                    </h2>
                    <p className="text-base font-normal leading-5">
                      Design user roles with granular permissions, for precise
                      control and access levels across the workspace.
                    </p>
                  </div>
                </div>
                <div className="h-full rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/admin-management.png"
                      alt="onboard"
                      cl
                      className="max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      Admin management
                    </h2>
                    <p className="text-base font-normal leading-5">
                      Equip admins with intuitive user access management and
                      permissions, maximizing efficiency and operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="reliable" ref={reliableRef} className="mt-[150px]">
              <div className="mb-[60px] flex flex-col">
                <p className="mb-3 flex h-[27px] w-full max-w-[129px] items-center justify-center rounded-full bg-[#F1F1F9] px-[10px] py-[6px] text-xs font-medium leading-5 text-[#514b81]">
                  Secure and reliable
                </p>
                <h2 className="text-4xl font-black leading-[51px] md:text-[41px]">
                  Scale your enterprise confidently
                </h2>
                <p className="mt-2 text-[17px] font-medium leading-6">
                  Your workspace is built with privacy, security, and data
                  residency in mind, adapting to your ever-growing needs and
                  challenges.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/monitoring-and-operations.avif"
                      alt="onboard"
                      className="max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      Monitoring and operations
                    </h2>
                    <p className="text-base font-normal leading-5">
                      Effortlessly access audit logs, 24/7 monitoring, and
                      comprehensive penetration testing, securing your data
                      around the clock.
                    </p>
                  </div>
                </div>
                <div className="h-full rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/regional-data-residency.png"
                      alt="onboard"
                      className="max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      Regional data residency
                    </h2>
                    <p className="text-base font-normal leading-5">
                      Choose from US, EU, or APAC data storage under Regional
                      Data Residency, keeping your data secure within your
                      chosen region.
                    </p>
                  </div>
                </div>
                <div className="h-full rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/data-stays-yours.png"
                      alt="onboard"
                      cl
                      className="max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      Your data stays yours
                    </h2>
                    <p className="text-base font-normal leading-5">
                      We collect just what's needed to support you and enhance
                      our services, ensuring your data is never shared or sold.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="visibility" ref={visibilityRef} className="mt-[150px]">
              <div className="mb-[60px] flex flex-col">
                <p className="mb-3 flex h-[27px] w-full max-w-[140px] items-center justify-center rounded-full bg-[#F1F1F9] px-[10px] py-[6px] text-xs font-medium leading-5 text-[#514b81]">
                  Actionable visibility
                </p>
                <h2 className="text-4xl font-black leading-[51px] md:text-[41px]">
                  Visibility without busywork
                </h2>
                <p className="mt-2 text-[17px] font-medium leading-6">
                  Whether your goal is greater efficiency or faster outcomes,
                  you'll gain real-time insight and visibility into projects,
                  people, and resources - fueling data-driven decisions.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/dashboards.avif"
                      alt="onboard"
                      className="max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      Dashboards
                    </h2>
                    <p className="text-base font-normal leading-5">
                      See progress at a glance with dashboards across any team,
                      project, or goal.
                    </p>
                  </div>
                </div>
                <div className="h-full rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/analytics.png"
                      alt="onboard"
                      className="h-full max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      Analytics
                    </h2>
                    <p className="text-base font-normal leading-5">
                      Make smarter decisions with real-time data and analytics
                      support.
                    </p>
                  </div>
                </div>
                <div className="h-full rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/goals-and-OKRs.png"
                      alt="onboard"
                      cl
                      className="h-full max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      Goals and OKRs
                    </h2>
                    <p className="text-base font-normal leading-5">
                      Keep teams aligned and moving forward with automated OKR
                      tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="integrations" ref={integrationsRef} className="mt-[150px]">
              <div className="mb-[60px] flex flex-col">
                <p className="mb-3 flex h-[27px] w-full max-w-[110px] items-center justify-center rounded-full bg-[#F1F1F9] px-[10px] py-[6px] text-xs font-medium leading-5 text-[#514b81]">
                  Integration
                </p>
                <h2 className="text-4xl font-black leading-[51px] md:text-[41px]">
                  Seamlessly connected
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/integrations.png"
                      alt="onboard"
                      className="max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      Integrations
                    </h2>
                    <p className="text-base font-normal leading-5">
                      Instantly connect to Slack, Salesforce, GSuite, Github,
                      and more.
                    </p>
                  </div>
                </div>
                <div className="rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/universal-search.png"
                      alt="onboard"
                      className="max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      Universal Search
                    </h2>
                    <p className="text-base font-normal leading-5">
                      Integrate with thousands of apps to automate work and
                      reduce duplication.
                    </p>
                  </div>
                </div>
                <div className="rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/clickup-api.png"
                      alt="onboard"
                      cl
                      className="max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      ClickUp API
                    </h2>
                    <p className="text-base font-normal leading-5">
                      Developers get full access to build custom apps and
                      integrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="powered" ref={poweredRef} className="mt-[150px]">
              <div className="mb-[60px] flex flex-col">
                <p className="mb-3 flex h-[27px] w-full max-w-[99px] items-center justify-center rounded-full bg-[#F1F1F9] px-[10px] py-[6px] text-xs font-medium leading-5 text-[#514b81]">
                  ClickUp Brain
                </p>
                <h2 className="text-4xl font-black leading-[51px] md:text-[41px]">
                  AI-powered productivity
                </h2>
                <p className="mt-2 text-[17px] font-medium leading-6">
                  Speed up and simplify work with the world's first neural
                  network connecting tasks, docs, people, and all of your
                  company’s knowledge with AI.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/ai-knowledge-manager.png"
                      alt="onboard"
                      className="h-full max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      AI Knowledge Manager™
                    </h2>
                    <p className="text-base font-normal leading-5">
                      Ask questions and get answers from your docs, tasks, and
                      projects.
                    </p>
                  </div>
                </div>
                <div className="h-full rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/ai-project-manager.png"
                      alt="onboard"
                      className="h-full max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      AI Project Manager™
                    </h2>
                    <p className="text-base font-normal leading-5">
                      A side-kick that manages and automates work such as
                      updates.
                    </p>
                  </div>
                </div>
                <div className="h-full rounded-[14px] border border-[#ceceea] bg-white">
                  <div>
                    <Image
                      width={258}
                      height={148}
                      unoptimized
                      src="/images/ai-writer-for-work.png"
                      alt="onboard"
                      cl
                      className="h-full max-h-[304px] w-full rounded-t-[14px] sm:max-h-[148px]"
                    />
                  </div>
                  <div className="p-[30px]">
                    <h2 className="mb-2 text-xl font-black leading-7">
                      AI Writer for Work™
                    </h2>
                    <p className="text-base font-normal leading-5">
                      Create content and reply quickly with an assistant
                      tailored for work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside
            className="sticky top-[60px] hidden md:block"
            style={{ height: "fit-content" }}
          >
            <nav className="mb-[30px] ml-[60px] w-[200px]">
              <ul className="flex flex-col gap-1 rounded-[14px] bg-[#F1F1F9] p-1 py-1">
                <li
                  onClick={() => handleNavigation(solutionRef, "solution")}
                  className={`flex w-full cursor-pointer items-center gap-2 px-[11px] py-2 text-[13px] font-medium leading-5 ${
                    activeSection === "solution"
                      ? "rounded-[14px] bg-white font-extrabold text-[#24223E]"
                      : ""
                  }`}
                >
                  <SiTicktick className="cursor-pointer text-xl" />
                  <button> Complete solution</button>
                </li>
                <li
                  onClick={() => handleNavigation(flexibleRef, "flexible")}
                  className={`flex w-full items-center gap-2 px-[11px] py-2 text-[13px] font-medium leading-5 ${
                    activeSection === "flexible"
                      ? "rounded-[14px] bg-white font-extrabold text-[#24223E]"
                      : ""
                  }`}
                >
                  <RiApps2AddFill className="text-xl" />
                  <button>Fully flexible </button>
                </li>
                <li
                  onClick={() => handleNavigation(advancedRef, "advanced")}
                  className={`flex w-full items-center gap-2 px-[11px] py-2 text-[13px] font-medium leading-5 ${
                    activeSection === "advanced"
                      ? "rounded-[14px] bg-white font-extrabold text-[#24223E]"
                      : ""
                  }`}
                >
                  <FaUsersViewfinder className="text-xl" />
                  <button>Advanced controls</button>
                </li>
                <li
                  onClick={() => handleNavigation(reliableRef, "reliable")}
                  className={`flex w-full items-center gap-2 px-[11px] py-2 text-[13px] font-medium leading-5 ${
                    activeSection === "reliable"
                      ? "rounded-[14px] bg-white font-extrabold text-[#24223E]"
                      : ""
                  }`}
                >
                  <TfiLock className="text-xl" />
                  <button>Secure and reliable</button>
                </li>
                <li
                  onClick={() => handleNavigation(visibilityRef, "visibility")}
                  className={`flex w-full items-center gap-2 px-[11px] py-2 text-[13px] font-medium leading-5 ${
                    activeSection === "visibility"
                      ? "rounded-[14px] bg-white font-extrabold text-[#24223E]"
                      : ""
                  }`}
                >
                  <MdOutlinePieChart className="text-xl" />
                  <button>Actionable visibility</button>
                </li>
                <li
                  onClick={() =>
                    handleNavigation(integrationsRef, "integrations")
                  }
                  className={`flex w-full items-center gap-2 px-[11px] py-2 text-[13px] font-medium leading-5 ${
                    activeSection === "integrations"
                      ? "rounded-[14px] bg-white font-extrabold text-[#24223E]"
                      : ""
                  }`}
                >
                  <AiOutlineLink className="text-xl" />
                  <button>100+ Integrations</button>
                </li>
                <li
                  onClick={() => handleNavigation(poweredRef, "powered")}
                  className={`flex w-full items-center gap-2 px-[11px] py-2 text-[13px] font-medium leading-5 ${
                    activeSection === "powered"
                      ? "rounded-[14px] bg-white font-extrabold text-[#24223E]"
                      : ""
                  }`}
                >
                  <VscSparkleFilled className="text-xl" />
                  <button>AI powered</button>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </>
  );
};

export default EnterpriseSideabar;
