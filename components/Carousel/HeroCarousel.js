import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";

export default function HeroCarousel() {
  return (
    <div className="hero-carousel h-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        <SwiperSlide className="relative">
          <Image
            src="/image/carousel/1.jpg"
            alt="KASOMO"
            width={1440}
            height={1440}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0">
            <div className="w-full h-full flex-center lg:gap-16 gap-8 flex-col text-white text-2xl font-normal uppercase tracking-[5px]">
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  For
                </span>{" "}
                Fabienne
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  48
                </span>{" "}
                Gentle cleanse
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  33
                </span>{" "}
                Effortless waves
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  FRG
                </span>{" "}
                Fragrance - free
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  GEO
                </span>{" "}
                65201
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/carousel/2.jpg"
            alt="KASOMO"
            width={1440}
            height={1440}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0">
            <div className="w-full h-full flex-center lg:gap-16 gap-8 flex-col text-white text-2xl font-normal uppercase tracking-[5px]">
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  For
                </span>{" "}
                Huey
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  20
                </span>{" "}
                Curl define
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  PREF
                </span>{" "}
                VEGAN
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  FRG
                </span>{" "}
                SIGNATURE
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  GEO
                </span>{" "}
                11249
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/carousel/3.jpg"
            alt="KASOMO"
            width={1440}
            height={1440}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0">
            <div className="w-full h-full flex-center lg:gap-16 gap-8 flex-col text-white text-2xl font-normal uppercase tracking-[5px]">
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  For
                </span>{" "}
                MACARA
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  20
                </span>{" "}
                BODY & LIFT
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  58
                </span>{" "}
                PURIFY & DETOX
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  FRG
                </span>{" "}
                CORSICA
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  GEO
                </span>{" "}
                01945
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/carousel/4.jpg"
            alt="KASOMO"
            width={1440}
            height={1440}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0">
            <div className="w-full h-full flex-center lg:gap-16 gap-8 flex-col text-white text-2xl font-normal uppercase tracking-[5px]">
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  For
                </span>{" "}
                ALEXIS
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  34
                </span>{" "}
                CURLS FOR DAYS
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  32
                </span>{" "}
                CLARIFY & CLEANSE
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  FRG
                </span>{" "}
                ISPAHAN
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  GEO
                </span>{" "}
                10003
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/carousel/5.jpg"
            alt="KASOMO"
            width={1440}
            height={1440}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0">
            <div className="w-full h-full flex-center lg:gap-16 gap-8 flex-col text-white text-2xl font-normal uppercase tracking-[5px]">
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  For
                </span>{" "}
                KAY
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  77
                </span>{" "}
                CURL SHINE & DEFINE
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  61
                </span>{" "}
                HAPPY HAIR
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  FRG
                </span>{" "}
                BOTANICA
              </p>
              <p>
                <span className="text-xs text-[#ffa380] uppercase font-normal tracking-widest">
                  GEO
                </span>{" "}
                11103
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
