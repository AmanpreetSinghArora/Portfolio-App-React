import React from "react";
import { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import { useEffect } from "react";

export default function Projects({ userData }) {
  const [cardView, setCardView] = useState(
    userData?.projects
  ); //for all

  useEffect(()=>{
    let arr = document.querySelector(".btns").children;
    arr[0].style.borderBottom = "2px solid cyan";
    arr[0].style.color = "cyan";
  },[])

  const [fliterView, setFilterView] = useState(cardView);

  const cardShow = (e) => {
    const filterVal = e.target.innerText.toLowerCase(); // Ensure filter value is lowercase for case-insensitive comparison
    //console.log("Filter value:", filterVal);
    let arr = document.querySelector(".btns").children;

    for(let i=0; i< arr.length; i++){
        if(arr[i].innerText.toLowerCase() === filterVal){
            arr[i].style.borderBottom = "2px solid cyan";
            arr[i].style.color = "cyan";
        }else{
            arr[i].style.borderBottom =null;
            arr[i].style.color = null;
        }
    }

    let updateArr = cardView.filter((cardInfo) => {
      let isMatch = cardInfo?.techStack.some(
        (stack) => stack.toLowerCase().trim() === filterVal
      );
      // console.log("Tech stacks:", cardInfo?.techStack);
      // console.log("Is match:", isMatch);
      return isMatch;
    });

    if (filterVal == "all") {
      setFilterView(cardView);
    } else {
      setFilterView(updateArr);
    }
  };

  return (
    <>
      <div className="skills box-border mt-10 flex flex-col items-center gap-10 p-2">
        <div className="content flex flex-col items-center gap-4">
          <div className="heading flex flex-col items-center gap-4">
            <h1 className=" text-4xl font-extrabold">PORTFOLIO</h1>
            <h3 className="font-medium text-cyan-600">
              My{" "}
              <span className="text-2xl font-semibold text-black">Cases</span>
            </h3>
          </div>
        </div>

        <div className="btns flex items-center box-border gap-4 font-bold text-sm">
          <button
            className="border-b-2 border-transparent hover:border-cyan-400"
            onClick={cardShow}
          >
            ALL
          </button>
          <button
            className="border-b-2 border-transparent hover:border-cyan-400"
            onClick={cardShow}
          >
            REACTJS
          </button>
          <button
            className="border-b-2 border-transparent hover:border-cyan-400"
            onClick={cardShow}
          >
            NEXTJS
          </button>
          <button
            className="border-b-2 border-transparent hover:border-cyan-400"
            onClick={cardShow}
          >
            MERN
          </button>
          <button
            className="border-b-2 border-transparent hover:border-cyan-400"
            onClick={cardShow}
          >
            CSS
          </button>
          <button
            className="border-b-2 border-transparent hover:border-cyan-400"
            onClick={cardShow}
          >
            TAILWINDCSS
          </button>
        </div>

        <div className="items box-border w-3/4 grid grid-cols-3 gap-10">
          {fliterView.map((cardInfo, index) => (
            <div
              className="con p-5 border-2 border-gray-400 rounded-xl"
              key={index}
            >
              <ProjectsCard cardInfo={cardInfo} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
