import Head from "next/head";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";

// Example Components
import { ExampleCTAHeader } from "../components/examples/ExampleCTAHeader";
import { ExampleFeaturedSection } from "../components/examples/ExampleFeaturedSection";
import { ExampleFreeTrial } from "../components/examples/ExampleFreeTrial";
import { CookieBanner } from "../components/CookieBanner";

export default function Home() {
  return (
    <div id="top">
      <Head>
        <title>My Website | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CookieBanner />
      <Navbar />

      {/* Examples */}
      <ExampleCTAHeader />
      <ExampleFeaturedSection />
      <ExampleFeaturedSection />
      <ExampleFreeTrial />

      <ScrollToTop />
      <Footer />
    </div>
  );
}
