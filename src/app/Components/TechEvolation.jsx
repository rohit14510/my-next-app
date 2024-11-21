import React from "react";

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
    <div className="input-container flex justify-center  items-center space-x-2">
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent w-[150px] px-4 py-2 rounded-l-md focus:outline-none focus:border-none"
      />
      <button className="search-btn bg-blue-600 text-white px-4 py-2 rounded-r-md">
        Start Here
      </button>
    </div>
  </div>

  {/* Image Section */}
  <div className="flex justify-center md:justify-end  items-end">
    <img
      className="mx-auto md:mx-0"
      src="/assets/image 124.png"
      alt="Description of the image"
      width={1011}
      height={873}
    />
  </div>
</div>

  );
}

export default TechEvolation;
