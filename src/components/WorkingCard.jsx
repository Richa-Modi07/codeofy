import React from "react";

function WorkingCard({ number, title }) {
  return (
    <div className="">
      <div className="flex">
        <div className="mx-2 bg-blue-950 text-white text-2xl rounded-full h-10 w-10 text-center">
          {number}
        </div>
        <div className="font-bold text-xl ">{title}</div>
      </div>
      <div className="mx-auto mt-5 h-50 w-full rounded-lg border bg-gray-100 border-gray-400"></div>
    </div>
  );
}

export default WorkingCard;
