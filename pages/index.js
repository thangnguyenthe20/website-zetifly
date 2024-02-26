/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";

const users = [
  {
    name: "Alexander Mitchell",
    comment:
      "Exceptional service! The marketing strategies provided by the company significantly boosted our brand visibility and engagement. Their team's expertise and dedication truly make a difference.",
    image: "/image/users/user-1.jpg",
    rating: 5,
  },
  {
    name: "Ava Robinson",
    comment:
      "Impressive results! The marketing service company delivered on their promises, exceeding our expectations. Their innovative approach and attention to detail set them apart in the competitive landscape.",
    image: "/image/users/user-2.jpg",
    rating: 5,
  },
  {
    name: "Noah Harrison",
    comment:
      "Outstanding collaboration! Working with this marketing company has been a pleasure. Their team's responsiveness and ability to adapt strategies to our specific industry needs have been crucial to our success.",
    image: "/image/users/user-3.jpg",
    rating: 5,
  },
  {
    name: "Sophia Brooks",
    comment:
      "Highly recommended! The marketing services provided were not only effective but also well-tailored to our brand. The company's commitment to delivering tangible results is commendable.",
    image: "/image/users/user-4.jpg",
    rating: 5,
  },
  {
    name: "Jackson Turner",
    comment:
      "Strategic excellence! We appreciate the comprehensive marketing strategies implemented by this company. Their proactive approach and in-depth market knowledge have contributed significantly to our business growth.",
    image: "/image/users/user-5.jpg",
    rating: 4,
  },
];

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen">
        <video className="brightness-90" autoPlay={true} muted loop>
          <source src="/video/video-1.mp4" type="video/mp4"></source>
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">ninomar</h3>
            <p className="leading-6 text-center text-white">
              Considering our customers as honored guests at a gathering, we step into the role of hosts. Our daily
              commitment is to improve each vital aspect of the customer experience, ensuring it becomes progressively
              better.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/image/banners/banner-1.jpg"
            alt="ninomar"
            fill
            className="object-cover object-top w-full h-full -z-10 brightness-[0.9]"
          />
        </div>
        <div className="absolute inset-0 flex">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-center w-full h-full px-8 pt-16 lg:px-6 sm:p-16">
              <div className="w-full sm:w-[600px] flex justify-center items-center lg:text-start text-center flex-col gap-9">
                <p className="px-8 text-2xl text-center text-white sm:px-0">
                  Marketing is the skillful practice of comprehending, conveying, and satisfying the needs and desires
                  of consumers.
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
            alt="ninomar"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.9]"
          />
        </div>
        <div className="absolute inset-0 flex">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-center w-full h-full px-8 pt-16 lg:px-6 sm:p-16">
              <div className="w-full sm:w-[600px] flex justify-center items-center lg:text-start text-center flex-col gap-9">
                <p className="px-8 text-2xl text-center text-white sm:px-0">
                  Excellence is demonstrated by doing things correctly even when no one is observing.
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
