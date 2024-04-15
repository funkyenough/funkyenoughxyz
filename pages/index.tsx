import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import ZoteroReadingList from "../components/ZoteroReadingList";
import Skills from "../components/Skills";
// Design Inspiration https://m3.material.io/get-started

const Home: NextPage = () => {
  return (
    <div id="funkyenough" className="bg-black px-10 text-white">
      <Head>
        <title>funkyenough's HomePage</title>
      </Head>
      <Header />
      <div className="mx-auto flex max-w-2xl flex-col space-y-8">
        <div className="flex flex-row justify-center p-20 text-center text-xl">
          <div className="space-y-2">
            <p>Flaneur, Generalist.</p>
            <p>Philosopher turned Software Developer.</p>
          </div>
        </div>
        <div id="Skills" className="text-center text-lg font-bold">
          Skills
        </div>
        <Skills />
        <div id="Projects" className="text-center text-lg font-bold">
          Projects
        </div>
        <Projects />
        <div id="Reading" className="text-center text-lg font-bold">
          What I am reading lately
        </div>
        <ZoteroReadingList />
        <div id="Contact" className="text-center text-lg font-bold">
          Contact
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
