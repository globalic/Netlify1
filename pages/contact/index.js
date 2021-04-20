import Head from "next/head";
import { useState } from "react";
import { ContactForm } from "../../components/ContactForm";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { CookieBanner } from "../../components/CookieBanner";

// This is used so that the NavBar can
// style a specific link to let the
// user know which page they're on.

// We're going to pass this into the Navbar
const currentPage = "contact";

export default function ContactPage() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };
  return (
    <>
      <Head>
        <title>My Website | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CookieBanner />
      <Navbar currentPage={currentPage} />
      <div className="relative h-screen overflow-hidden text-white mx-auto max-w-screen-xl lg:pt-40 sm:pt-5">
        <div
          className="hidden absolute z-0 bg-gray-800 opacity-50 transform lg:block"
          style={{
            height: "400px",
            width: "600px",
          }}
        />

        <div
          className="hidden absolute z-0 right-0 bg-gray-800 opacity-50 transform translate-y-40 lg:block"
          style={{
            height: "400px",
            width: "600px",
          }}
        />

        <ContactForm
          handleOnSubmit={handleOnSubmit}
          handleOnChange={handleOnChange}
          inputs={inputs}
          status={status}
        />
      </div>
      <Footer />
    </>
  );
}
