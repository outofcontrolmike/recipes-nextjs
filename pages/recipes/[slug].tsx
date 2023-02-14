import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import { recipeData } from "../../queries/recipes";
import { SanityImage } from "../../components/image/SanityImage";
var slugify = require("slugify");

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
        <div
          className={
            "container bg-white columns-2 mx-auto m-10 p-10 rounded overflow-hidden shadow-xl mt-4 flex-none"
          }
        >
          {recipe ? (
            <SanityImage
              image={recipe?.mainImage}
              alt="about My wife and I photo"
              width={400}
            />
          ) : null}
          <p>Servings: {recipe?.servings}</p>

          {recipe?.author?.name ? (
            <div>
              <h2>Creator: </h2>
              <a href={"/chefs/" + slugify(recipe.author.name.toLowerCase())}>
                {recipe?.author?.name}
              </a>
            </div>
          ) : null}

          <p>Recipe Name: {recipe?.title}</p>
          <p>Prep Time: {recipe?.prepTime}</p>
          <p>Cook Time: {recipe?.cookTime}</p>
          {/* <p>
              Total Time:{" "}
              {Number.isNaN(recipe?.prepTime)
                ? (recipe.prepTime = 0)
                : recipe.prepTime}
              {Number.isNaN(recipe?.cookTime)
                ? (recipe.cookTime = 0)
                : recipe.cookTime}
              Minutes
            </p> */}
          {recipe?.note ? <p>Special Note: {recipe.note}</p> : null}

          <p>Created at: {recipe?.publishedAt}</p>
          <h2>Ingredients:</h2>
          {recipe?.ingredients?.map((obj: any) => (
            <div>
              {obj.children.map((text: any) => (
                <div>{text.text}</div>
              ))}
            </div>
          ))}
          <h2>Directions:</h2>
          {recipe?.body?.map((obj: any) => (
            <div>
              {obj.children.map((text: any) => (
                <div>{text.text}</div>
              ))}
            </div>
          ))}
          <h2>Categories: </h2>
          {recipe?.categories?.map((category: any) => (
            <div>
              <a href={"/categories/" + category.slug.current}>
                {category.title}
              </a>
              <br></br>
            </div>
          ))}
          <h2>Sub Category: </h2>
          {recipe?.subCategory?.map((category: any, index: number) => (
            <div>
              <a href={"/subCategories/" + category.slug.current}>
                {category.title}
              </a>
              <br></br>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Page;
