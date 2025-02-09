import icon1 from "/assets/icon1.png";
import icon2 from "/assets/Icon2.png";
import icon3 from "/assets/Icon3.png";
import icon4 from "/assets/Icon4.png";
import iconback from "/assets/Iconback.png";
import welcome from "/assets/welcome.svg";
import '../../App.css';

function WelcomePage() {
  const cardData = [
    { title: "Innovative Design", icon: icon1, link: "", },
    { title: "Seamless Development", icon: icon2, link: "", },
    { title: "Advanced Technologies", icon: icon3, link: "", },
    { title: "Customer Focused", icon: icon4, link: "", },
  ];

  return (
    <section className="welcomePage stm:py-2 px-6 font-sans bg-black xl:h-screen flex flex-col items-center justify-between select-none mb-6">
      {/* Top Content */}
      <div className="topContent flex flex-col md:flex-row items-center justify-center w-full mx-auto md:h-[80vh]">
        {/* Left Content */}
        <div className="leftContent bg-[#1A1A1A] text-left text-welcometext p-8 md:rounded-br-[4rem] flex flex-col justify-center md:w-1/2">
          <h2 className="text-2xl md:text-4xl mb-6 text-white font-bold">
            Welcome to <span className="text-orange-600">Hertzworkz!</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-white">
            Discover a world where innovation meets excellence. At Hertzworkz, we are dedicated to delivering cutting-edge solutions that empower businesses to thrive in a dynamic landscape. With a passion for design, development, and advanced technologies, we create impactful experiences that drive success. Join us on our journey to shape the future and make a meaningful difference together.
          </p>
        </div>
        {/* Right Content */}
        <div className="rightContent flex justify-center items-center p-6 md:w-1/2 md:size-full">
          <img
            src={welcome}
            alt="Hertzworkz Visual"
            className="rounded-md object-contain w-full max-w-[300px] md:max-w-[400px] lg:max-w-full md:size-full mt-4"
          />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="bottomContent grid 
      stm:grid-cols-2
       md:grid-cols-4 gap-6 bg-[#313132] p-6 rounded-md w-full px-6 mx-auto mt-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative bg-[#1a1a1a] rounded-md hover:scale-110 transition-transform duration-200 p-6 flex flex-col items-center space-y-4"
          >
            <a href={card.link}>
              <img
                src={iconback}
                alt="Icon Background"
                // onClick={}
                className="absolute top-0 right-0 m-3 cursor-pointer transition-transform duration-300 transform hover:rotate-45"
            />
            </a>

            <img src={card.icon} alt={card.title} className="relative z-10 h-14" />
            <p className="text-welcometext stm:text-center text-lg text-white font-medium">{card.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WelcomePage;
