import React from "react";
import FeaturesCard from "../components/FeaturesCard";
function Features() {
  return (
    <div className="pt-25 py-10 px-5 md:px-10 lg:px-25 flex flex-col">
      <div className="text-4xl text-center font-bold pb-10 ">
        Revolutionize Your Workflow
      </div>
      <div className="flex flex-col md:flex-row justify-around ">
        <FeaturesCard
          title="AI-Powered Code Generation"
          desc="Codeofy uses intelligent AI to seamlessly software. Empower your development team today."
          url="src/assets/img2.png"
        />
        <FeaturesCard
          title="Visual IDE"
          url="src/assets/img2.png"
          desc="Codeofy uses visual IDE, editing tools, diagrams and requirements into testing."
        />
        <FeaturesCard
          title="Real-Time Collaboration"
          url="src/assets/img5.png"
          desc="Developers collaborated to collaborating communicate and develop."
        />
      </div>
    </div>
  );
}

export default Features;
