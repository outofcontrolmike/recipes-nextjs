import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { SanityImage } from "../../components/image/SanityImage";
import { subCategoryData } from "../../queries/subCategories";


// getStaticProps
export const getStaticProps: GetStaticProps = async (context) => {
  const pageProps = await subCategoryData(context);
  return {
    props: {
      page: pageProps?.data || null,
      // relatedRecipes: recipeProps?.data || null,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: ["/subCategories/[slug]"],
    fallback: true,
  };
}

export const SubCategory = (data: InferGetStaticPropsType<typeof getStaticProps>) => {

  
  let subCategory = data?.page?.[0];

  console.log("sub Cat", subCategory);
  return (

    <>
      <Head>
        <title>Sub Category - {subCategory?.title}</title>
        <meta name="description" content="Sub Category slug" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {subCategory ?
          <div>
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
          </div> : null}
      </main>
    </>
  );
}

export default SubCategory;
