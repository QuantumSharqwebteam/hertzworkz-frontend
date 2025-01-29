import welcomePerson from "/assets/welcomePerson.png";
import icon1 from "/assets/icon1.png";
import icon2 from "/assets/Icon2.png";
import icon3 from "/assets/Icon3.png";
import icon4 from "/assets/Icon4.png";
import iconback from "/assets/Iconback.png";

function WelcomePage() {
  const cardData = [
    { title: "Innovative Design", icon: icon1, link: "", },
    { title: "Seamless Development", icon: icon2, link: "", },
    { title: "Advanced Technologies", icon: icon3, link: "", },
    { title: "Customer Focused", icon: icon4, link: "", },
  ];

  return (
    <section className="welcomePage stm:py-4 font-sans bg-black min-h-screen flex flex-col items-center justify-between max-w-screen">
      {/* Top Content */}
      <div className="topContent flex flex-col md:flex-row items-center justify-center w-[90%] max-w-[1200px] mx-auto md:h-[70vh]">
        {/* Left Content */}
        <div className="leftContent bg-darkGray text-left text-welcometext p-8 md:rounded-br-[4rem] flex flex-col justify-center md:w-1/2 bg-cust1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Welcome to <span className="text-orange-600">Hertzworkz!</span>
          </h2>
          <p className="text-lg text-white md:text-xl leading-relaxed">
            Discover a world where innovation meets excellence. At Hertzworkz, we are dedicated to delivering cutting-edge solutions that empower businesses to thrive in a dynamic landscape. With a passion for design, development, and advanced technologies, we create impactful experiences that drive success. Join us on our journey to shape the future and make a meaningful difference together.
          </p>
        </div>
        {/* Right Content */}
        <div className="rightContent flex justify-center items-center p-6 md:w-1/2">
          <img
            src={welcomePerson}
            alt="Hertzworkz Visual"
            className="rounded-md object-cover w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
          />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="bottomContent grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#313132] p-6 rounded-md w-[90%] max-w-[1200px] mx-auto mt-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className=" text-white relative bg-[#1a1a1a] rounded-md hover:scale-105 transition-transform duration-200 p-6 flex flex-col items-center space-y-4"
          >
            <img
              src={iconback}
              alt="Icon Background"
              // onClick={}
              className="absolute top-0 right-0 m-3 cursor-pointer transition-transform duration-300 transform hover:rotate-45"
            />
            <img src={card.icon} alt={card.title} className="relative z-10" />
            <p className="text-welcometext text-lg font-medium">{card.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WelcomePage;
