const DesignStages = () => {

  

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
     

<section className="bg-black text-white flex flex-col items-center p-20 relative  h-[155vh]  md:h-[150vh] lg:h-[120vh] xl:h-[140vh] scroll-y-hidden">
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
  <div className="relative z-10 w-full flex flex-col md:flex-col xl:flex-row xl:flex-wrap xl:justify-center gap-12 pb-40 md:pb-60">
    {/* Step 1 */}
    <div data-aos="fade-left" className="flex flex-col items-center sm:items-start xl:absolute xl:-top-9 xl:right-64 gap-4 w-full sm:w-[380px] h-auto border-dashed border-[2px] border-[#86868B] rounded-[12px] p-[16px]">
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
  <div data-aos="fade-left" className="flex flex-col items-center sm:items-start xl:absolute xl:top-[280px] xl:-left-52 gap-4 w-full sm:w-[380px] h-auto border-dashed border-[2px] border-[#86868B] rounded-[12px] p-[16px]">
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
    <div data-aos="fade-left" className="flex flex-col items-center sm:items-start xl:absolute xl:top-[560px] xl:left-52 lg:gap-4 w-full sm:w-[380px] h-auto border-dashed border-[2px] border-[#86868B] rounded-[12px] p-[16px]">
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






    </>
  );
}

export default DesignStages;
