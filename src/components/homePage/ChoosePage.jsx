import React from 'react';
import sampleVideo from '/assets/videos/space.mp4';
import buildings from '/assets/space building.png';
import icon1 from '/assets/ChoosePage/Icon1.svg';
import icon2 from '/assets/ChoosePage/Icon2.svg';
import icon3 from '/assets/ChoosePage/Icon3.svg';
import icon4 from '/assets/ChoosePage/Icon4.svg';
import task from '/assets/task.svg';
import person from '/assets/person.svg';


function ChoosePage() {
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

  return (
    <section className="choosePage  max-w-screen bg-black text-white bg-cover bg-center bg-no-repeat bg-[url('/assets/bgblue.svg')] overflow-x-hidden overflow-y-hidden">
      {/* Top Portion */}
      <div data-aos="fade-up"  className="topPortion  text-center p-8">
        <h1 className=" text-[50px] font-bold text-[#fe5d26] m-10 mt-24">
          Why Choose Us<span className="text-white">?</span>
        </h1>
        <p className="md:text-3xl sm:text-xl italic mb-4">
          <span className="text-csblue2">"</span>Excellence is not just what we{' '}
          <span className="text-csblue2 underline">deliver</span>; it’s who we are
          <span className="text-csblue2">"</span>
        </p>
        <p className="text-2xl tracking-widest px-8 ">
          We are committed to delivering excellence through innovative solutions tailored to your needs. Our focus is on building lasting relationships, ensuring client satisfaction, and consistently exceeding expectations.
        </p>
      </div>

      <div className=' max-w-screen'>
        <div className='flex flex-col justify-center items-center max-w-screen lg:flex-row px-6' >
          <img data-aos="fade-right"  src={task} alt='' className='w-full md:hidden  md:w-1/2 lg:block lg:h-[70vh]'/>
          <img data-aos="fade-left"  src={person} alt='' className='hidden md:block w-3/5 lg:h-[70vh]'/>
        </div>

        <div data-aos="fade-up"  className="BelowContent text-white grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center p-6 text-center ${
              index < 3 ? index==1?"lg:border-r-2 lg:border-white":'md:border-r-2 md:border-white' : ''
            } `}
          >
            <img src={card.icon} alt={card.title} className="w-16 mb-4" />
            <h3 className="text-lg font-bold mb-2">{card.title}</h3>
            <p className="text-sm text-csLightGray">{card.subTitle}</p>
          </div>
        ))}
      </div>
      </div>

      
      

    </section>
  );
}

export default ChoosePage;
