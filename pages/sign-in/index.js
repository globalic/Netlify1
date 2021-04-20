import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { ExampleLogin } from "../../components/examples/ExampleLogin";

// This is used so that the NavBar can
// style a specific link to let the
// user know which page they're on.

// We're going to pass this into the Navbar
const currentPage = "sign-in";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>My Website | Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentPage={currentPage} />
      <ExampleLogin />
      <Footer />
    </>
  );
}
