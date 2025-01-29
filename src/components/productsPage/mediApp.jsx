import medImg from "/assets/MedApp.png"
import medBg from "/assets/MedAppBg.png"
import medMockup from "/assets/MedAppMockup.png"

function MediApp() {
    return (
        <>
            <div className="mx-10 bg-black text-white flex flex-col sm:flex-row items-center py-2 font-segoe">
                <h1 className="text-[120px] sm:text-[200px] md:text-[300px] font-bold leading-[150px] sm:leading-[250px] md:leading-[450px] text-bigText">
                    M
                </h1>
                <span className="text-[40px] sm:text-[50px] md:text-[70px] font-bold leading-[50px] sm:leading-[75px] md:leading-[105px] ml-0 sm:ml-[-20px] md:ml-[-40px] text-center mt-5">
                    <span className="text-lightOrange">M</span>edi App - Project
                </span>
            </div>


            <div className="relative bg-black border-none">
                <img src={medBg} alt="Background" className="absolute inset-0  h-full object-cover" />
                <img src={medImg} alt="Med App Sample Display" className="relative z-10 mx-auto my-auto center px-5 pt-8" />
            </div>

            <div className="bg-black flex items-center justify-center border-none   ">
                <img src={medMockup} alt="Mockup Image" className=" px-5" />
            </div>

            <div className="bg-black px-5 py-6 font-segoe">
                <h1 className="border-2 border-dotted border-lightOrange rounded text-[20px] sm:text-[24px] lg:text-[28px] font-normal leading-[30px] sm:leading-[34px] lg:leading-[37px] text-white px-5 py-4 sm:py-5 lg:py-6 mx-auto text-left">
                    <span className="text-lightOrange block text-[24px] sm:text-[28px] lg:text-[32px] font-semibold mb-2">
                        Medi App (Web and App)
                    </span>
                    Empowering traditional medicine with modern technology. Siddha’s web and app platforms bring advanced features for managing patient records, prescriptions, and appointments while enhancing accessibility to Siddha practitioners and treatments.
                </h1>
            </div>

            <div className="bg-black px-5 py-6 font-segoe">
                <h1 className="text-custom-base sm:text-custom-md lg:text-custom-lg font-semi-bold leading-custom-base sm:leading-custom-md lg:leading-custom-lg text-white">
                    <span className="text-lightOrange">Navigating</span> the MediApp Experience
                </h1>
                <p className="text-white text-[18px] font-normal text-lightGray2 pt-3 lg:max-w-5xl">At MediApp, we’ve streamlined the process to make managing your healthcare needs as effortless as possible. Here's a step-by-step guide to how it works.</p>
            </div>

            <div className="bg-black py-12 px-5 font-segoe">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="text-white shadow-lg border-l-2 md:mb-14" style={{
                        borderImage: "linear-gradient(to bottom, #FE5D26, black) 1",
                    }}>
                        <h3 className="text-[15.28px] font-normal mb-4 pb-3 pl-6" style={{
                            borderBottom: '2px solid transparent',
                            borderImage: 'linear-gradient(to right, #FE5D26, black) 1',
                        }}>Step 01</h3>
                        <h2 className="text-[19.86px] font-semibold mb-2 pl-6">Explore Health Solutions</h2>
                        <p className="text-[13.75px] font-normal text-lightGray2 pl-6">
                            Start your journey by discovering the array of services available on MediApp. Use our user-friendly interface to find doctors, book appointments, access prescriptions, or explore wellness programs tailored to your health goals.
                        </p>
                    </div>

                    <div className=" text-white shadow-lg border-l-2" style={{
                        borderImage: "linear-gradient(to bottom, #FE5D26, black) 1",
                    }}>
                        <h3 className="text-[15.28px] font-normal mb-4 pb-3 pl-6" style={{
                            borderBottom: '2px solid transparent',
                            borderImage: 'linear-gradient(to right, #FE5D26, black) 1',
                        }}>Step 02</h3>
                        <h2 className="text-[19.86px] font-semibold mb-2 pl-6">Personalized Dashboard</h2>
                        <p className="text-[13.75px] font-normal text-lightGray2 pl-6">
                            Create your profile and get a personalized dashboard that centralizes all your health data. From upcoming appointments to medical records, everything is just a click away.
                        </p>
                    </div>

                    <div className=" text-white shadow-lg border-l-2" style={{
                        borderImage: "linear-gradient(to bottom, #FE5D26, black) 1",
                    }}>
                        <h3 className="text-[15.28px] font-normal mb-4 pb-3 pl-6" style={{
                            borderBottom: '2px solid transparent',
                            borderImage: 'linear-gradient(to right, #FE5D26, black) 1',
                        }}>Step 03</h3>
                        <h2 className="text-[19.86px] font-semibold mb-2 pl-6">Virtual Consultations</h2>
                        <p className="text-[13.75px] font-normal text-lightGray2 pl-6">
                            Connect with healthcare professionals through secure video consultations. Discuss your concerns, receive expert advice, and get prescriptions—all from the comfort of your home.
                        </p>
                    </div>

                    <div className=" text-white shadow-lg border-l-2" style={{
                        borderImage: "linear-gradient(to bottom, #FE5D26, black) 1",
                    }}>
                        <h3 className="text-[15.28px] font-normal mb-4 pb-3 pl-6" style={{
                            borderBottom: '2px solid transparent',
                            borderImage: 'linear-gradient(to right, #FE5D26, black) 1',
                        }}>Step 04</h3>
                        <h2 className="text-[19.86px] font-semibold mb-2 pl-6">Seamless Appointment Scheduling</h2>
                        <p className="text-[13.75px] font-normal text-lightGray2 pl-6">
                            Book appointments with your preferred doctors or specialists. MediApp ensures a hassle-free scheduling experience with real-time availability and automated reminders.
                        </p>
                    </div>

                    <div className=" text-white shadow-lg border-l-2" style={{
                        borderImage: "linear-gradient(to bottom, #FE5D26, black) 1",
                    }}>
                        <h3 className="text-[15.28px] font-normal mb-4 pb-3 pl-6" style={{
                            borderBottom: '2px solid transparent',
                            borderImage: 'linear-gradient(to right, #FE5D26, black) 1',
                        }}>Step 05</h3>
                        <h2 className="text-[19.86px] font-semibold mb-2 pl-6">Access Your Medical Records</h2>
                        <p className="text-[13.75px] font-normal text-lightGray2 pl-6">
                            Keep track of your health history with secure access to your medical records. Download, share, or review anything you need, ensuring you're always prepared.
                        </p>
                    </div>

                    <div className=" text-white shadow-lg border-l-2" style={{
                        borderImage: "linear-gradient(to bottom, #FE5D26, black) 1",
                    }}>
                        <h3 className="text-[15.28px] font-normal mb-4 pb-3 pl-6" style={{
                            borderBottom: '2px solid transparent',
                            borderImage: 'linear-gradient(to right, #FE5D26, black) 1',
                        }}>Step 06</h3>
                        <h2 className="text-[19.86px] font-semibold mb-2 pl-6">Ongoing Support</h2>
                        <p className="text-[13.75px] font-normal text-lightGray2 pl-6">
                            MediApp doesn't stop at appointments. Get continuous care with follow-up reminders, medication alerts, and access to health resources that support your journey toward better well-being.
                        </p>
                    </div>
                </div>
            </div>



        </>
    )
}

export default MediApp