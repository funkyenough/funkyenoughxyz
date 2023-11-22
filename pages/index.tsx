import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Design Inspiration https://m3.material.io/get-started

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>funkyenough's HomePage</title>
      </Head>
      <div className="p-10 bg-black text-white space-y-5">
        <Header />
        <div className="max-w-xl mx-auto">
          <Intro />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
