import textileshubComputer from "/assets/textileshubComputer.svg"
export default function FleetPulseProject() {
  return (
    <>
      <div className=" mx-10 bg-black text-white flex flex-col sm:flex-row items-center font-segoe">
        <h1 className="text-[120px] sm:text-[200px] md:text-[300px] font-bold leading-[150px] sm:leading-[250px] md:leading-[450px] text-bigText lg:me-10">
          F
        </h1>
        <span className="text-[40px] sm:text-[50px] md:text-[70px] font-bold leading-[50px] sm:leading-[75px] md:leading-[105px] ml-0 sm:ml-[-20px] md:ml-[-40px] text-center mt-5">
          <span className="text-lightOrange">F</span>leet Pulse - Project
        </span>
      </div>

      <div className="pb-3 flex items-center justify-center px-5 mt-5 font-segoe">
        <div className="max-w-6xl text-white tracking-wide">
          <h1 className="text-3xl font-bold">
            <span className="text-orange-500">Empowering Your</span> Digital Vision
          </h1>
          <p className="mt-4 leading-relaxed">
            At Hertzworkz, we craft innovative solutions tailored to meet the dynamic needs of various industries. Our digital products are engineered to streamline processes, enhance user experiences, and foster operational efficiency through cutting-edge web and app platforms.
          </p>
          <p className="mt-4 leading-relaxed">
            With a commitment to seamless integration, intuitive design, and real-time functionality, we empower businesses to achieve their goals in an ever-evolving technological landscape. Whether it’s optimizing workflows, connecting stakeholders, or delivering impactful digital experiences, our solutions are designed to help your business thrive. Partner with Hertzworkz and unlock the potential of your digital vision.
          </p>
        </div>
      </div>

      <div className="py-4  flex items-center justify-center ">
        <img src={textileshubComputer}/>
      </div>
    </>
  )
}