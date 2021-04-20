import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { CookieHandler } from "../context/CookieContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <CookieHandler>
        <Component {...pageProps} />
      </CookieHandler>
    </ThemeProvider>
  );
}

export default MyApp;
