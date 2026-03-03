import React from "react";
import WorkingCard from "../components/WorkingCard";
function Working() {
  return (
    <div className="pt-25 pb-10 px-5 md:px-10 lg:px-25 flex flex-col">
      <div className="text-center text-4xl font-bold">How It Works</div>
      <div className="text-center text-xl text-gray-600 ">
        Describe your concepts on a modern browser.
      </div>
      <div className="flex justify-evenly py-5">
        <WorkingCard number="1" title="Describe your Concept (Text/Diagram)" />
        <WorkingCard number="2" title="Codeofy Generates Structure & Logic" />
        <WorkingCard number="3" title="Refine & Deoploy (AI-assisted)" />
      </div>
    </div>
  );
}

export default Working;
