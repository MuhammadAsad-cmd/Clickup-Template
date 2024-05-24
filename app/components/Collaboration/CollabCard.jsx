const CollabCard = () => {
  return (
    <>
      <div className="flex h-full w-full flex-shrink-0 flex-row gap-5 overflow-x-auto  lg:hidden">
        <div className="CollabCard1 mb-[35px] h-full min-w-[280px] rounded-xl border border-[#ceceea] px-6 py-8">
          <p className="mb-5 text-[23px] font-extrabold leading-8 text-[#ffffff]">
            Improve collaboration
          </p>

          <p className="mb-5 text-base leading-6 text-white">
            <b>
              Get your teams working together more closely, even if they’re far
              apart.
            </b>{" "}
            Centralize project-related communications in one place, brainstorm
            ideas with Whiteboards, and draft plans together with collaborative
            Docs.
          </p>

          <ul className="flex flex-wrap items-center gap-[6px]">
            <li className="collabList  flex items-center justify-center rounded-lg border bg-[#fff] px-[11px] py-[2px] text-xs font-medium leading-6">
              Comments
            </li>
            <li className="collabList flex items-center justify-center rounded-lg border bg-[#fff] px-[11px] py-[2px] text-xs font-medium leading-6">
              Docs
            </li>
            <li className="collabList flex items-center justify-center rounded-lg border bg-[#fff] px-[11px] py-[2px] text-xs font-medium leading-6">
              Whiteboards
            </li>
            <li className="collabList flex items-center justify-center rounded-lg border bg-[#fff] px-[11px] py-[2px] text-xs font-medium leading-6">
              Clips
            </li>
          </ul>
        </div>
        <div className="CollabCard2 mb-[35px] h-full min-w-[280px] rounded-xl border border-[#ceceea] px-6 py-8">
          <p className="mb-5 text-[23px] font-extrabold leading-8 text-[#ffffff]">
            Enhance visibility
          </p>

          <p className="mb-5 text-base leading-6 text-white">
            <b>Ditch the needless meetings and repetitive updates.</b>{" "}
            Centralize project-related communications in one place, brainstorm
            With a single source of truth for all ongoing projects across your
            entire org, you get a crystal-clear view of what's happening (or
            not), and who's responsible.
          </p>

          <ul className="flex flex-wrap items-center gap-[6px]">
            <li className="collabList  flex items-center justify-center rounded-lg border bg-[#fff] px-[11px] py-[2px] text-xs font-medium leading-6">
              Views
            </li>
            <li className="collabList flex items-center justify-center rounded-lg border bg-[#fff] px-[11px] py-[2px] text-xs font-medium leading-6">
              Dashboards
            </li>
            <li className="collabList flex items-center justify-center rounded-lg border bg-[#fff] px-[11px] py-[2px] text-xs font-medium leading-6">
              Reports
            </li>
            <li className="collabList flex items-center justify-center rounded-lg border bg-[#fff] px-[11px] py-[2px] text-xs font-medium leading-6">
              Goals
            </li>
          </ul>
        </div>
        <div className="CollabCard3 mb-[35px] h-full min-w-[280px] rounded-xl border border-[#ceceea] px-6 py-8">
          <p className="mb-5 text-[23px] font-extrabold leading-8 text-[#ffffff]">
            Automate work
          </p>

          <p className="mb-5 pr-5 text-base leading-6 text-white">
            <b>Streamline business processes without breaking a sweat.</b>{" "}
            Whether it's onboarding employees, handling IT requests, or managing
            expense reimbursements, you can automate it all with powerful
            no-code Automations.
          </p>

          <ul className="flex flex-wrap items-center gap-[6px]">
            <li className="collabList  flex items-center justify-center rounded-lg border bg-[#fff] px-[11px] py-[2px] text-xs font-medium leading-6">
              Automations
            </li>
            <li className="collabList flex items-center justify-center rounded-lg border bg-[#fff] px-[11px] py-[2px] text-xs font-medium leading-6">
              Forms
            </li>
            <li className="collabList flex items-center justify-center rounded-lg border bg-[#fff] px-[11px] py-[2px] text-xs font-medium leading-6">
              Task Templates
            </li>
            <li className="collabList flex items-center justify-center rounded-lg border bg-[#fff] px-[11px] py-[2px] text-xs font-medium leading-6">
              Custom Feilds
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CollabCard;
