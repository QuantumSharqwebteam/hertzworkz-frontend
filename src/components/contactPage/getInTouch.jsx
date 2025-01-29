import ContactImg from '/contactimage.png'

export default function GetInTouch() {
    return (
        <>
            <div className="flex justify-center items-center mx-auto px-2 mt-8 mb-[-30px] sm:mb-[-40px] md:mb-[-50px] lg:mb-[-60px]">
                <img
                    src={ContactImg}
                    alt="Illustration"
                    className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl h-auto object-contain"
                />
            </div>

            <div className="bg-opacity-35 bg-cust mx-4 sm:mx-6 md:mx-12 lg:mx-16 text-white font-segoe px-6 sm:px-12 md:px-20 lg:px-28 py-8 sm:py-12 md:py-16 lg:py-20">
                <h1 className="text-[32px] sm:text-[36px] md:text-[38px] lg:text-[40px] font-semibold mb-4">
                    Get in Touch with Hertzworkz
                </h1>
                <p className="text-lightGray3 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-normal">
                    Welcome to Hertzworkz's Contact Us page. We’re here to assist you with any
                    questions, collaboration requests, or feedback you may have. Whether
                    you’re exploring innovative tech solutions, looking for partnership
                    opportunities, or just want to connect, we’re always ready to engage. Reach
                    out to us, and let’s start shaping the future together.
                </p>
            </div>

            <div className="mx-4 pb-10 sm:mx-6 md:mx-12 lg:mx-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                <div className="flex flex-col items-center justify-center bg-cust1 border-2 border-cust p-6 bg-opacity-70">
                    <div className="mb-4">
                        <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="0.5" width="59" height="59" rx="29.5" stroke="url(#paint0_linear_160_10782)" />
                            <rect x="1" y="0.5" width="59" height="59" rx="29.5" stroke="url(#paint1_linear_160_10782)" />
                            <rect x="9" y="8.5" width="43" height="43" rx="21.5" stroke="url(#paint2_linear_160_10782)" />
                            <rect x="9" y="8.5" width="43" height="43" rx="21.5" stroke="url(#paint3_linear_160_10782)" />
                            <path d="M20 26.6691V35.25C20 36.9069 21.3431 38.25 23 38.25H38C39.6569 38.25 41 36.9069 41 35.25V26.6691L32.0723 32.1631C31.1081 32.7564 29.8919 32.7564 28.9277 32.1631L20 26.6691Z" fill="#4280EF" />
                            <path d="M41 24.9078V24.75C41 23.0931 39.6569 21.75 38 21.75H23C21.3431 21.75 20 23.0931 20 24.75V24.9078L29.7139 30.8856C30.196 31.1823 30.804 31.1823 31.2861 30.8856L41 24.9078Z" fill="#4280EF" />
                            <defs>
                                <linearGradient id="paint0_linear_160_10782" x1="5.43903" y1="63.2927" x2="63.2439" y2="-4.02439" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4280EF" />
                                    <stop offset="0.323723" stop-color="#4280EF" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_160_10782" x1="60.3171" y1="-7.68292" x2="5.43902" y2="60" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4280EF" />
                                    <stop offset="0.576615" stop-color="#4280EF" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_160_10782" x1="3.70968" y1="10.4839" x2="52.3226" y2="52" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4280EF" />
                                    <stop offset="0.323723" stop-color="#4280EF" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_160_10782" x1="61.1935" y1="61.9355" x2="10.0968" y2="25.7419" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4280EF" />
                                    <stop offset="0.576615" stop-color="#4280EF" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <p className="font-semibold text-base text-white">hello@hertzworkz.com</p>
                </div>

                <div className="flex flex-col items-center justify-center bg-cust1 border-2 border-cust bg-opacity-70 p-6">
                    <div className="mb-4">
                        <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="0.5" width="59" height="59" rx="29.5" stroke="url(#paint0_linear_160_10790)" />
                            <rect x="1" y="0.5" width="59" height="59" rx="29.5" stroke="url(#paint1_linear_160_10790)" />
                            <rect x="9" y="8.5" width="43" height="43" rx="21.5" stroke="url(#paint2_linear_160_10790)" />
                            <rect x="9" y="8.5" width="43" height="43" rx="21.5" stroke="url(#paint3_linear_160_10790)" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 22.5C20 20.8431 21.3431 19.5 23 19.5H24.3716C25.232 19.5 25.982 20.0856 26.1906 20.9202L27.2964 25.3434C27.4794 26.0753 27.2059 26.8455 26.6024 27.2982L25.3088 28.2684C25.1745 28.3691 25.1453 28.5167 25.183 28.6197C26.3185 31.7195 28.7805 34.1815 31.8803 35.317C31.9833 35.3547 32.1309 35.3255 32.2316 35.1912L33.2018 33.8976C33.6545 33.2941 34.4247 33.0206 35.1566 33.2036L39.5798 34.3094C40.4144 34.518 41 35.268 41 36.1284V37.5C41 39.1569 39.6569 40.5 38 40.5H35.75C27.0515 40.5 20 33.4485 20 24.75V22.5Z" fill="#4280EF" />
                            <defs>
                                <linearGradient id="paint0_linear_160_10790" x1="5.43903" y1="63.2927" x2="63.2439" y2="-4.02439" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4280EF" />
                                    <stop offset="0.323723" stop-color="#4280EF" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_160_10790" x1="60.3171" y1="-7.68292" x2="5.43902" y2="60" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4280EF" />
                                    <stop offset="0.576615" stop-color="#4280EF" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_160_10790" x1="3.70968" y1="10.4839" x2="52.3226" y2="52" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4280EF" />
                                    <stop offset="0.323723" stop-color="#4280EF" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_160_10790" x1="61.1935" y1="61.9355" x2="10.0968" y2="25.7419" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4280EF" />
                                    <stop offset="0.576615" stop-color="#4280EF" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <p className="font-semibold text-base text-white">+91 6383538529</p>
                </div>
            </div>



            <div className='px-4   text-white mx-4 sm:mx-6 md:mx-12 lg:mx-16 pb-10'>
                <div className="mt-6">
                    <svg width="55" height="24" viewBox="0 0 55 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_160_10801)">
                            <path d="M12 24.0132C18.6274 24.0132 24 18.6407 24 12.0132C24 5.38582 18.6274 0.0133057 12 0.0133057C5.37258 0.0133057 0 5.38582 0 12.0132C0 18.6407 5.37258 24.0132 12 24.0132Z" fill="#666666" />
                            <path d="M9.53674e-07 36C6.62742 36 12 30.6274 12 24C12 17.3726 6.62742 12 9.53674e-07 12C-6.62742 12 -12 17.3726 -12 24C-12 30.6274 -6.62742 36 9.53674e-07 36Z" fill="#141414" />
                            <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" fill="#141414" />
                            <path d="M9.53674e-07 12C6.62742 12 12 6.62742 12 9.53674e-07C12 -6.62742 6.62742 -12 9.53674e-07 -12C-6.62742 -12 -12 -6.62742 -12 9.53674e-07C-12 6.62742 -6.62742 12 9.53674e-07 12Z" fill="#141414" />
                            <path d="M24 12C30.6274 12 36 6.62742 36 9.53674e-07C36 -6.62742 30.6274 -12 24 -12C17.3726 -12 12 -6.62742 12 9.53674e-07C12 6.62742 17.3726 12 24 12Z" fill="#141414" />
                        </g>
                        <g clip-path="url(#clip1_160_10801)">
                            <path d="M35.9998 19.2081C39.9763 19.2081 43.1998 15.9845 43.1998 12.0081C43.1998 8.03162 39.9763 4.80811 35.9998 4.80811C32.0234 4.80811 28.7998 8.03162 28.7998 12.0081C28.7998 15.9845 32.0234 19.2081 35.9998 19.2081Z" fill="#333333" />
                            <path d="M28.7996 26.4001C32.7761 26.4001 35.9996 23.1766 35.9996 19.2001C35.9996 15.2237 32.7761 12.0001 28.7996 12.0001C24.8232 12.0001 21.5996 15.2237 21.5996 19.2001C21.5996 23.1766 24.8232 26.4001 28.7996 26.4001Z" fill="#141414" />
                            <path d="M43.2 26.4001C47.1764 26.4001 50.4 23.1766 50.4 19.2001C50.4 15.2237 47.1764 12.0001 43.2 12.0001C39.2235 12.0001 36 15.2237 36 19.2001C36 23.1766 39.2235 26.4001 43.2 26.4001Z" fill="#141414" />
                            <path d="M28.7996 12.0001C32.7761 12.0001 35.9996 8.77655 35.9996 4.8001C35.9996 0.823647 32.7761 -2.3999 28.7996 -2.3999C24.8232 -2.3999 21.5996 0.823647 21.5996 4.8001C21.5996 8.77655 24.8232 12.0001 28.7996 12.0001Z" fill="#141414" />
                            <path d="M43.2 12.0001C47.1764 12.0001 50.4 8.77655 50.4 4.8001C50.4 0.823647 47.1764 -2.3999 43.2 -2.3999C39.2235 -2.3999 36 0.823647 36 4.8001C36 8.77655 39.2235 12.0001 43.2 12.0001Z" fill="#141414" />
                        </g>
                        <g clip-path="url(#clip2_160_10801)">
                            <path d="M51.36 15.3638C53.2157 15.3638 54.72 13.8595 54.72 12.0038C54.72 10.1481 53.2157 8.6438 51.36 8.6438C49.5043 8.6438 48 10.1481 48 12.0038C48 13.8595 49.5043 15.3638 51.36 15.3638Z" fill="#333333" />
                            <path d="M47.9996 18.72C49.8553 18.72 51.3596 17.2157 51.3596 15.36C51.3596 13.5043 49.8553 12 47.9996 12C46.144 12 44.6396 13.5043 44.6396 15.36C44.6396 17.2157 46.144 18.72 47.9996 18.72Z" fill="#141414" />
                            <path d="M54.7194 18.72C56.5751 18.72 58.0794 17.2157 58.0794 15.36C58.0794 13.5043 56.5751 12 54.7194 12C52.8637 12 51.3594 13.5043 51.3594 15.36C51.3594 17.2157 52.8637 18.72 54.7194 18.72Z" fill="#141414" />
                            <path d="M47.9996 12C49.8553 12 51.3596 10.4957 51.3596 8.64003C51.3596 6.78435 49.8553 5.28003 47.9996 5.28003C46.144 5.28003 44.6396 6.78435 44.6396 8.64003C44.6396 10.4957 46.144 12 47.9996 12Z" fill="#141414" />
                            <path d="M54.7194 12C56.5751 12 58.0794 10.4957 58.0794 8.64003C58.0794 6.78435 56.5751 5.28003 54.7194 5.28003C52.8637 5.28003 51.3594 6.78435 51.3594 8.64003C51.3594 10.4957 52.8637 12 54.7194 12Z" fill="#141414" />
                        </g>
                        <defs>
                            <clipPath id="clip0_160_10801">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_160_10801">
                                <rect width="14.4" height="14.4" fill="white" transform="translate(28.7998 4.80005)" />
                            </clipPath>
                            <clipPath id="clip2_160_10801">
                                <rect width="6.72" height="6.72" fill="white" transform="translate(48 8.64001)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <h1 className="text-[32px] sm:text-[36px] md:text-[38px] lg:text-[40px] font-semibold mb-4 mt-6">
                    Let's Connect
                </h1>
                <p className="text-lightGray3 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-normal">
                    We’re thrilled to connect with you and explore how we can support your needs. Use the form below to reach out to Hertzworkz. Whether you’re a potential client, partner, or simply curious about our services, we’re here to answer your questions and provide the guidance you’re looking for.
                </p>
            </div>




        </>
    )
}