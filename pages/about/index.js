import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { CookieBanner } from "../../components/CookieBanner";
import { ExampleFiller } from "../../components/examples/ExampleFiller";
import { ScrollToTop } from "../../components/ScrollToTop";

// This is used so that the NavBar can
// style a specific link to let the
// user know which page they're on.

// We're going to pass this into the Navbar
const currentPage = "about";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>My Website | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CookieBanner />
      <Navbar currentPage={currentPage} />
      <ExampleFiller />
      <ScrollToTop />
      <Footer />
    </>
  );
}
