import DesignServices from './designServices';
import AimlServices from './aiml';
import Navbar from "./navbar"
import EmbeddedSystems from './embedded';
import BlockChain from './blockChain'
import OurStory from './ourStory';
import DesignStages from './Applicationdesignstages';

export default function ServiceMain() {
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

  return (
    <>
      <Navbar />

      <section className="bg-black overflow-x-hidden flex items-center justify-center text-center flex-col pb-20">
        <h1 className="text-glow text-4xl sm:text-5xl md:text-6xl font-bold text-[#fe5d26] m-6 sm:m-10">
          What We Do?
        </h1>

        <p className="text-2xl sm:text-2xl md:text-4xl text-center mb-6 sm:mb-8 text-gray-100">
          We Develop Products That People Love to Use.
        </p>

        <div className="w-full flex flex-col sm:flex-row items-center">
          {/* First Image */}
          <img
            src="/assets/images/service1.svg"
            alt="aiml2"
            className="w-full max-w-[500px] h-auto mb-4 sm:mb-0 sm:ml-0"
          />

          {/* Second Image */}
          <img
            src="/assets/images/service2.svg"
            alt="Product Image"
            className="h-auto w-full max-w-[650px] sm:w-auto sm:-ml-10 mb-2"
          />
        </div>

        <p className="text-center text-white font-light text-base sm:text-lg md:text-2xl lg:text-[28px] sm:p-10 relative leading-[30px] sm:leading-[45px] pb-8 w-full max-w-[1178px] mx-auto">
          We specialize in developing products that not only meet user needs but exceed their expectations. With a perfect balance of cutting-edge technology, thoughtful design, and unmatched functionality, we craft solutions that people genuinely love to use. Our goal is to create experiences that are intuitive, engaging, and leave a lasting impression, ensuring that every product we deliver becomes an integral part of our users’ lives.
        </p>

        <HorizontalLine />

        {/* Additional Components */}
        <DesignServices />
        <DesignStages />
        <AimlServices />
        <EmbeddedSystems />
        <BlockChain />
        <OurStory />
      </section>
    </>
  );
}
