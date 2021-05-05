export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 px-4 lg:px-20 py-12">
      <div className="max-w-screen-full mx-auto mb-6 lg:mb-8 flex justify-between">
        <img className="h-6" src="/logo.svg" alt="placeholder for logo" />
      </div>
      <div className="max-w-screen-full mx-auto border-t-2 border-gray-700 pt-8 space-y-10">
        <div className="md:grid md:grid-cols-5 space-y-2 md:space-y-0">
          <div className="md:col-span-1 py-1 md:pr-4 md:border-r-2 md:border-gray-700">
            <h5 className="text-xl font-semibold text-white leading-none">
              Company
            </h5>
          </div>
          <nav className="col-span-4 col-start-2 md:pl-12 lg:pl-24">
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-12">
              <li>
                <a
                  href="#"
                  className="font-normal text-base hover:text-gray-100"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal text-base hover:text-gray-100"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal text-base hover:text-gray-100"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal text-base hover:text-gray-100"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:grid md:grid-cols-5 space-y-2 md:space-y-0">
          <div className="md:col-span-1 py-1 md:pr-4 md:border-r-2 md:border-gray-700">
            <h5 className="text-xl font-semibold text-white leading-none">
              About
            </h5>
          </div>
          <nav className="col-span-4 col-start-2 md:pl-12 lg:pl-24">
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-12">
              <li>
                <a
                  href="#"
                  className="font-normal text-base hover:text-gray-100"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal text-base hover:text-gray-100"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal text-base hover:text-gray-100"
                >
                  Terms And Conditions
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:grid md:grid-cols-5 space-y-2 md:space-y-0">
          <div className="md:col-span-1 py-1 md:pr-4 md:border-r-2 md:border-gray-700">
            <h5 className="text-xl font-semibold text-white leading-none">
              Follow us
            </h5>
          </div>
          <nav className="col-span-4 col-start-2 md:pl-12 lg:pl-24">
            <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-12">
              <li>
                <a
                  href="#"
                  className="flex space-x-2 font-normal text-base hover:text-gray-100"
                >
                  <svg
                    className="h-6 w-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                  <span>Linked In</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex space-x-2 font-normal text-base hover:text-gray-100"
                >
                  <svg
                    className="h-6 w-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex space-x-2 font-normal text-base hover:text-gray-100"
                >
                  <svg
                    className="h-6 w-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="max-w-screen-full mx-auto  space-y-4 mt-8 lg:mt-12 border-t-2 border-gray-700 pt-8 ">
        <p className="text-sm text-center md:text-left">
          &copy; 2021 Temp Brand
        </p>
      </div>
    </footer>
  );
};
