import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>funkyenough's HomePage</title>
      </Head>
      <div className="m-10">
        <Header />
        <Intro />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
