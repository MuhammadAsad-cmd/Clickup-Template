import Image from "next/image";
import React from "react";

const TaskContextbox = () => {
  return (
    <>
      <div className="ContextboxOne container mx-auto mt-[50px] max-w-[1300px] rounded-[60px]">
        <div className="flex flex-col-reverse gap-20 p-10 lg:flex-row lg:p-20">
          <div className="lg:max-w-[424px]">
            <p className="mb-5 text-xs font-bold uppercase leading-6 tracking-wider text-[#FD71AF]">
              Communicate
            </p>
            <h2 className="text-4xl font-extrabold leading-[50px] text-[#333333] lg:text-[50px] lg:leading-[68px]">
              Collaborate on anything with your team.
            </h2>
            <p className="my-10 hidden h-[5px] w-[100px] rounded-md bg-[#fd71af] lg:block"></p>
            <p className="mt-5 text-sm leading-6 text-[#292D34] lg:mt-0">
              Fast-track teamwork with multiple assignees and comment threads
              for any task. Assign comments as action items and save time with
              sharable screen recordings.
            </p>
          </div>
          <div>
            <video
              width="604"
              height="401"
              autoPlay
              muted
              loop
              className="h-full w-full rounded-[20px] object-cover "
            >
              <source src="/images/task_new_comment.mp4" type="video/mp4" />
              <track src="task_new_comment.mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="ContextboxTwo container mx-auto mt-[50px] max-w-[1300px] rounded-[60px]">
        <div className="flex flex-col-reverse items-start gap-20 p-10 lg:flex-row-reverse lg:p-20">
          <div className="lg:max-w-[424px]">
            <p className="mb-5 text-xs font-bold uppercase leading-6 tracking-wider text-[#49CCF9]">
              Structure
            </p>
            <h2 className="text-4xl font-extrabold leading-[50px] text-[#333333] md:text-[50px] lg:leading-[68px]">
              Total flexibility to run all of your projects.
            </h2>
            <p className="my-10 hidden h-[5px] w-[100px] rounded-md bg-[#49CCF9] lg:block"></p>
            <p className="mt-5 text-sm leading-6 text-[#292D34] lg:mt-0">
              Quickly navigate to any task or subtask within your project, and
              visualize your work in multiple views. Customizable subtasks allow
              you to surface the information you need at the right time!
            </p>
          </div>
          <div className="mt-8">
            <Image
              width={600}
              height={500}
              unoptimized
              src="/images/task-view-collapsible-sidebar.png"
              alt="task"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="ContextboxThree container mx-auto mt-[50px] max-w-[1300px] rounded-[60px]">
        <div className="flex flex-col-reverse items-start gap-20 p-10 lg:flex-row lg:p-20">
          <div className="lg:max-w-[424px]">
            <p className="mb-5 text-xs font-bold uppercase leading-6 tracking-wider text-[#00B884]">
              CUSTOM TASK TYPES
            </p>
            <h2 className="text-4xl font-extrabold leading-[50px] text-[#333333] lg:text-[50px] lg:leading-[68px]">
              Manage any type of work
            </h2>
            <p className="my-10 hidden h-[5px] w-[100px] rounded-md bg-[#00B884] lg:block"></p>
            <p className="mt-5 text-sm leading-6 text-[#292D34] lg:mt-0">
              Customize your Workspace and manage any type of work in ClickUp.
              Use your own naming conventions and define the task types that
              make the most sense for your team.
            </p>
          </div>
          <div className="mt-8">
            <Image
              width={600}
              height={500}
              unoptimized
              src="/images/custom-task-type.png"
              alt="task"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskContextbox;
