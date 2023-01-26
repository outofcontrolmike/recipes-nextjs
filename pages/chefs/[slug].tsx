import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { chefData } from "../../queries/chefs";

import { useNextSanityImage } from "next-sanity-image";
import { configuredSanityClient } from "../../lib/newSanity";

// getStaticProps
export const getStaticProps: GetStaticProps = async (context) => {
  const pageProps = await chefData(context);

  return {
    props: {
      page: pageProps?.data || null,
      params: context.params,
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

  const imageProps = useNextSanityImage(configuredSanityClient, data.image);
  let chefObject = data?.page;
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
          <Image
            src={data?.image?.asset?.ref}
            width="600"
            height="400"
            alt="about My wife and I photo"
          />
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
