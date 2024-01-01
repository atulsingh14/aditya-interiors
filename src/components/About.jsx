import React, { useState } from "react";

const About = () => {
  return (
    <div className="w-full h-[75%] flex-col justify-center items-center text-center bg-white md:pt-32 md:pb-32 md:pl-64 md:pr-64">
      <h1
        className="font-bold sm:text-5xl text-4xl p-8 
    align-middle text-accent"
      >
        About Us
      </h1>
      <div className="flex justify-center items-center ">
        <p className="  md:w-[60%] font-normal sm:text-1xl text-1xl p-10 pb-15 text-green/90 pt-0 text-justify">
          Aditya Interiors, established in 2014 in Gurugram, is a leading
          interior solutions provider. Specializing in paint, furniture, civil,
          plumbing, electrical, and renovations, we cater to a diverse clientele
          in both residential and commercial sectors. Our commitment to
          high-quality craftsmanship meets affordability, making us a trusted
          name. With a vision centered on integrity and innovation, we transform
          spaces into aesthetic marvels, reflecting our values in every project.
          Join Aditya Interiors for top-notch interior solutions that redefine
          living and working spaces.
        </p>
      </div>
    </div>
  );
};

export default About;
