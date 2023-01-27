import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { subCategoriesData } from "../../queries/subCategories";

//get static props
export const getStaticProps: GetStaticProps = async (context) => {
  const pageProps = await subCategoriesData(context);

  return {
    props: {
      page: pageProps?.data || null,
    },
  };
};

export const Page = (data: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("data in Categories collection", data);
  return (
    <>
      <Head>
        <title>sub Categories</title>
        <meta
          name="description"
          content="Categories Listings from MAW Web Services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>This will be sub Categories collection</h1>
        </div>
      </main>
    </>
  );
};

export default Page;
