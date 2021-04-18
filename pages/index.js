import Head from "next/head";

import { Navbar } from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ScrollToTop />
    </div>
  );
}
