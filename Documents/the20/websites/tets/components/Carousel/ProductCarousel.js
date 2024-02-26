import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
const images = [
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
export default function ProductCarousel() {
  return (
    <>
      <Swiper slidesPerView={"auto"} spaceBetween={25}>
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-[300px] h-[340px]">
            <div className="product-box">
              <Image
                src={image.front}
                alt="KASOMO"
                width={386}
                height={420}
                className="product-image product-image--front"
              />
              <Image
                src={image.back}
                alt="KASOMO"
                width={386}
                height={420}
                className="product-image product-image--back"
              />
              <div className="product-name">
                <p>{image.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
