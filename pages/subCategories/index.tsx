import Head from "next/head";
import { Inter } from "@next/font/google";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { subCategoriesData } from "../../queries/subCategories";
import { SanityImage } from "../../components/image/SanityImage";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        {subCategories ? (
          <div
            className={
              "container bg-white columns-2 mx-auto m-10 p-10 rounded overflow-hidden shadow-xl mt-4 flex-none"
            }
          >
            <h1>This will be sub Categories collection</h1>
            {subCategories?.map((subCategory: any) => (
              <div>
                <SanityImage
                  image={subCategory?.image}
                  alt={subCategory?.title}
                  width={200}
                />
                <a href={"/subCategories/" + subCategory.slug.current}>
                  {subCategory.title}
                </a>
                <p>{subCategory.description}</p>
              </div>
            ))}
          </div>
        ) : null}
      </main>
    </>
  );
};

export default Page;
