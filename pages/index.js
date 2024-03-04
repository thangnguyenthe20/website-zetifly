/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";

const users = [
  {
    name: "Emily Jones",
    comment:
      "I appreciate the marketing team's honesty and transparency. They provide constructive feedback that helps improve our strategies and overall performance.",
    image: "/image/users/user-1.png",
    rating: 5,
  },
  {
    name: "Ryan Smith",
    comment:
      "The marketing department consistently delivers genuine insights and recommendations. Their feedback is valuable in shaping our approach and connecting with our audience.",
    image: "/image/users/user-2.png",
    rating: 5,
  },
  {
    name: "Amanda Brown",
    comment:
      "The marketing team's authentic feedback has been instrumental in refining our messaging and targeting. Their dedication to understanding our brand and customers is evident in their insightful suggestions.",
    image: "/image/users/user-3.png",
    rating: 5,
  },
  {
    name: "Jason Taylor",
    comment:
      "I've been impressed by the marketing team's genuine interest in our success. Their feedback is always thoughtful and backed by thorough analysis, which has helped us make informed decisions.",
    image: "/image/users/user-4.png",
    rating: 5,
  },
  {
    name: "Megan Wilson",
    comment:
      "Working with the marketing team has been a pleasure. Their honest feedback and collaborative approach have strengthened our campaigns and overall marketing strategy.",
    image: "/image/users/user-5.png",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen">
        <video className="object-cover w-full h-full brightness-90" autoPlay={true} muted loop>
          <source src="/image/banners/banner-0.mp4" type="video/mp4"></source>
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">tunlife</h3>
            <p className="leading-6 text-center text-white">
              Marketing transcends mere product sales; it encompasses the art of meticulously crafting authentic
              customer value rather than solely fixating on inventive methods of distributing goods.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/image/banners/banner-1.jpg"
            alt="tunlife"
            fill
            className="object-cover object-top w-full h-full -z-10 brightness-[0.9]"
          />
        </div>
        <div className="absolute inset-0 flex">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-center w-full h-full px-8 pt-16 lg:px-6 sm:p-16">
              <div className="w-full sm:w-[600px] flex justify-center items-center lg:text-start text-center flex-col gap-9">
                <p className="px-8 text-2xl text-center text-white sm:px-0">
                  Marketing is the finesse of comprehending, communicating, and satisfying consumer needs and desires
                  through strategic planning and imaginative implementation.
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
            src="/image/banners/banner-2.png"
            alt="tunlife"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.9]"
          />
        </div>
        <div className="absolute inset-0 flex">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-center w-full h-full px-8 pt-16 lg:px-6 sm:p-16">
              <div className="w-full sm:w-[600px] flex justify-center items-center lg:text-start text-center flex-col gap-9">
                <p className="px-8 text-2xl text-center text-white sm:px-0">
                  Business success is not the sole result of one individual's efforts, but rather the culmination of
                  effective teamwork and collaboration.
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
