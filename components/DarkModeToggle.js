import { useTheme } from "next-themes";

export const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const darkIcon = (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  const lightIcon = (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  const currentIcon = theme === "dark" ? lightIcon : darkIcon;

  return (
    <p
      className="flex justify-center items-center text-md text-white lg:text-current px-3 w-full h-12 py-2 rounded bg-blue-700 font-bold hover:bg-blue-800 lg:mt-0 lg:bg-transparent lg:hover:bg-transparent cursor-pointer"
      aria-label="dark mode toggle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <div className="w-5 h-5">{currentIcon}</div>
    </p>
  );
};
