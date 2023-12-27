import React, { useState } from 'react';

const About = () => {
  return (
    <div className="w-full h-fit flex-col justify-center items-center text-center bg-white md:pt-32 md:pb-32 md:pl-64 md:pr-64">
      <h1
        className="font-bold sm:text-5xl text-4xl p-8 
    align-middle text-accent"
      >
        About Us
      </h1>
      <div className="flex justify-center items-center ">
        <p className="  md:w-[60%] font-normal sm:text-1xl text-1xl p-10 pb-15 text-green/90 pt-0">
          Incorporated in the year 2005,Based at Ahmedabad (Gujarat, India), we
          “Aditya Interiors” have established ourselves as a notable Interior
          Designers.Our offered information signage is used by offices,
          hospitals, stores, and schools for publicity purpose. The product
          range is designed and manufactured using high grade raw material and
          sophisticated technology in compliance with international quality
          standards under the guidance of our quality controllers.Gradually We
          ahve expanded our business to all the Sectors in all over GUJARAT.
        </p>
      </div>
    </div>
  );
};

export default About;
