import { Link } from "react-router-dom";


export default function CurrentOpenings() {
    return (
        <div className="bg-black text-white mx-5 border border-cust">
            <header className="text-left border border-cust pt-20 px-12 pb-12">
                <h1 className="text-[35.49px] font-semibold max-w-4xl font-segoe">Current Openings</h1>
                <p className="text-[16px] font-[400] text-lightGray pt-3 font-segoe">
                    We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you’re a designer, engineer, project manager, or QA tester, we encourage you to explore our open positions.
                </p>
            </header>

            <div>
                <section>
                    <h2 className="font-barlow text-[20.71px] py-8 font-medium text-grayCustom px-12 border border-cust">
                        Design Job Openings
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="p-12 shadow-lg flex flex-col justify-between  border border-cust ">
                            <svg className='mb-6' width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.36014" y="0.46683" width="64.3636" height="64.3636" rx="8.50784" fill="url(#paint0_linear_160_10504)" fill-opacity="0.2" />
                                <rect x="0.36014" y="0.46683" width="64.3636" height="64.3636" rx="8.50784" stroke="#262626" stroke-width="0.739812" />
                                <path d="M33.8136 22.6744C34.3782 22.6744 34.8077 22.2448 34.8077 21.6803C34.8077 21.128 34.3782 20.6984 33.8136 20.6984H24.8298L26.7812 22.6744H33.8136ZM37.2623 26.1845C37.8145 26.1845 38.2564 25.7426 38.2564 25.1781C38.2564 24.6258 37.8145 24.2085 37.2623 24.2085H28.2539L30.2053 26.1845H37.2623ZM40.6373 29.6823C41.1897 29.6823 41.6193 29.2404 41.6193 28.6759C41.6193 28.1236 41.1897 27.7063 40.6373 27.7063H31.6781L33.6294 29.6823H40.6373ZM44.0493 31.2042H35.1023C35.8386 31.9528 36.17 32.4069 36.2191 33.1801H44.0493C44.6015 33.1801 45.0434 32.7505 45.0434 32.186C45.0434 31.6336 44.6015 31.2042 44.0493 31.2042ZM32.6967 43.3298L28.2908 33.0328L27.7017 34.0392L33.8136 34.3828C34.6359 34.4319 35.0286 33.5482 34.4395 32.9468L22.2893 20.5266C21.7493 19.9743 20.9147 20.2812 20.9147 21.0544L20.7061 38.3348C20.7061 39.1815 21.6511 39.5252 22.1911 38.8993L26.143 34.53L25.0016 34.2355L29.2603 44.7658C29.4321 45.183 29.8617 45.3794 30.2422 45.2076L32.3531 44.3362C32.7458 44.1889 32.8808 43.7348 32.6967 43.3298Z" fill="#4280EF" />
                                <defs>
                                    <linearGradient id="paint0_linear_160_10504" x1="-83.9784" y1="-64.2667" x2="65.0937" y2="65.2004" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.224072" stop-color="#FE5D26" />
                                        <stop offset="0.707836" stop-color="#FE5D26" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className='max-w-[350px]'>
                                <h3 className="font-barlow text-[17.76px] font-medium mb-6">UI Designer</h3>
                                <p className="text-lightGray font-barlow text-[13.32px] font-normal mb-12">Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression.</p>
                            </div>
                            <Link to="/application">
                                <button className="w-1/2 sm:w-full bg-lightOrange text-white py-2 px-6 rounded-md font-semibold self-start">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                        <div className="p-12 shadow-lg flex flex-col justify-between border border-cust">
                            <svg className='mb-6' width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.693148" y="0.46683" width="64.3636" height="64.3636" rx="8.50784" fill="url(#paint0_linear_160_10518)" fill-opacity="0.2" />
                                <rect x="0.693148" y="0.46683" width="64.3636" height="64.3636" rx="8.50784" stroke="#262626" stroke-width="0.739812" />
                                <path d="M28.7158 42.1535H39.3858C41.4534 42.1535 42.4873 41.1096 42.4873 39.0017V26.8261C42.4873 24.7283 41.4534 23.6743 39.3858 23.6743H29.7798L31.4259 25.2904H39.2954C40.3393 25.2904 40.8713 25.8424 40.8713 26.8462V38.9816C40.8713 39.9854 40.3393 40.5374 39.3054 40.5374H28.7961C27.7622 40.5374 27.2202 39.9854 27.2202 38.9816V31.8148H25.6041V39.0017C25.6041 41.1096 26.6481 42.1535 28.7158 42.1535ZM30.2415 29.5965H37.6292C37.9804 29.5965 38.2514 29.3255 38.2514 28.9742C38.2514 28.6329 37.9804 28.3619 37.6292 28.3619H30.2415C29.8701 28.3619 29.6091 28.6329 29.6091 28.9742C29.6091 29.3255 29.8701 29.5965 30.2415 29.5965ZM30.2415 33.5312H37.6292C37.9804 33.5312 38.2514 33.2502 38.2514 32.8988C38.2514 32.5576 37.9804 32.2966 37.6292 32.2966H30.2415C29.8701 32.2966 29.6091 32.5576 29.6091 32.8988C29.6091 33.2502 29.8701 33.5312 30.2415 33.5312ZM30.2415 37.4559H37.6292C37.9804 37.4559 38.2514 37.195 38.2514 36.8536C38.2514 36.5024 37.9804 36.2213 37.6292 36.2213H30.2415C29.8701 36.2213 29.6091 36.5024 29.6091 36.8536C29.6091 37.195 29.8701 37.4559 30.2415 37.4559ZM22.7033 27.7396C22.6932 28.121 23.155 28.2515 23.4059 28.0005L24.9417 26.4648L26.6581 30.7006C26.7384 30.8914 26.9391 30.9817 27.1198 30.9114L28.1236 30.5099C28.2942 30.4296 28.3645 30.2188 28.2741 30.0281L26.4774 25.8625L28.6355 25.7722C29.0169 25.7521 29.2076 25.3908 28.9366 25.0997L23.4461 19.4586C23.1951 19.2076 22.8037 19.3482 22.7936 19.7195L22.7033 27.7396Z" fill="#4280EF" />
                                <defs>
                                    <linearGradient id="paint0_linear_160_10518" x1="-83.6454" y1="-64.2667" x2="65.4267" y2="65.2004" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.224072" stop-color="#FE5D26" />
                                        <stop offset="0.707836" stop-color="#FE5D26" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className='max-w-[350px]'>
                                <h3 className="font-barlow text-[17.76px] font-medium mb-6">UX Designer</h3>
                                <p className="text-lightGray font-barlow text-[13.32px] font-normal mb-12">Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.</p>
                            </div>
                            <Link to="/application">
                                <button className="w-1/2 sm:w-full bg-lightOrange text-white py-2 px-6 rounded-md font-semibold self-start">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                        <div className="p-12 shadow-lg flex flex-col justify-between border border-cust">
                            <svg className='mb-6' width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.02713" y="0.46683" width="64.3636" height="64.3636" rx="8.50784" fill="url(#paint0_linear_160_10532)" fill-opacity="0.2" />
                                <rect x="1.02713" y="0.46683" width="64.3636" height="64.3636" rx="8.50784" stroke="#262626" stroke-width="0.739812" />
                                <g clip-path="url(#clip0_160_10532)">
                                    <g clip-path="url(#clip1_160_10532)">
                                        <path d="M21.9972 45.7878C23.9293 47.7322 26.4312 47.7571 28.3385 45.8497C29.8619 44.3264 31.3358 40.8833 32.4628 39.1617L35.46 42.1713C36.3765 43.1002 37.4912 43.1002 38.3582 42.2085L39.4233 41.1434C40.3274 40.2269 40.3151 39.1865 39.3862 38.2576L29.5399 28.3989C28.5986 27.47 27.5458 27.4576 26.6417 28.3618L25.5766 29.4269C24.6848 30.3187 24.6848 31.3961 25.6137 32.325L28.611 35.3223C26.9018 36.4494 23.4711 37.9232 21.9353 39.4466C20.0404 41.3539 20.0528 43.8681 21.9972 45.7878ZM25.3041 44.1778C24.4495 44.1778 23.7683 43.4841 23.7683 42.6419C23.7683 41.7998 24.4495 41.1185 25.3041 41.1185C26.1463 41.1185 26.8275 41.7998 26.8275 42.6419C26.8275 43.4841 26.1463 44.1778 25.3041 44.1778ZM40.86 37.6878L45.6655 32.8824C47.0402 31.5076 47.0031 29.8728 45.6036 28.4484L44.9719 27.8044C43.6839 29.4764 40.0054 31.4333 39.2994 30.7273C39.188 30.6158 39.1755 30.393 39.3366 30.2195C40.8352 28.721 41.8136 27.2595 42.0366 24.8815L35.6705 18.5031C34.4939 17.3265 32.4504 17.7105 31.893 19.9398C31.1128 23.1104 30.4068 24.9558 29.6389 26.4792L40.86 37.6878Z" fill="#4280EF" />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_160_10532" x1="-83.3114" y1="-64.2667" x2="65.7607" y2="65.2004" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.224072" stop-color="#FE5D26" />
                                        <stop offset="0.707836" stop-color="#FE5D26" stop-opacity="0" />
                                    </linearGradient>
                                    <clipPath id="clip0_160_10532">
                                        <rect width="29.5925" height="29.5925" fill="white" transform="translate(18.4131 17.8523)" />
                                    </clipPath>
                                    <clipPath id="clip1_160_10532">
                                        <rect width="26.1489" height="29.6019" fill="white" transform="translate(20.5264 17.8523)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className='max-w-[350px]'>
                                <h3 className="font-barlow text-[17.76px] font-medium mb-6">Design Head</h3>
                                <p className="text-lightGray font-barlow text-[13.32px] font-normal mb-12">Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs.</p>
                            </div>
                            <Link to="/application">
                                <button className="w-1/2 sm:w-full bg-lightOrange text-white py-2 px-6 rounded-md font-semibold self-start">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="font-barlow text-[20.71px] py-8 font-medium text-grayCustom px-12 border border-cust">
                        Development Job Openings
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="p-12 shadow-lg flex flex-col justify-between border border-cust">
                            <svg className='mb-6' width="66" height="67" viewBox="0 0 66 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.36014" y="1.35086" width="64.3636" height="64.3636" rx="8.50784" fill="url(#paint0_linear_160_10549)" fill-opacity="0.2" />
                                <rect x="0.36014" y="1.35086" width="64.3636" height="64.3636" rx="8.50784" stroke="#262626" stroke-width="0.739812" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0383 26.4594C27.4716 26.8928 27.4716 27.5954 27.0383 28.0288L21.5346 33.5325L27.0383 39.0362C27.4716 39.4696 27.4716 40.1722 27.0383 40.6056C26.6049 41.0389 25.9023 41.0389 25.4689 40.6056L19.1805 34.3172C18.7471 33.8838 18.7471 33.1812 19.1805 32.7478L25.4689 26.4594C25.9023 26.026 26.6049 26.026 27.0383 26.4594ZM38.0457 26.4594C38.4791 26.026 39.1817 26.026 39.6151 26.4594L45.9035 32.7478C46.3369 33.1812 46.3369 33.8838 45.9035 34.3172L39.6151 40.6056C39.1817 41.0389 38.4791 41.0389 38.0457 40.6056C37.6123 40.1722 37.6123 39.4696 38.0457 39.0362L43.5494 33.5325L38.0457 28.0288C37.6123 27.5954 37.6123 26.8928 38.0457 26.4594Z" fill="#4280EF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.5801 21.7116C35.184 21.8158 35.5892 22.3898 35.4851 22.9938L31.786 44.4483C31.6819 45.0523 31.1079 45.4575 30.5039 45.3533C29.8999 45.2492 29.4947 44.6752 29.5989 44.0712L33.2979 22.6167C33.4021 22.0127 33.9761 21.6075 34.5801 21.7116Z" fill="#4280EF" />
                                <defs>
                                    <linearGradient id="paint0_linear_160_10549" x1="-83.9784" y1="-63.3827" x2="65.0937" y2="66.0844" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.224072" stop-color="#FE5D26" />
                                        <stop offset="0.707836" stop-color="#FE5D26" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className='max-w-[350px]'>
                                <h3 className="font-barlow text-[17.76px] font-medium mb-6">Front-End Developer</h3>
                                <p className="text-lightGray font-barlow text-[13.32px] font-normal mb-12">Join our team as a Front-End Developer and bring our designs to life. Transform UI/UX wireframes into interactive web interfaces using HTML, CSS, and JavaScript. Collaborate closely with designers and back-end developers to ensure seamless integration and optimal user experiences.</p>
                            </div>
                            <Link to="/application">
                                <button className="w-1/2 sm:w-full bg-lightOrange text-white py-2 px-6 rounded-md font-semibold self-start">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                        <div className="p-12 shadow-lg flex flex-col justify-between border border-cust">
                            <svg className='mb-6' width="66" height="67" viewBox="0 0 66 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.693148" y="1.35086" width="64.3636" height="64.3636" rx="8.50784" fill="url(#paint0_linear_160_10560)" fill-opacity="0.2" />
                                <rect x="0.693148" y="1.35086" width="64.3636" height="64.3636" rx="8.50784" stroke="#262626" stroke-width="0.739812" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8545 26.1344C20.8545 24.0914 22.5106 22.4353 24.5536 22.4353H41.1993C43.2423 22.4353 44.8984 24.0914 44.8984 26.1344V40.9306C44.8984 42.9735 43.2423 44.6297 41.1993 44.6297H24.5536C22.5106 44.6297 20.8545 42.9735 20.8545 40.9306V26.1344ZM25.7492 27.33C26.1103 26.9688 26.6958 26.9688 27.057 27.33L29.8313 30.1043C30.1924 30.4654 30.1924 31.051 29.8313 31.4121L27.057 34.1864C26.6958 34.5475 26.1103 34.5475 25.7492 34.1864C25.388 33.8252 25.388 33.2397 25.7492 32.8786L27.8696 30.7582L25.7492 28.6378C25.388 28.2767 25.388 27.6911 25.7492 27.33ZM31.0269 32.6077C30.5162 32.6077 30.1021 33.0217 30.1021 33.5325C30.1021 34.0432 30.5162 34.4572 31.0269 34.4572H34.726C35.2367 34.4572 35.6507 34.0432 35.6507 33.5325C35.6507 33.0217 35.2367 32.6077 34.726 32.6077H31.0269Z" fill="#4280EF" />
                                <defs>
                                    <linearGradient id="paint0_linear_160_10560" x1="-83.6454" y1="-63.3827" x2="65.4267" y2="66.0844" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.224072" stop-color="#FE5D26" />
                                        <stop offset="0.707836" stop-color="#FE5D26" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className='max-w-[350px]'>
                                <h3 className="font-barlow text-[17.76px] font-medium mb-6">Back-End Developer</h3>
                                <p className="text-lightGray font-barlow text-[13.32px] font-normal mb-12">Be part of our team as a Backend Developer and contribute to building robust and scalable web applications. Develop server-side logic, integrate databases, and optimize system performance. Collaborate with front-end developers to ensure smooth communication between the server and the user interface.</p>
                            </div>
                            <Link to="/application">
                                <button className="w-1/2 sm:w-full bg-lightOrange text-white py-2 px-6 rounded-md font-semibold self-start">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                        <div className="p-12 shadow-lg flex flex-col justify-between border border-cust">
                            <svg className='mb-6' width="66" height="67" viewBox="0 0 66 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.02713" y="1.35086" width="64.3636" height="64.3636" rx="8.50784" fill="url(#paint0_linear_160_10571)" fill-opacity="0.2" />
                                <rect x="1.02713" y="1.35086" width="64.3636" height="64.3636" rx="8.50784" stroke="#262626" stroke-width="0.739812" />
                                <path d="M37.6828 32.4227C38.3786 32.4227 38.9066 31.7823 38.6258 31.1457C37.7081 29.0657 35.6277 27.6139 33.2082 27.6139C32.9918 27.6139 32.7782 27.6256 32.5678 27.6482C31.8755 27.7227 31.5843 28.5003 31.9325 29.1033L33.5286 31.8678C33.7268 32.2112 34.0932 32.4227 34.4896 32.4227L37.6828 32.4227Z" fill="#4280EF" />
                                <path d="M30.0115 30.2149C29.6632 29.6117 28.8437 29.475 28.4319 30.0367C27.7138 31.0162 27.2897 32.2248 27.2897 33.5324C27.2897 34.8401 27.7138 36.0487 28.432 37.0283C28.8438 37.59 29.6633 37.4532 30.0115 36.85L31.6065 34.0874C31.8048 33.744 31.8048 33.321 31.6065 32.9777L30.0115 30.2149Z" fill="#4280EF" />
                                <path d="M31.9326 37.9616C31.5844 38.5646 31.8756 39.3422 32.5679 39.4167C32.7783 39.4393 32.9919 39.4509 33.2082 39.4509C35.6277 39.4509 37.7081 37.9991 38.6258 35.9191C38.9066 35.2825 38.3786 34.6421 37.6828 34.6421H34.4897C34.0933 34.6421 33.7269 34.8536 33.5287 35.197L31.9326 37.9616Z" fill="#4280EF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M39.3184 25.1685L40.2726 23.5158C40.579 22.985 40.3971 22.3063 39.8664 21.9999C39.3356 21.6934 38.6569 21.8753 38.3505 22.4061L37.3972 24.0571C36.4385 23.6327 35.4032 23.3494 34.3179 23.2338V21.3255C34.3179 20.7127 33.8211 20.2158 33.2082 20.2158C32.5953 20.2158 32.0985 20.7127 32.0985 21.3255V23.2338C31.0132 23.3494 29.9779 23.6327 29.0192 24.0572L28.066 22.4061C27.7595 21.8753 27.0808 21.6935 26.5501 21.9999C26.0193 22.3064 25.8374 22.9851 26.1439 23.5158L27.098 25.1685C26.236 25.7993 25.4751 26.5602 24.8443 27.4223L23.1913 26.4679C22.6605 26.1615 21.9818 26.3433 21.6754 26.8741C21.3689 27.4049 21.5508 28.0836 22.0816 28.39L23.7329 29.3434C23.3084 30.3022 23.0252 31.3374 22.9096 32.4227H21.0013C20.3884 32.4227 19.8916 32.9196 19.8916 33.5324C19.8916 34.1453 20.3884 34.6422 21.0013 34.6422H22.9096C23.0252 35.7275 23.3084 36.7627 23.7329 37.7214L22.0816 38.6748C21.5508 38.9813 21.3689 39.66 21.6754 40.1907C21.9818 40.7215 22.6605 40.9033 23.1913 40.5969L24.8442 39.6426C25.475 40.5046 26.2359 41.2654 27.0978 41.8962L26.1436 43.549C25.8371 44.0798 26.019 44.7585 26.5498 45.0649C27.0805 45.3714 27.7592 45.1895 28.0657 44.6588L29.019 43.0076C29.9778 43.4322 31.0131 43.7154 32.0985 43.831V45.7393C32.0985 46.3522 32.5953 46.849 33.2082 46.849C33.8211 46.849 34.3179 46.3522 34.3179 45.7393V43.831C35.4033 43.7154 36.4387 43.4322 37.3975 43.0076L38.3508 44.6588C38.6572 45.1896 39.3359 45.3714 39.8667 45.065C40.3974 44.7585 40.5793 44.0798 40.2729 43.5491L39.3186 41.8962C40.1805 41.2654 40.9413 40.5046 41.5721 39.6427L43.2249 40.5969C43.7557 40.9033 44.4344 40.7215 44.7408 40.1907C45.0472 39.66 44.8654 38.9813 44.3346 38.6748L42.6835 37.7215C43.108 36.7628 43.3912 35.7275 43.5068 34.6422H45.4151C46.028 34.6422 46.5248 34.1453 46.5248 33.5324C46.5248 32.9196 46.028 32.4227 45.4151 32.4227H43.5068C43.3912 31.3374 43.108 30.3021 42.6835 29.3433L44.3346 28.39C44.8654 28.0836 45.0472 27.4049 44.7408 26.8741C44.4344 26.3433 43.7557 26.1615 43.2249 26.4679L41.5721 27.4222C40.9413 26.5602 40.1804 25.7993 39.3184 25.1685ZM33.2082 25.3945C31.7452 25.3945 30.3723 25.7806 29.1859 26.4564C29.1707 26.4662 29.1552 26.4757 29.1394 26.4848C29.1241 26.4936 29.1087 26.502 29.0932 26.51C27.8915 27.2158 26.8869 28.2212 26.1822 29.4236C26.1752 29.437 26.1679 29.4503 26.1603 29.4635C26.1523 29.4772 26.1442 29.4907 26.1358 29.5039C25.4577 30.6917 25.0703 32.0668 25.0703 33.5324C25.0703 34.9979 25.4576 36.3729 26.1355 37.5606C26.144 37.5739 26.1523 37.5875 26.1603 37.6014C26.1679 37.6147 26.1753 37.6281 26.1824 37.6416C26.8875 38.8447 27.8929 39.8505 29.0956 40.5562C29.1102 40.5638 29.1247 40.5718 29.1391 40.5801C29.154 40.5887 29.1687 40.5976 29.1831 40.6068C30.3701 41.2837 31.744 41.6704 33.2082 41.6704C34.6726 41.6704 36.0467 41.2836 37.2338 40.6066C37.2481 40.5975 37.2626 40.5886 37.2773 40.5801C37.2916 40.5719 37.3059 40.564 37.3204 40.5565C38.522 39.8515 39.5267 38.8469 40.2319 37.6453C40.2395 37.6305 40.2475 37.6159 40.2559 37.6014C40.2646 37.5863 40.2736 37.5715 40.2829 37.557C40.9596 36.3701 41.3461 34.9964 41.3461 33.5324C41.3461 32.0683 40.9595 30.6945 40.2827 29.5075C40.2735 29.4931 40.2646 29.4784 40.2559 29.4634C40.2476 29.449 40.2397 29.4345 40.2321 29.4199C39.5274 28.219 38.5235 27.2148 37.3227 26.5098C37.3074 26.5018 37.2921 26.4935 37.277 26.4848C37.2614 26.4757 37.246 26.4664 37.231 26.4567C36.0445 25.7807 34.6715 25.3945 33.2082 25.3945Z" fill="#4280EF" />
                                <defs>
                                    <linearGradient id="paint0_linear_160_10571" x1="-83.3114" y1="-63.3827" x2="65.7607" y2="66.0844" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.224072" stop-color="#FE5D26" />
                                        <stop offset="0.707836" stop-color="#FE5D26" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className='max-w-[350px]'>
                                <h3 className="font-barlow text-[17.76px] font-medium mb-6">FullStack Developer</h3>
                                <p className="text-lightGray font-barlow text-[13.32px] font-normal mb-12">Join us as a Full Stack Developer and take on end-to-end responsibility for web application development. Combine your skills in both front-end and back-end technologies to create dynamic and responsive websites. Collaborate with designers, developers, and stakeholders to deliver comprehensive and user-friendly solutions.</p>
                            </div>
                            <Link to="/application">
                                <button className="w-1/2 sm:w-full bg-lightOrange text-white py-2 px-6 rounded-md font-semibold self-start">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="font-barlow text-[20.71px] py-8 font-medium text-grayCustom px-12 border border-cust">
                        Management Job Openings
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="p-12 shadow-lg flex flex-col justify-between border border-cust">
                            <svg className='mb-6' width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.36014" y="1.23514" width="64.3636" height="64.3636" rx="8.50784" fill="url(#paint0_linear_160_10585)" fill-opacity="0.2" />
                                <rect x="0.36014" y="1.23514" width="64.3636" height="64.3636" rx="8.50784" stroke="#262626" stroke-width="0.739812" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9939 25.0941C26.9939 23.0511 28.65 21.395 30.6929 21.395H34.392C36.4349 21.395 38.091 23.0511 38.091 25.0941V25.3468C39.2408 25.4521 40.3812 25.5897 41.5115 25.7588C43.3044 26.0271 44.5644 27.5868 44.5644 29.355V33.095C44.5644 34.5884 43.6598 35.9955 42.1769 36.4885C39.1472 37.4958 35.9076 38.0408 32.5425 38.0408C29.1774 38.0408 25.9377 37.4958 22.908 36.4885C21.4251 35.9955 20.5205 34.5883 20.5205 33.095V29.355C20.5205 27.5868 21.7805 26.0271 23.5734 25.7588C24.7037 25.5897 25.8441 25.4521 26.9939 25.3468V25.0941ZM36.2415 25.0941V25.2061C35.0179 25.1318 33.7845 25.0941 32.5425 25.0941C31.3004 25.0941 30.067 25.1318 28.8434 25.2061V25.0941C28.8434 24.0726 29.6715 23.2445 30.6929 23.2445H34.392C35.4134 23.2445 36.2415 24.0726 36.2415 25.0941ZM32.5425 35.2665C33.0532 35.2665 33.4672 34.8525 33.4672 34.3417C33.4672 33.831 33.0532 33.417 32.5425 33.417C32.0317 33.417 31.6177 33.831 31.6177 34.3417C31.6177 34.8525 32.0317 35.2665 32.5425 35.2665Z" fill="#4280EF" />
                                <path d="M21.4453 41.3082V37.8607C21.7203 38.0115 22.0137 38.1402 22.3245 38.2436C25.54 39.3126 28.9766 39.8903 32.5425 39.8903C36.1084 39.8903 39.5449 39.3126 42.7604 38.2436C43.0712 38.1403 43.3646 38.0115 43.6396 37.8607V41.3082C43.6396 43.0985 42.3484 44.6713 40.5286 44.9129C37.9154 45.2599 35.2496 45.4389 32.5425 45.4389C29.8353 45.4389 27.1695 45.2599 24.5563 44.9129C22.7365 44.6713 21.4453 43.0985 21.4453 41.3082Z" fill="#4280EF" />
                                <defs>
                                    <linearGradient id="paint0_linear_160_10585" x1="-83.9784" y1="-63.4984" x2="65.0937" y2="65.9687" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.224072" stop-color="#FE5D26" />
                                        <stop offset="0.707836" stop-color="#FE5D26" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className='max-w-[350px]'>
                                <h3 className="font-barlow text-[17.76px] font-medium mb-6">BA Manager</h3>
                                <p className="text-lightGray font-barlow text-[13.32px] font-normal mb-12">Lead our business analysis team as a BA Manager and drive strategic initiatives. Gather and analyze requirements, facilitate communication between stakeholders, and ensure project alignment with business objectives. Provide leadership and mentorship to a team of talented business analysts.</p>
                            </div>
                            <Link to="/application">
                                <button className="w-1/2 sm:w-full bg-lightOrange text-white py-2 px-6 rounded-md font-semibold self-start">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                        <div className="p-12 shadow-lg flex flex-col justify-between border border-cust">
                            <svg className='mb-6' width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.693148" y="1.2349" width="64.3636" height="64.3636" rx="8.50784" fill="url(#paint0_linear_160_10596)" fill-opacity="0.2" />
                                <rect x="0.693148" y="1.2349" width="64.3636" height="64.3636" rx="8.50784" stroke="#262626" stroke-width="0.739812" />
                                <path d="M43.9737 26.4809C43.9737 29.8007 39.0053 32.4919 32.8765 32.4919C26.7477 32.4919 21.7793 29.8007 21.7793 26.4809C21.7793 23.1612 26.7477 20.47 32.8765 20.47C39.0053 20.47 43.9737 23.1612 43.9737 26.4809Z" fill="#4280EF" />
                                <path d="M32.8765 34.3414C36.1874 34.3414 39.2765 33.6185 41.6043 32.3576C42.455 31.8968 43.2644 31.3259 43.9425 30.6507C43.9631 30.8006 43.9737 30.952 43.9737 31.1048C43.9737 34.4245 39.0053 37.1157 32.8765 37.1157C26.7477 37.1157 21.7793 34.4245 21.7793 31.1048C21.7793 30.952 21.7898 30.8006 21.8105 30.6507C22.4886 31.3259 23.2979 31.8968 24.1487 32.3576C26.4765 33.6185 29.5656 34.3414 32.8765 34.3414Z" fill="#4280EF" />
                                <path d="M32.8765 38.9653C36.1874 38.9653 39.2765 38.2423 41.6043 36.9814C42.455 36.5206 43.2644 35.9497 43.9425 35.2745C43.9631 35.4244 43.9737 35.5758 43.9737 35.7286C43.9737 39.0484 39.0053 41.7396 32.8765 41.7396C26.7477 41.7396 21.7793 39.0484 21.7793 35.7286C21.7793 35.5758 21.7898 35.4244 21.8105 35.2745C22.4886 35.9497 23.2979 36.5206 24.1487 36.9814C26.4765 38.2423 29.5656 38.9653 32.8765 38.9653Z" fill="#4280EF" />
                                <path d="M32.8765 43.5891C36.1874 43.5891 39.2765 42.8661 41.6043 41.6053C42.455 41.1444 43.2644 40.5735 43.9425 39.8983C43.9631 40.0482 43.9737 40.1996 43.9737 40.3524C43.9737 43.6722 39.0053 46.3634 32.8765 46.3634C26.7477 46.3634 21.7793 43.6722 21.7793 40.3524C21.7793 40.1997 21.7898 40.0482 21.8105 39.8983C22.4886 40.5735 23.2979 41.1444 24.1487 41.6053C26.4765 42.8661 29.5656 43.5891 32.8765 43.5891Z" fill="#4280EF" />
                                <defs>
                                    <linearGradient id="paint0_linear_160_10596" x1="-83.6454" y1="-63.4986" x2="65.4267" y2="65.9684" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.224072" stop-color="#FE5D26" />
                                        <stop offset="0.707836" stop-color="#FE5D26" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className='max-w-[350px]'>
                                <h3 className="font-barlow text-[17.76px] font-medium mb-6">Project Manager</h3>
                                <p className="text-lightGray font-barlow text-[13.32px] font-normal mb-12">Join our team as a Project Manager and oversee the successful delivery of projects from initiation to completion. Define project scope, manage timelines and resources, and ensure effective communication across cross-functional teams. Utilize your leadership and organizational skills to drive project success.</p>
                            </div>
                            <Link to="/application">
                                <button className="w-1/2 sm:w-full bg-lightOrange text-white py-2 px-6 rounded-md font-semibold self-start">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                        <div className="p-12 shadow-lg flex flex-col justify-between border border-cust">
                            <svg className='mb-6' width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.02713" y="1.2349" width="64.3636" height="64.3636" rx="8.50784" fill="url(#paint0_linear_160_10607)" fill-opacity="0.2" />
                                <rect x="1.02713" y="1.2349" width="64.3636" height="64.3636" rx="8.50784" stroke="#262626" stroke-width="0.739812" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5846 26.9432C28.5846 24.3895 30.6548 22.3193 33.2084 22.3193C35.7621 22.3193 37.8323 24.3895 37.8323 26.9432C37.8323 29.4968 35.7621 31.567 33.2084 31.567C30.6548 31.567 28.5846 29.4968 28.5846 26.9432Z" fill="#4280EF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M37.8323 30.6422C37.8323 28.5993 39.4884 26.9432 41.5313 26.9432C43.5742 26.9432 45.2304 28.5993 45.2304 30.6422C45.2304 32.6852 43.5742 34.3413 41.5313 34.3413C39.4884 34.3413 37.8323 32.6852 37.8323 30.6422Z" fill="#4280EF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1865 30.6422C21.1865 28.5993 22.8426 26.9432 24.8855 26.9432C26.9285 26.9432 28.5846 28.5993 28.5846 30.6422C28.5846 32.6852 26.9285 34.3413 24.8855 34.3413C22.8426 34.3413 21.1865 32.6852 21.1865 30.6422Z" fill="#4280EF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.1924 37.2605C27.6695 34.9509 30.2595 33.4165 33.2084 33.4165C36.1577 33.4165 38.748 34.9513 40.225 37.2613C41.2462 38.8584 41.6879 40.784 41.4807 42.6616C41.4483 42.955 41.2778 43.2153 41.0218 43.3623C38.7193 44.6834 36.0506 45.4385 33.2084 45.4385C30.3662 45.4385 27.6976 44.6834 25.3951 43.3623C25.139 43.2153 24.9685 42.955 24.9361 42.6616C24.7289 40.7837 25.1709 38.8577 26.1924 37.2605Z" fill="#4280EF" />
                                <path d="M24.6787 36.1954C24.6639 36.2182 24.6491 36.241 24.6345 36.264C23.444 38.1253 22.8992 40.342 23.0665 42.5273C22.3168 42.4134 21.5893 42.2303 20.8911 41.9844L20.7493 41.9344C20.4908 41.8434 20.3101 41.6085 20.2883 41.3353L20.2764 41.1855C20.2667 41.063 20.2617 40.9393 20.2617 40.8146C20.2617 38.3303 22.221 36.3035 24.6787 36.1954Z" fill="#4280EF" />
                                <path d="M43.3508 42.5272C43.518 40.3424 42.9735 38.1261 41.7835 36.265C41.7686 36.2417 41.7536 36.2185 41.7386 36.1954C44.1961 36.3038 46.1551 38.3304 46.1551 40.8146C46.1551 40.9393 46.1502 41.063 46.1404 41.1855L46.1285 41.3353C46.1068 41.6085 45.9261 41.8434 45.6675 41.9344L45.5258 41.9844C44.8277 42.2302 44.1004 42.4134 43.3508 42.5272Z" fill="#4280EF" />
                                <defs>
                                    <linearGradient id="paint0_linear_160_10607" x1="-83.3114" y1="-63.4986" x2="65.7607" y2="65.9684" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.224072" stop-color="#FE5D26" />
                                        <stop offset="0.707836" stop-color="#FE5D26" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className='max-w-[350px]'>
                                <h3 className="font-barlow text-[17.76px] font-medium mb-6">HR Manager</h3>
                                <p className="text-lightGray font-barlow text-[13.32px] font-normal mb-12">Be part of our team as an HR Manager and play a vital role in managing our human resources. Lead talent acquisition, employee engagement, and performance management initiatives. Collaborate with leadership to develop and implement HR strategies that foster a positive and inclusive work culture.</p>
                            </div>
                            <Link to="/application">
                                <button className="w-1/2 sm:w-full bg-lightOrange text-white py-2 px-6 rounded-md font-semibold self-start">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="font-barlow text-[20.71px] py-8 font-medium text-grayCustom px-12 border border-cust">
                        QA Job Openings
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="p-12 shadow-lg flex flex-col justify-between border border-cust">
                            <svg className='mb-6' width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.36014" y="1.11917" width="64.3636" height="64.3636" rx="8.50784" fill="url(#paint0_linear_160_10621)" fill-opacity="0.2" />
                                <rect x="0.36014" y="1.11917" width="64.3636" height="64.3636" rx="8.50784" stroke="#262626" stroke-width="0.739812" />
                                <path d="M19.2694 46.5492C21.3129 48.5928 24.3473 48.6671 26.3537 46.2767C27.8276 44.5056 31.5555 38.4988 34.7509 35.3033C36.8812 33.1731 39.2344 34.3001 41.6 33.3341L39.4944 25.6552C39.2344 24.7016 39.6183 23.9089 40.7206 23.6117L45.3651 22.3732C45.2165 21.9397 44.8078 21.3452 44.3 20.825C41.439 17.8897 36.7078 17.8525 33.8839 20.5277C29.7597 24.4539 32.8931 28.6029 30.1807 31.3153C26.7624 34.7213 22.056 37.1983 19.5418 39.4524C17.1886 41.5455 17.201 44.4808 19.2694 46.5492ZM22.7744 44.5675C21.9322 44.5675 21.2386 43.8863 21.2386 43.0442C21.2386 42.2019 21.9322 41.5083 22.7744 41.5083C23.6166 41.5083 24.2978 42.2019 24.2978 43.0442C24.2978 43.8863 23.6166 44.5675 22.7744 44.5675ZM34.4165 28.0208C34.144 28.0951 33.9088 27.9589 33.822 27.6616C33.7477 27.4387 33.8963 27.1662 34.1564 27.0919L37.0546 26.3117C37.2899 26.2497 37.5624 26.3984 37.6243 26.6584C37.711 26.9433 37.55 27.191 37.2899 27.2653L34.4165 28.0208ZM34.7881 29.4946C34.5156 29.569 34.2803 29.4328 34.1812 29.1355C34.1069 28.9126 34.2679 28.6401 34.528 28.5782L37.4138 27.7855C37.649 27.736 37.9215 27.8722 37.9958 28.1323C38.0826 28.4172 37.9091 28.6649 37.649 28.7392L34.7881 29.4946ZM35.1472 30.9685C34.8871 31.0428 34.6147 30.9066 34.5652 30.6093C34.5033 30.3617 34.6395 30.1263 34.9119 30.052L37.7853 29.2841C38.0577 29.1974 38.3178 29.3584 38.3674 29.6061C38.4293 29.8538 38.2807 30.1263 38.0454 30.1882L35.1472 30.9685ZM42.9624 32.7396C43.4454 32.4547 43.9407 32.0832 44.4485 31.6001C46.0091 30.1882 46.8141 28.058 46.4921 26.547L42.7394 27.575C42.3183 27.6864 41.9591 27.7112 41.5752 27.6493L42.9624 32.7396Z" fill="#4280EF" />
                                <defs>
                                    <linearGradient id="paint0_linear_160_10621" x1="-83.9784" y1="-63.6144" x2="65.0937" y2="65.8527" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.224072" stop-color="#FE5D26" />
                                        <stop offset="0.707836" stop-color="#FE5D26" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className='max-w-[350px]'>
                                <h3 className="font-barlow text-[17.76px] font-medium mb-6">QA Tester</h3>
                                <p className="text-lightGray font-barlow text-[13.32px] font-normal mb-12">Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects. Collaborate with developers and stakeholders to ensure that our products meet high-quality standards and deliver an exceptional user experience.</p>
                            </div>
                            <Link to="/application">
                                <button className="w-1/2 sm:w-full bg-lightOrange text-white py-2 px-6 rounded-md font-semibold self-start">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                        <div className="p-12 shadow-lg flex flex-col justify-between border border-cust">
                            <svg className='mb-6' width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.693148" y="1.11893" width="64.3636" height="64.3636" rx="8.50784" fill="url(#paint0_linear_160_10635)" fill-opacity="0.2" />
                                <rect x="0.693148" y="1.11893" width="64.3636" height="64.3636" rx="8.50784" stroke="#262626" stroke-width="0.739812" />
                                <path d="M19.1367 43.7456C19.1367 44.3401 19.533 44.7241 20.1275 44.7241H44.7618C45.3067 44.7241 45.765 44.2905 45.765 43.7332C45.765 43.1883 45.3067 42.7424 44.7618 42.7424H21.4775C21.2174 42.7424 21.1307 42.6558 21.1307 42.3957V22.8145C21.1307 22.282 20.6849 21.8237 20.1399 21.8237C19.5826 21.8237 19.1367 22.282 19.1367 22.8145V43.7456ZM20.4372 36.042L28.4009 31.4347L34.1352 36.3516L44.3283 30.2829L43.5481 29.0196L34.2344 34.5681L28.5247 29.676L20.4372 34.3452V36.042ZM28.2399 33.1067C29.4536 33.1067 30.4444 32.1159 30.4444 30.9021C30.4444 29.6884 29.4536 28.7099 28.2399 28.7099C27.0261 28.7099 26.0353 29.6884 26.0353 30.9021C26.0353 32.1159 27.0261 33.1067 28.2399 33.1067ZM34.0857 37.6521C35.2995 37.6521 36.2779 36.6613 36.2779 35.4474C36.2779 34.2337 35.2995 33.2553 34.0857 33.2553C32.872 33.2553 31.8811 34.2337 31.8811 35.4474C31.8811 36.6613 32.872 37.6521 34.0857 37.6521ZM43.4242 32.0168C44.6379 32.0168 45.6287 31.026 45.6287 29.8122C45.6287 28.5985 44.6379 27.6076 43.4242 27.6076C42.2104 27.6076 41.2196 28.5985 41.2196 29.8122C41.2196 31.026 42.2104 32.0168 43.4242 32.0168Z" fill="#4280EF" />
                                <defs>
                                    <linearGradient id="paint0_linear_160_10635" x1="-83.6454" y1="-63.6146" x2="65.4267" y2="65.8525" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.224072" stop-color="#FE5D26" />
                                        <stop offset="0.707836" stop-color="#FE5D26" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className='max-w-[350px]'>
                                <h3 className="font-barlow text-[17.76px] font-medium mb-6">SQL Tester</h3>
                                <p className="text-lightGray font-barlow text-[13.32px] font-normal mb-12">Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation and identify any anomalies. Collaborate with developers and QA testers to ensure the accuracy and reliability of our data.</p>
                            </div>
                            <Link to="/application">
                                <button className="w-1/2 sm:w-full bg-lightOrange text-white py-2 px-6 rounded-md font-semibold self-start">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                        <div className="p-12 shadow-lg flex flex-col justify-between border border-cust">
                            <svg className='mb-6' width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.02713" y="1.11893" width="64.3636" height="64.3636" rx="8.50784" fill="url(#paint0_linear_160_10649)" fill-opacity="0.2" />
                                <rect x="1.02713" y="1.11893" width="64.3636" height="64.3636" rx="8.50784" stroke="#262626" stroke-width="0.739812" />
                                <path d="M43.2259 35.9016V26.4269C43.2259 25.1265 42.6685 24.7054 41.6158 24.2719C40.1543 23.6774 35.4356 21.8815 33.9741 21.4604C33.6396 21.3737 33.2805 21.2747 32.9337 21.2747C32.587 21.2747 32.2278 21.349 31.9058 21.4604C30.4319 21.9682 25.7131 23.665 24.2517 24.2719C23.2113 24.7178 22.6416 25.1265 22.6416 26.4269V35.9016C22.6416 40.4223 25.0567 42.0942 32.1039 46.0452C32.4259 46.2186 32.7356 46.2929 32.9337 46.2929C33.1319 46.2929 33.454 46.2186 33.7635 46.0452C40.7984 42.0819 43.2259 40.4223 43.2259 35.9016ZM32.6737 44.0016C32.525 43.9644 32.364 43.8777 32.1659 43.7539C26.4563 40.2737 24.6109 39.2704 24.6109 35.4433V26.8109C24.6109 26.3898 24.6852 26.2164 25.032 26.0925C26.9517 25.4361 30.5682 24.1233 32.4383 23.3801C32.5374 23.343 32.6117 23.3182 32.6737 23.3058V44.0016Z" fill="#4280EF" />
                                <defs>
                                    <linearGradient id="paint0_linear_160_10649" x1="-83.3114" y1="-63.6146" x2="65.7607" y2="65.8525" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.224072" stop-color="#FE5D26" />
                                        <stop offset="0.707836" stop-color="#FE5D26" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className='max-w-[350px]'>
                                <h3 className="font-barlow text-[17.76px] font-medium mb-6">Manual Tester</h3>
                                <p className="text-lightGray font-barlow text-[13.32px] font-normal mb-12">Be part of our team as a Manual Tester and perform comprehensive manual testing to ensure the quality and functionality of our software applications. Develop test cases, execute test scripts, and document test results. Collaborate with developers and QA testers to troubleshoot issues and enhance software performance.</p>
                            </div>
                            <Link to="/application">
                                <button className="w-1/2 sm:w-full bg-lightOrange text-white py-2 px-6 rounded-md font-semibold self-start">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}