const blockChain = () => {
  const blockchain = [
    {
      id: 1,
      icon: "/assets/images/blockChain/bc2.svg", 
      title: "Military-grade encryption",
    },
    {
      id: 2,
      icon: "/assets/images/blockChain/bc3.svg", 
      title: "Data Accuracy",
    },
    {
      id: 3,
      icon: "/assets/images/blockChain/bc4.svg",
      title: "Scalable Solutions",
    },
    {
      id: 4,
      icon: "/assets/images/blockChain/bc5.svg",
      title: "Robust Performance",
    },
  ];

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
      <div className="w-full flex justify-center">
      
        <div className="w-full max-w-screen-2xl mx-auto px-10">
          <hr className="border-[1px] border-gray-300" />
        </div>
      </div>
    );
  };

    return(
<>
<div className="inset-0 min-w-full mt-[50px] min-h-screen bg-radial-gradient from-orange-900/80 via-transparent to-transparent">
  <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold max-w-full text-center mx-auto">
    <span className="text-[#fe5d26] underline ml-2">B</span>lockChain Technology
  </h2>

  <img 
  src='/assets/images/bc.svg' 
  className='m-auto  rotate-90 w-[633.59px] h-[637.63px] sm:w-[70%] sm:h-auto' 
  alt="Blockchain" 
/>

  <div className="max-h-screen flex items-center justify-center ">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12  p-6 max-w-7xl transform-all duration-300">
      {blockchain.map((service) => (
        <div
          key={service.id}
          className="bg-[#090909] border border-[#222222] w-[177.59px] h-[143.2px] sm:w-auto sm:h-auto hover:rounded-lg shadow-lg p-6 text-center transition duration-300"
        >
          <div className="mb-4">
            <img
              src={service.icon}
              alt={service.title}
              className="w-12 h-12 mx-auto"
            />
          </div>
          <h3 className="text-[#f0f0f0] mt-[10px] text-sm sm:text-base font-medium">{service.title}</h3>
        </div>
      ))}
    </div>
  </div>

  <p className="text-center text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-loose font-normal w-full max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[85%] mx-auto px-4 sm:px-6 md:px-8 lg:px-2 p-10">
    Revolutionize the way you do business with our cutting-edge blockchain solutions.
    <span className="text-blue-800"> Blockchain</span> is more than just a technology; it’s a transformative approach to achieving transparency, security, and efficiency across industries. 
    Our expertise covers decentralized applications, smart contracts, and secure digital ledgers, enabling businesses to 
    <span className="text-white"> streamline processes, reduce operational costs</span>, and 
    <span className="text-white"> build trust with stakeholders.</span>
    Whether you aim to optimize supply chains, implement cryptocurrency solutions, or 
    <span className="text-white"> safeguard sensitive data,</span> our blockchain services are designed to meet your unique challenges. Harness the power of blockchain to 
    <span className="text-white"> unlock new opportunities,</span> ensure data 
    <span className="text-white"> integrity,</span> and <span className="text-white">stay ahead</span> in a competitive digital landscape.
  </p>
</div>



</>
    );
};

export default blockChain;