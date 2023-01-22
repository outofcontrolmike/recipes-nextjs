import Head from "next/head";
import { Inter } from "@next/font/google";

export default function Chefs() {
  return (
    <>
      <Head>
        <title>Chefs Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline bg-red-500"> Hello World!</h1>
      <main>
        <div>
          <h1>Will be chefs collection</h1>
        </div>
      </main>
    </>
  );
}
