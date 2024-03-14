/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { v4 } from "uuid";

const products = [
  {
    name: "HolySmile Teeth Color Changing Serum",
    image: "/image/products/product-1.jpg",
    desc: ["Conceal yellow tones in your teeth to improve and brighten your smile."],
  },
  {
    name: "Mushroom Head Air CC Cream Anti Pore Cushion",
    image: "/image/products/product-2.webp",
    desc: ["Providing full coverage and an even skin tone, suitable for all skin types."],
  },
  {
    name: "Charmante Perfect Hand Brighten Moisturizing Serum",
    image: "/image/products/product-3.jpg",
    desc: [
      "Protect hands from environmental and household irritants, smooth the skin, and provide a refreshing, revitalizing experience.",
    ],
  },
  {
    name: "KASOMO Hair ReGrowth and Smooth Spray",
    image: "/image/products/product-4.jpg",
    desc: ["Repairs the scalp and reactivates the cells"],
  },
  {
    name: "KASOMO Nourishing and Smooth Mask For Hair",
    image: "/image/products/product-5.jpg",
    desc: [
      "Perfect remedy for damaged, coarse hair; assist restore your smoothness with just a few therapeutic drops.",
    ],
  },
  {
    name: "KASOMO Beard - Brow Nourishing Oil",
    image: "/image/products/product-6.png",
    desc: ["Best Beard Care for Moisturizing and Softening. Care your beard to the fullest."],
  },
  {
    name: "KASOMO Anti Hair Loss Shampoo",
    image: "/image/products/product-7.jpg",
    desc: [
      "Gently cleanses the hair and scalp, eliminating excess follicle-clogging sebum to help maintain an optimal scalp environment for healthy-looking hair.",
    ],
  },
  {
    name: "Morri Skin Peeling Gel",
    image: "/image/products/product-8.jpg",
    desc: ["Improve skin problems of rough and dry, keratin accumulation, dark yellow, dull skin."],
  },
  {
    name: "Trezzen Darken Bar Soap",
    image: "/image/products/product-9.jpg",
    desc: ["Restoring your natural hair color, from gray hair to vivid dark color."],
  },
  {
    name: "Berari Vein Repair Cream",
    image: "/image/products/product-10.jpg",
    desc: [
      "Reduce spider veins and fractured blood vessels rapidly, strengthen veins, and improve vein wall function to help fade unattractive spider veins.",
    ],
  },
];

const OurProduct = () => {
  return (
    <div className="px-3 py-6 lg:px-16 sm:px-6 sm:py-8 lg:py-10">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 xl:gap-6">
        {products.map(({ name, image, desc }) => (
          <div key={v4()} className="flex flex-col overflow-hidden rounded shadow">
            <img src={image} alt="product" className="aspect-square" />
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
