import React from "react";
import mission from "/assets/mission.svg";
import vision from "/assets/vision.svg";

function Mission() {
  return (
    <section className="Mission min-h-screen max-w-screen  text-[#B3B3B3] overflow-x-hidden overflow-y-hidden">
      {/* Title Section */}
      <div data-aos="fade-up"  className="title p-4">
        <h1 className="text-[50px] text-center font-bold text-[#fe5d26]  m-3">
          Mission & Vision
        </h1>
        <p className="text-[20px] lg:text-[28px] mx-4 lg:mx-10 leading-relaxed text-justify">
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
          <p className="text-[20px] leading-relaxed text-[#B3B3B3] text-justify">
          Hertzworkz creates innovative technology solutions that simplify complex challenges through AI, ML, 
          and electronic systems integration. We partner with talent, academia, and businesses to build an innovation 
          ecosystem. Our customer-centric approach delivers practical, scalable solutions that address current needs while 
          anticipating future demands. We're dedicated to excellence and advancing technology for meaningful impact.
          {/* <br/>
          We believe in fostering a culture of creativity, 
          continuous learning, and collaboration. By partnering with emerging talents, 
          academic institutions, and businesses, we aim to build an ecosystem that nurtures 
          innovation and creates opportunities for growth.
          <br/>
          Our approach is driven by a deep commitment to excellence, adaptability, and customer-centricity. 
          Every product and service we develop is designed to not only meet current industry needs but also 
          to anticipate future demands. By embracing the latest advancements and staying ahead of trends, 
          HertzWorkz is dedicated to shaping the future of technology with solutions that are practical, scalable, and impactful. */}
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div data-aos="fade-left"  className="flex flex-col-reverse lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 mt-4 mx-8">
        {/* Vision Content */}
        <div className="text-white font-sans max-w-2xl text-center lg:text-left">
          <h1 className="text-[29.5px] mb-4">Vision</h1>
          <p className="text-[20px] leading-relaxed text-[#B3B3B3] text-justify">
          Hertzworkz  envisions a future where technology seamlessly bridges 
          the gap between challenges and solutions, enabling businesses and individuals to 
          unlock their full potential. We strive to be a global leader in innovation by developing 
          cutting-edge solutions in web applications, artificial intelligence, machine learning, 
          and electronic development. Our goal is to create intelligent, efficient, and 
          sustainable technologies that redefine industries and set new benchmarks in problem-solving.
          </p>
        </div>

        {/* Orange Line */}
        <div className="border-l-2 lg:block hidden border-[#FE5D26] h-[350px]"></div>

        {/* Vision Image */}
        <img
          data-aos="fade-right"
          data-aos-offset="500" 
          src={vision}
          alt="Vision"
          className="w-full lg:w-[25%] h-auto max-h-[350px] object-cover"
        />
      </div>
    </section>
  );
}

export default Mission;
