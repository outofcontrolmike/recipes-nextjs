import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { SanityImage } from "../../components/image/SanityImage";
import { subCategoryData } from "../../queries/subCategories";
import { subCategoryFilteredData } from "../../queries/recipes";
// getStaticProps
export const getStaticProps: GetStaticProps = async (context) => {
  const pageProps = await subCategoryData(context);
  const recipesProps = await subCategoryFilteredData(context);
  return {
    props: {
      page: pageProps?.data || null,
      recipes: recipesProps?.data || null,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: ["/subCategories/[slug]"],
    fallback: true,
  };
}

export const SubCategory = (
  data: InferGetStaticPropsType<typeof getStaticProps>
) => {
  let subCategory = data?.page?.[0];

  console.log("sub Cat", subCategory);
  console.log("recipes", data?.recipes);
  return (
    <>
      <Head>
        <title>Sub Category - {subCategory?.title}</title>
        <meta name="description" content="Sub Category slug" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {subCategory ? (
          <div
            className={
              "container bg-white columns-2 mx-auto m-10 p-10 rounded overflow-hidden shadow-xl mt-4 flex-none"
            }
          >
            <SanityImage
              image={subCategory?.image}
              alt={subCategory?.alt}
              width={400}
            />
            <p>{subCategory?.title}</p>
            <h1>Category Description</h1>
            <h2>{subCategory?.description}</h2>
            <hr></hr>
            <p>Related Recipes:</p>
            {data?.recipes[0].title}
          </div>
        ) : null}
      </main>
    </>
  );
};

export default SubCategory;
