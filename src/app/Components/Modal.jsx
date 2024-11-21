
"use client";
import { useState } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={toggleModal}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          {/* Modal Container */}
          <div
            className="bg-white w-full max-w-5xl h-[83vh] rounded-lg shadow-lg relative flex"
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={toggleModal}
            >
              ✖
            </button>

            {/* Left Section */}
            <div className="w-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 hidden md:block rounded-l-lg"  style={{ backgroundImage: "url('/assets/group.png')" }}>
              <h1 className="text-2xl font-bold mb-4">Comfygen</h1>
              <p>
                Comfygen is a result-oriented IT service provider that builds
                secured and scaled apps to fulfill the needs of every business
                in various industries.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-white hover:underline">
                  LinkedIn
                </a>
                <a href="#" className="text-white hover:underline">
                  Skype
                </a>
                <a href="#" className="text-white hover:underline">
                  WhatsApp
                </a>
                <a href="#" className="text-white hover:underline">
                  Facebook
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/1 p-6 flex flex-col justify-between">
              <h2 className="text-xl font-semibold mb-4">Fill The Form</h2>
              <form className="space-y-4 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-1 border border-gray-300 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-1 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="p-1 border border-gray-300 rounded"
                  />
                  <select
                    className="p-1 border border-gray-300 rounded"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select City
                    </option>
                    <option>City 1</option>
                    <option>City 2</option>
                  </select>
                  <select
                    className="p-1 border border-gray-300 rounded"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select State
                    </option>
                    <option>State 1</option>
                    <option>State 2</option>
                  </select>
                  <select
                    className="p-2 border border-gray-300 rounded"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Position
                    </option>
                    <option>Position 1</option>
                    <option>Position 2</option>
                  </select>
                  <select
                    className="p-1 border border-gray-300 rounded"
                    defaultValue="Yes"
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                  <input
                    type="file"
                    className="p-1 border border-gray-300 rounded"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-1 border border-gray-300 rounded"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



