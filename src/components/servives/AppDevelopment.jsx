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

export default function AppDev() {
  const Development = () => {
    return (
        <>

            <div className="flex gap-2 ml-0 mr-[auto] mt-8 sm:mt-[30px] md:mt-[15px] lg:mt-[50px] p-4 sm:p-6 md:p-10 w-full justify-center  h-auto">
            <h1 className="text-xl sm:text-2xl md:text-[32px] lg:text-[36px] font-bold text-white text-center">
                <span className="text-[#fe5d26] underline ml-2">M</span>obile Development
            </h1>
            <img
                src="/assets/images/img2.png"
                alt="Icon"
                className="h-[25px] sm:h-[30px] md:h-[37px] lg:h-[40px] ml-0 item-end"
            />
            </div>



          <img
            src="/assets/images/mobile.svg"
            alt="Icon"
            className="w-full md:h-[90vh] mx-auto"
          />

          <div className="flex flex-col mt-10 md:flex-row justify-center items-center md:space-x-6 space-y-6 md:space-y-0 border-y-[1px] border-y-[#222] bg-black p-6 text-white group lg:h-48">
            {/* Card 1 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-start w-full md:w-1/4 p-5">
              <div className="flex justify-center items-center text-orange-500  bg-[#fe5d26] bg-opacity-[20%] border-[#262626] border-[1px] h-[70px] w-[33%] md:w-[45%] lg:w-[50%] rounded-lg text-2xl mb-2 group-hover:h-[100px] group-hover:w-[55%] duration-300">
                <img src="/assets/images/mobile1.svg" className="h-[70%] w-[70%]" alt="Native ios " />
              </div>
              <h3 className="text-sm font-thin">
              Native iOS and Android App <br/>Development
              </h3>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-40 border-l-[1px] border-[#222]"></div>

            {/* Card 2 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-start w-full md:w-1/4 p-5">
              <div className="flex justify-center items-center text-orange-500 bg-[#fe5d26] bg-opacity-[20%] border-[#262626] border-[1px] h-[70px] w-[33%] md:w-[45%] lg:w-[50%] rounded-lg text-2xl mb-2 group-hover:h-[100px] group-hover:w-[55%] duration-300">
                <img src="/assets/images/mobile2.svg" className="h-[70%] w-[70%]" alt="cross platform app" />
              </div>
              <h3 className="text-sm font-thin">
              Cross-Platform App Development <br/>(React Native, Flutter)
              </h3>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-40 border-l-[1px] border-[#222]"></div>

            {/* Card 3 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-start w-full md:w-1/4 p-5">
              <div className="flex justify-center items-center text-orange-500 bg-[#fe5d26] bg-opacity-[20%] border-[#262626] border-[1px] h-[70px] w-[33%] md:w-[45%] lg:w-[50%] rounded-lg text-2xl mb-2 group-hover:h-[100px] group-hover:w-[55%] duration-300">
                <img src="/assets/images/mobile3.svg" className="h-[70%] w-[70%]" alt="app prototyping" />
              </div>
              <h3 className="text-sm font-thin">
              App Prototyping and UI/UX Design Integration
              </h3>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-40 border-l-[1px] border-[#222]"></div>

            {/* Card 4 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-start w-full md:w-1/4 p-5">
              <div className="flex justify-center items-center text-orange-500 bg-[#fe5d26] bg-opacity-[20%] border-[#262626] border-[1px] h-[70px] w-[33%] md:w-[45%] lg:w-[50%] rounded-lg text-2xl mb-2 group-hover:h-[100px] group-hover:w-[55%] duration-300">
                <img src="/assets/images/mobile4.svg" className="h-[70%] w-[70%]" alt="app testing" />
              </div>
              <h3 className="text-sm font-thin">
              App Testing, Deployment, and Maintenance
              </h3>
            </div>
          </div>




          <p className="text-center text-neutral-500 text-[18px] sm:text-[20px] md:text-[24px] px-6 sm:px-8 md:px-[50px] leading-8 sm:leading-9 md:leading-10 max-w-[90%] sm:max-w-[1100px] md:max-w-[1300px] mx-auto mt-6 sm:mt-8 md:mt-9 p-6 sm:p-8 md:p-10">
            Our mobile app development process begins with understanding your unique requirements, target audience, and
            business objectives to establish a strong foundation. We then craft intuitive user interfaces and develop feature-
            rich, scalable mobile applications tailored to your vision. Through rigorous quality assurance, we ensure seamless
            functionality, exceptional performance, and a flawless user experience. Finally, we deploy your app to app stores
            and provide continuous updates and support to keep it optimized and competitive in the ever-evolving digital landscape.
          </p>

          <div className='flex flex-col md:flex-row px-8 lg:px-14 mt-6'>
            <img className='md:w-1/2' src='/app.svg' alt='app'/>
            <div className='text-white'>
            <h1 className="text-3xl font-bold text-center mb-8">Mobile Development Process</h1>
      <div className="space-y-6">
        <div className=" p-3 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">1. Conceptualization</h2>
          <p>Define the app's purpose, target audience, and core features. Conduct market research to identify user needs and competition.</p>
        </div>
        <div className=" p-3 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">2. Design</h2>
          <p>Create wireframes and prototypes to visualize the app's layout and user interface. Focus on user experience to ensure intuitive navigation.</p>
        </div>
        <div className=" p-3 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">3. Development</h2>
          <p>This phase includes both front-end and back-end development. Front-end developers work on the user interface, while back-end developers handle server-side logic and database management.</p>
        </div>
        <div className=" text-white p-3 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">4. Testing</h2>
          <p>Conduct rigorous testing to identify and fix bugs, ensuring compatibility across devices and optimizing performance. This includes functional, usability, and security testing.</p>
        </div>
        
          </div>

            </div>

          </div>

          
        <div className="text-white p-3 rounded-lg shadow-md px-10 lg:px-14 p-3">
          <h2 className="text-xl font-semibold mb-2">5. Deployment</h2>
          <p>Release the app on platforms like Google Play and the Apple App Store. Ensure compliance with their guidelines and prepare for user feedback.</p>
        </div>
        <div className="text-white p-3 rounded-lg shadow-md px-10 lg:px-14 ">
          <h2 className="text-xl font-semibold mb-2">6. Maintenance and Updates: </h2>
          <p>Continuously monitor the app's performance, address user feedback, and release updates to improve functionality and security.</p>
          </div>


        
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
                  <div
                    className={`w-[75.59px] h-[51.63px] rounded-[92.19px] border-[0.92px] 
                      border-[#1f1f1f] flex items-center justify-center mt-[40px]`}
                  >
                    <div
                      className={`w-[47.94px] h-[33.19px] rounded-[124.45px] flex items-center justify-center 
                        bg-[#1a1a1a] text-white group-hover:bg-[#fe5d26] group-hover:text-[#1a1a1a] transition-all duration-300`}
                    >
                      ➔
                    </div>
                  </div>
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
                  <div
                    className={`w-[75.59px] h-[51.63px] rounded-[92.19px] border-[0.92px] 
                      border-[#1f1f1f] flex items-center justify-center mt-[40px]`}
                  >
                    <div
                      className={`w-[47.94px] h-[33.19px] rounded-[124.45px] flex items-center justify-center 
                        bg-[#1a1a1a] text-white group-hover:bg-[#fe5d26] group-hover:text-[#1a1a1a] transition-all duration-300`}
                    >
                      ➔
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      </>
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
