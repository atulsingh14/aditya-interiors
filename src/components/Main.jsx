import React from "react";

function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x[-1] "
        src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center justify-items-center">
          <h1 className="sm:text-8xl text-6xl font-bold text-green text-center text">
            Aditya Interiors
          </h1>
          <h2
            className="sm:text-2xl text-1xl pt-4 
          font-semibold uppercase tracking-widest text-green/90 text-center"
          >
            interior decoration made easy
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Main;
