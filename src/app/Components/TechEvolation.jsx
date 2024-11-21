import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
function TechEvolation() {
  return (
<div className="TechevolationSection grid grid-cols-1 md:grid-cols-2  gap-6 px-4 md:px-8 lg:px-16">
  {/* Text Section */}
  <div className="text-center md:text-left space-y-4 py-8">
    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
      Join Our Tech Revolution
    </h1>
    <p className="text-base md:text-lg lg:text-xl">
      Empowering Innovators to Shape the Future of IT.
    </p>
    <div className="w-full md:w-[300px] flex flex-row justify-between items-center border-[1px] border-[#2a2a2a] rounded-full p-2">
  <input
    type="text"
    placeholder="Search"
    className="bg-transparent w-[120px] px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button className="bg-[#5556d1] text-white py-2 px-4 rounded-full flex items-center justify-center">
    Start Here <FaArrowRightLong className="ml-2" width={60} />
  </button>
</div>



  </div>

  {/* Image Section */}
  <div className="flex justify-center md:justify-end  items-end">
  <div className="max-w-full max-h-[1600px] overflow-hidden relative">
          <Image
            className="object-contain"
            src="/assets/image 124.png"
            alt="Description of the image"
            width={1800} // Image width
            height={1600} // Image height
          />
        </div>
  </div>
</div>

  );
}

export default TechEvolation;
