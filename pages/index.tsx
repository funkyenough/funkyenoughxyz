import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Zotero from "../components/Zotero";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>funkyenough's HomePage</title>
      </Head>
      <Header />
      <Intro />
      <Projects />
      <Zotero />
      <Contact />
    </div>
  );
};

export default Home;
