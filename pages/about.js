import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src="/image/banners/banner-4.jpg"
          alt="glamquester"
          fill
          className="object-cover object-left-top w-full h-full -z-10 brightness-[0.85]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">glamquester</h3>
            <p className="leading-6 text-center text-white">
              Our success is your success. Join us and let's reach for the stars together! Let's redefine the limits of
              what's possible together
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-[630px] flex-center flex-col gap-8 text-center">
        <h3 className="text-5xl uppercase text-heading">MORE THAN 5 YEARS OF ESTABLISHMENT</h3>
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
          Celebrating a milestone! For more than 5 years, our relentless drive in the marketing industry has paid off.
          With a team of over 100 innovative and dedicated employees, we've soared to unimaginable heights. Your
          commitment and trust have been key to our success. We look forward to reaching new milestones together.
        </p>
        <p>
          Success doesn't happen overnight, it's the result of consistent efforts, unyielding perseverance, and a vision
          that never blurs. Here’s to a future filled with continuous growth, success, and innovation.
        </p>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/image/banners/banner-5.jpg"
            alt="glamquester"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
          />
        </div>
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[580px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-center text-white uppercase text-heading">OUR COMMITMENTS</h3>
            <p className="leading-6 text-center text-white">
              Fired up to boost your brand? We're a marketing firm dedicated to superior results, here's our method:
              <br />
              - We start by listening. Grasping your vision is vital for effective marketing.
              <br />
              - Next, we research. We dive into market trends to keep your brand on top.
              <br />- Lastly, we innovate. We apply avant-garde strategies to enhance your brand's influence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
