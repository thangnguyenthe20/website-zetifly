import Image from "next/image";
import React from "react";

const Feedback = () => {
  return (
    <div className="container">
      <p className="text-label text-center lg:mb-20 mb-12">
        From real custom-ers
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 place-items-center lg:gap-8 gap-12">
        <div className="flex flex-col h-full lg:max-w-full max-w-md">
          <Image
            src="/image/customer/1.png"
            alt="avatar"
            width={80}
            height={80}
            className="w-20 h-20 -mb-10 mx-auto rounded-full z-[1]"
          />
          <p className="flex-1 px-6 pt-20 pb-16 bg-white text-heading text-3xl text-center">
            “I really love the way my hair feels since using Kasomo! It’s
            healthier and softer and I really love how it smells!”
          </p>
          <div className="w-full h-28 flex overflow-hidden">
            <Image
              src="/image/product/5.jpg"
              alt="avatar"
              width={112}
              height={112}
              className="w-28 h-28 object-contain"
            />
            <p className="flex-1 lg:p-5 text-sm text-sm p-3 bg-black text-white">
              Nathalie is a curly girl in Maine. Her routine includes: The whole
              Kasomo Collection of 5 products.
            </p>
          </div>
        </div>
        <div className="flex flex-col h-full lg:max-w-full max-w-md">
          <Image
            src="/image/customer/2.png"
            alt="avatar"
            width={80}
            height={80}
            className="w-20 h-20 -mb-10 mx-auto rounded-full z-[1]"
          />
          <p className="flex-1 px-6 pt-20 pb-16 bg-white text-heading text-3xl text-center">
            “This is the best hair care I’ve ever had in my life. Game changer.
            Will never look back at other shampoo!”
          </p>
          <div className="w-full h-28 flex overflow-hidden">
            <Image
              src="/image/product/6.jpg"
              alt="avatar"
              width={112}
              height={112}
              className="w-28 h-28 object-contain"
            />
            <p className="flex-1 lg:p-5 text-sm p-3 bg-black text-white">
              Elena is a vegan in California. Her routine includes: Shampoo —
              Hair Spray
            </p>
          </div>
        </div>
        <div className="flex flex-col h-full lg:max-w-full max-w-md">
          <Image
            src="/image/customer/3.png"
            alt="avatar"
            width={80}
            height={80}
            className="w-20 h-20 -mb-10 mx-auto rounded-full z-[1]"
          />
          <p className="flex-1 px-6 pt-20 pb-16 bg-white text-heading text-3xl text-center">
            “I love all the products that I have tried. They all have
            contributed to great volume, shine and curl.”
          </p>
          <div className="w-full h-28 flex overflow-hidden">
            <Image
              src="/image/product/7.jpg"
              alt="avatar"
              width={112}
              height={112}
              className="w-28 h-28 object-contain"
            />
            <p className="flex-1 lg:p-5 text-sm p-3 bg-black text-white">
              I is a fitness buff outside Niagara Falls. She has been using
              Kasomo’s products for 2 months said they were remarkable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
