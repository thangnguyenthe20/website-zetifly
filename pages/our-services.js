import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src="/image/banners/banner-3.png"
          alt="tunlife"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[550px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">tunlife</h3>
            <p className="leading-6 text-center text-white">
              We provide customized social media marketing solutions designed specifically for your requirements,
              encompassing Video Marketing, Mobile Marketing and Content Marketing.
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1200px] 2xl:max-w-[1600px] pt-0 flex justify-between md:flex-row flex-col gap-8 2xl:gap-16">
        <ProductAds
          image="/image/services/service-4.png"
          content="Throughout recent years, we've aided over 23,000 businesses across various industries in significantly boosting their revenue."
        />
        <ProductAds
          image="/image/services/service-5.png"
          content="In 2023, we achieved a milestone by acquiring an additional 6.000 new clients and assisting them in attaining"
        />
      </div>
    </>
  );
};

export default Services;
