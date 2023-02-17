import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { subCategoriesData } from "../../queries/subCategories";
import { CategoryCard } from "../../components/categoryCard";

//get static props
export const getStaticProps: GetStaticProps = async (context) => {
  const pageProps = await subCategoriesData(context);

  return {
    props: {
      page: pageProps?.data || null,
    },
  };
};

export const SubCategories = (data: InferGetStaticPropsType<typeof getStaticProps>) => {

  let subCategories = data.page;
  return (
    <>
      <Head>
        <title>Sub Categories</title>
        <meta
          name="description"
          content="Categories Listings from MAW Web Services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Fonts */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      {subCategories ? (

      <main>
          <div
            className={
              "container bg-white mx-auto m-10 p-10 rounded overflow-hidden shadow-xl mt-4 flex-none"
            }
          >
            <h1>This will be sub Categories collection</h1>
            <div className="grid gap-10 grid-cols-4">
                 {subCategories?.map((category: any) => {
                   return <CategoryCard category={category} post={category} />;
                 })}
               </div>
          </div>
    
      </main>
          ) : null}
    </>
  );
};

export default SubCategories;
