import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { CookieBanner } from "../../components/CookieBanner";

export default function FreeTrialPage() {
  return (
    <>
      <Head>
        <title>My Website | Free Trial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CookieBanner />
      <Navbar />
      <Footer />
    </>
  );
}
