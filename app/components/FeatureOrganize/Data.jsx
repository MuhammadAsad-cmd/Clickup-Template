import { IoCalendarClearOutline } from "react-icons/io5";
import { PiLegoSmileyLight } from "react-icons/pi";
import { RiMindMap } from "react-icons/ri";

export const Tabs = [
  {
    label: "Task Types",
    heading: "Easily build a task database.",
    description:
      "Identify tasks for bugs, sprints, people, and more with Item Types. Group tasks by category to build a database for different Task Types.",
    image: "/images/item-type-manager.png",
  },
  {
    label: "Custom Statuses",
    heading: "Customize your ideal workflow.",
    description:
      "Build clear workflows for everything from feature launches to issue tracking. Use templates to save time or create your own to reuse later.",
    image: "/images/custom-statuses.png",
  },
  {
    label: "Custom Fields",
    heading: "Capture every detail for any project.",
    description:
      "Create Custom Fields to ensure no detail is omitted. Add web links, design files, cost calculations, and more to keep you and your team on track.",
    image: "/images/custom-fields_v2.png",
  },
  {
    label: "Multiple Lists",
    heading: "Get greater visibility across projects.",
    description:
      "Never lose sight of a task that spans several projects or is used by multiple people. Include the task in multiple Lists so it can be referenced anywhere.",
    image: "/images/task-view-multiple-lists.png",
  },
  {
    label: "Time Management",
    heading: "Keep perfect track of your team's time.",
    description:
      "Assess your team's workload using time estimates. Test and refine your estimates using ClickUp's time tracker to effectively gauge productivity.",
    image: "/images/workload-view.png",
  },
  {
    label: "Priorities",
    heading: "Easily focus on what matters most.",
    description:
      "Organize tasks using five different levels of priorities, ranging from low to urgent, so everyone knows what to work on first.",
    image: "/images/priorities_v2.png",
  },
  {
    label: "Tags",
    heading: "Easily focus on what matters most.",
    description:
      "Categorize tasks your way by adding custom tags. Filter your tags to pull tasks together from different projects or locations.",
    image: "/images/priorities_v2.png",
  },
  {
    label: "Relationships & Dependencies",
    heading: "Keep all your work connected, always.",
    description:
      "Add relationships to tasks to easily jump to related work. Create dependencies to establish a clear order of operations among tasks.",
    image: "/images/dependencies_v2.png",
  },
  {
    label: "Checklists",
    heading: "Stay on top of everything, from big to small.",
    description:
      "Create checklists within tasks to track anything from multi-step workflows to simple to-do lists.",
    image: "/images/task-view-checklists.png",
  },
  {
    label: "Clips",
    heading: "Supercharge team communication.",
    description:
      "Capture and share a screen recording within ClickUp. Get your message across and save time from long emails and unnecessary meetings.",
    image: "/images/clip_v2.png",
  },
];

export const Feature = [
  {
    label: "Recurring Tasks",
    no: "01",
    heading: "Never miss a date with recurring tasks.",
    description:
      "From weekly meetings to daily reminders, stay on top of it all with recurring tasks. They take just seconds to set and can save you hours of setting the same reminder over and over.",
    video: "/images/recurring-tasks.mp4",
    icon: <IoCalendarClearOutline />,
  },
  {
    label: "Automations",
    no: "02",
    heading: "Let automations do the work for you.",
    description:
      "Keep projects on track and loop in the right people at the right time. Automate any repeatable process so you can spend more time creating and less time relaying.",
    video: "/images/automations.mp4",
    icon: <PiLegoSmileyLight />,
  },
  {
    label: "Templates",
    no: "03",
    heading: "Get a head start with task templates.",
    description:
      "With task templates, you'll never waste precious time replicating a useful task. Just save it as a template, and you're ready to get to work.",
    video: "/images/template.mp4",
    icon: <RiMindMap />,
  },
];
