import SubHeader from "@/components/subHeader/SubHeader";
import axios from "axios";
import Link from "next/link";
import { Person } from "phosphor-react";
import { useEffect, useState } from "react";

type CabType = {
  id: string;
  name: string;
  pageName: string;
  avatar: string;
  price: number;
  package: string;
  color: string;
  set: string;
  chair: string;
};

const Kashmircabs = () => {
  const [cabs, setCabs] = useState<CabType[]>([]);

  const fetchCabs = async () => {
    try {
      const { data } = await axios.get("/api/cabs");
      console.log({ data });
      setCabs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCabs();
  }, []);

  return (
    <>
      <SubHeader title="WELCOME TO OUR SITE" />

      <div className="relative">
        <div className="mx-auto  max-w-7xl h-full px-5 py-16 sm:px-6 sm:py-24 lg:max-w-8xl lg:px-3">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            <section className="bg-white dark:bg-gray-900">
              <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-6">
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-5 mb-8">
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
                    We have our own Fleet of Sedan, Innova, Innova Crysta, Tempo
                    Traveller.
                  </h1>
                  <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                    WE ARE PROVIDING CAB AND TAXI SERVICES ROUND THE CLOCK (24 X
                    7) SERVICES TO OUR GUESTS IN AREAS OF DELHI, AMRITSAR,
                    PUNJAB AND HIMACHAL, UTTARAKHAND, JAMMU AND KASHMIR, KATRA,
                    CHANDIGARH ETC. WE ARE SPECIALIZED IN GIVING PERSONALIZED
                    AND PROFESSIONAL SERVICES SINCE 2014 WITH EXPERIENCED,
                    DEDICATED STAFF & WELL MANNERED, WELL DRESSED AND COURTEOUS
                    DRIVERS. "INNOVATIVE SERVICES ALWAYS" IS OUR MOTTO.
                  </p>
                </div>
              </div>
            </section>
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-2">
            {cabs.map((cab) => (
              <div
                key={cab.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-100">
                  <img
                    src={cab.avatar}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="p-5">
                  <div className="">
                    <p className="mb-3 font-normal text-gray-800 dark:text-gray-400">
                      {cab.name}
                    </p>
                    <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">
                      Per Day {cab.price}
                    </p>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                      {cab.package}
                    </p>

                    <p className="mb-3 font-normal text-gray-400 dark:text-gray-400 flex ">
                      <Person size={20} />
                      {cab.chair}
                    </p>
                  </div>

                  <Link
                    href={`/cabs/${cab.pageName}`}
                    className="inline-flex btn primary items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Explore
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Kashmircabs;
