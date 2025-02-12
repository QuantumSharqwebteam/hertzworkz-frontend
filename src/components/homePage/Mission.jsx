import React from "react";
import mission from "/assets/mission.png";
import vision from "/assets/vision.png";

function Mission() {
  return (
    <section className="Mission min-h-screen max-w-screen bg-black text-[#B3B3B3] overflow-x-hidden overflow-y-hidden">
      {/* Title Section */}
      <div data-aos="fade-up"  className="title p-4">
        <h1 className="text-[50px] text-center font-bold text-[#fe5d26]  m-3">
          Mission & Vision
        </h1>
        <p className="text-[20px] lg:text-[28px] mx-4 lg:mx-10 leading-relaxed">
          We envision being a leading force in the industry, driven by
          innovation, integrity, and inclusivity, creating a brighter financial
          future for individuals and businesses while maintaining a strong
          commitment to customer satisfaction and community development.
        </p>
      </div>

      {/* Mission Section */}
      <div data-aos="fade-left"  className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 mt-4 mx-8 mb-20">
        {/* Mission Image */}
        <img
          src={mission}
          alt="Mission"
          className="w-full  lg:w-[25%] h-auto max-h-[460px] object-cover"
        />

        {/* Orange Line */}
        <div className="border-l-2 lg:block hidden border-[#FE5D26] h-[250px]"></div>

        {/* Mission Content */}
        <div data-aos="fade-right"  className="text-white font-sans max-w-2xl text-center lg:text-left">
          <h1 className="text-[29.5px] mb-4">Mission</h1>
          <p className="text-[20px] leading-relaxed text-[#B3B3B3]">
          Our mission is web and mobile development is to deliver high-quality, user-centric solutions that drive 
          business growth and enhance user experiences. It aims to align with the vision of leveraging innovative 
          technologies to create accessible, efficient, and impactful applications that meet the needs of users and businesses alike.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div data-aos="fade-left"  className="flex flex-col-reverse lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 mt-4 mx-8">
        {/* Vision Content */}
        <div className="text-white font-sans max-w-2xl text-center lg:text-left">
          <h1 className="text-[29.5px] mb-4">Vision</h1>
          <p className="text-[20px] leading-relaxed text-[#B3B3B3]">
          Our vision is web and mobile development focuses on creating seamless, 
          user-centric experiences that leverage emerging technologies like AI, 
          cloud computing, and enhanced security. It aims to integrate applications 
          across platforms, ensuring accessibility, performance, and innovation to 
          meet evolving user needs.
          </p>
        </div>

        {/* Orange Line */}
        <div className="border-l-2 lg:block hidden border-[#FE5D26] h-[350px]"></div>

        {/* Vision Image */}
        <img
          data-aos="fade-right"
          data-aos-offset="300" 
          src={vision}
          alt="Vision"
          className="w-full lg:w-[25%] h-auto max-h-[350px] object-cover"
        />
      </div>
    </section>
  );
}

export default Mission;
