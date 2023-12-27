import React from "react";

const Services = () => {
  return (
    <div className="w-full h-screen bg-accentdark text-white flex flex-col justify-center items-center">
      <h1 className="font-bold sm:text-5xl text-4xl p-8 align-middle">
        Services
      </h1>
      <div className="flex flex-wrap gap-5 justify-center items-center pt-4">
        <div className="flex flex-col justify-center items-center border-2 border-border p-8 rounded-xl w-[40%] md:w-[35%] hover:hover:scale-105 ease-in duration-300 ">
          <img
            className="size-20 fill-white stroke-white"
            src="src/assets/furniture.svg"
            alt=""
          />
          <h2 className="font-medium sm:text-2xl text-2xl pt-2">Furniture</h2>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-border p-8 rounded-xl w-[40%] md:w-[35%] hover:hover:scale-105 ease-in duration-300 ">
          <img
            className="size-20 fill-white stroke-white"
            src="src/assets/paint.svg"
            alt=""
          />
          <h2 className="font-medium sm:text-2xl text-2xl pt-2">Paint</h2>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-border p-8 rounded-xl w-[40%] md:w-[35%] hover:hover:scale-105 ease-in duration-300 ">
          <img
            className="size-20 fill-white stroke-white"
            src="src/assets/electrical.svg"
            alt=""
          />
          <h2 className="font-medium sm:text-2xl text-2xl pt-2">Electrical</h2>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-border p-8 rounded-xl w-[40%] md:w-[35%] hover:hover:scale-105 ease-in duration-300 ">
          <img
            className="size-20 fill-white stroke-white"
            src="src/assets/civil.svg"
            alt=""
          />
          <h2 className="font-medium sm:text-2xl text-2xl pt-2">Civil</h2>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-border p-8 rounded-xl w-[40%] md:w-[35%] hover:hover:scale-105 ease-in duration-300 ">
          <img
            className="size-20 fill-white stroke-white"
            src="src/assets/Renovation.svg"
            alt=""
          />
          <h2 className="font-medium sm:text-2xl text-2xl pt-2">Renovation</h2>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-border p-8 rounded-xl w-[40%] md:w-[35%] hover:hover:scale-105 ease-in duration-300 ">
          <img
            className="size-20 fill-white stroke-white"
            src="src/assets/plumbing.svg"
            alt=""
          />
          <h2 className="font-medium sm:text-2xl text-2xl pt-2">Plumbing</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
