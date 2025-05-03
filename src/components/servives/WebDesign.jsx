import DesignServices from '../servicePage/designServices';
import Navbar from "../navbar"
import ContactFooter from '../contactPage/contactFooter';

export default function WebDesign() {
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
      <Navbar />

      <section className="bg-black overflow-y-hidden overflow-x-hidden flex items-center justify-center text-center flex-col pb-20 ">
        <div className="bg-[url('/webBg.svg')] bg-cover bg-center">
        <h1 data-aos="fade-up" className=" text-4xl sm:text-5xl md:text-6xl font-bold text-[#fe5d26] m-6 sm:m-10">
          What We Do?
        </h1>

        <p data-aos="fade-up" className="text-2xl sm:text-2xl md:text-4xl text-center mb-6 sm:mb-8 text-gray-100">
          We Develop Products That People Love to Use.
        </p>

        <div className="w-full flex justify-center items-center">
          {/* First Image – Hidden on mobile */}
          <img
            data-aos="fade-right"
            src="/assets/images/service1.svg"
            alt="aiml2"
            className="w-auto hidden xl:block"
          />

          {/* Second Image – Always visible */}
          <img
            src="/assets/images/service2.svg"
            alt="Product Image"
            className="h-auto xl:w-[35vw]"
          />

          {/* Third Image – Hidden on mobile */}
          <img
            src="/web4.svg"
            alt="Product Image"
            className="h-auto hidden xl:block"
          />
        </div>


        <p data-aos="fade-left" className="text-center text-white font-light text-base sm:text-lg md:text-2xl lg:text-[28px] sm:p-10 relative leading-[30px] sm:leading-[45px] pb-8 w-full max-w-[1178px] mx-auto px-8">
          We specialize in developing products that not only meet user needs but exceed their expectations. With a perfect balance of cutting-edge technology, thoughtful design, and unmatched functionality, we craft solutions that people genuinely love to use. Our goal is to create experiences that are intuitive, engaging, and leave a lasting impression, ensuring that every product we deliver becomes an integral part of our users’ lives.
        </p>
        </div>

        <HorizontalLine />

        {/* Additional Components */}
        <DesignServices />
        </section>
        <ContactFooter />
      
    </>
  );
}
