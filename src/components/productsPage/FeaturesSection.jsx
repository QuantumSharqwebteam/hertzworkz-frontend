import React from "react";
import timelyDelivery from "/assets/timelyDelivery.svg"
import userCentric from "/assets/userCentric.svg"
import cuttingEdge from "/assets/cuttingEdge.svg"
import customizedSolution from "/assets/customizedSolution.svg"
import strategic from "/assets/strategic.svg" 
function FeaturesSection() {
  const features = [
    {
      title: "Strategic Planning",
      description:
        "Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience.",
      icon:strategic,
    },
    {
      title: "Customized Solutions",
      description:
        "We believe in tailoring our services to suit each project's unique requirements, resulting in solutions that perfectly align with our clients' brand identities.",
      icon: customizedSolution,
    },
    {
      title: "User-Centric Approach",
      description:
        "Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.",
      icon: userCentric,
    },
    {
      title: "Cutting-Edge Technologies",
      description:
        "We leverage the latest technologies and industry best practices to deliver high-performance and future-proof solutions.",
      icon:cuttingEdge,
    },
    {
      title: "Timely Delivery",
      description:
        "We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality.",
      icon: timelyDelivery,
    },
  ];

  return (
    <section className="text-center font-segoe overflow-y-hidden overflow-x-hidden">
      <h2 className=" text-2xl lg:text-4xl font-bold mb-4 text-white">
        <span className="text-blue-500">Key Features</span> of Our Projects
      </h2>
      <p className="text-gray-400 text-sm lg:text-base max-w-3xl mx-auto mb-12">
        Partnering with DigitX offers a multitude of advantages. Experience
        increased brand visibility, improved customer engagement, and higher
        ROI. Our tailored solutions are designed to meet your unique business
        needs, ensuring lasting success.
      </p>
      <div  className="grid grid-cols-1 sm:grid-cols-2 lg:flex flex-wrap justify-center align center  mx-4 gap-8 bg-[rgba(255,255,255,0.07)] rounded">
        {features.map((feature, index) => (
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
            key={index}
            className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow lg:w-[400px]"
          >
            <div className="flex items-center justify-center">
              <div className="text-white rounded-full w-14 h-14 flex items-center justify-center bg-blue-500 text-3xl mb-4">
                <img src={feature.icon} alt={feature.title} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
            <p className="text-gray-400 text-sm lg:text-base">{feature.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default FeaturesSection;
