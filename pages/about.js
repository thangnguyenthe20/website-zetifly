import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src="/image/banners/banner-4.jpg"
          alt="sakutara"
          fill
          className="object-cover object-left-top w-full h-full -z-10 brightness-[0.85]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">sakutara</h3>
            <p className="leading-6 text-center text-white">
              PROFESSIONAL, ENTHUSIASTIC AND GOOD EXPERTISE… Are the working spirit of SAKUTARA.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/image/banners/banner-5.jpg"
            alt="sakutara"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
          />
        </div>
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[550px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-center text-white uppercase text-heading">OUR COMMITMENTS</h3>
            <p className="leading-6 text-center text-white">
              We are ready to commit to our customers that:
              <br />
              - Revenue growth at least 20%
              <br />
              - Optimize your Online Marketing budget to the maximum
              <br />
              - Dedicated and professional consultation
              <br />
              - Transparent Communication
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
