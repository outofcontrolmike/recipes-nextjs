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
  let chefs = data.page;
  return (
    <>
      <Head>
        <title>Chefs Page</title>
        <meta name="description" content="Chef's from MAW Recipes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {chefs ? (
        <main>
          <div
            className={
              " columns-4 bg-white mx-auto m-10 p-10 rounded overflow-hidden  mt-4 flex-none text-center"
            }
          >
            {chefs.map((chef: any, key: number) => (
              <div className="max-w-sm rounded overflow-hidden shadow-xl mt-4 flex-none">
                <SanityImage
                  className="w-full"
                  image={chef?.image}
                  alt={chef?.title + "'s" + "picture"}
                  width={200}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {" "}
                    <a href={"/chefs/" + chef.slug.current}>{chef.name}</a>
                  </div>

                  <p className="text-gray-700 text-base">
                    {chef?.microBiography}
                  </p>
                </div>
                <br></br>
                <br></br>
              </div>
            ))}
          </div>
        </main>
      ) : null}
    </>
  );
};

export default Page;
