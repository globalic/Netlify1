import { ExampleBlog } from "../../../components/examples/ExampleBlog";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { ScrollToTop } from "../../../components/ScrollToTop";
import { CookieBanner } from "../../../components/CookieBanner";

// This is used so that the NavBar can
// style a specific link to let the
// user know which page they're on.

// We're going to pass this into the Navbar
const currentPage = "blog";

export default function Blog3Page() {
  return (
    <>
      <CookieBanner />
      <Navbar currentPage={currentPage} />
      <ExampleBlog />
      <ScrollToTop />
      <Footer />
    </>
  );
}
