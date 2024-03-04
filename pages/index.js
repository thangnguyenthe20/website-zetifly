/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";

const users = [
  {
    name: "David Dunham",
    comment: "The team was very friendly and helpful, and they went above and beyond to make sure I was satisfied.",
    image: "/image/users/user-1.jpg",
    rating: 5,
  },
  {
    name: "Michael Malone",
    comment:
      "I had an amazing experience with this company! The marketing service was outstanding, and the results exceeded my expectations.",
    image: "/image/users/user-2.jpg",
    rating: 5,
  },
  {
    name: "Christine Weithoner",
    comment:
      "After trying several other companies, I finally found the perfect fit with this one. The Glamquester is everything I was looking for, and the marketing service is top-notch.",
    image: "/image/users/user-3.jpg",
    rating: 5,
  },
  {
    name: "Kathleen Macaulay",
    comment:
      "We are so pleased with the professionalism and talent that has been provided! They are easy to work with and knew what our goal was from the beginning. They did a fabulous job with the final outcome.",
    image: "/image/users/user-4.jpg",
    rating: 5,
  },
  {
    name: "Suzanne Richards",
    comment:
      "Thank you to the team for a great revamped website! The team effort is amazing, and the end result is fabulous. I am so pleased with my modernized website and the resolution of my e-mail problems.",
    image: "/image/users/user-5.jpg",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen">
        <Image
          src="/image/banners/banner-0.jpg"
          alt="glamquester"
          fill
          className="object-cover object-top w-full h-full -z-10 brightness-[0.9]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">glamquester</h3>
            <p className="leading-6 text-center text-white">
              With unshakeable trust, we focus on the core problem your business solves and put out lots of content and
              enthusiasm and ideas about how to solve that problem.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/image/banners/banner-1.jpg"
            alt="glamquester"
            fill
            className="object-cover object-top w-full h-full -z-10 brightness-[0.9]"
          />
        </div>
        <div className="absolute inset-0 flex">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-center w-full h-full px-8 pt-16 lg:px-6 sm:p-16">
              <div className="w-full sm:w-[600px] flex justify-center items-center lg:text-start text-center flex-col gap-9">
                <p className="px-8 text-2xl text-center text-white sm:px-0">
                  We understand that every business is unique, so our strategies are tailored to meet your specific
                  needs. Whether you're a start-up or an established brand, we're here to help you grow.
                </p>
                <Link href="/our-services" className="block text-white tracking-[1px] w-fit pb-2">
                  <button className="btn btn-primary w-fit">OUR SERVICES</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/image/banners/banner-2.jpg"
            alt="glamquester"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.9]"
          />
        </div>
        <div className="absolute inset-0 flex">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-center w-full h-full px-8 pt-16 lg:px-6 sm:p-16">
              <div className="w-full sm:w-[600px] flex justify-center items-center lg:text-start text-center flex-col gap-9">
                <p className="px-8 text-2xl text-center text-white sm:px-0">
                  Our marketing strategies are proven to drive growth and increase ROI. Let us catapult your brand
                  visibility and make your business the talk of the town.
                </p>
                <Link href="/about" className="block text-white tracking-[1px] w-fit pb-2">
                  <button className="btn btn-primary w-fit">ABOUT US</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[21px] lg:py-16 lg:px-14 py-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3">
          {users.map((user, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 border border-solid border-[#5d92ff] rounded-lg gap-2.5"
            >
              <img src={user.image} alt="" className="w-[130px] h-[130px] rounded-[50%] object-cover object-top" />
              <p className="text-lg">{user.name}</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={classnames("w-5 h-5", index + 1 <= user.rating ? "text-yellow-300" : "text-gray-300")}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>
              <p className="leading-6 text-center break-words">{user.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
