import SubHeader from "@/components/subHeader/SubHeader";
import Link from "next/link";

const termsConditions = () => {
  return (
    <>
      <SubHeader title="Terms Conditions" />
      <div className="bg-primary dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg ">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden ">
          <img
            src="https://media.freshbooks.com/wp-content/uploads/2022/03/estimate-terms-and-conditions-sample.jpg"
            alt="terms conditions"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className=" p-6 md:p-8">
          <p className="text-lg font-normal text-gray-700 dark:text-gray-600 ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia
          </p>
          <Link
            href="./privacyPolicy"
            className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
          >
            Privacy Policy
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="p-10 m-10 pt-20">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl pb-4">
          Terms Conditions
        </h2>
        <p className="mb-3 text-gray-500 dark:text-gray-400">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="col-span-2">
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
            </p>
          </div>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisc
          </p>
        </div>
        <p className="mb-3 text-gray-500 dark:text-gray-400">
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et
        </p>
      </div>
    </>
  );
};

export default termsConditions;
