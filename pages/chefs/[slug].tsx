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
          <div className="container columns-2 mx-auto m-10 p-10 rounded overflow-hidden shadow-xl mt-4 flex-none bg-white ">
            <div style={{ textAlign: "-webkit-center" }}>
              <SanityImage
                image={chefObject?.image}
                alt={chefObject?.name + "'s portfolio picture."}
                width={400}
              
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
                    <div>{text.text}<br></br></div>
                  ))}
                </div>
              ))}
              <br></br>
              <span className="font-thick text-teal-500">Contributor Since: </span> <span className="font-thick text-teal-500">{chefObject?._createdAt.slice(0, 10)}
              </span>
            </div>
            <div> <a href={chefObject?.socialMediaLink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-10 h-10"
                style={{ display: "inline-block", float: "right" }}
              >
                <path
                  fill="purple"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>

              <a href={"https://www." + chefObject?.businessLink}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10" style={{ float: "right" }}
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>

              </a></div>
          </div>
          <div className="container mx-auto m-10 p-10 rounded overflow-hidden shadow-xl flex-none bg-white ">
            {/* <h2 className="font-thin">{chefObject?.name + "'s Featured Recipes"}</h2> */}
            <div className="grid gap-10 grid-cols-4">
              {/* Will need to make a card or something here to show more info about the recipe */}
              {chefObject?.featuredRecipes?.map((recipe: any, index: number) => (

                <div className="flex justify-center">
                  <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href={"/recipes/" + recipe.slug.current} data-mdb-ripple="true" data-mdb-ripple-color="light">

                      <SanityImage
                        image={recipe.mainImage}
                        alt={recipe.title}
                        width={350}
                        className="rounded-t-lg"
                      />

                    </a>
                    <div className="p-6">
                      <h5 className="text-gray-900 text-xl font-medium mb-2">{recipe.title}</h5>
                      <p className="text-gray-700 text-base mb-4">
                        {recipe?.description?.map((obj: any) => (
                          <div>
                            {obj.children.map((text: any) => (
                              <div>{text.text}<br></br></div>
                            ))}
                          </div>
                        ))}
                      </p>
                      <a href={"/recipes/" + recipe.slug.current}>
                        <button type="button" className=" inline-block px-6 py-2.5 text-white-400 bg-teal-400 font-thick text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-500 hover:text-white-100 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out">View Recipe</button>
                      </a>
                    </div>
                  </div>
                </div>


              ))}
            </div>
          </div>
        </main>
      ) : null}
    </>
  );
};

export default Page;
