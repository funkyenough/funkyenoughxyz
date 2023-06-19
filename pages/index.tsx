import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

// Design Inspiration https://m3.material.io/get-started

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>funkyenough's HomePage</title>
      </Head>
      <div className="p-10 bg-black text-white space-y-5">
        <Header />
        <Intro />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
