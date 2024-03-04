import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src="/image/banners/banner-3.jpg"
          alt="verynie"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[550px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">verynie</h3>
            <p className="leading-6 text-center text-white">
              We'll give you the necessary social media marketing solutions: Tiktok Marketing; Facebook Marketing;
              Google Marketing
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1200px] 2xl:max-w-[1600px] pt-0 flex justify-between md:flex-row flex-col gap-8 2xl:gap-16">
        <ProductAds
          image="/image/services/service-4.jpg"
          content="Over the years, we have helped over 19,000 companies across a wide range of industries by offering marketing support to help them greatly boost their revenue."
        />
        <ProductAds
          image="/image/services/service-5.jpg"
          content="In 2023, we helped them surpass their target profitability and brought on 4,000 additional clients."
        />
      </div>
    </>
  );
};

export default Services;
