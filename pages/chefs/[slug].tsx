import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { chefData } from "../../queries/chefs";

import { SanityImage } from "../../components/image/SanityImage";

// getStaticProps
export const getStaticProps: GetStaticProps = async (context) => {
  const pageProps = await chefData(context);

  return {
    props: {
      page: pageProps?.data || null,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: ["/chefs/[slug]"],
    fallback: true,
  };
}

export const Page = (data: InferGetStaticPropsType<typeof getStaticProps>) => {
  let chefObject;
  if (data?.page != undefined) {
    chefObject = data?.page;
  }

  return (
    <>
      <Head>
        <title>Chef {chefObject?.name}</title>
        <meta name="description" content="Information about specific chef" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {chefObject ? (
        <main className="pt-10">
          <div className="container columns-2 mx-auto m-10 p-10 rounded overflow-hidden shadow-xl mt-4 flex-none">
            <div>
              <SanityImage
                image={chefObject?.image}
                alt={chefObject?.name + "'s portfolio picture."}
                width={300}
              />
            </div>
            <div>
              <h1 className="font-thin">{chefObject?.name}</h1>
              <p className="font-thin text-gray-500">
                {chefObject?.microBiography}{" "}
              </p>

              <br></br>
              {chefObject?.body?.map((obj: any) => (
                <div>
                  {obj.children.map((text: any) => (
                    <div>{text.text}</div>
                  ))}
                </div>
              ))}
              <br></br>
              <p>{chefObject?.created}</p>
              <p>{chefObject?.businessLink}</p>
              <p>{chefObject?.socialMediaLink}</p>
              <p>Contact?</p>
            </div>
          </div>
          <hr></hr>
          <h2>Featured Recipes</h2>

          {/* Will need to make a card or something here to show more info about the recipe */}
          {chefObject?.featuredRecipes?.map((recipe: any, index: number) => (
            <div className="grid gap-4 grid-cols-4 row-3">
              <a href={"/recipes/" + recipe.slug.current}>{recipe.title}</a>
              <SanityImage
                image={recipe.mainImage}
                alt={recipe.title}
                width={100}
              />
            </div>
          ))}
        </main>
      ) : null}
    </>
  );
};

export default Page;
