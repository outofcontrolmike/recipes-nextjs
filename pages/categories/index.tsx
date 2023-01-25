import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { categoriesData } from "../../queries/categories";

//get static props
export const getStaticProps: GetStaticProps = async (context) => {
  const pageProps = await categoriesData(context);

  return {
    props: {
      page: pageProps?.data || null,
    },
  };
};

export const Page = (data: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("data in categories collection", data);
  return (
    <>
      <Head>
        <title>Categories</title>
        <meta
          name="description"
          content="Categories Listings from MAW Web Services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>This will be categories collection</h1>
        </div>
      </main>
    </>
  );
};

export default Page;
