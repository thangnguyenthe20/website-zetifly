import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src="/image/banners/banner-3.jpg"
          alt="corridoy"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.8]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[550px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">corridoy</h3>
            <p className="leading-6 text-center text-white">
              Count on our unwavering dedication to provide precisely designed marketing solutions that align with your
              company's goals.
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1200px] 2xl:max-w-[1600px] pt-0 flex justify-between md:flex-row flex-col gap-8 2xl:gap-16">
        <ProductAds
          image="/image/services/service-6.jpg"
          content="Our team of qualified specialists is committed to conquering problems, ensuring your success in the fast-paced company."
        />
        <ProductAds
          image="/image/services/service-7.jpg"
          content="From 2022 to 2023, our services successfully reached more than 5,000 potential customers."
        />
      </div>
    </>
  );
};

export default Services;
