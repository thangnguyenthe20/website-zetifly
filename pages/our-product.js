/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { v4 } from "uuid";

const products = [
  {
    name: "HolySmile Teeth Color Corrector",
    image: "/image/products/product-1.jpg",
    desc: [
      "Transform your smile instantly with our teeth whitening treatment, reducing the visibility of yellow stains for a brighter appearance.",
      "40ml",
      "From the U.S.",
    ],
  },
  {
    name: "CC Cream -Mushroom Head Air Cushion",
    image: "/image/products/product-2.jpg",
    desc: [
      "Elevate your foundation application to achieve a weightless, effortlessly natural look.",
      "20g",
      "From the U.S.",
    ],
  },
  {
    name: "Charmante Hand Skin Serum",
    image: "/image/products/product-3.jpg",
    desc: ["Reduce wrinkles, deliver immediate moisture and effectively calm the skin.", "40ml", "From the U.S."],
  },
  {
    name: "Kasomo Hair Growth Spray",
    image: "/image/products/product-4.png",
    desc: ["Stimulates hair growth, combats hair loss and effectively tackles baldness.", "75ml", "From the U.S."],
  },
  {
    name: "Kasomo Hair Mask",
    image: "/image/products/product-5.png",
    desc: [
      "Uncover the secret to lush, silky hair with our vegan hair mask. Bid farewell to frizz, dryness, and knots in mere seconds.",
      "From the U.S.",
    ],
  },
  {
    name: "Kasomo Beard And Eyebrow Growth Serum",
    image: "/image/products/product-6.jpg",
    desc: [
      "Revive beard and eyebrow growth, amplifying thickness and length while strengthening for denser, more robust results, and reducing thinning and breakage in eyebrows.",
      "From the U.S.",
    ],
  },
  {
    name: "Kasomo Shampoo For Hair Loss And Dandruff",
    image: "/image/products/product-7.jpg",
    desc: ["Proven to halt hair loss and eradicate dandruff within just one week of consistent use.", "From the U.S."],
  },
  {
    name: "Morri Peeling Lotion",
    image: "/image/products/product-8.jpg",
    desc: [
      "Banish dead skin cells and dark spots to reveal a smoother, brighter complexion.",
      "100ml",
      "From the U.S.",
    ],
  },
  {
    name: "Trezzen Shampoo Bar Soap (Upgrade version)",
    image: "/image/products/product-9.jpg",
    desc: [
      "Restore your natural hair color with our daily shampoo, effectively turning gray or white hair into a youthful, vibrant dark hue.",
      "60g",
      "From the U.S.",
    ],
  },
  {
    name: "Berari Vein Recovery Balm",
    image: "/image/products/product-10.jpg",
    desc: [
      "Quickly reduce the appearance of spider veins and broken blood vessels, strengthen veins, and improve vein wall function for a noticeable decrease in unsightly spider veins.",
      "30g",
      "From the U.S.",
    ],
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
