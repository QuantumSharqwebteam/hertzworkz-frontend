const EmbeddedSystems = () => {


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
      <div className="text-center mt-9">
  <h1 className="text-glow text-[32px] sm:text-[40px] md:text-[50px] font-bold text-gray-100 mb-4 flex items-center justify-center">
    <span className="text-[#fe5d26] underline mr-1">E</span>mbedded Services
  </h1>
  <img
    className="h-auto  sm:max-w-[80%] md:max-w-[70%] lg:max-w-[100%] rounded-xl mt-8 mx-auto"
    src="/assets/images/emb.svg"
    alt="Embedded Service"
  />
</div>


<div class="bg-black text-white py-10 px-4">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">

    
    <div class="group border border-gray-700 hover:border-[#fe5d26] hover:scale-105 transition-transform duration-300 rounded-lg p-6 flex flex-col justify-between h-full">
      <div>
        <div class="flex items-center justify-center w-12 h-12 bg-black rounded-md mb-4">
          <img src="/assets/images/emb1.svg" alt="Custom Development" class="w-[40px] h-[40px]" />
        </div>
        <h3 class="text-2xl text-left mb-2">Custom Embedded Development</h3>
        <p class="text-sm text-left text-gray-400">
          From concept to deployment, we design and develop bespoke embedded systems tailored to your specific requirements.
        </p>
      </div>
      <div class="mt-4 flex justify-end">
        <div class="w-[36px] h-[36px] flex items-center justify-center bg-[#fe5d26] group-hover:bg-white text-black rounded-full transition-colors duration-300">
          <img src="/assets/images/cross.svg" alt="Add Icon" class="w-[15px] h-[15px] group-hover:hidden" />
          <img src="/assets/images/cross.svg" alt="Add Icon" class="w-[15px] h-[15px] rotate-[45deg] hidden group-hover:block" />
          </div>
      </div>
    </div>

    
    <div class="group border border-gray-700 hover:border-[#fe5d26] hover:scale-105 transition-transform duration-300 rounded-lg p-6 flex flex-col justify-between h-full">
      <div>
        <div class="flex items-center justify-center w-12 h-12 bg-black rounded-md mb-4">
          <img src="/assets/images/emb2.svg" alt="Firmware Design" class="w-[40px] h-[40px]" />
        </div>
        <h3 class="text-2xl text-left mb-2">Firmware Design and Development</h3>
        <p class="text-sm text-left text-gray-400">
          High-quality firmware solutions optimized for performance and reliability, ensuring seamless hardware-software integration.
        </p>
      </div>
      <div class="mt-4 flex justify-end">
        <div class="w-[36px] h-[36px] flex items-center justify-center bg-[#fe5d26] group-hover:bg-white text-black rounded-full transition-colors duration-300">
          <img src="/assets/images/cross.svg" alt="Add Icon" class="w-[15px] h-[15px] group-hover:hidden" />
          <img src="/assets/images/cross.svg" alt="Add Icon" class="w-[15px] h-[15px] rotate-[45deg] hidden group-hover:block" />
          </div>
      </div>
    </div>

   
    <div class="group border border-gray-700 hover:border-[#fe5d26] hover:scale-105 transition-transform duration-300 rounded-lg p-6 flex flex-col justify-between h-full">
      <div>
        <div class="flex items-center justify-center w-12 h-12 bg-black rounded-md mb-4">
          <img src="/assets/images/emb3.svg" alt="IoT Solutions" class="w-[40px] h-[40px]" />
        </div>
        <h3 class="text-2xl text-left mb-2">IoT Solutions</h3>
        <p class="text-sm text-left text-gray-400">
          Empower your devices with intelligent connectivity, enabling real-time data collection, processing, and communication.
        </p>
      </div>
      <div class="mt-4 flex justify-end">
        <div class="w-[36px] h-[36px] flex items-center justify-center bg-[#fe5d26] group-hover:bg-white text-black rounded-full transition-colors duration-300">
          <img src="/assets/images/cross.svg" alt="Add Icon" class="w-[15px] h-[15px] group-hover:hidden" />
          <img src="/assets/images/cross.svg" alt="Add Icon" class="w-[15px] h-[15px] rotate-[45deg] hidden group-hover:block" />
          </div>
      </div>
    </div>

    
    <div class="group border border-gray-700 hover:border-[#fe5d26] hover:scale-105 transition-transform duration-300 rounded-lg p-6 flex flex-col justify-between h-full">
      <div>
        <div class="flex items-center justify-center w-12 h-12 bg-black rounded-md mb-4">
          <img src="/assets/images/emb4.svg" alt="Testing and Optimization" class="w-[40px] h-[40px]" />
        </div>
        <h3 class="text-2xl text-left mb-2">Testing and Optimization</h3>
        <p class="text-sm text-left text-gray-400">
          Rigorous testing and fine-tuning to ensure efficient, performance-ready reliability in real-world scenarios.
        </p>
      </div>
      <div class="mt-4 flex justify-end">
        <div class="w-[36px] h-[36px] flex items-center justify-center bg-[#fe5d26] group-hover:bg-white text-black rounded-full transition-colors duration-300">
          <img src="/assets/images/cross.svg" alt="Add Icon" class="w-[15px] h-[15px] group-hover:hidden" />
            <img src="/assets/images/cross.svg" alt="Add Icon" class="w-[15px] h-[15px] rotate-[45deg] hidden group-hover:block" />
        </div>
      </div>
    </div>

  </div>
</div>
      
<div className="flex flex-col lg:flex-row items-start justify-start w-full p-6 sm:p-8 md:p-10 bg-black text-white my-12 gap-6">
  <img 
    src="/assets/images/hex.svg" 
    alt="IoT Solutions" 
    className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:w-[600px] h-auto border-neutral-600 border rounded-xl"
  />

  <div className="text-left w-full lg:max-w-[400px] font-light lg:ml-20 lg:mt-20">
    <ul className="list-disc text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[61px] marker:text-orange-600 pl-6 sm:pl-8 lg:pl-0">
      <li><span className="text-orange-500">C</span>ustomized Embedded Solutions</li>
      <li><span className="text-orange-500">R</span>eal-Time Processing</li>
      <li><span className="text-orange-500">S</span>eamless Hardware Integration</li>
      <li><span className="text-orange-500">L</span>ow Power Consumption</li>
      <li><span className="text-orange-500">S</span>calable and Secure Architectures</li>
    </ul>
  </div>
</div>

<p className="text-center text-neutral-600 text-[20px] pb-8 sm:text-[24px] md:text-[28px] lg:text-[32px] px-4 sm:px-6 md:px-8 lg:px-10 leading-[30px] sm:leading-[35px] md:leading-[40px] lg:leading-[43px] max-w-full lg:max-w-[1300px] mx-auto mt-6 sm:mt-8 lg:mt-5">
  At the heart of technological innovation lies embedded systems, seamlessly 
  <span className="text-white"> integrating software</span> and hardware to power modern devices and solutions. Our 
  embedded services are designed to provide <span className="text-white">robust, efficient</span>, and <span className="text-white">scalable systems </span> 
  tailored to your unique needs, ensuring your business stays ahead in today’s 
  competitive landscape.
</p>
<HorizontalLine/>
    </>
  );
}

export default EmbeddedSystems; 