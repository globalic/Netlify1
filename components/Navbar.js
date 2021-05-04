import Link from "next/link";

import { useState } from "react";
import { DarkModeToggle } from "../components/DarkModeToggle";

export const Navbar = ({ currentPage }) => {
  const [blogDropdownOpen, setblogDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const onHome = currentPage === "home" ? true : false;
  const onAbout = currentPage === "about" ? true : false;
  const onContact = currentPage === "contact" ? true : false;
  const onBlog = currentPage === "blog" ? true : false;
  const onFAQ = currentPage === "faq" ? true : false;
  const onCookie = currentPage === "cookie" ? true : false;
  const onFreeTrial = currentPage === "free-trial" ? true : false;
  const onSignIn = currentPage === "sign-in" ? true : false;
  const onTerms = currentPage === "terms" ? true : false;

  return (
    <nav className="sticky inset-0 z-20 flex items-center justify-between flex-wrap bg-white dark:bg-gray-900 py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 dark:text-gray-100 mr-16 ">
          <img src="/logo.svg" height={30} width={200} />
        </div>
        <div
          onClick={() => setMobileNavOpen((prev) => !prev)}
          className="block lg:hidden "
        >
          <button
            id="nav"
            className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="https://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          mobileNavOpen ? "" : "hidden "
        }menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8`}
      >
        <div className="text-md font-bold text-blue-700 dark:text-blue-300 lg:flex-grow">
          <Link href="/">
            <p
              className={`block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2 cursor-pointer`}
            >
              Home
            </p>
          </Link>
          <Link href="/about">
            <p
              className={`block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2 cursor-pointer`}
            >
              About
            </p>
          </Link>
          <Link href="/contact">
            <p
              className={`block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2 cursor-pointer`}
            >
              <span>Contact</span>
            </p>
          </Link>
          <div className="relative inline">
            <a href="#" href="#responsive-header">
              <p
                onClick={() => setblogDropdownOpen((prev) => !prev)}
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2 cursor-pointer"
              >
                <span>Blog</span>
                <span className="ml-2 font-size inline-block">
                  {" "}
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </p>
            </a>
            <div
              className={`${
                blogDropdownOpen ? "" : "hidden "
              }bg-white shadow-md rounded border border-gray-300 text-sm absolute top-auto left-0 min-w-full w-56 z-30 mt-1`}
            >
              <span className="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -mt-1 ml-6"></span>
              <div className="bg-white rounded w-full relative z-10 py-1">
                <ul className="list-reset">
                  <li className="relative">
                    <Link
                      href="/blogs/blog-1"
                      className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                    >
                      <div className="px-4 py-2 inline flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                        <span className="flex-1">Blog 1</span>
                      </div>
                    </Link>
                  </li>
                  <li className="relative">
                    <Link href="/blogs/blog-2">
                      <div className="px-4 py-2 inline flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                        <span className="flex-1">Blog 2</span>
                      </div>
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      href="/blogs/blog-3"
                      className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                    >
                      <div className="px-4 py-2 inline flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                        <span className="flex-1">Blog 3</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-4 lg:mt-0 text-gray-600 dark:text-gray-300 block">
          <input
            className="border-2 mr-10 border-gray-300 dark:bg-gray-90 bg-white h-10 w-full lg:w-auto pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-3 mr-3 lg:mr-12"
          >
            <svg
              className="text-gray-600 dark:text-gray-300 h-4 w-4 fill-current"
              xmlns="https://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        <div className="mt-4 lg:mt-0">
          <DarkModeToggle />
        </div>
        <div className="flex ">
          <Link href="/sign-in">
            <p className="block text-md px-4 py-2 rounded text-blue-700 dark:text-blue-400 ml-2 font-bold hover:text-white dark:hover:text-white mt-4 hover:bg-blue-700 lg:mt-0 cursor-pointer">
              Sign in
            </p>
          </Link>

          <Link href="/free-trial">
            <p className=" block text-md px-4  ml-2 py-2 rounded text-white dark:text-white bg-blue-700 font-bold mt-4 hover:bg-blue-800 lg:mt-0 cursor-pointer">
              Start Free Trial
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};
