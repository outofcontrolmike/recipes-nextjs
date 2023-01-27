import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { SanityImage } from "../../components/image/SanityImage";

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

  let chefs = data.page;

  console.log("chefs", chefs);
  return (
    <>
      <Head>
        <title>Chefs Page</title>
        <meta name="description" content="Chef's from MAW Recipes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to our Chef Page!</h1>
        {chefs?.map((chef: any, key: number) => (
          <div>
            <SanityImage
              image={chef?.image}
              alt="about My wife and I photo"
              width={200}
            />
            <a href={"/chefs/" + chef.slug.current}>{chef.name}</a>
            <br></br>
          </div>
        ))}
      </main>
    </>
  );
};

export default Page;
