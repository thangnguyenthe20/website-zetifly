/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { v4 } from "uuid";

const products = [
  {
    name: "KASOMO Hair and Brow Boost Serum",
    image: "/image/products/product-1.webp",
    desc: [
      "Promote natural hair and eyebrow growth, helping you achieve fuller, thicker, and healthier-looking hair and brows.",
    ],
  },
  {
    name: "KASOMO Hair Growth Shampoo",
    image: "/image/products/product-2.webp",
    desc: [
      "Stimulate hair follicles, reduce hair loss, and promote healthier, thicker hair growth for a fuller and more vibrant mane.",
    ],
  },
  {
    name: "Morri Orange Glow Exfoliating Lotion",
    image: "/image/products/product-3.jpg",
    desc: ["Gently remove dead skin cells, revealing brighter and smoother skin with a radiant, youthful glow."],
  },
  {
    name: "Trezzen BlackSilk Hair Bar Soap",
    image: "/image/products/product-4.jpg",
    desc: [
      "Infused with nourishing ingredients to naturally darken and enhance hair color, leaving your locks silky smooth and lustrously black.",
    ],
  },
  {
    name: "Berari Vanish Vein Reduction Cream",
    image: "/image/products/product-5.jpg",
    desc: [
      "Diminish the appearance of varicose veins and spider veins, promoting smoother and healthier-looking skin.",
    ],
  },
  {
    name: "HolySmile RadiantWhite Teeth Whitening Serum",
    image: "/image/products/product-6.jpg",
    desc: ["Effectively lighten tooth discoloration and brighten your smile, restoring confidence with every use."],
  },
  {
    name: "FungiGlow CC Cushion Cream",
    image: "/image/products/product-7.jpg",
    desc: [
      "A lightweight and hydrating formula with a unique mushroom-shaped applicator, providing seamless coverage and a natural, radiant finish for flawless-looking skin.",
    ],
  },
  {
    name: "Charmante AquaGlow Hand Hydration Serum",
    image: "/image/products/product-8.png",
    desc: [
      "A nourishing formula crafted to deeply moisturize and revitalize your hands, leaving them silky smooth and irresistibly touchable.",
    ],
  },
  {
    name: "KASOMO Boosting Hair And Eyebrow Growth Serum",
    image: "/image/products/product-9.webp",
    desc: ["Revitalize your scalp, repair damage, and trigger cell renewal for denser hair and eyebrow growth."],
  },
  {
    name: "KASOMO Nourishing Hair Repair Mask",
    image: "/image/products/product-10.jpg",
    desc: ["An ideal therapy for damaged, unruly hair, effortlessly restore smoothness"],
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
