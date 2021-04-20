import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 40) setVisible(true);
      else setVisible(false);
    });
    return () => {
      removeEventListener("scroll", window);
    };
  }, []);
  if (!visible) return null;

  return (
    <a
      href="#"
      className="flex justify-center items-center text-white cursor-pointer fixed right-10 bottom-10 p-3 rounded-full bg-blue-700"
    >
      <svg
        xmlns="https://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </a>
  );
};
