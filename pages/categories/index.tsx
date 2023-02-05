import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { categoriesData } from "../../queries/categories";
import { SanityImage } from "../../components/image/SanityImage";

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
  let categories = data.page;

  console.log("categores map", categories);

  return (
    <>
      <Head>
        <title>Categories</title>
        <meta
          name="description"
          content="Categories Listings from MAW Web Services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>This will be categories collection</h1>
          {categories?.map((category: any) => (
            <div>
              <SanityImage
                image={category?.image}
                alt={category?.title}
                width={200}
              />
              <a href={"/categories/" + category.slug.current}>
                {category.title}
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Page;
