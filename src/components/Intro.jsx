import React, { useState } from "react";

export default function Intro({ userData }) {
  const [navShow, setNavShow] = useState(false);
  const [navImageUrl, setNavImageUrl] = useState(
    "https://cdn-icons-png.flaticon.com/128/4254/4254068.png"
  );

  return (
    <>
      <header className="text-black p-5 font-mono z-10">
        <nav className="flex justify-between items-center">
          <div className="leftSide">
            <h1 className="text-black font-bold text-2xl">Portfolyo</h1>
          </div>
          <div className="rightSide flex gap-4 items-center">
            <div className="light-dark-mode">
              <div className="btn h-6 w-6 cursor-pointer">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4489/4489231.png"
                  alt="icon"
                />
              </div>
            </div>
            <div className="nav-items flex items-center">
              <div className={navShow ? "flex gap-2" : "hidden"}>
                <a href="#">Home</a>
                <a href="#">About</a>
              </div>

              <div
                className="block h-10 w-10 cursor-pointer"
                onClick={() => {
                  setNavShow(!navShow);
                  if (navShow) {
                    setNavImageUrl(
                      "https://cdn-icons-png.flaticon.com/128/4254/4254068.png"
                    );
                  } else {
                    setNavImageUrl(
                      "https://cdn-icons-png.flaticon.com/128/9199/9199686.png"
                    );
                  }
                }}
              >
                <img src={navImageUrl} alt="icon" />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className="intro flex justify-around p-5 relative">
        <div className="user-info flex flex-col gap-10 w-2/5">
          <div className="font-mono">Hello, My name is</div>
          <div className="text-5xl font-extrabold">{userData?.about?.name}</div>
          <div className="text-xl">I am a <span className="text-cyan-500 text-3xl font-bold italic">{userData?.about?.title}</span></div>
          <div className="italic">{userData?.about?.description}</div>
        </div>
        <div className="photo-info h-96 w-96 rounded-full">
          <img
            className="h-96 w-96 object-cover bg-blue-500 rounded-full"
            src={userData?.about?.avatar?.url}
            alt="DP"
          />
        </div>
        <div className="absolute h-auto w-auto p-2 border-2 border-black text-red-500 font-extrabold" style={{right:"27rem",top:"22rem"}}>React Developer</div>
        <div className="absolute h-auto w-auto p-2 border-2 border-black text-blue-500 font-extrabold" style={{right:"2rem",top:"2rem"}}>5+ Years of experience</div>
        <div className="absolute h-auto w-auto p-2" style={{right:"38rem",top:"7rem"}}>
            <img src="https://cdn-icons-png.flaticon.com/128/7629/7629175.png" alt="design" />
        </div>
      </section>
    </>
  );
}
