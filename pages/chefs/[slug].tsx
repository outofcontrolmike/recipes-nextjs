import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { chefData } from "../../queries/chefs";

import { SanityImage } from "../../components/image/SanityImage";

// getStaticProps
export const getStaticProps: GetStaticProps = async (context) => {
  const pageProps = await chefData(context);

  return {
    props: {
      page: pageProps?.data || null,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: ["/chefs/[slug]"],
    fallback: true,
  };
}

export const Page = (data: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("data in slug", data);

  let chefObject;
  if (data?.page != undefined) {
    chefObject = data?.page;
  }

  return (
    <>
      <Head>
        <title>Slug for Chef</title>
        <meta name="description" content="Information about specific chef" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          {chefObject ? (
            <SanityImage
              image={chefObject?.image}
              alt="about My wife and I photo"
              width={400}
            />
          ) : null}
          <p>{chefObject?.name}</p>
          <p>{chefObject?.microBiography} </p>
          <label>Chef Description:</label>
          {/* <p>{chefObject.body}</p> */}
          <p>{chefObject?.created}</p>
          <p>{chefObject?.businessLink}</p>
          <p>{chefObject?.socialMediaLink}</p>
          <p>Contact?</p>
          <h2>Featured Recipes</h2>
          <h2>Table or recipes</h2>
        </div>
      </main>
    </>
  );
};

export default Page;
