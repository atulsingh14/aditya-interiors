import React from "react";

const Projects = () => {
  return (
    <div className="w-full h-fit bg-green/70 flex flex-col justify-center items-center">
      <h1 className="font-bold sm:text-5xl text-4xl p-8 align-middle text-white">
        Gallery
      </h1>

      <div className="flex flex-col justify-center items-center pt-5 pb-10 md:flex-row md:flex-wrap gap-4">
        <div className="w-[75%] md:w-[25%] cursor-pointer  rounded-lg bg-white p-4">
          <img
            className="object-center rounded-lg  w-full h-full"
            src="src/assets/photos/afdjsdjfhkj03.jpg"
            alt="Almirah"
          />
        </div>

        <div className="w-[75%] md:w-[25%] cursor-pointer  rounded-lg bg-white p-4">
          <img
            className=" object-center rounded-lg  w-full h-full"
            src="src/assets/photos/afdjsdjfhkj17.jpg"
            alt="Almirah"
          />
        </div>
        <div className="w-[75%] md:w-[25%] cursor-pointer 0 rounded-lg bg-white p-4 ">
          <img
            className=" object-center rounded-lg  w-full h-full"
            src="src/assets/photos/afdjsdjfhkj30.jpg"
            alt="Almirah"
          />
        </div>
        <div className="w-[75%] md:w-[25%] cursor-pointer  rounded-lg bg-white p-4">
          <img
            className=" object-center rounded-lg  w-full h-full"
            src="src/assets/photos/afdjsdjfhkj34.jpg"
            alt="Almirah"
          />
        </div>
        <div className="w-[75%] md:w-[25%] cursor-pointer  rounded-lg bg-white p-4">
          <img
            className=" object-center rounded-lg  w-full h-full"
            src="src/assets/photos/afdjsdjfhkj05.jpg"
            alt="Almirah"
          />
        </div>
        <div className="w-[75%] md:w-[25%] cursor-pointer  rounded-lg bg-white p-4">
          <img
            className=" object-center rounded-lg  w-full h-full"
            src="src/assets/photos/afdjsdjfhkj42.jpg"
            alt="Almirah"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
