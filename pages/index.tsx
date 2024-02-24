import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import ZoteroReadingList from "../components/ZoteroReadingList";
// Design Inspiration https://m3.material.io/get-started

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>funkyenough's HomePage</title>
      </Head>
      <div className="p-10 bg-black text-white space-y-10">
        <Header />
        <div className="flex flex-col max-w-2xl mx-auto space-y-5">
          <Intro />
          <Projects />
          <ZoteroReadingList />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
