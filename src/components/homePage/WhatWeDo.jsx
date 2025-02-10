import React from 'react';
import wedo from '/assets/wedo.svg';


function WhatWeDo() {
    return(
        <section className='whatWeDo  max-w-screen bg-black text-white overflow-x-hidden overflow-y-hidden'>
         {/* Title */}
         <div data-aos="fade-up"  className='title text-center p-8'>
         <h1 className="  text-[50px] font-bold text-[#fe5d26] m-10">
            What We Do <span className='text-white'>?</span>
         </h1>
         <p className="md:text-3xl sm:text-xl italic mb-4">
          <span className="text-csblue2">"</span>Turning ideas into impactful{' '}
          <span className="text-csblue2 underline">solutions</span>, one project at a time
          <span className="text-csblue2">"</span>
        </p>
        <p className="text-2xl tracking-widest px-8">
          We are committed to delivering excellence through innovative solutions tailored to your needs. Our focus is on building lasting relationships, ensuring client satisfaction, and consistently exceeding expectations.
        </p>
        </div>

        {/*Image*/}

        <div data-aos="fade-zoom-in"  className="relative flex justify-center items-center">
    <img className="h-auto max-w-[80%]" src={wedo} alt="What We Do" />
  </div>
        </section> 
    )
}

export default WhatWeDo;