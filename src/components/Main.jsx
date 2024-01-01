import React from "react";

function Main() {
  return (
    <div id="main">
      <img
        className="backdrop-blur object-cover w-full h-screen "
        src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="main-image"
      />

      <div className="absolute w-full h-screen top-0 left-0 bg-black/70 justify-center  items-center flex flex-col">
        <h1 className="sm:text-8xl text-6xl font-bold text-white text-center ">
          Aditya Interiors
        </h1>
        <p
          className="sm:text-xs md:text-1xl text-sm pt-4 
          font-semibold uppercase tracking-widest text-white/90 text-center"
        >
          Making your dreams into Reality
        </p>
      </div>
    </div>
  );
}

export default Main;
