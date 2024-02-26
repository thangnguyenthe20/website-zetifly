import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation } from "swiper";

const ingredients = [
  {
    image: "/image/ingredient/1.jpg",
    title: "Panthenol",
    desc: "Panthenol (sometimes referred to as pro-vitamin B5) is a popular humectant in personal care products due to its ability to attract and hold moisture. Studies show that 1% panthenol quickly increase scalp’s hydration, while decreasing transepidermal water loss (the amount of water that evaporates through skin).",
  },
  {
    image: "/image/ingredient/2.jpg",
    title: "Camellia Japonica (Tsubaki) Flower Extract",
    desc: "Camellia japonica flower extract is also known as Tsubaki or Japanese camellia. Research has shown this plant has impressive antioxidant, anti-pollution, and soothing abilities. It helps hair better defend itself against external aggressors that detract from a healthy appearance.",
  },
  {
    image: "/image/ingredient/3.jpg",
    title: "Coconut Oil",
    desc: "Coconut oil is a rich source of medium-chain fatty acids, also known as medium-chain triglycerides. It is used to relieve dandruff, restore luster to dry and damaged hair, tame frizz, and protect hair against styling damage. It is safe to use on most hair types.",
  },
  {
    image: "/image/ingredient/4.jpg",
    title: "Ginseng Root Extract",
    desc: "Ginseng is believed to increase the dermal cells on the scalp which, in turn, strengthens the follicles and roots of the hair. This not only encourages the new growth of strands but also prevents hair thinning and breakage.",
  },
  {
    image: "/image/ingredient/5.jpg",
    title: "Ginger Extract",
    desc: "Ginger helps improve the circulation of the scalp while also stimulating each hair follicle, which in turn promotes natural hair growth. The many vitamins, minerals, and fatty acids in ginger also contribute to strengthening your hair strands to combat hair loss, and ginger contributes to restoring moisture loss.",
  },
  {
    image: "/image/ingredient/6.jpg",
    title: "Honeysuckle (Lonicera japonica) Extract",
    desc: "Ginger helps improve the circulation of the scalp while also stimulating each hair follicle, which in turn promotes natural hair growth. The many vitamins, minerals, and fatty acids in ginger also contribute to strengthening your hair strands to combat hair loss, and ginger contributes to restoring moisture loss. ",
  },
];

export default function IngredientCarousel() {
  return (
    <div className="ingredient-carousel container">
      <div className="relative">
        <div className="ingredient-prev absolute top-28 left-6 -translate-y-1/2 w-8 h-8 p-2 rounded-full bg-black z-[30]">
          <Image
            src="/image/icon/right-arrow-sm.png"
            alt="arrow"
            width={32}
            height={32}
            className="w-full h-full invert rotate-180 cursor-pointer"
          />
        </div>
        <div className="ingredient-next absolute top-28 right-6 -translate-y-1/2 w-8 h-8 p-2 rounded-full bg-black z-[30]">
          <Image
            src="/image/icon/right-arrow-sm.png"
            alt="arrow"
            width={32}
            height={32}
            className="w-full h-full invert cursor-pointer"
          />
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            prevEl: ".ingredient-prev",
            nextEl: ".ingredient-next",
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {ingredients.map((ingredient, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="bg-black text-white text-left">
                <Image
                  src={ingredient.image}
                  alt="KASOMO"
                  width={500}
                  height={500}
                  className="w-full aspect-[2/1.2] object-cover object-center"
                />
                <div className="p-8 text-left">
                  <h3 className="font-bold text-2xl">{ingredient.title}</h3>
                  <p className="mt-3 text-lg">{ingredient.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
