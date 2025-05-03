import DesignServices from '../servicePage/designServices';
import AimlServices from '../servicePage/aiml';
import Navbar from "../navbar"
import EmbeddedSystems from '../servicePage/embedded';
import BlockChain from '../servicePage/blockChain'
import OurStory from '../servicePage/ourStory';
import DesignStages from '../servicePage/Applicationdesignstages';
import ContactFooter from '../contactPage/contactFooter';

const services = [
    {
      id: 1,
      title: "Expertise That Drives Results",
      description: "Our team of seasoned professionals brings years of experience and expertise to the table.",
      icon: "/assets/images/developmentServices/ds1.svg",
    },
    {
      id: 2,
      title: "Tailored Business Solutions",
      description: "We understand that every business is unique. That's why our solutions are customized.",
      icon: "/assets/images/developmentServices/ds2.svg",
    },
    {
      id: 3,
      title: "Cutting-Edge Web Design",
      description: "Leave a lasting impression on your audience with our top-notch web design services.",
      icon: "/assets/images/developmentServices/ds3.svg",
    },
    {
      id: 4,
      title: "Mobile-First Approach",
      description:"In today's mobile-centric world, we prioritize mobile-first design to ensure your website.",
      icon: "/assets/images/developmentServices/ds4.svg",
    },
    {
      id: 5,
      title: "Marketing Strategies",
      description: "Our data-driven marketing strategies allow us to target the right audience with precision.",
      icon: "/assets/images/developmentServices/ds5.svg",
    },
    {
      id: 6,
      title: "Search Engine Optimization",
      description: "Boost your online visibility with our expert SEO techniques.",
      icon: "/assets/images/developmentServices/ds6.svg",
    },
  ];

export default function WebDev() {
  const HorizontalLine = () => {
    return (
      <div className="w-full flex justify-center">
        {/* Adjust the width and padding */}
        <div className="w-full max-w-screen-2xl mx-auto px-10">
          <hr className="border-[1px] border-gray-300" />
        </div>
      </div>
    );
  };


  const Development = () => {
    return (
        <div className='overflow-x-hidden overflow-y-hidden'>

          <div className="flex gap-2 ml-0 mr-[auto] mt-8 sm:mt-[40px] md:mt-[50px] lg:mt-[40px] p-4 sm:p-6 md:p-10 w-full sm:w-[375px] md:w-[450px] lg:w-full h-auto justify-center">
            <h1 className="text-xl sm:text-2xl md:text-[32px] lg:text-[36px] font-bold text-white text-center">
            <span className="text-[#fe5d26] underline ml-2">W</span>eb Development
            </h1>
            <img
              src="/assets/images/img5.svg"
              alt="Icon"
              className="h-[20px] sm:h-[25px] md:h-[30px] lg:h-[35px] ml-2 item-end"
            />
          </div>

          <img
            src="/assets/images/web.svg"
            alt="Icon"
            className="h-auto w-full max-h-[845px] sm:w-[80%] md:w-[70%] lg:w-[1180px] lg:h-[669.89px] lg:top-[8078px] lg:left-[50px] lg:gap-0 lg:rounded-tl-[19.25px] lg:rounded-tr-none mx-auto "
          />



<div className="flex flex-wrap mt-10 mx-4 md:mx-12 justify-center items-stretch border-y-[1px] border-y-[#222] bg-black p-4 md:p-6 text-white group lg:h-48">
  {/* Card */}
  {[...Array(4)].map((_, index) => (
    <div key={index} className="w-1/2 md:w-1/4 p-3 flex flex-col items-center md:items-start text-center md:text-start">
      <div className="flex justify-center items-center text-orange-500 bg-transparent border-[#262626] border-[1px] h-[70px] w-[60%] md:w-[45%] lg:w-[50%] rounded-lg text-2xl mb-2 group-hover:h-[80px] group-hover:w-[55%] duration-300">
        <img src={`/assets/images/web${index + 1}.svg`} className="h-[70%] w-[70%]" alt={`Card ${index + 1}`} />
      </div>
      <h3 className="text-sm font-thin">
        {[
          "Front-End Development (HTML, CSS, JavaScript, React)",
          "Back-End Development (Node, Python, Java)",
          "Content Management System (CMS) Development (WordPress, Drupal)",
          "E-Commerce Platform Development (Magento, Shopify)"
        ][index]}
      </h3>
    </div>
  ))}
</div>




          <p className="text-center text-neutral-500 text-[18px] sm:text-[20px] md:text-[24px] px-8 my-8 text-justify">
            Our web development process starts with a deep understanding of your goals, audience, and business needs to
            create a solid blueprint for success. We design and build responsive, visually appealing, and highly functional
            websites tailored to your vision. Rigorous testing ensures seamless performance, cross-browser compatibility, and
            a flawless user experience. Once launched, we offer continuous updates and support to keep your website secure,
            optimized, and aligned with the latest industry trends.
          </p>

          <div className='flex flex-col lg:flex-row px-8 my-12 lg:h-[60vh] max-w-screen'>
            <img className='md:h-80 lg:h-full lg:w-1/2' src='/web.svg' alt='web' />
            <div className='text-gray-400 text-2xl  my-auto mx-1 text-center md:mx-10 '>
              <p className='mb-10 text-justify'><span className='text-orange-600 font-semibold '>Front-End Development: </span>They are focuses on the our client-facing side of web applications. Front-end developers work on the visual aspects that users interact with, using languages like HTML, CSS, JavaScript, React. They ensure that websites are responsive and user-friendly across different devices.</p>
              <p className='text-justify'><span className='text-orange-600 font-semibold '>Back-End Development: </span> This involves server-side programming, where developers manage the database, server, and application logic. They use languages such as PHP, Ruby, and Python to create the underlying structure that supports the front end.</p>
            </div>
          </div>

          <HorizontalLine />


        
        <div className="bg-black text-white py-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold w-[90%] max-w-[724px] h-auto m-auto text-center">
          <span className="text-[#fe5d26] underline ml-2">D</span>evelopment Services
        </h2>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* First Row Group */}
          <div className="col-span-3 group grid grid-cols-1 md:grid-cols-3 gap-6">
            {services
              .filter((service) => [1, 2, 3].includes(service.id))
              .map((service) => (
                <div
                  key={service.id}
                  className={`flex flex-col items-center text-center p-6 border-[#1f1f1f] 
                    ${
                      [1, 2].includes(service.id) ? "md:border-r" : ""
                    } group-hover:text-white group-hover: transition-all duration-300`}
                >
                  <div
                    className={`bg-[#1a1a1a] p-[14.75px] h-[75px] w-[75px] rounded-full border-[5.53px] 
                      border-[#4d4d4d] bg-gradient-to-tl from-[#000000] to-[#4d4d4d] 
                      mb-4 flex items-center justify-center 
                      group-hover:border-[#fe5d26] group-hover:bg-[#fe5d26] transition-all duration-300`}
                  >
                    <img
                      src={service.icon}
                      className="m-auto mt-[3.5px] group-hover:brightness-200 fill-[#fe5d26] transition-all duration-300"
                      alt="icon"
                    />
                  </div>
                  <h3 className="text-lg font-semibold leading-[27.66px] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-semibold leading-[22.13px] text-[14.75px]">
                    {service.description}
                  </p>
                  {/* <div
                    className={`w-[75.59px] h-[51.63px] rounded-[92.19px] border-[0.92px] 
                      border-[#1f1f1f] flex items-center justify-center mt-[40px]`}
                  >
                    <div
                      className={`w-[47.94px] h-[33.19px] rounded-[124.45px] flex items-center justify-center 
                        bg-[#1a1a1a] text-white group-hover:bg-[#fe5d26] group-hover:text-[#1a1a1a] transition-all duration-300`}
                    >
                      ➔
                    </div>
                  </div> */}
                </div>
              ))}
          </div>
      
          {/* Second Row Group */}
          <div className="col-span-3 group grid grid-cols-1 md:grid-cols-3 gap-6">
            {services
              .filter((service) => [4, 5, 6].includes(service.id))
              .map((service) => (
                <div
                  key={service.id}
                  className={`flex flex-col items-center text-center p-6 border-[#1f1f1f] 
                    ${
                      [4, 5].includes(service.id) ? "md:border-r" : ""
                    } group-hover:text-white group-hover: transition-all duration-300`}
                >
                  <div
                    className={`bg-[#1a1a1a] p-[14.75px] h-[75px] w-[75px] rounded-full border-[5.53px] 
                      border-[#4d4d4d] bg-gradient-to-tl from-[#000000] to-[#4d4d4d] 
                      mb-4 flex items-center justify-center 
                      group-hover:border-[#fe5d26] group-hover:bg-[#fe5d26] transition-all duration-300`}
                  >
                    <img
                      src={service.icon}
                      className="m-auto mt-[3.5px] group-hover:brightness-200 transition-all duration-300"
                      alt="icon"
                    />
                  </div>
                  <h3 className="text-lg font-semibold leading-[27.66px] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-semibold leading-[22.13px] text-[14.75px]">
                    {service.description}
                  </p>
                  {/* <div
                    className={`w-[75.59px] h-[51.63px] rounded-[92.19px] border-[0.92px] 
                      border-[#1f1f1f] flex items-center justify-center mt-[40px]`}
                  >
                    <div
                      className={`w-[47.94px] h-[33.19px] rounded-[124.45px] flex items-center justify-center 
                        bg-[#1a1a1a] text-white group-hover:bg-[#fe5d26] group-hover:text-[#1a1a1a] transition-all duration-300`}
                    >
                      ➔
                    </div>
                  </div> */}
                </div>
              ))}
          </div>
        </div>
      </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <Development />
      <ContactFooter />
      
    </>
  );
}
