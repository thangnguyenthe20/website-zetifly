/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { v4 } from "uuid";

const products = [
  {
    name: "HolySmile Clinically Proven Teeth Whitening Serum",
    image: "/image/products/product-1.jpg",
    desc: [
      "Conceals the yellow tones in your teeth to improve and enhance the whiteness of your smile.",
      "40ml",
      "From the U.S.",
    ],
  },
  {
    name: "Mushroom Head Air Cushion CC Cream",
    image: "/image/products/product-2.jpg",
    desc: [
      "This highly blendable and buildable formula goes on smooth as silk, providing medium-to-full coverage and weightless all-day wear.",
      "20g",
      "From the U.S.",
    ],
  },
  {
    name: "Charmante Hand Skin Serum",
    image: "/image/products/product-3.jpg",
    desc: ["Help protect hands from dryness, moisturize, nourish and soothe.", "40ml", "From the U.S."],
  },
  {
    name: "Kasomo Hair Growth Spray",
    image: "/image/products/product-4.png",
    desc: ["Promotes hair growth, prevents hair loss and addresses baldness effectively.", "75ml", "From the U.S."],
  },
  {
    name: "Kasomo Hair Mask",
    image: "/image/products/product-5.jpg",
    desc: [
      "Discover a vegan hair mask for achieving healthy, silky hair. Say goodbye to frizz, dryness and tangles in seconds.",
      "From the U.S.",
    ],
  },
  {
    name: "Kasomo Beard And Eyebrow Growth Serum",
    image: "/image/products/product-6.jpg",
    desc: [
      "Revitalize beard and eyebrow growth; enhance thickness and length; fortify for stronger, denser results; diminish thinning and breakage in eyebrows.",
      "From the U.S.",
    ],
  },
  {
    name: "Kasomo Shampoo For Hair Loss And Dandruff",
    image: "/image/products/product-7.jpg",
    desc: ["Effective in preventing hair loss and eliminating dandruff within 7 days of usage.", "From the U.S."],
  },
  {
    name: "Morri Orange Peeling Lotion",
    image: "/image/products/product-8.jpg",
    desc: ["Eliminate dead skin cells and dark spots, promoting smoother and brighter skin complexion.", "100ml"],
  },
  {
    name: "Trezzen Hair Darkening Shampoo Bar",
    image: "/image/products/product-9.jpg",
    desc: [
      "Revitalize your natural hair color with our daily shampoo, effectively transforming gray or white hair into a youthful, vibrant dark shade.",
      "60g",
      "From the U.S.",
    ],
  },
  {
    name: "Berari Vein Care Fading Cream",
    image: "/image/products/product-10.jpg",
    desc: ["Alleviate varicose veins and spider veins while enhancing blood circulation.", "30g", "From the U.S."],
  },
];

const OurProduct = () => {
  return (
    <div className="px-3 py-6 lg:px-16 sm:px-6 sm:py-8 lg:py-10">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 xl:gap-6">
        {products.map(({ name, image, desc }) => (
          <div key={v4()} className="flex flex-col overflow-hidden rounded shadow">
            <img src={image} alt="product" className="aspect-square"></img>
            <div className="flex flex-col gap-3 px-3 pt-4 pb-5">
              <p className="text-[16px] text-center hover:text-blue-400 text-black leading-6">{name}</p>
              <div className="flex-center">
                <ul className="space-y-1">
                  {desc.map((text) => (
                    <li key={v4()} className="text-center text-secondary">
                      &bull; {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
