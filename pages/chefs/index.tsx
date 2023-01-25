import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

import { chefsData } from "../../queries/chefs";

export const getStaticProps: GetStaticProps = async (context) => {
  const pageProps = await chefsData(context);

  return {
    props: {
      page: pageProps?.data || null,
    },
  };
};
export const Page = (data: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("data in chefs", data);
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
        <h1>Wohoo</h1>
      </main>
    </>
  );
};

export default Page;
