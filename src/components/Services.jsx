import React, { useState } from "react";
import Cards from "./Cards";

export default function Services({userData}){
    // const[cards,setCards] = useState([{}]);
    // setCards(userData?.services);
    const cards = [...(userData?.services || [])];
    //console.log(cards);
    return(
        <>
            <section className="mt-10 flex flex-col items-center gap-3">
            <div className="content">
                <div className="heading flex flex-col items-center gap-4">
                    <h1 className=" text-4xl font-extrabold">What I do</h1>
                    <h3 className="font-medium text-cyan-600">My <span className="text-2xl font-semibold text-black">Services</span></h3>
                </div>
            </div>
            <div className="items flex flex-row items-center w-3/4 gap-5 overflow-x-auto overflow-y-hidden mb-5">
                {cards.map((dataInfo,index) =>(
                    <div className="con " key={index}>
                        <Cards dataInfo={dataInfo}/>    
                    </div>
                ))}
            </div>
            </section>
        </>
    )
}