/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { v4 } from "uuid";

const products = [
  {
    name: "Enhancing Bar Soap with Trezzen Hair Color",
    image: "/image/products/product-1.jpg",
    desc: [
      "Hair blackening soap makes hair shiny and effectively prevents dandruff, hair loss, and itching.",
      "60g",
      "Made in USA",
    ],
  },
  {
    name: "Charmante brightening and softening serum for hands",
    image: "/image/products/product-2.jpg",
    desc: ["Serum heals chapped skin, softens and moisturizes hands, and brightens hands.", "40ml", "Made in USA"],
  },
  {
    name: "KASOMO Smooth and ReGrowth Hair Spray",
    image: "/image/products/product-3.jpg",
    desc: ["Hair spray restores the scalp and reactivates cells, helping hair grow thicker.", "75ml", "Made in USA"],
  },
  {
    name: "KASOMO Beard - Brow Nourishing Oil",
    image: "/image/products/product-4.png",
    desc: ["Best Beard Care for Moisturizing and Softening. Care your beard to the fullest.", "30ml", "Made in USA"],
  },
  {
    name: "Morri body exfoliating lotion",
    image: "/image/products/product-5.jpg",
    desc: ["The cream removes blemishes, dullness, blemishes and brightens your skin.", "100ml", "Made in USA"],
  },
  {
    name: "Melasma treatment cream",
    image: "/image/products/product-6.jpg",
    desc: [
      "Pro-retinol soothes irritation as the moisturizer profoundly hydrates and reduces redness, pigmentation, and dark spots.",
      "30g",
      "Made in USA",
    ],
  },
];

const OurProduct = () => {
  return (
    <div className="px-3 py-6 lg:px-16 sm:px-6 sm:py-8 lg:py-10">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 md:gap-4 xl:gap-6">
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
