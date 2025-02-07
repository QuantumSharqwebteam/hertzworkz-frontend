import DesignServices from '../servicePage/designServices';
import AimlServices from '../servicePage/aiml';
import Navbar from "../navbar"
import EmbeddedSystems from '../servicePage/embedded';
import BlockChain from '../servicePage/blockChain'
import OurStory from '../servicePage/ourStory';
import DesignStages from '../servicePage/Applicationdesignstages';
import ContactFooter from '../contactPage/contactFooter';

export default function AiMl() {
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
        
        
        <AimlServices />
        
        
        </section>
        
        
        <ContactFooter />
      
    </>
  );
}
