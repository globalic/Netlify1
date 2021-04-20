import { ExampleBlog } from "../../components/examples/ExampleBlog";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { CookieBanner } from "../../components/CookieBanner";

export default function Blog2Page() {
  return (
    <>
      <CookieBanner />
      <Navbar />
      <ExampleBlog />
      <Footer />
    </>
  );
}
