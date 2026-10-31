import React from "react";
import welcomeImage from '/assets/welcomeImage.jpg';

function Image() {
  return (
    <div className="bg-black max-w-screen flex justify-center items-center">
      <img
        src={welcomeImage}
        alt="Welcome"
        className="mx-[30px] w-full h-[625px]"
      />
    </div>
  );
}

export default Image;
