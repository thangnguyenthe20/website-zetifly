import ProductCarousel from "@/components/Carousel/ProductCarousel";
import Image from "next/image";
import React from "react";

const products = [
  {
    front: "/image/product/1-front.jpg",
    back: "/image/product/1-back.jpg",
    name: "Kasomo Hair Spray",
  },
  {
    front: "/image/product/2-front.jpg",
    back: "/image/product/2-back.jpg",
    name: "Kasomo Hair Shampoo",
  },
  {
    front: "/image/product/3-front.jpg",
    back: "/image/product/3-back.jpg",
    name: "Kasomo Hair Mask",
  },
  {
    front: "/image/product/4-front.jpg",
    back: "/image/product/4-back.jpg",
    name: "Kasomo Hair & Scalp Derma Roller",
  },
];

const ProductSection = () => {
  return (
    <div className="relative container">
      <div className="lg:grid hidden grid-rows-2 grid-cols-3 gap-6">
        <div className="row-span-2 relative">
          <Image
            src="/image/banner/4.jpg"
            alt="KASOMO"
            width={828}
            height={1271}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex-center flex-col text-center">
            <h3 className="text-heading text-5xl text-white p-6 tracking-wide leading-[50px]">
              Customize every product in your routine
            </h3>
            <p className="text-label text-white underline">See the full collection</p>
          </div>
        </div>
        {products.map((product, index) => (
          <div key={index} className="product-box h-[420px]">
            <Image
              src={product.front}
              alt="KASOMO"
              width={386}
              height={420}
              className="product-image product-image--front"
            />
            <Image
              src={product.back}
              alt="KASOMO"
              width={386}
              height={420}
              className="product-image product-image--back"
            />
            <div className="product-name">
              <p>{product.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:hidden block w-full h-full">
        <ProductCarousel />
      </div>
    </div>
  );
};

export default ProductSection;
