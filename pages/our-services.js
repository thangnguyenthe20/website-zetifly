import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src="/image/banners/banner-3.jpg"
          alt="freshvibs"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[550px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">freshvibs</h3>
            <p className="leading-6 text-center text-white">
              We are your gateway to cutting-edge marketing strategies, dedicated to propelling your business to new
              heights of success.
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1200px] 2xl:max-w-[1600px] pt-0 flex justify-between md:flex-row flex-col gap-8 2xl:gap-16">
        <ProductAds
          image="/image/services/service-6.jpg"
          content="We have collaborated with over 500 businesses, ranging from startups to multinational corporations, to deliver tailored marketing solutions."
        />
        <ProductAds
          image="/image/services/service-7.jpg"
          content="Our extensive portfolio includes serving over 10,000 individual clients across various industries, ensuring a diverse range of expertise and experience to meet their marketing needs."
        />
      </div>
    </>
  );
};

export default Services;
