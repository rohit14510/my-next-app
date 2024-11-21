"use client";
import React, { useState } from "react";
import JobListing from "../components/JobListing";

const jobs = [
  {
    title: "Node.js Developer",
    location: "Work From Office",
    time: "Full Time",
    type: "Full Stack Developer",
    description:
      "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design, and Marketing to analyze, develop, debug, test, roll-out, and support new and existing product features.",
  },
  {
    title: "Full Stack Developer",
    location: "Work From Office",
    time: "Full Time",
    type: "Full Stack Developer",
    description:
      "We are looking for experienced Frontend Developers to join our dynamic team and help develop cutting-edge web applications.",
  },
  {
    title: "UI/UX Developer (with Tailwind CSS)",
    location: "Work From Office",
    time: "Full Time",
    type: "UI/UX Designer",
    description:
      "We are seeking a UI/UX Designer to create exceptional user experiences and visually compelling designs.",
  },


  {
    title: "Backend Developer",
    location: "Work From Office",
    time: "Full Time",
    type: "Backend Developer",
    description:
      "Looking for Backend Developers to build scalable and reliable server-side applications, APIs, and services.",
  },
  {
    title: "Product Designer",
    location: "Work From Office",
    time: "Full Time",
    type: "Product Designer",
    description:
      "We’ve worked on 30+ major projects from 8 different industries that are being. Need full-cycle product development or an improvement cycle? Let’s talk!",
  },
  // Other job objects here...
];

const JobListingsPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    `All positions (${jobs.length})`, // Dynamically showing the count of all jobs
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
  ];

  // Filter jobs based on the active tab
  const filteredJobs =
    activeTab === 0 ? jobs : jobs.filter((job) => job.type === tabs[activeTab]);

  return (
    <div className="OpenPositionSection">
      <h5 className="text-center text-3xl pt-[60px]">
        We have {jobs.length} open positions now!
      </h5>

      <div className="flex flex-wrap min-h-screen">
        {/* Sidebar */}
        <aside className="w-full sm:w-1/4 py-[45px] px-6 text-black sm:block sticky top-10 z-9 bg-[#F7F9FC] sm:h-screen h-auto overflow-y-auto">
<div className="">
<ul className="">
    {tabs.map((tab, index) => (
      <li
        key={index}
        className={`mb-2 cursor-pointer py-2 px-4  ${
          activeTab === index
            ? "bg-white text-black text-xl font-bold border-l-8 border-[#5556D1]"
            : "bg-transparent text-[#253A67] hover:bg-blue-200"
        }`}
        onClick={() => setActiveTab(index)}
      >
        {tab}
      </li>
    ))}
  </ul>

  <div className="mt-6 ">
    <p className="text-[#53648B] text-sm sm:text-base">
      We are always seeking talented people. In case you cannot find
      your desired position here, please send us your LinkedIn profile
      and give us your contact information. We will be in touch.
    </p>

    <button className="mt-4 py-2 px-4 rounded-3xl border-[1.82px] border-[#5556D1] text-[#5556D1] w-full sm:w-auto">
      Share your LinkedIn profile
    </button>
  </div>
</div>
</aside>


        {/* Job Listings */}
        <main className="w-full sm:w-3/4 p-4">
          {filteredJobs.map((job, index) => (
            <JobListing key={index} {...job} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default JobListingsPage;
