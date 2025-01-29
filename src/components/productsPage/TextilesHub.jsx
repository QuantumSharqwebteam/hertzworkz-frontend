import TextilesHubImg from "/assets/textilesHubImg.png"
import textilesHubTechStack from "/assets/textilesHubTechStack.png"
import textilesGoodDesign from "/assets/textilesGoodDesign.svg"
export default function TextilesHub() {
  return (
    <>
      <div className=" mx-10 bg-black text-white flex flex-col sm:flex-row items-center py-2 font-segoe">
        <h1 className="text-[120px] sm:text-[200px] md:text-[300px] font-bold leading-[150px] sm:leading-[250px] md:leading-[450px] text-bigText">
          T
        </h1>
        <span className="text-[40px] sm:text-[50px] md:text-[70px] font-bold leading-[50px] sm:leading-[75px] md:leading-[105px] ml-0 sm:ml-[-20px] md:ml-[-40px] text-center mt-5">
          <span className="text-lightOrange">T</span>extiles Hub - Project
        </span>
      </div>
      <div className="flex justify-center items-center ">
        <img className="w-4/5 my-4 lg:my-0" src={TextilesHubImg} alt="Textiles Hub" />
      </div>

      <div className="bg-black text-white  flex items-center   justify-center p-6 font-segoe">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl">
          <div className="flex items-center justify-center">
            <ul className="space-y-4 list-disc tracking-wider lg:w-11/12">
              <li>
                <span className="font-semibold">Seamless Integration:</span> Our solutions
                integrate effortlessly with existing systems, ensuring smooth transitions and
                consistent operations.
              </li>
              <li>
                <span className="font-semibold">User-Centric Design:</span> Built with users
                in mind, our platforms offer intuitive interfaces and exceptional usability.
              </li>
              <li>
                <span className="font-semibold">Customizable Solutions:</span> Tailor our
                products to meet your specific business requirements for enhanced performance
                and functionality.
              </li>
              <li>
                <span className="font-semibold">Scalability:</span> Designed to grow with
                your business, our products are robust and adaptable to evolving needs.
              </li>
            </ul>
          </div>

          <div className="flex  items-center">
            <img src={textilesHubTechStack} className="" />
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center">
        <img src={textilesGoodDesign} />
      </div>
    </>
  )
}
