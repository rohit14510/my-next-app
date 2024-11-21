"use client";
import { useState} from 'react';

const JobApplication = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Button to Open Modal */}
      <button
        onClick={openModal}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Open Application Form
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 max-w-4xl rounded-lg overflow-hidden shadow-lg">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-xl font-semibold">Fill The Form</h2>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex flex-wrap">
              {/* Left Side */}
              <div className="w-full md:w-1/2 p-6 bg-blue-600 text-white">
                <h3 className="text-lg font-semibold mb-4">Comfygen</h3>
                <p className="text-sm">
                  Comfygen is a result-oriented IT service provider that builds
                  secured and scaled apps to fulfill the needs of every
                  business in various industries.
                </p>
                <div className="mt-8 flex space-x-4">
                  <a href="#" className="text-white hover:opacity-80">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-white hover:opacity-80">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-white hover:opacity-80">
                    <i className="fab fa-skype"></i>
                  </a>
                  <a href="#" className="text-white hover:opacity-80">
                    <i className="fab fa-x"></i>
                  </a>
                </div>
              </div>

              {/* Right Side */}
              <div className="w-full md:w-1/2 p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter First Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="example@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+91 - 987-6543-210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        City
                      </label>
                      <select
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>Select City</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        State
                      </label>
                      <select
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>Select State</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        Position
                      </label>
                      <select
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>Select Position</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        Relocate
                      </label>
                      <select
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        Upload Resume
                      </label>
                      <input
                        type="file"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="3"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Submit &rarr;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApplication;

