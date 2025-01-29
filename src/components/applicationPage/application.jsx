
export default function Application() {
    return (
        <>
            <div className="text-lightGray3 font-segoe text-[20.71px] font-normal p-12">
                <h1>Career/<span className="text-lightOrange">Design Application</span></h1>
            </div>

            <div className="px-6 sm:px-12 lg:px-12 flex items-center justify-center bg-black">
                <div className="w-full px-6 sm:px-12 lg:px-18 pt-24 pb-10 border border-cust text-white rounded-lg shadow-lg">
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div>
                                <label className="block font-segoe text-base font-semibold mb-4">First Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter First Name"
                                    className="w-full bg-cust1 text-white border border-cust rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-lightOrange"
                                />
                            </div>
                            <div>
                                <label className="block font-segoe text-base font-semibold mb-4">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Last Name"
                                    className="w-full bg-cust1 text-white border border-cust rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-lightOrange"
                                />
                            </div>
                            <div>
                                <label className="block font-segoe text-base font-semibold mb-4">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your Email"
                                    className="w-full bg-cust1 text-white border border-cust rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-lightOrange"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div>
                                <label className="block font-segoe text-base font-semibold mb-4">Phone</label>
                                <input
                                    type="tel"
                                    placeholder="Enter Phone Number"
                                    className="w-full bg-cust1 text-white border border-cust rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-lightOrange"
                                />
                            </div>
                            <div>
                                <label className="block font-segoe text-base font-semibold mb-4">Applying For</label>
                                <select
                                    className="w-full bg-cust1 text-white border border-cust rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-lightOrange"
                                >
                                    <option>Select Job Type</option>
                                    <option>Frontend Developer</option>
                                    <option>Backend Developer</option>
                                    <option>UI/UX Designer</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-segoe text-base font-semibold mb-4">How Did You Hear About Us?</label>
                                <select
                                    className="w-full bg-cust1 text-white border border-cust rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-lightOrange"
                                >
                                    <option>Select</option>
                                    <option>LinkedIn</option>
                                    <option>Company Website</option>
                                    <option>Referral</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block font-segoe text-base font-semibold mb-4">Resume</label>
                            <div className="border-2 border-dashed border-white rounded bg-cust1 p-8 flex flex-col items-center justify-center">
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 18C3.67392 18 2.40215 17.4732 1.46447 16.5355C0.526784 15.5979 0 14.3261 0 13V10C0 9.73478 0.105357 9.48043 0.292893 9.29289C0.48043 9.10536 0.734784 9 1 9C1.26522 9 1.51957 9.10536 1.70711 9.29289C1.89464 9.48043 2 9.73478 2 10V13C2 13.7956 2.31607 14.5587 2.87868 15.1213C3.44129 15.6839 4.20435 16 5 16H15C15.7956 16 16.5587 15.6839 17.1213 15.1213C17.6839 14.5587 18 13.7956 18 13V10C18 9.73478 18.1054 9.48043 18.2929 9.29289C18.4804 9.10536 18.7348 9 19 9C19.2652 9 19.5196 9.10536 19.7071 9.29289C19.8946 9.48043 20 9.73478 20 10V13C20 14.3261 19.4732 15.5979 18.5355 16.5355C17.5979 17.4732 16.3261 18 15 18H5Z" fill="#4280EF" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.28538 6.1C5.19344 6.00608 5.12092 5.89496 5.07197 5.77299C5.02301 5.65102 4.99858 5.5206 5.00006 5.38918C5.00155 5.25777 5.02893 5.12793 5.08063 5.0071C5.13233 4.88627 5.20734 4.77682 5.30138 4.685L9.80138 0.285C9.98822 0.102374 10.2391 0.00012207 10.5004 0.00012207C10.7616 0.00012207 11.0125 0.102374 11.1994 0.285L15.6994 4.685C15.7953 4.77632 15.8721 4.88578 15.9254 5.00703C15.9786 5.12828 16.0073 5.2589 16.0096 5.39131C16.012 5.52372 15.9881 5.65529 15.9392 5.77836C15.8903 5.90144 15.8175 6.01359 15.7249 6.10828C15.6323 6.20298 15.5218 6.27834 15.3999 6.33C15.2779 6.38166 15.147 6.40859 15.0145 6.40921C14.8821 6.40984 14.7509 6.38415 14.6284 6.33364C14.506 6.28314 14.3948 6.20882 14.3014 6.115L11.5004 3.376V12C11.5004 12.2652 11.395 12.5196 11.2075 12.7071C11.0199 12.8946 10.7656 13 10.5004 13C10.2352 13 9.98081 12.8946 9.79327 12.7071C9.60573 12.5196 9.50038 12.2652 9.50038 12V3.376L6.70038 6.115C6.60646 6.20693 6.49534 6.27945 6.37337 6.32841C6.2514 6.37737 6.12098 6.4018 5.98956 6.40031C5.85814 6.39883 5.72831 6.37145 5.60748 6.31975C5.48665 6.26805 5.37719 6.19303 5.28538 6.099V6.1Z" fill="#4280EF" />
                                </svg>
                                <span className="text-sm text-blue-500 mb-2 mt-6">Upload Resume Here</span>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 mt-6 rounded">
                                    Browse
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block font-segoe text-base font-semibold mb-4 ">Cover Letter</label>
                            <textarea
                                placeholder="Enter your Message here.."
                                className="w-full bg-cust1 text-white border border-cust rounded px-4 py-3 h-32 focus:outline-none  focus:ring-1 focus:ring-lightOrange"
                            />
                        </div>

                        <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                            <div className="flex items-center mb-4 lg:mb-0">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 text-orange-500 border-gray-700 rounded focus:outline-none"
                                />
                                <span className="ml-3 text-sm text-gray-400">
                                    I agree with{" "}
                                    <a href="#" className="text-blue-500 underline">
                                        Terms of Use
                                    </a>{" "}
                                    and{" "}
                                    <a href="#" className="text-blue-500 underline">
                                        Privacy Policy
                                    </a>
                                </span>
                            </div>
                            <button
                                type="submit"
                                className="w-full lg:w-48 bg-lightOrange hover:bg-orange-600 text-white font-semibold py-3 rounded mt-4 lg:mt-0 lg:self-end"
                            >
                                Apply
                            </button>
                        </div>
                    </form>
                </div>
            </div>





        </>
    )
}