import React from "react";

export default function Cards({dataInfo}){

    return(
        <>
            <div className="card relative border-2 border-black h-96 w-96 rounded-2xl">
                <div className="container absolute h-full w-full">
                    <img className="rounded-2xl" src={dataInfo?.image?.url} alt="banner" />
                </div>
                <div className="container-info flex flex-col justify-evenly rounded-2xl font-medium p-2 opacity-0 h-full w-full bg-slate-300 hover:opacity-80">
                    <header>
                        <h1 className="font-extrabold">{dataInfo?.name}</h1>
                    </header>
                    <div className="content">
                        <p className="italic">{dataInfo?.desc}</p>
                    </div>
                    <div className="amount">
                        <p className="font-extrabold">{dataInfo?.charge}</p>
                    </div>
                </div>
            </div>
        </>
    )

}