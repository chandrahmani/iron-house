import { Button } from "react-carbonui";
import { useRouter } from "next/navigation";

export default function LandingBanner() {
  const { push } = useRouter();
  return (
    <div className="">
      <div className="bg-white">
        <div className="mx-auto max-w-8xl py-24 sm:px-5 sm:py-32 lg:px-8">
          <div className="relative overflow-hidden flex items-center  px-6 pt-13  sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-16 lg:pt-0">
            <div className="mx-auto max-w-md flex flex-col align-middle text-center lg:mx-0 lg:flex-auto lg:py-10 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
                Taxi services in Kashmir
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                We are providing Cabs, Cars for Business, leisure, exhibitions,
                events, conferences and personal travel. We have one of the most
                impressive networks across India in providing all Passenger,
                Luxurious, and Premium Vehicles on hire. Our fleet starts from
                passenger level Cars, Executive Level Cars, Luxury Cars, Motor
                Home, Mini Coaches and Volvo Coaches.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Button
                  size="large"
                  className="btn secondary"
                  variant="secondary"
                  onClick={() => {
                    push("/about");
                  }}
                >
                  Explore about us
                </Button>
                <Button
                  size="large"
                  className="btn primary"
                  variant="secondary"
                  onClick={() => {
                    push("/cabs");
                  }}
                >
                  Book a Taxi
                </Button>
              </div>
            </div>
            <div className="relative lg:mt-8">
              <img
                className="rounded-md bg-white/5 ring-1 ring-white/10"
                src="/images/car_banner_5.jpg"
                alt="App screenshot"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
