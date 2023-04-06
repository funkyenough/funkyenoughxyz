import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Zotero from "../components/Zotero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>funkyenough's HomePage</title>
      </Head>
      <Header />
      <Zotero />
    </div>
  );
};

export default Home;
