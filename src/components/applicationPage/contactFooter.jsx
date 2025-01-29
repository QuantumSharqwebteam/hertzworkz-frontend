import LogoImg from '/logo.svg';
import { Link } from "react-router-dom";


export default function ContactFooter() {
    return (
        <footer className="bg-black text-white mt-28">
            <div className="h-[1px] bg-lightOrange"></div>

            <div className="py-6 flex flex-col items-center text-center mt-14">
                <div className="mb-4">
                <Link to="/">  <img src={LogoImg} alt="Hertzworkz Logo" className="h-12" /></Link>
                </div>

                <nav className="flex flex-wrap justify-center px-3 sm:justify-between gap-4 text-[14px] font-normal font-segoe mt-3 mb-6 text-footer">
                    <a href="#" className="hover:text-orange-500"><Link to="/">Home</Link></a>
                    <a href="#" className="hover:text-orange-500"><Link to="/service"> Services</Link></a>
                    <a href="#" className="hover:text-orange-500"><Link to="/product">Products</Link></a>
                    <a href="#" className="hover:text-orange-500"><Link to="/career">Career</Link></a>
                    <a href="#" className="hover:text-orange-500"><Link to="/contact">Contact Us</Link></a>
                </nav>


                <div className="mt-4 flex flex-wrap items-center justify-center text-[12px] font-normal border-cust border-t-1 border-b-1 bg-black text-white text-sm p-6 gap-4">
                    <div className="flex items-center gap-2">
                        <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.8125 5.68869V11.0518C1.8125 12.0873 2.65197 12.9268 3.6875 12.9268H13.0625C14.098 12.9268 14.9375 12.0873 14.9375 11.0518V5.68869L9.35768 9.12243C8.75504 9.49328 7.99496 9.49328 7.39232 9.12243L1.8125 5.68869Z" fill="#FE5D26" />
                                <path d="M14.9375 4.5879V4.48926C14.9375 3.45372 14.098 2.61426 13.0625 2.61426H3.6875C2.65197 2.61426 1.8125 3.45372 1.8125 4.48926V4.5879L7.88366 8.324C8.18498 8.50942 8.56502 8.50942 8.86634 8.324L14.9375 4.5879Z" fill="#FE5D26" />
                            </svg>
                        </span>
                        <span>hello@hertzworkz.com</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0625 3.08301C1.0625 2.04747 1.90197 1.20801 2.9375 1.20801H3.79477C4.3325 1.20801 4.80123 1.57398 4.93165 2.09566L5.62277 4.86015C5.73713 5.31757 5.56621 5.79897 5.18901 6.08187L4.3805 6.68826C4.29654 6.75122 4.27829 6.84343 4.30188 6.90781C5.01157 8.84519 6.55032 10.3839 8.4877 11.0936C8.55208 11.1172 8.64428 11.099 8.70725 11.015L9.31364 10.2065C9.59653 9.8293 10.0779 9.65838 10.5354 9.77273L13.2998 10.4639C13.8215 10.5943 14.1875 11.063 14.1875 11.6007V12.458C14.1875 13.4935 13.348 14.333 12.3125 14.333H10.9062C5.4697 14.333 1.0625 9.92581 1.0625 4.48926V3.08301Z" fill="#FE5D26" />
                            </svg>
                        </span>
                        <span>+91 6383538529</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.58734 14.2399C7.60622 14.2509 7.62106 14.2593 7.63157 14.2652L7.64902 14.2749C7.78831 14.3514 7.9611 14.3508 8.10053 14.2752L8.11843 14.2652C8.12894 14.2593 8.14378 14.2509 8.16266 14.2399C8.20041 14.218 8.25436 14.1861 8.32219 14.1444C8.45779 14.0609 8.64922 13.9377 8.87788 13.7762C9.33443 13.4537 9.94359 12.9752 10.5541 12.3501C11.7692 11.106 13.0312 9.23686 13.0312 6.83301C13.0312 3.98529 10.7227 1.67676 7.875 1.67676C5.02728 1.67676 2.71875 3.98529 2.71875 6.83301C2.71875 9.23686 3.98083 11.106 5.19591 12.3501C5.80641 12.9752 6.41557 13.4537 6.87212 13.7762C7.10078 13.9377 7.29221 14.0609 7.42781 14.1444C7.49564 14.1861 7.54959 14.218 7.58734 14.2399ZM7.875 8.70801C8.91053 8.70801 9.75 7.86854 9.75 6.83301C9.75 5.79747 8.91053 4.95801 7.875 4.95801C6.83947 4.95801 6 5.79747 6 6.83301C6 7.86854 6.83947 8.70801 7.875 8.70801Z" fill="#FE5D26" />
                            </svg>
                        </span>
                        <span>Address: Flat No.3D, Dolphin Flats, No.99&100, Vaibhav Nagar, phase-1, Opp to VIT, Vellore-632014.</span>
                    </div>
                </div>
            </div>

            <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 mt-3 bg-lightOrange text-white text-sm flex flex-col sm:flex-row items-center justify-between p-4 rounded-none sm:rounded-full">
                <div className="flex space-x-4 mb-4 sm:mb-0">
                    <a href="#" className="hover:opacity-80">
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1038_469)">
                                <path d="M15 8.02051C15 3.87837 11.6421 0.520508 7.5 0.520508C3.35786 0.520508 0 3.87837 0 8.02051C0 11.7639 2.74263 14.8667 6.32812 15.4294V10.1885H4.42383V8.02051H6.32812V6.36816C6.32812 4.48848 7.44785 3.4502 9.16099 3.4502C9.9813 3.4502 10.8398 3.59668 10.8398 3.59668V5.44238H9.89414C8.9625 5.44238 8.67188 6.02056 8.67188 6.61426V8.02051H10.752L10.4194 10.1885H8.67188V15.4294C12.2574 14.8667 15 11.7639 15 8.02051Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1038_469">
                                    <rect width="15" height="15" fill="white" transform="translate(0 0.520508)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a href="#" className="hover:opacity-80">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1038_472)">
                                <path d="M4.96885 14.1142C10.6278 14.1142 13.7239 9.42467 13.7239 5.35914C13.7239 5.2273 13.721 5.09254 13.7151 4.9607C14.3174 4.52514 14.8372 3.98564 15.25 3.36754C14.6891 3.6171 14.0935 3.78009 13.4837 3.85094C14.1258 3.46604 14.6066 2.8614 14.8369 2.14908C14.2328 2.50708 13.5722 2.75961 12.8834 2.89586C12.4193 2.4027 11.8056 2.07618 11.1373 1.96676C10.469 1.85734 9.78324 1.97113 9.18609 2.29054C8.58893 2.60994 8.11363 3.11717 7.83365 3.7338C7.55368 4.35043 7.48464 5.04211 7.63721 5.70191C6.41406 5.64053 5.21746 5.32279 4.12499 4.76929C3.03252 4.21579 2.06856 3.43888 1.29561 2.48893C0.90275 3.16625 0.782535 3.96776 0.959394 4.73053C1.13625 5.49331 1.59691 6.16013 2.24775 6.59547C1.75914 6.57996 1.28123 6.4484 0.853516 6.21168V6.24977C0.853078 6.96057 1.09881 7.64959 1.54894 8.19971C1.99908 8.74982 2.62583 9.12708 3.32266 9.26734C2.87003 9.39118 2.39499 9.40923 1.93428 9.32008C2.13091 9.93137 2.51348 10.466 3.02861 10.8494C3.54373 11.2328 4.1657 11.4459 4.80771 11.4587C3.71777 12.3149 2.37136 12.7793 0.985352 12.7771C0.739554 12.7767 0.493999 12.7617 0.25 12.732C1.65804 13.6353 3.29596 14.1151 4.96885 14.1142Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1038_472">
                                    <rect width="15" height="15" fill="white" transform="translate(0.25 0.520508)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a href="#" className="hover:opacity-80">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1038_475)">
                                <path d="M14.3896 0.520508H1.60742C0.995117 0.520508 0.5 1.00391 0.5 1.60156V14.4365C0.5 15.0342 0.995117 15.5205 1.60742 15.5205H14.3896C15.002 15.5205 15.5 15.0342 15.5 14.4395V1.60156C15.5 1.00391 15.002 0.520508 14.3896 0.520508ZM4.9502 13.3027H2.72363V6.14258H4.9502V13.3027ZM3.83691 5.16699C3.12207 5.16699 2.54492 4.58984 2.54492 3.87793C2.54492 3.16602 3.12207 2.58887 3.83691 2.58887C4.54883 2.58887 5.12598 3.16602 5.12598 3.87793C5.12598 4.58691 4.54883 5.16699 3.83691 5.16699ZM13.2822 13.3027H11.0586V9.82227C11.0586 8.99316 11.0439 7.92383 9.90137 7.92383C8.74414 7.92383 8.56836 8.8291 8.56836 9.76367V13.3027H6.34766V6.14258H8.48047V7.12109H8.50977C8.80566 6.55859 9.53223 5.96387 10.6133 5.96387C12.8662 5.96387 13.2822 7.44629 13.2822 9.37402V13.3027Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1038_475">
                                    <rect width="15" height="15" fill="white" transform="translate(0.5 0.520508)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>

                <div className="text-center sm:text-left mb-4 sm:mb-0">
                    ©All Copyrights are reserved by Hertzworkz
                </div>

                <div className="flex items-center space-x-4">
                    <a href="#" className="hover:opacity-80">Privacy Policy</a>
                    <span>|</span>
                    <a href="#" className="hover:opacity-80">Terms of Service</a>
                </div>
            </div>


            <div className="pb-10"></div>
        </footer>

    )
}