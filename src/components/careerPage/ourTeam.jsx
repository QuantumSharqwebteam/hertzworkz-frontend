import TableImg from '/carrerTable.png'

export default function OurTeam() {
    return (
        <>
            <div className="font-segoe mt-10">
                <h1 className="text-center text-white text-lg font-semibold lg:text-[35.49px]">Join Our Team at <span className="text-lightOrange">Hertzworkz</span></h1>
                <p className="text-lightGray text-center px-4 text-[13.31px] font-normal mt-6">Unleash your potential and become part of our innovative and dynamic team.</p>
                <div className=" items-center flex flex-col px-5">
                    <img src={TableImg} alt="Working Table" />
                </div>
            </div>

            <div className="bg-black text-white  flex flex-col items-center border mx-5 pt-20 font-segoe border-cust ">
                <div className="text-center sm:text-left px-4 sm:px-12 w-full">
                    <h1 className="text-[28px] sm:text-[35.49px] font-semibold mb-4 w-full">
                        Welcome to Hertzworkz, Where Vision Meets Opportunity!
                    </h1>
                    <p className="text-[14px] sm:text-[16px] font-[400] text-lightGray mb-6 w-full">
                        At Hertzworkz, we believe our greatest strength lies in the talent, passion, and dedication of our team. As a forward-thinking technology company, we thrive on creativity, collaboration, and innovation. If you’re ready to shape the future and contribute to groundbreaking projects, we invite you to explore career opportunities with us.
                    </p>
                    <button className="bg-cust text-white py-2 px-4 sm:px-6 rounded-md text-[14px] sm:text-[16.27px] font-normal">
                        Why Work at Hertzworkz?
                    </button>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2  mt-10 px-0 ">
                    <div className="shadow-lg ">
                        <h2 className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 border border-cust text-[24px] sm:text-[29.57px] font-normal text-lightOrange">
                            Innovative and Impactful Projects
                        </h2>
                        <p className="border p-6 border-cust text-[13.31px] font-normal text-GrayCustom pt-8">
                            At Hertzworkz, we thrive by working on cutting-edge projects that make a tangible impact. Join us to be part of a team that continuously redefines what’s possible.
                        </p>
                    </div>

                    <div className=" shadow-lg">
                        <h2 className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 border border-cust text-[24px] sm:text-[29.57px] font-normal text-lightOrange">
                            Supportive Environment
                        </h2>
                        <p className="border p-6 border-cust text-[13.31px] font-normal text-GrayCustom pt-8">
                            We foster a culture of openness, care, and mutual respect, allowing you to grow both professionally and personally as part of an inclusive and diverse team.
                        </p>
                    </div>

                    <div className="shadow-lg">
                        <h2 className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 border border-cust text-[24px] sm:text-[29.57px] font-normal text-lightOrange">
                            Continuous Learning and Growth
                        </h2>
                        <p className="border p-6 border-cust text-[13.31px] font-normal text-GrayCustom pt-8">
                            With our in-depth training and skill development, you’ll evolve to continuously achieve and exceed your potential. Explore avenues to take your career to the next level with us.
                        </p>
                    </div>

                    <div className=" shadow-lg ">
                        <h2 className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 border border-cust text-[24px] sm:text-[29.57px] font-normal text-lightOrange">
                            Challenging and Rewarding Work
                        </h2>
                        <p className="border p-6 border-cust text-[13.31px] font-normal text-GrayCustom pt-8">
                            At Hertzworkz, we believe in challenging conventional thinking. Working on tasks that require innovative solutions and have a real-world impact is what we bring to the table.
                        </p>
                    </div>
                </div>
            </div>



        </>

    )
}