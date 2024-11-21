import React from 'react'
import Head from 'next/head';

function LookingFor() {
  return (
<section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          What Are We Looking For?
        </h2>
        <p className=" mb-12 text-[#212121]">
          We’re not just developing websites and apps here, we’re making values and the foundation of our company.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="JobCard_1 text-white p-6 ">
            <h3 className="text-xl font-semibold mb-4">Courage And Audacity</h3>
            <p className="text-sm">
              Winning in a competitive environment needs the person to be courageous enough to take bold steps. We are
              looking for people who are audacious and courageous enough to go ahead and take the challenges head-on and
              work towards getting fruitful results.
            </p>
            <div className="JobCard_1Img">
            <img
          className="mx-auto md:mx-0"
          src="/assets/Ornament 12.png"
          alt="Description of the image"
          width={50}
          height={50}
        />
            </div>
          </div>

          {/* Card 2 */}
          <div className="JobCard_2 p-6 ">
            <h3 className="text-xl font-semibold mb-4">Curiosity</h3>
            <p className="text-sm">
              When a person is curious, they look for things very differently. We’re looking for someone who is always
              curious and eager to know the logic behind anything professional happening within the organization.
            </p>
            <div className="JobCard_1Img">
            <img
          className="mx-auto md:mx-0"
          src="/assets/Looper-1.png"
          alt="Description of the image"
          width={50}
          height={50}
        />
            </div>
          </div>

          {/* Card 3 */}
          <div className="JobCard_3 p-6 ">
            <h3 className="text-xl font-semibold mb-4">Solidarity And Integrity</h3>
            <p className="text-sm">
              Many jobs require teamwork, the ability to work efficiently and in tandem with a team is a strength that
              is what we are looking for. We want someone who brings out the best in other team members. We’re seeking
              the one who takes responsibility and learns from their own mistakes to show integrity and righteous
              behavior.
            </p>
            <div className="JobCard_1Img">
            <img
          className="mx-auto md:mx-0"
          src="/assets/Topology-1.png"
          alt="Description of the image"
          width={40}
          height={40}
        />
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default LookingFor