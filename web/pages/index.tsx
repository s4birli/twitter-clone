import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "@components/Sidebar";
import Feed from "@components/Feed";
import Widget from "@components/Widget";

const Home: NextPage = () => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed />
        <Widget />
      </main>
    </div>
  );
};

export default Home;
