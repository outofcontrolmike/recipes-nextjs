import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import { getCategoryPaths, recipeData } from "../../queries/recipes";

export const getStaticProps: GetStaticProps = async (context) => {
  const pageProps = await recipeData(context);

  return {
    props: {
      page: pageProps?.data || null,
      params: context.params,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: ["/recipes/[slug]"],
    fallback: true,
  };
}

export const Page = (data: InferGetStaticPropsType<typeof getStaticProps>) => {
  let recipe;
  if (data?.page != undefined) {
    recipe = data?.page[0];
  }
  return (
    <>
      <Head>
        <title>{recipe?.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <main className={styles.main}>
          <div>
            {/* <Image
              src={recipe?.mainImage?.asset}
              width="600"
              height="200"
              alt="Recipe Image"
            /> */}
            <p>Servings: {recipe?.servings}</p>
            <p>Creator: {recipe?.author?.name}</p>
            <br></br>
            <label>Recipe Description:</label>
            <p>Need to map over body</p>
            <br></br>
            <p>Recipe Name: {recipe?.title}</p>
            <p>Prep Time: {recipe?.prepTime}</p>
            <p>Cook Time: {recipe?.cookTime}</p>
            <p>
              Total Time:{" "}
              {parseFloat(recipe?.prepTime) +
                parseFloat(recipe?.cookTime) +
                " "}
              Minutes
            </p>
            <p>Special Note: {recipe?.note}</p>
            <p>Created at: {recipe?.publishedAt}</p>
            <p>Need to map over ingredients </p>
            <p>need to map over directions</p>
            <p>Need to map over categories and subcategories. </p>
          </div>
        </main>
      </main>
    </>
  );
};

export default Page;
