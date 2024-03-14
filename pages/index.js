/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";

const users = [
  {
    name: "James Anderson",
    comment:
      "The team's professionalism and in-depth knowledge of the business have been crucial in developing an effective marketing plan. They have a thorough understanding of our industry.",
    image: "/image/users/user-1.jpg",
    rating: 5,
  },
  {
    name: "Ethan Nguyen",
    comment:
      "I'm impressed with their tailored approach, always adapting to our unique needs. Their flexibility and outstanding customer support make them a standout choice.",
    image: "/image/users/user-2.jpg",
    rating: 5,
  },
  {
    name: "Liam Walker",
    comment:
      "For the past three months, I have collaborated with Zetifly. The revenue grew by 30% in the previous quarter. aspire to become more powerful soon.",
    image: "/image/users/user-3.jpg",
    rating: 5,
  },
  {
    name: "Olivia Taylor",
    comment:
      "It is admirable how open and understandable their reporting and measurement are. Beyond just looking good on paper, their marketing services actually add real value to our company's expansion.",
    image: "/image/users/user-4.jpg",
    rating: 5,
  },
  {
    name: "Ava Mitchell",
    comment:
      "They provide a revolutionary marketing service. Their creative approaches have produced impressive outcomes.",
    image: "/image/users/user-5.jpg",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div>
      <div className="relative w-full min-h-screen">
        <video className="w-full h-full brightness-90" autoPlay={true} muted loop>
          <source src="/image/banners/banner-0.mp4" type="video/mp4"></source>
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">zetifly</h3>
            <p className="leading-6 text-center text-white">
              Marketing is not just about talking about the product, but also about creating an emotional experience for
              the customer
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/image/banners/banner-1.jpg"
            alt="zetifly"
            fill
            className="object-cover object-top w-full h-full -z-10 brightness-[0.9]"
          />
        </div>
        <div className="absolute inset-0 flex">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-center w-full h-full px-8 pt-16 lg:px-6 sm:p-16">
              <div className="w-full sm:w-[600px] flex justify-center items-center lg:text-start text-center flex-col gap-9">
                <p className="px-8 text-2xl text-center text-white sm:px-0">
                  Our Online Marketing solutions will satisfy these requirements: lower expenses, increase revenue, and
                  boost profits.
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
            alt="zetifly"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.9]"
          />
        </div>
        <div className="absolute inset-0 flex">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-center w-full h-full px-8 pt-16 lg:px-6 sm:p-16">
              <div className="w-full sm:w-[600px] flex justify-center items-center lg:text-start text-center flex-col gap-9">
                <p className="px-8 text-2xl text-center text-white sm:px-0">
                  Togetherness is strength; amazing things are possible when people work together as a team.
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
