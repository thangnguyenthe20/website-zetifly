import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src="/image/banners/banner-3.jpg"
          alt="ninomar"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.8]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[550px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">ninomar</h3>
            <p className="leading-6 text-center text-white">
              Embedded within every product creator is the aspiration to simplify or ease someone&apos;s life. By
              attentively listening to customers and providing what they require, they respond with affection and
              loyalty to your brand.
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1200px] 2xl:max-w-[1600px] pt-0 flex justify-between md:flex-row flex-col gap-8 2xl:gap-16">
        <ProductAds
          image="/image/services/service-6.jpg"
          content="Over the years, we've offered marketing support to over 20,000 businesses across diverse industries, resulting in a substantial increase in their revenue."
        />
        <ProductAds
          image="/image/services/service-7.jpg"
          content="In 2024, we welcomed 3,000 new customers and assisted them in surpassing their profit targets by expanding into more diverse product areas."
        />
      </div>
    </>
  );
};

export default Services;
