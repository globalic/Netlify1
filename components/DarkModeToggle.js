import { useTheme } from "next-themes";

export const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
  const lightClass =
    "w-12 h-12 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white";
  const darkClass =
    "w-12 h-12 relative rounded-full transition duration-500 transform bg-gray-700 translate-x-full p-1 text-white";

  const currentClass = theme === "dark" ? darkClass : lightClass;
  const currentIcon = theme === "dark" ? darkIcon : lightIcon;

  return (
    <button
      aria-label="dark mode toggle"
      className="w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <div aria-label="dark mode toggle" className={currentClass}>
        {currentIcon}
      </div>
    </button>
  );
};