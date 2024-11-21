import { useState } from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
const JobListing = ({ title, location,time, type, description }) => {
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="JobOpeningCard">
    <h2 className="title text-xl sm:text-xl md:text-xl lg:text-2xl font-semibold mb-2">
  {title}
</h2>


<div className="flex flex-wrap items-center space-x-4 mb-2">
  <span className="location text-sm sm:text-base font-medium">{location}</span>
  <span className="type text-sm sm:text-base font-medium">{time}</span>
</div>

<div className="descsection mt-2">
  <p className="description text-sm sm:text-base">{description}</p>
  
  <div className="btnSection mt-4 flex justify-center">
  <button
    onClick={openModal}
    className="ApplyBtn py-2 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto flex items-center justify-center"
  >
    Apply Now <FaArrowRightLong className='ml-2' width={100} />
  </button>
</div>

</div>


      {/* Modal */}
      {isModalOpen && (
       <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
       {/* Modal Container */}
       <div
         className="bg-white w-full max-w-5xl h-[85vh] rounded-lg shadow-lg relative flex"
       >
         {/* Close Button */}
         <button
           className="absolute top-3 right-3 text-gray-600 hover:text-black"
           onClick={closeModal}
         >
           ✖
         </button>

        {/* Left Side */}
        <div
  className="w-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 hidden md:flex flex-col rounded-l-lg bg-cover bg-center"
  style={{ backgroundImage: "url('/assets/group.png')" }}
>
  {/* Content Wrapper */}
  <div className="mt-auto">
    <img src="/assets/comfygen-logo-svg.png" width={200} alt="" />
    <p className="text-sm mb-4 mt-3">
      Comfygen is a result-oriented IT service provider that builds secured and
      scaled apps to fulfill the needs of every business in various industries.
    </p>
    <div className="mt-6 flex space-x-4">
      <a href="#" className="text-white hover:opacity-80">
      <FaSquareFacebook width={250} />
      </a>
      <a href="#" className="text-white hover:opacity-80">
      <FaLinkedin width={250} />
      </a>
      <a href="#" className="text-white hover:opacity-80">
      <FaSkype width={250} />
      </a>
      <a href="#" className="text-white hover:opacity-80">
      <FaWhatsappSquare width={250} />
      </a>
      <a href="#" className="text-white hover:opacity-80">
      <FaSquareXTwitter width={250} />
      </a>
    </div>
  </div>
</div>


        {/* Right Side */}
        <div className="w-full md:w-1/1 p-4 flex flex-col">
  <h2 className="text-xl font-semibold mb-2">Fill The Form</h2>
  <form className="space-y-2 flex flex-col">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {/* Name Field */}
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium text-[#212121] mb-1">Your Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter First Name"
          className="p-1 border border-gray-300 rounded"
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium text-[#212121] mb-1">Email</label>
        <input
          type="email"
          id="example@email.com"
          placeholder="Enter your email"
          className="p-1 border border-gray-300 rounded"
        />
      </div>

      {/* Phone Number Field */}
      <div className="flex flex-col">
        <label htmlFor="phone" className="text-sm font-medium text-[#212121] mb-1">Phone Number</label>
        <input
          type="text"
          id="phone"
          placeholder="+91 - 987-6543-210 "
          className="p-1 border border-gray-300 rounded"
        />
      </div>

      {/* City Select */}
      <div className="flex flex-col">
        <label htmlFor="city" className="text-sm font-medium text-[#212121] mb-1">City</label>
        <select
          id="city"
          className="p-1 border border-gray-300 rounded text-[#21212199] "
          defaultValue=""
        >
          <option value="" disabled>Select City</option>
          <option>City 1</option>
          <option>City 2</option>
        </select>
      </div>

      {/* State Select */}
      <div className="flex flex-col">
        <label htmlFor="state" className="text-sm font-medium text-[#212121] mb-1">State</label>
        <select
          id="state"
          className="p-1 border border-gray-300 rounded  text-[#21212199]"
          defaultValue=""
        >
          <option value="" disabled>Select State</option>
          <option>State 1</option>
          <option>State 2</option>
        </select>
      </div>

      {/* Position Select */}
      <div className="flex flex-col">
        <label htmlFor="position" className="text-sm font-medium text-[#212121] mb-1">Position</label>
        <select
          id="position"
          className="p-1 border border-gray-300 rounded  text-[#21212199]"
          defaultValue=""
        >
          <option value="" disabled className=''>Select Position</option>
          <option>Position 1</option>
          <option>Position 2</option>
        </select>
      </div>

      {/* Relocate Select */}
      <div className="flex flex-col">
        <label htmlFor="relocate" className="text-sm font-medium text-[#212121] mb-1">Relocate</label>
        <select
          id="relocate"
          className="p-1 border border-gray-300 rounded  text-[#21212199]"
          defaultValue="Yes"
        >
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      {/* File Upload */}
      <div className="flex flex-col">
        <label htmlFor="resume" className="text-sm font-medium text-[#212121] mb-1">Upload Resume</label>
        <input
          type="file"
          id="resume"
          className="p-1 border border-gray-300 rounded  text-[#21212199]"
        />
      </div>
    </div>

    {/* Message Field */}
    <div className="flex flex-col">
      <label htmlFor="message" className="text-sm font-medium text-[#212121] mb-1">Your Message</label>
      <textarea
        id="message"
        placeholder="Your message"
        className="w-full p-2 border border-gray-300 rounded"
      ></textarea>
    </div>

    <button
  type="submit"
  className="w-[100px] py-2 px-4 rounded-full text-white bg-[#5556d1] hover:bg-blue-700 flex items-center justify-center"
>
  Submit <MdArrowOutward  className='ml-2' width={50}/>
</button>


  </form>
</div>

     
    </div>
  </div>
)}

    </div>
  );
};

export default JobListing;
