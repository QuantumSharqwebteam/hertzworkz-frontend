import React from "react";
import obj from "/assets/obj.png";
function ProductsHeader() {
  return (
    <section className="my-16 bg-black text-white text-center font-segoe">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-lightOrange  glow-effect mb-5">
        Our Products
      </h2>
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold text-white mb-4 md:mb-6 text-center ">
        At the heart of innovation and technology
      </p>
      <div className="flex justify-center  mb-0">
        <img
          src="/public/obj1.svg"
          alt="3D Object"
          className="w-auto  h-40 md:h-60 lg:h-96 my-5"
        />
      </div>
      <div className="flex justify-center">
        <p className="text-base sm:text-lg md:text-xl lg:text-[28px] font-normal lg:leading-[45px] lg:w-3/4 mx-3 lg:mx-0 tracking-wide my-10 text-gray-400">
          Our products are designed to empower businesses across industries. Whether you're managing 
          <span className="text-white"> textiles, healthcare, logistics, or poultry, our solutions simplify operations,
          </span>
          enhance user experiences, and drive efficiency. Combining advanced features with intuitive design, our web and mobile applications cater to the unique needs of modern enterprises.
        </p>
      </div>
    </section>
  );
}

export default ProductsHeader;
