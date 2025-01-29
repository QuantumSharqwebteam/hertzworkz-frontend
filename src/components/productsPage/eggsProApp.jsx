import EggsMob from "/assets/EggsProMob.png"
import EggsiPad from "/assets/EggsProiPad.png"

export default function EggsProApp() {
    return (
        <>
            <div className="bg-black text-white sm:mx-5 mx-10 flex flex-col sm:flex-row items-center py-2 font-segoe">
                <h1 className="text-[120px] sm:text-[200px] md:text-[300px] font-bold leading-[150px] sm:leading-[250px] md:leading-[450px] text-bigText">
                    E
                </h1>
                <span className="text-[40px] sm:text-[50px] md:text-[70px] font-bold leading-[50px] sm:leading-[75px] md:leading-[105px] ml-0 sm:ml-[-20px] md:ml-[-40px] text-center mt-5">
                    <span className="text-lightOrange">E</span>ggspro App - Project
                </span>
            </div>

            <div className="bg-black items-center justify-center flex flex-col px-5">
                <img className="pb-12" src={EggsiPad} alt="" />
                <img src={EggsMob} alt="" />
            </div>

            <div className="md:pt-[70px] lg:pt-[100px] bg-black text-white flex items-center justify-center px-6 font-segoe">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
                    <div className=" p-10 rounded-lg shadow-md border border-[#333] h-fit mt-10 ">
                        <h2 className=" mb-4 text-[18.05px] font-bold">Description</h2>
                        <p className="text-lightGray2 text-[13.53px] font-normal">
                            Discover the perfect harmony of quality and freshness with our
                            premium egg selection. Carefully sourced to meet the highest
                            standards, our eggs are the ideal choice for your kitchen. With
                            options ranging from farm-fresh classics to health-focused liquid
                            products, we bring nutrition and convenience to your table every
                            day.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg shadow-md border border-[#333]">
                        <h2 className="text-2xl font-bold mb-4">Key Features and Amenities</h2>
                        <ul className="space-y-4">
                            {[
                                "Farm-Fresh Quality: Sourced directly from trusted farms for unmatched freshness.",
                                "Wide Variety: Options include white eggs, brown eggs, jumbo eggs, and liquid egg products.",
                                "Custom Packaging: Eco-friendly cartons designed for freshness and durability.",
                                "Nutritional Excellence: Packed with essential nutrients for a healthy lifestyle.",
                                "Convenient Delivery: Timely doorstep delivery ensuring freshness every time.",
                            ].map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-center space-x-3 bg-[#262626] p-4  border-l-2 border-orange-500"
                                >
                                    <span className=" w-5 h-5 flex items-center justify-center">
                                        <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.90562 0.898541C9.13211 1.02481 9.24329 1.28927 9.17506 1.53945L7.67759 7.03018H13.1423C13.3668 7.03018 13.57 7.1634 13.6595 7.36934C13.749 7.57528 13.7078 7.81469 13.5546 7.97885L5.65981 16.4375C5.48288 16.6271 5.19946 16.6715 4.97297 16.5453C4.74648 16.419 4.63529 16.1545 4.70352 15.9044L6.20099 10.4136H0.736285C0.511738 10.4136 0.30859 10.2804 0.219097 10.0745C0.129604 9.86853 0.170824 9.62911 0.324036 9.46496L8.21877 1.00631C8.39571 0.816738 8.67912 0.772268 8.90562 0.898541Z" fill="white" />
                                        </svg>
                                    </span>
                                    <p className="text-lightGray2 text-[13.53px] font-normal">{feature}</p>
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>
            </div>
        </>
    )
}