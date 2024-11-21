import { IoIosArrowDown } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
export default function Navbar() {
  return (
    <header className="w-full shadow-sm bg-white sticky top-0 z-10">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/assets/image 61.png" // Replace with your logo file path
            alt="Logo"
            className="h-8 w-auto mr-2"
          />
       
        </div>
        <div className="md:hidden flex justify-end w-full">
  <button className="text-gray-700 focus:outline-none">
    <HiMenu size={24} />
  </button>
</div>


        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8">
          <li className="text-[#5556d1] font-medium cursor-pointer">Home</li>
          <li className="flex items-center text-[#212121] hover:text-blue-500 cursor-pointer">
            Services <IoIosArrowDown className="ml-1" />
          </li>
          <li className="flex items-center text-[#212121] hover:text-blue-500 cursor-pointer">
            Solutions <IoIosArrowDown className="ml-1" />
          </li>
          <li className="flex items-center text-[#212121] hover:text-blue-500 cursor-pointer">
            Games <IoIosArrowDown className="ml-1" />
          </li>
          <li className="flex items-center text-[#212121] hover:text-blue-500 cursor-pointer">
            Sports <IoIosArrowDown className="ml-1" />
          </li>
          <li className="flex items-center text-[#212121] hover:text-blue-500 cursor-pointer">
            Company <IoIosArrowDown className="ml-1" />
          </li>
        </ul>

        {/* Button */}
        <div>
          <button className="hidden md:block bg-[#5556D1] text-white px-6 py-2 rounded-full ">
            Get In Touch
          </button>
        </div>
      </nav>
    </header>
  );
}
