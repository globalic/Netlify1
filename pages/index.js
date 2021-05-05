import Head from "next/head";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";

// Example Components
import { ExampleCTAHeader } from "../components/examples/ExampleCTAHeader";
import { ExampleFeaturedSection } from "../components/examples/ExampleFeaturedSection";
import { ExampleGrids } from "../components/examples/ExampleGrids";
import { ExampleFreeTrial } from "../components/examples/ExampleFreeTrial";
import { CookieBanner } from "../components/CookieBanner";

// This is used so that the NavBar can
// style a specific link to let the
// user know which page they're on.

// We're going to pass this into the Navbar
const currentPage = "home";

export default function Home() {
  return (
    <div id="top">
      <Head>
        <title>My Website | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CookieBanner />
      <Navbar currentPage={currentPage} />

      {/* Examples */}
      <ExampleCTAHeader />
      <ExampleFeaturedSection />
      <ExampleFeaturedSection />
      <ExampleGrids />
      <ExampleFreeTrial />

      <ScrollToTop />
      <Footer />
    </div>
  );
}
