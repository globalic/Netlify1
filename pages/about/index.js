import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { CookieBanner } from "../../components/CookieBanner";
import { ExampleFiller } from "../../components/examples/ExampleFiller";
import { ScrollToTop } from "../../components/ScrollToTop";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>My Website | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CookieBanner />
      <Navbar />
      <ExampleFiller />
      <ScrollToTop />
      <Footer />
    </>
  );
}
