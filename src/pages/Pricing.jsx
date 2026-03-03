import React from "react";
import PricingCard from "../components/PricingCard";
function Pricing() {
  return (
    <div
      className="pt-25 pb-10 px-10 sm:px-5 md:px-10 lg:px-25 md:pt-30 bg-linear-to-br from-[rgb(4,27,56)] via-[rgb(2,15,42)]
     to-[rgb(10,70,100)] text-gray-100 flex flex-col text-4xl text-center"
    >
      <div className="text-white ">Flexible Plans for Every Team</div>
      <div>
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  );
}

export default Pricing;
