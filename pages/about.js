import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src="/image/banners/banner-4.jpg"
          alt="winxpink"
          fill
          className="object-cover object-left-top w-full h-full -z-10 brightness-[0.85]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">winxpink</h3>
            <p className="leading-6 text-center text-white">
              Beyond Boundaries, Beyond Trends – Marketing Excellence Defined.
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-[630px] flex-center flex-col gap-8 text-center">
        <h3 className="text-5xl uppercase text-heading">More than 7 years of establishment</h3>
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
          Welcome to WINXPINK, your trusted partner in the dynamic world of marketing. With a rich legacy spanning 7
          years, we have been at the forefront of transforming businesses into industry leaders.
        </p>
        <p className="font-bold">Our Journey:</p>
        <p>
          Established in 2017, we embarked on a mission to redefine marketing excellence. Over the years, our team of
          seasoned professionals has consistently delivered innovative solutions, propelling our clients toward
          unparalleled success.
        </p>
        <p className="font-bold">What Sets Us Apart:</p>
        <p>
          <span className="font-bold">Strategic Expertise:</span> Our experienced team brings strategic insight to every
          campaign, ensuring your brand stands out in a crowded marketplace.
        </p>
        <p>
          <span className="font-bold">Multi-Channel Mastery:</span> From Facebook and TikTok to YouTube and beyond, we
          navigate the ever-evolving landscape of digital platforms, tailoring strategies for maximum impact.
        </p>
        <p>
          <span className="font-bold">Creative Brilliance:</span> Creativity is at our core. We craft compelling
          narratives and visuals that resonate with your audience, leaving a lasting impression.
        </p>
        <p>
          <span className="font-bold">Client-Centric Approach:</span> Your success is our priority. We build lasting
          relationships by understanding your unique needs and fostering collaboration for enduring results.
        </p>
        <p className="font-bold">Our Milestones:</p>
        <p>
          Over 15000 successful campaigns launched.
          <br />
          Recognized as a leading marketing agency by Agency of the Year in USA.
        </p>
        <p className="font-bold">What to Expect:</p>
        <p>
          When you partner with us, expect a holistic approach to marketing that goes beyond conventional strategies. We
          tailor our services to your objectives, ensuring a personalized roadmap for success.
        </p>
        <p className="font-bold">Join Us in Shaping the Future:</p>
        <p>
          As we celebrate 7 years of innovation, we invite you to be a part of our journey. Discover how we can elevate
          your brand and propel your business to new heights. Choose WINXPINK — Where Excellence Meets Experience.
        </p>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/image/banners/banner-5.jpg"
            alt="winxpink"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
          />
        </div>
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[550px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-center text-white uppercase text-heading">Why Should You Choose Us?</h3>
            <p className="leading-6 text-center text-white">
              Innovative Strategies
              <br />
              Dedicated Team
              <br />
              Proven Track Record
              <br />
              Client-Centric Approach
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
