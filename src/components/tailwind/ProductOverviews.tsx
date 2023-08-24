import { image } from "@/utils/config";
import Link from "next/link";

const reviews = { href: "#", average: 4, totalCount: 117 };

export default function ProductOverviews() {
  return (
    <div className="">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-1 px-2 mx-auto max-w-screen-xxl lg:py-16">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg md:p-2 mb-12">
            <a
              href="#"
              className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
            >
              <svg
                className="w-2.5 h-2.5 mr-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 14"
              >
                <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
              </svg>
              CTCab
            </a>
            <h1 className="text-gray-700 dark:text-white text-2xl md:text-3xl font-extrabold mb-2">
              For Your Health
            </h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
              You've got a (WORKOUT) friend in me the social
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg ">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden ">
                <img
                  src="/image/banner-1"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className=" p-6 md:p-8">
                <p className="text-lg font-normal text-gray-700 dark:text-gray-600 mb-4">
                  Static websites are now used to bootstrap lots of websites and
                  are becoming the basis for a variety of tools that even
                  influence both web designers and developers.
                </p>
                <Link
                  href="./cabs"
                  className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                >
                  Services
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="bg-primary dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg ">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden ">
                <img
                  src="#"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className=" p-6 md:p-8">
                <p className="text-lg font-normal text-gray-700 dark:text-gray-600 ">
                  Static websites are now used to bootstrap lots of websites and
                  are becoming the basis for a variety of tools that even
                  influence both web designers and developers.
                </p>
                <Link
                  href="./about"
                  className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                >
                  About
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-40">
        <div className="mx-auto my-4  sm:px-6 lg:grid lg:max-w-9xl lg:grid-cols-3 lg:gap-x-5 lg:px-2">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src="#"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src="#"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src="#"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src="#"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
