import React from 'react';
import sampleVideo from '/assets/videos/space.mp4';
import buildings from '/assets/space building.png';


function ChoosePage() {
  // const cardData = [
  //   {
  //     title: "Proven expertise across industries",
  //     icon: icon1,
  //     subTitle: "Our extensive experience spans diverse sectors, enabling us to deliver solutions that meet unique industry needs.",
  //   },
  //   {
  //     title: "Client-focused approach for personalized solutions",
  //     icon: icon2,
  //     subTitle: "We prioritize understanding your goals to create tailored strategies that drive meaningful results.",
  //   },
  //   {
  //     title: "Cutting-edge technology and design practices",
  //     icon: icon3,
  //     subTitle: "We leverage the latest tools and trends to craft innovative, future-ready solutions.",
  //   },
  //   {
  //     title: "Reliable support and continuous improvement",
  //     icon: icon4,
  //     subTitle: "Our commitment to excellence includes ongoing support and enhancements to ensure long-term success.",
  //   },
  // ];

  return (
    <section className="choosePage max-h-screen max-w-screen bg-black text-white ">
      {/* Top Portion */}
      <div className="topPortion  text-center p-8">
        <h1 className=" text-[50px] font-bold text-[#fe5d26] m-10">
          Why Choose Us<span className="text-white">?</span>
        </h1>
        <p className="md:text-3xl sm:text-xl italic mb-4">
          <span className="text-csblue2">"</span>Excellence is not just what we{' '}
          <span className="text-csblue2 underline">deliver</span>; it’s who we are
          <span className="text-csblue2">"</span>
        </p>
        <p className="text-2xl tracking-widest px-8">
          We are committed to delivering excellence through innovative solutions tailored to your needs. Our focus is on building lasting relationships, ensuring client satisfaction, and consistently exceeding expectations.
        </p>
      </div>

      {/* Video Section */}
      <div className="relative h-[60vh] w-full z-50">
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
          <source src={sampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <img
          src={buildings}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80"
          alt="Centered Building"
        />
      </div>

    </section>
  );
}

export default ChoosePage;
