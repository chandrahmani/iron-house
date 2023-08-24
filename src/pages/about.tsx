import SubHeader from "@/components/subHeader/SubHeader";

import { useRouter } from "next/router";
import { Button } from "react-carbonui";

const aboutUs = () => {
  const { push } = useRouter();

  const features = [
    {
      name: "Services In",
      description:
        " Jammu And Kashmir | Ladakh | Delhi |  Himachal Pradesh | Uttarakhand | Rajasthan | Punjab | Chandigarh | Amritsar Etc ",
    },
    {
      name: "Culture of different places",
      description:
        "Without bothering with journey hassles. We arrange for company Tours, Excursions, Family & Friend trips and local, Airport Transfers, Outstation trips and also fixed contracts on Monthly/Yearly basis at reasonable rates.",
    },
    {
      name: "Deal In",
      description:
        "Car Rental | Hotel Reservation | Kashmiri Packages | Golden Triangle Package ",
    },
    {
      name: "Advanced security",
      description: "Best package for shikara ride Kashmir Starting ",
    },
  ];
  return (
    <>
      <SubHeader title="About Us" />
      <div className="">
        <section className="bg-center bg-no-repeat bg-[url('/images/car_banner_5.jpg')] bg-gray-700 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              About Us
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 lg:text-left">
              Track work across the enterprise through an open, collaborative
              platform. Link issues across Jira and ingest data from other
              software development tools, so your IT support and operations
              teams have richer contextual information to rapidly respond to
              requests, incidents, and changes.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Button
                variant="secondary"
                size="large"
                className="btn secondary"
                onClick={() => {
                  push("/");
                }}
              >
                Home
              </Button>
            </div>
          </div>
        </section>
      </div>
      <div className="p-6 mt-10 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/guest-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://4.imimg.com/data4/YE/HA/MY-14311280/innova-ac-500x500.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/car_banner_5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/car_banner_6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://www.jcrcab.com/wp-content/uploads/2020/02/taxi-in-jodhpu-family.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://promos.makemytrip.com/appfest/xxhdpi/ChicletBG_OSCabOffer_28Jan_BG.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://5.imimg.com/data5/SELLER/Default/2022/5/EW/AH/EB/103043523/innova-car-rental-in-kashmir.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/car_banner_5.jpg"
                alt=""
              />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" alt="" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://delhitempotravels.com/dist/images/innova-interior-2-slide.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/himalayan/colours/new-colors/studio-shots/granite-black/side-view.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://imgcdn.zigwheels.my/large/gallery/exterior/89/1409/royal-enfield-himalayan-marketing-image-973980.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="bg-white py-24 sm:py-32  mt-5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-1xl lg:text-center">
              <p className="mt-2 text-2xl font-bold tracking-tight text-gray-700 sm:text-4xl lg:text-left">
                Jammu And Kashmir Ladakh Delhi Himachal Pradesh Uttarakhand
                Rajasthan Punjab Chandigarh Amritsar Etc
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-400 lg:text-left">
                Our Company A Sublime Destination Management Company of
                visionary Mr Mudasir Farooq (Managing Director) With strong
                business acumen extensive experience in the tourism industry
                floated under the name and style of "Hello Travel India" And
                ctcab.in in Srinagar Kashmir & Ladakh emphasizing innovation and
                quality service. Hello Travel India. And ctcab.in is registered
                with "Directorate of Tourism J&K" and ISO : 2014 Certified
                Company. We believe in presenting Kashmir & Ladakh in a way that
                is quite unique, unexplored, and unhindered. We want to show you
                the possibilities that are immense and unending. We provide you
                excellent tour packages as well as competitive rates for
                hospitality services in Jammu, Kashmir and Ladakh."Hello Travel
                India" And ctcab.in is a te…pulvinar et feugiat blandit at. In
                mi viverra elit nunc.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="relative pl-16 bg-primary p-2  rounded-lg"
                  >
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutUs;
