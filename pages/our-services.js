import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src="/image/banners/banner-3.jpg"
          alt="glamquester"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[550px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">glamquester</h3>
            <p className="leading-6 text-center text-white">
              We don't just deliver results, we exceed expectations, driving your business to unparalleled heights.
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1200px] 2xl:max-w-[1600px] pt-0 flex justify-between md:flex-row flex-col gap-8 2xl:gap-16">
        <ProductAds
          image="/image/services/service-6.jpg"
          content="From a small beginning, we've grown into a formidable marketing company with an impressive track record."
        />
        <ProductAds
          image="/image/services/service-7.jpg"
          content="In 2023, our services successfully reached more than 11,000 potential customers."
        />
      </div>
    </>
  );
};

export default Services;
