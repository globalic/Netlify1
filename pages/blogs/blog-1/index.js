import { ExampleBlog } from "../../../components/examples/ExampleBlog";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { ScrollToTop } from "../../../components/ScrollToTop";
import { CookieBanner } from "../../../components/CookieBanner";

export default function Blog1Page() {
  return (
    <>
      <CookieBanner />
      <Navbar />
      <ExampleBlog />
      <ScrollToTop />
      <Footer />
    </>
  );
}
