import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

// This is used so that the NavBar can
// style a specific link to let the
// user know which page they're on.

// We're going to pass this into the Navbar
const currentPage = "cookie";

export default function CookiePolicyPage() {
  return (
    <>
      <Head>
        <title>My Website | Cookies </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentPage={currentPage} />
      <Footer />
    </>
  );
}
