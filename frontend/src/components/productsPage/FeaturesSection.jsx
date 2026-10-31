import React from "react";
import timelyDelivery from "/assets/timelyDelivery.svg";
import userCentric from "/assets/userCentric.svg";
import cuttingEdge from "/assets/cuttingEdge.svg";
import customizedSolution from "/assets/customizedSolution.svg";
import strategic from "/assets/strategic.svg";

function FeaturesSection() {
  const features = [
    {
      title: "Strategic Planning",
      description: "Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience.",
      icon: strategic,
      position: "top-40 left-0 -translate-x-40",
    },
    {
      title: "Customized Solutions",
      description: "We believe in tailoring our services to suit each project's unique requirements, resulting in solutions that perfectly align with our clients' brand identities.",
      icon: customizedSolution,
      position: "top-3/4 lg:left-1/4 sm:left-24 -translate-x-40",
    },
    {
      title: "User-Centric Approach",
      description: "Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.",
      icon: userCentric,
      position: "top-40 right-0",
    },
    {
      title: "Cutting-Edge Technologies",
      description: "We leverage the latest technologies and industry best practices to deliver high-performance and future-proof solutions.",
      icon: cuttingEdge,
      position: "top-0 lg:left-[650px] sm:left-72 -translate-y-40",
    },
    {
      title: "Timely Delivery",
      description: "We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality.",
      icon: timelyDelivery,
      position: "top-3/4 lg:right-1/4 sm:right-24 translate-x-40",
    },
  ];

  return (
    <section className="text-white font-segoe">
      {/* Desktop radial layout */}
      <div className="relative hidden sm:block h-[600px] w-full text-center ">
        <h2 className="absolute lg:top-1/2 sm:top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl lg:text-4xl font-bold z-10">
          <span className="text-blue-500">Key Features</span> of Our Projects
        </h2>

        {features.map((feature, index) => (
          <div
            key={index}
            className={`absolute ${feature.position} w-[250px] text-center p-4`}
            data-aos="fade-in"
          >
            <div className="mx-auto bg-blue-500 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold whitespace-nowrap mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile and Tablet stacked layout */}
      <div className="block sm:hidden px-4 py-8">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8">
          <span className="text-blue-500">Key Features</span> of Our Projects
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => {
            if (feature.title === "Timely Delivery") {
              return (
                <div key={index} className="col-span-2 text-center p-4 rounded-md shadow-md">
                  <div className="mx-auto bg-blue-500 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 whitespace-nowrap">{feature.title}</h3>
                  <p className="text-gray-300 text-sm ">{feature.description}</p>
                </div>
              );
            }
            return (
              <div key={index} className="text-center p-4 rounded-md shadow-md">
                <div className="mx-auto bg-blue-500 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2 ">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;