import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { subCategoriesData } from "../../queries/subCategories";

// getStaticProps
export const getStaticProps: GetStaticProps = async (context) => {
  const pageProps = await subCategoriesData(context);

  return {
    props: {
      page: pageProps?.data || null,
    },
  };
};

export const Page = (data: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("data in sub categories", data);
  return (
    <>
      <Head>
        <title>Sub Category Page</title>
        <meta name="description" content="List of Sub Categories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>Testing Sub Categories Collection</h1>
        </div>
      </main>
    </>
  );
};

export default Page;
