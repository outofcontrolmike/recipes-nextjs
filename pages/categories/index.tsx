import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { categoriesData } from "../../queries/categories";
import { CategoryCard } from "../../components/categoryCard";

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
  let categories = data?.page;

  return (
    <>
      <Head>
        <title>Recipes Categories</title>
        <meta
          name="description"
          content="Categories Listings from MAW Web Services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className=  "container bg-white mx-auto m-10 p-10 rounded overflow-hidden shadow-xl mt-4 flex-none">
          
          <h1>This will be categories collection</h1>
      <div className="grid gap-10 grid-cols-4">
                 {categories?.map((category: any) => {
                   return <CategoryCard category={category} post={category} />;
                 })}
               </div>
        </div>
      </main>
    </>
  );
};

export default Page;
