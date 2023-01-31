import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { recipesData } from "../../queries/recipes";
import { SanityImage } from "../../components/image/SanityImage";

// getStaticProps
export const getStaticProps: GetStaticProps = async (context) => {
  const pageProps = await recipesData(context);

  return {
    props: {
      page: pageProps?.data || null,
    },
  };
};

export const Page = (data: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("data", data);

  let recipes = data.page;
  return (
    <>
      <Head>
        <title>Recipe Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Testing Recipe Collection</h1>

        <div>
          {recipes?.map((recipe: any, key: number) => (
            <div>
              <SanityImage
                image={recipe?.mainImage}
                alt={recipe.title}
                width={200}
              />
              <a href={"/recipes/" + recipe.slug.current}>{recipe.title}</a>
              <br></br>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Page;
