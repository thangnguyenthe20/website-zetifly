import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src="/image/banners/banner-4.jpg"
          alt="freshvibs"
          fill
          className="object-cover object-left-top w-full h-full -z-10 brightness-[0.85]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">freshvibs</h3>
            <p className="leading-6 text-center text-white">
              Our company was founded by industry veterans with over 15 years of experience, dedicated to delivering
              quality and excellence in every aspect of our services. <br />
              Our team comprises seasoned professionals with a wealth of experience in marketing, dedicated to crafting
              innovative strategies and delivering exceptional results for our clients.
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-[630px] flex-center flex-col gap-8 text-center">
        <h3 className="text-5xl uppercase text-heading">
          EXCELLENCE GUARANTEED: TAILORED SOLUTIONS, UNWAVERING COMMITMENT
        </h3>
        <div>
          <svg height="100" viewBox="0 0 8 100" width="8" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m1 100c0-3.845 6-3.845 6-7.69s-6-3.845-6-7.691c0-3.845 6-3.845 6-7.69 0-3.847-6-3.847-6-7.693 0-3.843 6-3.843 6-7.687 0-3.845-6-3.845-6-7.691 0-3.845 6-3.845 6-7.69 0-3.846-6-3.846-6-7.69 0-3.847 6-3.847 6-7.694s-6-3.847-6-7.695c0-3.846 6-3.846 6-7.693 0-3.849-6-3.849-6-7.698s6-3.849 6-7.698"
              fill="none"
              stroke="#daa855"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
        <p>
          We are committed to providing you with top-notch products and services tailored to your specific needs,
          ensuring unparalleled quality and satisfaction every step of the way.
        </p>
        <p>
          Your success is our priority, and we pledge to deliver excellence in every aspect of our offerings, empowering
          your business to thrive in today's competitive landscape.
        </p>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/image/banners/banner-5.jpg"
            alt="freshvibs"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
          />
        </div>
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[550px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-center text-white uppercase text-heading">OUR MISSION</h3>
            <p className="leading-6 text-center text-white">
              Empower businesses to thrive with innovative, cost-effective marketing solutions.
              <br />- Drive growth
              <br />- Foster connections
              <br />- Inspire success
              <br />- Tailored strategies
              <br />- Maximum impact, minimum costs
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
