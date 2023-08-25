import { useRouter } from "next/router";
import { Button } from "react-carbonui";

const services = () => {
  const { push } = useRouter();
  return (
    <>
      <section className="bg-center bg-no-repeat bg-[url('https://static.wixstatic.com/media/2820f4_286a9e8a7c344ab1b5dcc5d4d28a394a~mv2.jpg/v1/fill/w_1253,h_407,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2820f4_286a9e8a7c344ab1b5dcc5d4d28a394a~mv2.jpg')]  ">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"></h1>

          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 lg:text-left"></p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Button
              variant="secondary"
              size="large"
              className="btn secondary"
              onClick={() => {
                push("/");
              }}
            >
              Join Now
            </Button>
          </div>
        </div>
      </section>

      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl ">
                  Training Floor
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                  sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                  id at vitae feugiat egestas.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[10rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[35rem]"
              src="/images/Training.jpg"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"></div>
        </div>
      </div>
    </>
  );
};
export default services;
