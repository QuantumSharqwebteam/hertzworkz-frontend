const ourStory = () => {
  {/* Data for our story */}
      const blocks = [
          { 
            id:1,
            number: "01",
            title: "Decentralized Design",
            description:
              "A team of visionary developers believed in revolutionizing digital trust through decentralization. Their mission was to craft blockchain solutions with robust and secure architectures, empowering businesses to build trustless, transparent systems.",
          },
          {
            id:2,
            number: "02",
            title: "Cutting-Edge Engineering",
            description:
              "Driven by innovation, skilled engineers founded the blockchain development wing to harness the power of distributed ledger technology. Their expertise lay in creating scalable, efficient, and tamper-proof digital ecosystems.",
          },
          {
            id:3,
            number: "03",
            title: "Strategic Implementation",
            description:
              "A dedicated team of project managers ensured blockchain solutions were seamlessly integrated into existing frameworks. They focused on precise planning and execution to deliver impactful, on-time implementations.",
          },
          {
            id:4,
            number: "04",
            title: "Collaborative Ecosystems",
            description:
              "Recognizing the importance of partnerships, the team emphasized creating interoperable blockchain solutions. Their goal was to foster ecosystems where businesses could thrive through collaboration and shared value.",
          },
          {
            id:5,
            number: "05",
            title: "Client-Centric Innovation",
            description:
              "Understanding unique client needs, the team tailored blockchain strategies to solve real-world challenges. Their mission was to drive transformation and empower organizations with secure, transparent, and efficient blockchain solutions.",
          },
          {
            id:6,
            number: "06",
            title: "Shaping the future",
            description:
              "Through constant innovation, the blockchain division expanded its reach across industries, redefining processes in finance, supply chain, healthcare, and beyond. Their passion for progress drives them to shape the future of decentralized technology.",
          },
        ];
  {/*data for semi-circle */}
        const divisions = [
          {
            id:5,
            number:"5",
            title:"Transactions recorded"
          },
          {
            id:4,
            number:"4",
            title:"Network Validated"
          },
          {
            id:3,
            number:"3",
            title:"Blocks Linked"
          },
          {
            id:2,
            number:"2",
            title:"Data Encrypted"
          },
          {
            id:1,
            number:"1",
            title:"Secure Key generated"
          },
        ]; 
  
        
        {/*random dots */}
        
        const numDots = 50;
        const generateDots = () => {
          return Array.from({ length: numDots }).map((_, index) => {
            const x = Math.random() * 100; 
            const y = Math.random() * 100;
            return (
              <div
                key={index}
                className="absolute bg-white rounded-full"
                style={{
                  width: "2px",
                  height: "2px",
                  left: `${x}%`,
                  top: `${y}%`,
                }}
              ></div>
            );
          });
        };

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
  <div className="overflow-hidden">   
  {/*our story part 1 */}  
  <HorizontalLine/>
  <h1 data-aos="fade-up" className="text-left md:text-center  underline text-[24px] sm:text-[28px] md:text-[32px] mt-[50px] sm:mt-[100px] md:mt-[50px] mb-6 p-4 text-white">
  <span className="text-[#fe5d26]">O</span>ur Story in Blockchain Technology
</h1>
  {/* <div class="  inset-100 bg-radial-gradient from-orange-600/80 via-transparent to-transparent relative flex items-center justify-center md:h-[739.16px]  max-w-screen bg-black">
  <img 
  data-aos="zoom-out"
  src="/assets/images/blockChain.svg" 
  alt="Centered Image" 
  className="z-10 w-[90%] max-w-[1000px] h-auto mx-auto" 
/>
</div> */}


<div data-aos="fade-right" className="flex flex-col md:flex-row justify-around items-start p-6 md:space-x-6 space-y-6 md:space-y-0">
  {blocks
    .filter((blocks) => [1, 2, 3].includes(blocks.id))
    .map((block, index) => (
      <div
        key={index}
        className="block max-w-full md:max-w-sm text-center md:text-left"
      >
        <div className="flex w-full max-w-[374px] h-auto gap-4 items-center justify-center md:justify-start">
          <h1 className="text-[64px] sm:text-[80px] md:text-[50px] lg:text-[112.58px] font-bold text-orange-500 pb-4 font-barlow">
            {block.number}
          </h1>
          <h2 className="text-[18px] sm:text-[24px] md:text-[20px] leading-[1.5] font-semibold text-[#fe5d26] pl-2 border-b border-[#262626] font-barlow">
            {block.title}
          </h2>
        </div>
        <p className="text-[#98989A] text-[14px] sm:text-[16px] md:text-[15px] leading-[24px] sm:leading-[27px] mt-4 text-justify">
          {block.description}
        </p>
      </div>
    ))}
</div>
  
  {/*our story part 2 */}
  <div data-aos="zoom-out" class="flex items-center justify-center bg-black">

    <img
      src="/blockchain2.svg"
      alt="Bottom Right Decoration"
      class=" w-screen  lg:h-[90vh] px-4 lg:px-0"
    />
</div>
<div data-aos="fade-left" className="flex flex-col md:flex-row justify-around items-start p-6 md:space-x-6 space-y-6 md:space-y-0 mx-8">
  {blocks
    .filter((block) => [4, 5, 6].includes(block.id))
    .map((block, index) => (
      <div
        key={index}
        className="block max-w-full sm:max-w-sm md:max-w-md text-center md:text-left"
      >
        <div className="flex w-full max-w-[374px] h-auto gap-4 items-center justify-center md:justify-start">
          <h1 className="text-[64px] sm:text-[80px] md:text-[50px] lg:text-[112.58px] font-bold text-orange-500 pb-4 font-barlow">
            {block.number}
          </h1>
          <h2 className="text-[18px] sm:text-[24px] md:text-[20px] leading-[1.5] font-semibold text-[#fe5d26] pl-2 border-b border-[#262626] font-barlow">
            {block.title}
          </h2>
        </div>
        <p className="text-[#98989A] text-[14px] sm:text-[16px] md:text-[15px] leading-[24px] sm:leading-[27px] md:leading-[30px] mt-4 text-justify">
          {block.description}
        </p>
      </div>
    ))}
</div>
  
  {/*our story part 3 */}
  <div className="relative w-full  my-4 bg-black max-w-screen">
  {/* <div className="absolute w-[600px] h-[600px] bg-[#616161] opacity-[7%] rounded-full"></div>
  <div className="absolute  md:w-[400px] md:h-[400px] bg-gradient-to-br from-[#fe5d26] to-blue-900 rounded-full blur-xl opacity-75 max-w-screen"></div>
  {generateDots()} */}
  <img
      data-aos="zoom-out"
      src="/bc.svg"
      alt="Blockchain Centered"
      className="z-10 w-screen lg:w-[90vw] mx-auto p-2"
  />
  {/* {divisions.map((division, index) => {
          const angle = (Math.PI * index) / (divisions.length - 1); 
          const radius = 110; 
          const x = 35 + radius * Math.cos(angle); 
          const y = 50 - radius * Math.sin(angle);
  
          return (
            <div
              key={index}
              className="absolute w-[40%] h-[35%] rounded-full flex-row items-center justify-center"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <p className="w-[100%] m-0 text-[#FFF]">{division.title}</p>
              <div className=" h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#fff] bg-opacity-[10%] text-[#fff] border-[#fff] border-2 border-opacity-[10%] mx-auto my-[30px]">{division.number}</div>
            </div>
          );
  })} */}
  </div>
  
  {/*footer paragraph */}
  
  <p data-aos="fade-up" className="text-center sm:text-centre text-gray-500 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] px-8 sm:px-6 md:px-8 lg:px-8 leading-[24px] sm:leading-[30px] md:leading-[35px] lg:leading-[47px] max-w-[100vw] mt-6 sm:mt-8 md:mt-10 pb-8 mx-8 text-justify">
  Blockchain technology is a transformative force that enables secure, transparent, and tamper-proof digital 
  interactions. By leveraging decentralized networks, it eliminates intermediaries, reduces costs, and enhances trust
  across industries such as finance, supply chain, healthcare, and real estate. Blockchain's core features, including
  immutability, smart contracts, and consensus <span className="text-orange-600">mechanisms</span>, empower businesses to streamline operations,
  <span className="text-orange-600"> enhance data security</span>, and unlock <span className="text-orange-600">new opportunities.</span>
</p>
{/* <HorizontalLine/> */}
      </div>
  );
  };
  
  export default ourStory;