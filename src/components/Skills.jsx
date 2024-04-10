import React from "react";
import SkillsCard from "./SkillsCard";

export default function Skills({ userData }) {
  const cards = [...(userData?.skills || [])];
  return (
    <>
      <div className="skills mt-10 flex flex-col items-center gap-10 bg-gray-200 p-2">
        <div className="content">
          <div className="heading flex flex-col items-center gap-4">
            <h1 className=" text-4xl font-extrabold">PROFESSIONAL SKILLS</h1>
            <h3 className="font-medium text-cyan-600">
              My{" "}
              <span className="text-2xl font-semibold text-black">Talent</span>
            </h3>
          </div>
        </div>

        <div className="items w-3/4 grid grid-cols-3 gap-10">
          {cards.map((dataInfo, index) => (
            <div className="con border border-cyan-400 rounded-xl p-1" key={index}>
              <SkillsCard dataInfo={dataInfo} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
