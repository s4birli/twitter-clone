import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Sidebar from "@components/Sidebar";
import Feed from "@components/Feed";
import Widget from "@components/Widget";
import { fetchTweets } from "../utils/fetchTweets";
import { Tweet } from "../typings";


interface Props { 
  tweets: Tweet[]
}

const Home = ({ tweets }: Props) => {

  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed tweets={tweets}/>
        <Widget />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {

  const tweets = await fetchTweets();
  return { props: { 
    tweets
  } }
}
