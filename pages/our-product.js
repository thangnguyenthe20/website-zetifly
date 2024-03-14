/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { v4 } from "uuid";

const products = [
  {
    name: "HolySmile Clinically Proven Teeth Whitening Serum",
    fanpage: "https://www.facebook.com/LoungeForLady",
    image: "/image/products/product-1.png",
    desc: [
      "Conceals the yellow tones in your teeth to improve and enhance the whiteness of your smile.",
      "40ml",
      "From the U.S.",
    ],
  },
  {
    name: "Mushroom Head Air Cushion CC Cream",
    fanpage: "https://www.facebook.com/profile.php?id=61555957303343",
    image: "/image/products/product-2.jpg",
    desc: [
      "This highly blendable and buildable formula goes on smooth as silk, providing medium-to-full coverage and weightless all-day wear.",
      "20g",
      "From the U.S.",
    ],
  },
  {
    name: "Charmante Hand Skin Serum",
    fanpage: "https://www.facebook.com/profile.php?id=61556458611718",
    image: "/image/products/product-3.jpg",
    desc: ["Help protect hands from dryness, moisturize, nourish and soothe.", "40ml", "From the U.S."],
  },
  {
    name: "KASOMO Stimulating Beard & Eyebrow Growth Serum",
    fanpage: "https://www.facebook.com/profile.php?id=61556227740537",
    image: "/image/products/product-4.jpg",
    desc: [
      "Regrow beards & eyebrows fast in weeks, improve patchy, short beards, and eyebrows.",
      "30ml",
      "From the U.S.",
    ],
  },
  {
    name: "KASOMO Anti Dandruff & Hair Loss Shampoo",
    fanpage: "https://www.facebook.com/Kasomohairmask",
    image: "/image/products/product-5.jpg",
    desc: ["Remove dandruff, fungal scalp and prevent hair loss in just 7 days.", "250ml", "From the U.S."],
  },
  {
    name: "Morri Glow Renewal Exfoliating Gel",
    fanpage: "https://www.facebook.com/profile.php?id=100071667795588",
    image: "/image/products/product-6.jpg",
    desc: [
      "Frequent use gently exfoliates, promoting a clearer, even complexion, while simultaneously hydrating and smoothing the skin.",
      "100ml",
      "From the U.S.",
    ],
  },
  {
    name: "Trezzen Grey Hair Removal Bar Soap",
    fanpage: "https://www.facebook.com/profile.php?id=100086779023347",
    image: "/image/products/product-7.jpg",
    desc: [
      "Diminishes grey tones with each wash while simultaneously boosting hair thickness by up to 98%.",
      "30g",
      "From the U.S.",
    ],
  },
  {
    name: "Berari Vein Recovery Balm",
    fanpage: "https://www.facebook.com/profile.php?id=100086253897950",
    image: "/image/products/product-8.jpg",
    desc: [
      "Swiftly diminish spider veins and broken blood vessels, fortify veins, and enhance vein wall functionality for a noticeable reduction in unsightly spider veins.",
      "30ml",
      "From the U.S.",
    ],
  },
];

const OurProduct = () => {
  return (
    <div className="px-3 py-6 lg:px-16 sm:px-6 sm:py-8 lg:py-10">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 md:gap-4 xl:gap-6">
        {products.map(({ name, fanpage, image, desc }) => (
          <div key={v4()} className="flex flex-col overflow-hidden rounded shadow">
            <Link target="_blank" href={fanpage}>
              <img src={image} alt="product" className="aspect-square" />
            </Link>
            <div className="flex flex-col gap-3 px-3 pt-4 pb-5">
              <p className="text-[16px] text-center hover:text-blue-400 text-black leading-6">
                <Link target="_blank" href={fanpage}>
                  {name}
                </Link>
              </p>
              <div className="flex-center">
                <ul className="space-y-1">
                  {desc.map((text) => (
                    <li key={v4()} className="text-center text-secondary">
                      &bull; {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-center">
                <Link target="_blank" href={fanpage}>
                  <p className="px-3 py-1.5 uppercase bg-[#EE427F] text-white block w-fit rounded-md text-sm hover:bg-[#ff78a7]">
                    View fanpage
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
