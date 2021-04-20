import { useContext, useRef, useState } from "react";
import { CookieContext } from "../context/CookieContext";
import styles from "../styles/cookiebanner.module.css";

export const CookieBanner = () => {
  // Using a ref to the modal here because
  // you have to use [yourmodal].open() in
  // order to get the backdrop to display
  // correctly
  const modalRef = useRef();

  const { cookiesOpen, toggleCookiesOpen } = useContext(CookieContext);

  // Opening and closing the initial cookies display

  const [settingsOpen, setSettingsOpen] = useState(false);

  const acceptCookiesHandler = () => {
    // place code accept cookies
    toggleCookiesOpen();
  };
  const saveSettingsHandler = () => {
    // place code to save settings
    modalRef.current.close();
    setSettingsOpen(false);
  };

  const openSettingsHandler = () => {
    modalRef.current.showModal();
    setSettingsOpen(true);
  };

  const closeSettingsHandler = () => {
    modalRef.current.close();
    setSettingsOpen(false);
  };

  if (!cookiesOpen) return null;
  return (
    <div className="fixed z-50 bottom-0 left-0 w-full bg-gray-100 bg-opacity-0 flex items-center pt-20 justify-center">
      <section className="w-full p-5 lg:px-24 absolute top-0 bg-gray-600">
        <div className="md:flex items-center -mx-3">
          <div className="md:flex-1 px-3 mb-5 md:mb-0">
            <p className="text-center md:text-left text-white text-xs leading-tight md:pr-12">
              We and selected partners and related companies, use cookies and
              similar technologies as specified in our Cookies Policy. You agree
              to consent to the use of these technologies by clicking Accept, or
              by continuing to browse this website. You can learn more about how
              we use cookies and set cookie preferences in Settings.
            </p>
          </div>
          <div className="px-3 text-center">
            <button
              id="btn"
              className="py-2 px-8 bg-gray-800 hover:bg-gray-900 text-white rounded font-bold text-sm shadow-xl mr-3"
              onClick={openSettingsHandler}
            >
              Cookie settings
            </button>
            <button
              id="btn"
              className="py-2 px-8 bg-green-400 hover:bg-green-500 text-white rounded font-bold text-sm shadow-xl"
              onClick={acceptCookiesHandler}
            >
              Accept cookies
            </button>
          </div>
        </div>
      </section>
      <dialog
        ref={modalRef}
        open={settingsOpen}
        id={styles.cookiesModal}
        className="h-auto w-11/12 md:w-1/2 bg-white dark:bg-gray-500 overflow-hidden rounded-md p-0"
      >
        <div className="flex flex-col dark:bg-gray-700 w-full h-auto">
          <div className="flex w-full h-auto items-center px-5 py-3">
            <div className="w-10/12 h-auto text-lg font-bold">
              Cookie settings
            </div>
            <div className="flex w-2/12 h-auto justify-end">
              <button
                onClick={closeSettingsHandler}
                className="cursor-pointer focus:outline-none text-gray-400 hover:text-gray-800"
              >
                <i className="mdi mdi-close-circle-outline text-2xl"></i>
              </button>
            </div>
          </div>
          <div className="flex w-full items-center bg-gray-100 dark:bg-gray-900 border-b border-gray-200 px-5 py-3 text-sm">
            <div className="flex-1">
              <p>Strictly necessary cookies</p>
            </div>
            <div className="w-10 text-right">
              <i className="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
            </div>
          </div>
          <div className="flex w-full items-center bg-gray-100 dark:bg-gray-900 border-b border-gray-200 px-5 py-3 text-sm">
            <div className="flex-1">
              <p>Cookies that remember your settings</p>
            </div>
            <div className="w-10 text-right">
              <i className="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
            </div>
          </div>
          <div className="flex w-full items-center bg-gray-100 dark:bg-gray-900 border-b border-gray-200 px-5 py-3 text-sm">
            <div className="flex-1">
              <p>Cookies that measure website use</p>
            </div>
            <div className="w-10 text-right">
              <i className="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
            </div>
          </div>
          <div className="flex w-full items-center bg-gray-100 dark:bg-gray-900 border-b border-gray-200 px-5 py-3 text-sm">
            <div className="flex-1">
              <p>Cookies that help with our communications and marketing</p>
            </div>
            <div className="w-10 text-right">
              <i className="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
            </div>
          </div>
          <div className="flex w-full px-5 py-3 justify-end">
            <button
              onClick={saveSettingsHandler}
              className="py-2 px-8 bg-gray-800 hover:bg-gray-900 text-white rounded font-bold text-sm shadow-xl"
            >
              Save settings
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};
