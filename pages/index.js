import Head from "next/head";

import { Navbar } from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";
import { Megamenu } from "../components/Megamenu";
import { Searchbar } from "../components/Searchbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ScrollToTop />
      <Megamenu />
      <Searchbar />
    </div>
  );
}
