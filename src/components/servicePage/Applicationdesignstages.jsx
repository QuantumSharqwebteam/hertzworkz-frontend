const DesignStages = () => {

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

  const HorizontalLine = () => {
    return (
      <div className="w-full flex justify-center">
        <div className="w-full max-w-screen-2xl mx-auto px-10">
          <hr className="border-[1px] border-gray-300" />
        </div>
      </div>
    );
  };

return (
    <>
      {/* APPLICATION DESIGN STAGES */}

      <HorizontalLine />

      <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold relative text-glow2 w-full sm:w-[600px] md:w-[724px] lg:w-[800px] h-auto sm:h-[80px] md:h-[74px] lg:h-[90px] p-6 sm:p-8 md:p-[50px]">
  Application Design Stages
</h1>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 p-6 sm:p-12 lg:p-20 group">
  {[
    { src: "/assets/images/1.svg", alt: "Analysis", title: "Analysis" },
    { src: "/assets/images/2.svg", alt: "Design", title: "Design" },
    { src: "/assets/images/3.svg", alt: "Development", title: "Development" },
    { src: "/assets/images/4.svg", alt: "Testing", title: "Testing" },
    { src: "/assets/images/5.svg", alt: "Launching", title: "Launching" },
    { src: "/assets/images/6.svg", alt: "Support", title: "Support" },
  ].map((item, index) => (
    <div
      key={index}
      className={`bg-black border-neutral-400 text-center w-full sm:w-[220px] h-auto border-[0.5px] p-4 sm:p-[12px] gap-4 transform transition-transform duration-500 ${
        index === 0 || index === 2
          ? "group-hover:translate-y-[-30px]" 
          : index === 1
          ? "group-hover:translate-y-[-60px]" 
          : index === 3 || index === 5
          ? "group-hover:translate-y-[30px]" 
          : index === 4
          ? "group-hover:translate-y-[60px]" 
          : ""
      } group-hover:scale-135 group-hover:scale-135`} 
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-[150px] sm:w-[200px] h-auto mx-auto transition-transform duration-500 group-hover:scale-140"
      />
      <p className="font-bold text-lg sm:text-xl mt-4 text-white transition-transform duration-500 group-hover:scale-140">
        {item.title}
      </p>
    </div>
  ))}
</div>

{/*Development Services*/}

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






{/* TRANSFORMATION */}

<HorizontalLine/>

<section className="bg-black text-white flex flex-col items-center p-20 relative h-auto sm:h-auto  md:h-auto lg:h-[1100px]">
  {/* Semicircle Gradient Background */}
  <div
    className="absolute right-0 top-0 h-full w-[500px]"
    style={{
      background: "radial-gradient(circle at left, rgba(254, 93, 38, 0.8), transparent 70%)",
      borderTopLeftRadius: "250px",
      borderBottomLeftRadius: "250px",
      zIndex: "-10",
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 w-full flex flex-col md:flex-col lg:flex-row lg:flex-wrap lg:justify-center gap-12 pb-40 md:pb-60">
    {/* Step 1 */}
    <div className="flex flex-col items-center sm:items-start lg:absolute lg:-top-9 lg:right-64 gap-4 w-full sm:w-[380px] h-auto border-dashed border-[2px] border-[#86868B] rounded-[12px] p-[16px]">
      <div className="text-[40px] font-bold text-gray-400 mb-[8px]">01.</div>
      <img
        src="/assets/images/01page.svg"
        alt="Step 1 Icon"
        className="w-[300px] h-auto sm:h-[214px] mb-1"
      />
      <p className="text-gray-400 text-[14px] leading-[20px] text-center sm:text-left">
        We begin by understanding your vision, defining requirements, and creating a roadmap to ensure every aspect aligns with your business goals.
      </p>
    </div>

  {/* Step 2 */}
  <div className="flex flex-col items-center sm:items-start lg:absolute lg:top-[280px] lg:-left-52 gap-4 w-full sm:w-[380px] h-auto border-dashed border-[2px] border-[#86868B] rounded-[12px] p-[16px]">
      <div className="text-[40px] font-bold text-gray-400 mb-[8px]">02.</div>
      <img
        src="/assets/images/02page.svg"
        alt="Step 2 Icon"
        className="w-full sm:w-[300px] sm:h-[214px] h-auto mb-1 object-contain"
      />
      <p className="text-gray-400 text-[14px] leading-[20px] text-center sm:text-left">
        We bring your ideas to life using cutting-edge design and development practices, delivering solutions that are both functional and visually appealing.
      </p>
    </div>

    {/* Step 3 */}
    <div className="flex flex-col items-center sm:items-start lg:absolute lg:top-[560px] lg:left-52 gap-4 w-full sm:w-[380px] h-auto border-dashed border-[2px] border-[#86868B] rounded-[12px] p-[16px]">
      <div className="text-[40px] font-bold text-gray-400 mb-[8px]">03.</div>
      <img
        src="/assets/images/03page.svg"
        alt="Step 3 Icon"
        className="w-[300px] h-auto sm:h-[214px] mb-1"
      />
      <p className="text-gray-400 text-[14px] leading-[20px] text-center sm:text-left">
        Rigorous testing ensures a flawless product, followed by seamless deployment to make your solution ready for the world.
      </p>
    </div>
  
  </div>
</section>


{/*MOBILE DEVELOPMENT*/}

<HorizontalLine/>
<div className="flex gap-2 ml-0 mr-[auto] mt-8 sm:mt-[30px] md:mt-[15px] lg:mt-[50px] p-4 sm:p-6 md:p-10 w-full sm:w-[375px] md:w-[450px] lg:w-[600px] h-auto">
  <h1 className="text-xl sm:text-2xl md:text-[32px] lg:text-[36px] font-bold text-white flex">
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
  className="h-auto max-h-[845px] w-full sm:w-[80%] md:w-[70%] lg:w-[60%] top-[6574px] left-[140px] ml-0 item-end"
/>

<div className="flex flex-col mt-10 md:flex-row justify-center items-center md:space-x-6 space-y-6 md:space-y-0 border-y-[1px] border-y-[#222] bg-black p-6 text-white group">
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

{/*WEB DEVELOPMENT*/}

<HorizontalLine />


<div className="flex gap-2 ml-0 mr-[auto] mt-8 sm:mt-[40px] md:mt-[50px] lg:mt-[40px] p-4 sm:p-6 md:p-10 w-full sm:w-[375px] md:w-[450px] lg:w-[600px] h-auto">
  <h1 className="text-xl sm:text-2xl md:text-[32px] lg:text-[36px] font-bold text-white flex">
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
  className="h-auto w-full max-h-[845px] sm:w-[80%] md:w-[70%] lg:w-[1180px] lg:h-[669.89px] lg:top-[8078px] lg:left-[50px] lg:gap-0 lg:rounded-tl-[19.25px] lg:rounded-tr-none "
/>



<div className="flex flex-col mt-10 md:flex-row justify-center items-center md:space-x-6 space-y-6 md:space-y-0 border-y-[1px] border-y-[#222] bg-black p-6 text-white group">
  {/* Card 1 */}
  <div className="flex flex-col items-center md:items-start text-center md:text-start w-full md:w-1/4 p-5">
    <div className="flex justify-center items-center text-orange-500  bg-transparent border-[#262626] border-[1px] h-[70px] w-[33%] md:w-[45%] lg:w-[50%] rounded-lg text-2xl mb-2 group-hover:h-[100px] group-hover:w-[55%] duration-300">
      <img src="/assets/images/web1.svg" className="h-[70%] w-[70%]" alt="Frontend Development" />
    </div>
    <h3 className="text-sm font-thin">
      Front-End Development (HTML, <br /> CSS, JavaScript)
    </h3>
  </div>

  {/* Divider */}
  <div className="hidden md:block h-40 border-l-[1px] border-[#222]"></div>

  {/* Card 2 */}
  <div className="flex flex-col items-center md:items-start text-center md:text-start w-full md:w-1/4 p-5">
    <div className="flex justify-center items-center text-orange-500 bg-transparent border-[#262626] border-[1px] h-[70px] w-[33%] md:w-[45%] lg:w-[50%] rounded-lg text-2xl mb-2 group-hover:h-[100px] group-hover:w-[55%] duration-300">
      <img src="/assets/images/web2.svg" className="h-[70%] w-[70%]" alt="Backend Development" />
    </div>
    <h3 className="text-sm font-thin">
      Back-End Development (PHP, <br /> Python, Ruby)
    </h3>
  </div>

  {/* Divider */}
  <div className="hidden md:block h-40 border-l-[1px] border-[#222]"></div>

  {/* Card 3 */}
  <div className="flex flex-col items-center md:items-start text-center md:text-start w-full md:w-1/4 p-5">
    <div className="flex justify-center items-center text-orange-500 bg-transparent border-[#262626] border-[1px] h-[70px] w-[33%] md:w-[45%] lg:w-[50%] rounded-lg text-2xl mb-2 group-hover:h-[100px] group-hover:w-[55%] duration-300">
      <img src="/assets/images/web3.svg" className="h-[70%] w-[70%]" alt="CMS Development" />
    </div>
    <h3 className="text-sm font-thin">
      Content Management System (CMS) Development <br /> (WordPress, Drupal)
    </h3>
  </div>

  {/* Divider */}
  <div className="hidden md:block h-40 border-l-[1px] border-[#222]"></div>

  {/* Card 4 */}
  <div className="flex flex-col items-center md:items-start text-center md:text-start w-full md:w-1/4 p-5">
    <div className="flex justify-center items-center text-orange-500 bg-transparent border-[#262626] border-[1px] h-[70px] w-[33%] md:w-[45%] lg:w-[50%] rounded-lg text-2xl mb-2 group-hover:h-[100px] group-hover:w-[55%] duration-300">
      <img src="/assets/images/web4.svg" className="h-[70%] w-[70%]" alt="E-Commerce Development" />
    </div>
    <h3 className="text-sm font-thin">
      E-Commerce Platform Development <br /> (Magento, Shopify)
    </h3>
  </div>
</div>




<p className="text-center text-neutral-500 text-[18px] sm:text-[20px] md:text-[24px] px-6 sm:px-8 md:px-[50px] p-6 sm:p-8 md:p-10 leading-[30px] sm:leading-[35px] md:leading-[40px] max-w-[90%] sm:max-w-[1100px] md:max-w-[1300px] mx-auto mt-6 sm:mt-8 md:mt-9">
  Our web development process starts with a deep understanding of your goals, audience, and business needs to
  create a solid blueprint for success. We design and build responsive, visually appealing, and highly functional
  websites tailored to your vision. Rigorous testing ensures seamless performance, cross-browser compatibility, and
  a flawless user experience. Once launched, we offer continuous updates and support to keep your website secure,
  optimized, and aligned with the latest industry trends.
</p>

    </>
  );
}

export default DesignStages;
