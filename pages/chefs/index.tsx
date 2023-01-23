import Head from "next/head";
import { Inter } from "@next/font/google";
import chefCard from "../../components/chefCard";
export default function Chefs() {
  return (
    <>
      <Head>
        <title>Chefs Page</title>
        <meta name="description" content="Chef's from MAW Recipes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>Will be the chefs collection</p>
      </main>
    </>
  );
}
