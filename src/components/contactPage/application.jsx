
export default function Application() {
    return (
        <>

            <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-16 flex items-center justify-center bg-black mt-10">
                <div className="w-full px-6 sm:px-12 lg:px-18 pt-16 md:pt-24 pb-10 border border-cust text-white rounded-lg shadow-lg">
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
                                <label className="block font-segoe text-base font-semibold mb-4">Inquiry Type</label>
                                <select
                                    className="w-full bg-cust1 text-white border border-cust rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-lightOrange"
                                >
                                    <option>Select Inquiry Type</option>
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
                            <label className="block font-segoe text-base font-semibold mb-4 ">Message</label>
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
                                Send Your Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>





        </>
    )
}