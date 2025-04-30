import React from 'react';
import icon1 from '/assets/ChoosePage/Icon1.svg';
import icon2 from '/assets/ChoosePage/Icon2.svg';
import icon3 from '/assets/ChoosePage/Icon3.svg';
import icon4 from '/assets/ChoosePage/Icon4.svg';
import icon5 from '/assets/ValuePage/Icon1.svg';
import icon6 from '/assets/ValuePage/Icon2.svg';
import icon7 from '/assets/ValuePage/Icon3.svg';
import icon8 from '/assets/ValuePage/Icon4.svg';
import icon9 from '/assets/ValuePage/Icon.svg';

function ValuePage() {
  const cardData = [
    {
      title: "Proven expertise across industries",
      icon: icon1,
      subTitle: "Our extensive experience spans diverse sectors, enabling us to deliver solutions that meet unique industry needs.",
    },
    {
      title: "Client-focused approach for personalized solutions",
      icon: icon2,
      subTitle: "We prioritize understanding your goals to create tailored strategies that drive meaningful results.",
    },
    {
      title: "Cutting-edge technology and design practices",
      icon: icon3,
      subTitle: "We leverage the latest tools and trends to craft innovative, future-ready solutions.",
    },
    {
      title: "Reliable support and continuous improvement",
      icon: icon4,
      subTitle: "Our commitment to excellence includes ongoing support and enhancements to ensure long-term success.",
    },
  ];

  const valueData = [
    {
      icon: icon8,
      title: "Trust",
      subTitle: "We build lasting relationships through reliable and transparent solutions.",
    },
    {
      icon: icon6,
      title: "Excellence",
      subTitle: "We uphold the highest standards in every service we provide.",
    },
    {
      icon: icon7,
      title: "Client-Centric",
      subTitle: "Your needs and goals drive everything we do.",
    },
    {
      icon: icon8,
      title: "Our Commitment",
      subTitle: "We are dedicated to delivering exceptional service and support at every step.",
    },
  ];

  return (
    <section className="bg-black pt-6 mt-5 z-0 max-w-screen overflow-x-hidden overflow-y-hidden">
      {/* Top Content */}
      

      {/* Bottom Content */}
      <div className="ButtomContent justify-center align-middle grid grid-cols-1 md:grid-cols-3">
        <div data-aos="fade-right"  className="p-12">
          <img src={icon9} alt="Our Values Icon" />
          <br />
          <p className="text-3xl font-bold mb-2 text-left text-white">Our Values</p>
          <p className="text-[#b3b3b3] p-4 text-xs space-x-8 space-y-8 justify-center text-left text-justify">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
          </p>
        </div>
        {/* Heading1 */}
        <div data-aos="fade-left"  className="border-8 text-white mx-2 md:mx-8 md:col-span-2 rounded-xl border-[#262626] h-fit w-fit grid grid-cols-2 grid-rows-2 bg-[#141414]">
          {valueData.map((value, index) => (
            <div
              key={index}
              className="p-2 md:p-4 flex flex-col h-40 justify-center items-start text-left border border-[#262626]"
            >
              <div className="hover:scale-105 cursor-pointer ease-in-out duration-300 ps-5">
              <div className="flex items-center space-x-2 mb-2">
                <img src={value.icon} alt={value.title} className="w-10 h-10 p-2 border-2 rounded-full border-[#34a353]" />
                <p className="text-sm font-bold text-white md:text-lg">{value.title}</p>
              </div>
              <p className="text-csLightGray text-xs md:text-sm">{value.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuePage;
