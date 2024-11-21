import React from 'react'
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className='footer lg:p-16 p-6'>
<div className="text-white ">
  <div className="">
    <div className="relative">
     
      <img
        src="/assets/image 125.png" 
        alt="Team working together"
        className="shadow-lg w-full h-auto footerImg"
      />

    
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start text-start px-4 md:px-8 lg:px-16 FooterCard">
        <div className=''>
          <h2 className="text-white lg:text-4xl text-2xl font-bold">
            Have a Project in Your Mind?
          </h2>
          <p className="text-white font-normal mt-4 text-base lg:w-[60%] w-full">
            At Comfygen, we use creativity and teamwork to shape the direction of technology. Our innovative solutions help organisations stay ahead of the times in a world that is changing quickly. Together, let's develop the technologies of the future.
          </p>
          <button className="mt-6 text-base font-medium text-white border border-white rounded-full px-6 py-2.5 text-center cursor-pointer relative flex gap-3 justify-center items-center">
            Get Started <MdArrowOutward className='ml-1' width={100} />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<footer className="text-gray-300 pt-10 ">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
      {/* Logo Section */}
      <div className=" pr-8">
        <Image 
          src="/assets/comfygen-logo-svg.png" 
          alt="Example image"
          className="w-full"
          width={500}
          height={300}
        />
        <p className="text-sm font-normal mt-4 text-[#ffffff]/70">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
        </p>
        <div className="flex space-x-3 mt-4">
          <a href="#" className="text-gray-300 hover:text-white">
          <FaTwitter />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
          <FaSquareFacebook width={250} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
          <FaSquareInstagram />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
          <FaLinkedin width={250} />
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="border-r-2 border-[rgba(255,255,255,0.2)] pr-8">
        <p className="text-sm font-normal mb-4 text-[#ffffff]/70">Services for Businesses</p>
        <ul className="space-y-2 text-sm">
          <li>GST Registration</li>
          <li>Income Tax Returns filing</li>
          <li>GST Returns filing</li>
          <li>TDS Returns filing</li>
          <li>Tax Planning & Saving</li>
          <li>Digital Signature Certificate</li>
          <li>PAN Card Services</li>
          <li>Company Registration</li>
        </ul>
      </div>

      {/* Income Tax Guides Section */}
      <div className="border-r-2 border-[rgba(255,255,255,0.2)] pr-8">
        <p className="text-sm font-normal mb-4 text-[#ffffff]/70">Income Tax Guides</p>
        <ul className="space-y-2 text-sm">
          <li>Income Tax Return</li>
          <li>Deductions</li>
          <li>Form 16</li>
          <li>Rent Receipt</li>
          <li>House Property Tax</li>
          <li>How to Link Aadhaar with PAN</li>
          <li>Income Tax Slab Rate 2023-24</li>
          <li>PAN Card</li>
        </ul>
      </div>

      {/* GST Guides Section */}
      <div className="border-r-2 border-[rgba(255,255,255,0.2)] pr-8">
        <p className="text-sm font-normal mb-4 text-[#ffffff]/70">GST Guides</p>
        <ul className="space-y-2 text-sm">
          <li>GST</li>
          <li>GST System</li>
          <li>GST Registration</li>
          <li>Input Tax Credit</li>
          <li>GST Procedure</li>
          <li>GST Returns</li>
          <li>GST eWay Bill</li>
          <li>GST Rates</li>
        </ul>
      </div>

      {/* Mutual Fund Guides Section */}
      <div className="border-r-2 border-[rgba(255,255,255,0.2)] pr-8">
        <p className="text-sm font-normal mb-4 text-[#ffffff]/70">Mutual Fund Guides</p>
        <ul className="space-y-2 text-sm">
          <li>Mutual Fund Guides</li>
          <li>Mutual Fund Types</li>
          <li>Tax-Saving Mutual Fund</li>
          <li>ELSS</li>
          <li>Dividend Mutual Fund</li>
          <li>Tax-Saving Investments</li>
        </ul>
      </div>
    </div>
    <div className="mt-4 lg:flex items-center space-y-4 lg:space-y-0 justify-between py-6 lg:py-6 pb-24 text-sm border-t border-white/10 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
  {/* Left Section: Copyright */}
  <div className="flex justify-center items-center gap-3">
    <p className="text-center lg:text-left">©2024 Comfygen Pvt Ltd.</p>
  </div>

  {/* Middle Section: Links */}
  <div className="flex flex-col lg:flex-row items-center space-x-4 lg:space-x-4 gap-2">
    <a href="">
      <p className="cursor-pointer text-md font-medium">About Us</p>
    </a>
    <a href="">
      <p className="cursor-pointer text-md font-medium">Career</p>
    </a>
    <a href="">
      <p className="cursor-pointer text-md font-medium">Our Blog</p>
    </a>
    <a href="">
      <p className="cursor-pointer text-md font-medium">Disclaimer</p>
    </a>
  </div>

  {/* Right Section: Terms & Conditions and Privacy Policy */}
  <p className="text-center lg:text-right">
    All Rights Reserved. <a className="text-[#9091f6]" href="">Terms &amp; Condition</a> | <a className="text-[#9091f6]" href="">Privacy Policy</a>
  </p>
</div>

  </div>
</footer>

    </div>
  )
}

export default Footer