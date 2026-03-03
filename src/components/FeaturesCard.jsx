import React from "react";
function FeaturesCard({ title, desc, url }) {
  return (
    <div className="border border-gray-200 shadow-lg rounded-lg max-w-sm py-5 px-5 bg-gray-100">
      <div className="font-semibold text-2xl">{title}</div>
      <div className="h-20">{desc}</div>
      <div
        className="h-50 border rounded-lg"
        style={{
          background: `url(${url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}

export default FeaturesCard;
