import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { CookieBanner } from "../../components/CookieBanner";

// This is used so that the NavBar can
// style a specific link to let the
// user know which page they're on.

// We're going to pass this into the Navbar
const currentPage = "free-trial";

export default function FreeTrialPage() {
  return (
    <>
      <Head>
        <title>My Website | Free Trial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CookieBanner />
      <Navbar currentPage={currentPage} />
      <Footer />
    </>
  );
}
