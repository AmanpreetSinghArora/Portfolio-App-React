import React from "react";

export default function SkillsCard({ dataInfo }) {
  return (
    <>
      <div className="card font-semibold flex flex-col gap-2">
        <header className="flex justify-between items-center">
          <div className="head-text flex gap-3 items-center">
            <div className="img h-14 w-14">
              <img
                className="object-contain"
                src={dataInfo?.image?.url}
                alt="img"
              />
            </div>
            <div className="text">{dataInfo?.name}</div>
          </div>
          <div className="percent">{dataInfo?.percentage} %</div>
        </header>
        <div className="content text-gray-500">
          <p>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque praesentium suscipit illo, iure provident explicabo dolorem ex nihil aliquid. Repellendus.
          </p>
        </div>
      </div>
    </>
  );
}
