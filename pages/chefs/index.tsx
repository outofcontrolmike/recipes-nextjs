import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { SanityImage } from "../../components/image/SanityImage";

import { chefsData } from "../../queries/chefs";
import styles from "../../styles/Home.module.css";

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
      <main className={"container columns-4 mx-auto m-10 p-10 rounded overflow-hidden shadow-xl mt-4 flex-none"}>
        {chefs?.map((chef: any, key: number) => (
          <div  className="max-w-sm rounded overflow-hidden shadow-xl mt-4 flex-none bg-white">
            <SanityImage
            className="w-full"
              image={chef?.image}
              alt="about My wife and I photo"
              width={200}
            />
              <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">         <a href={"/chefs/" + chef.slug.current}>{chef.name}</a></div>

              <p className="text-gray-700 text-base">
      {chef?.microBiography}
    </p>
            </div>
            <br></br>
            <br></br>
          </div>
        
        ))}
      </main>
    </>
  );
};

export default Page;
