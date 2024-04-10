import React from "react";

export default function ProjectsCard({cardInfo}){

    const techStack = (cardInfo?.techStack || [])

    return(
        <>
            <div className="card flex flex-col gap-5">
                <div className="img h-auto w-auto rounded-xl">
                    <img className="rounded-xl object-cover h-full w-full transition-all duration-150 hover:scale-110 hover:" src={cardInfo?.image?.url} alt="banner" />
                </div>
                <div className="stack font-bold flex gap-2 text-cyan-400">
                    {techStack.map((info,index)=>(
                        <div className="stack" key={index}>
                            <p>{info}</p>
                        </div>
                    ))}
                </div>
                <div className="title font-extrabold text-xl">
                    <h1>
                        {cardInfo?.title}
                    </h1>
                </div>
                <div className="description">
                        {cardInfo?.description}
                </div>
            </div>
        </>
    )
}