import React from "react";
import Marquee from "react-fast-marquee";

const CustomMarquee = () => {
  return (
    <Marquee speed={50} gradient={false}>
      <p className="py-4 space-x-10 uppercase text-lg font-light tracking-widest">
        <span>paraben free</span>
        <span>-</span>
        <span>sulfate free</span>
        <span>-</span>
        <span>phthalate free</span>
        <span>-</span>
        <span>free of mineral oils</span>
        <span>-</span>
        <span>free of GMOs</span>
        <span>-</span>
        <span>cruelty-free</span>
        <span>-</span>
        <span>carbon neutral</span>
      </p>
    </Marquee>
  );
};

export default CustomMarquee;
