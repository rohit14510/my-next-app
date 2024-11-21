import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div>
          <Image
            className="headerLogo"
            src="/assets/image 61.png"
            alt="Company Logo"
            width={244}
            height={50}
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
      {/* Flex container for the list */}
      <ul className="HeaderList flex items-center space-x-6">
        <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
          Home
        </li>
        <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
          Services <IoIosArrowDown color="black" size={50} className="ml-1" />
        </li>
        <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
          Solutions <IoIosArrowDown className="ml-1" />
        </li>
        <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
          Games <IoIosArrowDown className="ml-1" />
        </li>
        <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
          Sports <IoIosArrowDown className="ml-1" />
        </li>
        <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
          Company <IoIosArrowDown className="ml-1" />
        </li>
      </ul>
    </nav>

        {/* Call to Action Button */}
        <div>
          <button className="GetInTouchBtn bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Get in Touch
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            className="text-gray-700 hover:text-blue-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
