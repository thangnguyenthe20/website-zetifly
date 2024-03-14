import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src="/image/banners/banner-3.jpg"
          alt="sakutara"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[550px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">sakutara</h3>
            <p className="leading-6 text-center text-white">
              SAKUTARA is proud to bring the highest quality and most feasible Online Marketing solutions to customers.
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1200px] 2xl:max-w-[1600px] pt-0 flex justify-between md:flex-row flex-col gap-8 2xl:gap-16">
        <ProductAds
          image="/image/services/service-6.jpg"
          content="We are committed to providing the most feasible and quality solutions."
        />
        <ProductAds
          image="/image/services/service-7.jpg"
          content="Sakutara is always committed to helping customers grow at least 20% if they apply the plan we provide."
        />
      </div>
    </>
  );
};

export default Services;
