import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { SanityImage } from "../../components/image/SanityImage";
import { subCategoryData } from "../../queries/subCategories";
import { subCategoryFilteredData } from "../../queries/recipes";
import { RecipeCard } from "../../components/recipeCard";

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

  return (
    <>
      <Head>
        <title>Sub Category - {subCategory?.title}</title>
        <meta name="description" content="Sub Category slug" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {subCategory ? (
        <main>
          <div
            className={
              "container bg-white mx-auto m-10 p-10 rounded overflow-hidden shadow-xl mt-4 flex-none text-center"
            }
          >
            <SanityImage
              image={subCategory?.image}
              alt={subCategory?.alt}
              width={400}
            />
            <h1>{subCategory?.title}</h1>
            <p className="text-gray-700 text-lg">{subCategory?.description}</p>
            {/* Testing */}
            {data?.recipes ? (
              <div className="container bg-white mx-auto m-10 p-10 rounded overflow-hidden shadow-xl mt-4 flex-none text-center">
                {/* <p>Recipes Based on {categoryObject?.title}</p> */}
                <div className="grid gap-10 grid-cols-4">
                  {data?.recipes?.map((recipe: any) => {
                    return <RecipeCard recipe={recipe} post={recipe} />;
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </main>
      ) : null}
    </>
  );
};

export default SubCategory;
