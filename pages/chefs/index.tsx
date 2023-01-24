import Head from "next/head";
import { useRouter } from "next/router";
import chefCard from "../../components/chefCard";
export default function Chefs() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Chefs Page</title>
        <meta name="description" content="Chef's from MAW Recipes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>Will be the chefs collection</p>
        <h1>{router.query.slug}</h1>
      </main>
    </>
  );
}
