import React from "react";

function HeroSection() {
  return (
    <div
      className="pt-25 pb-10 px-10 sm:px-5 md:px-10 lg:px-25 md:pt-30 bg-linear-to-br from-[rgb(4,27,56)] via-[rgb(2,15,42)]
     to-[rgb(10,70,100)] text-gray-100 flex "
    >
      <div className="flex flex-col flex-1 lg:flex-2 px-5 ">
        <div className="text-white font-semibold text-4xl lg:text-5xl">
          Turn your Ideas Into Code in Minutes
        </div>
        <div className="text-lg py-4 lg:pr-10">
          codeofy uses intellligent AI to seamlessly translate concepts,
          diagrams and requirements into functional, scalable software. Empower
          your development team today.
        </div>
        <div className="flex justify-around sm:justify-start sm:gap-x-10 text-xl py-4">
          <button
            className="border py-3 px-5 rounded-lg text-black font-semibold 
          bg-[rgb(0,150,150)] cursor-pointer"
          >
            Start Building
          </button>
          <button className="border py-3 px-5 rounded-lg cursor-pointer ">
            Watch Demo
          </button>
        </div>
      </div>
      <div className="hidden md:flex flex-1 lg:flex-3 border"></div>
    </div>
  );
}

export default HeroSection;
