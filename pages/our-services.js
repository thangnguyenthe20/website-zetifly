import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src="/image/banners/banner-3.jpg"
          alt="winxpink"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[550px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">winxpink</h3>
            <p className="leading-6 text-center text-white">
              We are a versatile marketing partner, leading the way in guiding businesses to reach far across Facebook,
              TikTok, YouTube, and brand-shaping strategies. Harness the power of our expertise, and you'll undergo
              innovative creativity, enhanced visibility, and a solid market imprint.
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1200px] 2xl:max-w-[1600px] pt-0 flex justify-between md:flex-row flex-col gap-8 2xl:gap-16">
        <ProductAds
          image="/image/services/service-6.jpg"
          content="Over the past years, we have assisted more than 14,000 businesses from diverse industries in substantially increasing their revenue."
        />
        <ProductAds
          image="/image/services/service-7.jpg"
          content="In 2023, we gained an additional 2,500 new clients and supported them in achieving remarkable results. profitability"
        />
      </div>
    </>
  );
};

export default Services;
