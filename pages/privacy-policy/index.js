import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>My Website | Privacy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Footer />
    </>
  );
}
