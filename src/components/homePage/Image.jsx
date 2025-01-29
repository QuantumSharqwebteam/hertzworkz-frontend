import React from "react";
import welcomeImage from '/assets/welcomeImage.jpg';

function Image() {
  return (
    <div className="px-6 pt-4">
      <img
        src={welcomeImage}
        alt="Welcome"
        className="w-full"
      />
    </div>
  );
}

export default Image;
