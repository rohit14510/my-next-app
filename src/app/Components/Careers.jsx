import React from 'react';

const Careers = () => {
  const jobPositions = [
    {
      title: 'Node.js Developer',
      type: 'Work From Office',
      role: 'Full-time',
      description:
        'Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design, and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.',
    },
    {
      title: 'Full Stack Developer',
      type: 'Work From Office',
      role: 'Full-time',
      description:
        'Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design, and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.',
    },
    {
      title: 'UI/UX Developer (with Tailwind CSS)',
      type: 'Work From Office',
      role: 'Full-time',
      description:
        "Since 2019 we've worked on 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries. Need full-cycle product development or an improvement cycle? Let's talk!",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h2 className="text-lg font-semibold border-b-4 border-blue-500 pb-2 mb-6">
              All positions (17)
            </h2>
            <ul className="space-y-4">
              <li className="text-blue-600 cursor-pointer">Full Stack Developer</li>
              <li className="text-blue-600 cursor-pointer">Frontend Developer</li>
              <li className="text-blue-600 cursor-pointer">Backend Developer</li>
              <li className="text-blue-600 cursor-pointer">UI/UX Designer</li>
            </ul>
            <div className="mt-10 text-gray-600">
              <p>
                We are always seeking talented people. In case you cannot find
                your desired position here, please send us your LinkedIn profile and give us your contact information. We will be in touch.
              </p>
              <button className="mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white">
                Share your LinkedIn profile
              </button>
            </div>
          </div>

          {/* Job Listings */}
          <div className="w-full lg:w-3/4">
            {jobPositions.map((job, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 mb-6 rounded-md"
              >
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-sm font-medium rounded-md">
                    {job.type}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-sm font-medium rounded-md">
                    {job.role}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Apply Now &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
