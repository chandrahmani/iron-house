import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Button } from "react-carbonui";

import axios from "axios";

import { useRouter } from "next/router";
import SubHeader from "@/components/subHeader/SubHeader";

const innovaCrysta = () => {
  const [cabsList, setCabsList] = useState<any>(null);

  const { query } = useRouter();

  const fetchCabs = async () => {
    try {
      const { data } = await axios.get("/api/cabs");

      const selectedName = data.filter(
        (item: { pageName: any }) => item.pageName === query.pageName
      );

      if (selectedName && selectedName.length > 0) {
        setCabsList(selectedName[0]);
      } else {
        setCabsList(null);
      }

      setCabsList(selectedName[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    query && fetchCabs();
  }, [query]);

  if (!cabsList) {
    return <h1>Cabs Is Not available</h1>;
  }

  return (
    <div className="bg-white">
      <SubHeader title={cabsList?.name} />
      <div className="pt-6">
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <>
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={cabsList?.images[0].src}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg: -cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={cabsList?.images[1].src}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={cabsList?.images[2].src}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={cabsList?.images[3].src}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </>
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <>
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h4 className="text-1xl uppercase font-bold tracking-tight text-gray-900 sm:text-3xl">
                {cabsList?.name}
              </h4>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {cabsList?.price}
              </p>

              <form className="mt-10">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>

                  <RadioGroup className="mt-4">
                    <div className="flex items-center space-x-3"></div>
                  </RadioGroup>
                </div>

                <div className="mt-5">
                  <Button
                    className="btn primary"
                    size="large"
                    onClick={() => {
                      window.open(
                        `https://wa.me/+919906755156?text=Hi I'm%20interested%20in%20${cabsList?.name}.`,
                        "_blank"
                      );
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </form>
            </div>
          </>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-1xl tracking-tight text-gray-400 sm:text-2xl mb-3">
                {cabsList?.detail}
              </h1>
            </div>

            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {cabsList?.description}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li className="text-gray-400 text-gray-600">
                    {cabsList?.highlights}
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{cabsList?.detail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default innovaCrysta;
