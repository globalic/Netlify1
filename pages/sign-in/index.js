import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { ExampleLogin } from "../../components/examples/ExampleLogin";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>My Website | Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ExampleLogin />
      <Footer />
    </>
  );
}
