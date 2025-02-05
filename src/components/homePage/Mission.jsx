import React from "react";
import mission from "/assets/mission.png";
import vision from "/assets/vision.png";

function Mission() {
  return (
    <section className="Mission min-h-screen max-w-screen bg-black text-[#B3B3B3] ">
      {/* Title Section */}
      <div className="title p-4">
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
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 mt-4 mx-8 mb-20">
        {/* Mission Image */}
        <img
          src={mission}
          alt="Mission"
          className="w-full  lg:w-[25%] h-auto max-h-[460px] object-cover"
        />

        {/* Orange Line */}
        <div className="border-l-2 lg:block hidden border-[#FE5D26] h-[250px]"></div>

        {/* Mission Content */}
        <div className="text-white font-sans max-w-2xl text-center lg:text-left">
          <h1 className="text-[29.5px] mb-4">Mission</h1>
          <p className="text-[20px] leading-relaxed text-[#B3B3B3]">
            At YourBank, our mission is to empower our customers to achieve
            financial success. We are dedicated to delivering innovative banking
            solutions that cater to their unique needs. Through personalized
            services, expert guidance, and cutting-edge technology, we aim to
            build strong, lasting relationships with our customers. Our mission
            is to be their trusted partner, helping them navigate their
            financial journey and realize their dreams.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 mt-4 mx-8">
        {/* Vision Content */}
        <div className="text-white font-sans max-w-2xl text-center lg:text-left">
          <h1 className="text-[29.5px] mb-4">Vision</h1>
          <p className="text-[20px] leading-relaxed text-[#B3B3B3]">
            Our vision at YourBank is to redefine banking by creating a seamless
            and personalized experience for our customers. We envision a future
            where banking is accessible, transparent, and tailored to individual
            preferences. Through continuous innovation and collaboration, we
            strive to be at the forefront of the industry, setting new standards
            for customer-centric banking. Our vision is to be the preferred
            financial institution, known for our unwavering commitment to
            excellence, trust, and customer satisfaction.
          </p>
        </div>

        {/* Orange Line */}
        <div className="border-l-2 lg:block hidden border-[#FE5D26] h-[350px]"></div>

        {/* Vision Image */}
        <img
          src={vision}
          alt="Vision"
          className="w-full lg:w-[25%] h-auto max-h-[350px] object-cover"
        />
      </div>
    </section>
  );
}

export default Mission;
