import { createContext, useState } from "react";

export const CookieContext = createContext(null);

// Using this CookieHandler function so that we can
// change Context's state.
export const CookieHandler = ({ children }) => {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <CookieContext.Provider
      value={{ cookiesOpen: open, toggleCookiesOpen: toggleOpen }}
    >
      {children}
    </CookieContext.Provider>
  );
};
