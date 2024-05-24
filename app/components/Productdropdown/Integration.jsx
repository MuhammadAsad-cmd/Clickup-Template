import Image from "next/image";
import Link from "next/link";

const Integration = () => {
  return (
    <>
      <div className="ml-2 flex w-full justify-between">
        <div className="w-full max-w-[646px] ">
          <div className="flex justify-between">
            <div className="w-full pt-2">
              <ul className="mt-3">
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <svg
                    width="13"
                    height="16"
                    viewBox="0 0 24 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.400879 21.5702L4.68168 18.2715C6.95602 21.2574 9.3724 22.6336 12.0621 22.6336C14.7373 22.6336 17.0854 21.2736 19.2573 18.3113L23.5992 21.5304C20.4654 25.8022 16.5712 28.0592 12.0621 28.0592C7.56731 28.0592 3.6353 25.8167 0.400879 21.5702Z"
                      fill="url(#paint0_linear_4543_90712)"
                    ></path>
                    <path
                      d="M12.0483 7.2358L4.42882 13.8405L0.906738 9.73157L12.0645 0.0595703L23.1342 9.7388L19.5959 13.8333L12.0483 7.2358Z"
                      fill="url(#paint1_linear_4543_90712)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_4543_90712"
                        x1="0.400879"
                        y1="24.9281"
                        x2="23.5992"
                        y2="24.9281"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#8930FD"></stop>
                        <stop offset="1" stop-color="#49CCF9"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_4543_90712"
                        x1="0.906738"
                        y1="9.43201"
                        x2="23.1342"
                        y2="9.43201"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF02F0"></stop>
                        <stop offset="1" stop-color="#FFC800"></stop>
                      </linearGradient>
                    </defs>
                  </svg>

                  <span>ClickUp API</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/salesforce.png"
                    alt="sales"
                  />
                  <span>Salesforce</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/hubspot.webp"
                    alt="sales"
                  />
                  <span>hubsport</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/zendesk.webp"
                    alt="sales"
                  />
                  <span>Zendesk</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/zapier.png"
                    alt="sales"
                  />
                  <span>Zapier</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/make.jpg"
                    alt="sales"
                  />
                  <span>Make</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/trelloo.png"
                    alt="sales"
                  />
                  <span>Trello</span>
                </li>
              </ul>
            </div>
            <div className="w-full pt-2">
              <ul className="mt-3">
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/salesforce.png"
                    alt="sales"
                  />
                  <span>Slack</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/slack.png"
                    alt="sales"
                  />
                  <span>Gsuite</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/dropbox.png"
                    alt="sales"
                  />
                  <span>Dropbox</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/zoom.png"
                    alt="sales"
                  />
                  <span>Zoom</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/loom.png"
                    alt="sales"
                  />
                  <span>Loams</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/microsoft.jpeg"
                    alt="sales"
                  />
                  <span>Microsoft Teams</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/calendly.png"
                    alt="sales"
                  />
                  <span>Calendly</span>
                </li>
              </ul>
            </div>
            <div className="w-full pt-2">
              <ul className="mt-3">
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/jira.png"
                    alt="sales"
                  />
                  <span>Jira</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/figma.png"
                    alt="sales"
                  />
                  <span>Figma</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/GitHub_.png"
                    alt="sales"
                  />
                  <span>Github</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/gitlab.jpg"
                    alt="sales"
                  />
                  <span>Gitlab</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/bitbucket.jpeg"
                    alt="sales"
                  />
                  <span>Bitbucket</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/syntry.png"
                    alt="sales"
                  />
                  <span>Sentry</span>
                </li>
                <li className="flex h-8 cursor-pointer items-center gap-3 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                  <Image
                    width={17}
                    height={17}
                    unoptimized
                    src="/images/toggl.png"
                    alt="sales"
                  />
                  <span>Toggl</span>
                </li>
              </ul>
            </div>
          </div>
          <Link href="/integrations">
            <button className="mt-5 flex h-10 w-full items-center justify-center rounded-[9px] bg-[#F8F8FC] text-sm leading-5 text-[#24223E]">
              See all integrations
            </button>
          </Link>
        </div>

        <div className="Integrations w-full max-w-[215px] border-l border-dashed border-[#ceceea] p-5">
          <div>
            <p className="font-extrabold leading-5 text-[#24223E]">Import</p>
            <ul className="mt-5">
              <li className="flex h-8 items-center justify-start gap-2 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                <Image
                  width={17}
                  height={17}
                  unoptimized
                  src="/images/Microsoft_Office_Excel_(2019–present).svg.png"
                  alt="sales"
                />
                <span>CSV/Excel</span>
              </li>
              <li className="flex h-8 gap-2 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                <Image
                  width={17}
                  height={17}
                  unoptimized
                  src="/images/trelloo.png"
                  alt="sales"
                />
                <span>Trello</span>
              </li>
              <li className="flex h-8 gap-2 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                <Image
                  width={17}
                  height={17}
                  unoptimized
                  src="/images/jira.png"
                  alt="sales"
                />
                <span>Jira</span>
              </li>
              <li className="flex h-8 gap-2 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                <Image
                  width={17}
                  height={17}
                  unoptimized
                  src="/images/assana.png"
                  alt="sales"
                />
                <span>Asana</span>
              </li>
              <li className="flex h-8 gap-2 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                <Image
                  width={17}
                  height={17}
                  unoptimized
                  src="/images/monday.png"
                  alt="sales"
                />
                <span>Monday</span>
              </li>
              <li className="flex h-8 gap-2 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                <Image
                  width={17}
                  height={17}
                  unoptimized
                  src="/images/toggl.png"
                  alt="sales"
                />
                <span>Notion</span>
              </li>
              <li className="flex h-8 gap-2 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                <Image
                  width={17}
                  height={17}
                  unoptimized
                  src="/images/notion.png"
                  alt="sales"
                />
                <span> Wrike </span>
              </li>
              <li className="flex h-8 gap-2 rounded-md pl-2 text-sm leading-5 text-[rgba(81,75,129)] hover:bg-[#F1F1F9] hover:text-[#24223E]">
                <Image
                  width={17}
                  height={15}
                  unoptimized
                  src="/images/sheet.png"
                  alt="sales"
                />
                <span>Smartsheet</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integration;
