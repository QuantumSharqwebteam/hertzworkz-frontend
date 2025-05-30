const DesignServices = () => {
  const boxes = [
    { title: "User Interface", icon: <img
      src="/assets/images/mobapp1.svg"
      alt="Icon"
      className="width-[24px] h-[24px]"
    />, width: "w-[197px]" }, 
    
    { title: "Smooth Development", icon: <img
      src="/assets/images/mobapp2.svg"
      alt="Icon"
      className="width-[24px] h-[24px]"
    />, width: "w-[283px]" },
    
    { title: "User Experience", icon: <img
      src="/assets/images/mobapp3.svg"
      alt="Icon"
      className="width-[24px] h-[24px]"
    />, width: "w-[218px]" }, 
    
    { title: "Interactions", icon: <img
      src="/assets/images/mobapp4.svg"
      alt="Icon"
      className="width-[24px] h-[24px]"
    />, width: "w-[175px]" }, 
  ];
    

const items = [  "User-Centric Website Design",  "Custom Website Design",  "Responsive and Adaptive Layouts",  "Interactive Prototyping",];
  
const steps = [
  {
    title: "Research & Discovery",
    description:
      "We start by understanding your vision, target audience, and market trends. This ensures our designs align with your goals and resonate with your users.",
    icon: "/assets/images/research.svg",
  },
  {
    title: "Ideation",
    description:
      "Through brainstorming and wireframing, we create innovative concepts and layouts, focusing on functionality, aesthetics, and user experience.",
    icon: "/assets/images/search.svg",
  },
  {
    title: "Design & Prototyping",
    description:
      "Our team transforms ideas into detailed, visually appealing designs. Interactive prototypes allow you to experience the look and feel before finalization.",
    icon: "/assets/images/paint.svg",
  },
  {
    title: "Review & Refinement",
    description:
      "We incorporate feedback and refine designs to perfection, ensuring the final product meets your expectations and is ready for implementation.",
    icon: "/assets/images/review.svg",
  },
];  

const DesignStages = [
  {
    title: "Analysis",
    description:
      "Analysis is the process of breaking down a problem, system, or user need into smaller parts to understand its structure, function, and requirements. In application design, analysis helps identify what users want, what the app must do, and how to design it effectively for usability and performance.",
  },
  {
    title: "Design",
    description:
      "Design is the process of planning and creating the structure, visuals, and interactions of an application to ensure it is functional, user-friendly, and visually appealing. It combines creativity with problem-solving to deliver a seamless user experience.",
  },
  {
    title: "Development",
    description:
      "Development is the process of turning the design and requirements into a working application through coding and technical implementation. It involves building the backend, frontend, and integrating features to ensure the app functions as intended.",
  },
  {
    title: "Testing",
    description:
      "Testing is the process of evaluating an application to identify and fix bugs, ensure functionality, and validate that the app meets user requirements. It involves various methods, such as usability, performance, and security testing, to guarantee a smooth user experience.",
  },
  {
    title: "Launching",
    description:
      "Launching is the process of releasing the application to the public or a targeted user group. It involves final preparations, such as deploying the app, marketing it, and monitoring its performance to ensure it meets user needs and functions as intended.",
  },
  {
    title: "Support",
    description:
      "Support refers to the ongoing assistance provided after the app is launched, including troubleshooting, fixing bugs, addressing user feedback, and making updates or improvements to ensure the app continues to function effectively and meet user needs.",
  },
];

const HorizontalLine = () => {
  return (
    <div data-aos="zoom-in" className="w-full flex justify-center">
      {/* Adjust the width and padding */}
      <div className="w-full max-w-screen-2xl mx-auto px-10">
        <hr className="border-[1px] border-gray-300" />
      </div>
    </div>
  );
};
    

return (

<>

        {/* DESIGN SERVICES*/}
        <h1 data-aos="fade-up" className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 flex flex-row mt-6 sm:mt-10 ">
  <span className="text-[#fe5d26] underline">D</span>esign Services
</h1>

  


       {/* Mobile Application*/}
       <div data-aos="fade-right" className="flex gap-2 ml-0 mr-[auto] mt-8 sm:mt-[100px]  sm:p-6 md:p-10 w-full sm:w-[375px] md:w-[450px] lg:w-[600px] h-auto px-8">
  <h1 className="text-xl sm:text-2xl md:text-[32px] lg:text-[36px] font-bold text-white flex">
    In<span className="text-[#fe5d26] underline ml-2">M</span>obile Application
  </h1>
  <img
    src="/assets/images/img2.png"
    alt="Icon"
    className="h-[25px] sm:h-[30px] md:h-[37px] lg:h-[40px] ml-0 item-end"
  />
</div>


  
<div className="w-full flex flex-col justify-between sm:flex-row  lg:gap-10 md:gap-2 ">
  {/* Boxes Section */}
  <div className="relative flex-col flex-wrap px-8 sm:px-6 ml-15 lg:ml-20  gap-8 lg:gap-12 my-4 flex justify-center"> 
    {boxes.map((box, index) => (
      <div
        key={index}
        data-aos="fade-right"
        className={`relative bg-transparent border border-orange-600 rounded-lg shadow-lg inline-flex items-center px-3 sm:px-4 gap-2`}
        style={{
          boxShadow: "8px 8px 4px 0px #FFFFFF40, 12px 12px 200px 0px #FFFFFF40",
          width: 'fit-content',
        }}
      >
        <span className="text-orange-600 text-[14px] lg:text-[20px] md:text-[16px] leading-[20px] lg:leading-[41px]">
          {box.title}
        </span>
        <span className="text-base sm:text-xl">{box.icon}</span>
      </div>
    ))}
  </div>

  {/* Image Section */}
  <div data-aos="fade-left" className="relative aspect-[4/3]  lg:w-[60%] lg:h-[594px]  ml-auto mr-0 sm:w-[80%]  flex flex-col sm:flex-row items-center sm:items-end rounded-tl-[24px] rounded-bl-[24px] bg-[#1d1d1f] mt-[20px] sm:mt-[30px]">
    {/* Gradient Circle */}
    <div
      className="absolute 
        top-[45%] sm:top-[20%] md:top-[27%] lg:top-[25%] 
        right-[-5%] sm:right-[-2%] md:right-[0%] lg:right-[-2%] 
        transform 
        translate-x-[50%] sm:translate-x-[60%] md:translate-x-[85%] lg:translate-x-[70%] 
        -translate-y-[50%] blur-md"
    >
      <div className="w-[100px] sm:w-[160px] md:w-[220px] lg:w-[260px] h-[100px] sm:h-[160px] md:h-[220px] lg:h-[260px] bg-gradient-to-b from-[#7e3535] to-[#fe5d26] rounded-full"></div>
    </div>

    {/* Image Section */}
    <div data-aos="fade-right" className="relative mx-auto pt-16 pr-8">
      <img
        src="/assets/images/img3.svg"
        alt="Phones"
        className="w-[70%] mr-auto ml-0 h-auto top-auto bottom-10 sm:w-[400px] md:w-[600px] lg:w-[750px] transform -translate-y-4 md:-translate-y-8 lg:-translate-y-10"
      />
    </div>
  </div>
</div>


        {/* Content Section */}
   <div className="bg-black text-white py-10 px-8 md:px-20">
      <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-3">
        {steps.map((step, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="flex flex-col items-start rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
          > 
          <h2 className="text-[22px] font-bold flex items-center gap-2 group-hover:text-[#fe5d26] transition-all duration-300">
      <span className="icon">
        <img
          src={step.icon}
          alt="Research Icon"
          className="transition-all duration-300 group-hover:brightness-0 group-hover:filter-orange"
        />
      </span>
      {step.title}
    </h2>
    <hr className="border-t border-gray-500 border-[1px] w-full mt-2 mb-4 group-hover:border-[#fe5d26]" />
    <p className="text-gray-500 text-xl text-start leading-8">
     {step.description}
    </p>
      </div>
        ))}
    </div>


          
    <p data-aos="flip-up" className="text-center text-gray-500 text-xl  md:text-2xl  sm:max-w-[full] md:max-w-full mt-12 sm:mt-16 md:mt-10 mb-6 text-justify">
  We specialize in developing products that not only meet user needs but exceed their expectations. With a
  perfect balance of cutting-edge technology, thoughtful design, and unmatched functionality, we craft
  solutions that people genuinely love to use. Our goal is to create experiences that are intuitive,
  engaging, and leave a lasting impression, ensuring that every product we deliver becomes an integral
  part of our users’ lives.
</p>

<HorizontalLine />

{/*Web Application*/}

<div data-aos="zoom-out" className="flex gap-2 ml-0 mr-[auto] mt-4 sm:mt-[30px] md:mt-[40px] lg:mt-[30px] p-4 sm:p-6 w-full sm:w-[375px] md:w-[450px] lg:w-[600px] h-auto">
  <h1 className="text-xl sm:text-2xl md:text-[32px] lg:text-[36px] font-bold text-white flex">
    In<span className="text-[#fe5d26] underline ml-2">W</span>eb Application
  </h1>
  <img
    src="/assets/images/img5.svg"
    alt="Icon"
    className="h-[20px] sm:h-[25px] md:h-[30px] lg:h-[35px] ml-2 item-end"
  />
</div>

<img
  className="h-[60%] sm:h-[75%] md:h-[90%] lg:h-[95%] w-[80%] sm:w-[70%] md:w-[80%] lg:w-[85%] mx-auto sm:mt-8 md:mt-6 lg:-mt-8 "
  src='/assets/images/img4.png'
  alt="Web Application"
/>




<div className="bg-black text-white py-10 px-4 -mt-12">
<h2 className="text-center text-[40px] sm:text-[20px] md:text-[30px] lg:text-[40px] font-segoe font-[600px] mb-6 sm:mb-4 md:mb-6 sm:p-2">
  <span className="text-orange-500 font-bold underline">T</span>ransform Your Digital Presence with Exceptional Website Design
</h2>

  <div data-aos="fade-left" className="flex flex-wrap justify-center items-center gap-4">
  {items.map((item, index) => (
    <div
      key={index}
      className="w-full sm:w-[48%] lg:w-[23%] h-[134px] flex items-center text-left-[20px] justify-between gap-3 px-4 py-2 border-2 border-gray-600 
                rounded-3xl group hover:border-blue-500 transition-transform duration-300"
    >
      {/* Text */}
    
      <span 
  className="text-lg sm:text-[24px] lg:text-xl  text-[#86868b] font-medium 
             group-hover:text-blue-500 group-hover:scale-110 group-hover:font-normal group-hover:text-2xl
             group-active:scale-150 transition-transform duration-700 ease-out "
>
  {index + 1}. {item}
</span>

      {/* Arrow */}
      {/* <span className="text-2xl rotate-[90deg] sm:text-3xl text-[#86868b] rounded-lg transform transition-transform duration-700 
                       group-hover:text-blue-500  group-hover:translate-y-[-10px] sm:group-hover:translate-y-[-20px] lg:group-hover:translate-y-[-40px] 
                       group-hover:rotate-[-1deg]">
         ▲
      </span> */}
    </div>
  ))}
</div>

</div>
</div>
<HorizontalLine />
<h1 data-aos="fade-up" className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold relative text-glow2 w-full sm:w-[600px] md:w-[724px] lg:w-[800px] h-auto sm:h-[80px] md:h-[74px] lg:h-[90px] p-6 sm:p-8 md:p-[50px]">
  Application Design Stages
</h1>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 p-6 sm:p-12 lg:p-20 group">
  {[
    { src: "/assets/images/Analysis.png", alt: "Analysis", title: "Analysis" },
    { src: "/assets/images/Design.png", alt: "Design", title: "Design" },
    { src: "/assets/images/Development.png", alt: "Development", title: "Development" },
    { src: "/assets/images/Testing.png", alt: "Testing", title: "Testing" },
    { src: "/assets/images/Launching.png", alt: "Launching", title: "Launching" },
    { src: "/assets/images/Support.png", alt: "Support", title: "Support" },
  ].map((item, index) => (
    <div data-aos="fade-left"
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

      <section className="bg-black text-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="relative border-l-4 border-orange-500 pl-8">
        {DesignStages.map((step, index) => (
          <div key={index} className="mb-12 relative">
            {/* Orange Circle */}
            <span className="absolute -left-[42px] top-0 w-4 h-4 rounded-full bg-orange-500 border-4 border-orange-500"></span>

            {/* Text Content */}
            <h3 className="text-xl font-bold mb-2 text-left">{step.title}</h3>
            <p className="text-gray-300 text-sm  text-left leading-relaxed ">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
</>
    
  );
};
  
  export default DesignServices;
  