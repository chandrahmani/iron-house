import Link from "next/link";
import { ReactNode } from "react";
import Navbar from "./core/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div id="ctcab">
      <Navbar />

      <main className="content-panel">{children}</main>

      <footer className="bg-sky-100 dark:bg-gray-900">
        <div className="mx-auto  max-w-screen-xl  lg:py-2">
          <div className="md:flex md:justify-between">
            <div className="mr-2 self-center text-2xl font-semibold whitespace-nowrap text-gray-800 text-center">
              IRON HOUSE
            </div>

            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-around">
              <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 ml-3">
                <li className="mb-4 mr-2 p-5">
                  <Link
                    href="../.././privacyPolicy"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mr-2 mb-4">
                  <Link
                    href="../.././termsConditions"
                    className="hover:underline"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mr-2 mb-4 p-5">
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Facbook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-2">
          <span className="text-sm text-gray-200 sm:text-center dark:text-gray-400 sm\:text-center ">
            <div className=" text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
              © 2023
              <Link href="https://www.webtechpie.com"> webtechpie.com</Link>.
              All Rights Reserved.
            </div>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
